import { Box, Typography } from '@mui/material';

type Properties = {
  description: string;
};

const TaskDescription: React.FC<Properties> = ({ description }) => {
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export { TaskDescription, type Properties as DescriptionProperties };
