let items = [
  {name: 'Monitor', value: 30000},
  {name: 'Keyboard', value: 10000},
  {name: 'Mouse', value: 6000},
  {name: 'CPU', value: 100000}
]
console.log('Desordenado');
console.log(items);

items.sort(function(a, b){
  if (a.name > b.name){
    return 1;
  }
  if (a.name < b.name){
    return -1;
  }
  // de a ser igual a b
  return 0;
});
console.log('Ordenado');
console.log(items);

