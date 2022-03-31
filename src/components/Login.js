import React from "react";

function Login({ user, setUser }) {
  function handleLogin(e) {
    e.preventDefault();
    console.log(e);
    setUser({});
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    })
      // .then((r) => r.json())
      .then((r) => {
        if (r.ok) {
          console.log(r);
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
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;
