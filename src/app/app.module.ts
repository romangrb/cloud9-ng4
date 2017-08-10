import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent }          from './app.component';
import { PageAComponent }        from './page-a.component';
import { PageBComponent }        from './page-b.component';
import { PageNotFoundComponent } from './not-found.component';


const appRoutes: Routes = [
  
  { path: '',   component: AppComponent },
  { path: 'page-a', component: PageAComponent },
  { path: 'page-b', component: PageBComponent },
  { path: '**', component: PageNotFoundComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
