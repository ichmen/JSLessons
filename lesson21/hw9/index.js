export function finishForm() {
  const newImport = document.createElement('input');
  newImport.type = 'text';
  newImport.name = 'login';
  const searchItem = document.querySelector('input');
  searchItem.type = 'password';
  const searchForm = document.querySelector('.login-form');
  searchForm.prepend(newImport);
}
// finishForm();
