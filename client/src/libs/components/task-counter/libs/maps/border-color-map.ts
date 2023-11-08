import { Status } from '../../../../enums/enums';

const borderColorMap = {
  [Status.TODO]: 'error.light',
  [Status.IN_PROGRESS]: 'warning.light',
  [Status.COMPLETED]: 'success.light',
};

export { borderColorMap };
