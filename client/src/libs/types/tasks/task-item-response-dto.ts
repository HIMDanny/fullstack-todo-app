import { Priority, Status } from '../../enums/enums';
import { ValueOf } from '../types';

type TaskItemResponseDto = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: ValueOf<typeof Status>;
  priority: ValueOf<typeof Priority>;
};

export { type TaskItemResponseDto };
