//your code here!
// Reference to the list element
const list = document.getElementById('infi-list');

// Function to add list items
function addListItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// Add initial 10 list items
addListItems(10);

// Event listener for scrolling
list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addListItems(2); // Add 2 more items when scrolled to the bottom
  }
});

