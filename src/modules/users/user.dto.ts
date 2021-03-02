import { IsNotEmpty, IsString, IsOptional, IsEmail } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  surname: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  phone: string
}
