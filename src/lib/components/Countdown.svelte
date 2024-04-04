<script lang="ts">
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration.js';
	import utc from 'dayjs/plugin/utc.js';
	import tz from 'dayjs/plugin/timezone.js';
	import customParseFormat from 'dayjs/plugin/customParseFormat.js';
	import type { Dayjs } from 'dayjs';

	dayjs.extend(duration);
	dayjs.extend(utc);
	dayjs.extend(tz);
	dayjs.extend(customParseFormat);

	export let from: string,
		dateFormat: string = 'YYYY-MM-DD H:m:s',
		zone: string | undefined;

	interface RemainingTime {
		years: number;
		months: number;
		weeks: number;
		totalDays: number;
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		done: boolean;
	}

	let remaining: RemainingTime = {
		years: 0,
		months: 0,
		weeks: 0,
		totalDays: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		done: true
	};

	let timer: ReturnType<typeof setInterval>;

	function updateCountdown(): void {
		let target: Dayjs = zone ? dayjs.tz(from, dateFormat, zone) : dayjs(from, dateFormat);
		let local: Dayjs = dayjs();
		let diff: number = target.diff(local);

		if (diff > 0) {
			let r = dayjs.duration(diff);
			remaining = {
				years: r.years(),
				months: r.months(),
				weeks: Math.floor(r.asWeeks()),
				totalDays: Math.floor(r.asDays()),
				days: r.days(),
				hours: r.hours(),
				minutes: r.minutes(),
				seconds: r.seconds(),
				done: false
			};
		} else {
			remaining = {
				years: 0,
				months: 0,
				weeks: 0,
				totalDays: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
				done: true
			};
		}
	}

	onMount(() => {
		updateCountdown();
		timer = setInterval(updateCountdown, 1000);

		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	});
</script>

<slot {remaining} />
