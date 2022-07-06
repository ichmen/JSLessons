export function finishForm() {
  const searchItem = document.querySelector('input');
  searchItem.type = 'password';
  const searchForm = document.querySelector('.login-form');
  const newImport = document.createElement('input');
  newImport.name = 'login';
  newImport.type = 'text';
  searchForm.prepend(newImport);
}
finishForm();
