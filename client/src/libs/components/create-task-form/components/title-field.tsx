import { TextField, TextFieldProps } from '@mui/material';

const TitleField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Task Title"
      size="small"
      {...props}
    />
  );
};

export { TitleField };
