<template>
  <dx-chart
    :data-source="item.data"
    palette="Violet"
  >
    <dx-common-series-settings
      :type="'line'"
      argument-field="Дата"
    />

    <dx-series
      :value-field="'Процент'"
      :name="'Месяц'"
    />
    
    <dx-margin :bottom="20"/>

    <dx-argument-axis
      :value-margins-enabled="false"
      discrete-axis-division-mode="crossLabels"
    >
      <dx-grid :visible="true"/>
    </dx-argument-axis>
    
    <dx-legend
      vertical-alignment="bottom"
      horizontal-alignment="center"
      item-text-position="bottom"
    />
    
    <dx-title text="Линейный график">
      <dx-subtitle text="(с красивым подзаголовком)"/>
    </dx-title>
    
    <dx-tooltip :enabled="true"/>
  </dx-chart>
</template>

<script>
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTitle,
  DxSubtitle,
  DxTooltip,
} from 'devextreme-vue/chart'

export default {
  name: 'ChartLine',

  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxSubtitle,
    DxTooltip
  },

  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({}),
    }
  },

  computed: {
    dataSource() {
      return [{
        value: "Процент",
        name: "Процент"
      }]
    },
    itemMod() {
      return this.item.data.map( i => ({
        Дата: i['Дата'],
        Месяц: i['Месяц'],
        Процент: i['Процент'].toString()
      }))
    }
  }
}
</script>

<style>
</style>
