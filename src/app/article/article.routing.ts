// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app
import { ContainerComponent } from './components/layout/container/container.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'list',
        component: ArticleListComponent,
      },
      {
        path: 'create',
        component: ArticleFormComponent,
      },
      {
        path: 'edit/:slug',
        component: ArticleFormComponent,
      },
      { path: '**', redirectTo: 'list' },
    ],
  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
