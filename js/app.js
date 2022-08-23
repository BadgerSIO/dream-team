function getNumbers(id, text, inputs) {
  if (text) {
    const number = parseFloat(document.getElementById(id).innerText);
    return number;
  } else if (inputs) {
    const number = parseFloat(document.getElementById(id).value);
    return number;
  }
}
/**
 * -----------------------------------
 * Top 5 Player Selection
 * -----------------------------------
 */
function getname(elem) {
  const playerList = document.getElementById("playerList");
  const getLength = playerList.childNodes.length;
  if (getLength > 4) {
    alert("Cannot Select more than 5 players");
    return;
  }
  const div = elem.parentNode;
  const secondChild = div.childNodes[1];
  const newPlayer = document.createElement("li");
  newPlayer.innerHTML = "&nbsp;" + "&nbsp;" + "&nbsp;" + secondChild.innerText;
  playerList.appendChild(newPlayer);
  elem.setAttribute("disabled", "");
  elem.classList.remove("bg-btnBg", "hover:bg-btnBg/90");
  elem.classList.add("bg-gray-600");
}
/**
 * -----------------------------------
 * Budget Calculation(calculate player expenses)
 * -----------------------------------
 */
document.getElementById("calculateEx").addEventListener("click", function () {
  const perplayerEx = getNumbers("perplayerEx", false, true);
  const playerList = document.getElementById("playerList");
  const getLength = playerList.childNodes.length;
  if (isNaN(perplayerEx) || getLength <= 0) {
    if (getLength <= 0) {
      alert("Add Players First");
      document.getElementById("perplayerEx").value = "";
      return;
    }
    alert("invalid Input");
    document.getElementById("perplayerEx").value = "";
    return;
  }

  const totalPlayerExpense = perplayerEx * getLength;
  document.getElementById("playerExpense").innerText = totalPlayerExpense;
});
/**
 * -----------------------------------
 * Budget Calculation(calculate total expenses)
 * -----------------------------------
 *
 */

document
  .getElementById("calculateTotal")
  .addEventListener("click", function () {
    const expensesPlayerOnly = getNumbers("playerExpense", true, false);
    const managerCost = getNumbers("managerCost", false, true);
    const coachCost = getNumbers("coachCost", false, true);
    if (isNaN(expensesPlayerOnly) || isNaN(managerCost) || isNaN(coachCost)) {
      if (isNaN(expensesPlayerOnly) || expensesPlayerOnly == 0) {
        alert("Calculate the expense of players first");
        document.getElementById("managerCost").value = "";
        return;
      } else if (isNaN(coachCost)) {
        alert("invalid coach cost Input");
        document.getElementById("coachCost").value = "";
        return;
      } else if (isNaN(managerCost)) {
        alert("invalid manager cost Input");
        document.getElementById("managerCost").value = "";
        return;
      }
      return;
    }
    const totalexpenses = expensesPlayerOnly + managerCost + coachCost;
    document.getElementById("totalCost").innerText = totalexpenses;
  });
