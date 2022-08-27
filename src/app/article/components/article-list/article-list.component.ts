// angular
import { Component, OnInit } from '@angular/core';

// app
import { ArticleApi } from '@app/article/Api';
import { Article } from '@app/article/interfaces/article.interface';

@Component({
  selector: 'arvan-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  pending: boolean = false;
  RowCount: number = 0;
  articleList: Article[] = [];
  pageIndex: number = 0;

  constructor(private readonly _articleApi: ArticleApi) {}

  ngOnInit(): void {
    this._getArticleList();
  }

  private _getArticleList(): void {
    if (this.pending) return;
    this.pending = true;
    this._articleApi.getArticleList().subscribe({
      next: ({ articlesCount, articles }) => {
        this.pending = false;
        this.RowCount = articlesCount;
        this.articleList = articles;
      },
      error: () => {
        this.pending = false;
        this.RowCount = 0;
        this.articleList = [];
      },
    });
  }

  changePagination(pageIndex: number): void {
    this.pageIndex = pageIndex;
  }
}
