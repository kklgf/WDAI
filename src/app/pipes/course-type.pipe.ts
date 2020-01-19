import { Pipe, PipeTransform } from '@angular/core';

import { CourseType } from '../models/course';

@Pipe({
  name: 'courseType'
})
export class CourseTypePipe implements PipeTransform {
  transform(courseType: CourseType): string {
    switch (courseType) {
      case CourseType.Lecture: return "Wykład";
      case CourseType.Laboratory: return "Zajęcia laboratoryjne";
      case CourseType.Project: return "Projekt";
    }
    return null;
  }
}
