import { Body, Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'
import { IUserCreated } from './user.interface'
import { UserDTO } from './user.dto'
import { ApiResponse } from '@nestjs/swagger'
import { createdSuccessResponse } from 'src/utils/successCreated.util.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello()
  }

  @Post()
  @ApiResponse({ status: 201, type: createdSuccessResponse })
  createNewUser(@Body() userData: UserDTO): Promise<IUserCreated> {
    return this.usersService.createNewUser(userData)
  }
}
