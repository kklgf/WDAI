import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'semester', 'ects', 'attendee_limit', 'actions'];
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.courses = courses.slice()
          .sort((c1, c2) => c1.name.localeCompare(c2.name));
      });
  }

  onDelete(course: Course): void {
    this.courseService.removeCourse(course.id)
      .subscribe(course => {
        this.courses = this.courses.filter(other => other.id !== course.id);
      });
  }
}
