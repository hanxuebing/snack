<script setup>
// import period from './period.vue'
import CalendarPanel from './panel.vue'
const emit = defineEmits(['onSelectPeriod', 'onCalendarChange', 'onSelectDateRange'])

const props = defineProps({
  format: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  range: {
    type: Array,
    default: () => []
  }
})
const { format, range } = toRefs(props)

const periodRef = ref()
const onSelectPeriod = (btnText, range) => {
  emit('onSelectPeriod', { btnText, range })
}
// 防止数据返回原始数据，引发不可知混乱，转成纯数据返回
const bundleDate = (dataArray) => {
  return dataArray.map(item => { return toRaw(item.dayjs) })
}

const calendarChange = (newVal) => {
  emit('onCalendarChange', bundleDate(newVal))
}
const onSelectDateRange = (newVal) => {
  periodRef.value && periodRef.value.resetStatus()
  emit('onSelectDateRange', bundleDate(newVal))
}

provide('rootAttr', {
  range,
  format,
  calendarChange, onSelectDateRange
})

</script>
<template>
  <div class="calendar-container">
    <slot>
      <!-- <period ref="periodRef" @onSelectPeriod="onSelectPeriod"></period> -->
    </slot>
    <CalendarPanel></CalendarPanel>
  </div>
</template>
<style lang="scss" scoped>
.calendar-container {
  position: relative;
  width: 400px;
  &::after {
    content: "";
    position: absolute;
    background-color: rgba(17, 21, 30, 0.80);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  // width: 100%;
  padding: 12px 0 12px 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #FFB58F;
  background-color: rgba(255, 181, 143, 0.08);
  overflow: hidden;
}
</style>
<style lang="scss"> 
.calendar-container {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    font-weight: normal;
  }
}
</style>