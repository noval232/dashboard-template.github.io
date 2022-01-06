////////////////// Bar Billable Productivity \\\\\\\\\\\\\\\\\\\\\\
const marginBillableProductivity = { top: 20, right: 20, bottom: 20, left: 20 };
const graphWidthBillableProductivity =
  parseInt(pBillableProductivity.style("width")) -
  marginBillableProductivity.left -
  marginBillableProductivity.right;
const graphHeightBillableProductivity =
  parseInt(pBillableProductivity.style("height")) -
  marginBillableProductivity.top -
  marginBillableProductivity.bottom;

//pembuatan group
const graphBillableProductivity = pBillableProductivity
  .append("g")
  .attr("width", graphWidthBillableProductivity)
  .attr("height", graphHeightBillableProductivity)
  .attr(
    "transform",
    `translate(${marginBillableProductivity.left},${marginBillableProductivity.top})`
  );

// bikin lebar dan tinggi pYtd dengan attr
/* pYtd
  .attr("width", 70 * 4)
  .attr("height", 200)
  .attr("fill", "coral"); */

const minBillable = d3.min(productivityDataBillable, (d) => d.value);

const maxBillable = d3.max(productivityDataBillable, (d) => d.value);

const xAxisGroupProductivityBillable = graphBillableProductivity
  .append("g")
  .attr("transform", `translate(-10, ${graphHeightBillableProductivity})`); //keterangan text dibawah

const yAxisGroupProductivityBillable = graphBillableProductivity.append("g");

const yProductivityBillable = d3
  .scaleLinear()
  .domain([-5, d3.max(productivityDataBillable, (d) => d.value)])
  .range([graphHeightBillableProductivity, 0]);

const xProductivityBillable = d3
  .scaleBand()
  .domain(productivityDataBillable.map((item) => item.name))
  .range([0, graphWidthBillableProductivity])
  .paddingInner(0.2)
  .paddingOuter(0.2);

const rectsProductivityBillable = graphBillableProductivity
  .selectAll("rect")
  .data(productivityDataBillable);

rectsProductivityBillable
  .attr("width", 30)
  .attr("height", (d) => graphHeightBillableProductivity - yProductivityBillable(d.value))
  .attr("fill", greenBar)
  .attr("x", (d) => xProductivityBillable(d.name))
  .attr("y", (d) => yProductivityBillable(d.value));

rectsProductivityBillable
  .enter()
  .append("rect")
  .attr("width", 30)
  .attr("height", (d) => graphHeightBillableProductivity - yProductivityBillable(d.value))
  .attr("fill", greenBar)
  .attr("x", (d) => xProductivityBillable(d.name))
  .attr("y", (d) => yProductivityBillable(d.value));

rectsProductivityBillable
  .enter()
  .append("text")
  .style("font-size", "11px")
  .text((d) => `${d.value}%`)
  .attr("x", (d) => xProductivityBillable(d.name))
  .attr("y", (d) => yProductivityBillable(d.value) - 5)
  .attr("transform", `translate(${4},${0})`)
  .attr("text-anchor", "start");

//create and call the axes
const xAxisProductivityBillable = d3.axisBottom(xProductivityBillable);

xAxisGroupProductivityBillable.call(xAxisProductivityBillable);

xAxisGroupProductivityBillable.select(".domain").remove(); //remove path with class domain

console.log(xAxisGroupProductivityBillable);
