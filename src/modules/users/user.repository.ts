import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { decrypt } from 'src/utils/criptPass.util'
import { UserDTO } from './users.dto'
import { IUser } from './users.interface'

export class UserRepository {
  constructor(
    @Inject('USER')
    private readonly userModel: Model<IUser>,
  ) {}

  async create(userData: UserDTO): Promise<any> {
    return this.userModel.create(userData)
  }

  async getAll(): Promise<any> {
    return this.userModel
      .find()
      .lean()
      .then((users: UserDTO[]) => {
        return users.map((user) => {
          delete user.password

          return {
            ...user,
            email: decrypt(user.email),
          }
        })
      })
  }
}
