import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

import { Review } from '../models/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent {
  @Output() newReview = new EventEmitter<Review>();
  reviewForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reviewForm = this.formBuilder.group({
      rating: [null, Validators.required],
      comment: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/\S+/),
        Validators.maxLength(100),
      ])],
    });
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value) + ' pkt';
    }
    return value;
  }

  onSubmit(formGroupDirective: FormGroupDirective): void {
    this.newReview.emit(this.reviewForm.value as Review);
    this.reviewForm.reset();
    /* Clear validity of material fields: https://stackoverflow.com/a/48217303 */
    formGroupDirective.resetForm();
  }
}
