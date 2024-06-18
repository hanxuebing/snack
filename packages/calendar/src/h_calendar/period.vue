<script setup>
import dayjs from 'dayjs'
const emit = defineEmits(['onSelectPeriod'])
const now = dayjs()
const selectedBtn = ref('')
const createRange = (btnText, startDay, endDay) => {
  selectedBtn.value = btnText
  emit('onSelectPeriod', btnText, [startDay, endDay])
}

const resetStatus = () => {
  selectedBtn.value = ''
}

defineExpose({ resetStatus })
</script>
<template>
  <div class="date-period">
    <div class="period-btn" :class="{ 'selected': selectedBtn === '近1周' }"
      @click="createRange('近1周', now.subtract(7, 'day'), now)">近1周</div>
    <div class="period-btn" :class="{ 'selected': selectedBtn === '近1月' }"
      @click="createRange('近1月', now.subtract(1, 'month'), now)">近1月</div>
    <div class="period-btn" :class="{ 'selected': selectedBtn === '近半年' }"
      @click="createRange('近半年', now.subtract(6, 'month'), now)">近半年</div>
    <div class="period-btn" :class="{ 'selected': selectedBtn === '近1年' }"
      @click="createRange('近1年', now.subtract(1, 'year'), now)">近1年</div>
  </div>
</template>
<style lang="scss">
.date-period {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-right: 16px;

  .period-btn {
    cursor: pointer;
    flex: 1 0 0;
    border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.40);
    padding: 4px 12px;

    color: #FFF;

    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    /* 常规/14px */
    font-family: "PingFang SC Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    user-select: none;

    &.selected {
      border: 1px solid #FFB58F;
      background: rgba(255, 181, 143, 0.20);
    }

    &:hover {
      border: 1px solid rgba(252, 232, 204, 0.40);
      background: rgba(255, 181, 143, 0.15);
    }

    &:active {
      border: 1px solid #FFB58F;
      background: rgba(255, 181, 143, 0.20);
    }
  }
}
</style>