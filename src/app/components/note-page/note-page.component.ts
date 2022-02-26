import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnInit {

  noteText = ''
  constructor() { }

  ngOnInit(): void {
   this.noteText=localStorage.getItem('note')
  }
  noteChange(e){
    localStorage.setItem('note',e)
    
  }

}
