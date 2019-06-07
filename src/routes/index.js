import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Requests from '../components/request/RequestsList' 
import Patients from '../components/patient/PatientList'
import Physicians from '../components/physician/PhysicianList'
import MonthlyCensus from '../components/report/MonthlyCensus'

export default new VueRouter({
    routes : [
        { path : "/", component : Requests},
        { path : "/patients", component : Patients},
        { path : "/physicians", component : Physicians},
        { path : "/monthlycensus", component : MonthlyCensus},
    ]
})