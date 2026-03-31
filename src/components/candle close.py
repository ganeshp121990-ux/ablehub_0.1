//@version=5
strategy("Rejection Breakdown Next Candle", overlay=true)

// Level line
level = input.float(200, title="Level")

// Candle body
bodyTop = math.max(open, close)

// Rejection candle condition
upperBodyTouch = bodyTop >= level
closeBelow = close < level

rejection = upperBodyTouch and closeBelow

// Next candle breakdown
sellSignal = rejection[1] and low < low[1]

// Plot level
plot(level, color=color.red, linewidth=2)

// Signal marker
plotshape(sellSignal, style=shape.triangledown, location=location.abovebar, color=color.red, size=size.small)

// Entry
if sellSignal
    strategy.entry("SELL", strategy.short)
________________________________________

