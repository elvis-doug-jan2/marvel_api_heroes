import * as mongoose from 'mongoose'

const databaseURL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/${process.env.DB_DATABASE}?authSource=admin`

export const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> => {
    return mongoose.connect(databaseURL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  },
}
