## 1-3-2. 데이터 할당

```jsx
var a;
a = 'abc';
var a = 'abc';
```

실제로는 해당 위치에 문자열 ‘abc’를 직접 저장하지는 않습니다. ㄷ에ㅣ터를 저장하기 위한 별도이ㅡ 메모리 공간을 다시 확보해서 문자열 ‘abc’를 저장하고 , 그 주소를 변수 영역에 저장하는 식으로 이뤄집니다. 

이제부터는 데이터의 성질에 따라 ‘변수 영역’, ‘x데이터 영역’으로 구분해서 설명하겠습니다.(정식명칭은 아님)

데이터 할당의 전체 흐름은 다음과 같습니다. 

<aside>

1. 변수 영역에서 빈공간(@1003)을 확보한다.
2. 확보한 공간의 식별자를 a로 지정한다.
3. 데이터 영역의 빈 공간(@5004)에 문자열 ‘abc’를 저장한다.
4. 변수 영역에서 a라는 식별자를 검색한다(@1003)
5. 앞서 저장한 문자열의 주소(@5004)를 @1003의 공간에 대입한다.
</aside>

왜 변수 영역에 값을 직접 대입하지 않고 굳이 번거롭게 한 단계를 더 거치는 걸까요? 이는 데이터 변환을 자유롭게 할 수 잇게 함과 동시에 메모리를 더욱 효율적으로 관리하기 위한 고민의 결과입니다. 

자바 스크립트는 숫자형 데이터에 대해 64비트(8바이트)의 공간을 확보한다고 했습니다. 반면 문자열은 특별히 정해진 규격이 없습니다. 한 글자마다 영어는 1바이트, 한글은 2바이트 등으로 각각 필요한 메모리 용량이 가변적이며 전체 글자 수 역시 가변적이기 때문입니다.

만약 미리 확보한 공간 내에서만 데이터 변환을 할 수 있다면 변호나한 데이터를 다시 저장하기 위해서는 ‘확보된 공간을 변환된 데이터 크기에 맞게 늘리는 작업’이 선행돼야 할 겁니다. 해당 공간이 메모리 상의 가장 마지막에 있었다면 뒤쪽으로 늘리기만 하면 되니까 어렵지 않겠지만 중간에 있는 데이터를 늘려야 하는 상황이라면 어떨까요? 해당 공간보다 뒤에 저장된 데이터들을 전부 뒤로 옮기고 이동시킨 주소를 각 식별자에 다시 연결하는 작업을 해야 합니다. 결국 효율적으로 문자열 데이터의 변환을 처리하려면 변수와 데이터를 별도의 공간에 나누어 저장하는 것이 최적입니다.

문자열 ‘abc’의 마지막에 ‘def’를 추가하라고 하면 컴퓨터는 앞서 ‘abc’가 저장된 공간에 ‘abcdef’를 할당하는 대신 ‘abcdef’라는 문자열을 새로 만들어 별도의 공간에 저장하고 그 주소를 변수 공간에 연결합니다. 반대로 ‘abc’의 마지막 ‘c’를 제거하라고 해도 새로 만듭니다. 기존 문자열에 어던 변환을 가하든 상관 없이 무조건 새로 만들어 별도의 공간에 저장합니다.

# 1-5. 불변 객체 immutable object

## 1-5-1. 불변 객체를 만드는 간단한 방법

참조형 데이터의 ‘가변’은 데이터 자체가 아닌 내부 프로퍼티를 변경할 때만 성립합니다. 데이터 자체를 변경하고자 하면 (새로운 데이터를 할당하고자 하면) 기본형 데이터와 마찬가지로 기존 데이터는 변하지 않습니다. 그렇다면 내부 프로퍼티를 변경할 필요가 있을 때마다 매번 새로운 객체를 만들어 재할당하기로 규칙을 정하거나 자동으로 새로운 객체를 만드는 도구를 활용한다면 객체 역시 불변성을 확보할 수 잇을 것입니다. 혹은 불변성을 확보할 필요가 있을 경우에는 불변 객체로 취급하고, 그렇지 않은 경우에는 기존 방식대로 사용하는 식으로 상황에 따라 대처해도 되겠죠. 

