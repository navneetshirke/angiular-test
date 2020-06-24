import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [

  {
    path: '',
    component:LoginComponent
  },
  {
  path:'dashboard',
  component:DashboardComponent,canActivate: [AuthGuard]
  }, 
  
  {
    path:'product-list',
    component:ProductComponent,canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
