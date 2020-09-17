module.exports = {
  type: 'postgres',
  url: process.env.APP_DATABASE_URL,
  entities: [
    `./${process.env.APP_PROD_OR_DEV}/modules/**/infra/typeorm/entities/*.${process.env.APP_EXTENSION}`,
  ],
  migrations: [
    `./${process.env.APP_PROD_OR_DEV}/shared/infra/typeorm/migrations/*.${process.env.APP_EXTENSION}`,
  ],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
