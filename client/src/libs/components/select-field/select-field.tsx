import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from '@mui/material';

type SelectItem = {
  value: string;
  label: string;
};

type Properties = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  items: SelectItem[];
  disabled?: boolean;
};

const SelectField: React.FC<Properties> = ({
  label,
  id,
  name,
  value,
  onChange,
  items,
  disabled = false,
}) => {
  return (
    <FormControl
      size="small"
      fullWidth
      disabled={disabled}
    >
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        label={label}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      >
        {items.map(({ value, label }) => (
          <MenuItem
            key={value}
            value={value}
          >
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { SelectField };
