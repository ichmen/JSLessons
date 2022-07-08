const arena = document.querySelector('.arena');
function arenaConstruct() {
  for (let sector = 1; sector <= 3; sector += 1) {
    const arenaElem = sectorConstruct();
    arenaElem.dataset.sectorNumber = sector;
    arena.append(arenaElem);
  }
}
arenaConstruct();
function sectorConstruct() {
  const sectorElem = document.createElement('div');
  sectorElem.classList.add('sector');
  for (let line = 1; line <= 10; line += 1) {
    const addElem = lineConstruct();
    addElem.dataset.lineNumber = line;
    sectorElem.append(addElem);
  }
  return sectorElem;
}
function lineConstruct() {
  const lineElem = document.createElement('div');
  lineElem.classList.add('sector__line');
  for (let seat = 1; seat <= 10; seat += 1) {
    const addElem = document.createElement('div');
    addElem.classList.add('sector__seat');
    addElem.dataset.seatNumber = seat;
    lineElem.append(addElem);
  }
  return lineElem;
}

arena.addEventListener('click', seatSelect);
function seatSelect(event) {
  if (!event.target.classList.contains('sector__seat')) {
    return;
  }
  const seat = event.target;
  const seatNumber = seat.dataset.seatNumber;
  const lineNumber = seat.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = seat.closest('.sector').dataset.sectorNumber;
  console.log(sectorNumber);
  document.querySelector(
    '.board__selected-seat',
  ).textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
}
