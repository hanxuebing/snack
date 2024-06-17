<script setup>
defineOptions({
  name: 'file-upload',
})
import 'element-plus/theme-chalk/el-upload.css';
import 'element-plus/theme-chalk/el-button.css';
import { ElUpload, ElButton } from 'element-plus';

const fileList = ref([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])
const handlePreview = () => {

}

const handleRemove = () => {

}

const beforeRemove = () => {

}

const handleExceed = () => {

}
</script>
<template>
   <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>
</template>
<style scoped>
</style>