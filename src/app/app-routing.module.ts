import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserViewComponent } from './users/user-view/user-view.component';
import { UserSearchComponent } from './users/user-search/user-search.component';
import { UserPostComponent } from './users/user-post/user-post.component';
import { UserPostNewComponent } from './users/user-post-new/user-post-new.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'users', component: UsersComponent, children: [
        {path: 'new', component: UserNewComponent},
        {path: 'search', component: UserSearchComponent},
        {path: ':id', component: UserViewComponent},
        {path: ':id/posts/new', component: UserPostNewComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
