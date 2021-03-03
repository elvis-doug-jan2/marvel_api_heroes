import { Body, Controller, Get, Post, HttpException } from '@nestjs/common'
import { UsersService } from './users.service'
import { UserDTO } from './users.dto'
import { ApiResponse } from '@nestjs/swagger'
import { createdSuccessResponseDTO } from 'src/utils/successCreated.util.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 201, type: createdSuccessResponseDTO })
  @ApiResponse({ status: 400, type: Error })
  createNewUser(@Body() userData: UserDTO): Promise<createdSuccessResponseDTO | Error> {
    return this.usersService.createNewUser(userData)
  }

  @Get()
  @ApiResponse({ status: 201, type: [UserDTO] })
  getAllUsers(): Promise<UserDTO[]> {
    return this.usersService.getAllUsers()
  }
}
