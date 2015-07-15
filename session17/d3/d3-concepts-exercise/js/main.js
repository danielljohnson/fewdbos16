(function() {

    // Create a portfolio
    var portfolio = [
        { symbol: 'AAPL', allocation: 90 },
        { symbol: 'AMZN', allocation: 10 }
    ];

    // Render it
    render(portfolio);

    // Wait for 3 seconds
    Promise.delay(3000)
        .then(function() {
            // Switch allocations
            portfolio = [
                { symbol: 'AAPL', allocation: 10 },
                { symbol: 'AMZN', allocation: 90 }
            ];

            // Re-render the portfolio
            render(portfolio);
        })

        // Wait for 3 seconds
        .delay(3000)
        .then(function() {
            // Add Google
            portfolio = [
                { symbol: 'AAPL', allocation: 10 },
                { symbol: 'AMZN', allocation: 50 },
                { symbol: 'GOOG', allocation: 40 }
            ];

            // Re-render the portfolio
            render(portfolio);
        })

        // Wait for 3 seconds
        .delay(3000)
        .then(function() {
            // Remove Amazon and add GE. The array is intentionally unsorted.
            portfolio = [
                { symbol: 'AAPL', allocation: 60 },
                { symbol: 'GOOG', allocation: 40 },
                { symbol: 'GE',   allocation: 10 }
            ];

            // Re-render the portfolio
            render(portfolio);
        });

    function render(portfolio) {
        var chartWidth = 400,
            barGroupXOffset = 40,
            barHeight = 30;

        // Define scale function to be used for x axis of chart
        var xScale = d3.scale.linear()
            .domain([0, 100])
            .range([0, chartWidth - barGroupXOffset]);

        // Set chart properties
        var chart = d3.select('.chart')
            .attr('width', chartWidth)
            .attr('height', barHeight * portfolio.length);

        // Join portfolio data to chart
        var barContainers = chart.selectAll('g.barContainer')
            .data(portfolio.sort(function(a, b) {
                return a.symbol.localeCompare(b.symbol);
            }), function(d) {
                return d.symbol;
            });
        
        // Enter
        var barContainer = barContainers.enter()
            .append('g')
            .attr('class', 'barContainer');
            
        barContainer
            .append('text')
            .attr('x', 0)
            .attr('y', barHeight / 2)
            .attr('dy', '.33em')
            .attr('class', 'symbol')
            .text(function(d) {
                return d.symbol;
            });

        var barGroup = barContainer
            .append('g')
            .attr('class', 'barGroup')
            .attr('transform', function(d, i) {
                return 'translate('+barGroupXOffset+', 0)';
            });

        barGroup
            .append('rect')
            .attr('height', barHeight - 1);

        barGroup
            .append('text')
            .attr('y', barHeight / 2)
            .attr('dy', '.33em')
            .attr('class', 'allocation');

        // Exit
        barContainers.exit().remove();

        // Update
        barContainers
            .attr('transform', function(d, i) {
                return 'translate(0,' + i * barHeight + ')';
            });

        barContainers.select('.barGroup rect')
            .transition()
            .duration(1000)
            .attr('width', function(d) {
                return xScale(d.allocation);
            });
        
        barContainers.select('.barGroup text')
            .transition()
            .duration(1000)
            .attr('x', function(d) {
                return xScale(d.allocation) - 5;
            })
            .text(function(d) {
                return d.allocation + '%';
            });

        console.log('Portfolio:');
        
        portfolio.forEach(function(holding) {
            console.log(holding.symbol + ': ' + holding.allocation + '%');
        });
    }

})();