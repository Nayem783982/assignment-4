// javascript problem-1 
function calculateVAT( price ) {
    if( price < 0 || typeof price !== "number"){
        return "Invalid";
    }
   const vat = (price * 7.5) / 100;
   return vat ;
}



const final1 = calculateVAT(1500);
const final2 = calculateVAT(200);
const final3 = calculateVAT(999);
const final4 = calculateVAT(-500);
const final5 = calculateVAT("101");
const final6 = calculateVAT("foo");
console.log(final1,final2,final3,final4,final5,final6);



// javascript problem-2 
function  validContact( contact ) {
    if(typeof contact !== "string"){
        return "Invalid";
    }
    const length = contact.length;
    if( length == 11 && (contact[0] == 0 && contact[1] == 1) && !contact.includes(" ") ){
        return true;
    }
    else{
        return false;
    }
}



const num1 = validContact("01819234567");
const num2 = validContact("0181923 567");
const num3 = validContact("018192345679");
const num4 = validContact(["01987654321"]);
const num5 = validContact("01345678900");
const num6 = validContact("02145678900");
const num7 = validContact(true);
console.log(num1,num2,num3,num4,num5,num6,num7);


// javascript problem-3 
function  willSuccess( marks ) {
    if( !Array.isArray(marks) ){
        return  "Invalid";
    }
    let passMark = [];
    let failedMark = [];
    for(const mark of marks){
        if(mark >= 50){
            passMark.push(mark);
        }else{
            failedMark.push(mark);
        }
    }
    if( failedMark.length < passMark.length ){
        return true;
    }else {
        return false;
    }
}


const result1 = willSuccess([60, 70, 80, 40, 30]);
const result2 = willSuccess([48 , 48 , 92 , 100 ]);
const result3 = willSuccess([48, 48, 50, 50, 100]);
const result4 = willSuccess([ ]);
const result5 = willSuccess([ 90 ]);
const result6 = willSuccess([ 90 ,  99 , 87 , 48 , 34 , 49 ]);
const result7 = willSuccess("100 , 100");
const result8 = willSuccess(90);
console.log(result1,result2,result3,result4,result5,result6,result7,result8);


// javascript problem-4
function validProposal(person1, person2) {
    if ((typeof person1 !== "object") || (typeof person2 !== "object")) {
        return "Invalid";
    }
    let person1Gender = person1["gender"];
    let person2Gender = person2["gender"];
    if ( (person1Gender.length !== person2Gender.length) && (Math.abs(person1.age - person2.age) <= 7)) {
        return true;
    } else {
        return false;
    }
}




const output1 = validProposal({ name: "Rahul", gender: "male", age: 28 },{ name: "Joya", gender: "female", age: 21 });
const output2 = validProposal({ name: "milon", gender: "male", age: 20 },{ name: "sumi", gender: "female", age: 25 });
const output3 = validProposal({ name: "shuvo", gender: "male", age: 20 },{ name: "joy", gender: "male", age: 25 });
const output4 = validProposal({ name: "toya", gender: "female", age: 20 },{ name: "kader", gender: "male", age: 25 });
const output5 = validProposal({ name: "toya", gender: "female", age: 24 },{ name: "bjoy", gender: "male", age: 32 });
const output6 = validProposal("Mizan", { name: "mitu", gender: "male", age: 32 });
const output7 = validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan");


console.log(output1, output2, output3, output4, output5,output6,output7);


// javascript problem-5
function  calculateSleepTime( times ) {

    let finalTimeIs = {};
    let sum = 0;
    for(const time of times){
        if( typeof time !== "number"){
            return "Invalid";
        }
        sum = sum + time ;
    }
    const hour = sum / 3600;
    const hourint = parseInt(hour);
    const remainningHour = sum % 3600;

    finalTimeIs.hour = hourint;

    const minit = remainningHour / 60;
    const minitint = parseInt(minit);
    const remainningMinit =remainningHour % 60;

    finalTimeIs.minute = minitint;

    const second = remainningMinit;
    const secondint = parseInt(second);

    finalTimeIs.second = secondint;

    return finalTimeIs;   
}


const a1 =calculateSleepTime([1000, 499, 519, 300])
const a2 =calculateSleepTime([1000, 2000, 725])
const a3 =calculateSleepTime([100, 3800])
const a4 =calculateSleepTime([])
const a5 =calculateSleepTime([5600])
const a6 =calculateSleepTime([100, 3800, "90" ])
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);