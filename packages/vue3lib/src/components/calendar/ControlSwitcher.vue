<script setup>
const props = defineProps({
  currentDateString: {
    type: String,
    default: ''
  }
})
const { currentDateString } = toRefs(props)
const emit = defineEmits(['prev-year', 'prev-month', 'next-month', 'next-year'])

const execPrevYear = () => {
  emit('prev-year')
}

const execPrevMonth = () => {
  emit('prev-month')
}

const execNextMonth = () => {
  emit('next-month')
}

const execNextYear = () => {
  emit('next-year')
}
</script>
<template>
  <div class="control-switcher-container">
    <div class="switcher">
      <div class="switch-icon prev-y" @click="execPrevYear"></div>
      <div class="switch-icon prev-m" @click="execPrevMonth"></div>
    </div>
    <div>{{ currentDateString }}</div>
    <div class="switcher">
      <div class="switch-icon next-m" @click="execNextMonth"></div>
      <div class="switch-icon next-y" @click="execNextYear"></div>
    </div>
  </div>
</template>
<style lang="scss">
.control-switcher-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding-right: 16px;

  color: #FFF;
  /* 14px */
  font-family: "PingFang SC Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  line-height: 20px;

  .switcher {
    // background-color: #FFB58F;
    display: flex;
    gap: 12px;
    align-items: center;

    .switch-icon {
      width: 12px;
      height: 12px;
      cursor: pointer;
      background-size: contain;

      &:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.20);
      }
    }

    .prev-y {
      background-image: url(@calendar/左双.svg);
    }

    .prev-m {
      background-image: url(@calendar/左单.svg);
    }

    .next-y {
      background-image: url(@calendar/左双.svg);
      transform: rotate(180deg);
    }

    .next-m {
      background-image: url(@calendar/左单.svg);
      transform: rotate(180deg);
    }
  }


  .date-text {}

  .next {
    background-color: #FFB58F;
  }
}
</style>