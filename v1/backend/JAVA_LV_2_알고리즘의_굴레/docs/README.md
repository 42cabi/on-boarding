## 초기 구상

### 1. 상속관계

#### - Algorithm을 인터페이스로 활용하는 클래스들

        1. BFS
        2. BinarySearch
        3. DFS
        4. DP
        5. TwoPointer

#### -Algorithm 인터페이스 구조

    1. isSolution
        - 매개변수로 들어온 알고리즘이 현재 객체와 동일한 유형의 객체인지 확인.
    
    2. getSolution
        - 알고리즘의 종류별로 알맞은 답을 반환하는 매서드
    -> 따라서 각 클래스들은 반환할 답을 프로퍼티로 가지고 있어야 한다.

### 2. Wchae 구성

#### - 프로퍼티

    - algorithmMap : 푼 알고리즘과 푼 횟수를 저장하는 HashMap

#### - 메서드

    - solveAlgorithm : Algorithm 인터페이스를 매개변수로 받아 알고리즘을 풀었는지에 따라 다른 결과 반환
    - checkSolved : 매개변수로 받은 알고리즘이 Map에 존재하는 알고리즘인지 확인
    - solved : Map에 존재하는 알고리즘인 경우 처리
        - 풀었던 알고리즘의 다시 풀 확률을 구하는 과정을 람다 함수로 구현.
    - unsolved : Map에 존재하지 않는 알고리즘인 경우 처리

#### - enum

    - 알고리즘을 종류별로 구분하기 위해 enum을 이용해서 저장해둔다.
