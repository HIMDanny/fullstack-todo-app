import { Box, Chip, Typography } from '@mui/material';
import dayjs from 'dayjs';

type Properties = {
  title: string;
  date: Date;
};

const TaskHeader: React.FC<Properties> = ({ title, date }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mb={4}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={dayjs(date).format('LL')}
        />
      </Box>
    </Box>
  );
};

export { TaskHeader, type Properties as HeaderProperties };
