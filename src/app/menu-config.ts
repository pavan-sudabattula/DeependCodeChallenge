import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ChequeListComponent } from './cheque-list.component';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cheques',
        component: ChequeListComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(routerConfig);