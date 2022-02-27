import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxColorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
