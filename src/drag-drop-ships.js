import Ship from "./ship";

export default function populateShipsContainer() {
  const shipsContainer = document.querySelector('.ships-container');
  const ships = {
    "Carrier": new Ship(5),
    "Battleship": new Ship(4),
    "Cruiser": new Ship(3),
    "Submarine": new Ship(3),
    "Destroyer": new Ship(2)
  };

  for (const shipName in ships) {
    if (ships.hasOwnProperty(shipName)) {
      const ship = ships[shipName];

      const shipDiv = document.createElement("div");
      shipDiv.className = "draggable-ship";
      shipDiv.setAttribute('data-ship', shipName);
      shipDiv.innerHTML = `<p>${shipName}</p>`;

      shipDiv.addEventListener('click', () => {
        ship.toggleOrientation();
        updateShipDivOrientation(shipDiv, ship.orientation);
      })

      shipsContainer.appendChild(shipDiv);
    }
  }

  return ships;
}

function updateShipDivOrientation(div, orientation) {
  div.classList.toggle('vertical', orientation === 'vertical');
}