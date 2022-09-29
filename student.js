let classDate = [];

classDate.push({name : "Peter",performance: {Phy: 90, Chem: 96, Math:70}});
classDate.push({name : "Samuel",performance: {Phy: 90, Chem: 56, Math:90}});
classDate.push({name : "Gideon",performance: {Phy: 100, Chem: 99, Math:60}});
classDate.push({name : "judith",performance: {Phy: 80, Chem: 95, Math:60}});

// console.log(classDate); we should limit the class to 10 students ie less or equal to time

let classScore =[]
classDate.forEach((el) => {
    classScore.push(Object.values(el.performance).reduce((a,b) => a + b));

});
console.log(classScore);
console.log(
    "The avaerage class performance is:",
    classScore.reduce((a,b) => a + b)/ classScore.length);

    //total
let classScores =[]
classDate.forEach((el) => {
    // classScores.push(Object.values(el.performance).reduce((a,b) => a + b));
    el.total = Object.values(el.performance).reduce((a,b)=>a+b);
});
// console.log(classDate);

//sorted
const sortedData = (x)=>{
    return (a,b) => {
        if (a[x] < b[x]){
            return 1;
        }else if (a[x] > b[x]){
            return -1
        }else return 0
    }
}

classDate.sort(sortedData('total'))

function bestStudent(arr){
    return arr[0]
}
console.log(bestStudent(classDate));

function highestScore(arr){
    return arr[0].total
}
console.log(highestScore(classDate));

function bestSub(arr) {
    let phy;
    const sub = classDate.map(item =>{ return Object.values(item.performance)})
    return sub
}
console.log(bestSub(classDate));


































