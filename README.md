# 개인 웹사이트 (영문)
Next.js와 Headless 아키텍처를 기반으로 구축한 개인 웹사이트 겸 영문 기술 블로그입니다. Show Your Work와 Learn in Public이라는 가치를 직접 실천하고 싶어서 저의 개발 여정과 학습 과정을 기록하고 공유하는 공간을 만들게 되었습니다.

🔗 Live Demo: https://www.leejunkim.com/

# 주요 기능
- Headless CMS 또는 별도의 백엔드 API로부터 게시물 데이터를 동적으로 가져와 렌더링합니다.
- 개발 관련 포스트의 가독성을 높이기 위해 highlight.js를 활용하여 코드 블록에 자동으로 구문 강조를 적용합니다.
- Tailwind CSS를 사용하여 모든 디바이스 크기에 최적화된 UI를 제공하며, 사용자의 시스템 설정에 맞춘 다크 모드를 지원합니다.

# 아키텍처 (Architecture)
- Next.js App Router: 파일 시스템 기반의 직관적인 라우팅을 위해 Next.js 13+의 App Router를 사용했습니다.
- 헤드리스 아키텍처 (Headless Architecture): 프론트엔드(Next.js)와 백엔드(콘텐츠 API)를 완전히 분리했습니다. 이러한 구조 덕분에 프론트엔드의 기술 스택에 제약 없이 유연하게 데이터를 연동하고 확장할 수 있습니다.
- 클라이언트 사이드 렌더링 (CSR): "use client"; 지시어를 사용하여 특정 컴포넌트를 클라이언트에서 렌더링합니다. useEffect 훅을 통해 데이터를 가져와 동적인 콘텐츠를 사용자에게 보여줍니다.

<img width="1573" height="623" alt="image" src="https://github.com/user-attachments/assets/94d64dac-e546-4acc-a35a-5d9797662165" />

Admin 페이지
- 깃허브: https://github.com/lkim0402/blog-admin-frontend

백엔드
- 깃허브: https://github.com/lkim0402/blog-backend

# 기술 스택
<div align="left">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</div>
