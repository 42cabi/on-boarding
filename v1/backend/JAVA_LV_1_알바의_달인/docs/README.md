# 기능 구현 목록

## BotImpl

- ### 1. 프로퍼티

    - 현재 주문 목록을 가지고 있는 map.
    - 주문의 종류를 enum으로 명시해둔다.

- ### 2. 메서드

    1) takeOrder
        - 내부 지역변수로 Parse 객체를 가지고 있다.
        - switch문의 조건식에 Parse 객체의 caseCheck 메서드를 이용해 요구사항의 종류를 구분한다.
        - 각 case마다 요구사항에 적절한 메서드를 불러온다. -> parse의 split 활용해서 매개변수로 넘겨준다.

    2) result
        - 모든 주문 목록의 가격을 합산해서 출력한다.

## Parse

- ### 프로퍼티
    - 리턴할 string arraylist

- ### 메서드
    1) caseCheck
        - 현재 주문의 종류를 구분하는 메서드
    2) split
        - <>를 구분자로 안의 내용만 분리해서 string list로 반환하는 메서드
