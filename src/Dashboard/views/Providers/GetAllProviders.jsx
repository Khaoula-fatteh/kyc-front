import React, { useEffect, useState } from 'react'
import Footer from '../Home/Footer/footer'
import Header from '../Home/Header/header'
import AppSidebar from '../Home/APP-SIDEBAR/AppSidebar'
import SidebarRight from '../Home/Sidebar-right/SidebarRight'
import ProviderService from '../../services/ProviderService'
import Swal from 'sweetalert2'
function GetAllProviders() {

  const [providers, setProviders] = useState()


  const GetAllProviders = () => {
    ProviderService.getAllProvider().then(res => {
      console.log(res)
      setProviders(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }
  useEffect(() => {

    GetAllProviders()

  }, [])

  const onDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        ProviderService.removeProvider(id).then(res => {
          GetAllProviders()
        }).catch(err => {
          console.log(err)
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }


  return (
    <div>
      <div>
        {/* PAGE */}
        <div className="page">
          <div className="page-main">
            {/* app-Header */}
            <Header />
            {/* /app-Header */}
            {/*APP-SIDEBAR*/}
            <AppSidebar />
            {/*app-content open*/}
            <div className="main-content app-content mt-0">
              <div className="side-app">
                {/* CONTAINER */}
                <div className="main-container container-fluid">
                  {/* Row */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div class="card-header">
                          <h3 class="card-title">Providers</h3>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table style={{ marginTop: 20 }} className="table table-bordered border text-nowrap mb-0" id="basic-edit">
                              <thead>
                                <tr>
                                  <th>Id</th>
                                  <th>First name</th>
                                  <th>Last name</th>
                                  <th>Phone</th>
                                  <th>Company</th>
                                  <th>E-mail</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {providers?.map((item, index) => {
                                  return (
                                    <tr id="trow_1">
                                      <td class="text-center">{index}</td>
                                      <td>{item.name}</td>
                                      <td>{item.lastname}</td>
                                      <td>{item.phone}</td>
                                      <td>{item.company}</td>
                                      <td>{item.email}</td>
                                      <td name="bstable-actions"><div class="btn-list">
                                        <button id="bDel" type="button" class="btn  btn-sm btn-danger" onClick={(e) => onDelete(item._id)}>
                                          <span class="fe fe-trash-2"> </span>
                                        </button>
                                      </div>
                                      </td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Row */}

                </div>
                {/* CONTAINER CLOSED */}
              </div>
            </div>
            {/*app-content closed*/}
          </div>
          {/* Sidebar-right */}
          <SidebarRight />
          {/*/Sidebar-right*/}
          {/* Country-selector modal*/}

          {/* Country-selector modal*/}
          {/* FOOTER */}
          <Footer />
          {/* FOOTER CLOSED */}
        </div>
      </div>

    </div>
  )
}

export default GetAllProviders