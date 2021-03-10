<template>
  <el-dialog
    class="chart-dialog"
    title="Настройки графика"
    :visible="isVisible"
    :show-close="false"
    width="30%"
  >
    <div class="chart-dialog__select-group">
      <div class="chart-dialog__select-group__label">
        Выберите тип графика:
      </div>

      <el-select 
         class="chart-dialog__select-group__label"
         size="mini"
         v-model="chart"
         placeholder="Выберите график"
         @change="handleChartChanged"
      >
        <el-option
          v-for="(option, k) in chartOptions"
          :key="`${k}_${option.label}`"
          :label="option.label"
          :value="option.value">
        </el-option>
      </el-select>
    </div>

    <div class="chart-dialog__select-group">
      <div class="chart-dialog__select-group__label">
        Выберите источник данных:
      </div>

      <el-select 
         class="chart-dialog__select-group__label"
         size="mini"
         v-model="source"
         placeholder="Выберите источник"
      >
        <el-option
          v-for="(option, k) in sourceOptions"
          :key="`${k}_${option.label}`"
          :label="option.label"
          :value="option.value">
        </el-option>
      </el-select>
    </div>
    
    <span slot="footer" class="dialog-footer">
      <el-button
        size="mini"
        @click="handleCloseDialog"
      >
        Отмена
      </el-button>

      <el-button 
        size="mini"
        type="primary"
        :disabled="!(chart && source)" 
        @click="handleGetData"
      >
        Загрузить
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
const CHARTS = [
  {label: 'Пирог 1', value: 'pie'},
  {label: 'Пирог 2', value: 'pie '},
  {label: 'Линия 1', value: 'line'},
  {label: 'Линия 2', value: 'line '},
]
const SOURCES = [
  {label: 'Данные 1', value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047', type: 'pie'},
  {label: 'Данные 2', value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047 ', type: 'pie'},
  {label: 'Данные 3', value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047  ', type: 'pie'},
  {label: 'Данные 4', value: 'https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2', type: 'line'},
  {label: 'Данные 5', value: 'https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2 ', type: 'line'},
]

export default {
  name: 'ChartDialog',

  props: {
    isVisible: {
      type: Boolean,
      required: true,
      default: () => false
    }
  },

  data() {
    return {
      chart: null,
      source: null,
      chartOptions: CHARTS,
    }
  },

  computed: {
    sourceOptions() {
      return SOURCES.filter(i => this.chart? i.type === this.chart.trim(): false)
    }
  },

  methods: {
    handleChartChanged() {
      this.source = null
    },
    handleCloseDialog() {
      this.chart = null
      this.source = null
      this.$emit('close-dialog')
    },
    async handleGetData() {
      try {
        await this.$store.dispatch('getChartData', {
          type: this.chart,
          url: this.source,
        })
      } catch (err) {
        console.error('Error on get chart data: ', err.message)
      }
      this.handleCloseDialog()
    }
  }
}
</script>

<style>
.chart-dialog {
  font-family: sans-serif;
}
.chart-dialog__select-group {
  margin-top: 10px;
}
</style>
