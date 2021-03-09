<template>
	<DxPieChart
		:data-source="areas"
		palette="Bright"
		title="Area of Countries"
	>
		<DxSeries
			argument-field="country"
			value-field="area"
		>

		<DxLabel :visible="true">
			<DxConnector
			  :visible="true"
			  :width="1"
			/>
		</DxLabel>
		
		</DxSeries>

		<DxSize :width="500"/>
	</DxPieChart>
</template>

<script>
import DxPieChart, {
	DxSize,
	DxSeries,
	DxLabel,
	DxConnector,
} from 'devextreme-vue/pie-chart';

const AREAS = [
	{country: 'aaa', area: 60},
	{country: 'BBB', area: 40},
]

export default {
  name: 'ChartPie',

  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
  },

  data() {
  	return {
  		areas: AREAS
  	}
  },

  methods: {
  }
}
</script>

<style>
</style>
