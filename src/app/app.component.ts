import { WallsService } from './walls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  walls = [];
  constructor(private service: WallsService){
    this.walls =this.service.getWalls(); 
  }
  sync(){
   console.log(this.walls);
  }
  
}
