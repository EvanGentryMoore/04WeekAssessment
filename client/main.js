//Base URL
const base = "http://localhost:4000/api/"

//Given Feature Buttons
const getCompliment = document.getElementById("complimentButton");
const getFortune = document.getElementById("fortuneButton");

//added Feature Elements
const showAllBtn = document.getElementById('showAll');
const submitBtn = document.getElementById('submitBtn');
const itemEntry = document.getElementById('itemEntry');
const removeBtn = document.getElementsByClassName('removeBtn');


// const deleteBtn = document.getElementById('deleteBtn');

//Response Area
const responseArea = document.getElementById('responseArea');

//Given Handlers
getCompliment.onclick = function () {
    axios.get(`${base}compliments`)
        .then((res) => {
          const data = res.data;
          alert(data);
        }).catch(err => console.log(err))
};

getFortune.onclick = function () {
    axios.get(`${base}fortunes`)
        .then(function (response) {
          const data = response.data;
          alert(data);
        }).catch(err => console.log(err));
};

//Added Handlers
showAllBtn.onclick = function () {
    axios.get(`${base}all`)
    .then(res => buildList(res.data))
    .catch(err => console.log(err));
};

submitBtn.onclick = function (e) {
  e.preventDefault();
  let newItem = {item: itemEntry.value}
  if(newItem.item.length !== 0){
    axios.post(`${base}item`, newItem)
    .then(res => buildList(res.data))
    .catch(err => console.log(err));
  }
  itemEntry.value = "";
};

itemEntry.onkeyup = function (e) {
  e.preventDefault();
  if(e.key === 'Enter'){
    let newItem = {item: itemEntry.value}
    if(newItem.item.length !== 0){
      axios.post(`${base}item`, newItem)
      .then(res => buildList(res.data))
      .catch(err => console.log(err));
    }
    itemEntry.value = ""
  }
};

function removeItem (id) {
  axios.delete(`${base}item/${id}`)
  .then(res => {
    buildList(res.data)
  })
  .catch(err => console.log(err))
}

function buildList(resData){
  responseArea.innerHTML  = '';
    
  resData.forEach(el => {
    let listItem = document.createElement('div')
    listItem.innerHTML = `
      <div class="listItem">
        <p>${el.item}</p>
        <button class="removeBtn" onclick="removeItem(${el.id})">Remove</button>
      </div>`

    responseArea.appendChild(listItem);
  })
}

