import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'
import SidebarRight from './Sidebar-right/SidebarRight'
import AppSidebar from './APP-SIDEBAR/AppSidebar'
import CountrySelectorModal from './Country-selector modal/CountrySelectorModal'
import Layout from './Layout/layout'
import { Outlet } from 'react-router-dom'
function home() {
  return (
    <div>
      <div>

        {/* PAGE */}
        <div className="page">
          <div className="page-main">
            {/* app-Header */}
            <Header/>
            {/* /app-Header */}
            {/*APP-SIDEBAR*/}
            <AppSidebar/>
            {/*app-content open*/}
            <Layout/>
            {/*app-content close*/}
          </div>
          {/* Sidebar-right */}
          <SidebarRight/>
          {/*/Sidebar-right*/}
          {/* Country-selector modal*/}
          <CountrySelectorModal/>
          {/* Country-selector modal*/}
          {/* FOOTER */}
          <Footer/>
          {/* FOOTER END */}
        </div>
        {/* BACK-TO-TOP */}
        <a href="#top" id="back-to-top"><i className="fa fa-angle-up" /></a>
      </div>

    </div>
  )
}

export default home