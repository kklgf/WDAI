import { Injectable } from '@angular/core';
import {from, Observable, of, pipe} from 'rxjs';

import { Course } from '../models/course';
import {AngularFirestore} from '@angular/fire/firestore';
import { map, mergeMap} from 'rxjs/operators';
import {database} from 'firebase';
import FieldValue = firebase.firestore.FieldValue;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private firestore: AngularFirestore) { }

  getCourses(): Observable<Course[]> {
    return this.firestore.collection<Course>('lectures').valueChanges();
  }

  getCourse(id: string): Observable<Course> {
    return this.getCourses().pipe(
      map(courses => courses.find(course => course.id === id))
  );
  }

  addCourse(course: Course) {
    this.firestore.collection<Course>('lectures').doc<Course>(course.id).set(course);
  }

  removeCourse(id: string): Observable<Course> {
    const course = this.getCourse(id);
    this.firestore.collection<Course>('lectures').doc(id).delete();
    return course;
  }

  updateCourse(id: string, course) {
    this.firestore.collection<Course>('lectures').doc(id).update(course);
  }

  signUpForCourse(id: string, email: string) {
    let actual_course = this.firestore.collection<Course>('lectures').doc(id);
    actual_course.update({
      attendees: FieldValue.arrayUnion(email)
    });
    return of(null);
  }
}
