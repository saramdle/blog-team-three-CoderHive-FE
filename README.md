# CoderHive
개발자들을 위한 커뮤니티, 스터디와 프로젝트를 같이 할 사람을 만날 수 있는 블로그 웹사이트.


## 개발기간 및 인원
- 2023.3 ~ 2023.5
- 개발인원: 4명 (백엔드: 3명 / 프론트: 1명)


## 배포 및 개발 링크
- 배포 주소: [https://coderhive.vercel.app](https://coderhive.vercel.app/)
- 백엔드 레포: [https://github.com/saramdle/blog-team-three-coderhive-be](https://github.com/saramdle/blog-team-three-coderhive-be)


## 시작 가이드

> ### 설치 
```bash
$ git clone https://github.com/saramdle/blog-team-three-coderhive-fe.git
$ cd blog-team-three-coderhive-fe
```

> ### 개발 서버 실행
```bash
$ yarn install
$ yarn dev
```
이후 브라우저에서 [http://localhost:3000](http://localhost:3000) 주소로 들어가면 결과를 볼 수 있습니다.

## 기술 스택
### 툴
<div>
  <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 언어 / 프레임워크
<div>
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
</div>

### 배포
<div>
  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>


## UI 디자인


## 화면 구성


## 아키텍쳐
```
    .
    ├── public                  # 정적 자산 폴더
    ├── src                     # 어플리케이서 소스
    │   ├── api                 # 서버 통신 API 저장 폴더
    │   ├── components          # 컴포넌트들 저장 폴더
    │   │   └── common          # 여러 페이지에서 사용되는 컴포넌트
    │   ├── lib                 # 컴포넌트 제외 여러 기능 파일들 저장
    │   │   ├── hook            # 커스텀 훅 폴더
    │   │   └── util            # 앱 전체에 사용되는 기능들 
    │   ├── pages               # 페이지 라우터 파일
    │   ├── store               # Redux 관리 폴더
    │   └── styles              # CSS 파일 저장
    ├── .env.development        # 개발 환경 변수
    ├── .env.production         # 생산 환경 변수
    ├── .eslintrc.json          # ESLint 환경 설정
    ├── .gitignore              # 무시할 git 파일과 폴더들
    ├── next.config.js          # Next.js 환경 설정
    ├── package-lock.json       # 패키지 버전 저장
    ├── package.json            # 프로젝트 종속성 및 스크립트들
    ├── postcss.config.json     # PostCSS 설정
    ├── README.md               # Readme 파일
    ├── tailwind.config.json    # Tailwind 환경 설정
    ├── tsconfig.json           # TypeScript 환경 설정
    └── yarn.lock               # 패키지 버전 저장
```

## 주요 기능


## 해결했던 문제들


## 느낀점
