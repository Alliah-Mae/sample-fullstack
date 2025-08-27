import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sample Fullstack Test</h1>
      <h2>Users</h2>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} ({u.email})</li>)}
      </ul>
      <h2>Posts</h2>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong> by {p.author}
            <p>{p.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
