import './style/index.scss'
import { withInstall, makeInstaller } from '@snack/utils'
import { packing } from './h_calendar/utility.js';
import HCalendar from './h_calendar/index.vue';
import Period from './h_calendar/period.vue';
const components = [
  withInstall(HCalendar),
  withInstall(Period),
]

// 所有组件
const bundle = makeInstaller(components)
export default bundle

export {
  HCalendar,
  Period,
  packing
}