CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  content TEXT
);

INSERT INTO users (name, email) VALUES
('Alice Johnson', 'alice@example.com'),
('Bob Smith', 'bob@example.com'),
('Charlie Brown', 'charlie@example.com');

INSERT INTO posts (user_id, title, content) VALUES
(1, 'Hello World', 'This is my first post!'),
(2, 'Render Test', 'Deploying my first fullstack app on Render.'),
(3, 'Next + Express + Postgres', 'Working perfectly!');
