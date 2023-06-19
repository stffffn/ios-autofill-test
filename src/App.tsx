import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" placeholder="Enter username"></input>

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
