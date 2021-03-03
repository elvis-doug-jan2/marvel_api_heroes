import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { UserProvider } from './users.provider'
import { UserRepository } from './user.repository'
import { DatabaseModule } from '../../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UserProvider, UserRepository],
  exports: [UserProvider],
})
export class UsersModule {}
