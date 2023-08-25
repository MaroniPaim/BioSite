import { Component } from '@angular/core';
import { style, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner',
      [state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      }))])
  ]
})
export class BannerComponent {
  public estado: string ='escondido'

}
