import 'element-plus/theme-chalk/base.css'
import { withInstall, makeInstaller } from '@snack/utils'

import BundleFileUpload from './components/upload.vue';
import BundleCalendar from './components/calendar/index.vue'
const components = [
  withInstall(BundleFileUpload),
  withInstall(BundleCalendar)
]

// 所有组件
const bundle = makeInstaller(components)
export default bundle

export {
  BundleFileUpload, BundleCalendar
}