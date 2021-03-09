<template>
  <div class="view-area">
    <component
      v-for="(item, k) in currCharts"
      class="view-area__comp"
      :key="`${k}_${item.nname}`"
      :is="`chart-${item.name}`"
      :item="item"
      @chart-action="handleChartAction"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ChartLine from './ChartLine'
import ChartPie from './ChartPie'

export default {
  name: 'ViewArea',

  components: {
    ChartLine,
    ChartPie
  },

  data() {
    return {
      currentComponent: null
    }
  },

  computed: {
    ...mapGetters([
      'currCharts'
    ])
  },

  methods: {
    handleChartAction() {

    }
  }
}
</script>

<style>
.view-area {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
