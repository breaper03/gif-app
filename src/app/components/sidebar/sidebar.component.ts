import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get list() {return this.gifsService.getHistorial()}

  constructor(
    private gifsService: GifsService
  ) { }

  search(txt: string) {
    console.log('txt', txt)
    this.gifsService.addHistory(txt)
  }
}
