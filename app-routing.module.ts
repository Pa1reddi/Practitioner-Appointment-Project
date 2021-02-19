import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './components/calender/calender.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path : '',
    component : HeaderComponent,
    children :[
      {
        path :'',
        component : HomeComponent,
      },
      {
        path : 'client-info',
        component : ClientInfoComponent,
      },
      {
        path : 'calender',
        component : CalenderComponent,
      },
      
    ],
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
