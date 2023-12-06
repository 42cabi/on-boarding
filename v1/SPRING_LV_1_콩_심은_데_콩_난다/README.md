## 개요

![Untitled](https://github.com/42cabi/on-boarding/assets/105692206/254c53b4-c2a7-40f5-93f7-1a960532c7db)


5차 백엔드 `우주(wchae)`는 콜라광이다. 한편 콜라 열매가 콩 처럼 생겼다는 소식을 알게 되었다. 콜라를 주구 장창 마시고 싶은 우주는 콜라 열매를 **Spring**으로 재배하려 하는데..

## 목표

- 이미 작성된 코드들을 Spring Boot로 실행하기

## 요구사항

- Spring Container를 이용해서 `Controller`에 `Service`를, `Service`에 `Properties`를 주입해주세요. 단, 내부 프로퍼티들은 `final`이어야 합니다.
- Spring Boot를 실행한 뒤, ‘`localhost/reaction`’에 들어가면 브라우저에는 ‘YES’, 콘솔에는 콜라 모양 아스키 아트가 보여야합니다.

## 제한사항

- 의존성 주입에 `@Autowired`는 사용할 수 없습니다.
- `Configuration`을 따로 두어 `@Bean`으로 등록할 수 없습니다. - 더 나은 방법이 있지 않을까요?

## 힌트

- `@RequiredConstructor`가 뭘까요?

## 제출

- Github에 PR로 제출합니다.
- 서로 코드 리뷰하는 것은 상관 없으나, 개별로 코드를 작성해보는 것을 권장합니다.
- Intellij에서 코드 스타일을 `GoogleStyle`로 사용합니다.
    - `코드 스타일` - `Java`에서 `탭 문자 사용`, `스마트 탭`에 **체크**하고, `탭 크기는 4`, `들여쓰기 4`, `연속 들여쓰기 8`로 설정합니다.
    - `저장 시 액션` 옵션에서 `코드 서식 다시 지정`, `import 문 최적화`, `코드 재정렬`, `코드 정리 실행` 을 설정해주세요.

## 키워드

- Bean, Component
- Spring Boot
- ApplicationContext
- Inversion of Control, Spring Container
- @Value, application.yml

made by sanan
