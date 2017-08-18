import { TokenInterceptorService } from './shared/token-interceptor.service';
import { AuthService } from './shared/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { AddOnePipe } from './add-one.pipe';
import { CreateBookComponent } from './create-book/create-book.component';

import { BookStoreService } from './shared/book-store.service';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    AddOnePipe,
    CreateBookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [
    BookStoreService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(auth: AuthService) {
    auth.handleAuthentication();
  }
}
