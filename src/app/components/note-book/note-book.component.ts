import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Page } from 'src/app/interfaces/page';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.scss']
})
export class NoteBookComponent implements OnInit {
  @ViewChildren('notePage') notePage: ElementRef
  pages: Array<Page>;
  page: Page;
  pageNumber: number;
  constructor(public elm: ElementRef) {

    this.page = { value: '', pageId: 1, focus: true }
    this.pages = sessionStorage.getItem('pages') ? JSON.parse(sessionStorage.getItem('pages')) : [this.page];
  }

  ngOnInit(): void {
    this.pageNumber = this.pages.length;
  }

  storePages() {
    console.log(this.pages, 'pages');
    sessionStorage.setItem('pages', JSON.stringify(this.pages))
  }

  clearPages() {
    sessionStorage.removeItem('pages');
    this.pages = [this.page];
  }

  getPageId(index, page) {
    return page.id
  }

  addPage() {
    if (this.pages.length >= 1 && this.pages.length < 3) {
      this.pages.forEach(page => page.focus = false);
      this.pageNumber++;
      this.pages.push({ value: '', pageId: this.pageNumber, focus: true });

    }
    this.scrollAndFocus();


    this.storePages();
  }

  removePage() {
    if (this.pages.length > 1 && this.pages.length < 4) {
      this.pageNumber--;
      this.pages.pop();
    } else if (this.pages.length == 1) {
      this.clearPages();
    }
    this.scrollAndFocus();
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

  scrollAndFocus() {
    setTimeout(() => {
      const scrollToMe = document.getElementById('ref' + this.pageNumber);
      console.log(scrollToMe);
      
      const focusMe = this.elm.nativeElement.querySelector('#text-box' + this.pageNumber);
      scrollToMe.scrollIntoView(true);
      window.scrollTo(0, 0);
      focusMe.focus();
    }, 100);

  }

  calculateWidth(pLayout) {
    return { width: 'calc(' + Math.floor(pLayout.offsetWidth / this.pageNumber) + 'px)' }
  }
  calculateContainerWidth() {

    return { width: 'calc(' + this.pageNumber + '00% - 5%)' }
  }

}
