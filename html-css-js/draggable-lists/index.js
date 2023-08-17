const banksList = document.querySelector(".banks-list");
const banks = banksList.querySelectorAll(".bank-list");

banks.forEach(bank => {
    bank.addEventListener("dragstart", () => {
        // Add dragging class to item after a delay
        setTimeout(() => bank.classList.add("dragging"), 0);
    });
        // Remove dragging class from item on dragend event
        bank.addEventListener("dragend", () => bank.classList.remove("dragging"));
});

const initBanksList = (e) => {
    e.preventDefault();

    const itemToDrag = document.querySelector(".dragging");
    // Get all banks except currently dragging and making array of them
    const siblings = [...banksList.querySelectorAll(".bank-list:not(.dragging)")];

    // Find the sibling after which the dragging item should be placed
    const nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    // Insert the dragging item before the found sibling
    banksList.insertBefore(itemToDrag, nextSibling);
}

banksList.addEventListener("dragover", initBanksList);
banksList.addEventListener("dragenter", e => e.preventDefault());