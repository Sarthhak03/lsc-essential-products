import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about/about.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ProductModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
