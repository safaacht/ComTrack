import { Routes } from '@angular/router';


import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { Clients} from './pages/clients/clients';

export const routes: Routes = [
    {path: '', redirectTo: 'app.index' , pathMatch: 'full'},

    {path: 'login' , component: Login},
    {path: 'signup', component: Signup},
    {path: 'dashboard' , component: Dashboard},
    {path: 'clients' , component: Clients},
];
