// Get the sortable list and items to be sorted
const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

// Add dragstart and dragend event listeners to each item
items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // Add a class to the dragging item after a short delay
    setTimeout(() => item.classList.add("dragging"), 0);
  });

  item.addEventListener("dragend", () => {
    // Remove the class from the dragging item when dragging ends
    item.classList.remove("dragging");
  });
});

// Define a function to handle the dragover event
const initSortableList = (e) => {
  // Prevent the default behavior of the dragover event
  e.preventDefault();

  // Get the dragging item and create an array of siblings (items not being dragged)
  const draggingItem = sortableList.querySelector(".dragging");
  const siblings = [...document.querySelectorAll(".item:not(.dragging)")];

  // Find the next sibling to insert the dragging item before
  const nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  // Insert the dragging item before the next sibling
  sortableList.insertBefore(draggingItem, nextSibling);
};

// Add dragover and dragenter event listeners to the sortable list
sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
