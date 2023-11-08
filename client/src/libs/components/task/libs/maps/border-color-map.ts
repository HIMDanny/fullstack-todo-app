import { Priority } from '../../../../enums/enums';

const borderColorMap = {
  [Priority.LOW]: 'info.light',
  [Priority.NORMAL]: 'grey.900',
  [Priority.HIGH]: 'error.light',
};

export { borderColorMap };
