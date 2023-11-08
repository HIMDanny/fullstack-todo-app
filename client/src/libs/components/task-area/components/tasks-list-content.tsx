import { Alert, LinearProgress } from '@mui/material';
import { type TaskItemResponseDto } from '../../../types/types';
import { Status } from '../../../enums/enums';
import { Task } from '../../task/task';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../helpers/helpers';

type Properties = {
  tasks: TaskItemResponseDto[] | undefined;
  error: Error | null;
  isLoading: boolean;
};

const TasksListContent: React.FC<Properties> = ({
  tasks,
  error,
  isLoading,
}) => {
  const queryClient = useQueryClient();
  const { mutate: updateTask } = useMutation({
    mutationFn: (data: { id: string; status?: string; priority?: string }) => {
      const updateData: { status?: string; priority?: string } = {};

      if (data.status) {
        updateData.status = data.status;
      }

      if (data.priority) {
        updateData.priority = data.priority;
      }

      return api<TaskItemResponseDto>(`/tasks/${data.id}`, 'PUT', updateData);
    },
    onSuccess: (updatedTask) => {
      const tasks =
        queryClient.getQueryData<TaskItemResponseDto[]>(['tasks']) ?? [];

      const updatedTasks = tasks.map((task) =>
        task.id === updatedTask.id
          ? {
              ...task,
              status: updatedTask.status,
              priority: updatedTask.priority,
            }
          : task,
      );
      queryClient.setQueryData(['tasks'], updatedTasks);
    },
  });

  const handleStatusChange = (id: string, isInProgress: boolean) => {
    updateTask({ id, status: isInProgress ? Status.IN_PROGRESS : Status.TODO });
  };

  const handlePriorityChange = (id: string, priority: string) => {
    updateTask({ id, priority });
  };

  const handleTaskComplete = (id: string) => {
    updateTask({ id, status: Status.COMPLETED });
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <Alert severity="error">There was an error fetching your tasks.</Alert>
    );
  }

  if (!error && Array.isArray(tasks) && tasks.length === 0) {
    return (
      <Alert severity="warning">
        You do not have any tasks yet. Start by creating some.
      </Alert>
    );
  }

  if (!tasks) {
    return null;
  }

  return tasks
    .filter(
      (task) =>
        task.status === Status.TODO || task.status === Status.IN_PROGRESS,
    )
    .map((task) => (
      <Task
        key={task.id}
        id={task.id}
        priority={task.priority}
        status={task.status}
        title={task.title}
        description={task.description}
        date={new Date(task.date)}
        onComplete={handleTaskComplete}
        onStatusChange={handleStatusChange}
        onPriorityChange={handlePriorityChange}
      />
    ));
};

export { TasksListContent };
