import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BarRatingModule } from 'ngx-bar-rating';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseComponent } from './course/course.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { CourseTypePipe } from './pipes/course-type.pipe';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseSearchPipe } from './pipes/course-search.pipe';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseNewComponent } from './course-new/course-new.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { CustomMatPaginatorIntlService } from './services/custom-mat-paginator-intl.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import {MatSliderModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseCardComponent,
    CourseComponent,
    ReviewListComponent,
    ReviewFormComponent,
    CourseTypePipe,
    CourseFormComponent,
    CourseSearchComponent,
    CourseSearchPipe,
    SignInComponent,
    SignUpComponent,
    CourseEditComponent,
    CourseNewComponent,
    AdminCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatChipsModule,
    BarRatingModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSliderModule
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntlService,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
