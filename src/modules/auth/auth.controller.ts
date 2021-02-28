import { Controller, Get } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello()
  }
}
