export interface Course {
  id?: string;
  name: string;
  description: string;
  ects: number;
  type: CourseType;
  semester: number;
  attendee_limit: number;
  image_url: string;
  actual_note?: number;
  attendees: string[];
  notes_added?: number;
}

export enum CourseType {
  Lecture = 'lecture',
  Laboratory = 'laboratory',
  Project = 'project'
}
