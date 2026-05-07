# Google AdSense 가입 및 설정 가이드

## 1단계: Google AdSense 가입

1. https://adsense.google.com 접속
2. **"시작하기"** 클릭
3. Google 계정으로 로그인 (기존 Gmail 사용 가능)
4. 가입 정보 입력:
   - **웹사이트 URL**: `https://jko-yohan.github.io/devtools-online/`
   - **국가/지역**: 대한민국
   - **이용약관 동의**: 체크
5. **"AdSense 사용 시작"** 클릭

## 2단계: 사이트 소유권 확인

AdSense 대시보드에서 제공하는 확인 코드를 사이트에 삽입해야 합니다.

1. AdSense에서 확인 코드 복사 (아래와 비슷한 형태):
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

2. `index.html` 파일의 `<head>` 태그 안에 붙여넣기:
```html
<head>
    <meta charset="UTF-8">
    <!-- 여기에 AdSense 확인 코드 붙여넣기 -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/..."></script>
    ...
</head>
```

3. 커밋 & 푸시:
```bash
cd /Users/johnko/Documents/GitHub/devtools-online
git add index.html
git commit -m "Add AdSense verification code"
git push
```

4. AdSense 대시보드에서 **"확인 요청"** 클릭
5. 승인까지 보통 1~14일 소요

## 3단계: 광고 단위 생성 (승인 후)

1. AdSense 대시보드 → **광고** → **광고 단위 기준**
2. **"디스플레이 광고"** 선택
3. 광고 단위 이름: `devtools-main` (자유)
4. 광고 크기: **반응형** 권장
5. **"만들기"** 클릭 → 광고 코드 복사

## 4단계: 광고 코드 삽입

1. `index.html`에서 아래 부분을 찾기:
```html
<div class="ad-placeholder">
    <p>Advertisement</p>
</div>
```

2. 아래처럼 교체:
```html
<div class="ad-placeholder">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="XXXXXXXXXX"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

3. 커밋 & 푸시

## 5단계: Google Search Console 등록 (검색 노출)

이 단계는 AdSense 승인과 별도로 **즉시** 진행하세요. 검색 노출이 빠를수록 트래픽이 빨리 쌓입니다.

1. https://search.google.com/search-console 접속
2. **"URL 접두어"** 선택 → `https://jko-yohan.github.io/devtools-online/` 입력
3. 소유권 확인 방법: **HTML 태그** 선택
   - 제공된 meta 태그를 `index.html`의 `<head>`에 추가
   - 커밋 & 푸시 후 확인 클릭
4. 좌측 메뉴 → **Sitemaps** → URL 입력: `sitemap.xml` → **제출**
5. 좌측 메뉴 → **URL 검사** → 메인 URL 입력 → **"색인 생성 요청"** 클릭

## 예상 수익

| 월간 방문자 | 예상 월 수익 (보수적) |
|------------|---------------------|
| 1,000 | 3,000 ~ 8,000원 |
| 5,000 | 15,000 ~ 40,000원 |
| 10,000 | 30,000 ~ 80,000원 |
| 50,000 | 150,000 ~ 400,000원 |
| 100,000 | 300,000 ~ 800,000원 |

RPM(1,000회 노출당 수익)은 개발자 도구 사이트 기준 약 $2~5 수준입니다.
트래픽은 SEO가 잡히기 시작하면 3~6개월 후부터 유의미하게 증가합니다.

## 트래픽 성장 팁

1. **도구를 꾸준히 추가** — 도구 1개 = 키워드 1~3개 = 유입 경로 1개 추가
2. **각 도구를 별도 페이지로 분리** — SEO 효과 극대화 (추후 확장)
3. **영어 중심 운영** — 글로벌 트래픽이 한국어보다 10배 이상
4. **Reddit, Twitter/X, 개발자 커뮤니티 공유** — 초기 시드 트래픽
