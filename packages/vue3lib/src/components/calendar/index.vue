<script setup>
import './style.scss'
import period from './period.vue'
import CalendarPanel from './panel.vue'

defineOptions({
  name: 'test-calendar',
})

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
    <period @onSelectPeriod="onSelectPeriod"></period>
    <CalendarPanel></CalendarPanel>
  </div>
</template>
<style lang="scss" scoped>
@import "@/components/calendar/style.scss";
.calendar-container {
  width: 100%;
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