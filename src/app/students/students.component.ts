import { Component } from '@angular/core';
import { AppDb } from '../service/db';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  studentData: any;
  constructor(private db: AppDb) {}

  createStudent() {
    this.db.students.add({
      name: 'Harish',
      age: 21,
      gender: 'Male',
    });
  }

  async getStudent() {
    this.studentData = JSON.stringify(
      await this.db.students.where({ age: 21 }).toArray()
    );
  }
}
