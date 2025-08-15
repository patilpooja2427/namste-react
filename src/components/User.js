import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>
      <button onClick={()=> {setCount(count+1)}}>Increase</button>
      <h1>Name: {name}</h1>
      <h2>Location: Pune</h2>
      <h2>Contact: @pooja</h2>
    </div>
  );
};
export default User;
