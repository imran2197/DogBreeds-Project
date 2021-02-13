import React from "react";
import "../styles/Login.css";
import Footer from "../components/Footer";

const Login = () => {
    return(
        <>
            <div className="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
                    <h4 className="modal-title">Login to Your Account</h4>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <input type="submit" className="btn btn-primary btn-block btn-lg" value="Login"></input>
                </form> 
            </div>
            <Footer />
        </>
    );
}

export default Login;
