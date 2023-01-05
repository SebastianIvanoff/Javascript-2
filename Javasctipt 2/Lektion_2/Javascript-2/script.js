const form = document.querySelector(".card form");

// const test = () => {

// }
// form.addEventListener('submit', test)

// const buttons = document.querySelector('.item button')
// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.parentElement.remove()
//     })
// })

const createItemElement = (inputValue) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const p = document.createElement("p");
  p.innerText = inputValue;

  const button = document.createElement("button");
  button.innerText = "Delete";

  button.addEventListener("click", () => {
    button.parentElement.remove();
  });

  item.appendChild(p);
  item.appendChild(button);

  return item;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = form.querySelector('input[type="text"]');
  const inputValue = input.value;

  if(inputValue.trim() === ''){
    return
  }

  const item = createItemElement(inputValue);
  document.querySelector("#output").appendChild(item);

  //input.value = ''
  form.reset();
});
