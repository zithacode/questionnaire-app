import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routes} from './app-routing.module';
import { UsersComponent } from './users/users.component'
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { ReusableComponent } from './reusable/reusable.component';
import { StorageComponent } from './storage/storage.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    HomeComponent,
    UsersComponent,
    AddUserComponent,
    ViewUserComponent,
    UpdateUserComponent,
    ResourceApiComponent,
    ReusableComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
