import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/interfaces/page';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.scss']
})
export class NoteBookComponent implements OnInit {
  pages: Array<Page>
  pageNumber: number;
  constructor() {
    this.pageNumber = 1;
    this.pages = [{ value: '', pageId: this.pageNumber }]
  }

  ngOnInit(): void {

    this.pages = sessionStorage.getItem('pages') ? JSON.parse(sessionStorage.getItem('pages')) : this.pages;

    console.log(this.pages, 'storage');

  }
  addPage() {

    {
      this.pages.length < 3 &&
      this.pageNumber++;
      this.pages.push({ value: '', pageId: this.pageNumber });
     
    }
    console.log(this.pages,'add');
    
  }
  
  removePage() {
    { 
      this.pages.length > 1 &&
      this.pageNumber--;
      this.pages.pop();
      console.log(this.pages,'');
    }
  }
  take(e) {
    console.log(e, 'eeee');
    this.pages.forEach(page => {
      if (page.pageId === e.pageId) {
        page.value = e.value;
      }
    });
    sessionStorage.setItem('pages', JSON.stringify(this.pages))

  }

}
