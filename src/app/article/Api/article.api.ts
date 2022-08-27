// angular
import { Injectable, Injector } from '@angular/core';

// Third-Party
import { Observable } from 'rxjs';

// app
import { ServiceBase } from '@shared/classes';

@Injectable()
export class ArticleApi extends ServiceBase {
  private readonly _tagsController = 'tags';
  private readonly _articleController = 'articles';

  constructor(injector: Injector) {
    super(injector);
  }

  //#region  "article api"

  getArticleList(): Observable<any> {
    return this.get$(this._articleController);
  }

  getArticleByName(name: string): Observable<any> {
    return this.get$(this._articleController + `/${name}`);
  }

  createArticle(article: any): Observable<any> {
    return this.post$(this._articleController, { article: article });
  }

  updateArticle(id: string, article: any): Observable<any> {
    return this.put$(this._articleController, id, { article: article });
  }

  deleteArticle(id: string): Observable<any> {
    return this.delete$(this._articleController, id);
  }

  //#endregion "article api"

  //#region "tags api"

  getTagList(): Observable<any> {
    return this.get$(this._tagsController);
  }

  //#endregion "tags api"
}
