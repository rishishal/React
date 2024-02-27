import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const GITHUB_API = `https://api.github.com/users/${user}`;

  useEffect(() => {
    const getData = setTimeout(async () => {
      const response = await fetch(GITHUB_API);
      const data = await response.json();
      console.log(data);
    }, 300);
    return () => clearTimeout(getData);
  }, [user]);

  return (
    <div>
      <input
        type='text'
        placeholder='User Name'
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
    </div>
  );
};

export default App;
