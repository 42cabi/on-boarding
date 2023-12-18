## 개요

![Untitled](https://github.com/42cabi/on-boarding/assets/105692206/d858857b-7538-48d5-94d6-aa72f427f9ec)


4차 백엔드이자 ‘자바와 스프링의 신’, ‘영화 그 자체’ `동규(dongglee)`는 본인의 주특기인 Spring을 이용해서 좋아하는 영화를 만들고 싶어졌다. 

본인이 좋아하는 영화를 아카이빙하고, 열람하고 싶은 `동규`는 본인이 직접 DB를 올리고 연결하기에 이르는데..

## 목표

- 이미 있는 docker-compose.yml을 이용해서 DB 컨테이너를 셋업하기
    - JPA 의존성을 설치하고, 어플리케이션에 연결해보기
- 데이터베이스와 ORM에 대해 알아보고, Spring Data JPA와 친해져보기
- **가장 중요한 클라이언트 요청 - 서버 작용 - 데이터 변화 및 데이터 조회를 작성해보기**
- 웹 어플리케이션 서버(Spring Boot)가 어떻게 클라이언트로부터 데이터를 받는지 확인해보기

## 요구사항

**데이터베이스를 이미 작성된 docker-compose.yml 파일을 기반으로 구성**해주세요. (모르겠다면 옆의 팀원에게 도움을 청하세요.)

작성되어 있는 코드를 기반으로, 아래 HTTP 요청에 따라 동작하는 코드를 작성해주세요.

- `GET /movies` 는 **DB에 저장되어 있는 모든 `Movie` 엔티티에 대해 조회**할 수 있어야 합니다.
- `POST /movies`는 `**Movie` 엔티티를 생성, 실제 DB에 영속화**할 수 있어야 합니다.
- 스프링 어플리케이션과 DB의 연결에 대해서는 `Spring Data JPA`를 사용해주세요.
    - 필요한 의존성을 `gradle`에 직접 설치해보세요.
- `Movie` 클래스는 `@Entity`여야 합니다.

## 힌트

- 어떻게 DB를 연결해야 할까요?
    - `application.yml`을 살펴보세요. **DDL**이 무엇인지 아시나요?
- 컨트롤러에서 어떻게 요청을 받아야 할까요? - **역직렬화**가 뭘까요?
    - `MovieRequestDto`는 요청의 어디에 포함되어야 할까요?
- 일반 브라우저에서는 `POST` **HTTP** 메서드를 사용할 수 없습니다.
    - `Postman`을 아시나요?

## 제출

- Github에 PR로 제출합니다.
- 서로 코드 리뷰하는 것은 상관 없으나, 개별로 코드를 작성해보는 것을 권장합니다.
- Intellij에서 코드 스타일을 `GoogleStyle`로 사용합니다.
    - `코드 스타일` - `Java`에서 `탭 문자 사용`, `스마트 탭`에 **체크**하고, `탭 크기는 4`, `들여쓰기 4`, `연속 들여쓰기 8`로 설정합니다.
    - `저장 시 액션` 옵션에서 `코드 서식 다시 지정`, `import 문 최적화`, `코드 재정렬`, `코드 정리 실행` 을 설정해주세요.

## 키워드

- Docker, MariaDB
- Gradle
- DataSource, JPA, Hibernate, JDBC, EntityManager, Entity, Persistence
- DDL, DML
- ORM
- HTTP, Postman
- Serialization, Deserialization, JSON, Jackson Library

made by sanan