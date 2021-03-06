import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './Dashboard/sections/profile/profile.component';
import { BuyComponent } from './Dashboard/Sections/buy/buy.component';
import { MainComponent } from './Dashboard/Sections/main/main.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full' },
  {
    path: 'user',component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent  },
      { path: 'login', component: LoginComponent },  
    ]
  },
  {path:'home', component:HomeComponent,canActivate:[AuthGuard],
  children: [
    { path: '', component: MainComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'buy', component: BuyComponent },
  ]
  },   
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
