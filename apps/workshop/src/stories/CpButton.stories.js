import { CpButton } from '@snack/ui'
// import "@snack/ui/style.css"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Cyberpunk/CpButton',
  component: CpButton,
  tags: ['autodocs'],
  argTypes: {
    btnText: {
      control: 'text',
    },
    primaryHue: {
      control: { 
        type: 'range',
        min: 0,
        max: 100,
      }
    },
    primaryLightness: {
      control: { 
        type: 'range',
        min: 0,
        max: 100,
      }
    },
    onClick: {},
  },
  args: {
    primaryHue: 0,
    primaryLightness: 50,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {

  },
};
