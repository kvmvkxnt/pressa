CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  username VARCHAR(64) UNIQUE NOT NULL,
  avatar VARCHAR(255) DEFAULT 'stock.jpg',
  password VARCHAR(64) NOT NULL,
  status VARCHAR(8) DEFAULT 'active'
);

DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  id serial PRIMARY KEY,
  title VARCHAR(255) UNIQUE NOT NULL 
);

DROP TABLE IF EXISTS subcategories;

CREATE TABLE subcategories (
  id serial PRIMARY KEY,
  title VARCHAR(255) UNIQUE NOT NULL,
  category_id INT REFERENCES categories(id)
);

DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id serial PRIMARY KEY,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  subcategory_id INT REFERENCES subcategories(id),
  type VARCHAR(8) NOT NULL,
  link_address VARCHAR(255) NOT NULL,
  user_id UUID REFERENCES users(id),
  
  organizator_entity_type VARCHAR(8) NOT NULL,
  organizator_legal_name VARCHAR(255),
  organizator_profession VARCHAR(255) NOT NULL,
  organizator_phone VARCHAR(255) NOT NULL,
  organizator_additional_phone VARCHAR(255),
  
  post_title TEXT NOT NULL,
  post_description TEXT NOT NULL,
  post_images VARCHAR(255) [],
  post_text TEXT NOT NULL,

  status VARCHAR(8) DEFAULT 'active'
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id serial PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  event_id INT REFERENCES events(id),
  title TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(8) DEFAULT 'active'
);

DROP TABLE IF EXISTS subcomments;

CREATE TABLE subcomments (
  id serial PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  comment_id INT REFERENCES comments(id),
  status VARCHAR(8) DEFAULT 'active'
);
