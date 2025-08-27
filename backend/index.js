const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello from the backend!"));

app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT posts.id, title, content, users.name AS author
      FROM posts JOIN users ON posts.user_id = users.id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend is running on port ${PORT}`));
