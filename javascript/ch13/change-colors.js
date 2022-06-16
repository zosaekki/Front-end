var heading = document.querySelector('#heading'); // 소괄호가 나왔다? 메소드 호출, 소괄호 없으면 속성
        heading.onclick = function() {
            heading.style.color = 'red'; // 문자열 사용할 때 '' 홑따옴표 사용
        }