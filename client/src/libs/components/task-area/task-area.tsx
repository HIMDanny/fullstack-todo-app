import { Box, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { TaskCounter } from '../task-counter/task-counter';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../helpers/helpers';
import { type TaskItemResponseDto } from '../../types/types';
import { TasksListContent } from './components/components';
import { countTasks } from './libs/helpers/helpers';
import { Status } from '../../enums/enums';

const TaskArea = () => {
  const {
    data: tasks,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => api<TaskItemResponseDto[]>('/tasks', 'GET'),
  });

  return (
    <Grid
      item
      md={8}
      px={4}
    >
      <Box
        mb={8}
        px={4}
      >
        <h2>
          Status Of Your Tasks As On{' '}
          {dayjs(new Date()).format('dddd, MMMM D, YYYY')}
        </h2>
      </Box>
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          container
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter
            count={countTasks(tasks ?? [], Status.TODO)}
            status={Status.TODO}
          />
          <TaskCounter
            count={countTasks(tasks ?? [], Status.IN_PROGRESS)}
            status={Status.IN_PROGRESS}
          />
          <TaskCounter
            count={countTasks(tasks ?? [], Status.COMPLETED)}
            status={Status.COMPLETED}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          gap={4}
          mb={4}
          xs={10}
          md={8}
        >
          <TasksListContent
            tasks={tasks}
            error={error}
            isLoading={isLoading}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export { TaskArea };
