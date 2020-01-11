const difference = (set1, set2) => {

  const set = new Set();

  set1.forEach(value => {
    if (!set2.has(value)) {
      set.add(value);
    }
  }
  );
  return set;
}



console.log(difference(new Set([2, 1]), new Set([2, 3])));