const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

for(let ingredient of ingredients){
  console.log(ingredient)
};

let i = -1;
while( i < ingredients.length){
  i++
  console.log(ingredients[i]);
}

for(let i = ingredients.length ; i >= 0 ; i--){
  console.log(ingredients[i]);
}