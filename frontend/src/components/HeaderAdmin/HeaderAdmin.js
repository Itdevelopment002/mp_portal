import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Profile from '../../assets/images/header/no-profile-img.jpg';
import { FiShoppingCart } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import favicon from '../../assets/images/header/favicon.png'
import { BiSearch } from 'react-icons/bi';


const HeaderAdmin = () => {

    return (
        <header class="app-header sticky sticky-pin" id="header" >

            {/* <!-- Start::main-header-container --> */}
            <div class="main-header-container container-fluid">

                {/* <!-- Start::header-content-left --> */}
                <div class="header-content-left">

                    {/* <!-- Start::header-element --> */}
                    <div class="header-element">
                        <div class="horizontal-logo">
                            <Link to="/" class="header-logo">
                                <img src={favicon} alt="logo" class="desktop-logo" />
                                <img src={favicon} alt="logo" class="toggle-dark" />
                                <img src={favicon} alt="logo" class="desktop-dark" />
                                <img src={favicon} alt="logo" class="toggle-logo" />
                                {/* <img src={favicon}  alt="logo" class="toggle-white" />
                                            <img src={favicon}  alt="logo" class="desktop-white" /> */}
                                <span class="d-none">Citizen Grievance Management System</span>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element mx-lg-0 mx-2 d-lg-none d-block my-auto">
                        <Link
                            aria-label="Toggle Sidebar"
                            className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                            data-bs-toggle="collapse"
                            data-bs-target="#sidebarMenu"
                            to="#"
                        >
                            <span></span>
                        </Link>
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div class="header-element header-search d-md-block d-none my-auto auto-complete-search">
                        {/* <!-- Start::header-link --> */}
                        <input type="text" class="header-search-bar form-control" id="header-search" placeholder="Search anything here ..." spellcheck="false" autocomplete="off" autocapitalize="off" />
                        <Link to="/javascript:void(0);" class="header-search-icon border-0">
                            <i class="ri-search-line"></i>
                        </Link>
                        {/* <!-- End::header-link --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                </div>
                {/* <!-- End::header-content-left -->

                  <!-- Start::header-content-right --> */}
                <ul class="header-content-right list-unstyled">

                    {/* <!-- Start::header-element --> */}
                    <li class="header-element d-md-none ">
                        <Link to="/javascript:void(0);" class="header-link" data-bs-toggle="modal" data-bs-target="#header-responsive-search">
                            {/* <!-- Start::header-link-icon --> */}
                            <BiSearch className="header-link-icon" />
                            {/* <!-- End::header-link-icon --> */}
                        </Link>
                    </li>
                    {/* <!-- End::header-element --> */}


                    {/* <li class="list-unstyled">
                        <div class="dropdown">
                            <Link to="javascript:void(0);" class="btn btn-sm btn-light text-muted dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true"> Select Language</Link>
                            <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-end">
                                <li><Link class="dropdown-item" to="javascript:void(0);">English</Link> </li>
                                <li><Link class="dropdown-item" to="javascript:void(0);">Marathi</Link> </li>
                                <li><Link class="dropdown-item" to="javascript:void(0);">Hindi</Link> </li>
                            </ul>
                        </div>
                    </li> */}
                    <li class="">
                        <div class="pt-2 pt-xl-0 lang-dropdown">
                            <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                            <select class="form-select text-center" id="autoSizingSelect">
                                <option selected="">Select Language</option>
                                <option value="1">English</option>
                                <option value="2">Marathi</option>
                                <option value="3">Hindi</option>
                            </select>
                        </div>
                    </li>

                    {/* <!-- Start::header-element --> */}
                    <li class="header-element notifications-dropdown d-xl-block d-none dropdown">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <Link to="/javascript:void(0);" class="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 header-link-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"></path>
                            </svg>
                            <span class="header-icon-pulse bg-primary2 rounded pulse pulse-secondary"></span>
                        </Link>
                        {/* <!-- End::header-link|dropdown-toggle -->
    <!-- Start::main-header-dropdown --> */}
                        <div class="main-header-dropdown dropdown-menu dropdown-menu-end" >
                            <div class="p-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <p class="mb-0 fs-15 fw-medium">Notifications</p>
                                    <span class="badge bg-secondary text-fixed-white" id="notifiation-data">5 Unread</span>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>
                            <ul class="list-unstyled mb-0" id="header-notification-scroll">
                                <li class="dropdown-item">
                                    <div class="d-flex align-items-center">
                                        <div class="pe-2 lh-1">
                                            <span class="avatar avatar-md avatar-rounded bg-primary">
                                                <img src={Profile} alt="user1" />
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p class="mb-0 fw-medium"><Link to="#.">Notification Heading</Link> </p>
                                                <div class="text-muted fw-normal fs-12 header-notification-text text-truncate">Notification Sub Heading</div>
                                                <div class="fw-normal fs-10 text-muted op-8">1 hours ago</div>
                                            </div>
                                            <div>
                                                <Link to="/javascript:void(0);" class="min-w-fit-content dropdown-item-close1">
                                                    <i class="ri-close-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown-item">
                                    <div class="d-flex align-items-center">
                                        <div class="pe-2 lh-1">
                                            <span class="avatar avatar-md bg-primary avatar-rounded fs-20">
                                                <FiShoppingCart className="lh-1" />
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p class="mb-0 fw-medium"><Link to="#.">Notification Heading</Link> </p>
                                                <div class="text-muted fw-normal fs-12 header-notification-text text-truncate">Notification Sub Heading</div>
                                                <div class="fw-normal fs-10 text-muted op-8">2 hours ago</div>
                                            </div>
                                            <div>
                                                <Link to="/javascript:void(0);" class="min-w-fit-content dropdown-item-close1">
                                                    <i class="ri-close-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown-item">
                                    <div class="d-flex align-items-center">
                                        <div class="pe-2 lh-1">
                                            <span class="avatar avatar-md bg-orange avatar-rounded">
                                                <i class="ri-gift-line lh-1 fs-16"></i>
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p class="mb-0 fw-medium"><Link to="#.">Notification Heading</Link> </p>
                                                <div class="text-muted fw-normal fs-12 header-notification-text text-truncate">Notification Sub Heading</div>
                                                <div class="fw-normal fs-10 text-muted op-8">2 hours ago</div>
                                            </div>
                                            <div>
                                                <Link to="/javascript:void(0);" class="min-w-fit-content dropdown-item-close1">
                                                    <i class="ri-close-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown-item">
                                    <div class="d-flex align-items-center">
                                        <div class="pe-2 lh-1">
                                            <span class="avatar avatar-md bg-success avatar-rounded">
                                                <FiShoppingCart className="lh-1" />
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p class="mb-0 fw-medium"><Link to="#.">Notification Heading</Link> </p>
                                                <div class="text-muted fw-normal fs-12 header-notification-text text-truncate">Notification Sub Heading</div>
                                                <div class="fw-normal fs-10 text-muted op-8">1 Day ago</div>
                                            </div>
                                            <div>
                                                <Link to="/javascript:void(0);" class="min-w-fit-content dropdown-item-close1">
                                                    <i class="ri-close-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="dropdown-item">
                                    <div class="d-flex align-items-center">
                                        <div class="pe-2 lh-1">
                                            <span class="avatar avatar-md bg-primary2 avatar-rounded">
                                                <i class="ri-gift-line lh-1 fs-16"></i>
                                            </span>
                                        </div>
                                        <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p class="mb-0 fw-medium"><Link to="#.">Notification Heading</Link> </p>
                                                <div class="text-muted fw-normal fs-12 header-notification-text text-truncate">Notification Sub Heading</div>
                                                <div class="fw-normal fs-10 text-muted op-8">5 hours ago</div>
                                            </div>
                                            <div>
                                                <Link to="/javascript:void(0);" class="min-w-fit-content dropdown-item-close1">
                                                    <i class="ri-close-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="p-3 empty-header-item1 border-top mt-5">
                                <div class="d-grid">
                                    <Link to="/javascript:void(0);" class="btn btn-primary btn-wave view-all-btn">View All</Link>
                                </div>
                            </div>
                            <div class="p-5 empty-item1 d-none">
                                <div class="text-center">
                                    <span class="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                        <i class="ri-notification-off-line fs-2"></i>
                                    </span>
                                    <h6 class="fw-medium mt-3">No New Notifications</h6>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End::main-header-dropdown --> */}
                    </li>
                    {/* <!-- End::header-element --> */}



                    {/* <!-- Start::header-element --> */}
                    <li class="header-element dropdown">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <Link to="" class="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <div class="d-flex align-items-center">
                                <div>
                                    <img src={Profile} alt="img" class="avatar avatar-sm" />
                                </div>
                            </div>
                        </Link>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        <ul class="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                            <li>
                                <div class="dropdown-item text-center border-bottom">
                                    <span>
                                        User Name
                                    </span>
                                    <span class="d-block fs-12 text-muted">Designation</span>
                                </div>
                            </li>
                            <li><Link class="dropdown-item d-flex align-items-center" to="#."><FiUser className="p-1 rounded-circle bg-primary-transparent me-2 fs-16" />Profile</Link> </li>
                            {/* <!-- <li><Link class="dropdown-item d-flex align-items-center" to="#."><i class="fe fe-settings p-1 rounded-circle bg-primary-transparent ings me-2 fs-16"></i>Settings</Link> </li> --> */}
                            <li><Link to="/login" class="dropdown-item d-flex align-items-center" ><FiLock className="p-1 rounded-circle bg-primary-transparent ut me-2 fs-16" />Log Out</Link> </li>
                        </ul>
                    </li>
                    {/* <!-- End::header-element --> */}


                </ul>
                {/* <!-- End::header-content-right --> */}

            </div>
            {/* <!-- End::main-header-container --> */}

        </header>
    )
}

export default HeaderAdmin