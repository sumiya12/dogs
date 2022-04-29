const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch("https://dog.ceo/api/breeds/list")
  .then((res) => res.json())
  .then((data) => data.message.map((each) => generateSelect(each)));
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => generateHtml(data.message));
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateHtml(url) {
  const html = `<img src="${url}" alt=""/> `;
  card.innerHTML = html;
}
function generateSelect(breed) {
  const html = `<option value="${breed}">${breed}</option> `;
  select.innerHTML += html;
}
function breedSelect() {
  const breed = select.value;
  const img = card.querySelector("img");
  fetch(`https://dog.ceo/api/breed/
${breed}
/images/random`)
    .then((res) => res.json())
    .then((dogImg) => {
      img.src = dogImg.message;
    });
}
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener("change", breedSelect);
card.addEventListener("click", breedSelect);
form.addEventListener("submit", postData);
// ------------------------------------------
//  POST DATA
// ------------------------------------------
function postData(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const commnet = document.getElementById("comment").value;
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name: name, comment: comment }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
