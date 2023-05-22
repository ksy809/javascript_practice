// 음주 가능 계산기
const age = parseInt(prompt("How old are you?"));
// console.log(age);
/*
 숫자 입력하면 숫자 그대로 나옴
문자 입력하면 NaN ( Not a Number ) 숫자가 아니라고 나옴
 */

if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
