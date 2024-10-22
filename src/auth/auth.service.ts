import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register({
    name,
    lastname,
    username,
    email,
    password,
    age,
    permiso,
  }: RegisterDto) {
    const user = await this.userService.viewUserByEmail(email);

    if (user) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const id = Math.floor(100000 + Math.random() * 900000);

    await this.userService.createUser({
      id,
      name,
      lastname,
      username,
      email,
      age,
      password: hashedPassword,
      permiso,
    });

    return {
      message: 'User created successfully',
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.viewUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      email: user.email,
      role: user.permiso,
    };
    const token = await this.jwtService.signAsync(payload);

    return {
      token: token,
      email: user.email,
      role:  user.permiso,

    };
  }
}
