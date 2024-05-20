// Defining five different income objects //
let sal = [
  {
    name: "main job",
    amount: 1400,
    recurring: true,
  },
  {
    name: "side hustle",
    amount: 400,
    recurring: true,
  },
  {
    name: "loose change",
    amount: 5,
    recurring: false,
  },
  {
    name: "monthly allowance",
    amount: 100,
    recurring: true,
  },
  {
    name: "miscellaneous money",
    amount: 1,
    recurring: false,
  },
];

// convert object to JSON string using JSON.stringify()
const salObj = JSON.stringify(sal);

// save to localStorage
sessionStorage.setItem("sal", salObj);

// get the JSON string from sessionStorage
const str2 = sessionStorage.getItem("sal");

// convert JSON string to valid object
const parObj = JSON.parse(str2);
console.log(parObj);

const inList = document.getElementById(`incomeList`);

// forEach method to display income objects in html doc //
sal.forEach((s) => {
  let hrItem = document.createElement(`hr`);
  let inItem = document.createElement(`li`);
  let inItemText = document.createTextNode(
    `${s.name}: £${s.amount} : ${s.recurring}`
  );
  inItem.appendChild(inItemText);
  inList.appendChild(hrItem);
  inList.appendChild(inItem);
});

// sum of all 5 income objects //
let totalIncome = sal.map((money) => money.amount);
let sum = totalIncome.reduce((acc, curr) => acc + curr);
console.log(`total Income:`, sum);

document.getElementById(
  `totalIncome`
).innerHTML = `Total Monthly Income: £${sum}`;

// creating a button to add income entry via user input //
document.getElementById("addBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let inName = prompt(`enter new source of Income name: `);
  let inAmount = parseFloat(prompt("enter new income amount: "));
  let inRec = Boolean(prompt("enter whether new income is recurring or not: "));
  let newIn = `${inName}:  £${inAmount} : ${inRec}`;

  // function pushStorage to push new income object from user input into sessionStorage //
  function pushStorage(newIn) {
    newIn = { name: inName, amount: inAmount, reccuring: inRec };
    sal.push(newIn);
  }
  pushStorage();

  let newTot = Number(sum) + Number(inAmount);
  document.getElementById(
    `totalIncome`
  ).innerHTML = `Total Monthly Income: £${newTot}`;
  let desTot = Number(remainSalary) + Number(inAmount);
  document.getElementById(
    `desIncome`
  ).innerHTML = `Disposable Income: £${desTot}`;

  const inList = document.getElementById(`incomeList`);
  let newIn2 = document.createElement(`li`);
  let hrItem = document.createElement(`hr`);
  newIn2.appendChild(document.createTextNode(newIn));
  inList.appendChild(hrItem);
  inList.appendChild(newIn2);
});

// Defining five different expense objects //
let cost = [
  {
    name: "rent",
    amount: 900,
    recurring: true,
  },
  {
    name: "food shop",
    amount: 30,
    recurring: true,
  },
  {
    name: "phone bill",
    amount: 50,
    recurring: true,
  },
  {
    name: "internet bill",
    amount: 36,
    recurring: true,
  },
  {
    name: "night out",
    amount: 45,
    recurring: false,
  },
];

const coList = document.getElementById(`expenseList`);

// forEach method to display expense objects in html doc //
cost.forEach((c) => {
  let hrItem = document.createElement(`hr`);
  let coItem = document.createElement(`li`);
  let coItemText = document.createTextNode(
    `${c.name}: £${c.amount} : ${c.recurring}`
  );
  coItem.appendChild(coItemText);
  coList.appendChild(hrItem);
  coList.appendChild(coItem);
});

// sum of all 5 expense objects //
let totalCost = cost.map((money) => money.amount);
let sum2 = totalCost.reduce((acc, curr) => acc + curr);
console.log(`total expenses:`, sum2);

document.getElementById(
  `totalExpenses`
).innerHTML = `Total Monthly Expenses: £${sum2}`;

// creating a button to add expense entry via user input //
document.getElementById("addBtn2").addEventListener("click", (e) => {
  e.preventDefault();
  let exName = prompt(`enter new monthly expense name: `);
  let exAmount = parseFloat(prompt("enter new monthly expense amount: "));
  let exRec = Boolean(
    prompt("enter whether new expense is recurring or not: ")
  );
  let newEx = `${exName}:  £${exAmount} : ${exRec}`;

  function pushStorage(newEx) {
    newEx = { name: exName, amount: exAmount, reccuring: exRec };
    const newObj = JSON.stringify(newEx);
    sessionStorage.setItem("cost", newObj);
    const str = sessionStorage.getItem("cost");
    const addObj = JSON.parse(str);
    cost.push(newEx);
  }
  pushStorage();

  let newTot = Number(sum2) + Number(exAmount);
  document.getElementById(
    `totalExpenses`
  ).innerHTML = `Total Monthly Expenses: £${newTot}`;
  let desTot = Number(remainSalary) + Number(exAmount);
  document.getElementById(
    `desIncome`
  ).innerHTML = `Disposable Income: £${desTot}`;

  const coList = document.getElementById(`expenseList`);
  let newEx2 = document.createElement(`li`);
  let hrItem = document.createElement(`hr`);
  newEx2.appendChild(document.createTextNode(newEx));
  coList.appendChild(hrItem);
  coList.appendChild(newEx2);
});

const costObj = JSON.stringify(cost);
sessionStorage.setItem("cost", costObj);
const str = sessionStorage.getItem("cost");
const revObj = JSON.parse(str);
console.log(revObj);

// calculation of disposal income after expenses //
let remainSalary = sum - sum2;
console.log(`remain salary after expenses:`, remainSalary);

document.getElementById(
  `desIncome`
).innerHTML = `Disposable Income: £${remainSalary}`;

// creating a button to add to savings entry via user input and return alert of remaining amount of disposable income //
document.getElementById("savings").addEventListener("click", (e) => {
  e.preventDefault();
  let savings = prompt(`enter the desired amount to save: `);
  let desIncome = Number(remainSalary) - Number(savings);
  document.getElementById(
    `desIncome`
  ).innerHTML = `Disposable Income: £${desIncome}`;
  let remain = alert(`the remaining disposable Income: £` + desIncome);
});
