import { useEffect, useState } from "react";
import Details from "./Details";
function App() {
  const [users, setUsers] = useState([]);
  const [appIndex, setAppIndex] = useState(0);

  useEffect(() => {
    const url = "https://gorest.co.in/public/v1/users?page=5";
    fetch(url)
      .then((res) => res.json())
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <>
      {
        users.map((user, index) => (
          <Details user={user} appIndex={appIndex} setAppIndex={setAppIndex} index={index} />
        ))
      }
    </>
  );
}

export default App;
