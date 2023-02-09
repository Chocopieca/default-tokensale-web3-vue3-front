<template>
  <div class="row size14-weight400">
    <div class="mr-1">Days: {{ theTime.days }},</div>
    <div class="mr-1">Hours: {{ theTime.hours }},</div>
    <div class="mr-1">Minutes: {{ theTime.minutes }},</div>
    <div class="mr-1">Seconds: {{ theTime.seconds }}</div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "BaseTimer",
  props: {
    timestamp: {
      type: Number,
      default: 0,
    },
    isClearInterval: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      time: new Date(this.timestamp).getTime(),
      days: 'HI',
      hours: 'TH',
      minutes: 'ER',
      seconds: 'E!',
      expired: true
    }
  },
  computed: {
    theTime() {
      const ctx = this;
      // Цикл обратного отсчета
      const x = setInterval(function () {
        //Разница между двумя датами
        const countDownDate = new Date(+ctx.timestamp).getTime(),
            now = new Date().getTime(),
            diff = countDownDate - now,

            // Преобразование времени в дни, часы, минуты и секунды
            tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
            thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            tseconds = Math.floor((diff % (1000 * 60)) / 1000);
        // Отображать две цифры
        ctx.days = (tdays < 10) ? '0' + tdays : tdays;
        ctx.hours = (thours < 10) ? '0' + thours : thours;
        ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
        ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

        if(ctx.isClearInterval && diff < 0 && diff > -15){
          clearInterval(x);
          ctx.$emit('clearInter');
          ctx.expired = true;
        }
      }, 1000);
      // Возвращение данных
      return {
        days: ctx.days,
        hours: ctx.hours,
        minutes: ctx.minutes,
        seconds: ctx.seconds
      };
    }
  }
}
)
</script>

<style scoped>

</style>
