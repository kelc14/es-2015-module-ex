function choice(items) {
  let randIdx = Math.floor(Math.random() * items.length);
  return items[randIdx];
}

const remove = (items, item) => {
  const index = items.indexOf(item);
  const removedItem = items.splice(index, 1);
  return removedItem ? removedItem : undefined;
};

export { choice, remove };
