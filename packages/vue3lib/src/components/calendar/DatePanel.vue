<script setup>
import dayjs from 'dayjs'

const props = defineProps({
  sevenDay: {
    type: Array,
    default: () => ["日", "一", "二", "三", "四", "五", "六"]
  },
  showDate: {
    type: Object,
    default: () => {
      return {
        year: 2024,
        month: 5,
      }
    }
  }
})

const { sevenDay, showDate } = toRefs(props)

// dayjs 和 new Date  第一个月索引为0 所以month需要 - 1
const formatDateShowDate = computed(() => {
  return {
    year: showDate.value.year,
    month: showDate.value.month - 1,
  }
})
// 获取当前日期
// const now = dayjs();
const { range, format, calendarChange, onSelectDateRange } = inject('rootAttr')
const genCalendarDate = (dayjs) => {
  return {
    year: dayjs.year(),
    month: dayjs.month(),
    date: dayjs.date(),
    value: dayjs.format(format.value),
    dayjs: dayjs,
    grey: dayjs.month() !== formatDateShowDate.value.month,
  };
};

const dateRange = ref([])

watch(range, (newVal) => {
  const _rangeValue = newVal
  const _formatRangeValue = _rangeValue.map(item => {
    return genCalendarDate(item)
  })
  dateRange.value = _formatRangeValue
}, { immediate: true })


const firstDay = computed(() => {
  const d = new Date(formatDateShowDate.value.year, formatDateShowDate.value.month)
  const monthFirstDay = dayjs(d).startOf("month").startOf("week");
  return monthFirstDay
})
const rowsCount = 6
const dateList = computed(() => {
  return Array(rowsCount * 7)
    .fill(0)
    .map((n, i) => {
      const day = firstDay.value.add(i, "day");
      return genCalendarDate(day)
    });
})

const isDateInRange = (dateStr) => {
  if (formatDateRange.value.length !== 2) {
    return false;
  }
  const date = new Date(dateStr);
  const startDate = formatDateRange.value[0];
  const endDate = formatDateRange.value[1];

  return date >= startDate && date <= endDate;
}

const formatDateRange = computed(() => {
  const tempFormatRange = []
  if (sortDateRange.value[0]) {
    const startDate = new Date(sortDateRange.value[0].value);
    tempFormatRange.push(startDate)
  }
  if (sortDateRange.value[1]) {
    const endDate = new Date(sortDateRange.value[1].value);
    tempFormatRange.push(endDate)
  }
  return tempFormatRange
})

const sortDateRange = computed(() => {
  let tempDateRange = null
  if (dateRange.value.length < 2) {
    tempDateRange = dateRange.value
  } else {
    const date1 = dateRange.value[0]
    const date2 = dateRange.value[1]
    // TODO待优化 dayjs对象直接转date对象
    const startDate = new Date(date1.value);
    const endDate = new Date(date2.value);

    // 如果起始日期晚于结束日期，则交换它们
    if (startDate > endDate) {
      tempDateRange = [dateRange.value[1], dateRange.value[0]];
    } else {
      tempDateRange = dateRange.value
    }
  }
  if (isSelect) {
    onSelectDateRange(tempDateRange)
    isSelect = false
  }
  calendarChange(tempDateRange)
  return tempDateRange
})

let isSelect = false
// const tempDateRange = ref([])
const selectDate = (date) => {
  isSelect = true
  if (dateRange.value.length < 2) {
    dateRange.value.push(date)
  } else {
    dateRange.value = [date]
    // tempDateRange.value = [date.value]
  }
}

// const sortTempDateRange = computed(() => {
//   if (tempDateRange.value.length < 2) {
//     return tempDateRange.value
//   }
//   const value1 = tempDateRange.value[0].value
//   const value2 = tempDateRange.value[1].value
//   const startDate = new Date(value1);
//   const endDate = new Date(value2);

