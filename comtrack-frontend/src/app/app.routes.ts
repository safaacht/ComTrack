import { Routes } from '@angular/router';


import { LoginComponent } from './pages/LoginComponent/login.component';
import { DashboardComponent } from './pages/DashbordComponent/dashboard.component';
import { ClientsComponent } from './pages/ClientsComponent/clients.component';
import { NavComponent } from './pages/NavComponent/nav.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login' , pathMatch: 'full'},

    {path: 'login' , component: LoginComponent},
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'clients' , component: ClientsComponent},
];
