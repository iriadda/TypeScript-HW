// class Courses {
//     constructor(title: string, monthDuration: number) {
//         this.title = title;
//         this.monthDuration = monthDuration;
//     }
//     title:string
//     monthDuration:number
// }
// let coursesAndDurationArr:Courses[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArr.sort((a, b) => b.monthDuration - a.monthDuration));
// console.log(coursesAndDurationArr.filter(value => value.monthDuration > 5));
// let newCoursesAndDurationArray = coursesAndDurationArr.map(function (value:Courses, index:number) {
//      return {
//             id: index + 1,
//             title: value.title,
//             monthDuration: value.monthDuration
//         }
// });
//
// console.log(newCoursesAndDurationArray);