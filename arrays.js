//  //Arraysq1
//  let marks=[85,97,44,37,76,60];
 
//  let sum=0;
//  for(let val of marks){
//     sum= sum+val;
        
//  }
//  console.log("Total sum:",sum);
//     console.log("Total Length:",marks.length );
//     let avg=sum/marks.length;
//     console.log("Average is:",avg);
    
// //ARRAYSq2

// let price=[250,645,300,900,50];
// for (let val of price) {
//    let off=val/10;
//    val=val-off;

// console.log("New value 10% off:",val); 
// }
// console.log("Old value:",price);

let companies =["Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix"];
companies.shift(0);
companies.splice(1,1,"Ola");
companies.push("Amazon");

console.log(companies);

