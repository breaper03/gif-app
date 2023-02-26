import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsMainComponent } from './gifs-main/gifs-main.component';
import { GifsSearchComponent } from '../gifs-manager/gifs-search/gifs-search.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';



@NgModule({
  declarations: [GifsMainComponent, GifsSearchComponent, GifsListComponent],
  exports: [
    GifsMainComponent,
    GifsSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsManagerModule { }
