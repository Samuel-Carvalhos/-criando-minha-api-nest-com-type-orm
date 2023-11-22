import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
exports class PersonModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ lenght: 120 })
    name: string;

    @Column('int')
    age: number;

    @Column({ length: 255 })
    email: string;
}