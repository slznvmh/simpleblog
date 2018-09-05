import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewpostComponent } from './new-post/new-post.component';

const routes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
