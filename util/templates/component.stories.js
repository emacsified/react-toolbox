module.exports = (componentName) => ({
  content: `
import React from "react";
import ${componentName} from "./${componentName}";
import ${componentName}Props from "./${componentName}.types";
import { Story, Meta } from "@storybook/react";

export default {
  component: TestComponent,
  title: "Components/${componentName}",
  argTypes: {
    theme: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    theme: 'primary'
};`,
  extension: `.stories.tsx`,
});
