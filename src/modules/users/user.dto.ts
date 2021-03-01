import { IsNotEmpty, IsString, IsOptional, IsEmail, IsIn } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'

export class CreateCompanyUserDTO {
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
  @IsString()
  @IsOptional()
  document: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  country_code: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  office: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  area_code: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  phone: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  avatar: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @IsIn(['USER', 'ADMINISTRATOR'])
  type: string
}

@Exclude()
export class ResponseCompanyUserDTO {
  @ApiProperty()
  @Expose()
  _id: string

  @ApiProperty()
  @Expose()
  name: string

  @ApiProperty()
  @Expose()
  surname: string

  @ApiProperty()
  @Expose()
  country_code: string

  @ApiProperty()
  @Expose()
  area_code: string

  @ApiProperty()
  @Expose()
  phone: string

  @ApiProperty()
  @Expose()
  document: string

  @ApiProperty()
  @Expose()
  user_id: string

  @ApiProperty()
  @Expose()
  status: string

  @ApiProperty()
  @Expose()
  type: string

  @ApiProperty()
  @Expose()
  created_at: string

  @ApiProperty()
  @Expose()
  updated_at: string
}

export class DisableUserDTO {
  @ApiProperty()
  @IsIn(['ACTIVE', 'DISABLED'])
  @IsString()
  @IsNotEmpty()
  status: string
}

export class InviteFriendDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string
}

export class UpdateCompanyUserDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  surname: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  country_code: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  area_code: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  document: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  avatar: string
}
