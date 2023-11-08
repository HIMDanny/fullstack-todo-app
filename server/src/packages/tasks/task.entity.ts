import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Priority, Status } from '../../libs/enums/enums';

@Entity()
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  title: string;

  @Column({
    type: 'datetime',
  })
  date: Date;

  @Column({
    type: 'longtext',
  })
  description: string;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.NORMAL,
  })
  priority: typeof Priority;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TODO,
  })
  status: typeof Status;
}

export { Task };