//   // 如果起始日期晚于结束日期，则交换它们
//   if (startDate > endDate) {
//     return [tempDateRange.value[1], tempDateRange.value[0]];
//   }
//   return tempDateRange.value
// })
const onItemMouseOver = (date) => {
  // if (dateRange.value.length === 1) {
  //   const tempDate = date.value
  //   tempDateRange.value = [tempDateRange, tempDate]
  // }
}
</script>
<template>
  <div class="date-panel-container">
    <table class="calendar-table">
      <thead class="calendar-thead">
        <tr>
          <th v-for="(day, index) in sevenDay" :key="index">
            <div class="calendar-item">{{ day }}</div>
          </th>
        </tr>
      </thead>
      <tbody class="calendar-tbody">
        <div class="tbody-wrap">
          <tr v-for="row in rowsCount" :key="row">
            <td v-for="date in dateList.slice((row - 1) * 7, (row - 1) * 7 + 7)" :key="date.value" class="cell" :class="{
              'cell--in-range': isDateInRange(date.value),
              'cell--start-item': sortDateRange[0] && date.value === sortDateRange[0].value,
              'cell--end-item': sortDateRange[1] && date.value === sortDateRange[1].value
            }">
              <div class="calendar-item tbody-item" :class="{
                'tbody-item--grey': date.grey,
                'tbody-item--start': sortDateRange[0] && date.value === sortDateRange[0].value,
                'tbody-item--end': sortDateRange[1] && date.value === sortDateRange[1].value,
              }" @click="selectDate(date)" @mouseover="onItemMouseOver(date)">{{ date.date }}</div>
            </td>
          </tr>
        </div>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.date-panel-container {
  user-select: none;

  .calendar-table {
    width: 100%;

    /* 水平间距为0，垂直间距为10px */
    .calendar-thead {
      color: #FCE8CC;
      font-family: "PingFang SC Regular";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      display: block;
      padding-right: 16px;
      margin-bottom: 4px;
    }

    .calendar-tbody {
      text-align: center;
      color: #FFF;
      font-family: "PingFang SC Regular";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      // line-height: 24px;
      display: block;
      padding-right: 5px;

      .tbody-wrap {
        padding-right: 8px;
        height: 108px;
        overflow-x: hidden;

        /* Webkit browsers */
        &::-webkit-scrollbar {
          width: 3px;
        }

        &::-webkit-scrollbar-track {
          opacity: 1;
          background: rgba(255, 255, 255, 0.0);
          border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
          background: rgba(255, 181, 143, 0.20);
          border-radius: 22px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #555;
          cursor: pointer;
        }
      }
    }

    tr {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;

      &:last-child {
        margin-bottom: 0;
      }

      th,
      td {
        display: flex;
        justify-content: center;
        padding: 0px;
        flex: 1 1 auto;

        &:first-child {
          flex: 0.5 0.5 auto;
          justify-content: start;
        }

        &:last-child {
          flex: 0.5 0.5 auto;
          justify-content: end;
        }

        .calendar-item {
          width: 24px;
        }

        .tbody-item {
          cursor: pointer;
          border-radius: 2px;
          height: 24px;
          line-height: 22px;
          z-index: 1;
          border: 1px solid #00000000;

          &--grey {
            color: rgba(255, 255, 255, 0.40);
          }

          &--start {
            // background-color: rgba(255, 181, 143, 0.20);
            border: 1px solid #FFB58F;
          }

          &--end {
            // background-color: rgba(255, 181, 143, 0.20);
            border: 1px solid #FFB58F;
          }

          &:hover {
            background: rgba(255, 181, 143, 0.15);
          }
        }
      }

      .cell {
        position: relative;

        &::before {
          position: absolute;
          top: 50%;
          inset-inline-start: 0;
          inset-inline-end: 0;
          z-index: 0;
          height: 24px;
          transform: translateY(-50%);
          transition: all 0.3s;
          content: "";
        }

        &:first-child {
          &.cell--start-item {
            &::before {
              inset-inline-start: 0px;
            }
          }

          &.cell--end-item {
            &::before {
              inset-inline-end: calc(100% - 26px);
            }
          }
        }

        &:last-child {
          &.cell--start-item {
            &::before {
              inset-inline-start: calc(100% - 26px);
            }
          }

          &.cell--end-item {
            &::before {
              inset-inline-end: 0px;
            }
          }
        }

        &--start-item {
          &::before {
            inset-inline-start: calc(50% - 13px);
          }
        }

        &--end-item {
          &::before {
            inset-inline-end: calc(50% - 13px);
          }
        }

        &:first-child {

          &::before {
            border-start-start-radius: 4px;
            border-end-start-radius: 4px;
            border-start-end-radius: 0;
            border-end-end-radius: 0;
          }
        }

        &:last-child {

          &::before {
            border-start-start-radius: 0;
            border-end-start-radius: 0;
            border-start-end-radius: 4px;
            border-end-end-radius: 4px;
          }
        }

        &--in-range {
          position: relative;

          &::before {
            background: rgba(255, 181, 143, 0.20);
          }
        }
      }
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>