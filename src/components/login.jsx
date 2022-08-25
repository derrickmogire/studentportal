import React from "react";

const Login = () => {
  return (
    <main className="login">
      <h1> student portal</h1>
      <form method="post" className="form">
        <div className="container">
          <label for="uname">
            <b>Registration Number</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="/dashboard">password?</a>
          </span>
        </div>
      </form>
    </main>
  );
};

export default Login;
