import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IsWaitersGuard } from './guards/is-waiters.guard';
import { LoginComponent } from './login/login.component';

 export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', canActivate: [IsWaitersGuard], component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
