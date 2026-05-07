# DevTools Online - 개발 기획서

> 작성일: 2026-05-07
> 버전: v1.0

## 1. 프로젝트 목적

사용자 개입 없이 **자동으로 광고 수익을 창출**하는 무료 개발자 유틸리티 웹사이트를 구축한다.

### 핵심 전략
- 개발자들이 자주 검색하는 도구를 무료로 제공
- Google 검색을 통한 자연 유입 트래픽 확보
- Google AdSense 광고로 수익 창출
- 서버 비용 0원 (GitHub Pages 무료 호스팅)

## 2. 기술 스택

| 구분 | 선택 | 이유 |
|------|------|------|
| 프론트엔드 | HTML / CSS / Vanilla JS | 빌드 도구 불필요, 즉시 배포 가능 |
| 호스팅 | GitHub Pages | 무료, HTTPS 자동, CDN 포함 |
| 수익 모델 | Google AdSense | 가장 보편적, 자동 광고 배치 |
| SEO | sitemap.xml, robots.txt, meta 태그 | 검색 엔진 최적화 |
| 분석 | Google Search Console | 검색 성과 모니터링 |

## 3. 도구 목록 (v1.0)

### 현재 포함된 도구 (6종)

| 도구 | 기능 | 타겟 키워드 | 예상 월 검색량 |
|------|------|------------|---------------|
| JSON Formatter | JSON 포맷, 압축, 유효성 검증 | json formatter online | 1,000,000+ |
| Text Counter | 글자수, 단어수, 문장수, 바이트 계산 | character counter | 500,000+ |
| Color Palette Generator | 랜덤/모노/파스텔/다크 팔레트 생성, CSS 내보내기 | color palette generator | 200,000+ |
| Base64 Encoder/Decoder | 텍스트 ↔ Base64 변환 | base64 encode | 300,000+ |
| URL Encoder/Decoder | URL 컴포넌트 인코딩/디코딩 | url encoder | 200,000+ |
| Hash Generator | SHA-1, SHA-256, SHA-384, SHA-512 해시 생성 | sha256 hash generator | 150,000+ |

### 확장 후보 도구 (v2.0+)

| 도구 | 예상 키워드 | 우선순위 |
|------|------------|---------|
| Regex Tester | regex tester online | 높음 |
| Markdown Preview | markdown preview | 높음 |
| Diff Checker | diff checker online | 높음 |
| Lorem Ipsum Generator | lorem ipsum generator | 중간 |
| CSS Minifier | css minifier | 중간 |
| HTML Entity Encoder | html entity encoder | 중간 |
| UUID Generator | uuid generator | 중간 |
| Timestamp Converter | unix timestamp converter | 중간 |
| JWT Decoder | jwt decoder | 낮음 |
| Cron Expression Parser | cron expression | 낮음 |

## 4. 설계 원칙

### 4.1 성능
- 모든 처리는 클라이언트(브라우저)에서 실행
- 서버 통신 없음 → 개인정보 이슈 없음
- 외부 라이브러리 최소화 (폰트만 Google Fonts 사용)

### 4.2 디자인
- 다크 테마 (개발자 선호)
- 반응형 레이아웃 (모바일/태블릿/데스크톱)
- 탭 기반 네비게이션 (SPA 구조)
- URL 해시 라우팅 (`#json`, `#text` 등)

### 4.3 SEO
- 영어 중심 콘텐츠 (글로벌 트래픽 타겟)
- 도구별 고유 설명과 키워드
- 시맨틱 HTML 구조
- Open Graph 메타태그

### 4.4 수익 구조
- 도구 하단에 광고 영역 1개 배치
- 추후 도구 사이 또는 상단에 추가 광고 슬롯 가능
- 사용자 경험을 해치지 않는 선에서 광고 배치

## 5. 수익 예측

### 보수적 시나리오

| 기간 | 월 방문자 | 예상 월 수익 |
|------|----------|-------------|
| 1~3개월 | 100~500 | 0 ~ 3,000원 |
| 3~6개월 | 500~3,000 | 3,000 ~ 15,000원 |
| 6~12개월 | 3,000~10,000 | 15,000 ~ 80,000원 |
| 1년 이후 | 10,000~50,000 | 80,000 ~ 400,000원 |

### 성장 가속 조건
- 도구 10종 이상 확보
- 각 도구를 독립 페이지로 분리 (SEO 극대화)
- Reddit/HackerNews 등에서 바이럴 1회 발생 시 트래픽 급증
- 커스텀 도메인으로 브랜딩 강화

## 6. 파일 구조

```
devtools-online/
├── index.html                          # 메인 페이지 (도구 6종)
├── style.css                           # 전체 스타일시트
├── app.js                              # 도구 로직
├── sitemap.xml                         # 검색엔진 사이트맵
├── robots.txt                          # 크롤러 설정
├── google04b2a7cc1550b0a9.html         # Search Console 확인 파일
├── .gitignore                          # Git 제외 설정
├── README.md                           # 프로젝트 소개
├── STATUS.md                           # 현황 및 남은 작업
├── PLAN.md                             # 이 문서 (개발 기획서)
├── GUIDE_ADSENSE.md                    # AdSense 가이드
└── GUIDE_USER.md                       # 사용 가이드
```

## 7. 로드맵

### Phase 1 - MVP (✅ 완료)
- 6종 도구 개발 및 배포
- SEO 기본 세팅
- AdSense 가입 및 검토 요청

### Phase 2 - 검색 유입 확보
- Search Console sitemap 제출 및 색인 요청
- AdSense 승인 후 광고 코드 삽입
- 도구 3~5종 추가

### Phase 3 - 트래픽 성장
- 각 도구를 독립 페이지로 분리
- 커뮤니티 홍보 (Reddit, Twitter/X, 개발자 포럼)
- Google Analytics 연동으로 트래픽 분석

### Phase 4 - 수익 최적화
- 광고 위치 A/B 테스트
- 커스텀 도메인 연결
- 추가 수익 채널 검토 (후원, 프리미엄 기능 등)
