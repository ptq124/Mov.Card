# Mov. Card

[링크](https://movcard.swygbro.com//)

## 프로젝트 소개

서치 없이, 오늘의 인디영화 큐레이팅 서비스 Mov(ie). card

- 남들 다 보는 흔한 영화 말고, 오늘은 조금 독특한 영화를 보고 싶을 때.
- 수많은 스트리밍 콘텐츠의 홍수에서 원하는 콘텐츠를 찾기 어려울 때.
- 고심 끝에 영화를 골랐으나 예상과 달라 당황했을 때
- 스트리밍 서비스 검색 결과가 불만족 스러울 때

## 기술스택

`React` `Styled-Components`

## 후기

- 50MB에 해당하는 Gif와 Img파을을 다뤘는데 로딩시간이 있어 사용자 경험 측면에서 안좋았다. Img파일은 webp파일로바꾸고 Gif용량을 줄이는 방법을 썼는데 웹은 그럭저럭 잘 나왔지만 모바일 웹 환경에선 아직 사용자 경험이 많이 안좋았다. 추후 모바일 환경 최적화 공부가 필요할거 같다.
- tailwind css를 써오다가 styled-components로 바꿨다. 바꾼 이유는 tailwind 환경에선 tailwind config파일에서 따로 설정 해주는게 불편했고 가장 큰건 props를 활용한 css 조작이 까다로웠다. Css 조작이 빈번히 일어나는 곳에선 styled-components가 적절해 보인다. 다만 아직 빠르게 개발을 하기위해선 tailwind가 좋은것 같다. (styled-components는 따로 태그 만드는게 불편하고 파일이 길어져서 네이밍을 잘못하면 가독성이 어려운 코드가 되는거 같다)
- 비즈니스 로직과 UI 로직을 context로 분리 해봤는데 뭔가 Redux와 같은 상태관리를 이용하는것이 어땠을까 하는 생각이든다. (직관적으로 사용할수 있을듯)  
- 처음으로 모바일 환경이 되는 웹을 만들어봤다. media query신기하다... (과연 이 방법이 최선일까?) 


## Screen Shot

<img alt="스크린샷 2023-03-22 오후 1 12 44" src="https://user-images.githubusercontent.com/64758823/226800621-489ca4f2-4f6b-439b-b606-29a777850762.png" width="60%" height="60%" align="left">
<img alt="스크린샷 2023-03-22 오후 1 13 00" src="https://user-images.githubusercontent.com/64758823/226800635-6d441995-5a53-4d83-8398-f077d0c62af1.png" width="25%" height="55%" align="center">
<img alt="스크린샷 2023-03-22 오후 1 13 21" src="https://user-images.githubusercontent.com/64758823/226800646-4b5b1877-5d12-4ee6-8b7e-d273a8b648ac.png" width="60%" height="60%" align="left">
<img alt="스크린샷 2023-03-22 오후 1 13 12" src="https://user-images.githubusercontent.com/64758823/226800660-bc9bd11a-185b-42fe-8617-06c683ed4500.png" width="25%" height="55%" align="center">
<img alt="스크린샷 2023-03-22 오후 1 12 30" src="https://user-images.githubusercontent.com/64758823/226800680-39e0aa41-a51d-4031-bf33-a0e29532abf0.png" width="60%" height="60%" align="left">
<img alt="스크린샷 2023-03-22 오후 1 12 13" src="https://user-images.githubusercontent.com/64758823/226800687-2a80cf98-ef41-4939-a4ee-1a65f1ac1f7b.png" width="25%" height="55%" align="center">
