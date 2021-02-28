import { Controller, Get } from '@nestjs/common'
import { HeroesService } from './heroes.service'

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  getHello(): string {
    return this.heroesService.getHello()
  }
}
