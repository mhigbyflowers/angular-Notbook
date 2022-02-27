import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Page } from 'src/app/interfaces/page';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.scss']
})
export class NoteBookComponent implements OnInit {
  @ViewChildren('notePage') notePage: ElementRef;
  pages: Array<Page>;
  page: Page;
  pageNumber: number;
  pageColor: string;
  textColor: string;
  colors: any;
  constructor(public elm: ElementRef) {
    this.page = { value: '', pageId: 1 };
    // get values from sessionStorage
    this.pages = sessionStorage.getItem('pages') ? JSON.parse(sessionStorage.getItem('pages')) : [this.page];
    this.pageColor = sessionStorage.getItem('color') ? JSON.parse(sessionStorage.getItem('color')).pageColor : 'FFFFFF55';
    this.textColor = sessionStorage.getItem('color') ? JSON.parse(sessionStorage.getItem('color')).textColor : 'darkgreen';
  }

  ngOnInit(): void {
    this.pageNumber = this.pages.length;
  }

  storePages() {
    sessionStorage.setItem('pages', JSON.stringify(this.pages));
  }

  clearPages() {
    sessionStorage.removeItem('pages');
    this.pages = [this.page];
  }

  getPageId(index, page) {
    return page.id;
  }

  addPage() { // gate the add page button
    if (this.pages.length >= 1 && this.pages.length < 5) {
      this.pageNumber++;
      this.pages.push({ value: '', pageId: this.pageNumber });
    }
    this.scrollAndFocus();
    this.storePages();
  }

  removePage() {
    if (this.pages.length > 1 && this.pages.length < 6) { // gate the remove button
      this.pageNumber--;
      this.pages.pop();
    } else if (this.pages.length === 1) {
      this.clearPages();
    }
    this.scrollAndFocus();
    this.storePages();
  }

  handleTextChange(e) {
    this.pages.forEach(page => {
      if (page.pageId === e.pageId) {
        page.value = e.value;
      }
    });
    this.storePages();
  }

  // focus on a new page if newPage or focus on the privious page if removePage
  scrollAndFocus() {
    setTimeout(() => {
      const scrollToMe = document.getElementById('ref' + this.pageNumber);
      const focusMe = this.elm.nativeElement.querySelector('#text-box' + this.pageNumber);
      scrollToMe.scrollIntoView(true);
      window.scrollTo(0, 0);
      focusMe.focus();
    }, 100);
  }

  calculateWidth(pLayout) { // calculating width of pages based on pLayout's width so boxes fit.
    return { width: 'calc(' + Math.floor(pLayout.offsetWidth / this.pageNumber) + 'px)' };
  }

  calculateContainerWidth() { // useing pageNumber to determain how big the container should be
    return { width: 'calc(' + this.pageNumber + '00%)' };
  }

  pageColorStyles() {
    const style = { background: '', color: '' };
    style.background = this.pageColor;
    style.color = this.textColor;
    return style;
  }
}
