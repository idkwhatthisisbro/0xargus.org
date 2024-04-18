<script>
	import { LayerCake, Svg, flatten, stack } from 'layercake';

	import { scaleOrdinal } from 'd3-scale';
	import { format } from 'd3-format';
	import { timeParse, timeFormat } from 'd3-time-format';

	const xKey = 'month';
	const yKey = [0, 1];
	const zKey = 'key';
	const xKeyCast = timeParse('%Y-%m-%d');

	const seriesNames = Object.keys(data[0]).filter((d) => d !== xKey);
	const seriesColors = ['#ff00cc', '#ff7ac7', '#ffb3c0', '#ffe4b8'];

	const formatLabelX = timeFormat('%b. %-d');
	const formatLabelY = (d) => format(`~s`)(d);

	// const stackedData = stack(data, seriesNames);

	const stackData = [
		[
			[0, 75],
			[0, 51],
			[0, 79],
			[0, 64],
			[0, 64],
			[0, 99],
			[0, 68],
			[0, 94],
			[0, 73],
			[0, 81],
			[0, 85],
			[0, 66],
			[0, 95],
			[0, 76],
			[0, 52],
			[0, 85],
			[0, 69],
			[0, 62],
			[0, 69],
			[0, 62],
			[0, 81],
			[0, 84],
			[0, 62],
			[0, 51],
			[0, 61],
			[0, 66],
			[0, 74],
			[0, 78],
			[0, 98],
			[0, 71]
		],
		[
			[75, 146],
			[51, 103],
			[79, 163],
			[64, 150],
			[64, 143],
			[99, 184],
			[68, 165],
			[94, 190],
			[73, 142],
			[81, 143],
			[85, 140],
			[66, 136],
			[95, 145],
			[76, 151],
			[52, 145],
			[85, 138],
			[69, 126],
			[62, 127],
			[69, 169],
			[62, 161],
			[81, 163],
			[84, 174],
			[62, 124],
			[51, 147],
			[61, 136],
			[66, 126],
			[74, 162],
			[78, 152],
			[98, 152],
			[71, 138]
		],
		[
			[146, 228],
			[103, 197],
			[163, 235],
			[150, 219],
			[143, 234],
			[184, 261],
			[165, 219],
			[190, 248],
			[142, 208],
			[143, 217],
			[140, 201],
			[136, 218],
			[145, 203],
			[151, 205],
			[145, 245],
			[138, 238],
			[126, 205],
			[127, 227],
			[169, 223],
			[161, 228],
			[163, 231],
			[174, 225],
			[124, 176],
			[147, 197],
			[136, 236],
			[126, 218],
			[162, 251],
			[152, 222],
			[152, 248],
			[138, 202]
		]
	];
</script>

<div class="chart-container">
	<LayerCake
		padding={{ top: 0, right: 0, bottom: 20, left: 17 }}
		x={(d) => d.data[xKey]}
		y={yKey}
		z={zKey}
		zScale={scaleOrdinal()}
		zDomain={seriesNames}
		zRange={seriesColors}
		flatData={flatten(stackData)}
		data={stackData}>
		<Svg>
			<!-- <AxisX format={formatLabelX} tickMarks />
			<AxisY format={formatLabelY} />
			<AreaStacked /> -->
		</Svg>
	</LayerCake>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 250px;
	}
</style>
