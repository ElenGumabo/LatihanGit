//nama : ELen. Gumabo

//ARRAY EXERCISE
console.log("----------ARRAY EXERCISE-------------");
let people = ["Greg","Mary","Devon","James"];
//console.log(people);


//1
for (let i=0; i<people.length; i++){
    console.log(people[i]);
};

console.log("               ");
//2 
people.forEach(function(item){
    console.log(item)
});


//3
people.shift();
console.log(people);

//4
people.pop();
console.log(people);


//5
people.unshift("Matt");
console.log(people);

//6
people.push("Elen");
console.log(people);

//7
let removed = people.splice(1, 1);
console.log(people);

//8
let newPeople = people.slice(0,2);
//let oldPeople = people.slice(2);
console.log(newPeople);
//console.log("Old",oldPeople);

//9
people.splice(2);
people.splice(2,0, "Elizabeth","Artie");
console.log(people);

//10
let Bob = ["Bobi","Bebi"];
let withBob = people.concat(Bob);
console.log(withBob);


//OBJECT EXERCISE
console.log(" ");
console.log(" ");
console.log(" ");

console.log("------------OBJECT EXERCISE------------");
let programming = {
    languages :["JavaScript","Phyton","Rubby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8
};

//1
programming.languages[3] = "Go";
console.log(programming);

//2
console.log("difficulty :", +programming['difficulty']-1);

//3
delete programming.isRewarding;
console.log(programming);

//4
programming.isFun = true;
console.log(programming);

//5
let languages = programming.map (function(item){
    return item.languages;
});
console.log(languages);





