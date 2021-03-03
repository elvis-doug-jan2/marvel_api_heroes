import { Connection } from 'mongoose'
import { UserSchema } from './users.schema'

export const UserProvider = {
  provide: 'USER',
  useFactory: (connection: Connection) => connection.model('users', UserSchema),
  inject: ['DATABASE_CONNECTION'],
}
