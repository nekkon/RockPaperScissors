import { Routes } from "@angular/router/router";

export const appRoutes: Routes = [
    { path: 'menu', loadChildren: './views/menu/menu.module#MenuModule' },
    { path: 'play', loadChildren: './views/play/play.module#PlayModule' },
    { path: 'result', loadChildren: './views/result/result.module#ResultModule' },
    { 
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    }
];
