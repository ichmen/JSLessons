export function getSection(num) {
  const elem = document.querySelector(`span[data-number='${num}']`);
  const res = elem.parentElement.dataset.section;
  return res;
}
get / Section(5);
