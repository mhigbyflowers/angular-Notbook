import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/interfaces/page';
import { TextColors } from 'src/app/interfaces/textColors';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})

export class NotePageComponent implements OnChanges {
  @ViewChild('note') textArea: ElementRef;
  @Input() page: Page;
  @Input() color: TextColors;
  @Output() update: EventEmitter<Page> = new EventEmitter();
  noteText: string;

  constructor(route: Router) {
    this.noteText = '';
  }

  ngOnChanges(): void {
    if (this.page) {
      this.noteText = this.page.value;
    }
    sessionStorage.setItem('color', JSON.stringify(this.color));
  }

  noteChange(note) {
    this.update.emit({
      pageId: this.page.pageId,
      value: note.value,
    });
  }


}
