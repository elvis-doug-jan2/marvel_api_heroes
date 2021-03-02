import { Document } from 'mongoose'

export interface IUser extends Document {
  password: string
  email: string
  firstName: string
  lastName: string
  recoveryToken: string
  changeToken: string
}

export interface IUserCreated {
  success: boolean
  message: string
}
