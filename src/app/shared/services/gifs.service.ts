import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private API_KEY: string = 'RGsLTpDSYQ4VjPLeiufqRvbnyt9jeUH2';
  private apiGif: string = 'https://api.giphy.com/v1/gifs'
  private history: string[] = [];
  public gifslist: Gif[] = []

  constructor(private http: HttpClient) {
    // Carga de historial y ultima busqueda en el local storage
    this.history = JSON.parse(localStorage.getItem('history')!) || []
    this.gifslist = JSON.parse(localStorage.getItem('lastSearchGif')!) || []
  }

  //get
  getHistorial() {
    return [...this.history]
  }

  //post
  addHistory(txt: string) {
    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', '10')
      .set('q', txt)

    this.http.get<SearchGifsResponse>(`${this.apiGif}/search`, {params})
      .subscribe((res) => {
        console.log(res)
        this.gifslist = res.data
        localStorage.setItem('lastSearchGif', JSON.stringify(res.data))
      })

    if (this.history.some((res) => res == txt) === true) {
      return this.history && localStorage.setItem('history', JSON.stringify(this.history));
    } else {
      return this.history.unshift(
        txt.trim().toLowerCase()) && localStorage.setItem('history', JSON.stringify(this.history)
      );
    }
    }
}
