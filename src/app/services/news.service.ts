import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.spaceflightnewsapi.net/v4/articles/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getListNews(url: any){
    return this.http.get(url);
  }

  search(term: any) {
    const url = `${ urlBase }?has_event=false&has_launch=false&limit=10&search=${ term }`;
    return this.http.get(url);
  }

  orderingByTitle(){
    const url = `${ urlBase }?has_event=false&has_launch=false&ordering=published_at`;
    return this.http.get(url);
  }
}
