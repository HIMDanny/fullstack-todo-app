import { Stack } from '@mui/material';
import {
  type DescriptionProperties,
  TaskDescription,
} from './components/task-description';
import { type FooterProperties, TaskFooter } from './components/task-footer';
import { type HeaderProperties, TaskHeader } from './components/task-header';
import { borderColorMap } from './libs/maps/border-color-map';
import { Priority } from '../../enums/enums';
import { ValueOf } from '../../types/types';

type Properties = HeaderProperties &
  DescriptionProperties &
  FooterProperties & {
    priority: string;
  };

const Task: React.FC<Properties> = ({
  id,
  title,
  date,
  description,
  onComplete,
  onStatusChange,
  onPriorityChange,
  priority,
  status,
}) => {
  return (
    <Stack
      p={3}
      sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        border: '1px solid',
        borderColor: borderColorMap[priority as ValueOf<typeof Priority>],
      }}
    >
      <TaskHeader
        title={title}
        date={date}
      />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        priority={priority}
        onComplete={onComplete}
        onStatusChange={onStatusChange}
        onPriorityChange={onPriorityChange}
      />
    </Stack>
  );
};

export { Task };
