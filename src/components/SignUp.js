import React, {useState} from "react";
import "../styles/SignUp.css";
import Footer from "../components/Footer";

const SignUp = () => {
    const [userRegistration, setUserRegistration] = useState({
        username: "",
        phone: "",
        email: "",
        password: ""
      });
      const [users, setUsers] = useState({
        username: "",
        phone: "",
        email: "",
        password: ""
      });
    
      const handleInput = e => {
        const { name, value } = e.target;
        setUserRegistration({
          ...userRegistration,
          [name]: value
        });
      };
      const handleSubmit = e => {
        e.preventDefault();
        setUsers(userRegistration);
        setUserRegistration({
          username: "",
          phone: "",
          email: "",
          password: ""
        });
      };
    return(
        <>
            <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p className="lead">It's free and hardly takes more than 30 seconds.</p>

        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-user" />
            </span>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              onChange={handleInput}
              value={userRegistration.username}
              required="required"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-phone" />
            </span>
            <input
              type="number"
              className="form-control"
              name="phone"
              placeholder="Phone Number"
              onChange={handleInput}
              value={userRegistration.phone}
              required="required"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-envelope" />
            </span>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              onChange={handleInput}
              value={userRegistration.email}
              required="required"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-lock" />
            </span>
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={handleInput}
              value={userRegistration.password}
              required="required"
            />
          </div>
        </div>

        <div className="form-group">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block btn-lg"
          >
            Sign Up
          </button>
        </div>

        <p className="small text-center">
          By clicking the Sign Up button, you agree to our <br />
          Terms & Conditions and Privacy Policy.
        </p>
      </form>
    </div>
            <Footer />
        </>
    );
}

export default SignUp;

