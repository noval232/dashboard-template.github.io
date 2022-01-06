const buatChartNonBillableSpDashboard =
  CreateNonBillableProductivity(
    productivityDataNonBillable,
    'ChartProductivity-Nonbillable'
  );

const buatChartBillableSpDashboard =
  CreateBillableProductivity(
    productivityDataBillable,
    `ChartProductivity-Billable`
  );

const chartSpDashboardR2YtdBilled =
  createChartFinanceYtd(
    financeDataR2YtdBilled,
    'ChartFinance-R2YtdBilled'
  );
const chartSpDashboardR2YtdConfirmed =
  createChartFinanceYtd(
    financeDataR2YtdConfirmed,
    'ChartFinance-R2YtdConfirmed'
  );
const chartSpDashboardR2YtdDifficult =
  createChartFinanceYtd(
    financeDataR2YtdDifficult,
    'ChartFinance-R2YtdDifficult'
  );
const chartSpDashboardR2YtdOnProcess =
  createChartFinanceYtd(
    financeDataR2YtdOnProcess,
    'ChartFinance-R2YtdOnProcess'
  );

const chartsPDashboardBulananForR2Billed =
  createChartFinancePerBulan(
    financeDataRtwoPermonthBilled,
    'ChartFinance-R2PerbulanBilled'
  );

const chartsPDashboardBulananForR2Confirmed =
  createChartFinancePerBulan(
    financeDataRtwoPermonthConfirmed,
    'ChartFinance-R2PerbulanConfirmed'
  );

const chartsPDashboardBulananForR2Difficult =
  createChartFinancePerBulan(
    financeDataRtwoPermonthDifficult,
    'ChartFinance-R2PerbulanDifficult'
  );

//rusak
/* const chartsPDashboardBulananForRThreeWip =
  createChartFinancePerBulan(
    financeDataRtwoPermonthDifficult,
    'ChartFinance-R3PerbulanWip'
  ); */

const buatChartsPDashboardNonPerforming =
  CreateChartFinanceNonPerforming(
    financeDataRtwoPeryear,
    'ChartFinance-R2NonPerforming'
  );

const chartspDashboardR3YtdWip =
  createChartFinanceYtd(
    financeDataR3YtdWip,
    'ChartFinance-R3YtdWip'
  );

const chartspDashboardForRThreeWip =
  createChartFinancePerBulan(
    financeDataRtwoPermonthDifficult,
    'ChartFinance-R3PerbulanWip'
  );

const buatChartspDashboardR3Year =
  CreateChartFinanceR3Year(
    financeDataRthreePeryear,
    'ChartFinance-R3Year'
  );

console.log(
  'tester bosque ',
  CreateChartFinanceNonPerforming
);

const chartFinanceR3YtdStatusConfirmed2 =
  createChartFinanceYtdStatus(
    financeDataR3YtdWip,
    'ChartFinance-R3StatusConfirmed'
  );

const chartFinanceR3YtdStatusDifficult2 =
  createChartFinanceYtdStatus(
    financeDataR3YtdWip,
    'ChartFinance-R3StatusDifficult'
  );

const chartFinanceR3YtdStatusInProcess2 =
  createChartFinanceYtdStatus(
    financeDataR3YtdWip,
    'ChartFinance-R3StatusInProcess'
  );

const chartFinanceR3YtdStatusNonPerform2 =
  createChartFinanceYtdStatus(
    financeDataR3YtdWip,
    'ChartFinance-R3StatusNonPerform'
  );

const chartFinanceR3StatusAll2 =
  CreateChartFinanceAllTotalStatus(
    financeDataRthreeStatusTotalPerChart,
    'ChartFinance-R3StatusTotalPerChart'
  );

const dataQuarterAchievements = [
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

const dataPermonthAchievements = [
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

/* rubah lagi penamaan nya dan datanya */
function CreateChartspDashboardAchievements(
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

const buatChartspDashboardAchievementQuarter =
  CreateChartspDashboardAchievements(
    dataQuarterAchievements,
    'ChartSpDashboard-GroupAchievementQuarter',
    '280',
    '150'
  );

const buatChartspDashboardAchievementPermonth =
  CreateChartspDashboardAchievements(
    dataPermonthAchievements,
    'ChartSpDashboard-GroupAchievementPermonth',
    '670',
    '150'
  );
