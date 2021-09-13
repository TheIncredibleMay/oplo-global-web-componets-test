import { GlobalFooter } from './GlobalFooter';

export default {
  title: 'Main/GlobalFooter',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  },
};

const Template = (args) => GlobalFooter(args);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
