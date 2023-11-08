import { Grid } from '@mui/material';
import { Sidebar } from '../../libs/components/sidebar/sidebar';
import { TaskArea } from '../../libs/components/task-area/task-area';

const Dashboard = () => {
  return (
    <Grid
      container
      minHeight="100vh"
    >
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};

export { Dashboard };
