import React, { useState } from 'react';

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="popup">
      <button className="open-popup-btn" onClick={togglePopup}>
        Open Popup
      </button>
      {isOpen && (
        <div className="popup-content">
          <button className="close-popup-btn" onClick={togglePopup}>
            X
          </button>
          {isRegister ? (
            <form>
              <h2>Registration</h2>
              <label>Email:</label>
              <input type="email" name="email" required />
              <label>Password:</label>
              <input type="password" name="password" required />
              <label>Repeat Password:</label>
              <input type="password" name="password-repeat" required />
              <button type="submit">Register</button>
              <p>
                Already have an account?{' '}
                <button type="button" onClick={toggleForm}>
                  Login
                </button>
              </p>
            </form>
          ) : (
            <form>
              <h2>Login</h2>
              <label>Email:</label>
              <input type="email" name="email" required />
              <label>Password:</label>
              <input type="password" name="password" required />
              <button type="submit">Login</button>
              <p>
                Don't have an account?{' '}
                <button type="button" onClick={toggleForm}>
                  Register
                </button>
              </p>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
