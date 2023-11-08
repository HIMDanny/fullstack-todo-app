import { Status } from '../../../../enums/enums';
import { TaskItemResponseDto, ValueOf } from '../../../../types/types';

const countTasks = (
  tasks: TaskItemResponseDto[],
  status: ValueOf<typeof Status>,
): number => {
  return tasks.reduce(
    (sum, task) => (task.status === status ? sum + 1 : sum),
    0,
  );
};

export { countTasks };
