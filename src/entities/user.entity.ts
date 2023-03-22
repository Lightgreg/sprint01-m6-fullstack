import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	OneToMany,
} from "typeorm";
import { Contacte } from "./contacte.entity";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name:string

	@Column({ unique: true })
	email:string

	@Column()
	phone:string

	@CreateDateColumn()
	createdAt: Date;

	@OneToMany(() => Contacte, (contacte) => contacte.user)
	contactes: Contacte;
}
