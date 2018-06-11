import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'users', component: UsersComponent, children: [
        {path: 'new', component: UserNewComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
