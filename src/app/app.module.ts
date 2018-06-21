import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { SigninComponent } from './auth/signin/signin.component';
import { UserService } from './users/users.service';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { UserViewComponent } from './users/user-view/user-view.component';
import { HttpModule } from '@angular/http';
import { UserSearchComponent } from './users/user-search/user-search.component';
import { FilterPipe } from './shared/filter.pipe';
import { UserPostComponent } from './users/user-post/user-post.component';
import { UserPostNewComponent } from './users/user-post-new/user-post-new.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    HomeComponent,
    UserNewComponent,
    SigninComponent,
    SignupComponent,
    UserViewComponent,
    UserSearchComponent,
    FilterPipe,
    UserPostComponent,
    UserPostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
