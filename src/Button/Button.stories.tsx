
import React from "react";
import Button from "./Button";
import ButtonProps from "./Button.types";
import { Story, Meta } from "@storybook/react";

export default {
  component: TestComponent,
  title: "Components/Button",
  argTypes: {
    theme: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    theme: 'primary'
};