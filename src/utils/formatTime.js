// converts minutes to hr/minutes e.g converts 132minutes to 2h 12min
export let formatTime = (n) =>
	`${Math.trunc(n / 60)}h ${`0${n % 60}`.slice(-2)}min`
