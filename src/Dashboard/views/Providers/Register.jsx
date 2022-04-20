import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "../Providers/register.scss";

function Register() {

  const [data, setData] = useState({
    name: "",
    lastname: "",
    company: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3200/providers/createProvider";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);
      //window.location = "/login"
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };




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
                <img src="../assets/images/brand/logo-white.png" className="header-brand-img m-0" alt />
              </div>
            </div>
            <div className="container-login100">
              <div className="wrap-login100 p-6">
                <form className="login100-form validate-form" >
                  <span className="login100-form-title">
                    Registration
                  </span>
                  <div className="wrap-input100 validate-input input-group" >
                    <a href="javascript:void(0)" className="input-group-text bg-white text-muted">
                      <i className="mdi mdi-account" aria-hidden="true" />
                    </a>
                    <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="User Name" name="name" onChange={handleChange} value={data.name} />
                  </div>
                  <div className="wrap-input100 validate-input input-group" >
                    <a href="javascript:void(0)" className="input-group-text bg-white text-muted">
                      <i className="mdi mdi-account" aria-hidden="true" />
                    </a>
                    <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="LastName" name="lastname" onChange={handleChange} value={data.lastname} />
                  </div>
                  <div className="wrap-input100 validate-input input-group" >
                    <a href="javascript:void(0)" className="input-group-text bg-white text-muted">
                      <i className="bi bi-building" aria-hidden="true" />
                    </a>
                    <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="Company" name="company" onChange={handleChange} value={data.company} />
                  </div>
                  <div className="wrap-input100 validate-input input-group" >
                    <a href="javascript:void(0)" className="input-group-text bg-white text-muted">
                      <i className="bi bi-telephone" aria-hidden="true" />
                    </a>
                    <input className="input100 border-start-0 ms-0 form-control" type="text" placeholder="Phone" name="phone" onChange={handleChange} value={data.phone} />
                  </div>
                  <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                    <a href="javascript:void(0)" className="input-group-text bg-white text-muted">
                      <i className="zmdi zmdi-email" aria-hidden="true" />
                    </a>
                    <input className="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} />
                  </div>
                  <div className="wrap-input100 validate-input input-group" id="Password-toggle">
                    <a href="javascript:void(0)" className="input-group-text bg-white text-muted">
                      <i className="zmdi zmdi-eye" aria-hidden="true" />
                    </a>
                    <input className="input100 border-start-0 ms-0 form-control" type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} />
                  </div>
                  {error && <div className={styles.error_msg}>{error}</div>}
                  {msg && <div className={styles.success_msg}>{msg}</div>}
                  <label className="custom-control custom-checkbox mt-4">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">Agree the <a href="terms.html">terms and policy</a></span>
                  </label>
                  <div className="container-login100-form-btn">
                    <a onClick={handleSubmit} type='submit' className="login100-form-btn btn-primary">
                      Register
                    </a>
                  </div>
                  <div className="text-center pt-3">
                    <p className="text-dark mb-0">Already have account?<Link to="/login" className="text-primary ms-1">Sign In</Link></p>
                  </div>
                </form>
              </div>
            </div>
            {/* CONTAINER CLOSED */}
          </div>
        </div>
        {/* END PAGE */}
      </div>
      {/* BACKGROUND-IMAGE CLOSED */}

    </div>
  )
}

export default Register