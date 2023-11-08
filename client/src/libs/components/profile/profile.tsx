import { Avatar, Stack, Typography } from '@mui/material';

type Properties = {
  name: string;
};

const Profile: React.FC<Properties> = ({ name }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: 96,
          height: 96,
          bgcolor: 'primary.main',
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          color="text.primary"
        >
          {name.substring(0, 1)}
        </Typography>
      </Avatar>
      <Typography
        variant="h6"
        color="text.primary"
      >
        Welcome, {name}
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
      >
        This is your personal tasks manager
      </Typography>
    </Stack>
  );
};

export { Profile };