그럼 어떤 상황에서 불변객체가 필요할까요? 값을 전달받은 객체에 변경을 가하더라도 원본 객체는 변하지 않아야 하는 경우가 종종 발생합니다. 

만약 정보가 바뀐 시점에 알림을 보내야 한다거나, 바뀌기 전의 정보와 바뀐 후의 정보의 차이를 가시적으로 보여줘야 하는 등의 기능을 구현해야 할 경우

대상 객체의 프로퍼티 개수에 상관 없이 모든 프로퍼티를 복사하는 함수를 만드는 편이 더 좋을 것입니다. 

```jsx
// 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};
```

copyObject는 for in 문법을 이용해 result 객체에 target 객체의 프로퍼티들을 복사하는 함수입니다. 

```jsx
// copyObject를 이용한 객체 복사
var user = {
	name: 'Ireum',
	gender: 'male'
};

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.');
}

console.log(user === user2); // false
```

copyObject 함수를 통해 간단하게 객체를 복사하고 내용을 수정하는 데 성공했습니다. 이제부터 협업하는 모든 개발자들이 user 객체 내부의 변경이 필요할 때는 무조건 copyObject 함수를 사용하기로 합의하고 그 규칙을 지킨다는 전제하에서는 user 객체가 곧 불변 객체라고 볼 수 있습니다.

# 2 실행 컨텍스트
실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체. 자바스크립트는 어떤 실행 컨텍스트가 활성화 되는 시점에 선언도니 변수를 위로 
끌어올리고(호이스팅), 외부환경 정보를 구성하고, this 값을 설정하는 등의 동작을 수행합니다. 클로저를 지원하는 대부분의 언어에서 이와 유사하거나 동일한 개념이 적용되어 있습니다. 



# 5. 클로저
어떤 함수에서 선언한 변수를 참조하는 내부함수에서만 발생하는 현상
아직 잘 와닿지 않습니다.

외부함수에서 변수를 선언하고 내부함수에서 해당 변수를 참조하는 형태의 예제를 이해해보겠습니다.
```
var outer = function () {
  var a = 1;
  var inner = function () {
    console.log(++a);
  };
  inner();
};
outer();
```
outer 함수에서 변수 a를 선언했고, outer의 내부함수인 inner 함수에서 a의 값을 1만큼 증가시킨 다음 출력합니다.

```
var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner();
};
var outer2 = outer();
console.log(outer2); // 2
```
위에서도 inner 함수 내부에서 외부 변수인 a를 사용했습니다. 그런데 innter 함수를 실행한 결과를 리턴하고 있으므로 결과적으로 outer ㅎ마수의 실행 컨텍스트가 종료된 시점에서는 a 변수를 참조하는 대상이 없어집니다. 
outer 함수의 실행 컨텍스트가 종료되기 이전에 inner 함수의 실행 컨텍스트가 종료돼있으며, 이후 별도로 inner 함수를 호출할 수 없다는 공통점이 있습니다. 

```
var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
};
var outer2 = outer();
```
다시 outer2를 호출하면 a의 값을 1 증가시킨 후 3을 반환합니다. 

outer 함수의 LexicalEnvironment에 접근할 수 있는 이유? 가비지 컬렉터가 어떤 값을 참조하는 변수가 하나라도 있을 때 수집하지 않기 때문
outer의 종료 시점에 inner 함수를 반환합니다. outer의 실행이 종료된 후 내부 함수인 inner는 outer2에서 호출될 수 있음.

선언한 변수를 참조하는 내부 함수에서만  발생하는 현상이란 '외부 함수의 LexicalEnvironment가 gc되지 않는 현상'
(lexcialEnvironment가 참조할 다른 실행 컨텍스트가 잇는 한 실행 종료되어도 gc되지 않는다. 다만 시점은 정확히 알수 없음?) 

* '외부로 전달'이 곧 return만을 의미하는 것은 아니다. 
```
// setInterval/setTimeout
(function () {
  var a = 0;
  var intervalId = null;  // 빈 intervalId 만들기
  var inner = function () {  
    if (++a >= 10) {
      clearInterval(intervalId);
    }
  };
  intervalId = setInterval(inner, 1000);  // 외부객체 window의 setTimeout, setInterval에 전달할 콜백함수 내부에서 지역변수를 참조함
})();
```