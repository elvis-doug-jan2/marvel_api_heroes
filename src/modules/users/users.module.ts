import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { UserProvider } from './users.provider'
import { DatabaseModule } from '../../database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UserProvider],
  exports: [UserProvider],
})
export class UsersModule {}
