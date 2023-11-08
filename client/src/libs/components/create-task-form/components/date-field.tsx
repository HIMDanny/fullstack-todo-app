import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { type Dayjs } from 'dayjs';

type Properties = {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  disabled?: boolean;
};

const DateField: React.FC<Properties> = ({
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Task Date"
        format="YYYY.MM.DD"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export { DateField };
