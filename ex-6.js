// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for(let i=companyName.length-1;i>=0;i--){
    reversedCompanyName+=(companyName[i]);
}
let reversedCompanyName2 = [];
for (let c=0;c<=companyName.length-1;c++){
    reversedCompanyName2.unshift(companyName[c]);
}
console.log(reversedCompanyName);
console.log(reversedCompanyName2);

