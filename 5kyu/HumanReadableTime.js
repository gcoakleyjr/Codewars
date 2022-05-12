//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    let time = {}
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)

    if (seconds < 59) {
        time.seconds = seconds
        time.minutes = "00"
        time.hours = "00"
    } else if (seconds < 3600) {
        time.seconds = seconds % 60
        time.minutes = minutes
        time.hours = "00"
    } else {
        time.seconds = seconds % 60
        time.minutes = minutes % 60
        time.hours = hours
    }

    let arr = Object.values(time).map(val => {
        return val < 10 && val !== "00" ? "0" + val : val
    })

    let clock = `${arr[2]}:${arr[1]}:${arr[0]}`
    return clock
}