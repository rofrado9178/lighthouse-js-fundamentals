// const chorus = "Let's dance!";
// for (let repeat = 0; repeat < 10; repeat++) {
//   console.log(chorus);
// }
// console.log("Until the sun comes up!");

for(let i=100 ; i <= 200; i++){

  let count = i;
  if(count % 3 == 0 && count % 4 == 0){
    count = 'LoopyLighthouse';
    console.log(count);
  }
  else{ 
    if(count % 3 == 0){
      count = 'Loopy';
    console.log(count)
    }
    else if(count % 4 == 0){
      count = 'Lighthouse';
      console.log(count);
    }
    else{
      count = i;
      console.log(count);
    }
  }
}
    
  
