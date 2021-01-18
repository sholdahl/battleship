const ship = (name, length, position) => {
  length = parseInt(length);
  let hits = [];
  const hit = (position) => {
    hits.push(position);
  };

  const isSunk = () => {
    return length === hits.length ? true : false;
  };

  return { name, length, hits, position, hit, isSunk };
};

export default ship;