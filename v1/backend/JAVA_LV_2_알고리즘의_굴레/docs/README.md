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
    - unsolvedMessage : 풀지 못한 경우의 반환문

#### - 메서드

    1. solveAlgorithm : Algorithm 인터페이스를 매개변수로 받아 알고리즘을 풀었는지에 따라 다른 결과 반환
        -> 알고리즘을 처음 map에 넣는 경우 풀 확률을 10%로 두고 저장

### 3. main 구성

#### enum AlgorithmType

    - 각 알고리즘별로 정수값과 알고리즘 이름을 묶어서 명시해둠

#### 프로퍼티

    - random : 문제를 풀 확률 계산을 위한 난수 생성 객체
    - wchae : 문제를 풀 우주 객체
    - list : 각 알고리즘을 종류별로 가지고 있는 ArrayList

#### 메서드

    1. printAlgorithm : 오늘 어떤 알고리즘을 풀지 고르고 출력하는 메서드
        - 하드코딩된 문자열 대신 enum 객체 사용

    2. printSolvedMents : 알고리즘 풀이 후 반환된 응답을 올바르게 출력 
