import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';

export interface IStudents {
  id?: number;
  name: string;
  age: number;
  gender: string;
}

export interface IStudentMarks {
  id?: number;
  maths: number;
  phy: number;
  che: number;
  bio: number;
}

@Injectable()
export class AppDb extends Dexie {
  students!: Table<IStudents, number>;
  studentMarks!: Table<IStudentMarks, number>;

  constructor() {
    super('school');
    this.version(2).stores({
      students: '++id, name, age',
      studentMarks: '++id',
    });
  }
}
