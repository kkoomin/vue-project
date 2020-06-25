# Imgur-uploader

> https://apidocs.imgur.com/?version=latest#authorization-and-oauth

### Project Setup Commands

```
vue create imgur-uploader
npm i axios lodash qs
vue add router
vue add vuex

npm i vue-cookies
```

### Steps

1. 로그인 권한을 누르면, imgur OAUTH 페이지로 이동
2. 사용자가 권한을 준다.
3. Imgur가 AccessToken과 함께 우리 App으로 redirect
4. `/oauth2/callback`으로 오면, `AuthHandler` 컴포넌트 랜더
5. AuthHandler 컴포넌트에서 action(`finalizeLogin` 함수 실행)
6. `finalizeLogin`에서 추출한 token으로 vuex의 `state.token`을 갱신
   (Token을 받아서 사용 (Token의 존재여부 === 로그인))
7. '/' 으로 리다이렉트 (`router.push("/")`)

### TIPS

- URL의 '#' 뒤에 오는 정보는 브라우저에서 무시
- 'qs' 라이브러리: query string handling
- Semantic UI CDN : `https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css`
- vue-cookies : `https://github.com/cmp-cc/vue-cookies`
