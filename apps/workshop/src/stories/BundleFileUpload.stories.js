import { BundleFileUpload } from '@snack/vue3lib'
import '@snack/vue3lib/dist/style.css'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'JINTONG/Test/文件上传',
  component: BundleFileUpload,
  tags: ['autodocs'],
  // argTypes: {
  //   btnText: {
  //     control: 'text',
  //   },
  //   primaryHue: {
  //     control: { 
  //       type: 'range',
  //       min: 0,
  //       max: 100,
  //     }
  //   },
  //   primaryLightness: {
  //     control: { 
  //       type: 'range',
  //       min: 0,
  //       max: 100,
  //     }
  //   },
  //   onClick: {},
  // },
  // args: {
  //   primaryHue: 0,
  //   primaryLightness: 50,
  // },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {

  },
};
