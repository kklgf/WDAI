import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Search } from '../models/search';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {
  @Output() search = new EventEmitter<Search>();
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      text: [''],
      minRating: [null],
      maxRating: [null],
      semester: [null],
      ects: [null],
    });
    this.searchForm.valueChanges.subscribe(value => {
      this.search.emit(value as Search);
    });
  }

  clear(): void {
    this.searchForm.reset();
  }
}
