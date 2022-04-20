import React from 'react'

function header() {
  return (
    <div>
       <div className="app-header header sticky">
              <div className="container-fluid main-container">
                <div className="d-flex">
                  <a aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar" href="javascript:void(0)" />
                  {/* sidebar-toggle*/}
                  <a className="logo-horizontal " href="index.html">
                    <img src="../assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                    <img src="../assets/images/brand/logo-3.png" className="header-brand-img light-logo1" alt="logo" />
                  </a>
                  {/* LOGO */}
                  <div className="main-header-center ms-3 d-none d-lg-block">
                    <input className="form-control" placeholder="Search for results..." type="search" />
                    <button className="btn px-0 pt-2"><i className="fe fe-search" aria-hidden="true" /></button>
                  </div>
                  <div className="d-flex order-lg-2 ms-auto header-right-icons">
                    <div className="dropdown d-none">
                      <a href="javascript:void(0)" className="nav-link icon" data-bs-toggle="dropdown">
                        <i className="fe fe-search" />
                      </a>
                      <div className="dropdown-menu header-search dropdown-menu-start">
                        <div className="input-group w-100 p-2">
                          <input type="text" className="form-control" placeholder="Search...." />
                          <div className="input-group-text btn btn-primary">
                            <i className="fe fe-search" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* SEARCH */}
                    <button className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon fe fe-more-vertical" />
                    </button>
                    <div className="navbar navbar-collapse responsive-navbar p-0">
                      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                        <div className="d-flex order-lg-2">
                          <div className="dropdown d-lg-none d-flex">
                            <a href="javascript:void(0)" className="nav-link icon" data-bs-toggle="dropdown">
                              <i className="fe fe-search" />
                            </a>
                            <div className="dropdown-menu header-search dropdown-menu-start">
                              <div className="input-group w-100 p-2">
                                <input type="text" className="form-control" placeholder="Search...." />
                                <div className="input-group-text btn btn-primary">
                                  <i className="fa fa-search" aria-hidden="true" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* COUNTRY */}
                          <div className="d-flex country">
                            <a className="nav-link icon text-center" data-bs-target="#country-selector" data-bs-toggle="modal">
                              <i className="fe fe-globe" /><span className="fs-16 ms-2 d-none d-xl-block">English</span>
                            </a>
                          </div>
                          {/* SEARCH */}
                          <div className="dropdown  d-flex">
                            <a className="nav-link icon theme-layout nav-link-bg layout-setting">
                              <span className="dark-layout"><i className="fe fe-moon" /></span>
                              <span className="light-layout"><i className="fe fe-sun" /></span>
                            </a>
                          </div>
                          {/* Theme-Layout */}
                          <div className="dropdown d-flex">
                            <a className="nav-link icon full-screen-link nav-link-bg">
                              <i className="fe fe-minimize fullscreen-button" />
                            </a>
                          </div>
                          {/* FULL-SCREEN */}
                          <div className="dropdown  d-flex notifications">
                            <a className="nav-link icon" data-bs-toggle="dropdown"><i className="fe fe-bell" /><span className=" pulse" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                              <div className="drop-heading border-bottom">
                                <div className="d-flex">
                                  <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">Notifications
                                  </h6>
                                </div>
                              </div>
                              <div className="notifications-menu">
                                <a className="dropdown-item d-flex" href="notify-list.html">
                                  <div className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                                    <i className="fe fe-mail" />
                                  </div>
                                  <div className="mt-1">
                                    <h5 className="notification-label mb-1">New Application received
                                    </h5>
                                    <span className="notification-subtext">3 days ago</span>
                                  </div>
                                </a>
                                <a className="dropdown-item d-flex" href="notify-list.html">
                                  <div className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                                    <i className="fe fe-check-circle" />
                                  </div>
                                  <div className="mt-1">
                                    <h5 className="notification-label mb-1">Project has been
                                      approved</h5>
                                    <span className="notification-subtext">2 hours ago</span>
                                  </div>
                                </a>
                                <a className="dropdown-item d-flex" href="notify-list.html">
                                  <div className="me-3 notifyimg  bg-success brround box-shadow-success">
                                    <i className="fe fe-shopping-cart" />
                                  </div>
                                  <div className="mt-1">
                                    <h5 className="notification-label mb-1">Your Product Delivered
                                    </h5>
                                    <span className="notification-subtext">30 min ago</span>
                                  </div>
                                </a>
                                <a className="dropdown-item d-flex" href="notify-list.html">
                                  <div className="me-3 notifyimg bg-pink brround box-shadow-pink">
                                    <i className="fe fe-user-plus" />
                                  </div>
                                  <div className="mt-1">
                                    <h5 className="notification-label mb-1">Friend Requests</h5>
                                    <span className="notification-subtext">1 day ago</span>
                                  </div>
                                </a>
                              </div>
                              <div className="dropdown-divider m-0" />
                              <a href="notify-list.html" className="dropdown-item text-center p-3 text-muted">View all
                                Notification</a>
                            </div>
                          </div>
                          {/* NOTIFICATIONS */}
                          <div className="dropdown  d-flex message">
                            <a className="nav-link icon text-center" data-bs-toggle="dropdown">
                              <i className="fe fe-message-square" /><span className="pulse-danger" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                              <div className="drop-heading border-bottom">
                                <div className="d-flex">
                                  <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">You have 5
                                    Messages</h6>
                                  <div className="ms-auto">
                                    <a href="javascript:void(0)" className="text-muted p-0 fs-12">make all unread</a>
                                  </div>
                                </div>
                              </div>
                              <div className="message-menu">
                                <a className="dropdown-item d-flex" href="chat.html">
                                  <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="../assets/images/users/1.jpg" />
                                  <div className="wd-90p">
                                    <div className="d-flex">
                                      <h5 className="mb-1">Peter Theil</h5>
                                      <small className="text-muted ms-auto text-end">
                                        6:45 am
                                      </small>
                                    </div>
                                    <span>Commented on file Guest list....</span>
                                  </div>
                                </a>
                                <a className="dropdown-item d-flex" href="chat.html">
                                  <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="../assets/images/users/15.jpg" />
                                  <div className="wd-90p">
                                    <div className="d-flex">
                                      <h5 className="mb-1">Abagael Luth</h5>
                                      <small className="text-muted ms-auto text-end">
                                        10:35 am
                                      </small>
                                    </div>
                                    <span>New Meetup Started......</span>
                                  </div>
                                </a>
                                <a className="dropdown-item d-flex" href="chat.html">
                                  <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="../assets/images/users/12.jpg" />
                                  <div className="wd-90p">
                                    <div className="d-flex">
                                      <h5 className="mb-1">Brizid Dawson</h5>
                                      <small className="text-muted ms-auto text-end">
                                        2:17 pm
                                      </small>
                                    </div>
                                    <span>Brizid is in the Warehouse...</span>
                                  </div>
                                </a>
                                <a className="dropdown-item d-flex" href="chat.html">
                                  <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="../assets/images/users/4.jpg" />
                                  <div className="wd-90p">
                                    <div className="d-flex">
                                      <h5 className="mb-1">Shannon Shaw</h5>
                                      <small className="text-muted ms-auto text-end">
                                        7:55 pm
                                      </small>
                                    </div>
                                    <span>New Product Realease......</span>
                                  </div>
                                </a>
                              </div>
                              <div className="dropdown-divider m-0" />
                              <a href="javascript:void(0)" className="dropdown-item text-center p-3 text-muted">See all
                                Messages</a>
                            </div>
                          </div>
                          {/* MESSAGE-BOX */}
                          <div className="dropdown d-flex header-settings">
                            <a href="javascript:void(0);" className="nav-link icon" data-bs-toggle="sidebar-right" data-target=".sidebar-right">
                              <i className="fe fe-align-right" />
                            </a>
                          </div>
                          {/* SIDE-MENU */}
                          <div className="dropdown d-flex profile-1">
                            <a href="javascript:void(0)" data-bs-toggle="dropdown" className="nav-link leading-none d-flex">
                              <img src="../assets/images/users/21.jpg" alt="profile-user" className="avatar  profile-user brround cover-image" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                              <div className="drop-heading">
                                <div className="text-center">
                                  <h5 className="text-dark mb-0 fs-14 fw-semibold">Percy Kewshun</h5>
                                  <small className="text-muted">Senior Admin</small>
                                </div>
                              </div>
                              <div className="dropdown-divider m-0" />
                              <a className="dropdown-item" href="profile.html">
                                <i className="dropdown-icon fe fe-user" /> Profile
                              </a>
                              <a className="dropdown-item" href="email-inbox.html">
                                <i className="dropdown-icon fe fe-mail" /> Inbox
                                <span className="badge bg-danger rounded-pill float-end">5</span>
                              </a>
                              <a className="dropdown-item" href="lockscreen.html">
                                <i className="dropdown-icon fe fe-lock" /> Lockscreen
                              </a>
                              <a className="dropdown-item" href="login.html">
                                <i className="dropdown-icon fe fe-alert-circle" /> Sign out
                              </a>
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
  )
}

export default header