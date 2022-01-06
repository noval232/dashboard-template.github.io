const dataQuarterAchievements2 = [
  {
    name: 'YEARLY',
    value: 10,
  },
  {
    name: 'Q4',
    value: 98,
  },
  {
    name: 'Q3',
    value: 105,
  },
  {
    name: 'Q2',
    value: 94,
  },
  {
    name: 'Q1',
    value: 0,
  },
];

const dataPermonthAchievements2 = [
  {
    name: 'Oct',
    value: 120,
  },
  {
    name: 'Nov',
    value: 101,
  },
  {
    name: 'Dec',
    value: 93,
  },
  {
    name: 'Jan',
    value: 118,
  },
  {
    name: 'Feb',
    value: 79,
  },
  {
    name: 'Mar',
    value: 108,
  },
  {
    name: 'Apr',
    value: 112,
  },
  {
    name: 'May',
    value: 93,
  },
  {
    name: 'Jun',
    value: 118,
  },
  {
    name: 'Jul',
    value: 88,
  },
  {
    name: 'Aug',
    value: 98,
  },
  {
    name: 'Sep',
    value: 0,
  },
];

function CreateChartAssociateAchievements(
  data,
  namaClass,
  lebar,
  tinggi
) {
  const pPermonthProductivity = d3
    .selectAll(`.${namaClass}`)
    .append('svg')
    .attr('width', `${lebar}`)
    .attr('height', `${tinggi}`);
  const marginPermonthProductivity = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };
  const graphWidthPermonthProductivity =
    parseInt(
      pPermonthProductivity.style(
        'width'
      )
    ) -
    marginPermonthProductivity.left -
    marginPermonthProductivity.right;
  const graphHeightPermonthProductivity =
    parseInt(
      pPermonthProductivity.style(
        'height'
      )
    ) -
    marginPermonthProductivity.top -
    marginPermonthProductivity.bottom;

  //pembuatan group
  const graphPermonthProductivity =
    pPermonthProductivity
      .append('g')
      .attr(
        'width',
        graphWidthPermonthProductivity
      )
      .attr(
        'height',
        graphHeightPermonthProductivity
      )
      .attr(
        'transform',
        `translate(${marginPermonthProductivity.left},${marginPermonthProductivity.top})`
      );

  // bikin lebar dan tinggi pYtd dengan attr
  /* pYtd
          .attr("width", 70 * 4)
          .attr("height", 200)
          .attr("fill", "coral"); */

  const minPermonth = d3.min(
    data,
    (d) => d.value
  ); //method untuk mendapatkan nilai terkecil, dg callback function

  const maxPermonth = d3.max(
    data,
    (d) => d.value
  );

  const xAxisGroupProductivityPermonth =
    graphPermonthProductivity
      .append('g')
      .style('font-weight', 'bold')
      .style('color', '#98a0a8')
      .attr(
        'transform',
        `translate(-5, ${graphHeightPermonthProductivity})`
      ); //keterangan text dibawah

  const yAxisGroupProductivityPermonth =
    graphPermonthProductivity.append(
      'g'
    );

  const yProductivityPermonth = d3
    .scaleLinear()
    .domain([
      -5,
      d3.max(data, (d) => d.value),
    ])
    .range([
      graphHeightPermonthProductivity,
      0,
    ]);

  const xProductivityPermonth = d3
    .scaleBand()
    .domain(
      data.map((item) => item.name)
    )
    .range([
      0,
      graphWidthPermonthProductivity,
    ])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const rectsProductivityPermonth =
    graphPermonthProductivity
      .selectAll('rect')
      .data(data);

  rectsProductivityPermonth
    .attr('width', 30)
    .attr(
      'height',
      (d) =>
        graphHeightPermonthProductivity -
        yProductivityPermonth(d.value)
    )
    .attr('fill', greenBar)
    .attr('x', (d) =>
      xProductivityPermonth(d.name)
    )
    .attr('y', (d) =>
      yProductivityPermonth(d.value)
    );

  rectsProductivityPermonth
    .enter()
    .append('rect')
    .attr('width', 30)
    .attr(
      'height',
      (d) =>
        graphHeightPermonthProductivity -
        yProductivityPermonth(d.value)
    )
    .attr('fill', (d) => {
      if (d.name === 'YEARLY') {
        return 'darkblue';
      } else if (
        d.name === 'Q4' ||
        d.name === 'Oct' ||
        d.name === 'Nov' ||
        d.name === 'Dec'
      ) {
        return '#98a0a8';
      } else {
        return greenBar;
      }
    })
    .attr('x', (d) =>
      xProductivityPermonth(d.name)
    )
    .attr('y', (d) =>
      yProductivityPermonth(d.value)
    );

  rectsProductivityPermonth
    .enter()
    .append('text')
    .style('font-size', '11px')
    .text((d) => `${d.value}%`)
    .attr('x', (d) =>
      xProductivityPermonth(d.name)
    )
    .attr(
      'y',
      (d) =>
        yProductivityPermonth(d.value) -
        5
    )
    .attr(
      'transform',
      `translate(${4},${0})`
    )
    .attr('text-anchor', 'start');

  //create and call the axes
  const xAxisProductivityPermonth =
    d3.axisBottom(
      xProductivityPermonth
    );

  xAxisGroupProductivityPermonth.call(
    xAxisProductivityPermonth
  );

  xAxisGroupProductivityPermonth
    .selectAll('line')
    .remove();

  xAxisGroupProductivityPermonth
    .select('.domain')
    .remove(); //remove path with class domain

  console.log(
    xAxisGroupProductivityPermonth
  );
}

const buatChartAssociateAchievementQuarter =
  CreateChartAssociateAchievements(
    dataQuarterAchievements2,
    'ChartAssociate-GroupAchievementQuarter',
    '280',
    '150'
  );

const buatChartspAssociateAchievementPermonth =
  CreateChartAssociateAchievements(
    dataPermonthAchievements2,
    'ChartAssociate-GroupAchievementPermonth',
    '670',
    '150'
  );

console.log(
  'tester dulu ',
  CreateChartAssociateAchievements
);
