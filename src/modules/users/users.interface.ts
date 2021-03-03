import { Document } from 'mongoose'

export interface IUser extends Document {
  password: string
  email: string
  name: string
  surName: string
  phone: string
}

export interface IUserCreated {
  success: boolean
  message: string
}
