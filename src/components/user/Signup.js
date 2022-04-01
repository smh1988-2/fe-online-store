import React from "react";

function Signup({ user, setUser }) {
  function handleSignup(e) {
    e.preventDefault();
    // console.log(e.target[1].value)
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          localStorage.setItem("token", data.jwt);
          console.log(data.jwt);
          setUser(data);
        });
      } else {
        r.json().then((err) => {
          console.log(err);
          setUser({});
        });
      }
    });
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Signup;
