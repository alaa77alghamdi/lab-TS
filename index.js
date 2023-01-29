"use strict";
exports.__esModule = true;
;
var school = [
    { id: 1, name: 'alaa', level: '5', isSenior: true },
    { id: 2, name: 'sara', level: '2', isSenior: false },
    { id: 3, name: 'noor', level: '4', isSenior: false }
];
function printStudent(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var student = arr_1[_i];
        console.log("ID: ".concat(student.id, ", Name: ").concat(student.name, ", Level: ").concat(student.level, ", Senior: ").concat(student.isSenior, " "));
    }
}
printStudent(school);
;
var tech = [
    { id: 1, name: 'alaa', specialty: '5', courseNum: 7676 },
    { id: 2, name: 'sara', specialty: '2', courseNum: 8686 },
    { id: 3, name: 'noor', specialty: '4', courseNum: 9974 }
];
function isSenior(student, school) {
    var isSenior = Boolean;
    return isSenior;
}
function course(tech, courseNum) {
    tech.courseNum;
    return tech;
}
