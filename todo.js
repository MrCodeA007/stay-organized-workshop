const tableEl = document.getElementById(`userTable`);
const searchUserEl = document.getElementById(`searchUser`);
const addtodoBtnEl = document.getElementById(`addtodoBtn`);

function searchUserdropdown() {
  fetch(`http://localhost:8083/api/users`)
    .then((response) => response.json()) //parsed JSON
    .then((user) => {
      for (i = 0; i < user.length; i++) {
        let optionEl = document.createElement(`option`);
        const userNames = user[i].name;
        optionEl.textContent = userNames;
        optionEl.value = user[i].id;
        searchUserEl.appendChild(optionEl);
      }
    });
}

searchUserEl.addEventListener(`change`, () => {
    let selectedUser = searchUserEl.value;
  const url = `http://localhost:8083/api/todos/byuser/${selectedUser}`;
  fetch(url)
  .then((response) => response.json())
  .then((todos)=> {

  })
 
});
//----------------------------------------------------------------------
searchUserdropdown();
