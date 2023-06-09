const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
];


let res=students.filter(stu => stu.courses.includes('cs303'))
    .reduce((accu, stu) => {
        let average = stu.grades.reduce((a,b) => a+b,0)/stu.grades.length;
        accu[stu.name] = average;
        return accu;
    }, {});

console.log(res)

