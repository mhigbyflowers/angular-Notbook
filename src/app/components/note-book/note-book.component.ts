import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/interfaces/page';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.scss']
})
export class NoteBookComponent implements OnInit {
  pages: Array<Page>;
  page: Page;
  pageNumber: number;
  constructor() {
    this.page = { value: '', pageId: this.pageNumber }
    this.pages = sessionStorage.getItem('pages') ? JSON.parse(sessionStorage.getItem('pages')) : [this.page];
    this.pageNumber = this.pages.length;
  }

  ngOnInit(): void {
    console.log(this.pages, 'storage');
  }

  storePages() {
    sessionStorage.setItem('pages', JSON.stringify(this.pages))
  }
  clearPages() {
    sessionStorage.removeItem('pages');
    this.pages = [this.page];
  }
  addPage() {
    if (this.pages.length >= 1 && this.pages.length < 3) {
      this.pageNumber++;
      this.pages.push({ value: '', pageId: this.pageNumber });
    }
    this.storePages();
  }

  removePage() {
    if (this.pages.length > 1 && this.pages.length < 4) {
      this.pageNumber--;
      this.pages.pop();
      console.log(this.pages, '');
    } else if(this.pages.length == 1){
      this.clearPages();
    }
    this.storePages();
  }

  take(e) {
    console.log(e, 'eeee');
    this.pages.forEach(page => {
      if (page.pageId === e.pageId) {
        page.value = e.value;
      }
    });
    this.storePages();
  }

}
