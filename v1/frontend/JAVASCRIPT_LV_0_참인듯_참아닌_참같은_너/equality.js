/**
 * 예제)
 * 00번
 * 정답: test is true!
 */
let test = true;
if (test) {
  console.log("test is true!");
} else {
  console.log("test if false...");
}

/**
 * 01번
 * 정답: true
 *  > 위 연산에 사용된 `*` 기호는 곱셈 연산자로, 숫자가 아닌 형에 대해 자동으로 숫자로 형변환하여 계산을 진행한다
 *  > js에서 boolean에 대해 true => 1, false => 0으로 변환된다
 */
if (true * false) {
  console.log(true * false + " is true!");
} else {
  console.log(true * false + "is false!");
}

/**
 * 02번
 * 정답: true
 *  > 위 연산도 마찬가지로 연산자에 맞는 형으로 자동 형변환되는데 순서는 다음과 같다.
 *  > 1. true = 1 >> 1 + 1 = 2
 *  > 2.  2 == "2" >> "2" == "2"
 */
if (true + true == "2") {
  console.log("true + true is 2!");
} else {
  console.log("true + true is NOT 2!");
}

/**
 * 03번
 * 정답: true
 *  > `===` 연산은 형변환 없이 비교를 진행한다
 *  > `true === 1`은 false인데, 다음 연산이 true인 이유는 `+` 연산에 대해 이미 true가 형변환 되어 2로 계산이 되었기 때문이다
 *  > 따라서 이미 형변환 후 계산된 결과인 2와 2를 `===` 연산으로 비교하면 true가 나온다
 */
if (true + true === 2) {
  console.log("true + true is Strictly equal to 2!");
} else {
  console.log("true + true is Strictly NOT equal to 2!");
}

/**
 * 04번
 * 정답: true
 *  > 비어있지 않은 문자열은 true로 판별된다
 *  > 처음에 확인하는 방법을 몰라 "hello" == true와 같은 형태로 콘솔 창에 썼으나 이는 전혀 다른 맥락으로 `!` 연산을 통해 하는 방법으로 판별하였다
 *  - "hello" == true >> false (Nan != 1)
 *  - !!"hello" >> true (!false -> true)
 */
if ("hello") {
  console.log("true");
} else {
  console.log("false");
}

/**
 * 05번
 * 정답: false
 *  > 빈 문자열은 false
 *  > 다음 6가지를 제외한 나머지의 경우는 true로 판별된다
 *    : false, 0, null, undefined, '', NaN
 */
if ("") {
  console.log("'' is true");
} else {
  console.log("'' is false");
}

/**
 * 06번
 * 정답: true
 *  > 빈 배열은 true
 */
if ([]) {
  console.log("empty array is true");
} else {
  console.log("empty array is false");
}

/**
 * 07번
 * 정답: true
 *  > 빈 객체는 true
 */
if ({}) {
  console.log("empty object is true");
} else {
  console.log("empty object is false");
}

/**
 * 08번
 * 정답: false
 *  > null 값이 직접적으로 false 자체는 아니지만 불리언 컨텍스트에서는 false로 판별된다
 *  > 불리언 컨텍스트: 어떤 값이나 표현식이 참이나 거짓으로 평가될 필요가 있는 상황을 설명할 때 사용되는 말로
 *                     주로 조건문, 논리 연산자, 산술 연산자 등에서 사용된다
 */
if (null) {
  console.log("true");
} else {
  console.log("false");
}

/**
 * 09번
 * 정답: false
 *  > undefined: 특별한 원시 데이터타입 중 하나로,
 *    변수가 선언되었으나 아직 어떤 값으로도 초기화되지 않았을 때 기본적으로 할당되는 값이다
 *    변수의 값이 의도적으로 비어있지 않은 즉, 아직 값을 갖지 않았다는 것을 의미한다
 *    다음과 같은 경우에 undefined로 출력되거나 반환된다
 *    - 변수 초기화 하지 않은 경우
 *    - 아무런 값도 반환하지 않는 함수
 *    - 존재하지 않는 객체의 속성에 접근한 경우
 */
if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is false");
}

/**
 * 10번
 * 정답: true
 *  > null vs undefined
 *    - 공통점: 값이 없음
 *    - 차이점: null(의도적으로 값이 없음), undefined(아직 값이 할당되지 않음)
 */
if (null == undefined) {
  console.log("null is same as undefined!");
} else {
  console.log("null is NOT same as undefined!");
}

/**
 * 11번
 * 정답: false
 *  > 정확한 비교를 진행하므로, false
 */
if (null === undefined) {
  console.log("null is Strictly Equal to undefined!");
} else {
  console.log("null is Strictly NOT Equal to undefined!");
}

/**
 * 12번
 * 정답:
 */
if (1 + "2" == 12) {
  console.log("1 + '2' == 12 is true");
} else {
  console.log("1 + '2' == 12 is false");
}

/**
 * 13번
 * 정답: true
 *  > "1" + "2" >> "12" >> "12" == "12" (true)
 *  > `+` 연산자를 만날 때, 숫자와 문자열이 만나면 보통 숫자가 문자열로 바뀐 후 연산이 진행된다
 */
if (1 + "2" === "12") {
  console.log(1 + "2" + " is true");
} else {
  console.log(1 + "2" + " is false");
}

