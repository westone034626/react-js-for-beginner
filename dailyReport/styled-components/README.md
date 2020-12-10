# 배운 것

1. styled-components를 배웠다. 이로써 React에 CSS코드를 적용하는 방법을 알게 되었다.
2. JSX 안에서 HTML, CSS, JS가 묶여서 동적으로 상호작용 하는 과정이 어렵지만 재밌었다. 분명 이 부분은 웹을 하는 사용자에게 좀 더 상호작용적인 측면을 제공할 수 있을 것이다.
3. styled-components는 특정 component 안에서 귀속되어 사용된다. 즉 local로 적용된다.
4. 만약 global하게 적용하기 위해서는 createGlobalStyle을 "styled-components"로 부터 import해서 사용하면 된다.
5. css reset에 해당하는 코드는 styled-reset으로 부터 reset을 import해오면 되고 이걸 global하게 적용하면된다.
6. 예시

   ```
        const Item = styled.li`
            border-bottom: 1px solid ${props=>props.current?"#fff":"white"};
        `;

        ...중략

        <Item current={pathname === "/"}>adsadf</Item>

        ...중략
   ```

   이런 식으로 li를 Item이라는 새로운 component로 변경할 수 있다. 이 경우 Item은 임의의 property를 명시해 props를 받을 수 있는데 Item을 선언하는 부분의 백틱 사이에서 props를 전달받아 조건에 맞게 CSS를 적용할 수 있다.

7. 참고로 pathname은 withRouter를 통해 export 될 때 props를 받아올 수 있는데 거기 안에 있는 속성이다. pathname을 통해서 현재 브라우저가 어떤 router path에 있는지 알 수 있다.
