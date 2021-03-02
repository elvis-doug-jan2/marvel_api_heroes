import { Injectable } from '@nestjs/common'
import { IsUppercase } from 'class-validator'
import { UserDTO } from './user.dto'
import { IUserCreated } from './user.interface'

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Modulo users!'
  }

  async createNewUser(userData: UserDTO): Promise<IUserCreated> {
    return {
      message: 'DEU BOM',
      success: true,
    }
  }
}
