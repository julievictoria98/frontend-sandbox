// const arr = [1, 2, 3, 4, 5];

// const doubled = arr.map((num) => num * 2);

// console.log(doubled); // [2, 4, 6, 8, 10]

// console.log("hej");

// const arr = [1, 2, 3, 4, 5];
// const [first, second] = arr;
// console.log(first, second); // 1 2

// const user = {
//   id: 10001,
//   name: "Sam",
//   email: "sam74@gmail.com",
// };
// const { name } = user;
// const { id } = user;
// console.log(id); // Sam

// const arr = [1, 2, 3, 4, 5];
// const [first, second, ...remaining] = arr;
// console.log(first, second, remaining); // 1 2 [3, 4, 5]

// const user = {
//   id: 10001,
//   name: "Sam",
//   email: "sam74@gmail.com",
// };
// const { name, id, ...rest } = user;
// console.log(name); // Sam
// console.log(id); // 10001
// console.log(rest); // {id: 10001, email: "sam74@gmail.com"}

const arr = [1, 2, 3, 4, 5];

function add(x, y, z) {
  console.log(x + y + z);
}

add(...arr); // 3
