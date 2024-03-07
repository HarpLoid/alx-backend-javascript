#!/usr/bin/node

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.setName(name);
    this.setLength(length);
    this.setStudents(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be string');
    }
  }

  setLength(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be number');
    }
  }

  setStudents(students) {
    if (typeof students === 'object') {
      this._students = students;
    } else {
      throw new TypeError('Student must be an object');
    }
  }

  getName() {
    return this._name;
  }

  getLength() {
    return this._length;
  }

  getStudents() {
    return this._students;
  }
}
