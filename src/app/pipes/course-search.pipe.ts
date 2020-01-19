import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../models/course';
import { Search } from '../models/search';

@Pipe({
  name: 'courseSearch'
})
export class CourseSearchPipe implements PipeTransform {
  transform(courses: Course[], search: Search): Course[] {
    return courses.filter(course => {
      if (search.text && !course.name.match(new RegExp(search.text, 'i'))) return false;
      if (search.minRating && (!course.actual_note || course.actual_note < search.minRating)) return false;
      if (search.maxRating && (!course.actual_note || course.actual_note > search.maxRating)) return false;
      if (search.semester && course.semester !== search.semester) return false;
      if (search.ects && course.ects !== search.ects) return false;
      return true;
    });
  }
}
