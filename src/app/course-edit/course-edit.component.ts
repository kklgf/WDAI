import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Course } from '../models/course';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  course: Course = null;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.courseService.getCourse(params.get('id')))
    )
    .subscribe(course => this.course = course);
  }

  onSubmit(course: Course): void {
    // course.id = course.name;
    // course.attendees = [];
    this.courseService.updateCourse(this.course.id, course);
    this.router.navigate(['/admin/courses']);
  }
}
