import { Alert, AlertTitle, Snackbar } from '@mui/material';

type Properties = {
  open: boolean;
  onClose: () => void;
};

const SuccessCreationSnackbar: React.FC<Properties> = ({ open, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      onClose={onClose}
    >
      <Alert
        severity="success"
        elevation={1}
        onClose={onClose}
      >
        <AlertTitle>Success</AlertTitle>
        The task has been created successfully.
      </Alert>
    </Snackbar>
  );
};

export { SuccessCreationSnackbar };
