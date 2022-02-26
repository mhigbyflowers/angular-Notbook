import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/interfaces/page';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnChanges {
  @Input() page: Page;
  @Output() update: EventEmitter<Page> = new EventEmitter();
  noteText = ''
  constructor(route: Router) {
  }

  ngOnChanges(): void {
    if (this.page) {
      this.noteText = this.page.value;
    }
    
  }
  noteChange(value) {
    this.update.emit({
      pageId:this.page.pageId,
      value: value
    })
  }


}
