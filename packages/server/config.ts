import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '192.168.1.101',
  port: 30306,
  username: 'root',
  password: '000000',
  database: 'lowcode',
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};
