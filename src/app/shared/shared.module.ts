import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { GifsManagerModule } from '../gifs-manager/gifs-manager.module';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent,
    GifsManagerModule
  ],
  imports: [
    CommonModule,
    GifsManagerModule
  ],

})
export class SharedModule { }
