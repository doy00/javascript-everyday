// 배열
const obj = {
  name: 'dohee',
  age: 30,
  'full-name': 'kim dohee'
};

console.log(obj.name);
console.log(obj['age']);

const obj2 = { name: 'dahee'};
obj2.age = 30;
console.log(obj2.age);

obj.age = 30;
delete obj.age; // 요소 삭제
console.log(obj.age);

const arr2 = [1, 2, 3];
console.log(arr[0]);
console.log(arr[1]);

const value = arr.pop();
console.log(value);
console.log(arr.length);

// 함수
const f = () => {};
console.log(typeof f);
(a, b) => {
  return a + b;
};

// 문법 설탕 syntactic sugar
// 구조 분해 할당
const arr3 = ['Hello', 'World', '!'];
const [first, second] = arr3; // 인덱스 순서대로 구조분해 할당이 이루어짐
console.log(first, second);

const obj3 = { name: '도리', publisher: '출판사' };
const { name, publsiher } = obj3;
console.log(name, publisher);
// 만약 다른 변수명으로 구조 분해 할당 하고 싶다면 const { name : author } = obj;와 같이 작성하면 됩니다. 이렇게 하면 obj의 name이 author에 구조 분해 할당됩니다.

let a = 5;
let b = 10;
[a, b] = [b,a];

