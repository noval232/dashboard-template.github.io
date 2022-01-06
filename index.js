const data2 = [{
        name: "Q1",
        value: 98,
        fill: "lightgreen",
    },
    {
        name: "Q2",
        value: 120,
        fill: "lightgreen",
    },
    {
        name: "Q3",
        value: 94,
        fill: "lightgreen",
    },
    {
        name: "Q4",
        value: 6,
        fill: "lightgreen",
    },
];

const greenBar = "#a2d097";

// styling model in d3
const svg = d3
    .select(".canvas-wrap")
    .append("svg")
    .attr("width", "300")
    .attr("height", 230);

console.log("svg awal", svg);

// create margin and dimension group
const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 30,
};
const graphWidth =
    parseInt(svg.style("width")) -
    margin.left -
    margin.right;
const graphHeight =
    parseInt(svg.style("height")) -
    margin.top -
    margin.bottom;

console.log(
    "ukuran graphWidth",
    graphWidth
);
console.log(
    "tinggi group grapHeight",
    graphHeight
);

//create border dengan style
// svg.style("border", "2px ridge royalblue");

//pembuatan group
const graph = svg
    .append("g")
    .attr("width", graphWidth)
    .attr("height", graphHeight)
    .attr(
        "transform",
        `translate(${margin.left},${margin.top})`
    );

console.log("svg di graph ", svg);

// bikin lebar dan tinggi svg dengan attr
/* svg
  .attr("width", 70 * 4)
  .attr("height", 200)
  .attr("fill", "coral"); */

const min = d3.min(
    data2,
    (d) => d.value
); //method untuk mendapatkan nilai terkecil, dg callback function
console.log(min);

const max = d3.max(
    data2,
    (d) => d.value
);
console.log("nilai max ", max);

// min, max berguna untuk input value di domain(scaleLinear) shg tidak perlu ditulis dg hardcode

const extent = d3.extent(
    data2,
    (d) => d.value
);
console.log(extent);

const xAxisGroup = graph
    .append("g")
    .attr(
        "transform",
        `translate(-10, ${graphHeight})`
    ); //keterangan text dibawah

const yAxisGroup = graph.append("g");

//scaleLinear utk menentukan batas atas/tertinggi
const y = d3
    .scaleLinear()
    .domain([
        0,
        d3.max(data2, (d) => d.value),
    ])
    .range([graphHeight, 0]);
//domain, -> real value yg dari min sampe max
//range utk menentukan batas atas, ketika nilai value max 120 maka real tinggi nya adalah 150px

//scaleBand untuk menentukan lebar bar chart(group)
const x = d3
    .scaleBand()
    .domain(data2.map((item) => item.name))
    .range([0, graphWidth])
    .paddingInner(0.2)
    .paddingOuter(0.2);
//range utk mengatur jarak antar bar(margin)
//paddingInner jarak antar bar
//paddingOuter jarak bar ujung kiri dan ujung kanan dengan container (margin) atau
//seperti penambahan padding(kiri kanan) terhadapat container dari bar char

console.log(x("Q2"));

const rects = graph
    .selectAll("rect")
    .data(data2);

rects
    .attr("width", 25)
    // .attr("height", (d) => (sl(d.value) * 180) / 120) // tidak pake scaleLinear, shg tingginya disesuaikan dengan 180
    .attr(
        "height",
        (d) => graphHeight - y(d.value)
    )
    .attr("fill", greenBar)
    .attr("x", (d) => x(d.name))
    .attr("y", (d) => y(d.value));
//.attr("x", (d, i) => i * 60); //posisi antar kordinat x bar kelipatan 60

//append enter selection to dom
rects
    .enter()
    .append("rect")
    .attr("width", 25)
    .attr(
        "height",
        (d) => graphHeight - y(d.value)
    )
    .attr("fill", (d) => {
        if (d.value > 100) {
            return "blue";
        } else {
            return greenBar;
        }
    })
    .attr("x", (d) => x(d.name))
    .attr("y", (d) => y(d.value)); //bar di mulai dari bottom
//.attr("x", (d, i) => i * 60); //posisi antar kordinat x bar kelipatan 60
console.log(
    "posisi x ",
    rects.attr("x", (d) => x(d.name))
);

rects
    .enter()
    .append("text")
    .style("font-size", "11px")
    .text((d) => `${d.value}%`)
    .attr("x", (d) => x(d.name))
    .attr("y", (d) => y(d.value) - 5)
    .attr(
        "transform",
        `translate(${4},${0})`
    )
    .attr("text-anchor", "start");
// .attr("transform", `translate(${margin.left - 10})`);

//create and call the axes
const xAxis = d3.axisBottom(x);
// const yAxis = d3.axisLeft(y).ticks(8);

xAxisGroup.call(xAxis);
// yAxisGroup.call(yAxis);

xAxisGroup.selectAll("line").remove();

xAxisGroup.select(".domain").remove(); //remove path with class domain

console.log(xAxisGroup);

/* 
.style('color', function(d) {
                     if (d % 2 === 0) {
                         return "green";
                     } else {
                         return "red";
                     }
                 })
*/