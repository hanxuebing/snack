import { action } from '@storybook/addon-actions';
import { HCalendar, Period, packing } from '@snack/calendar'
import "@snack/calendar/dist/style.css"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'HXB/HCalendar',
  component: HCalendar,
  // tags: ['autodocs'],
  argTypes: {
    range: []
  },
  args: {
    
  },
};
const actionsData = {
  onSelectDateRange: action('onSelectDateRange'),
  onCalendarChange: action('onCalendarChange'),
}
const Template = args => ({
  components: { HCalendar },
  setup() {
    return { args, ...actionsData };
  },
  template: '<HCalendar v-bind="args" @onSelectDateRange="onSelectDateRange" @onCalendarChange="onCalendarChange"/>',
});

export const Default = Template.bind({});
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const SlotTemplate = args => ({
  components: { HCalendar, Period },
  setup() {
    const onSelectPeriod = action('onSelectPeriod')
    return { args, ...actionsData, onSelectPeriod };
  },
  template: '<HCalendar v-bind="args" @onSelectDateRange="onSelectDateRange" @onCalendarChange="onCalendarChange"><Period @onSelectPeriod=onSelectPeriod></Period></HCalendar>',
});
export const Slot = SlotTemplate.bind({});
