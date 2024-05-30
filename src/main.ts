// Utility Types


//Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1,{grade: 95}));
const assignGraded: Assignment = updateAssignment(assign1, {grade: 63})
console.log("🚀 ~ assignGrade:", assignGraded)


// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> ={...assignGraded, verified: true}

recordAssignment({...assignGraded, verified: true})


//Record
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '000FFF',
    blue: '00000FF',
}

type Students = "Sara" | "Kelly"
type LetterGrades = "S" | "K" | "A"

const finalGrades: Record<Students, LetterGrades> = {
    Sara : "K",
    Kelly: "A"
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2:63},
    Kelly: {assign1: 85, assign2:63}
}

//Pick and Omit
