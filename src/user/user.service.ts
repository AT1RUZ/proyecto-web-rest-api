import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.id = createUserDto.id;
    user.name = createUserDto.name;
    user.lastname = createUserDto.lastname;
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.age = createUserDto.age;
    user.password = createUserDto.password;
    user.permiso = createUserDto.permiso;
    return this.userRepository.save(user);
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  viewUserID(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  viewUserByUser(username: string): Promise<User>{
    return this.userRepository.findOneBy({username})
  }
  viewUserByEmail(email: string): Promise<User>{
    return this.userRepository.findOneBy({email})
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.id = id;
    user.name = updateUserDto.name;
    user.lastname = updateUserDto.lastname;
    user.username = updateUserDto.username;
    user.email = updateUserDto.email;
    user.age = updateUserDto.age;
    user.password = updateUserDto.password;
    return this.userRepository.save(user);
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
