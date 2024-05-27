import 'element-plus/theme-chalk/base.css'
import BundleFileUpload from './components/upload.vue';
import { withInstall, makeInstaller } from '@snack/utils'
const components = [
  withInstall(BundleFileUpload)
]

// 所有组件
const bundle = makeInstaller(components)
export default bundle

export {
  BundleFileUpload
}