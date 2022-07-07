export function squaredNumbers() {
  const arr = document.querySelectorAll('.number');
  arr.forEach(el => {
    el.dataset.squaredNumber = Number(el.dataset.number) ** 2;
  });
}
squaredNumbers();
