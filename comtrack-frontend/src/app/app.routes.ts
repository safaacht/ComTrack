import { Routes } from '@angular/router';


import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { Clients} from './pages/clients/clients';
import { Home } from './pages/home/home';
import { Commercial } from './pages/commercial/commercial';

export const routes: Routes = [
    {path: '', component:Home},

    {path: 'login' , component: Login},
    {path: 'signup', component: Signup},
    {path: 'dashboard' , component: Dashboard},
    {path: 'clients' , component: Clients},
    {path:'commercial' , component:Commercial}
];
