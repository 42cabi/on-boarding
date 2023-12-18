## **개요**

![brothers](https://github.com/42cabi/on-boarding/assets/105692206/a413ff4a-e037-4bdd-8838-5645f105c100)


## **목표**

- 3계층 구조, Contorller-Service-Repository 패턴에 대해 알아보기
- DTO에 대해 알아보기
- Java의 Exception과 친해져보기
- 비즈니스 로직을 작성하고, 데이터에 어떠한 작용이 이뤄지는지 살펴보기

## **요구사항**

`LentTest`를 통과하는 사물함 대여 코드를 작성하기

### **사양**

- JDK 17을 사용해주세요.

### **작성**

- `dto`, `testutil` 패키지에 있는 클래스들은 수정할 수 없습니다.
- `domain` 패키지에 있는 클래스들은 **프로퍼티만 수정할 수 없고**, **나머지(메서드 등)는 마음대로 추가, 변경이 가능**합니다.
- `LentController, LentService, LentRepository` 클래스 파일을 실제 까비 코드의 패키지와 동일한 방식으로 분류해주세요.
- `LentController`는 `LentService` 멤버를, `LentServiceImpl`은 `LentHistoryRepository`, `CabinetRepository`, `UserRepository` 를 주입받아야 합니다.

### **구현**

- 사물함의 상태가 사용 중(FULL)인 경우에 `"이미 사용 중인 사물함입니다."` 라는 메시지를 담은 예외를 던져야 합니다.
- 현재 사물함을 대여 중인 유저인 경우에 `"이미 대여 중인 유저입니다."` 라는 메시지를 담은 예외를 던져야 합니다.
- 사용 정지 상태인 유저인 경우에 `"사용 정지상태인 유저입니다."` 라는 메시지를 담은 예외를 던져야 합니다.
- 사물함이 대여되면, 사물함은 사용 중인 상태로 변경되어야 합니다.
- 사물함을 대여하면, 해당 사물함에 대한 올바른 대여 기록이 저장되어야 합니다.
    - 사물함의 대여 기간은 31일입니다.
- `LentController`는 `LentRequest`를 매개변수로 받고, `LentRespone`를 반환하는 대여 메서드 `lent`를 구현해야 합니다.
- 이외에 적혀있지 않은 부분에 대해서는 자유롭게 작성해주시면 됩니다.

## **제출**

- Github에 PR로 제출합니다.
- 서로 코드 리뷰하는 것은 상관 없으나, 개별로 코드를 작성해보는 것을 권장합니다.
- Intellij에서 코드 스타일을 `GoogleStyle`로 사용합니다.
    - `코드 스타일` - `Java`에서 `탭 문자 사용`, `스마트 탭`에 **체크**하고, `탭 크기는 4`, `들여쓰기 4`, `연속 들여쓰기 8`로 설정합니다.
    - `저장 시 액션` 옵션에서 `코드 서식 다시 지정`, `import 문 최적화`, `코드 재정렬`, `코드 정리 실행` 을 설정해주세요.

## **키워드**

- 3 계층 구조(3 Tier Architecture, Controller - Service - Repository)
- 엔티티(Entity)
- 데이터 전송 객체(DTO, Data Transfer Object)
- 자바의 예외(Exception)
- 자바 컬렉션(Collection)
- 접근자와 불변성(Getter, Immutable)

made by sanan
