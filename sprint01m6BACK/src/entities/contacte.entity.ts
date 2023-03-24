import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import { User } from "./user.entity";

@Entity("contactes")
export class Contacte {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.contactes)
  user: User;
}
