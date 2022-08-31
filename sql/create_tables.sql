CREATE TABLE IF NOT EXISTS users_data (
  id SERIAL PRIMARY KEY,
  refer varchar(512) NOT NULL,
  symbol varchar(255) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
