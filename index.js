const froyoList = prompt(`Please enter a list of comma-separated froyo flavors!`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);
const froyoArray = froyoList.split(`,`);

console.log(froyoArray);

const addFroyoCountToArray = (list) => {
  if(list.length === 0){
    return null;
  }
  const froyoCount = {}
  froyoCount[list[0]] = 1;
  for(let i = 1; i < list.length; i++){
    const froyoKey = Object.keys(froyoCount);
    for(let j = 0; j < froyoKey.length; j++){
      if(froyoKey[j] === list[i]){
        froyoCount[froyoKey[j]] += 1;
        console.log(`added`);
      }else{
        froyoCount[list[i]] = 1;
      }
    }
  }
  return froyoCount;
}

const count = addFroyoCountToArray(froyoArray);

console.log(`You have ordered ${Object.keys(count).length} unique flavored froyos!`);
const froyoNames = Object.keys(count);
const froyoCounts = Object.values(count);
for(let i = 0; i < froyoNames.length; i++){
  console.log(`${froyoNames[i]}: ${froyoCounts[i]}`);
}