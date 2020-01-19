import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Review } from '../models/review';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  course: Course = null;

  constructor(private firestore: AngularFirestore) {}

  getReviewsForCourse(courseId: string): Observable<Review[]> {
    // TODO: implement
    // this.firestore.collection<Review>('reviews').doc<Review>(courseId).valueChanges();
    return this.firestore.collection<Review>('reviews').valueChanges()
      .pipe(
      map(reviews => reviews.filter(review => review.course === courseId))
    );
    // return of([]);
  }

  // addReviewToCourse(courseId: string, review: Review): Observable<Review> {
  addReviewToCourse(courseId: string, review: Review) {
    // TODO: implement
    review.course = courseId;
    let actual_course = this.firestore.collection<Course>('lectures').doc<Course>(courseId);
    actual_course.get()
      .subscribe(response => {
        const course = response.data();
        actual_course.update({
            actual_note: (review.rating + course.actual_note * course.notes_added) / (course.notes_added + 1),
            notes_added: course.notes_added + 1
          });
      });
    // actual_course.update({
    //       actual_note: review.rating});
    this.firestore.collection<Review>('reviews').doc(courseId + review.comment).set(review);
    // return of(null);
  }
}
