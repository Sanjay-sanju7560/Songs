import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component:HomeComponent,path:''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// const routes: Routes = [
// {
//   component:LoginComponentComponent,path:''
// },
// {
//   component:DashboardComponentComponent,path:'dashboard'
// }
// ];