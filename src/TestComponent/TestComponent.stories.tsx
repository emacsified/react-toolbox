import React from "react";
import TestComponent from "./TestComponent";
import TestComponentProps from "./TestComponent.types";
import { Story, Meta } from "@storybook/react";

export default {
  component: TestComponent,
  title: "Components/TestComponent",
  argTypes: {
    theme: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<TestComponentProps> = (args) => <TestComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  theme: "primary",
  header: "Im the component!",
  text: "Made with love",
};
