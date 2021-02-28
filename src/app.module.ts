import { Module } from '@nestjs/common'
import { AuthModule } from './modules/auth/auth.module'
import { HeroesModule } from './modules/heroes/heroes.module'
import { UsersModule } from './modules/users/users.module'

@Module({
  imports: [AuthModule, HeroesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
