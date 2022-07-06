export function finishForm() {
  const searchItem = document.querySelector('input');
  searchItem.type = 'password';
  const searchForm = document.querySelector('.login-form');
  const newImport = document.createElement('input');
  newImport.type = 'text';
  newImport.name = 'login';
  searchForm.prepend(newImport);
}
finishForm();
