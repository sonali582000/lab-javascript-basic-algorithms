// Iteration 1: Names and Input
const hacker1 = "Rohit";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Rishi";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i] + " ";
}
console.log(`${newHacker1}`);

//3.2
let newhacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newhacker2 += hacker2[i];
}
console.log(`${newhacker2}`);

//3.3
let maxLength = Math.max(hacker1.length, hacker2.length);

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log(`Yo, the navigator goes first, definitely.`);
    break;
  }
}

if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex arcu, venenatis semper augue nec, mollis viverra nulla. Nunc sollicitudin id dui quis molestie. Maecenas ac congue velit. Curabitur gravida, ante ac porttitor ultrices, justo lorem ultricies dolor, volutpat suscipit leo dui egestas erat. Sed interdum eros ac bibendum pellentesque. Aliquam porttitor nibh vitae dignissim aliquet. Maecenas mattis, purus nec convallis consectetur, tortor sem placerat dolor, luctus auctor elit mauris quis magna. Proin aliquet mauris ut cursus congue. Pellentesque mattis suscipit nunc vitae mollis. Nam in dolor dui. Nulla faucibus orci urna, in blandit sapien laoreet ut. Cras suscipit, urna in bibendum fringilla, odio lectus dictum erat, eu varius nibh tortor at mauris. Donec sagittis ac ante eget interdum. Donec at blandit felis. Donec quis augue ultrices, lobortis nibh vel, sagittis nulla. Aliquam purus lacus, dictum vel efficitur et, eleifend et risus. Proin ornare consequat nulla at facilisis. Sed auctor massa nec aliquet viverra. In a purus vitae diam gravida tempus nec vulputate tellus. Integer blandit maximus ipsum nec vestibulum. Vestibulum at augue sit amet elit iaculis convallis. Vivamus lacinia volutpat ultrices. Integer scelerisque feugiat nulla. Sed non sem vitae orci malesuada volutpat non eu libero. Nulla facilisi. Suspendisse potenti. Integer ornare suscipit libero, sed luctus elit sagittis a. Integer lacus dui, dapibus eget nisi vel, sagittis venenatis nisl. Nullam sollicitudin lectus sit amet turpis posuere dignissim. Aliquam vitae sapien ut nulla malesuada ullamcorper id a ligula.`;

let words = 1;
let appear = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] == " ") {
    words += 1;
  } else if (longText[i] + longText[i + 1] === "et") {
    appear += 1;
  }
}

console.log(`${words} ${appear}`);

//Bonus 2
const phraseToCheck = `Was it a car or a cat I saw?`;
const noSpecialCharacters = phraseToCheck.replace(/[^a-zA-Z0-9]+/gi, "");
let reversePhrase = "";

for (let k = noSpecialCharacters.length - 1; k >= 0; k--) {
  reversePhrase += noSpecialCharacters[k];
}

if (reversePhrase.toUpperCase() == noSpecialCharacters.toUpperCase()) {
  console.log(`This is a Palindrome`);
} else {
  console.log(`This is not a Palindrome`);
  console.log(`${reversePhrase} ${noSpecialCharacters}`);
}
