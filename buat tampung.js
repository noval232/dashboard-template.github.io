function createChartPerBulan(data) {
    const pFinanceRevenuePermonth = d3
        .selectAll(
            ".ChartFinance-revenuePermonth"
        )
        .append("svg")
        .attr("width", "470")
        .attr("height", 250);

    const marginFinancePermonthRevenue = {
        top: 20,
        right: 0,
        bottom: 40,
        left: 0,
    };
    const graphWidthFinancePermonthRevenue =
        parseInt(
            pFinanceRevenuePermonth.style(
                "width"
            )
        ) -
        marginFinancePermonthRevenue.left -
        marginFinancePermonthRevenue.right;

    const graphHeightFinancePermonthRevenue =
        parseInt(
            pFinanceRevenuePermonth.style(
                "height"
            )
        ) -
        marginFinancePermonthRevenue.top -
        marginFinancePermonthRevenue.bottom;

    //pembuatan group
    const graphFinancePermonthRevenue =
        pFinanceRevenuePermonth
        .append("g")
        .attr(
            "width",
            graphWidthFinancePermonthRevenue
        )
        .attr(
            "height",
            graphHeightFinancePermonthRevenue
        )
        .attr(
            "transform",
            `translate(${marginFinancePermonthRevenue.left},${marginFinancePermonthRevenue.top})`
        );

    const minFinancePermonthRevenue =
        d3.min(
            financeDataRevenuePermonth,
            (d) => d.value
        ); //method untuk mendapatkan nilai terkecil, dg callback function

    const maxFinancePermonthRevenue =
        d3.max(
            financeDataRevenuePermonth,
            (d) => d.value
        );

    const xAxisGroupFinanceRevenuePermonth =
        graphFinancePermonthRevenue
        .append("g")
        .attr(
            "transform",
            `translate(-7, ${graphHeightFinancePermonthRevenue})`
        ); //keterangan text dibawah

    const yAxisGroupFinanceRevenuePermonth =
        graphFinancePermonthRevenue.append(
            "g"
        );

    const yFinancePermonthRevenue = d3
        .scaleLinear()
        .domain([-0.3,
            d3.max(
                financeDataRevenuePermonth,
                (d) => d.value
            ),
        ])
        .range([
            graphHeightFinancePermonthRevenue,
            0,
        ]);

    const xFinancePermonthRevenue = d3
        .scaleBand()
        .domain(
            financeDataRevenuePermonth.map(
                (item) => item.name
            )
        )
        .range([
            0,
            graphWidthFinancePermonthRevenue,
        ])
        .paddingInner(0.2)
        .paddingOuter(0.2);

    const rectsFinancePermonthRevenue =
        graphFinancePermonthRevenue
        .selectAll("rect")
        .data(financeDataRevenuePermonth);

    rectsFinancePermonthRevenue
        .attr("width", 30)
        .attr(
            "height",
            (d) =>
            graphHeightFinancePermonthRevenue -
            yFinancePermonthRevenue(d.value)
        )
        .attr("fill", greenBar)
        .attr("x", (d) =>
            xFinancePermonthRevenue(d.name)
        )
        .attr("y", (d) =>
            yFinancePermonthRevenue(d.value)
        );

    rectsFinancePermonthRevenue
        .enter()
        .append("rect")
        .attr("width", 25)
        .attr(
            "height",
            (d) =>
            graphHeightFinancePermonthRevenue -
            yFinancePermonthRevenue(d.value)
        )
        .attr("fill", "darkblue")
        .attr("x", (d) =>
            xFinancePermonthRevenue(d.name)
        )
        .attr("y", (d) =>
            yFinancePermonthRevenue(d.value)
        );

    rectsFinancePermonthRevenue
        .enter()
        .append("text")
        .style("font-size", "11px")
        .text((d) => `${d.value}`)
        .attr("x", (d) =>
            xFinancePermonthRevenue(d.name)
        )
        .attr(
            "y",
            (d) =>
            yFinancePermonthRevenue(d.value) - 5
        )
        .attr(
            "transform",
            `translate(${15},${0})`
        )
        .attr("text-anchor", "middle");

    //create and call the axes
    const xAxisFinancePermonthRevenue =
        d3.axisBottom(
            xFinancePermonthRevenue
        );

    xAxisGroupFinanceRevenuePermonth.call(
        xAxisFinancePermonthRevenue
    );

    /* xAxisGroupFinanceRevenuePermonth
.selectAll("text")
.attr("fill", "lightgrey")
.attr(
    "transform",
    "rotate(-65) translate(1,3)"
)
.attr("font-size", "9px")
.attr("word-wrap", "break-word")
.style("font-weight", "bold")
.attr("text-anchor", "end"); */

    xAxisGroupFinanceRevenuePermonth
        .selectAll("line")
        .remove();

    xAxisGroupFinanceRevenuePermonth
        .select(".domain")
        .remove(); //remove path with class domain
}