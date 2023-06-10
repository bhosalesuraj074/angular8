import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : '', redirectTo:'home', pathMatch:'full'}, 
  {path:'home', component : HomeComponent},
  {path:'about-us',component : AboutusComponent },
  {path:'cakelist', component:CakelistComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'cakedetails/:id', component:CakedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
