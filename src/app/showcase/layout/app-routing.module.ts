import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component';
import { AppMainComponent } from './app.main.component';

const routes: Routes = [
    { path: '', component: LandingComponent, pathMatch: 'full' },
    {
        path: '',
        component: AppMainComponent,
        children: [
            {path: '', redirectTo:'/home-page', pathMatch: 'full'},
            {path: 'home-page', loadChildren: () => import('../../main/home/home.module').then(m => m.HomeModule)},
            {path: 'data-visualization', loadChildren: ()=> import('../../main/data-visualization/data-visualization.module').then(m => m.DataVisualizationModule)}
        ],
    },
    { path: 'notfound', loadChildren: () => import('../pages/notfound/notfound.module').then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: '/notfound' }
];

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
