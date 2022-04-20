import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "../Providers/register.scss"

function Login() {

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3200/api/signIn";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  }
  return (
    <div>
      {/* BACKGROUND-IMAGE */}
      <div className="login-img">
        {/* PAGE */}
        <div className="page">
          <div className>
            {/* CONTAINER OPEN */}
            <div className="col col-login mx-auto mt-7">
              <div className="text-center">
                <img src="../assets/images/brand/logo-white.png" className="header-brand-img" alt />
              </div>
            </div>
            <div className="container-login100">
              <div className="wrap-login100 p-6">
                <form className="login100-form validate-form">
                  <span className="login100-form-title pb-5">
                    Login
                  </span>
                  <div className="panel panel-primary">
                    <div className="tab-menu-heading">
                      <div className="tabs-menu1">
                        {/* Tabs */}
                        <ul className="nav panel-tabs">
                          <li className="mx-0"><a href="#tab5" className="active" data-bs-toggle="tab">Email</a></li>
                          <li className="mx-0"><a href="#tab6" data-bs-toggle="tab">Mobile</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="panel-body tabs-menu-body p-0 pt-5">
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab5">
                          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                            <a href="javascript:void(0)" className="input-group-text bg-white text-muted">
                              <i className="zmdi zmdi-email text-muted" aria-hidden="true" />
                            </a>
                            <input className="input100 border-start-0 form-control ms-0" type="email" placeholder="Email" name="email"  onChange={handleChange}  value={data.email} />
                          </div>
                          <div className="wrap-input100 validate-input input-group" id="Password-toggle">
                            <a href="javascript:void(0)" className="input-group-text bg-white text-muted">
                              <i className="zmdi zmdi-eye text-muted" aria-hidden="true" />
                            </a>
                            <input className="input100 border-start-0 form-control ms-0" type="password" placeholder="Password" name="password"  onChange={handleChange}  value={data.password} />
                          </div>
                          {error && <div className={styles.error_msg}>{error}</div>}
                          <div className="container-login100-form-btn" type="submit" onClick={handleSubmit}>
                            <a  className="login100-form-btn btn-primary">
                              Login
                            </a>
                          </div>
                          <div className="text-center pt-3">
                            <p className="text-dark mb-0">Not a member?<Link to="/register" className="text-primary ms-1">Sign UP</Link></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* CONTAINER CLOSED */}
          </div>
        </div>
        {/* End PAGE */}
      </div>

    </div>
  )
}

export default Login