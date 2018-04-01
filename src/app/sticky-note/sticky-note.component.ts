import { Input, Output } from '@angular/core/src/metadata/directives';
import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent{
  @Input('sticky-text') text="";
  @Input('sticky-theme') theme="";
  @Input('sticky-id') textid="";
  @Output('change') change = new EventEmitter();

  constructor() { }
  
  delteRecord(){
    this.change.emit();
  }

  updateRecord(){
   // this.change.emit();
  }

}
