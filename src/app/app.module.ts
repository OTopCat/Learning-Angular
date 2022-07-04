import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditFeedComponent } from './components/reddit-feed/reddit-feed.component';
import { AmpPipe } from './amp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RedditFeedComponent,
    AmpPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
