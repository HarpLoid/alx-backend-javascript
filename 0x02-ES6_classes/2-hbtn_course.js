#!/usr/bin/node

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.checkType(name, 'string', 'Name');
    this.checkType(length, 'number', 'Length');
    this.checkType(students, 'array', 'Students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    this.checkType(name, 'string', 'Name');
    this._name = name;
  }

  set length(length) {
    this.checkType(length, 'number', 'Length');
    this._length = length;
  }

  set students(students) {
    this.checkType(students, 'array', 'Students');
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  checkType(value, type, errorVariable) {
    let errorMessage = "";
    if (!errorMessage) {
        switch (type) {
            case 'string':
                errorMessage = `${errorVariable} must be string`;
                break;
            case 'number':
                errorMessage = `${errorVariable} must be number`;
                break;
            case 'array':
                errorMessage = `${errorVariable} must be array of strings`;
                break;
        
            default:
                errorMessage = 'Invalid type';
        }
    }

    if (type === 'array') {
        if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
            throw new TypeError(errorMessage);
        }
    } else if (typeof value !== type) {
        throw new TypeError(errorMessage);
    }
  }
}
