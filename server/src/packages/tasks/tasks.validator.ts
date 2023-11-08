import { body, param, type ValidationChain } from 'express-validator';
import { Priority, Status } from '../../libs/enums/enums';

const createTask: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task title is mandatory.')
    .trim()
    .isString()
    .withMessage('Title needs to be in text format.'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date is mandatory.')
    .isString()
    .withMessage('The date deeds to be a valid date format.'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be in text format.'),
  body('priority')
    .trim()
    .isIn(Object.values(Priority))
    .withMessage(`Priority can only be ${Object.values(Priority).join(', ')}`),
  body('status')
    .trim()
    .isIn(Object.values(Status))
    .withMessage(`Status can only be ${Object.values(Status).join(', ')}`),
];

const updateTask: ValidationChain[] = [
  param('id')
    .notEmpty()
    .withMessage('The task id is mandatory.')
    .trim()
    .isUUID()
    .withMessage('ID needs to be a valid uuid format.'),
  body('status')
    .trim()
    .isIn(Object.values(Status))
    .withMessage(`Status can only be ${Object.values(Status).join(', ')}`)
    .optional(),
  body('priority')
    .trim()
    .isIn(Object.values(Priority))
    .withMessage(`Priority can only be ${Object.values(Priority).join(', ')}`)
    .optional(),
];

export { createTask as createTaskValidator, updateTask as updateTaskValidator };
