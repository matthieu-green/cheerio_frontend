import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { baseUrl } from './baseurl';
import { RestangularConfigFactory } from './restConfig';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './services/auth-guard.service';
import { ContactService } from './services/contact.service';
import { ProductService } from './services/products.service';
import { AuthorService } from './services/author.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor, UnauthorizedInterceptor } from './services/auth.interceptor';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductModelComponent } from './product-model/product-model.component';
import { TintinModelComponent } from './tintin-model/tintin-model.component';
import { AsterixModelComponent } from './asterix-model/asterix-model.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component'
import { NewProductComponent } from './new-product/new-product.component'
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { FilterPipe } from './filter.pipe';
import { AuthorComponent } from './author/author.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';


const appRoutes: Routes= [
  { path: "" , component: HomePageComponent},
  { path: "home", component: HomePageComponent},
  { path: "livres", component: ProductsComponent},
  { path: "livres/:id", component: ProductDetailComponent},
  { path: "new-product", canActivate: [AuthGuard], component: NewProductComponent},
  { path: "test", component: ProductDetailComponent},
  { path: "news", component: NewsComponent},
  { path: "new-author", canActivate: [AuthGuard], component: NewAuthorComponent},
  { path: "contacts", canActivate: [AuthGuard], component: ContactListComponent},
  { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductModelComponent,
    TintinModelComponent,
    AsterixModelComponent,
    ProductDetailComponent,
    ProductsComponent,
    NewProductComponent,
    ContactComponent,
    ContactListComponent,
    FilterPipe,
    AuthorComponent,
    NewAuthorComponent,
    NewsComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOCn3zbngn6maokzk0O6QpYzUArGSVzIw'
    })


  ],
  providers: [
    ContactService,
    ProductDetailComponent,
    AppComponent,
    ProductService,
    {provide: 'BaseUrl', useValue: baseUrl},
    ProcessHTTPMsgService,
    AuthService,
    AuthGuard,
    AuthorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
