const productivityDataYtd = [
  {
    name: 2020,
    value: 10,
  },
  {
    name: 'YTD',
    value: 10,
  },
];

const productivityDataQuarter = [
  {
    name: 'Q1',
    value: 98,
  },
  {
    name: 'Q2',
    value: 120,
  },
  {
    name: 'Q3',
    value: 94,
  },
  {
    name: 'Q4',
    value: 0,
  },
];

const productivityDataPermonth = [
  {
    name: 'Jan',
    value: 120,
  },
  {
    name: 'Feb',
    value: 101,
  },
  {
    name: 'Mar',
    value: 93,
  },
  {
    name: 'Apr',
    value: 118,
  },
  {
    name: 'May',
    value: 79,
  },
  {
    name: 'Jun',
    value: 108,
  },
  {
    name: 'Jul',
    value: 112,
  },
  {
    name: 'Aug',
    value: 0,
  },
  {
    name: 'Sep',
    value: 0,
  },
  {
    name: 'Oct',
    value: 0,
  },
  {
    name: 'Nov',
    value: 0,
  },
  {
    name: 'Des',
    value: 0,
  },
];

const productivityDataNonBillable = [
  {
    name: '2020',
    value: 10,
  },
  {
    name: 'YTD',
    value: 10,
  },
  {
    name: 'BDV',
    value: 98,
  },
  {
    name: 'OFF',
    value: 105,
  },
  {
    name: 'PCN',
    value: 94,
  },
  {
    name: 'PBN',
    value: 0,
  },
  {
    name: 'PDV',
    value: 0,
  },
];

const productivityDataBillable = [
  {
    name: '2020',
    value: 10,
  },
  {
    name: 'YTD',
    value: 10,
  },
  {
    name: 'Jan',
    value: 120,
  },
  {
    name: 'Feb',
    value: 101,
  },
  {
    name: 'Mar',
    value: 93,
  },
  {
    name: 'Apr',
    value: 118,
  },
  {
    name: 'May',
    value: 79,
  },
  {
    name: 'Jun',
    value: 108,
  },
  {
    name: 'Jul',
    value: 112,
  },
  {
    name: 'Aug',
    value: 0,
  },
  {
    name: 'Sep',
    value: 0,
  },
  {
    name: 'Oct',
    value: 0,
  },
  {
    name: 'Nov',
    value: 0,
  },
  {
    name: 'Des',
    value: 0,
  },
];

const greenBar = '#a2d097';

// styling model in d3
// select nama class wrappernya

////////////////// Bar Per Month Productivity \\\\\\\\\\\\\\\\\\\\\\

