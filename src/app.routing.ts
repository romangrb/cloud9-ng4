import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent }         from './home/index';
import { LoginComponent }        from './login/index';
import { RegisterComponent }     from './register/index';
import { AuthGuard }             from './_guards/index';
import { BubleComponent }        from './algorithm/buble/components/index';
import { InsertionComponent }    from './algorithm/insertion/components/index'
import { PageNotFoundComponent } from './algorithm/components/not-found';

const appRoutes: Routes = [
    { path: '',          component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login',     component: LoginComponent },
    { path: 'register',  component: RegisterComponent },

    { path: 'sort-buble',        component: BubleComponent },
    { path: 'sort-insertion',    component: InsertionComponent },
    
    { path: '**',        component: PageNotFoundComponent }

];

export const routing = RouterModule.forRoot(appRoutes);