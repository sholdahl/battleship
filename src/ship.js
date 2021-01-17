const ship = (name, length) => {
  length = parseInt(length);
  let hits = [];
  const hit = (position) => {
    hits.push(position);
  };

  const isSunk = () => {
    return length === hits.length ? true : false;
  };

  return { name, length, hits, hit, isSunk };
};

export default ship;
