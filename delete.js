// var arraye = [false, false, false, false];
// var stu = [1,2,3,4];
//
// function check(arr1,arr2) {
//   for (var i = 1; i < arr1.length; i++) {
//     for (var a = 1; a < arr2.length; a++) {
//       // if(i === 1){
//       //   arr2[a] = true
//       //   break
//       // }
//       if(a%i === 0){
//         arr2[a-1] = !arr2[a-1]
//         console.log(arr2);
//       }
//     }
//   }
//   return arr2
// }
//
// console.log(check(stu,arraye));
var locker_row = [];


function lockers(incoming){
 for (let i = 0; i < incoming; i++) {
   locker_row.push(0);
 }

// i reprsents each student (outer loop)
// j represents each locker (inner loop)

  for (var i = 1; i <= incoming; i++) {
     for (var j = 0; j < incoming; j++) {
       if ((j+1)% i===0){
         locker_row[j] = !locker_row[j];
       }
     }
  }
}

lockers(4);

console.log(locker_row);
