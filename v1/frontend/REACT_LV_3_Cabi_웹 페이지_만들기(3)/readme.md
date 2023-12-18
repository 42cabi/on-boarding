# LV 3. Cabi 웹 페이지 만들기 (3)

### 🌐 React 온보딩 프로젝트: "Re-Act"

<img width="758" alt="image" src="https://github.com/42cabi/on-boarding/assets/72684256/46f8b131-4125-4f50-8b77-76f2ae453571">

### 🎯 프로젝트 목표

이 프로젝트의 목표는 지금까지 HTML, CSS, JS를 이용하여 만든 프로젝트를 React로 다시 만들어보는 것입니다. 그리고, 주어진 사물함 대여 정보 JSON 데이터를 기반으로 웹 페이지에 사물함 정보를 동적으로 표시해봅시다. 이 프로젝트를 통해 React를 사용법과 API 호출을 통해 데이터를 가져오고, 이를 화면에 표시하는 방법을 배울 수 있습니다.

### 🛠️ 단계별 가이드

### **1️⃣ 프로젝트 설정**

- **Vite** 와 **React** 를 사용하여 새 프로젝트를 생성합니다.
- 필요한 패키지(예: **`axios`, `json-server`**)를 설치합니다.

### **2️⃣ 사물함 정보 API 구현**

- **`json-server`**를 사용하여 사물함 정보를 제공하는 API 서버를 설정합니다.
- 제공된 JSON 데이터를 **`db.json`** 파일에 저장하고, **`json-server`** 로 서비스합니다.
    - **`db.json`**

        ```json
        {
          "floors": [
            {
              "floorNumber": 2,
              "sections": [
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
            },
            {
              "floorNumber": 3,
              "sections": [
                {
                  "section": "A",
                  "cabinets": [
                    {"cabinetId": 25, "status": "FULL", "user": "user25"},
                    {"cabinetId": 26, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 27, "status": "FULL", "user": "user27"},
                    {"cabinetId": 28, "status": "FULL", "user": "user28"}
                  ]
                },
                {
                  "section": "B",
                  "cabinets": [
                    {"cabinetId": 29, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 30, "status": "FULL", "user": "user30"},
                    {"cabinetId": 31, "status": "FULL", "user": "user31"},
                    {"cabinetId": 32, "status": "AVAILABLE", "user": null}
                  ]
                },
                {
                  "section": "C",
                  "cabinets": [
                    {"cabinetId": 33, "status": "FULL", "user": "user33"},
                    {"cabinetId": 34, "status": "AVAILABLE", "user": null},
                    {"cabinetId": 35, "status": "FULL", "user": "user35"},
                    {"cabinetId": 36, "status": "AVAILABLE", "user": null}
                  ]
                }
              ]
            }
          ]
        }
        ```


### **3️⃣ 컴포넌트 작성**

- 사물함 정보를 표시하는 **`CabinetInfo`** 컴포넌트를 작성합니다. 이 컴포넌트는 각 사물함의 상태와 사용자 정보를 표시합니다.
- 사물함 정보를 그룹화하여 표시하는 **`CabinetSection`** 컴포넌트를 작성합니다.

### **4️⃣ API 통신 및 데이터 표시**

- **`axios`**를 사용하여 사물함 정보를 가져오는 함수를 작성합니다.
- **`GET /floors?floorNumber=2`** 또는 **`GET /floors?floorNumber=3`** 과 같은 API 요청으로 각 층의 사물함 정보를 가져올 수 있습니다.
- 가져온 데이터를 **`CabinetSection`** 컴포넌트에 전달하여 화면에 표시합니다.

### **5️⃣ 스타일링 및 반응형 디자인**

- CSS 혹은 **`styled-components`** 를 사용하여 사물함 정보를 보기 좋게 스타일링합니다.
- 미디어 쿼리를 활용하여 다양한 화면 크기에서 적절하게 표시되도록 반응형 디자인을 구현합니다.

### **6️⃣ 최종 검토 및 피드백**

- 완성된 웹 페이지를 다른 참가자들과 공유하고, 피드백을 받습니다.
- 문제점을 찾아 수정하고, 디자인을 개선해봅니다.

made by inshin
