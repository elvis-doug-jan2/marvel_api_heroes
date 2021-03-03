import * as mongoose from 'mongoose'
import config from '../config/env.config'

export const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> => {
    return mongoose.connect(config.database.url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  },
}
