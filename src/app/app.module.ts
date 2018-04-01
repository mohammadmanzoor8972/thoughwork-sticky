import { WallsService } from './walls.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StickyWallComponent,
    StickyNoteComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2DragDropModule.forRoot()
  ],
  providers: [WallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
