/* const canvas = d3.select(".canvas");
const svg = canvas.append("svg").attr("width", "600").attr("height", "500");
const group = svg.append("g");

group.attr("transform", "translate(0,200)"); */

// append shape
/* group
  .append("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "blue")
  .attr("x", 20)
  .attr("y", 20);

group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("fill", "pink");

group
  .append("line")
  .attr("x1", 370)
  .attr("y1", 20)
  .attr("x2", 400)
  .attr("y2", 120)
  .attr("stroke", "orangered");

group
  .append("text")
  .attr("x", 20)
  .attr("y", 200)
  .attr("fill", "grey")
  .text("mario learn d3")
  .attr("fill", "red")
  .attr("stroke", "yellow")
  .style("font-size", "30px")
  .style("text-decoration", "line-through"); */

/* const isi = [
  {
    width: 200,
    height: 200,
    fill: "darkblue",
  },
  {
    width: 130,
    height: 130,
    fill: "crimson",
  },
  {
    width: 70,
    height: 70,
    fill: "gold",
  },
  {
    width: 40,
    height: 40,
    fill: "royalblue",
  },
  {
    width: 20,
    height: 20,
    fill: "cyan",
  },
]; */

/* const isi2 = [
  {
    width: 100,
    height: 100,
    fill: "burlywood",
  },
  {
    width: 50,
    height: 20,
    fill: "pink",
  },
]; */

//d3 select element a svg
/* const svg = d3.select("svg"); */

// join data to rect
/* const rect = svg.selectAll("rect").data(isi); */

// add attr to rect already in the DOM
/* rect
  .attr("width", (d, i, n) => {
    console.log("content i ", n[i]);
    return d.width;
  })
  .attr("height", (d) => d.height)
  .attr("fill", (d) => d.fill); */

// append the enter selection to DOM
/* rect
  .enter()
  .append("rect")
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height)
  .attr("fill", (d) => d.fill); */
// first, select svg container
const svg = d3.select("svg");

d3.json("testing.json").then((isiData) => {
  const circs = svg.selectAll("circle").data(isiData);
  console.log("data nih ", isiData);
  // add attr to circs already in dom
  circs
    .attr("cy", 200)
    .attr("cx", (d) => d.distance)
    .attr("r", (d) => d.radius)
    .attr("fill", (d) => d.fill);

  // append the enter selection to DOM
  circs
    .enter()
    .append("circle")
    .attr("cy", 200)
    .attr("cx", (d) => d.distance)
    .attr("r", (d) => d.radius)
    .attr("fill", (d) => d.fill);
});
