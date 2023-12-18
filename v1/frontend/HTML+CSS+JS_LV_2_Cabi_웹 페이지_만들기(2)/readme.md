# LV 2. Cabi 웹 페이지 만들기 (2)

### **🌐 HTML/CSS/JavaScript 온보딩 프로젝트: "사물함 대여 정보 표시하기"**

<img width="759" alt="image" src="https://github.com/42cabi/on-boarding/assets/72684256/e4f7bc1f-34e3-4ef5-aae3-3738af2d9b3f">

### 🎯 프로젝트 목표

이 프로젝트의 목표는 제공된 사물함 대여 정보를 정적 변수로 저장하고, HTML, CSS, 그리고 순수 JavaScript를 사용하여 웹 페이지에 동적으로 표시하는 것입니다. 참가자들은 기본적인 웹 페이지 구조 설정, 스타일링, 그리고 JavaScript를 활용한 DOM 조작을 경험할 수 있습니다.

### 📐 단계별 가이드

### **1️⃣ HTML 구조 설정**

- 사물함 섹션 정보를 표시할 **`div`** 또는 **`section`** 요소를 만듭니다.
- 각 사물함의 상세 정보를 표시할 자식 요소들을 구성합니다.

### **2️⃣ CSS 스타일링**

- 사물함 정보를 보기 좋게 표시하기 위해 CSS를 사용하여 스타일을 적용합니다.
- 사물함의 상태(**`FULL`**, **`AVAILABLE`**)에 따라 다른 스타일을 적용합니다.

### **3️⃣ JavaScript로 데이터 렌더링**

- 주어진 사물함 데이터를 JavaScript 파일 내에 정적 변수로 저장합니다.
    - **`사물함 데이터`**

        ```json
        [
            {
                "section": "A",
                "cabinets": [
                    {"cabinetId": 1, "status": "FULL", "user": "user1"},
                    {"cabinetId": 2, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 3, "status": "FULL", "user": "user2"},
                    {"cabinetId": 4, "status": "FULL", "user": "user3"},
                    {"cabinetId": 5, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 6, "status": "FULL", "user": "user4"},
                    {"cabinetId": 7, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 8, "status": "FULL", "user": "user5"}
                ]
            },
            {
                "section": "B",
                "cabinets": [
                    {"cabinetId": 9, "status": "FULL", "user": "user6"},
                    {"cabinetId": 10, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 11, "status": "FULL", "user": "user7"},
                    {"cabinetId": 12, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 13, "status": "FULL", "user": "user8"},
                    {"cabinetId": 14, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 15, "status": "FULL", "user": "user9"},
                    {"cabinetId": 16, "status": "AVAILABLE", "user": null}
                ]
            },
            {
                "section": "C",
                "cabinets": [
                    {"cabinetId": 17, "status": "FULL", "user": "user10"},
                    {"cabinetId": 18, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 19, "status": "FULL", "user": "user11"},
                    {"cabinetId": 20, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 21, "status": "FULL", "user": "user12"},
                    {"cabinetId": 22, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 23, "status": "FULL", "user": "user13"},
                    {"cabinetId": 24, "status": "AVAILABLE", "user": null}
                ]
            }
        ]
        ```

- JavaScript 배열의 **`map`** 또는 **`forEach`** 메서드를 사용하여 각 사물함 정보를 HTML 요소로 변환하고, 이를 페이지에 동적으로 추가합니다. 어떤 메서드를 사용하는게 더 좋을까요?

### **4️⃣ 데이터 표시 및 상호작용**

- 생성된 HTML 요소들을 웹 페이지의 적절한 위치에 추가합니다.

### **5️⃣ 최종 검토 및 피드백**

- 완성된 웹 페이지를 다른 참가자들과 공유하고, 피드백을 받습니다.
- 디자인과 기능적 측면에서 개선할 점을 찾아 수정해봅니다.

### 📝 보너스

- 섹션을 변경했을 때, 데이터도 변경되도록 구현해보세요.
- 모바일 환경에서 섹션을 어떻게 표현하면 좋을지 고민해보고, 자유롭게 구현해 보세요.

made by inshin
