function lg(el) {
  console.log('arguments ===', arguments);
  const elObj = { el };
  const key = Object.keys(elObj);
  console.log(`${key[0]} ===`, el);
}

// sukurti funkcija kuri argumetu paima masyva ir id
// grazina is to masyvo ta el kurio id paduota argumentu
// jei nerandam tokio, tai grazinam false
// findById(arr, 5)

function findById(arr, givenId) {
  const foundObj = arr.find((elObj) => elObj.id === givenId);

  return foundObj === undefined ? false : foundObj;
}

module.exports = {
  lg,
  findById,
};
