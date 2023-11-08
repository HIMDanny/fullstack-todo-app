import { Avatar, Stack, Typography } from '@mui/material';
import { Status } from '../../enums/enums';
import { borderColorMap } from './libs/maps/border-color-map';
import { statusLabelMap } from './libs/maps/status-label-map';

type Properties = {
  count: number;
  status: (typeof Status)[keyof typeof Status];
};

const TaskCounter: React.FC<Properties> = ({ count, status }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          bgcolor: 'transparent',
          border: '5px solid',
          borderColor: borderColorMap[status],
          width: 96,
          height: 96,
          mb: 2,
        }}
      >
        <Typography
          color="#fff"
          variant="h4"
        >
          {count}
        </Typography>
      </Avatar>
      <Typography
        color="#fff"
        fontWeight={700}
        fontSize={20}
        variant="h5"
      >
        {statusLabelMap[status]}
      </Typography>
    </Stack>
  );
};

export { TaskCounter };
