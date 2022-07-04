import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedditFeedComponent } from './components/reddit-feed/reddit-feed.component';

const routes: Routes = [
{
  path: '', redirectTo: '/reddit-feed', pathMatch: 'full'
},
{
  path: 'reddit-feed', component: RedditFeedComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
