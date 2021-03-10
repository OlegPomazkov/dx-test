<template>
	<dx-pie-chart
		:data-source="item.data"
		palette="Bright"
		title="Группы по долям"
	>
		<dx-series
			argument-field="Группа"
			value-field="Доля"
		>

		<dx-label :visible="true">
			<dx-connector
			  :visible="true"
			  :width="1"
			/>
		</dx-label>
		
		</dx-series>

		<dx-size :width="500"/>
	</dx-pie-chart>
</template>

<script>
import DxPieChart, {
	DxSize,
	DxSeries,
	DxLabel,
	DxConnector,
} from 'devextreme-vue/pie-chart';

export default {
  name: 'ChartPie',

  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
  },

  props: {
  	item: {
  		type: Object,
  		required: true,
  		default: () => ({}),
  	}
  },
}
</script>

<style>
</style>
