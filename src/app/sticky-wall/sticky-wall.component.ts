import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-sticky-wall',
  templateUrl: './sticky-wall.component.html',
  styleUrls: ['./sticky-wall.component.css']
})
export class StickyWallComponent implements OnInit {
  @Input('sticky-wallId') wallid=""; 
  @Input('sticky-title') title=""; 
  @Input('sticky-theme') stickytheme="";
  @Input('sticky-data') stickyList = [];

  data = {id:0,text:""}
  addstick = false;
  counter =0;
  
  
  constructor() { }

  addnote(input:HTMLInputElement){
    if(input.value){
    this.addstick = false;
    this.stickyList.unshift({id:this.counter++, text:input.value});
    input.value ="";
    } else {
      input.focus();
    }
  }

  update(index){
    this.data=this.stickyList[index];
  }

  deleteNote(index){
    this.stickyList.splice(index, 1)
  }

  ngOnInit() {
      }

}
