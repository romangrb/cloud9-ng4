import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent }         from './home/index';
import { LoginComponent }        from './login/index';
import { RegisterComponent }     from './register/index';
import { AuthGuard }             from './_guards/index';
import { PageAComponent }        from './algorithm/components/a';
import { PageBComponent }        from './algorithm/components/b';
import { PageNotFoundComponent } from './algorithm/components/not-found';

const appRoutes: Routes = [
    { path: '',          component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login',     component: LoginComponent },
    { path: 'register',  component: RegisterComponent },

    { path: 'page-a',    component: PageAComponent },
    { path: 'page-b',    component: PageBComponent },
    
    { path: '**',        component: PageNotFoundComponent }

];

export const routing = RouterModule.forRoot(appRoutes);