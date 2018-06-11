import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { SigninComponent } from './signin/signin.component';
import { UserService } from './users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    HomeComponent,
    UserNewComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
