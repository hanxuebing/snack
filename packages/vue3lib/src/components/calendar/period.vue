<script setup>
import dayjs from 'dayjs'
const emit = defineEmits(['onSelectPeriod'])
const now = dayjs()
const createRange = (btnText, startDay, endDay) => {
  emit('onSelectPeriod', btnText, [startDay, endDay])
}
</script>
<template>
  <div class="date-period">
    <div class="period-btn" @click="createRange('近1周', now.subtract(7, 'day'), now)">近1周</div>
    <div class="period-btn" @click="createRange('近1月', now.subtract(1, 'month'), now)">近1月</div>
    <div class="period-btn" @click="createRange('近半年', now.subtract(6, 'month'), now)">近半年</div>
    <div class="period-btn" @click="createRange('近1年', now.subtract(1, 'year'), now)">近1年</div>
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

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    &:active {
      background: rgba(255, 255, 255, 0.20);
    }
  }
}
</style>