import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'home', component : AppComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent }
];

const rm = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    rm
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
