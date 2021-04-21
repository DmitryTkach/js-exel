import './scss/style.scss'
import {Router} from "@core/router/Router";
import {Dashboard} from "@src/pages/Dashboard";
import {ExelPage} from "@src/pages/ExelPage";

// Router
const router = new Router('#app', {
    dashboad: Dashboard,
    exel: ExelPage
})



