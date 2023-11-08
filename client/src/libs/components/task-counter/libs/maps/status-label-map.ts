import { Status } from '../../../../enums/enums';

const statusLabelMap = {
  [Status.TODO]: "Todo's",
  [Status.IN_PROGRESS]: 'In Progress',
  [Status.COMPLETED]: 'Completed',
};

export { statusLabelMap };
