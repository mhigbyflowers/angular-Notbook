import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotePageComponent } from './components/note-page/note-page.component';
import { NoteBookComponent } from './components/note-book/note-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NotePageComponent,
    NoteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
