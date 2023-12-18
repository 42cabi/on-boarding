## 개요

![Untitled](https://github.com/42cabi/on-boarding/assets/105692206/254c53b4-c2a7-40f5-93f7-1a960532c7db)


5차 백엔드 `우주(wchae)`는 커피보다는 콜라를 좋아한다.

한편 우주는 콜라 열매가 사실은 콩과 비슷하게 생겼다는 소식을 듣게 되는데..

콜라를 직접 만들어 먹고 싶지만 농장이 없는 우주는 **Spring**에서 **Bean**을 만들 수 있다는 소식을 듣고,
**Spring**에서 직접 재배해보려 하는데..

## 목표

- **Spring의 Bean**과 **Spring Boot의 Component, Component Scan** 개념 알아보기
- **Spring Container**와 **의존성 주입(DI)**, **제어의 역전(IoC)**에 대해 알아보기
- 자바의 패키지 구조, 그리고 프로필(`application-?.yml`)에 대해 이해해보기

## 요구사항

- **Spring Boot**를 실행한 뒤, ‘`localhost:8080/reaction`’에 들어가면 브라우저에는 ‘**`YES`’**, `**콘솔에는 콜라 모양 아스키 아트**`가 보여야합니다.
- **Spring Container**를 이용해서 `Controller`에 `Service`를, `Service`에 `Properties`를 주입해주세요. 단, 내부 프로퍼티들은 `final`이어야 합니다.
- 컨트롤러는 `RestController`여야 합니다.
- 의존성 주입에 `@Autowired`는 사용할 수 없습니다.
    - `Configuration`을 따로 두어 `@Bean`으로 등록할 수 없습니다. - 더 나은 방법이 있지 않을까요?

## 힌트

- `@RequiredArgsConstructor`가 뭘까요?

## 제출

- Github에 PR로 제출합니다.
- 서로 코드 리뷰하는 것은 상관 없으나, 개별로 코드를 작성해보는 것을 권장합니다.
- Intellij에서 코드 스타일을 `GoogleStyle`로 사용합니다.
    - `코드 스타일` - `Java`에서 `탭 문자 사용`, `스마트 탭`에 **체크**하고, `탭 크기는 4`, `들여쓰기 4`, `연속 들여쓰기 8`로 설정합니다.
    - `저장 시 액션` 옵션에서 `코드 서식 다시 지정`, `import 문 최적화`, `코드 재정렬`, `코드 정리 실행` 을 설정해주세요.

## 키워드

- 어노테이션과 롬복(Annotation, Lombok)
- 의존성 주입(DI, Dependency Injection)
- Bean, Component
- Spring Boot
- ApplicationContext
- Inversion of Control, Spring Container
- @Value, application.yml

made by sanan