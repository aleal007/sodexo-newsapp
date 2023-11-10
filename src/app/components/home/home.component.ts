import { Component } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { NewsService } from 'src/app/services/news.service';
import Swal from 'sweetalert2'

const url = 'https://api.spaceflightnewsapi.net/v4/articles/?has_event=false&has_launch=false&limit=10';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  listNews:any;
  resultListNews:any;
  next:any;
  previous:any;
  newToSave: any;

  constructor(private news: NewsService, private favorite: FavoriteService){
    this.getNews(url);
  }

  getNews(url:any){
    this.news.getListNews(url)
        .subscribe( (data:any) => {
          this.resultListNews = data;
          this.listNews = data.results;
          this.next = data.next;
          this.previous = data.previous;
          console.log("noticias: ", this.resultListNews);
        },
        (error:any) =>{
          this.showError();
        })
  }

  buscar( term: string){

    if( term.length === 0){
      return this.getNews(url);
    }

    this.news.search(term)
        .subscribe( (data:any) => {
          this.resultListNews = data;
          this.listNews = data.results;
          this.next = data.next;
          this.previous = data.previous;
          console.log("noticias: ", this.resultListNews);
        },
        (error:any) =>{
          this.showError();
        })
    
  }

  addFavorite(id: any){

    
    this.listNews.forEach((element:any) => {
      if ( element.id === id )
        this.newToSave = element;
    });

    let data = {
      title: this.newToSave.title,
      summary: this.newToSave.summary,
	    publishedAt: this.newToSave.published_at,
      newsSite: this.newToSave.news_site,
      imageUrl: this.newToSave.image_url,
      savedAt: new Date()
    }

    this.favorite.save(data)
        .subscribe( (resp: any) => {
          Swal.fire('Excelente!', 'Noticia agregada a favoritos', 'success')
          console.log("noticia agregada a favoritos ", resp);
        },
        (error: any) => {
          this.showError();
        })

  }

  orderByTitle(){
    this.news.orderingByTitle()
        .subscribe( (data:any) => {
          this.resultListNews = data;
          this.listNews = data.results;
          this.next = data.next;
          this.previous = data.previous;
        },
        (error:any) =>{
          this.showError();
        })
  }

  showError(){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salió mal"
    });
  }

  

}
