#!/usr/bin/node

export default function getListStudents () {

    const arrayOfObjs = [];

    arrayOfObjs.push({ 'id': 1, 'firstName': 'Guillaume', 'location': 'San Francisco' });
    arrayOfObjs.push({ 'id': 2, 'firstName': 'James', 'location': 'Columbia' });
    arrayOfObjs.push({ 'id': 5, 'firstName': 'Serena', 'location': 'San Francisco' });

    return arrayOfObjs;
}
