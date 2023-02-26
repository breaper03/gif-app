import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/shared/services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.css']
})
export class GifsSearchComponent {
  @ViewChild('txt') txt!: ElementRef<HTMLInputElement>;
  constructor(
    private gifsSrevice: GifsService
  ) { }

  search(txt: string) {
    if (txt) {
      this.gifsSrevice.addHistory(txt)
      this.txt.nativeElement.value = ''
    }
  }
}
