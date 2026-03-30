const username = "I am learning to be a frontend developer at Univelcity Academy";
console.log(username.length);

const email = "FrontendDeveloper@UNIVELCITY.com";
console.log(email.toLowerCase());

const sentence = "Learning JavaScript is easy and fun when you put in the extra effort.";
console.log(sentence.includes("easy"));

const input = "I will get better at writing JavaScript codes";
console.log(input.trim());

const colors = ["red", "blue", "green", "yellow"];
console.log(colors.length);

const word = "Programming";
console.log(word.slice(0, 4));

const fruits = "apple, banana, orange";
console.log(fruits.split(", "));

const fruitsArray = ["apple", "banana", "orange", "pineapple"];
console.log(fruitsArray.includes("mango"));

const student = { name: "Temidayo", score: 85 };
console.log(student.score);

const price = "450";
console.log(Number(price));

const password = "secure1234";
console.log(password.trim().length);

const title = "Welcome To JavaScript Class at Univelcity";
console.log(title.toLowerCase().includes("javascript"));

const animals = [".cats", "elephant", "dog",  "giraffe"];
console.log(animals.filter(animal => animal.length > 3));

const names = ["nabil", "jon", "amzat", "joseph", "temidayo"];
console.log(names.map(name => name.toUpperCase()));

const items = ["pen", "notebook", "eraser", "textbook"];
console.log(items.find(item => item.length > 5));

const products = ["Laptop", "Phone", "Tablet", "Monitor"];
console.log(products.filter(product => product.toLowerCase().includes("o")));

const sentence2 = "JavaScript is powerful";
console.log(sentence2.toLowerCase().split(" "));

const tags = ["react", "js", "css", "html"];
console.log(tags.filter(tag => tag.length >= 3).join(", "));

const scores = ["10", "20", "30", "40"];
console.log(scores.map(score => Number(score)));

const searchInput = " APP ";
const apps = ["Apple", "Google", "AppStore", "Microsoft"];

const cleaned = searchInput().toLowerCase();

console.log(
    apps.filter(app => app.toLowerCase().includes(cleaned))     
);

const ages = [12, 18, 25, 14, 30];
console.log(ages.filter(age => age >= 18));

const words = ["cat", "elephant", "dog"];
console.log(words.map(word => word.length));

const user = { firstName: "Amzat", age: 50 };
console.log({ firstName, age } = user);
console.log(firstName);
console.log(age);

const product = { title: "Laptop", price: 1500 };
const { title: productName } = product;
console.log(productName);

const hue = ["red", "blue", "green", "yellow"];
const [first, second] = hue;
console.log(first);
console.log(second);

const printUser = ({ name }) => console.log(name);
printUser({ name: "Temidayo" });

const address = {
    street: { address1: "42 Montgomery, Yaba", address2: "Block 102"},
    city: "Lagos",
    country: "Nigeria"
};
const { street: { address1 } } = address;
console.log(address1);

const array1 = [1,2,3];
const array2 = [4,5,6];
console.log([...array1, ...array2]);

const originalProduct = { title: "Smartphone", price: 1500 };
const newProduct = {...originalProduct, price: 2000 };
console.log(newProduct);

const originalColors = ["red", "blue"];
const newColors = [...originalColors, "green", "yellow"];
console.log(newColors);

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(10,20,30));

const cars = ["Toyota", "Honda", "Ford", "BMW", "Audi"];
const [firstCar, secondCar, ...restCars] = cars;
console.log(firstCar);
console.log(secondCar);
console.log(restCars);

// Debugging Section

console.log("Hello".includes("H"));

const numbers = [1,2,3,4];
const correctDoubled = numbers.map(num => num * 2);
console.log(correctDoubled);

const randomAges = [18, 22, 16, 25];
const correctAge = randomAges.filter(age => age >= 18);
console.log(correctAge);

const classNames = " Nabil, Jon, Radiance ";
const cleanNames = classNames.trim().split(",");
console.log(cleanNames);

const person = {
    name: "Amzat",
    personAge: 50
};
const { name, personAge } = person;
console.log(name, personAge);

const [wrongName] = ["Temidayo"];
console.log(wrongName);

const oldArr = [2, 4, 6, 8];
const correctArr = [...oldArr];
console.log(correctArr);

const lengthyWords = ["cat", "elephant", "giraffe"];
const correctLengths = lengthyWords.map(word => word.length);
console.log(correctLengths);