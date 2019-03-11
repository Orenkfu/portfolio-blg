import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BlogPortalComponent } from './pages/blog-portal/blog-portal.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionnaireComponent } from './global/questionnaire/questionnaire.component';
import { QuestionComponent } from './global/questionnaire/question/question.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ResultComponent } from './global/questionnaire/result/result.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogPortalComponent,
    HomeComponent,
    QuestionnaireComponent,
    QuestionComponent,
    AdminAuthComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    ResultComponent,
    TitlecasePipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
