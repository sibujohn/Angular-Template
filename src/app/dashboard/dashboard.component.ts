import { Component, OnInit} from '@angular/core';

import { DashboardService } from './dashboard.service';
import * as DashboardModels from './dashboard.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() {

  }

  ngOnInit() {
    
  }
  
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }

}
