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
  {label: 'Пирог 2', value: 'pie'},
  {label: 'Пирог 3', value: 'pie'},
  {label: 'Пирог 4', value: 'pie'},
]
const SOURCES = [
  {label: 'Данные 1', value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047'},
  {label: 'Данные 2', value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047'},
  {label: 'Данные 3', value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047'},
  {label: 'Данные 4', value: 'https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047'},
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
      sourceOptions: SOURCES,
    }
  },

  methods: {
    handleCloseDialog() {
      this.$emit('close-dialog')
    },
    handleGetData() {
      this.handleCloseDialog()
    }
  }
}
</script>

<style>
.main-page {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}
.main-page__view {
  box-sizing: border-box;
  flex: 1;
  overflow: hidden;
  background-color: lightgrey;
}
</style>
