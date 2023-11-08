import { TextField, TextFieldProps } from '@mui/material';

const DescriptionField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      id="description"
      name="description"
      label="Task Description"
      placeholder="Task Description"
      size="small"
      multiline
      rows={4}
      {...props}
    />
  );
};

export { DescriptionField };
