import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { ReusableComponent } from './reusable/reusable.component';
import { StorageComponent } from './storage/storage.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path:'add-user',
    component: AddUserComponent
  },
  {
    path:'reusable',
    component: ReusableComponent
  },{
    path: 'storage',
    component: StorageComponent
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent
  },
  {
    path: 'view-user/:id',
    component: ViewUserComponent
  },
  {
    path: 'rapi',
    component: ResourceApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
