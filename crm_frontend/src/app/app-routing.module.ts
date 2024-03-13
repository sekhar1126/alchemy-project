import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'nav', component: NavbarComponent },
  {path:'signup',component:SignupComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'forgot-password',component:ForgetPasswordComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
