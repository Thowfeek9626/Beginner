"use strict";
// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 63 });
console.log("🚀 ~ assignGrade:", assignGraded);
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record
const hexColorMap = {
    red: 'FF0000',
    green: '000FFF',
    blue: '00000FF',
};
const finalGrades = {
    Sara: "K",
    Kelly: "A"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 63 },
    Kelly: { assign1: 85, assign2: 63 }
};
//Pick and Omit
