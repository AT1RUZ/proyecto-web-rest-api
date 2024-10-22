import { Role } from 'src/auth/enums/role.enum';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  lastname: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({type: 'int'})
  age: number

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum' , enum: Role, default: Role.USER})
  permiso: string;
}

 

  
