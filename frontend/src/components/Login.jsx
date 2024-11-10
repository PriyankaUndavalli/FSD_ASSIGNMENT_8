import React from 'react';


function Login() {

    const redirectToSignup = () => {
        navigate('/signup.jsx'); 
      };

    return (
        <div className="login-container" id="login">
          <div className="login-box">
            <h2>Login</h2>
    
            {/* Success message */}
            <p id="success-message" style={{ color: 'green' }}>{successMessage}</p>
    
            {/* Form submission */}
            <form onSubmit={handleLogin}>
              <div className="textbox">
                <input type="text" placeholder="Username" name="username" required />
              </div>
              <div className="textbox">
                <input type="password" placeholder="Password" name="password" required />
              </div>
              <input type="submit" className="btn" value="Login" />
              <div>
                If you don’t have an Account? <a href="#signup"><span>Signup Here</span></a>
              </div>
            </form>
          </div>
        </div>
      );
    }
    
    export default Login;