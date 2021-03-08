// small cups
const smallCups = document.querySelectorAll(".cup-small");
// liters
const liters = document.getElementById("liters");
// percentage
const percentage = document.getElementById("percentage");
// remained
const remained = document.getElementById("remained");

// call function when page loads
updateBigCup();

// iterate through all cups
smallCups.forEach((cup, index) => {
  // listen for click on cup then call highlightCups function for that index
  cup.addEventListener("click", () => highlightCups(index));
});

// argument is index of cup clicked on
function highlightCups(index) {
  //first check if cup clicked on is already full and next cup is not full
  // is it the last of the full cups?
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    // decrease index by 1. Deselect last cup as full
    index--;
  }
  // iterate through small Cups
  smallCups.forEach((cup, index2) => {
    // if index2 less than or equal to index
    if (index2 <= index) {
      // add full class to any cup
      cup.classList.add("full");
      // otherwise (if index2 is greater than index)
    } else {
      // remove full class to any cup
      cup.classList.remove("full");
    }
  });
  // call updateBigCup
  updateBigCup();
}

function updateBigCup() {
    // get number of cups with cup-small and full classes
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    // get number of all cups with cup-small class
    const totalCups = smallCups.length;
    // if there are no full cups
    if (fullCups === 0) {
        // percentage value hidden
        percentage.style.visibility = "hidden";
        // percentage div height = 0
        percentage.style.height = 0;
    // otherwise (if at least one cup is full)
    } else {
        // percentage value is visible
        percentage.style.visibility = "visible";
        // percentage div height = fullCups divided by totalCups times 330 (total height of big cup)
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        // percentage text value = fullCups divided by totalCups times 100 %
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }
    // if all cups full
    if (fullCups === totalCups) {
        // remained hidden 
        remained.style.visibility = "hidden";
        // remained div height is 0
        remained.style.height = 0;
    // otherwise (at least 1 cup empty)
    } else {
        // remained visible 
        remained.style.visibility = "visible";
        // liters value is 2 minus (250 times fullCups (in mL) divided by 1000 (to get L)) L
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`

    }
}