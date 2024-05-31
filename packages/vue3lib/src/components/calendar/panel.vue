<script setup>
import ControlSwitcher from './ControlSwitcher.vue'
import DatePanel from './DatePanel.vue'
import dayjs from 'dayjs'

const now = dayjs();
const showDate = ref({
  year: now.year(),
  month: now.month() + 1
})

const currentDateString = computed(() => {
  const year = showDate.value.year
  const month = showDate.value.month - 1
  return dayjs(new Date(year, month)).format('YYYY-MM')
})
const execPrevYear = () => {
  // debugger
  showDate.value = {
    year: showDate.value.year - 1,
    month: showDate.value.month
  }
}

const execPrevMonth = () => {
  let month = showDate.value.month - 1
  let year = showDate.value.year
  if (month === 0) {
    month = 12
    year--
  }
  showDate.value = {
    year,
    month
  }
}

const execNextMonth = () => {
  let month = showDate.value.month + 1
  let year = showDate.value.year
  if (month === 13) {
    month = 1
    year++
  }
  showDate.value = {
    year,
    month
  }
}

const execNextYear = () => {
  showDate.value = {
    year: showDate.value.year + 1,
    month: showDate.value.month
  }
}
</script>
<template>
  <div class="panel">
    <ControlSwitcher @prevYear="execPrevYear" @prevMonth="execPrevMonth" @nextMonth="execNextMonth"
      @nextYear="execNextYear" :currentDateString="currentDateString" />
    <DatePanel :showDate="showDate"></DatePanel>
  </div>
</template>
<style lang="scss" scoped>
.panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>