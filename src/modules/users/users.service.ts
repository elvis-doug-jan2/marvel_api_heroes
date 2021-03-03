import { Injectable } from '@nestjs/common'
import { createdSuccessResponseDTO } from 'src/utils/successCreated.util.dto'
import { UserRepository } from './user.repository'
import { UserDTO } from './users.dto'

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async createNewUser(userData: UserDTO): Promise<createdSuccessResponseDTO | Error> {
    return this.userRepository
      .create(userData)
      .then(() => ({
        success: true,
        message: 'User created successfully!',
      }))
      .catch((error) => {
        throw new Error(error)
      })
  }

  async getAllUsers(): Promise<UserDTO[]> {
    return this.userRepository.getAll()
  }
}