/**
 * 14번
 * 정답: false
 *  > !a : true
 *    typeof a == "object" : typeof undefined >> "undefined" != "object" >> false
 *  > typeof 연산자: 주어진 변수나 표현식의 데이터 타입을 `문자열` 형태로 반환하여, 변수가 어떤 타입의 데이터를 담고 있는지 확인할 수 있다
 *    - return: "undefined", "boolean", "number", "string", "symbol", "object", "function"
 */
var a = undefined;
if (!a && typeof a == "object") {
  console.log(typeof a + " is an object");
} else {
  console.log(typeof a + " is NOT an object");
}

/**
 * 15번
 * 정답: true
 *  > `null`은 `"object"` 타입으로 분류된다
 *  > 이는 초기 JavaScript 설계의 오류로 인한 결과로, 수정되지 못한 채 남게된 유명한 버그이다. 외우자
 *    다음과 같은 연산보단 `b === null`의 연산으로 확인하는 것이 더 정확하다
 */
var b = null;
if (!b && typeof b == "object") {
  console.log(typeof b + " is an object");
} else {
  console.log(typeof b + " is NOT an object");
}

/**
 * 16번
 * 정답: false
 *  > true = 1 >> true - 1 = 0 >> if (0) is false
 */
if (true - 1) {
  console.log(true - 1 + " is true");
} else {
  console.log(true - 1 + " is false");
}

/**
 * 17번
 * 정답: false
 *  > "true" + "2" = "true2"
 *  > 수치 연산에서 `true`는 1로 변환되지만, 문자열과의 연산에서는 문자열인 "true"로 변환된다
 *  > 즉, 숫자와 문자열에 대해 `+` 연산을 수행하면 문자열 연결을 우선으로 하므로 타입 변환이 위와 같이 수행된다
 */
if (true + "2" == "12") {
  console.log(true + "2" + " is '12'");
} else {
  console.log(true + "2" + " is NOT '12'");
}

/**
 * 18번
 * 정답: false
 *  > {} : 빈 객체로, 연산자 `+` 앞에 위치하면 문자열로 반환된다 >> `"[object Object]"`
 *  > const: 변수를 선언함과 동시에 다시 할당될 수 없다는 키워드로, 선언과 동시에 초기화 되어야 한다
 *           다만, const로 선언된 변수에 객체나 배열을 할당 시, 해당 변수의 요소는 변경될 수 있다
 *           즉, 참조 자체는 변할 수 없지만 내용은 변경될 수 있다
 *  > typeof obj : "string"
 */
const obj = {} + 1;
if (typeof obj == "object") {
  console.log(typeof obj + " is an object");
} else {
  console.log(typeof obj + " is NOT an object");
}

/**
 * 19번
 * 정답: false
 */
if (NaN) {
  console.log("NaN is true");
} else {
  console.log("NaN is false");
}

/**
 * 20번
 * 정답: true
 *  > NaN: Not a Number 의 약자로, 숫자가 아닌 값이 수치로 변환될 때 사용되는 키워드이다
 *    따라서 타입 자체는 "number" 이다
 *  > 특징: 자기 자신과 비교할 때, 같지 않다 따라서 `NaN == NaN`은 false를 반환한다
 */
if (typeof NaN == "number") {
  console.log("typeof(NaN) is " + typeof NaN);
} else {
  console.log("typeof(NaN) is " + typeof NaN);
}

/**
 * 21번
 * 정답: true
 */
if ("sanan" === "sanan") {
  console.log("true");
} else {
  console.log("false");
}

/**
 * 22번
 * 정답: false
 *  > true / false >> 1 / 0 >> NaN
 *  > NaN == NaN >> false
 *    NaN의 특징으로 자기 자신과 비교하면 항상 같지 않다
 */
if (true / false == NaN) {
  console.log(true / false + " is NaN");
} else {
  console.log(true / false + " is not NaN");
}

/**
 * 23번
 * 정답: true
 *  > true & 3 >> 1 & 3 >> 비트 연산(AND)의 결과 >> 1
 */
if (true & 3) {
  console.log((true & 3) + " is true");
} else {
  console.log((true & 3) + " is false");
}

/**
 * 24번
 * 정답: false
 *  > true & "0xAA" >> 1 & 170 >> 비트 연산(AND)의 결과 >> 0
 */
if (true & "0xAA") {
  console.log((true & "0xAA") + " is true");
} else {
  console.log((true & "0xAA") + " is false");
}

/**
 * 25번
 * 결론: 위의 if-else 문들을 통해, 우리는 JavaScript 에서 비교 시
 *      오직 ... 연산자만을 사용해야 한다는 것을 알 수 있다.
 * 빈칸 (...) 에 들어갈 연산자를 적으시오.
 * 정답: ===
 *  > 일반적으로 JavaScript에서는 예측 가능하고 명확한 코드를 작성하기 위해 "==="를 사용하는 것이 권장된다
 *    불필요한 타입 변환으로 인한 오류를 방지하고 코드의 의도를 명확하게 표현할 수 있기 때문이다
 *    또한, 특정 상황에서 "==" 연산자가 유용할 수 있으나 혼란의 여지가 있기 때문이다
 */