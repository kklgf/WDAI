import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  user: firebase.User = null;
  course: Course = null;
  reviews: Review[] = [];

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private authService: AuthService
  ) {
    this.authService.user.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.loadCourse();
    this.loadReviews();
  }

  private loadCourse(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.courseService.getCourse(params.get('id')))
    )
    .subscribe(course => this.course = course);
  }

  private loadReviews(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.reviewService.getReviewsForCourse(params.get('id')))
    )
    .subscribe(reviews => this.reviews = reviews);
  }

  onNewReview(review: Review): void {
    this.reviewService.addReviewToCourse(this.course.id, review);
    this.reviews.push(review);
    this.loadCourse();
      // .subscribe(review => {
      //   this.reviews.push(review);
      //   this.loadCourse();
      // });
  }

  signUp(): void {
    this.courseService.signUpForCourse(this.course.id, this.user.email)
      .subscribe(course => this.course = course);
  }

  get alreadyEnrolled(): boolean {
    // TODO: course should have attendees field
    return !!this.user && this.course.attendees.includes(this.user.email);
  }

  get eligibleForEnrollment(): boolean {
    return !!this.user && !this.alreadyEnrolled && this.course.attendees.length < this.course.attendee_limit;
  }

  get alreadyReviewed(): boolean {
    return !!this.user && this.reviews.some(review => review.user === this.user.email);
  }
}
