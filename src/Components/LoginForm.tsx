import React from "react";
import { Link } from "react-router-dom";

interface LoginFormProps {
  handleChange: any;
  handleSubmit: any;
  inputsValues: any;
  loading: any;
}

const LoginForm = ({
  handleChange,
  handleSubmit,
  inputsValues,
  loading,
}: LoginFormProps) => {
  return (
    <div className="login_contianer">
      <div className="login_md">
        <div className="login_content">
          <div>
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="login_form">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={inputsValues.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={inputsValues.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button type="submit">{loading ? "loading..." : "Login"} </button>
          </form>
          <div className="or_link">
            <span>if you don't have account</span>
            <Link className="link" to="/signup">
              create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
