import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme, text, header }): JSX.Element => (
  <div data-testid="test-component" className={`test-component test-component-${theme}`}>
    <h1 className="heading">{header}</h1>
    <h2>{text}</h2>
  </div>
);

export default TestComponent;
