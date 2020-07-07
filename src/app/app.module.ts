import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';
import { PageNotFoundComponent } from './_pages/error/page-not-found/page-not-found.component';
import { DefaultLayoutComponent } from './_layouts/default-layout/default-layout.component';
import { ButtonComponent } from './_shared/components/button/button.component';
import { FormInputFieldComponent } from './_shared/components/form/form-input-field/form-input-field.component';
import { FormErrorMessageComponent } from './_shared/components/form/form-error-message/form-error-message.component';
import { UserFormComponent } from './_shared/components/form/modules/user-form/user-form.component';
import { FooterNavComponent } from './_shared/components/menus/footer-nav/footer-nav.component';
import { HeaderNavComponent } from './_shared/components/menus/header-nav/header-nav.component';
import { SidebarNavComponent } from './_shared/components/menus/sidebar-nav/sidebar-nav.component';

import { ApiPrefixInterceptor } from './_core/interceptors/api-prefix/api-prefix.interceptor';
import { UserNewComponent } from './_pages/user/user-new/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DefaultLayoutComponent,
    ButtonComponent,
    FormInputFieldComponent,
    FormErrorMessageComponent,
    UserFormComponent,
    FooterNavComponent,
    HeaderNavComponent,
    SidebarNavComponent,
    UserNewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
		FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxDatatableModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {
			provide: HTTP_INTERCEPTORS,
			useClass: ApiPrefixInterceptor,
			multi: true
		}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
