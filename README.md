# 연의기록 랜딩페이지
HTML/CSS로 제작한 반응형 랜딩페이지입니다. 빌드나 패키지 설치가 필요하지 않습니다.

- 데모: https://yeon-record-night-demo.a1den1and.chatgpt.site/
- GitHub Pages: https://chony9311-commits.github.io/yeontaro/
- 로컬 실행: `python3 -m http.server 8080`, 이후 http://localhost:8080 접속
- 수정: `index.html`(내용), `landing.css`(디자인), `assets/`(이미지와 로컬 폰트)
- 배포: 저장소 Settings → Pages → Build and deployment → Source: GitHub Actions → 이후 main에 반영하면 자동 배포됩니다

이미지는 기존 연의기록 데모의 연화와 RWS 카드 이미지를 재사용합니다. 카드 이미지는 Rider–Waite–Smith 원본이며 그림의 저작자 Pamela Colman Smith, 구상 Arthur Edward Waite입니다. 예시 카드 배치는 실제 결과를 보장하지 않습니다.
서체는 Gowun Batang 및 Pretendard이며 SIL OFL 라이선스 전문을 assets/fonts에 포함합니다. 외부 프레임워크·JavaScript·추적 도구를 사용하지 않습니다.

페이지에 사용한 글자만 남긴 서브셋 폰트를 사용합니다. 새로운 문구를 추가할 때는 해당 글자가 포함되도록 폰트 서브셋도 갱신하세요.
