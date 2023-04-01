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

	@Column({ nullable: false })
	name:string

	@Column({ nullable: false, unique: true })
	email: string
	
	@Column({ nullable: false })
	password:string

	@Column({ nullable: false })
	phone:string

	@CreateDateColumn()
	createdAt: Date;

	@OneToMany(() => Contacte, (contacte) => contacte.user)
	contactes: Contacte;
}