function CreateChartProductivityYtdMonthQuarter(
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
        `translate(-10, ${graphHeightPermonthProductivity})`
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
      if (typeof d.name === 'number') {
        return 'darkblue';
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

const buatChartProductivityYtd =
  CreateChartProductivityYtdMonthQuarter(
    productivityDataYtd,
    'ChartProductivity-Ytd',
    '200',
    '180'
  );

const buatChartProductivityPerbulan =
  CreateChartProductivityYtdMonthQuarter(
    productivityDataPermonth,
    'ChartProductivity-Perbulan',
    '680',
    '180'
  );

const buatChartProductivityPerQuarter =
  CreateChartProductivityYtdMonthQuarter(
    productivityDataQuarter,
    'ChartProductivity-Perquarter',
    '270',
    '180'
  );

/////////////////Bar Non-Billable Productivity\\\\\\\\\\\\\\\\\\\\\\\
function CreateNonBillableProductivity(
  data,
  namaClass
) {
  const pNonBillableProductivity = d3
    .selectAll(`.${namaClass}`)
    .append('svg')
    .attr('width', '400')
    .attr('height', 150);

  const marginNonBillableProductivity =
    {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };
  const graphWidthNonBillableProductivity =
    parseInt(
      pNonBillableProductivity.style(
        'width'
      )
    ) -
    marginNonBillableProductivity.left -
    marginNonBillableProductivity.right;
  const graphHeightNonBillableProductivity =
    parseInt(
      pNonBillableProductivity.style(
        'height'
      )
    ) -
    marginNonBillableProductivity.top -
    marginNonBillableProductivity.bottom;

  //pembuatan group
  const graphNonBillableProductivity =
    pNonBillableProductivity
      .append('g')
      .attr(
        'width',
        graphWidthNonBillableProductivity
      )
      .attr(
        'height',
        graphHeightNonBillableProductivity
      )
      .attr(
        'transform',
        `translate(${marginNonBillableProductivity.left},${marginNonBillableProductivity.top})`
      );

  // bikin lebar dan tinggi pYtd dengan attr
  /* pYtd
      .attr("width", 70 * 4)
      .attr("height", 200)
      .attr("fill", "coral"); */

  const minNonBillable = d3.min(
    data,
    (d) => d.value
  );

  const maxNonBillable = d3.max(
    data,
    (d) => d.value
  );

  const xAxisGroupProductivityNonBillable =
    graphNonBillableProductivity
      .append('g')
      .style('font-weight', 'bold')
      .style('color', '#98a0a8')
      .attr(
        'transform',
        `translate(-5, ${graphHeightNonBillableProductivity})`
      ); //keterangan text dibawah

  const yAxisGroupProductivityNonBillable =
    graphNonBillableProductivity.append(
      'g'
    );

  const yProductivityNonBillable = d3
    .scaleLinear()
    .domain([
      -5,
      d3.max(data, (d) => d.value),
    ])
    .range([
      graphHeightNonBillableProductivity,
      0,
    ]);

  const xProductivityNonBillable = d3
    .scaleBand()
    .domain(
      data.map((item) => item.name)
    )
    .range([
      0,
      graphWidthNonBillableProductivity,
    ])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const rectsProductivityNonBillable =
    graphNonBillableProductivity
      .selectAll('rect')
      .data(data);

  rectsProductivityNonBillable
    .attr('width', 30)
    .attr(
      'height',
      (d) =>
        graphHeightNonBillableProductivity -
        yProductivityNonBillable(
          d.value
        )
    )
    .attr('fill', greenBar)
    .attr('x', (d) =>
      xProductivityNonBillable(d.name)
    )
    .attr('y', (d) =>
      yProductivityNonBillable(d.value)
    );

  rectsProductivityNonBillable
    .enter()
    .append('rect')
    .attr('width', 30)
    .attr(
      'height',
      (d) =>
        graphHeightNonBillableProductivity -
        yProductivityNonBillable(
          d.value
        )
    )
    .attr('fill', (d) => {
      if (d.name == 'YTD') {
        return 'darkblue';
      } else {
        return greenBar;
      }
    })
    .attr('x', (d) =>
      xProductivityNonBillable(d.name)
    )
    .attr('y', (d) =>
      yProductivityNonBillable(d.value)
    );

  rectsProductivityNonBillable
    .enter()
    .append('text')
    .style('font-size', '11px')
    .text((d) => `${d.value}%`)
    .attr('x', (d) =>
      xProductivityNonBillable(d.name)
    )
    .attr(
      'y',
      (d) =>
        yProductivityNonBillable(
          d.value
        ) - 5
    )
    .attr(
      'transform',
      `translate(${4},${0})`
    )
    .attr('text-anchor', 'start');

  //create and call the axes
  const xAxisProductivityNonBillable =
    d3.axisBottom(
      xProductivityNonBillable
    );

  xAxisGroupProductivityNonBillable.call(
    xAxisProductivityNonBillable
  );

  xAxisGroupProductivityNonBillable
    .selectAll('line')
    .remove();

  xAxisGroupProductivityNonBillable
    .select('.domain')
    .remove(); //remove path with class domain

  console.log(
    xAxisGroupProductivityNonBillable
  );
}

const buatChartNonBillableProductivity =
  CreateNonBillableProductivity(
    productivityDataNonBillable,
    'ChartProductivity-nonbillable'
  );

////////////////// Bar Billable Productivity \\\\\\\\\\\\\\\\\\\\\\
function CreateBillableProductivity(
  data,
  namaClass
) {
  const pBillableProductivity = d3
    .selectAll(`.${namaClass}`)
    .append('svg')
    .attr('width', '700')
    .attr('height', 150);

  const marginBillableProductivity = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };
  const graphWidthBillableProductivity =
    parseInt(
      pBillableProductivity.style(
        'width'
      )
    ) -
    marginBillableProductivity.left -
    marginBillableProductivity.right;
  const graphHeightBillableProductivity =
    parseInt(
      pBillableProductivity.style(
        'height'
      )
    ) -
    marginBillableProductivity.top -
    marginBillableProductivity.bottom;

  //pembuatan group
  const graphBillableProductivity =
    pBillableProductivity
      .append('g')
      .attr(
        'width',
        graphWidthBillableProductivity
      )
      .attr(
        'height',
        graphHeightBillableProductivity
      )
      .attr(
        'transform',
        `translate(${marginBillableProductivity.left},${marginBillableProductivity.top})`
      );

  // bikin lebar dan tinggi pYtd dengan attr
  /* pYtd
      .attr("width", 70 * 4)
      .attr("height", 200)
      .attr("fill", "coral"); */

  const minBillable = d3.min(
    data,
    (d) => d.value
  );

  const maxBillable = d3.max(
    data,
    (d) => d.value
  );

  const xAxisGroupProductivityBillable =
    graphBillableProductivity
      .append('g')
      .style('font-weight', 'bold')
      .style('color', '#98a0a8')
      .attr(
        'transform',
        `translate(-5, ${graphHeightBillableProductivity})`
      ); //keterangan text dibawah

  const yAxisGroupProductivityBillable =
    graphBillableProductivity.append(
      'g'
    );

  const yProductivityBillable = d3
    .scaleLinear()
    .domain([
      -5,
      d3.max(data, (d) => d.value),
    ])
    .range([
      graphHeightBillableProductivity,
      0,
    ]);

  const xProductivityBillable = d3
    .scaleBand()
    .domain(
      data.map((item) => item.name)
    )
    .range([
      0,
      graphWidthBillableProductivity,
    ])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const rectsProductivityBillable =
    graphBillableProductivity
      .selectAll('rect')
      .data(data);

  rectsProductivityBillable
    .attr('width', 30)
    .attr(
      'height',
      (d) =>
        graphHeightBillableProductivity -
        yProductivityBillable(d.value)
    )
    .attr('fill', greenBar)
    .attr('x', (d) =>
      xProductivityBillable(d.name)
    )
    .attr('y', (d) =>
      yProductivityBillable(d.value)
    );

  rectsProductivityBillable
    .enter()
    .append('rect')
    .attr('width', 30)
    .attr(
      'height',
      (d) =>
        graphHeightBillableProductivity -
        yProductivityBillable(d.value)
    )
    .attr('fill', (d) => {
      if (d.name == 'YTD') {
        return 'darkblue';
      } else {
        return greenBar;
      }
    })
    .attr('x', (d) =>
      xProductivityBillable(d.name)
    )
    .attr('y', (d) =>
      yProductivityBillable(d.value)
    );

  rectsProductivityBillable
    .enter()
    .append('text')
    .style('font-size', '11px')
    .text((d) => `${d.value}%`)
    .attr('x', (d) =>
      xProductivityBillable(d.name)
    )
    .attr(
      'y',
      (d) =>
        yProductivityBillable(d.value) -
        5
    )
    .attr(
      'transform',
      `translate(${4},${0})`
    )
    .attr('text-anchor', 'start');

  //create and call the axes
  const xAxisProductivityBillable =
    d3.axisBottom(
      xProductivityBillable
    );

  xAxisGroupProductivityBillable.call(
    xAxisProductivityBillable
  );

  xAxisGroupProductivityBillable
    .selectAll('line')
    .remove();

  xAxisGroupProductivityBillable
    .select('.domain')
    .remove(); //remove path with class domain

  console.log(
    xAxisGroupProductivityBillable
  );
}

const buatChartBillableProductivity =
  CreateBillableProductivity(
    productivityDataBillable,
    'ChartProductivity-billable'
  );
