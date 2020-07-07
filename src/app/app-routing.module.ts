import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '_layouts/default-layout/default-layout.component'
import { HomeComponent } from '_pages/home/home.component'
import { UserNewComponent } from '_pages/user/user-new/user-new.component'
import { PageNotFoundComponent } from '_pages/error/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent }, 
      { path: 'user/new', component: UserNewComponent }, 
      { path: 'user/update/:id', component: UserNewComponent }, 
    ]
  }, {
    path: '**', 
    component: PageNotFoundComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
