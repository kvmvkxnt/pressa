import dotenv from 'dotenv';
import path from 'path';
import { ClientConfig } from 'pg';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const pgConfig: ClientConfig = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE
};

export const SECRET: string = process.env.JWT_SECRET || 'secret';

export const developmentConfig = {
  port: 4000,
  allowedOrigin: 'http://localhost:8080'
};

export const productionConfig = {
  port: process.env.PORT || 4000,
  allowedOrigin: `http://localhost:${process.env.PORT || 4000}`
};
