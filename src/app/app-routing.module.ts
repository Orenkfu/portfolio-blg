import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogPortalComponent } from './pages/blog-portal/blog-portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blogs',
    component: BlogPortalComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'login',
        component: AdminAuthComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
