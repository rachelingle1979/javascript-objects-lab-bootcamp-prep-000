function recipe(){
  var recipe = new Object.assign({"butter" : "1 stick"});
  return recipe;
}

function updateObjectWithKeyAndValue(list, ingredient, amount){
  var recipe = Object.assign({}, list, {[ingredient] : amount});
  return recipe;
}

