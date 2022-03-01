export const before = {
    id: 'before',
    beforeDraw: function (chart) {
        const width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "rem sans-serif";
        ctx.textBaseline = "middle";
        const text = chart.config.options.elements.center.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
    }
}

export const counter = {
    id: 'counter',
    beforeInit: function (chart) {
        const originalFit = chart.legend.fit;
        chart.legend.fit = function fit() {
            originalFit.bind(chart.legend)();
            this.height += 35;
        };
    }
}