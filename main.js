/*
// 백틱 기호 사이에 문자 쓰면 Enter로 줄 바꿈 가능
let str = `
010-1234-5678
thesecon@gail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`
// 정규 표현식

// 생성자 방식
//const regexp = new RegExp('the', 'gi')

// 리터럴 방식
const regexp = /the/gi
console.log(str.match(regexp))


// .test()
const regexp = /fox/gi
// console.log(regexp.test(str))

// .replace()
str = str.replace(regexp, 'AAA')
console.log(str)
*/
/*
// const regexp = /the/  // 제일 먼저 찾은 것 표시. 15번째 글자
// const regexp = /the/g   // 소문자 두 개만 찾음 (g:전체에서 찾음)
const regexp = /the/gi  // 대소문자 구분 없이 3개 찾음 (i:대소문자 구분없이)
console.log(str.match(regexp))

console.log(str.match(/the/gi)) // 정규식 변수 대신 직접 씀


// console.log(str.match(/\./gi))  // \. : 마침표 찾기 (\쓰면 .를 마침표로 인식)

// console.log(str.match(/\.$/gi))  // 문장 끝에 . 있는지 찾음 

console.log(str.match(/\.$/gim))  // m(multi line) : 각 각의 줄을 하나의 시작과 끝으로) 마침표 찾음 (배열에 1개 찾음)


// 패턴(표현)
console.log(
  str.match(/d$/gm)   // 한 줄의 끝이 d라면 찾아짐 (줄바꿈을 무시해서 null 나옴) 
)                     // 옵션을 gm 으로 변경하면 찾음

console.log(
  str.match(/^t/gim)  // 소문자 t로 시작하는 것 찾음 
)                     // i 추가하면 대문자 T도 찾음    


console.log(
  str.match(/./g)  // 마침표(.)은 스페이스 포함 대부분의 글자 의미 
)

// 앞 뒤 글자 일치하는 것 찾기
console.log(
  str.match(/h..p/g) // h 다음에 ..(어떤 글자 올 수 있음) 뒤에 p로 끝나는 것 찾기
)
console.log(
  str.match(/fox|dog/) // fox 또는 dog 찾기 (옵션 g 없으면 먼저 찾아진 것만 반환)
)

// 글자 찾기 5
console.log(
  str.match(/https/g) 
)
console.log(
  str.match(/https?/g)  // s가 있거나 s가 없는 것 모두 찾기 
)

// 특정 글자 몇 개 이상 나오는 것 찾기
console.log(
  str.match(/d{2}/) // d가 두 번 반복되는 위치 찾기
)
console.log(
  str.match(/d{2}/g) // dddd 에서 dd 가 두번 찾아짐
)
console.log(
  str.match(/d{2,}/g) // d가 2개 이상 찾기
)

// 숫자,글자 외의 문자로 구분된 2~3글자 찾기
console.log(
  str.match(/\b\w{2,3}\b/g)
)

// f 또는 o 또는 x 찾기
console.log(
  str.match(/[fox]/g)
)

// 숫자 1개 이상 연속된 것 찾기
console.log(
  str.match(/[0-9]{1,}/g)
)
*/

let str2 = `
010-1234-5678
thesecon@gail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
/*
console.log(
  str2.match(/[가-힣]{1,}/g)
)

// 모든 word(영문,숫자,_) 찾기
console.log(
  str2.match(/\w/g)
)

console.log(
  str2.match(/\bf\w{1,}\b/g)
)

// 숫자 검색
console.log(
  str2.match(/\d/g)
)
// 숫자 덩어리
console.log(
  str2.match(/\d{1,}/g)
)


const h = `  the hello  world   !

`

// 공백(스페이스, 탭)
console.log(
  h.match(/\s/g)
)

// 공백 변경
console.log(
  h.replace(/\s/g, '')
)
*/
let str = `
010-1234-5678
thesecon@gail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`
/*
// 앞쪽 일치
console.log(
  str.match(/.{1,}(?=@)/g)
)
*/
// 뒤쪽 일치
console.log(
  str.match(/(?<=@).{1,}/g)
)