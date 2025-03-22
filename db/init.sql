CREATE TABLE IF NOT EXISTS jokes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  dislikes INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS joke_categories (
  joke_id INTEGER,
  category_id INTEGER,
  PRIMARY KEY (joke_id, category_id),
  FOREIGN KEY (joke_id) REFERENCES jokes(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);