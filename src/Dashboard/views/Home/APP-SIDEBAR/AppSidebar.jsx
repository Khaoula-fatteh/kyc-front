import React from 'react'

function AppSidebar() {
    return (
        <div>
            <div className="sticky">
                <div className="app-sidebar__overlay" data-bs-toggle="sidebar" />
                <div className="app-sidebar">
             
                    <div className="main-sidemenu">
                        <div className="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width={24} height={24} viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                        </svg></div>
                        <ul className="side-menu">
                            <li className="sub-category">
                                <h3>Main</h3>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="index.html"><i className="side-menu__icon fe fe-home" /><span className="side-menu__label">Dashboard</span></a>
                            </li>
                            <li className="sub-category">
                                <h3>UI Kit</h3>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-slack" /><span className="side-menu__label">Apps</span><i className="angle fe fe-chevron-right" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">Apps</a></li>
                                    <li><a href="cards.html" className="slide-item"> Cards design</a></li>
                                    <li><a href="calendar.html" className="slide-item"> Default calendar</a></li>
                                    <li><a href="calendar2.html" className="slide-item"> Full calendar</a></li>
                                    <li><a href="chat.html" className="slide-item"> Chat</a></li>
                                    <li><a href="notify.html" className="slide-item"> Notifications</a></li>
                                    <li><a href="sweetalert.html" className="slide-item"> Sweet alerts</a></li>
                                    <li><a href="rangeslider.html" className="slide-item"> Range slider</a></li>
                                    <li><a href="scroll.html" className="slide-item"> Content Scroll bar</a></li>
                                    <li><a href="loaders.html" className="slide-item"> Loaders</a></li>
                                    <li><a href="counters.html" className="slide-item"> Counters</a></li>
                                    <li><a href="rating.html" className="slide-item"> Rating</a></li>
                                    <li><a href="timeline.html" className="slide-item"> Timeline</a></li>
                                    <li><a href="treeview.html" className="slide-item"> Treeview</a></li>
                                    <li><a href="chart.html" className="slide-item"> Charts</a></li>
                                    <li><a href="footers.html" className="slide-item"> Footers</a></li>
                                    <li><a href="users-list.html" className="slide-item"> User List</a></li>
                                    <li><a href="search.html" className="slide-item">Search</a></li>
                                    <li><a href="crypto-currencies.html" className="slide-item"> Crypto-currencies</a></li>
                                </ul>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-package" /><span className="side-menu__label">Bootstrap</span><i className="angle fe fe-chevron-right" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">Bootstrap</a></li>
                                    <li><a href="alerts.html" className="slide-item"> Alerts</a></li>
                                    <li><a href="buttons.html" className="slide-item"> Buttons</a></li>
                                    <li><a href="colors.html" className="slide-item"> Colors</a></li>
                                    <li className="sub-slide">
                                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)"><span className="sub-side-menu__label">Avatars</span><i className="sub-angle fe fe-chevron-right" /></a>
                                        <ul className="sub-slide-menu">
                                            <li><a href="avatarsquare.html" className="sub-slide-item"> Avatar-Square</a>
                                            </li>
                                            <li><a href="avatar-round.html" className="sub-slide-item"> Avatar-Rounded</a>
                                            </li>
                                            <li><a href="avatar-radius.html" className="sub-slide-item"> Avatar-Radius</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="dropdown.html" className="slide-item"> Drop downs</a></li>
                                    <li><a href="listgroup.html" className="slide-item"> List Group</a></li>
                                    <li><a href="tags.html" className="slide-item"> Tags</a></li>
                                    <li><a href="pagination.html" className="slide-item"> Pagination</a></li>
                                    <li><a href="navigation.html" className="slide-item"> Navigation</a></li>
                                    <li><a href="typography.html" className="slide-item"> Typography</a></li>
                                    <li><a href="breadcrumbs.html" className="slide-item"> Breadcrumbs</a></li>
                                    <li><a href="badge.html" className="slide-item"> Badges / Pills</a></li>
                                    <li><a href="panels.html" className="slide-item"> Panels</a></li>
                                    <li><a href="thumbnails.html" className="slide-item"> Thumbnails</a></li>
                                    <li><a href="offcanvas.html" className="slide-item"> Offcanvas</a></li>
                                    <li><a href="toast.html" className="slide-item"> Toast</a></li>
                                    <li><a href="scrollspy.html" className="slide-item"> Scrollspy</a></li>
                                    <li><a href="mediaobject.html" className="slide-item"> Media Object</a></li>
                                    <li><a href="accordion.html" className="slide-item"> Accordions</a></li>
                                    <li><a href="tabs.html" className="slide-item"> Tabs</a></li>
                                    <li><a href="modal.html" className="slide-item"> Modal</a></li>
                                    <li><a href="tooltipandpopover.html" className="slide-item"> Tooltip and popover</a>
                                    </li>
                                    <li><a href="progress.html" className="slide-item"> Progress</a></li>
                                    <li><a href="carousel.html" className="slide-item"> Carousels</a></li>
                                </ul>
                            </li>
                            <li className="sub-category">
                                <h3>Pre-build Pages</h3>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-layers" /><span className="side-menu__label">Pages</span><i className="angle fe fe-chevron-right" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">Pages</a></li>
                                    <li><a href="profile.html" className="slide-item"> Profile</a></li>
                                    <li><a href="editprofile.html" className="slide-item"> Edit Profile</a></li>
                                    <li><a href="notify-list.html" className="slide-item"> Notifications List</a></li>
                                    <li><a href="email-compose.html" className="slide-item"> Mail-Compose</a></li>
                                    <li><a href="email-inbox.html" className="slide-item"> Mail-Inbox</a></li>
                                    <li><a href="email-read.html" className="slide-item"> Mail-Read</a></li>
                                    <li><a href="gallery.html" className="slide-item"> Gallery</a></li>
                                    <li className="sub-slide">
                                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)"><span className="sub-side-menu__label">Forms</span><i className="sub-angle fe fe-chevron-right" /></a>
                                        <ul className="sub-slide-menu">
                                            <li><a href="form-elements.html" className="sub-slide-item"> Form Elements</a>
                                            </li>
                                            <li><a href="form-layouts.html" className="sub-slide-item"> Form Layouts</a>
                                            </li>
                                            <li><a href="form-advanced.html" className="sub-slide-item"> Form Advanced</a>
                                            </li>
                                            <li><a href="form-editor.html" className="sub-slide-item"> Form Editor</a></li>
                                            <li><a href="form-wizard.html" className="sub-slide-item"> Form Wizard</a></li>
                                            <li><a href="form-validation.html" className="sub-slide-item"> Form
                                                Validation</a></li>
                                        </ul>
                                    </li>
                                    <li className="sub-slide">
                                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)"><span className="sub-side-menu__label">Tables</span><i className="sub-angle fe fe-chevron-right" /></a>
                                        <ul className="sub-slide-menu">
                                            <li><a href="tables.html" className="sub-slide-item">Default table</a></li>
                                            <li><a href="datatable.html" className="sub-slide-item"> Data Tables</a></li>
                                            <li><a href="edit-table.html" className="sub-slide-item"> Edit Tables</a></li>
                                        </ul>
                                    </li>
                                    <li className="sub-slide">
                                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)"><span className="sub-side-menu__label">Extension</span><i className="sub-angle fe fe-chevron-right" /></a>
                                        <ul className="sub-slide-menu">
                                            <li><a href="about.html" className="sub-slide-item"> About Company</a></li>
                                            <li><a href="services.html" className="sub-slide-item"> Services</a></li>
                                            <li><a href="faq.html" className="sub-slide-item"> FAQS</a></li>
                                            <li><a href="terms.html" className="sub-slide-item"> Terms</a></li>
                                            <li><a href="invoice.html" className="sub-slide-item"> Invoice</a></li>
                                            <li><a href="pricing.html" className="sub-slide-item"> Pricing Tables</a></li>
                                            <li><a href="settings.html" className="sub-slide-item"> Settings</a></li>
                                            <li><a href="blog.html" className="sub-slide-item"> Blog</a></li>
                                            <li><a href="blog-details.html" className="sub-slide-item"> Blog Details</a>
                                            </li>
                                            <li><a href="blog-post.html" className="sub-slide-item"> Blog Post</a></li>
                                            <li><a href="empty.html" className="sub-slide-item"> Empty Page</a></li>
                                            <li><a href="construction.html" className="sub-slide-item"> Under
                                                Construction</a></li>
                                        </ul>
                                    </li>
                                    <li className="sub-slide">
                                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)"><span className="sub-side-menu__label">Switcher</span><i className="sub-angle fe fe-chevron-right" /></a>
                                        <ul className="sub-slide-menu">
                                            <li><a className="sub-slide-item" href="switcher-1.html">Switcher Style 1</a>
                                            </li>
                                            <li><a className="sub-slide-item" href="switcher-2.html">Switcher Style 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-shopping-bag" /><span className="side-menu__label">E-Commerce</span><i className="angle fe fe-chevron-right" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">E-Commerce</a></li>
                                    <li><a href="shop.html" className="slide-item"> Shop</a></li>
                                    <li><a href="shop-description.html" className="slide-item"> Product Details</a></li>
                                    <li><a href="cart.html" className="slide-item"> Shopping Cart</a></li>
                                    <li><a href="add-product.html" className="slide-item"> Add Product</a></li>
                                    <li><a href="wishlist.html" className="slide-item"> Wishlist</a></li>
                                    <li><a href="checkout.html" className="slide-item"> Checkout</a></li>
                                </ul>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-folder" /><span className="side-menu__label">File
                                    Manager</span><span className="badge bg-pink side-badge">4</span><i className="angle fe fe-chevron-right hor-angle" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">File Manager</a></li>
                                    <li><a href="file-manager.html" className="slide-item"> File Manager</a></li>
                                    <li><a href="filemanager-list.html" className="slide-item"> File Manager List</a></li>
                                    <li><a href="filemanager-details.html" className="slide-item"> File Details</a></li>
                                    <li><a href="file-attachments.html" className="slide-item"> File Attachments</a></li>
                                </ul>
                            </li>
                            <li className="sub-category">
                                <h3>Misc Pages</h3>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-users" /><span className="side-menu__label">Authentication</span><i className="angle fe fe-chevron-right" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">Authentication</a></li>
                                    <li><a href="login.html" className="slide-item"> Login</a></li>
                                    <li><a href="register.html" className="slide-item"> Register</a></li>
                                    <li><a href="forgot-password.html" className="slide-item"> Forgot Password</a></li>
                                    <li><a href="lockscreen.html" className="slide-item"> Lock screen</a></li>
                                    <li className="sub-slide">
                                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)"><span className="sub-side-menu__label">Error Pages</span><i className="sub-angle fe fe-chevron-right" /></a>
                                        <ul className="sub-slide-menu">
                                            <li><a href="400.html" className="sub-slide-item"> 400</a></li>
                                            <li><a href="401.html" className="sub-slide-item"> 401</a></li>
                                            <li><a href="403.html" className="sub-slide-item"> 403</a></li>
                                            <li><a href="404.html" className="sub-slide-item"> 404</a></li>
                                            <li><a href="500.html" className="sub-slide-item"> 500</a></li>
                                            <li><a href="503.html" className="sub-slide-item"> 503</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)">
                                    <i className="side-menu__icon fe fe-cpu" />
                                    <span className="side-menu__label">Submenu items</span><i className="angle fe fe-chevron-right" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">Submenu items</a></li>
                                    <li><a href="javascript:void(0)" className="slide-item">Submenu-1</a></li>
                                    <li className="sub-slide">
                                        <a className="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)"><span className="sub-side-menu__label">Submenu-2</span><i className="sub-angle fe fe-chevron-right" /></a>
                                        <ul className="sub-slide-menu">
                                            <li><a className="sub-slide-item" href="javascript:void(0)">Submenu-2.1</a></li>
                                            <li><a className="sub-slide-item" href="javascript:void(0)">Submenu-2.2</a></li>
                                            <li className="sub-slide2">
                                                <a className="sub-side-menu__item2" href="javascript:void(0)" data-bs-toggle="sub-slide2"><span className="sub-side-menu__label2">Submenu-2.3</span><i className="sub-angle2 fe fe-chevron-right" /></a>
                                                <ul className="sub-slide-menu2">
                                                    <li><a href="javascript:void(0)" className="sub-slide-item2">Submenu-2.3.1</a></li>
                                                    <li><a href="javascript:void(0)" className="sub-slide-item2">Submenu-2.3.2</a></li>
                                                    <li><a href="javascript:void(0)" className="sub-slide-item2">Submenu-2.3.3</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="sub-slide-item" href="javascript:void(0)">Submenu-2.4</a></li>
                                            <li><a className="sub-slide-item" href="javascript:void(0)">Submenu-2.5</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub-category">
                                <h3>General</h3>
                            </li>
                            <li>
                                <a className="side-menu__item" href="widgets.html"><i className="side-menu__icon fe fe-grid" /><span className="side-menu__label">Widgets</span></a>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-map-pin" /><span className="side-menu__label">Maps</span><i className="angle fe fe-chevron-right" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">Maps</a></li>
                                    <li><a href="maps1.html" className="slide-item">Leaflet Maps</a></li>
                                    <li><a href="maps2.html" className="slide-item">Mapel Maps</a></li>
                                    <li><a href="maps.html" className="slide-item">Vector Maps</a></li>
                                </ul>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-bar-chart-2" /><span className="side-menu__label">Charts</span><span className="badge bg-secondary side-badge">6</span><i className="angle fe fe-chevron-right hor-angle" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">Charts</a></li>
                                    <li><a href="chart-chartist.html" className="slide-item">Chart Js</a></li>
                                    <li><a href="chart-flot.html" className="slide-item"> Flot Charts</a></li>
                                    <li><a href="chart-echart.html" className="slide-item"> ECharts</a></li>
                                    <li><a href="chart-morris.html" className="slide-item"> Morris Charts</a></li>
                                    <li><a href="chart-nvd3.html" className="slide-item"> Nvd3 Charts</a></li>
                                    <li><a href="charts.html" className="slide-item"> C3 Bar Charts</a></li>
                                    <li><a href="chart-line.html" className="slide-item"> C3 Line Charts</a></li>
                                    <li><a href="chart-donut.html" className="slide-item"> C3 Donut Charts</a></li>
                                    <li><a href="chart-pie.html" className="slide-item"> C3 Pie charts</a></li>
                                </ul>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i className="side-menu__icon fe fe-wind" /><span className="side-menu__label">Icons</span><i className="angle fe fe-chevron-right" /></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">Icons</a></li>
                                    <li><a href="icons.html" className="slide-item"> Font Awesome</a></li>
                                    <li><a href="icons2.html" className="slide-item"> Material Design Icons</a></li>
                                    <li><a href="icons3.html" className="slide-item"> Simple Line Icons</a></li>
                                    <li><a href="icons4.html" className="slide-item"> Feather Icons</a></li>
                                    <li><a href="icons5.html" className="slide-item"> Ionic Icons</a></li>
                                    <li><a href="icons6.html" className="slide-item"> Flag Icons</a></li>
                                    <li><a href="icons7.html" className="slide-item"> pe7 Icons</a></li>
                                    <li><a href="icons8.html" className="slide-item"> Themify Icons</a></li>
                                    <li><a href="icons9.html" className="slide-item">Typicons Icons</a></li>
                                    <li><a href="icons10.html" className="slide-item">Weather Icons</a></li>
                                    <li><a href="icons11.html" className="slide-item">Bootstrap Icons</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width={24} height={24} viewBox="0 0 24 24">
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                        </svg></div>
                    </div>
                </div>
                {/*/APP-SIDEBAR*/}
            </div>
        </div>
    )
}

export default AppSidebar