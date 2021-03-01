import { Connection } from 'mongoose'
import { UserSchema } from './users.model'

export const UserProvider = {
  provide: 'USER_MODEL',
  useFactory: (connection: Connection) => connection.model('users', UserSchema),
  inject: ['DATABASE_CONNECTION'],
}
