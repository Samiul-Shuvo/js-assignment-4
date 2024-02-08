// Task -1

function calculateMoney(ticketSale) {
  if (ticketSale < 0) return "Invalid Number";
  else {
    return ticketSale * 120 - (500 + 8 * 50);
  }
}
// console.log(calculateMoney(10));

// Task - 2

function checkName(names) {
  if (typeof names !== "string") return "invalid";
  else {
    names = names.toLowerCase();
    let length = names.length;
    let lastWord = names.slice(length-1,length);

    if(lastWord === 'a' || lastWord === 'y' || lastWord === 'i' || lastWord === 'e' || lastWord === 'o' || lastWord === 'w' || lastWord === 'u')
    return 'Good Name';
    else 
    return 'Bad Name';
  }
}


// Task - 3

function deleteInvalids(array){
    if(Array.isArray(array)){
        const newArray=[];
        for(const item of array){
            if( typeof item === "number" && !isNaN(item))
            newArray.push(item);
        }
        return newArray;
    }
    else 
    return 'Invalid Array';

}
// const num = [“1” , {num:2} , NaN ];
// [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));


// Task - 4

function password(obj){
  if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
    return "invalid";}
  else if(obj.birthYear< 999)
    return "invalid";
  else{
    let firstName = obj.siteName;
    const capital = firstName[0].toUpperCase()+firstName.slice(1);
    return capital + '#' + obj.name + '@' + obj.birthYear;
  }

}

// console.log(password({ name: "maisha", birthYear: 2002 }))

// Task - 5

function monthlySavings(arr,livingCost){
  if(typeof livingCost !== 'number' || !Array.isArray(arr))
  return 'invalid input';
  else{
    let total = 0;
    for(i of arr){
      if(i<3000)
      total = total +i;
      else{
        i = i - (i*(20/100));
        total = total +i;
      }
    }
    total = total - livingCost;

    if(total <0)
    return 'earn more';
    else 
    return total;
  }

}
// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))