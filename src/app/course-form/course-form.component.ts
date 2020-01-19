import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Course, CourseType } from '../models/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() initialValue: Course;
  @Input() submitText: string;
  @Output() done = new EventEmitter<Course>();

  courseForm: FormGroup;
  CourseType = CourseType;

  constructor(private formBuilder: FormBuilder) {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ects: [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15),
      ])],
      type: [null, Validators.required],
      semester: [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ])],
      attendee_limit: [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
      ])],
      image_url: [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^https?:\/\/.+\.\w+$/),
      ])],
    });
  }

  ngOnInit(): void {
    if (this.initialValue) {
      const { name, description, ects, type, semester, attendee_limit, image_url } = this.initialValue;
      // TODO
      this.courseForm.setValue({ name, description, ects, type, semester: semester, attendee_limit: attendee_limit, image_url: image_url });
    }
  }

  onSubmit(): void {
    this.done.emit(this.courseForm.value);
  }
}
