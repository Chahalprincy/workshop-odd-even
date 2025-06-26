
let state = {
  numberBank: [],
  evenNumbers: [],
  oddNumbers: [],
};

const app = document.createElement("div");
document.body.appendChild(app);


function addNumber(num) {
  state.numberBank.push(num);
  render();
}

function sortOne() {
  const num = state.numberBank.shift();
  if (num === undefined) return;

  if (num % 2 === 0) {
    state.evenNumbers.push(num);
  } else {
    state.oddNumbers.push(num);
  }
  render();
}

function sortAll() {
  while (state.numberBank.length > 0) {
    sortOne();
  }
}

function NumberInputForm() {
  const form = document.createElement("form");
  form.className = "number-form";

  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter number";
  input.required = true;

  const button = document.createElement("button");
  button.textContent = "Add number";

  form.appendChild(input);
  form.appendChild(button);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = Number(input.value);
    if (!isNaN(value)) {
      addNumber(value);
      input.value = "";
    }
  });

  return form;
}

function NumberList(title, numbers) {
  const container = document.createElement("div");
  container.className = "number-section";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const list = document.createElement("ul");
  numbers.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    list.appendChild(li);
  });

  container.appendChild(heading);
  container.appendChild(list);
  return container;
}

function SortButtons() {
  const container = document.createElement("div");
  container.className = "sort-buttons";

  const sort1Btn = document.createElement("button");
  sort1Btn.textContent = "Sort 1";
  sort1Btn.addEventListener("click", () => sortOne());

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.addEventListener("click", () => {
    sortAll();
  });

  container.appendChild(sort1Btn);
  container.appendChild(sortAllBtn);
  return container;
}


function render() {
  app.innerHTML = ""; // Clear previous UI

  app.appendChild(NumberInputForm());
  app.appendChild(SortButtons());
  app.appendChild(NumberList("Number Bank", state.numberBank));
  app.appendChild(NumberList("Even Numbers", state.evenNumbers));
  app.appendChild(NumberList("Odd Numbers", state.oddNumbers));
}

render();
