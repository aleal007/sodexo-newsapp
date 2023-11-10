import { Component } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  listNews:any;
  resultListNews:any;
  next:any;
  previous:any;
  last:any;

  constructor(private favorite: FavoriteService){
    this.getFavorites(0);
  }

  getFavorites(numPage:any){
    this.favorite.getNewsFavorite(numPage)
        .subscribe( (data:any) => {
          this.resultListNews = data;
          this.listNews = data.content;
          this.last = data.last;
          //paginacion
          if (!this.last){
            this.next = data.number + 1;
            this.previous = data.number;
          }
          console.log("noticias: ", this.resultListNews);
        },
        (error:any) =>{
          this.showError();
        })
  }

  search( term: string){

    if( term.length === 0){
      return this.getFavorites(0);
    }

    this.favorite.searchNewsFavorite(term, 0)
        .subscribe( (data:any) => {
          this.resultListNews = data;
          this.listNews = data.content;
          this.last = data.last;
          //paginacion
          this.next = data.number + 1;
          this.previous = data.number;
          
          console.log("busqueda favoritas: ", this.resultListNews);
          
        },
        (error:any) =>{
          this.showError();
        })
    
  }

  delete(id:any){

    this.favorite.delete(id)
        .subscribe( (data:any) => {
          Swal.fire('Eliminado', 'Noticia eliminada de favoritos', 'success')
          this.getFavorites(0);
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
