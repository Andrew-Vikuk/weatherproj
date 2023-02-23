import React, { useState } from "react";

function Login(props) {
  const [showRegistration, setShowRegistration] = useState(false);

  const toggleRegistration = () => setShowRegistration(!showRegistration);

  const handleClose = () => {
    props.togglePopup();
    setShowRegistration(false);
    console.log("close");
  };

  return (
    <div className="popup">
      <div className="popup__inner">
        <button className="popup__close" onClick={handleClose}>
          X
        </button>
        <h2>{showRegistration ? "Registration" : "Login"}</h2>
        <form>
          {showRegistration ? (
            <>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <label>
                Repeat password:
                <input type="password" name="repeat-password" />
              </label>
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <a href="#" onClick={toggleRegistration}>
                  Login
                </a>
              </p>
            </>
          ) : (
            <>
              <label>
                Login:
                <input type="text" name="login" />
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <button type="submit">Login</button>
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={toggleRegistration}>
                  Register
                </a>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
