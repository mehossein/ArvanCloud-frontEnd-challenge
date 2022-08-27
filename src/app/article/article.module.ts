// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// app
import { ArticleApi } from '@app/article/Api';
import { PaginationComponent } from '@shared/components';
import { HeaderComponent } from '@app/article/components/';
import { SidebarComponent } from '@app/article/components/';
import { ContainerComponent } from '@app/article/components/';
import { ArticleListComponent } from '@app/article/components';
import { ArticleFormComponent } from '@app/article/components';
import { ArticleRoutingModule } from '@app/article/article.routing';

@NgModule({
  declarations: [
    // app
    HeaderComponent,
    SidebarComponent,
    ContainerComponent,
    PaginationComponent,
    ArticleFormComponent,
    ArticleListComponent,
  ],
  imports: [
    // angular
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    // app
    ArticleRoutingModule,
  ],
  providers: [ArticleApi],
})
export class ArticleModule {}
