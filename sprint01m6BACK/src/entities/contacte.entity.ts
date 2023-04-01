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

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  email: string

  @Column({ nullable: false })
  phone: string

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.contactes)
  user: User;
}
