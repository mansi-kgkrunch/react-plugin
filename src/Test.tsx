import React from "react";
import { useState } from "react";

interface User {
  name: string;
  email: string;
  username: string;
  password: any;
  phone: number;
}

export default function Test(u: User) {
  const [inputState, setInputState] = useState();

  const hendleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  console.log(inputState);

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input name="name" type="text" onChange={(e) => hendleChange(e)} />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="text" onChange={(e) => hendleChange(e)} />
        </div>
        <div>
          <label>User Name</label>
          <input
            name="username"
            type="text"
            onChange={(e) => hendleChange(e)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="text"
            onChange={(e) => hendleChange(e)}
          />
        </div>
        <div>
          <label>Phone</label>
          <input name="phone" type="text" onChange={(e) => hendleChange(e)} />
        </div>
        <div>
          <input name="submit" type="submit" />
        </div>
      </form>
    </div>
  );
}
