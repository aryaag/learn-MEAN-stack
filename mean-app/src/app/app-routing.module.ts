import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'create', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
