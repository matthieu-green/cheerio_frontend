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
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { GrantsComponent } from './grants/grants.component';
import { GrantsItemComponent } from './grants-item/grants-item.component';


const appRoutes: Routes= [
  { path: "" , component: GrantsComponent},
  { path: "news", component: NewsComponent},
  { path: "save", component: GrantsComponent},
  { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsItemComponent,
    GrantsComponent,
    GrantsItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    AppComponent,
    {provide: 'BaseUrl', useValue: baseUrl},
    ProcessHTTPMsgService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
