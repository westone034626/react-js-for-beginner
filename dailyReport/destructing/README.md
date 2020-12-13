# let에 Destructing assignment하는 방법

```
let latitude = null;
let longitude = null;
({ latitude, longitude } = props.userLocation.coords);
```

설명: Destructuring needs to be either after a let, const or var declaration or it needs to be in an expression context to distinguish it from a block statement.

[출처](https://stackoverflow.com/questions/48714689/javascript-re-assign-let-variable-with-destructuring)

# 나 혼자만의 재정리

destructing assignment란? obj 안에 있는 원하는 property의 value를 좌항에 {}를 감싸는 방식으로 파고들어 꺼내는 것.

let에 있어 destructing assignment를 통해 재할당 하는 법: 원래 destructing assignment는 var, let, const 키워드와 같이 쓰여야한다. 그렇게 해야 destructing assignment가 표현식으로 인식되기 때문이다. 그래서 위의 키워드(let, var, const)를 명시하지 않을 시는 JS가 {...} 부분을 code block으로 인식하게 된다. 다시 표현식이라는 것을 JS에게 알려주는 방식이 '()'로 감싸는 것이다.
