/*console.log("hello world");

let arr = [2, 6, 8, 9, 5, 3, 8, 5, 3, 2, 1, 4, 7, 5, 4, 3, 2, 1, 6, 7, 8, 0];
let arr2 = arr;

console.log("Orignal: " + arr);
//console.log("Expected: " + arr.sort());

for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] > arr[j]) {
      let x = arr2[i];
      arr2[i] = arr2[j];
      arr2[j] = x;
    }
  }
}

console.log(arr2);

let num = 5;
console.log(num);

num += 2;
console.log(num);

function reverse(str) {
  let string = str;
  let i = 0;
  let j = str.length - 1;
  console.log(Math.floor(string.length / 2));
  while (i != Math.floor(str.length / 2 + 1)) {
    let temp = string[i];
    console.log(temp);
    string[i] = string[j];
    string[j] = temp;
    i++;
    j--;
  }
  return string;
}

let array = ["B", "O", "S", "A", "L", "L", "Y"];
console.log(reverse(array));

function reverseStr(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str.charAt(i);
  }
  return string;
}

console.log(reverseStr("Sally"));

function reverseEach(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
    console.log(character);
  }
  return reversed;
}

console.log(reverseEach("Chicken"));

function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i != Math.floor(str.length / 2 + 1)) {
    if (str.charAt(i) != str.charAt(j)) return false;
    i++;
    j--;
  }
  return true;
}

console.log(palindrome("bob"));

function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }
  let tmp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return tmp;
}

function palindromeInt(int){
  let y = int.toString();
  console.log(y + 'yourmom');
  let i = 0;
  let j = y.length - 1;
  while (i<j){
    if (y.charAt(i) !== y.charAt(j))
    return false;
    i++;
    j--;
  }
  return true;

}

console.log(palindromeInt(121));
*/

let firstName = "Joe";
lastName = "Smith";
console.log(this.firstName);