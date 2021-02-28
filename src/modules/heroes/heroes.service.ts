import { Injectable } from '@nestjs/common'

@Injectable()
export class HeroesService {
  getHello(): string {
    return 'Modulo heroes!'
  }
}
