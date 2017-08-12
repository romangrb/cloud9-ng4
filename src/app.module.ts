import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent }          from './app/component/app';
import { PageAComponent }        from './algorithm/components/a';
import { PageBComponent }        from './algorithm/components/b;
import { PageNotFoundComponent } from './app/component/not-found';


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
