# DevTools Online - 무료 개발자 유틸리티 웹앱

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 사이트 URL | https://jko-yohan.github.io/devtools-online/ |
| GitHub 저장소 | https://github.com/jko-yohan/devtools-online |
| 호스팅 | GitHub Pages (무료) |
| 기술 스택 | HTML / CSS / Vanilla JS (빌드 도구 없음) |
| 수익 모델 | Google AdSense 광고 |
| 서버 비용 | 0원 |
| 최초 배포일 | 2026-05-07 |

## 포함된 도구 (6종)

| 도구 | 설명 | SEO 타겟 키워드 |
|------|------|----------------|
| JSON Formatter | JSON 포맷/압축/검증 | json formatter online, json validator |
| Text Counter | 글자수/단어수/바이트 카운터 | character counter, word counter online |
| Color Palette Generator | 랜덤 색상 팔레트 생성 (4가지 모드) | color palette generator |
| Base64 Encoder/Decoder | Base64 인코딩/디코딩 | base64 encode decode online |
| URL Encoder/Decoder | URL 인코딩/디코딩 | url encoder decoder |
| Hash Generator | SHA-1/256/384/512 해시 생성 | sha256 hash generator, hash online |

## 파일 구조

```
devtools-online/
├── index.html      # 메인 페이지 (도구 6종 포함)
├── style.css       # 스타일시트 (다크 테마, 반응형)
├── app.js          # 도구 로직 (순수 JS)
├── sitemap.xml     # 검색엔진 사이트맵
├── robots.txt      # 크롤러 허용 설정
├── .gitignore      # Git 제외 파일
└── README.md       # 이 문서
```

## 수정 방법

### 광고 코드 삽입
`index.html`에서 아래 부분을 찾아 AdSense 코드로 교체:
```html
<div class="ad-placeholder">
    <!-- 이 부분을 AdSense 광고 코드로 교체 -->
    <p>Advertisement</p>
</div>
```

### 새 도구 추가
1. `index.html`에 탭 버튼 추가: `<button class="tab" data-tool="새도구">도구명</button>`
2. `index.html`에 패널 추가: `<section id="tool-새도구" class="tool-panel">...</section>`
3. `app.js`에 해당 도구 로직 함수 추가

### 로컬 테스트
```bash
cd /Users/johnko/Documents/GitHub/devtools-online
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080 접속
```

## 수익화 로드맵

1. **[필수]** Google AdSense 가입 및 광고 코드 삽입
2. **[필수]** Google Search Console 등록 및 sitemap 제출
3. **[선택]** 도구 추가로 트래픽 확대 (Markdown Preview, Regex Tester 등)
4. **[선택]** 커스텀 도메인 연결 (브랜딩 강화)
