import React from 'react'
import Footer from '../Home/Footer/footer'
import Header from '../Home/Header/header'
import AppSidebar from '../Home/APP-SIDEBAR/AppSidebar'
import SidebarRight from '../Home/Sidebar-right/SidebarRight'

function RegisterClients() {
  return (
    <div>
      <div>
        {/* PAGE */}
        <div className="page">
          <div className="page-main">
           
            <Header/>
           
            <AppSidebar/>
            {/*app-content open*/}
            <div className="main-content app-content mt-0">
              <div className="side-app">
                {/* CONTAINER */}
                <div className="main-container container-fluid">
                  {/* PAGE-HEADER */}

                  {/* PAGE-HEADER END */}
                  {/*Row */}
                  <div className="row">
                    <div className="col-md-12 col-xl-6">
                      <div className="card">
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Billing Information</h3>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group">
                                <label className="form-label">First Name <span className="text-red">*</span></label>
                                <input type="text" className="form-control" placeholder="First name" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group">
                                <label className="form-label">Last Name <span className="text-red">*</span></label>
                                <input type="text" className="form-control" placeholder="Last name" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="form-label">Company Name <span className="text-red">*</span></label>
                                <input type="text" className="form-control" placeholder="Company name" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="form-label">Email address <span className="text-red">*</span></label>
                                <input type="email" className="form-control" placeholder="Email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="form-label">Country <span className="text-red">*</span></label>
                                <select className="form-control form-select select2" data-bs-placeholder="Select">
                                  <option label="Select">Country</option>
                                  <option value={1}>Germany</option>
                                  <option value={2}>Canada</option>
                                  <option value={3}>Usa</option>
                                  <option value={4}>Aus</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="form-label">Address <span className="text-red">*</span></label>
                                <input type="text" className="form-control" placeholder="Home Address" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group">
                                <label className="form-label">City <span className="text-red">*</span></label>
                                <input type="text" className="form-control" placeholder="City" />
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group">
                                <label className="form-label">Postal Code <span className="text-red">*</span></label>
                                <input type="number" className="form-control" placeholder="ZIP Code" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CONTAINER CLOSED */}
              </div>
            </div>
            {/*app-content closed*/}
          </div>
         
          <SidebarRight />
        
          <Footer />
          
        </div>
        {/* BACK-TO-TOP */}
        <a href="#top" id="back-to-top"><i className="fa fa-angle-up" /></a>
      </div>

    </div>
  )
}

export default RegisterClients