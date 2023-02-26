import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.css']
})
export class GifsListComponent {
  constructor(
    private gifsService: GifsService
  ) { }

  get gifs() {
    return this.gifsService.gifslist
  }

}
