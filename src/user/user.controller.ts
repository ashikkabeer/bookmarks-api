import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator'; // Fix: Corrected the file path
import { JWtGuard } from '../auth/guard'; // Fix: Corrected the file path
import { EditUserDto } from './dot';
import { UserService } from './user.service';

@UseGuards(JWtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser('id') user: User) {
    return user;
  }
  @Patch('me')
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
