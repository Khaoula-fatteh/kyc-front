import React from 'react'

function layout() {
  return (
    <div>
      <div className="main-content app-content mt-0">
        <div className="side-app">
          {/* CONTAINER */}
          <div className="main-container container-fluid">
            {/* PAGE-HEADER */}
            <div className="page-header">
              <h1 className="page-title">Dashboard 01</h1>
              <div>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dashboard 01</li>
                </ol>
              </div>
            </div>
            {/* PAGE-HEADER END */}
            {/* ROW-1 */}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="mt-2">
                            <h6 className>Total Users</h6>
                            <h2 className="mb-0 number-font">44,278</h2>
                          </div>
                          <div className="ms-auto">
                            <div className="chart-wrapper mt-1">
                              <canvas id="saleschart" className="h-8 w-9 chart-dropshadow" />
                            </div>
                          </div>
                        </div>
                        <span className="text-muted fs-12"><span className="text-secondary"><i className="fe fe-arrow-up-circle  text-secondary" /> 5%</span>
                          Last week</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="mt-2">
                            <h6 className>Total Profit</h6>
                            <h2 className="mb-0 number-font">67,987</h2>
                          </div>
                          <div className="ms-auto">
                            <div className="chart-wrapper mt-1">
                              <canvas id="leadschart" className="h-8 w-9 chart-dropshadow" />
                            </div>
                          </div>
                        </div>
                        <span className="text-muted fs-12"><span className="text-pink"><i className="fe fe-arrow-down-circle text-pink" /> 0.75%</span>
                          Last 6 days</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="mt-2">
                            <h6 className>Total Expenses</h6>
                            <h2 className="mb-0 number-font">$76,965</h2>
                          </div>
                          <div className="ms-auto">
                            <div className="chart-wrapper mt-1">
                              <canvas id="profitchart" className="h-8 w-9 chart-dropshadow" />
                            </div>
                          </div>
                        </div>
                        <span className="text-muted fs-12"><span className="text-green"><i className="fe fe-arrow-up-circle text-green" /> 0.9%</span>
                          Last 9 days</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="mt-2">
                            <h6 className>Total Cost</h6>
                            <h2 className="mb-0 number-font">$59,765</h2>
                          </div>
                          <div className="ms-auto">
                            <div className="chart-wrapper mt-1">
                              <canvas id="costchart" className="h-8 w-9 chart-dropshadow" />
                            </div>
                          </div>
                        </div>
                        <span className="text-muted fs-12"><span className="text-warning"><i className="fe fe-arrow-up-circle text-warning" /> 0.6%</span>
                          Last year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ROW-1 END */}
            {/* ROW-2 */}
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex mx-auto text-center justify-content-center mb-4">
                      <div className="d-flex text-center justify-content-center me-3"><span className="dot-label bg-primary my-auto" />Total Sales</div>
                      <div className="d-flex text-center justify-content-center"><span className="dot-label bg-secondary my-auto" />Total Orders</div>
                    </div>
                    <div className="chartjs-wrapper-demo">
                      <canvas id="transactions" className="chart-dropshadow" />
                    </div>
                  </div>
                </div>
              </div>
              {/* COL END */}
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                <div className="card overflow-hidden">
                  <div className="card-body pb-0 bg-recentorder">
                    <h3 className="card-title text-white">Recent Orders</h3>
                    <div className="chartjs-wrapper-demo">
                      <canvas id="recentorders" className="chart-dropshadow" />
                    </div>
                  </div>
                  <div id="flotback-chart" className="flot-background" />
                  <div className="card-body">
                    <div className="d-flex mb-4 mt-3">
                      <div className="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3">
                        <i className="fe fe-check" />
                      </div>
                      <div className>
                        <h6 className="mb-1 fw-semibold">Delivered Orders</h6>
                        <p className="fw-normal fs-12"> <span className="text-success">3.5%</span>
                          increased </p>
                      </div>
                      <div className=" ms-auto my-auto">
                        <p className="fw-bold fs-20"> 1,768 </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="avatar  avatar-md bg-pink-transparent text-pink bradius me-3">
                        <i className="fe fe-x" />
                      </div>
                      <div className>
                        <h6 className="mb-1 fw-semibold">Cancelled Orders</h6>
                        <p className="fw-normal fs-12"> <span className="text-success">1.2%</span>
                          increased </p>
                      </div>
                      <div className=" ms-auto my-auto">
                        <p className="fw-bold fs-20 mb-0"> 3,675 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* COL END */}
            </div>
            {/* ROW-2 END */}
            {/* ROW-3 */}
            <div className="row">
              <div className="col-xl-4 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title fw-semibold">Daily Activity</h4>
                  </div>
                  <div className="card-body pb-0">
                    <ul className="task-list">
                      <li className="d-sm-flex">
                        <div>
                          <i className="task-icon bg-primary" />
                          <h6 className="fw-semibold">Task Finished<span className="text-muted fs-11 ms-2 fw-normal">09 July 2021</span>
                          </h6>
                          <p className="text-muted fs-12">Adam Berry finished task on<a href="javascript:void(0)" className="fw-semibold"> Project Management</a></p>
                        </div>
                        <div className="ms-auto d-md-flex">
                          <a href="javascript:void(0)" className="text-muted me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" aria-label="Edit"><span className="fe fe-edit" /></a>
                          <a href="javascript:void(0)" className="text-muted"><span className="fe fe-trash-2" /></a>
                        </div>
                      </li>
                      <li className="d-sm-flex">
                        <div>
                          <i className="task-icon bg-secondary" />
                          <h6 className="fw-semibold">New Comment<span className="text-muted fs-11 ms-2 fw-normal">05 July 2021</span>
                          </h6>
                          <p className="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0)" className="fw-semibold"> AngularJS Template</a></p>
                        </div>
                        <div className="ms-auto d-md-flex">
                          <a href="javascript:void(0)" className="text-muted me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" aria-label="Edit"><span className="fe fe-edit" /></a>
                          <a href="javascript:void(0)" className="text-muted"><span className="fe fe-trash-2" /></a>
                        </div>
                      </li>
                      <li className="d-sm-flex">
                        <div>
                          <i className="task-icon bg-success" />
                          <h6 className="fw-semibold">New Comment<span className="text-muted fs-11 ms-2 fw-normal">25 June 2021</span>
                          </h6>
                          <p className="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0)" className="fw-semibold"> AngularJS Template</a></p>
                        </div>
                        <div className="ms-auto d-md-flex">
                          <a href="javascript:void(0)" className="text-muted me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" aria-label="Edit"><span className="fe fe-edit" /></a>
                          <a href="javascript:void(0)" className="text-muted"><span className="fe fe-trash-2" /></a>
                        </div>
                      </li>
                      <li className="d-sm-flex">
                        <div>
                          <i className="task-icon bg-warning" />
                          <h6 className="fw-semibold">Task Overdue<span className="text-muted fs-11 ms-2 fw-normal">14 June 2021</span>
                          </h6>
                          <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0)" className="fw-semibold"> Integrated management</a></p>
                        </div>
                        <div className="ms-auto d-md-flex">
                          <a href="javascript:void(0)" className="text-muted me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" aria-label="Edit"><span className="fe fe-edit" /></a>
                          <a href="javascript:void(0)" className="text-muted"><span className="fe fe-trash-2" /></a>
                        </div>
                      </li>
                      <li className="d-sm-flex">
                        <div>
                          <i className="task-icon bg-danger" />
                          <h6 className="fw-semibold">Task Overdue<span className="text-muted fs-11 ms-2 fw-normal">29 June 2021</span>
                          </h6>
                          <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0)" className="fw-semibold"> Integrated management</a></p>
                        </div>
                        <div className="ms-auto d-md-flex">
                          <a href="javascript:void(0)" className="text-muted me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" aria-label="Edit"><span className="fe fe-edit" /></a>
                          <a href="javascript:void(0)" className="text-muted"><span className="fe fe-trash-2" /></a>
                        </div>
                      </li>
                      <li className="d-sm-flex">
                        <div>
                          <i className="task-icon bg-info" />
                          <h6 className="fw-semibold">Task Finished<span className="text-muted fs-11 ms-2 fw-normal">09 July 2021</span>
                          </h6>
                          <p className="text-muted fs-12">Adam Berry finished task on<a href="javascript:void(0)" className="fw-semibold"> Project Management</a></p>
                        </div>
                        <div className="ms-auto d-md-flex">
                          <a href="javascript:void(0)" className="text-muted me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" aria-label="Edit"><span className="fe fe-edit" /></a>
                          <a href="javascript:void(0)" className="text-muted"><span className="fe fe-trash-2" /></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="card overflow-hidden">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">Sales Report by Locations with Devices</h3>
                    </div>
                  </div>
                  <div className="card-body p-0 mt-2">
                    <div className>
                      <div id="world-map-markers1" className="worldh world-map h-250" />
                    </div>
                    <div className="table-responsive mt-2 text-center">
                      <table className="table text-nowrap border-dashed mb-0">
                        <thead>
                          <tr>
                            <th className="text-start">Device</th>
                            <th className>USA</th>
                            <th className>India</th>
                            <th className>Bahrain</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start p-4"><span className="sales-icon text-primary mx-2 brround bg-primary-transparent p-2"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi
                          bi-phone" viewBox="0 0 16 16">
                              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg></span><span className="mobile">Mobiles</span>
                            </td>
                            <td className="p-4">17%</td>
                            <td className="p-4">22%</td>
                            <td className="p-4">11%</td>
                          </tr>
                          <tr>
                            <td className="text-start p-4"><span className="sales-icon text-secondary mx-2 brround bg-secondary-transparent p-2"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor
                      " className="bi bi-display" viewBox="0 0 16 16">
                              <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46
                          0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757
                          0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                            </svg></span>Desktops</td>
                            <td className="p-4">34%</td>
                            <td className="p-4">76%</td>
                            <td className="p-4">58%</td>
                          </tr>
                          <tr>
                            <td className="text-start p-4"><span className="sales-icon text-danger mx-2 brround bg-danger-transparent p-2"><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-tablet
                      " viewBox="0 0 16 16">
                              <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg></span>Tablets</td>
                            <td className="p-4">56%</td>
                            <td className="p-4">83%</td>
                            <td className="p-4">66%</td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title fw-semibold">Browser Usage</h4>
                  </div>
                  <div className="card-body">
                    <div className="browser-stats">
                      <div className="row mb-4">
                        <div className="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                          <img src="../assets/images/browsers/chrome.svg" className="img-fluid" alt="img" />
                        </div>
                        <div className="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                          <div className="d-flex align-items-end justify-content-between mb-1">
                            <h6 className="mb-1">Chrome</h6>
                            <h6 className="fw-semibold mb-1">35,502 <span className="text-success fs-11">(<i className="fe fe-arrow-up" />12.75%)</span></h6>
                          </div>
                          <div className="progress h-2 mb-3">
                            <div className="progress-bar bg-primary" style={{ width: '70%' }} role="progressbar" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                          <img src="../assets/images/browsers/opera.svg" className="img-fluid" alt="img" />
                        </div>
                        <div className="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                          <div className="d-flex align-items-end justify-content-between mb-1">
                            <h6 className="mb-1">Opera</h6>
                            <h6 className="fw-semibold mb-1">12,563 <span className="text-danger fs-11">(<i className="fe fe-arrow-down" />15.12%)</span></h6>
                          </div>
                          <div className="progress h-2 mb-3">
                            <div className="progress-bar bg-secondary" style={{ width: '40%' }} role="progressbar" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                          <img src="../assets/images/browsers/ie.svg" className="img-fluid" alt="img" />
                        </div>
                        <div className="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                          <div className="d-flex align-items-end justify-content-between mb-1">
                            <h6 className="mb-1">IE</h6>
                            <h6 className="fw-semibold mb-1">25,364 <span className="text-success fs-11">(<i className="fe fe-arrow-down" />24.37%)</span></h6>
                          </div>
                          <div className="progress h-2 mb-3">
                            <div className="progress-bar bg-success" style={{ width: '50%' }} role="progressbar" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                          <img src="../assets/images/browsers/firefox.svg" className="img-fluid" alt="img" />
                        </div>
                        <div className="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                          <div className="d-flex align-items-end justify-content-between mb-1">
                            <h6 className="mb-1">Firefox</h6>
                            <h6 className="fw-semibold mb-1">14,635 <span className="text-success fs-11">(<i className="fe fe-arrow-down" />15.63%)</span></h6>
                          </div>
                          <div className="progress h-2 mb-3">
                            <div className="progress-bar bg-danger" style={{ width: '50%' }} role="progressbar" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                          <img src="../assets/images/browsers/edge.svg" className="img-fluid" alt="img" />
                        </div>
                        <div className="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                          <div className="d-flex align-items-end justify-content-between mb-1">
                            <h6 className="mb-1">Edge</h6>
                            <h6 className="fw-semibold mb-1">15,453 <span className="text-danger fs-11">(<i className="fe fe-arrow-down" />23.70%)</span></h6>
                          </div>
                          <div className="progress h-2 mb-3">
                            <div className="progress-bar bg-warning" style={{ width: '10%' }} role="progressbar" />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                          <img src="../assets/images/browsers/safari.svg" className="img-fluid" alt="img" />
                        </div>
                        <div className="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                          <div className="d-flex align-items-end justify-content-between mb-1">
                            <h6 className="mb-1">Safari</h6>
                            <h6 className="fw-semibold mb-1">10,054 <span className="text-success fs-11">(<i className="fe fe-arrow-up" />11.04%)</span></h6>
                          </div>
                          <div className="progress h-2 mb-3">
                            <div className="progress-bar bg-info" style={{ width: '40%' }} role="progressbar" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 col-lg-3 col-xl-3 col-xxl-2 mb-sm-0 mb-3">
                          <img src="../assets/images/browsers/netscape.svg" className="img-fluid" alt="img" />
                        </div>
                        <div className="col-sm-10 col-lg-9 col-xl-9 col-xxl-10 ps-sm-0">
                          <div className="d-flex align-items-end justify-content-between mb-1">
                            <h6 className="mb-1">Netscape</h6>
                            <h6 className="fw-semibold mb-1">35,502 <span className="text-success fs-11">(<i className="fe fe-arrow-up" />12.75%)</span></h6>
                          </div>
                          <div className="progress h-2 mb-3">
                            <div className="progress-bar bg-green" style={{ width: '30%' }} role="progressbar" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ROW-3 END */}
            {/* ROW-4 */}
            <div className="row">
              <div className="col-12 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title mb-0">Product Sales</h3>
                  </div>
                  <div className="card-body pt-4">
                    <div className="grid-margin">
                      <div className>
                        <div className="panel panel-primary">
                          <div className="tab-menu-heading border-0 p-0">
                            <div className="tabs-menu1">
                              {/* Tabs */}
                              <ul className="nav panel-tabs product-sale">
                                <li><a href="#tab5" className="active" data-bs-toggle="tab">All products</a></li>
                                <li><a href="#tab6" data-bs-toggle="tab" className="text-dark">Shipped</a></li>
                                <li><a href="#tab7" data-bs-toggle="tab" className="text-dark">Pending</a></li>
                                <li><a href="#tab8" data-bs-toggle="tab" className="text-dark">Cancelled</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="panel-body tabs-menu-body border-0 pt-0">
                            <div className="tab-content">
                              <div className="tab-pane active" id="tab5">
                                <div className="table-responsive">
                                  <table id="data-table" className="table table-bordered text-nowrap mb-0">
                                    <thead className="border-top">
                                      <tr>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '5%' }}>Tracking Id</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Product</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Customer</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Date</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Amount</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Payment Mode</th>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '10%' }}>Status</th>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '5%' }}>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #98765490</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/10.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Headsets</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cherry Blossom</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">30 Aug
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$6.721.5</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #76348798</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/12.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Flower Pot</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Simon Sais</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">15 Nov
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$35,7863</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-danger-transparent rounded-pill text-danger p-2 px-3">Cancelled</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #23986456</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/4.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Pen Drive</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Manny Jah</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">27 Jan
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$5,89,6437</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #87456325</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/8.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                New Bowl</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Florinda Carasco</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">19 Sep
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$17.98</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #65783926</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/6.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Leather Watch</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Ivan Notheridiya</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">06 Oct
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$8.654.4</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-danger-transparent rounded-pill text-danger p-2 px-3">Cancelled</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #34654895</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/1.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Digital Camera</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Willie Findit</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">10 Jul
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$8.654.4</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #98765345</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/11.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Earphones</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Addie Minstra</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">25 Jun
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$7,34,9768</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #67546577</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/2.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Shoes</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Laura Biding</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">22 Feb
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$7.76.654</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane" id="tab6">
                                <div className="table-responsive">
                                  <table className="table table-bordered text-nowrap mb-0">
                                    <thead className="border-top">
                                      <tr>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '5%' }}>Tracking Id</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Product</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Customer</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Date</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Amount</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Payment Mode</th>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '10%' }}>Status</th>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '5%' }}>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #98765490</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/10.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Headsets</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cherry Blossom</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">30 Aug
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$6.721.5</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #76348798</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/12.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Flower Pot</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Simon Sais</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">15 Nov
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$35,7863</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #23986456</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/4.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Pen Drive</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Manny Jah</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">27 Jan
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$5,89,6437</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #87456325</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/8.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                New Bowl</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Florinda Carasco</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">19 Sep
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$17.98</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #65783926</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/6.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Leather Watch</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Ivan Notheridiya</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">06 Oct
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$8.654.4</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #34654895</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/1.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Digital Camera</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Willie Findit</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">10 Jul
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$8.654.4</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #98765345</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/11.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Earphones</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Addie Minstra</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">25 Jun
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$7,34,9768</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #67546577</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/2.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Shoes</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Laura Biding</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">22 Feb
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$7.76.654</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-success-transparent rounded-pill text-success p-2 px-3">Shipped</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane" id="tab7">
                                <div className="table-responsive">
                                  <table className="table table-bordered text-nowrap mb-0">
                                    <thead className="border-top">
                                      <tr>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '5%' }}>Tracking Id</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Product</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Customer</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Date</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Amount</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Payment Mode</th>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '10%' }}>Status</th>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '5%' }}>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #98765490</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/10.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Headsets</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cherry Blossom</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">30 Aug
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$6.721.5</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #23986456</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/4.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Pen Drive</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Manny Jah</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">27 Jan
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$5,89,6437</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #87456325</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/8.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                New Bowl</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Florinda Carasco</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">19 Sep
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$17.98</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #65783926</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/6.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Leather Watch</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Ivan Notheridiya</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">06 Oct
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$8.654.4</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #34654895</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/1.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Digital Camera</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Willie Findit</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">10 Jul
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$8.654.4</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #98765345</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/11.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Earphones</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Addie Minstra</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">25 Jun
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$7,34,9768</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #67546577</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/2.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Shoes</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Laura Biding</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">22 Feb
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$7.76.654</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-warning-transparent rounded-pill text-warning p-2 px-3">Pending</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane" id="tab8">
                                <div className="table-responsive">
                                  <table className="table table-bordered text-nowrap mb-0">
                                    <thead className="border-top">
                                      <tr>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '5%' }}>Tracking Id</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Product</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Customer</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Date</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Amount</th>
                                        <th className="bg-transparent border-bottom-0">
                                          Payment Mode</th>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '10%' }}>Status</th>
                                        <th className="bg-transparent border-bottom-0" style={{ width: '5%' }}>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #98765490</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/10.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Headsets</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cherry Blossom</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">30 Aug
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$6.721.5</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-danger-transparent rounded-pill text-danger p-2 px-3">Cancelled</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #76348798</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/12.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Flower Pot</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Simon Sais</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">15 Nov
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$35,7863</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-danger-transparent rounded-pill text-danger p-2 px-3">Cancelled</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #23986456</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/4.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Pen Drive</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Manny Jah</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">27 Jan
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$5,89,6437</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-danger-transparent rounded-pill text-danger p-2 px-3">Cancelled</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #87456325</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/8.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                New Bowl</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Florinda Carasco</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">19 Sep
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$17.98</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Online Payment</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-danger-transparent rounded-pill text-danger p-2 px-3">Cancelled</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #65783926</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/6.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Leather Watch</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Ivan Notheridiya</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">06 Oct
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$8.654.4</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-danger-transparent rounded-pill text-danger p-2 px-3">Cancelled</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="border-bottom">
                                        <td className="text-center">
                                          <div className="mt-0 mt-sm-2 d-block">
                                            <h6 className="mb-0 fs-14 fw-semibold">
                                              #34654895</h6>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <span className="avatar bradius" style={{ backgroundImage: 'url(../assets/images/orders/1.jpg)' }} />
                                            <div className="ms-3 mt-0 mt-sm-2 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Digital Camera</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Willie Findit</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td><span className="mt-sm-2 d-block">10 Jul
                                          2021</span></td>
                                        <td><span className="fw-semibold mt-sm-2 d-block">$8.654.4</span>
                                        </td>
                                        <td>
                                          <div className="d-flex">
                                            <div className="mt-0 mt-sm-3 d-block">
                                              <h6 className="mb-0 fs-14 fw-semibold">
                                                Cash on Delivery</h6>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="mt-sm-1 d-block">
                                            <span className="badge bg-danger-transparent rounded-pill text-danger p-2 px-3">Cancelled</span>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="g-2">
                                            <a className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fe fe-edit fs-14" /></a>
                                            <a className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span className="fe fe-trash-2 fs-14" /></a>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ROW-4 END */}
          </div>
          {/* CONTAINER END */}
        </div>
      </div>
    </div>
  )
}

export default layout