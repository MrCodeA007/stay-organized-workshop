selectUserEl = document.getElementById(`selectUser`);
selectCategoryEl = document.getElementById(`selectCategory`);
selectPriorityEl = document.getElementById(`selectPriority`);

function selectUserdropdown() {
  fetch(`http://localhost:8083/api/users`)
    .then((response) => response.json()) //parsed JSON
    .then((user) => {
      for (i = 0; i < user.length; i++) {
        let optionEl = document.createElement(`option`);
        const userNames = user[i].name;
        optionEl.textContent = userNames;
        optionEl.value = user[i].id;
        selectUserEl.appendChild(optionEl);
      }
    });
}

function selectCategorydropdown() {
  fetch(`http://localhost:8083/api/categories`)
    .then((response) => response.json())
    .then((categories) => {
      for (i = 0; i < categories.length; i++) {
        let option2El = document.createElement(`option`);
        const categoryNames = categories[i].name;
        option2El.textContent = categoryNames;
        option2El.value = categories[i].id;
        selectCategoryEl.appendChild(option2El);
      }
    });
}


selectUserdropdown();
selectCategorydropdown();
