import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path : '', redirectTo:'home', pathMatch:'full'},
  {path :'home' , component:HomeComponent},
  {path :'about', component:AboutUsComponent },
  {path :'login', component:LoginComponent},
  {path :'cakes', canActivate:[AuthGuard], component: CakelistComponent },
  {path :'cakedetails/:id', component:CakedetailsComponent},
  {path : 'cart', component: CartComponent}, 
  {path : '**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
