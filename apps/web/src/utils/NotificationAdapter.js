// notificationAdapter.js

import { ElMessage } from 'element-plus'; // 导入 Element Plus 弹出信息组件

// 定义适配器接口，包含显示成功、错误和警告信息的方法
const NotificationAdapter = {
  /**
   * 显示成功信息
   * @param {string} message 要显示的信息
   */
  success(message) {
    ElMessage({
      message,
      type: 'success',
    })
  },
  error(message) {
    ElMessage({
      message,
      type: 'error',
    })
  }
  
  // ... 其他方法类似，根据需要进行添加

};

export default NotificationAdapter;
