import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [eroorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useNavigate();

  const onLogInClicked = async () => {
    alert("Not yet ");
  };

  return (
    <div className="content-container">
      <h1>Log In</h1>
      {eroorMessage && <div className="fail"> {eroorMessage}</div>}
      <input
        type="text"
        placeholder="Email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <br />
      <br />
      <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>
        Log In
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot Password ?
      </button>
      <button onClick={() => history.push("/signup")}>Sign Up</button>
    </div>
  );
}

export default Login;
