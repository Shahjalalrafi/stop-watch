
const stopWatchCounterStart = document.getElementById('start')
const stopWatchCounterReset = document.getElementById('reset')
const stopWatchCounterPause = document.getElementById('pause')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

let min
let sec = 0
let timmer = null
let isWatchRunning

function start() {
	if(!isWatchRunning) {
		isWatchRunning = true
		timmer = setInterval(() => {
			sec++
			let {second, min} = getMin(sec)
			minutes.textContent = min < 10 ? '0' + min : min
			seconds.textContent = second < 10 ? '0' + second : second
		},1000)
	}
	}
	
function reset() {
	isWatchRunning = false
	clearInterval(timmer)
	min = sec = ms = 0
	minutes.textContent = '00'
	seconds.textContent = '00'
}

function pause() {
	isWatchRunning = false
	clearInterval(timmer)
}

const getMin = (sec) => {
	min = parseInt(sec / 60)
	let remainder = sec % 60
	let second = parseInt(remainder)
	return {
		min,
		second
	}
}

stopWatchCounterStart.addEventListener('click', start)
stopWatchCounterReset.addEventListener('click', reset)
stopWatchCounterPause.addEventListener('click', pause)