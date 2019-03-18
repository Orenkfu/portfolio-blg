import { ProjectsPortalComponent } from './pages/projects-portal/projects-portal.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogPortalComponent } from './pages/blog-portal/blog-portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { GamesPortalComponent } from './pages/games-portal/games-portal.component';
import { AbtestComponent } from './pages/projects-portal/abtest/abtest.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blogs',
    component: BlogPortalComponent,
  },
  {
    path: 'blogs/:id',
    component: BlogPostComponent
  },
  {
    path: 'games',
    component: GamesPortalComponent
  },
  {
    path: 'projects',
    component: ProjectsPortalComponent
  },
  {
    path: 'projects/:name',
    component: AbtestComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
