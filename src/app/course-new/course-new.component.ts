import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.component.html',
  styleUrls: ['./course-new.component.scss']
})
export class CourseNewComponent {
  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  onSubmit(course: Course): void {
    course.id = course.name;
    course.attendees = [];
    course.actual_note = 5;
    course.notes_added = 1;
    this.courseService.addCourse(course);
    this.router.navigate(['/admin/courses']);
      // .subscribe(() => {
      //   this.router.navigate(['/admin/courses']);
      // });
  }
}
