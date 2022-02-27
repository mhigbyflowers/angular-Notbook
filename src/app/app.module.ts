import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxColorsModule } from 'ngx-colors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteBookComponent } from './components/note-book/note-book.component';
import { NotePageComponent } from './components/note-page/note-page.component';

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
