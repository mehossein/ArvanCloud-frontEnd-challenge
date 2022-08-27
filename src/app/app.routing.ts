// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { AuthGuard } from '@app/auth/shared/guard';
import { ArticleGuard } from '@app/article/shared/guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./auth/auth.module').then((module) => {
        return module.AuthModule;
      }),
  },
  {
    path: 'articles',
    canActivate: [ArticleGuard],
    loadChildren: () =>
      import('./article/article.module').then((module) => {
        return module.ArticleModule;
      }),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
