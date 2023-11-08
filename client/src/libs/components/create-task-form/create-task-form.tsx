import { Button, LinearProgress, Stack, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { Priority, Status } from '../../enums/enums';
import { api } from '../../helpers/helpers';
import {
  type TaskItemResponseDto,
  type CreateTaskRequestDto,
  type ValueOf,
} from '../../types/types';
import {
  DateField,
  DescriptionField,
  SuccessCreationSnackbar,
  TitleField,
} from './components/components';
import { SelectField } from '../select-field/select-field';

const statusItems = [
  {
    label: Status.TODO.toUpperCase(),
    value: Status.TODO,
  },
  {
    label: Status.IN_PROGRESS.toUpperCase(),
    value: Status.IN_PROGRESS,
  },
];

const priorityItems = Object.values(Priority).map((value) => ({
  value: value,
  label: value,
}));

const CreateTaskForm = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState<ValueOf<typeof Status>>(Status.TODO);
  const [priority, setPriority] = useState<ValueOf<typeof Priority>>(
    Priority.NORMAL,
  );
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const {
    mutate: createTask,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data: CreateTaskRequestDto) =>
      api<TaskItemResponseDto>('/tasks', 'POST', data),
    onSuccess: (createdTask) => {
      const tasks =
        queryClient.getQueryData<TaskItemResponseDto[]>(['tasks']) ?? [];
      queryClient.setQueryData(['tasks'], [createdTask, ...tasks]);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setSnackbarOpen(true);
    }
  }, [isSuccess]);

  const isFormValid = title.trim() !== '' && description.trim() !== '' && date;

  const handleCreateTask = () => {
    if (!isFormValid) {
      return;
    }

    const task = {
      title,
      description,
      date: date!.toISOString(),
      status,
      priority,
    };

    createTask(task);
  };

  return (
    <>
      <SuccessCreationSnackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
      />
      <Stack
        width="100%"
        px={4}
        my={6}
      >
        <Typography
          mb={2}
          component="h2"
          variant="h6"
        >
          Create a Task
        </Typography>
        <Stack spacing={2}>
          <TitleField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isPending}
          />
          <DescriptionField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isPending}
          />
          <DateField
            value={date}
            onChange={(value) => setDate(value)}
            disabled={isPending}
          />
          <Stack
            direction="row"
            spacing={2}
          >
            <SelectField
              label="Status"
              id="status"
              name="status"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as ValueOf<typeof Status>)
              }
              items={statusItems}
              disabled={isPending}
            />
            <SelectField
              label="Priority"
              id="priority"
              name="priority"
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value as ValueOf<typeof Priority>)
              }
              items={priorityItems}
              disabled={isPending}
            />
          </Stack>
          {isPending && <LinearProgress />}
          {!isPending && (
            <Button
              onClick={handleCreateTask}
              variant="contained"
              size="large"
              sx={{ color: 'common.white' }}
              disabled={!isFormValid}
            >
              Create a Task
            </Button>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export { CreateTaskForm };
