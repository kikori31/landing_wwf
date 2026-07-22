// index.js
// 1. 초기상태-오답박스 팝업 숨기기
// 2. 정답 확인하기 버튼 클릭 시 1번 대상 보이기
// 3. x 버튼 클릭 시 위 1번 대상 숨기기
// 변수대상(오답박스 팝업, x버튼, 정답확인버튼)
// 변수생성키워드 변수명 = 대입값;
const answer_popup_bg = document.querySelector('.answer_popup_bg');
const answer_close_btn = document.querySelector('#answer_close_btn');
const quiz_btn = document.querySelector('#quiz_btn');
console.log(answer_popup_bg,answer_close_btn,quiz_btn);

//숨길 때 적용 css -> 선택자 {속성:값;}
//숨길 때 적용 css -> 선택자 {display:none;}
//숨길 때 적용 JS -> 객체.style.속성 = 값;
//숨길 때 적용 JS -> 객체.style.display = 'none';

// 1. 초기상태-오답박스 팝업(answer_popup_bg) 숨기기
answer_popup_bg.style.display = 'none';

// 2. 정답 확인하기 버튼 클릭 시 1번 대상 보이기
// 객체.함수()
//addEventListener 이벤트를 호출하는 함수
//addEventListener('이벤트종류', 실행함수);
quiz_btn.addEventListener('click',popupShow);
function popupShow() {
    answer_popup_bg.style.display = 'block';
}
