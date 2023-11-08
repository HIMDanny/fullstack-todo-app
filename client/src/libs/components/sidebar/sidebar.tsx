import { Grid } from '@mui/material';
import { Profile } from '../profile/profile';
import { CreateTaskForm } from '../create-task-form/create-task-form';

const Sidebar = () => {
  return (
    <Grid
      item
      md={4}
      px={4}
      sx={{
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Profile name="Danny" />
      <CreateTaskForm />
    </Grid>
  );
};

export { Sidebar };
