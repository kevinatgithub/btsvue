<template>
  <!--Navbar-->
  <mdb-navbar color="red" dark>
    <!-- Navbar brand -->
    <mdb-navbar-brand href="/">
      Blood Transfusion Module
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed>Request</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
                <mdb-dropdown-item><router-link to="/">Manage Request</router-link></mdb-dropdown-item>
                <mdb-dropdown-item>Create New Request</mdb-dropdown-item>
            </mdb-dropdown-menu>
        </mdb-dropdown>
        <router-link to="/patients"><mdb-nav-item>Patients</mdb-nav-item></router-link>
        <router-link to="/physicians"><mdb-nav-item>Physician</mdb-nav-item></router-link>
        <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink slot="toggle" waves-fixed>Reports</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
                <mdb-dropdown-item><router-link to="/monthlycensus">Monthly Census</router-link></mdb-dropdown-item>
            </mdb-dropdown-menu>
        </mdb-dropdown>
        <mdb-nav-item href="#" active>Logout</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand } from 'mdbvue';
import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem} from 'mdbvue'

export default {
    components : {mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand,
    mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem}
}
</script>
