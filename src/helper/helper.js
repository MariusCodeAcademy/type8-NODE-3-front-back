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

module.exports = {
  lg,
};
