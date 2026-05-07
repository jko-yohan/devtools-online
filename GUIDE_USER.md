# DevTools Online - 사용 가이드

> 사이트 URL: https://jko-yohan.github.io/devtools-online/

## 사이트 접속

브라우저에서 위 URL로 접속하면 바로 사용 가능합니다.
회원가입, 로그인 불필요. 모든 데이터는 브라우저에서만 처리되며 서버로 전송되지 않습니다.

## 도구별 사용법

### 1. JSON Formatter

JSON 데이터를 보기 좋게 포맷하거나 압축합니다.

**사용 방법:**
1. 상단 탭에서 **JSON Formatter** 클릭
2. 왼쪽 입력창에 JSON 데이터 붙여넣기
3. **Format** 클릭 → 들여쓰기된 JSON 출력
4. **Minify** 클릭 → 공백 제거된 한 줄 JSON 출력
5. **Copy** 클릭 → 결과를 클립보드에 복사

**잘못된 JSON 입력 시:** 빨간색으로 오류 메시지가 표시됩니다.

---

### 2. Text Counter

텍스트의 글자수, 단어수, 문장수, 문단수, 바이트 수를 실시간으로 카운트합니다.

**사용 방법:**
1. 상단 탭에서 **Text Counter** 클릭
2. 입력창에 텍스트 입력 또는 붙여넣기
3. 아래 6개 통계가 실시간으로 업데이트됨

**표시 항목:**
| 항목 | 설명 |
|------|------|
| Characters | 전체 글자수 (공백 포함) |
| No Spaces | 공백 제외 글자수 |
| Words | 단어 수 |
| Sentences | 문장 수 (마침표/물음표/느낌표 기준) |
| Paragraphs | 문단 수 (빈 줄 기준) |
| Bytes | UTF-8 바이트 크기 |

---

### 3. Color Palette Generator

랜덤 색상 팔레트를 생성합니다. 4가지 모드를 지원합니다.

**사용 방법:**
1. 상단 탭에서 **Color Palette** 클릭
2. 버튼 클릭으로 팔레트 생성:
   - **Generate New Palette** — 랜덤 색상 5개
   - **Monochrome** — 단일 색조의 명도 변화
   - **Pastel** — 파스텔 톤 색상
   - **Dark** — 어두운 톤 색상
3. 색상 카드 클릭 → HEX 코드가 클립보드에 복사됨
4. **Export CSS** 클릭 → CSS 변수 형태로 내보내기

---

### 4. Base64 Encoder / Decoder

텍스트를 Base64로 인코딩하거나, Base64 문자열을 원래 텍스트로 디코딩합니다.

**사용 방법:**
1. 상단 탭에서 **Base64** 클릭
2. 입력창에 텍스트 또는 Base64 문자열 입력
3. **Encode** 클릭 → Base64로 변환
4. **Decode** 클릭 → 원래 텍스트로 변환
5. **Copy** 클릭 → 결과 복사

**예시:**
- 입력: `Hello World` → Encode → `SGVsbG8gV29ybGQ=`
- 입력: `SGVsbG8gV29ybGQ=` → Decode → `Hello World`

---

### 5. URL Encoder / Decoder

URL에 포함할 수 없는 특수문자를 안전하게 인코딩하거나, 인코딩된 URL을 원래 형태로 복원합니다.

**사용 방법:**
1. 상단 탭에서 **URL Encode** 클릭
2. 입력창에 URL 또는 인코딩된 문자열 입력
3. **Encode** 클릭 → URL 인코딩
4. **Decode** 클릭 → 디코딩

**예시:**
- 입력: `안녕하세요 세계` → Encode → `%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%20%EC%84%B8%EA%B3%84`

---

### 6. Hash Generator

입력 텍스트의 해시값을 생성합니다. SHA-1, SHA-256, SHA-384, SHA-512를 동시에 계산합니다.

**사용 방법:**
1. 상단 탭에서 **Hash Generator** 클릭
2. 입력창에 해시할 텍스트 입력
3. **Generate Hashes** 클릭
4. 4가지 알고리즘의 해시값이 동시에 표시됨
5. 각 해시 옆 **Copy** 버튼으로 개별 복사 가능

**지원 알고리즘:**
- SHA-1 (40자)
- SHA-256 (64자)
- SHA-384 (96자)
- SHA-512 (128자)

> 참고: MD5는 Web Crypto API에서 지원하지 않아 SHA 계열만 제공합니다.

---

## URL 해시 라우팅

특정 도구로 직접 접속할 수 있습니다:

| URL | 도구 |
|-----|------|
| `#json` | JSON Formatter |
| `#text` | Text Counter |
| `#color` | Color Palette |
| `#base64` | Base64 |
| `#url` | URL Encoder |
| `#hash` | Hash Generator |

예: `https://jko-yohan.github.io/devtools-online/#base64` → Base64 도구로 바로 이동

---

## 모바일 사용

반응형 디자인으로 모바일 브라우저에서도 정상 동작합니다.
- 탭 메뉴는 좌우 스크롤 가능
- 색상 팔레트는 화면 크기에 맞게 자동 조정

---

## 관리자 가이드

### 로컬에서 테스트하기
```bash
cd /Users/johnko/Documents/GitHub/devtools-online
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080 접속
```

### 수정 후 배포하기
```bash
cd /Users/johnko/Documents/GitHub/devtools-online
git add .
git commit -m "변경 내용 설명"
git push
# 1~2분 후 GitHub Pages에 자동 반영
```

### 새 도구 추가하기
1. `index.html` — 탭 버튼 추가 + 도구 패널(section) 추가
2. `app.js` — 도구 기능 함수 작성
3. `sitemap.xml` — 새 도구 URL 추가
4. 커밋 & 푸시
