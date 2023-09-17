import { createElement, useRef } from "react";

type ElementProps<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : never;

type Values<T> = T[keyof T];

type ObtainHTMLProps<T extends Values<JSX.IntrinsicElements>> =
  T extends React.DetailedHTMLProps<infer Props, HTMLElement> ? Props : never;

type AllowedProps = Values<{  
  [Tag in keyof JSX.IntrinsicElements]: {
    component: Tag;
  } & ObtainHTMLProps<JSX.IntrinsicElements[Tag]>;
}>;

const Component = (props: AllowedProps) => {
  const { component, ...restProps } = props;
  const htmlEl = useRef(null);
  const elementProps: ElementProps<typeof component> = {
    ...restProps,
    ref: htmlEl,
  };
  return createElement(props.component, { ...elementProps });
};

export default Component;
