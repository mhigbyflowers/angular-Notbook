import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnInit {

  noteText = ''
  constructor(route:Router) { 

    
  }

  ngOnInit(): void {
   this.noteText=sessionStorage.getItem('note')
  
  }
  noteChange(e){
    sessionStorage.setItem('note',e)
  }


}
