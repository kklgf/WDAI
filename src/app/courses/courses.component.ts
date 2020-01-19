import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { Search } from '../models/search';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  pageSize: number = 6;
  pageIndex: number = 0;
  courses: Course[] = [];
  search: Search = {};

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  onSearch(search: Search): void {
    this.search = search;
    this.pageIndex = 0;
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
