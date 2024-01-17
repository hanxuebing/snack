// import MyButton from './CbInput.vue';
import { CpInput } from '@snack/ui'
// console.log(CpInput)
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Cyberpunk/CpInput',
  component: CpInput,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
    // onClick: {},
    // size: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    // primary: true,
    // label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
