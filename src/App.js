import { useEffect, useState } from "react";
import Details from "./Details";
function App() {
  //users will hold the users returned from the api call
  const [users, setUsers] = useState([]);

  // appIndex will hold the index of the item being clicked on
  // we start it at the first index 0
  const [appIndex, setAppIndex] = useState(0);

  // Make api call to get data. 
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
