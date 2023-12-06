## 개요

![Untitled](https://github.com/Ssuamje/cabi_on_board/assets/105692206/e4c072f8-3cd3-46b0-b123-24e9d4dea15c)


5차 백엔드 `대욱(daewoole)`은 새롭게 까비에 합류한 이후에 자바를 처음 접했다.

잔뜩 기대를 품고 작성된 코드들을 보는 그 순간!

예상과는 달리 알아보기 어렵고 복잡한 코드들로 구성되어 있었다..!

이에 답답함을 느낀 `대욱`은 본인이 직접 간단하게나마 작은 까비 코드를 작성하게 되는데..

## 목표

`LentTest`를 통과하는 코드를 작성하기

## 요구사항

### 작성

- **클래스는 대문자 카멜케이스**(HelloWorld), **메서드, 변수명은 소문자 카멜케이스**(helloWorld)로 작성합니다. (스네이크 케이스는 없습니다!)
- `dto`, `testutil` 패키지에 있는 클래스들은 수정할 수 없습니다.
- `domain` 패키지에 있는 클래스들은 **프로퍼티만 수정할 수 없고**, 나머지는 마음대로 추가, 변경이 가능합니다.
- `LentController, LentService, LentRepository` 클래스 파일을 실제 까비 코드의 패키지와 동일한 방식으로 분류해주세요.
- `LentController`는 `LentService` 멤버를, `LentServiceImpl`은 `LentHistoryRepository`, `CabinetRepository`, `UserRepository`
  를 주입받아야 합니다. (왜 일까요?)

### 구현

- 사물함의 상태가 사용 중(FULL)인 경우에 `"이미 사용 중인 사물함입니다."` 라는 메시지를 담은 예외를 던져야 합니다.
- 현재 사물함을 대여 중인 유저인 경우에 `"이미 대여 중인 유저입니다."` 라는 메시지를 담은 예외를 던져야 합니다.
- 사용 정지 상태인 유저인 경우에 `"사용 정지상태인 유저입니다."` 라는 메시지를 담은 예외를 던져야 합니다.
- 사물함이 대여되면, 사물함은 사용 중인 상태로 변경되어야 합니다.
- 사물함을 대여하면, 해당 사물함에 대한 올바른 대여 기록이 저장되어야 합니다.
    - 사물함의 대여 기간은 31일입니다.
- `LentController`는 `LentRequest`를 매개변수로 받고, `LentRespone`를 반환하는 대여 메서드 `lent`를 구현해야 합니다.
- 이외에 적혀있지 않은 부분에 대해서는 자유롭게 작성해주시면 됩니다.

## 보너스

- 반납 기능을 구현하고, 연체된 사용자에 대해 사용 정지를 적용해보기

## 키워드

- 어노테이션과 롬복(Annotation, Lombok)
- 3 계층 구조(3 Tier Architecture, Controller - Service - Repository)
- 엔티티(Entity)
- 데이터 전송 객체(DTO, Data Transfer Object)
- 의존성 주입(DI, Dependency Injection)
- 자바의 예외(Exception)
- 자바 컬렉션(Collection)
- 접근자와 불변성(Getter, Immutable)
