import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { Role } from 'src/auth/enums/role.enum';
import { ActiveUser } from 'src/auth/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/auth/interfaces/active-user.interface';

/**
 * whatever the string pass in controller decorator it will be appended to
 * API URL. to call any API from this controller you need to add prefix which is
 * passed in controller decorator.
 * in our case our base URL is http://localhost:3000/user
 */

@Controller('user')

export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @Auth(Role.USER_ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @Auth(Role.USER_ADMIN)
  findAll(
    @ActiveUser()
    user: ActiveUserInterface,
  ) {
    console.log(user);
    return this.userService.findAllUser();
  }
  @Get('/id/:id')
  @Auth(Role.USER_ADMIN)
  findOne(@Param('id') id: string) {
    console.log('USER BY ID');
    return this.userService.viewUserID(+id);
  }
  @Put(':id')
  @Auth(Role.USER_ADMIN)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  /**
   * we have used Delete decorator with id param to get id from request
   * so the API URL will be
   * DELETE http://localhost:3000/user/:id
   */
  @Delete(':id')
  @Auth(Role.USER_ADMIN)
  remove(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }

  @Get("/register/:email")
  findOneEmailRegister(@Param('email') email: string) {
    return this.userService.viewUserByEmail(email);
  }

  // @Get(':user')
  // @Auth(Role.ADMIN)
  // findUser(@Param('user') user: string) {
  //   return this.userService.viewUserByUser(user);
  // }

  @Get(':email')
  @Auth(Role.USER_ADMIN)
  findUserEmail(@Param('email') email: string) {
    console.log('USER BY EMAIL');
    return this.userService.viewUserByEmail(email);
  }
}
