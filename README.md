# 🚀 React componet biulder

you can make component with all attributes of it.

For example

```tsx
import React from "react";
import ComponentBuilder from "@react/component-builder";
interface ButtonDTo {
  compoonent?: JSX.IntrinsicElements;
}

const Button: React.FC<ButtonDTo> = ({ component, ...props }) => {
  const { size, component } = props;

//if component b <a></a> tag you can set href
  return <ComponentBuilder component={component} >Click me!</ComponentBuilder>;
};

export default Button;


```
