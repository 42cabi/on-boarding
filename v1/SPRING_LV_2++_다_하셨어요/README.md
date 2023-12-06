## 개요

![Untitled](https://github.com/42cabi/on-boarding/assets/105692206/63818cbe-2be4-4b60-a73a-c59315b7e5c9)


4차 백엔드 `동규(dongglee)`는 본인이 원하는 코드를 다 짰지만, `상제(sanan)`가 요구하는 무리한 구현과 테스트를 작성해야하는 상황에 처했다.

거절을 잘 못하는 `동규` 를 위해,  `상제`가 요구한 코드 작성을 도와주자!

## 목표

- **이전 LV 2에서 작성한 코드를 응용합니다.**
- `Assertions.assertj.core.api` 를 이용해 테스트 코드를 작성합니다.
- 요구사항을 만족하는 추가 코드와 테스트를 구현해야 합니다.

## 요구사항

- `Movie`는 만든 감독(`Director`)과 연관관계를 가져야 합니다.
- 기존에 String으로 있던 `Director`를 별도의 엔티티로 구현해야 합니다.
    - `Director`는 이름, 국적, 데뷔시각을 갖습니다.
    - 국적은 **한국, 미국, 프랑스, 일본**으로 나뉩니다.
    - `Director`는 본인의 `Movie`에 대한 설명을 String으로 반환할 수 있어야 합니다.
        
        예시 : `박찬욱 : 제가 만든 헤어질 결심(은)는 멜로 영화입니다.` *(저는 멜로라고 생각하지 않습니다)*
        
- `Movie`는 다음과 같은 기능을 가져야 합니다.
    - 기존의 필드에서 장르를 추가합니다. 장르는 코미디, 호러, 드라마, 액션, 판타지로 나뉩니다.
    - 특정 시간이 주어졌을 때, 해당하는 시간을 기준으로 이전에 만들어졌는지, 이후에 만들어졌는지 알 수 있어야 합니다.
    

다음과 같은 테스트를 작성해야 합니다.

- `Director`를 생성할 때,
    - name이 20자가 넘어가는 경우 `IllegalArgumentException`을 throw하는 지
    - 데뷔 시각이 1900년 이전인 경우 `IllegalArgumentException`을 throw하는 지
    - 이외의 경우에 잘 생성이 되는지
- `Director`가 설명을 할 때,
    - 본인의 영화가 아닌 경우 `IllegalArgumentException`을 throw하는 지
    - 기존에 작성한 구조대로 설명을 잘 하는지 (String을 반환하는지)
- `Movie`를 생성할 때,
    - DB에 저장되어 있지 않은 Director인 경우 `IllegalArgumentException`을 throw하는 지
    - 영화가 제작된 시각이 1900년 이전인 경우 `IllegalArgumentException`을 throw하는 지
- `Movie`가 언제 만들어졌는지 구분할 때
    - 잘 구분하는지

---

### 보너스

- MovieService에서,
    - getAllMovies를 호출할 때,
        - repository에 있는 모든 데이터를 잘 가져오는지
    - createMovie를 할 때,
        - 새로운 Movie를 잘 영속화 하는지

## 힌트

- `OneToMany`를 아시나요?
- `ToString`을 아시나요?
- Entity가 DB에 저장되어 있지 않은 경우는 어떻게 알 수 있을까요?
- Entity를 생성해서 DB에 저장한 것에 대한 검증은 어떻게 할 수 있을까요?

## 제출

- Github에 PR로 제출합니다.
- 서로 코드 리뷰하는 것은 상관 없으나, 개별로 코드를 작성해보는 것을 권장합니다.
- Intellij에서 코드 스타일을 `GoogleStyle`로 사용합니다.
    - `코드 스타일` - `Java`에서 `탭 문자 사용`, `스마트 탭`에 **체크**하고, `탭 크기는 4`, `들여쓰기 4`, `연속 들여쓰기 8`로 설정합니다.
    - `저장 시 액션` 옵션에서 `코드 서식 다시 지정`, `import 문 최적화`, `코드 재정렬`, `코드 정리 실행` 을 설정해주세요.

## 키워드

- 유닛 테스트
- JUnit과 AssertJ
- 열거형, LocalDateTime과 DB
- M:N 관계

made by sanan
