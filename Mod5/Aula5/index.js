
let items = [];

for(let item = 0; item < 10; item++) {
  let itemName = Number(`Digite o item ${item + 1}`);

  items[item] = itemName;
}

alert(items);