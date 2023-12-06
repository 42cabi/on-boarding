## 개요

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/1dc14d02-9fef-47d5-828a-c667c7d13337/fddbf326-6f52-4005-a0cf-0fda3a4b4b76/Untitled.png)

3차 백엔드이자 인프라 마스터인 `시원(sichoi)`은 새 기수 사람들을 위해 보물을 `S3`와 `EC2`에 숨겨두었다.

과연 그 보물은 뭘까..?

## 목표

- 까비 AWS 계정으로 로그인해서 cabi의 버켓에 있는 보물을 찾아보기
- DataGrip에서 DataSource로 `dev` 서버의 AWS RDS 연결해보기
- User의 PK가 가장 작은(가장 오래된) 유저의 닉네임이 무엇인지 알아보기

## 제한사항

- EC2, DataGrip에 대한 연결은 dev 서버여야 합니다. (prod는 나중에..!)
- vscode, terminal 어떤 것을 사용해도 좋지만, vscode에 config으로 등록하여 연결 시에 재사용 할 수 있어야 합니다!

## 키워드

- AWS S3, EC2
- SSH Tunneling

made by sanan