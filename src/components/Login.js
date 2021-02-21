import React, {useState} from "react";
import "../styles/Login.css";
import Footer from "../components/Footer";

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
      });
      const [existingUser, setExistingUser] = useState({
        username: "",
        password: ""
      });
    
      const handleInput = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value
        });
      };
      const handleLogin = () => {
        setExistingUser(user);
        setUser({
          username: "",
          password: ""
        });
      };
    return(
        <>
            <div className="login-form">
      <form onSubmit={handleLogin}>
        <div className="avatar">
          <i className="material-icons">&#xE7FF;</i>
        </div>
        <h4 className="modal-title">Login to Your Account</h4>

        <div className="form-group">
          <input
            type="text"
            name="username"
            onChange={handleInput}
            className="form-control"
            placeholder="Username"
            value={user.username}
            required="required"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            onChange={handleInput}
            className="form-control"
            placeholder="Password"
            value={user.password}
            required="required"
          />
        </div>

        <button
          type="submit"
          onClick={handleLogin}
          className="btn btn-primary btn-block btn-lg"
        >
          Login
        </button>
      </form>
    </div>
            <Footer />
        </>
    );
}

export default Login;
