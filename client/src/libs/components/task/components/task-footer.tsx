import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
} from '@mui/material';
import { Priority, Status } from '../../../enums/enums';
import { SelectField } from '../../select-field/select-field';

const priorityItems = Object.values(Priority).map((value) => ({
  value: value,
  label: value,
}));

type Properties = {
  id: string;
  status: string;
  priority: string;
  onStatusChange: (id: string, checked: boolean) => void;
  onPriorityChange: (id: string, priority: string) => void;
  onComplete: (id: string) => void;
};

const TaskFooter: React.FC<Properties> = ({
  id,
  status,
  priority,
  onStatusChange,
  onPriorityChange,
  onComplete,
}) => {
  return (
    <Stack
      direction="row"
      gap={2}
      alignItems="center"
      mt={4}
    >
      <Box>
        <SelectField
          id="priority"
          name="priority"
          label="Priority"
          value={priority}
          items={priorityItems}
          onChange={(e) => onPriorityChange(id, e.target.value)}
        />
      </Box>
      <FormGroup>
        <FormControlLabel
          label="In Progress"
          control={
            <Switch
              color="warning"
              checked={status === Status.IN_PROGRESS}
              onChange={(e) => onStatusChange(id, e.target.checked)}
            />
          }
        />
      </FormGroup>
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={() => onComplete(id)}
        sx={{
          color: '#fff',
          marginLeft: 'auto',
        }}
      >
        Mark Complete
      </Button>
    </Stack>
  );
};

export { TaskFooter, type Properties as FooterProperties };
