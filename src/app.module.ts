import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { MockBackend, 
         MockConnection }        from '@angular/http/testing';
         
import {NgbModule}               from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }          from './app/components/index';
import { routing }               from './app.routing';

import { BubleComponent }        from './algorithm/buble/components/index';
import { InsertionComponent }    from './algorithm/insertion/components/index'
import { PageNotFoundComponent } from './algorithm/components/not-found';

import { fakeBackendProvider }   from './_helpers/index';
import { BaseRequestOptions }    from '@angular/http';

import { AlertComponent }        from './alert/directives/index';
import { AuthGuard }             from './_guards/index';
import { AlertService }          from './alert/services/index';
import { UserService }           from './user/services/index';
import { AuthenticationService } from './authentication/index';

import { HomeComponent }         from './home/index';
import { LoginComponent }        from './login/index';
import { RegisterComponent }     from './register/components/register';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BubleComponent,
    InsertionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
