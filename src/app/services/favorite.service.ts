import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }

  save(data: any) {
    const url = `${ urlBase }/news`;
    return this.http.post(url, data);
  }

  getNewsFavorite(numPage: any){
    const url = `${ urlBase }/news/page/${numPage}`;
    return this.http.get(url);
  }

  searchNewsFavorite(term: any, numPage: any){
    const url = `${ urlBase }/news/filter/${term}/page/${numPage}`;
    return this.http.get(url);
  }

  delete(id: any){
    const url = `${ urlBase }/news/${id}`;
    return this.http.delete(url);
  }

}
