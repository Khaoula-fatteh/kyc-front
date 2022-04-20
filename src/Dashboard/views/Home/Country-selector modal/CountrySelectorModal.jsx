import React from 'react'

function CountrySelectorModal() {
    return (
        <div>
            <div className="modal fade" id="country-selector">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content country-select-modal">
                        <div className="modal-header">
                            <h6 className="modal-title">Choose Country</h6><button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <ul className="row p-3">
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block active">
                                        <span className="country-selector"><img alt src="../assets/images/flags/us_flag.jpg" className="me-3 language" /></span>USA
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/italy_flag.jpg" className="me-3 language" /></span>Italy
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/spain_flag.jpg" className="me-3 language" /></span>Spain
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/india_flag.jpg" className="me-3 language" /></span>India
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/french_flag.jpg" className="me-3 language" /></span>French
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/russia_flag.jpg" className="me-3 language" /></span>Russia
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/germany_flag.jpg" className="me-3 language" /></span>Germany
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/argentina.jpg" className="me-3 language" /></span>Argentina
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/malaysia.jpg" className="me-3 language" /></span>Malaysia
                                    </a>
                                </li>
                                <li className="col-lg-6 mb-2">
                                    <a href="javascript:void(0)" className="btn btn-country btn-lg btn-block">
                                        <span className="country-selector"><img alt src="../assets/images/flags/turkey.jpg" className="me-3 language" /></span>Turkey
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountrySelectorModal