import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Roles } from './decorators/roles.decorators';
import { RolesGuard } from './guard/roles.guard';
import { Role } from './enums/role.enum';
import { Auth } from './decorators/auth.decorators';

interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('user')
  @Roles(Role.USER)
  @UseGuards(AuthGuard, RolesGuard)
  profile(
    @Request()
    req: RequestWithUser,
  ) {
    return req.user;
  }

  @Get('admin')
  @Auth(Role.ADMIN)
  profile2(
    @Request()
    req: RequestWithUser,
  ) {
    return req.user;
  }
}
