/* STAT2201 - built from the 2023a, 2023b, 2024a (Sem 1), Sem 2 2024, 2025a (Sem 1) and 2025b (Sem 2) final exams, the 2026 cover/formula page and Problem Set 2026b.
   Every number checked against the official handwritten solutions (and re-derived with python) for 2023b, 2024a and Sem 2 2024. Lecturer flagged the two-sample comparison-of-means test as certain to appear. */
DATA.add({
  id: 'STAT2201', code: 'STAT2201', name: 'Analysis of Engineering and Scientific Data', color: '#3b82f6',
  summary: 'How to describe data, estimate things with uncertainty, compare groups and fit regression lines. The exam is mostly "interpret this output and explain what it means".',
  exam: { date: '2026-11-17', time: '17:45', readMin: 10, durMin: 60, venue: 'St Lucia', marks: 40,
    notes: 'One A4 sheet, handwritten, single-sided (no printed or scanned notes). A formula sheet and t-table are given in the paper.',
    calc: 'Casio FX82 series', notesAllowed: true,
    format: '3 questions, 40 marks. Q1 data + intervals + t-test, Q2 regression output, Q3 estimators.' },
  tTable: {
    cols: ['0.75', '0.90', '0.95', '0.975', '0.99', '0.995', '0.999', '0.9995'],
    rows: {
      '1': [1.000, 3.078, 6.314, 12.71, 31.82, 63.66, 318.3, 636.6], '2': [0.816, 1.886, 2.920, 4.303, 6.965, 9.925, 22.33, 31.60],
      '3': [0.765, 1.638, 2.353, 3.182, 4.541, 5.841, 10.21, 12.92], '4': [0.741, 1.533, 2.132, 2.776, 3.747, 4.604, 7.173, 8.610],
      '5': [0.727, 1.476, 2.015, 2.571, 3.365, 4.032, 5.893, 6.869], '6': [0.718, 1.440, 1.943, 2.447, 3.143, 3.707, 5.208, 5.959],
      '7': [0.711, 1.415, 1.895, 2.365, 2.998, 3.499, 4.785, 5.408], '8': [0.706, 1.397, 1.860, 2.306, 2.896, 3.355, 4.501, 5.041],
      '9': [0.703, 1.383, 1.833, 2.262, 2.821, 3.250, 4.297, 4.781], '10': [0.700, 1.372, 1.812, 2.228, 2.764, 3.169, 4.144, 4.587],
      '11': [0.697, 1.363, 1.796, 2.201, 2.718, 3.106, 4.025, 4.437], '12': [0.695, 1.356, 1.782, 2.179, 2.681, 3.055, 3.930, 4.318],
      '13': [0.694, 1.350, 1.771, 2.160, 2.650, 3.012, 3.852, 4.221], '14': [0.692, 1.345, 1.761, 2.145, 2.624, 2.977, 3.787, 4.140],
      '15': [0.691, 1.341, 1.753, 2.131, 2.602, 2.947, 3.733, 4.073], '16': [0.690, 1.337, 1.746, 2.120, 2.583, 2.921, 3.686, 4.015],
      '17': [0.689, 1.333, 1.740, 2.110, 2.567, 2.898, 3.646, 3.965], '18': [0.688, 1.330, 1.734, 2.101, 2.552, 2.878, 3.610, 3.922],
      '19': [0.688, 1.328, 1.729, 2.093, 2.539, 2.861, 3.579, 3.883], '20': [0.687, 1.325, 1.725, 2.086, 2.528, 2.845, 3.552, 3.850],
      '22': [0.686, 1.321, 1.717, 2.074, 2.508, 2.819, 3.505, 3.792], '24': [0.685, 1.318, 1.711, 2.064, 2.492, 2.797, 3.467, 3.745],
      '25': [0.684, 1.316, 1.708, 2.060, 2.485, 2.787, 3.450, 3.725], '30': [0.683, 1.310, 1.697, 2.042, 2.457, 2.750, 3.385, 3.646],
      '40': [0.681, 1.303, 1.684, 2.021, 2.423, 2.704, 3.307, 3.551], '50': [0.679, 1.299, 1.676, 2.009, 2.403, 2.678, 3.261, 3.496],
      '60': [0.679, 1.296, 1.671, 2.000, 2.390, 2.660, 3.232, 3.460], '70': [0.678, 1.294, 1.667, 1.994, 2.381, 2.648, 3.211, 3.435],
      '75': [0.678, 1.293, 1.665, 1.992, 2.377, 2.643, 3.202, 3.425], '77': [0.678, 1.293, 1.665, 1.991, 2.376, 2.641, 3.199, 3.421],
      '80': [0.678, 1.292, 1.664, 1.990, 2.374, 2.639, 3.195, 3.416], '∞ (normal)': [0.674, 1.282, 1.645, 1.960, 2.326, 2.576, 3.090, 3.291]
    }
  },
  papers: [
    { id: '2025b', name: 'Semester 2, 2025 paper', fullMarks: 40, fullMin: 60, note: 'Parts that need a printed graph are left out.' },
    { id: '2025a', name: 'Semester 1, 2025 paper', fullMarks: 30, fullMin: 60, note: 'Parts that need a printed graph are left out.' },
    { id: '2024b', name: 'Semester 2, 2024 paper', fullMarks: 30, fullMin: 60, note: 'Parts that need a printed box plot or residual plot are left out.' },
    { id: '2024a', name: 'Semester 1, 2024 paper', fullMarks: 35, fullMin: 60, note: 'Parts that need a printed box plot or residual plot are left out.' },
    { id: '2023b', name: 'Semester 2, 2023 paper', fullMarks: 35, fullMin: 60, note: 'Parts that need a printed box plot or residual plot are left out.' },
    { id: '2023a', name: 'Semester 1, 2023 paper', fullMarks: 35, fullMin: 60, note: 'Parts that need a printed graph are left out. Duration assumed to be 60 min.' }
  ],
  topics: [
    /* ---------------------------------------------------------------- 1 */
    { id: 'describe', name: 'Describing data and reading plots', freq: 1, freqNote: 'Q1 of all 3 past papers', assigned: true,
      assignedNote: 'Problem Set Q1 (Unit 1) covers this, so a little less priority.',
      notation: [['n', 'sample size (number of observations)'], ['ȳ or x̄', 'sample mean'], ['s', 'sample standard deviation'], ['Q1, Q3', 'first and third quartiles (25th and 75th percentile)'], ['IQR', 'interquartile range = Q3 − Q1'], ['r', 'correlation coefficient (−1 to 1, linear association only)']],
      lesson:
`<p>Every exam question starts with a data set. Before any maths, you need to say what the data looks like.</p>
<h4>Types of variable</h4>
<ul><li><b>Categorical</b>: labels (season, cloud type, print direction).</li>
<li><b>Numerical</b>: measurements. <i>Discrete</i> = counts, <i>continuous</i> = anything on a scale (strength in MPa).</li></ul>
<h4>Centre and spread</h4>
<ul><li><b>Mean</b> = the average. It gets dragged by extreme values.</li>
<li><b>Median</b> = the middle value. Not bothered by extremes.</li>
<li><b>Standard deviation s</b> = typical distance from the mean. <b>IQR</b> = Q3 − Q1 = the spread of the middle 50%.</li></ul>
<h4>How a box plot is built</h4>
<ul><li>Box from Q1 to Q3, line at the median.</li>
<li>Fences: Q1 − 1.5×IQR and Q3 + 1.5×IQR. Any point beyond a fence is drawn as a dot = <b>outlier</b>.</li>
<li>Whiskers stop at the furthest point that is still inside the fences.</li></ul>
<h4>Shape words</h4>
<p><b>Symmetric</b>: both sides look alike (mean ≈ median). <b>Right-skewed</b>: long tail to the right (mean &gt; median). <b>Left-skewed</b>: long tail left (mean &lt; median). Also say if it has one peak or two.</p>
<p><b>A box plot cannot show</b> how many peaks (modes) there are. A histogram can.</p>
<h4>Correlation r</h4>
<p>r is between −1 and 1 and only measures <b>straight-line</b> association. Be careful using it if the pattern is curved, has outliers or has groups, because r can be small even when there is a strong curved relationship.</p>
<h4>Describing a comparison</h4>
<p>Always give numbers and compare centre, spread, shape and outliers: "Horizontal bars have a higher median (about 710 vs 650 MPa) and a smaller spread."</p>`,
      example: { q: 'Summary of 20 breakdown voltages: min 25.44, Q1 27.26, median 27.885, Q3 28.51, max 29.61. Any outliers?',
        steps: ['IQR = Q3 − Q1 = 28.51 − 27.26 = 1.25.', 'Lower fence = Q1 − 1.5×IQR = 27.26 − 1.5(1.25) = 25.385. Upper fence = Q3 + 1.5×IQR = 28.51 + 1.5(1.25) = 30.385.', 'Min 25.44 &gt; 25.385 and max 29.61 &lt; 30.385, so both are inside.', '<b>No outliers.</b> Whiskers run to 25.44 and 29.61.'] },
      formulas: ['IQR = Q3 − Q1', 'Outlier fences: Q1 − 1.5·IQR and Q3 + 1.5·IQR', 'Box plot cannot show number of modes; r only measures linear association'],
      questions: [
        { type: 'mcq', q: 'Cloud type (clear, liquid_cloud, ice_cloud) is which kind of variable?', opts: ['Categorical', 'Discrete numerical', 'Continuous numerical', 'Binary numerical'], a: 0, why: 'It is a set of labels, not a measurement.' },
        { type: 'mcq', q: 'A data set is right-skewed. Which is most likely?', opts: ['mean &gt; median', 'mean &lt; median', 'mean = median exactly', 'The IQR is zero'], a: 0, why: 'The long right tail pulls the mean up but barely moves the median.' },
        { type: 'mcq', q: 'Which feature can a box plot NOT show?', opts: ['The median', 'Outliers', 'The IQR', 'Whether the data has two peaks'], a: 3, why: 'Box plots compress the data to five numbers, so the number of modes is hidden. Use a histogram.' },
        { type: 'mcq', q: 'Correlation between x and y is r = 0.02. What is the safest conclusion?', opts: ['x and y are unrelated', 'There is no straight-line relationship, but a curved one could still exist', 'x causes no change in y', 'The sample is too small'], a: 1, why: 'r only measures linear association.' },
        { type: 'work', marks: 5, paper: '2023a', order: 1.1, src: 'Sem 1 2023, Q1(a)',
          q: 'The dielectric breakdown voltages of 20 epoxy resin test pieces gave: min 25.44, Q1 27.260, median 27.885, Q3 28.510, max 29.610. Would any observations be flagged as unusual in a box plot? Justify your answer, and say where the box and whiskers would be drawn.',
          hint: 'Work out the IQR first, then the two fences.',
          steps: ['IQR = 28.510 − 27.260 = 1.250.', 'Lower fence = 27.260 − 1.5×1.250 = 25.385. Upper fence = 28.510 + 1.875 = 30.385.', 'The min (25.44) is above 25.385 and the max (29.61) is below 30.385, so no point is outside the fences.', 'Box from 27.26 to 28.51 with a line at 27.885. Whiskers to 25.44 and 29.61.'],
          ans: 'No unusual observations (no outliers).' },
        { type: 'work', marks: 3, src: 'Practice',
          q: 'A sample has Q1 = 12 and Q3 = 20, with smallest value 2 and largest value 41. Is the largest value an outlier? What about the smallest?',
          steps: ['IQR = 20 − 12 = 8, so 1.5×IQR = 12.', 'Lower fence = 12 − 12 = 0. Upper fence = 20 + 12 = 32.', '41 &gt; 32, so 41 <b>is an outlier</b>. 2 &gt; 0 so the smallest value is fine.'],
          ans: '41 is an outlier; 2 is not.' },
        { type: 'work', marks: 4, paper: '2023b', order: 1.1, src: 'Sem 2 2023, Q1(a)(b)',
          q: 'Box plots of static coefficient of friction at four temperatures (22°C, 50°C, 100°C, 160°C) are shown; the 22°C box runs from about 0.06 to 0.10 with the median line near 0.085.<br>(a) State approximate values for the median and IQR at 22°C. (2 marks)<br>(b) Briefly describe the relationship between friction and temperature. (2 marks)',
          steps: ['(a) Median ≈ 0.085. IQR = Q3 − Q1 ≈ 0.10 − 0.06 = <b>0.04</b>.', '(b) The relationship is <b>non-linear</b>: median friction first decreases with temperature (22°C → 100°C) then increases again (100°C → 160°C).'], ans: 'Median ≈ 0.085, IQR ≈ 0.04; non-linear (decreases then increases).' },
        { type: 'mcq', q: 'In a box plot a correlation of r = −0.08 is quoted as proof of "no relationship", but the median clearly dips then rises across groups. What is wrong with that reasoning?', opts: ['r is never trustworthy', 'r only measures straight-line association and misses the non-linear (curved) pattern', 'The sample must be too small', 'Box plots cannot show medians'], a: 1, why: 'Exactly the 2023b Q1(c) trap: r ≈ 0 only rules out a linear trend, not a curved one.' },
        { type: 'work', marks: 3, paper: '2024a', order: 1.1, src: 'Sem 1 2024, Q1(a)(b)',
          q: 'Box plots compare the proportion of ice cleared (tenths) by Cadets vs Seafarers. For Seafarers, the box runs about 1.2 to 1.9 with median near 1.7; Cadets have a wider, lower box.<br>(a) State the approximate median and IQR for Seafarers. (2 marks)<br>(b) Briefly describe the relationship between ice cleared and experience. (2 marks)',
          steps: ['(a) Median ≈ 1.7 tenths. IQR = Q3 − Q1 ≈ 1.9 − 1.2 = <b>0.7</b> tenths.', '(b) The median proportion of ice cleared <b>increases</b> with officer experience, and the spread (IQR) <b>decreases</b> with experience (seafarers are more consistent).'], ans: 'Median ≈ 1.7, IQR ≈ 0.7 tenths; higher and less variable with more experience.' },
        { type: 'work', marks: 4, paper: '2024b', order: 1.1, src: 'Sem 2 2024, Q1',
          q: 'Box plots compare CAD-model correctness for Proficient (n=9) vs Expert (n=10) designers. Proficient: box from about 0.84 to 0.92, median around 0.87. Expert: box from about 0.91 to 1.00, median around 0.94, with no whisker on the right.<br>(a) Briefly describe the relationship between experience and correctness. (2 marks)<br>(b) State the approximate IQR for Proficient. (1 mark)<br>(c) Why is the Expert box plot missing its right-hand whisker? (1 mark)',
          steps: ['(a) Median correctness <b>increases</b> with experience; the spread (IQR) looks similar for both groups (doesn’t clearly change).', '(b) IQR ≈ 0.92 − 0.84 = <b>0.08</b>.', '(c) The <b>maximum value is 1.00, which coincides with Q3</b>, so there is no gap above the box for a whisker to be drawn.'], ans: 'Correctness rises with experience, similar spread; IQR ≈ 0.08; no whisker because the max equals Q3 (ceiling at 1.0).' }
      ] },

    /* ---------------------------------------------------------------- 2 */
    { id: 'ci', name: 'Confidence and prediction intervals for a mean', freq: 1, freqNote: 'Q1 of all 3 past papers', assigned: false,
      notation: [['μ', 'true (unknown) population mean — what you are estimating'], ['ȳ or x̄', 'sample mean (your estimate of μ)'], ['s', 'sample standard deviation'], ['n', 'sample size'], ['se', 'standard error = s/√n'], ['df', 'degrees of freedom = n − 1'], ['t*', 'critical value from the t-table (row df, column for your confidence level)'], ['α', 'significance level (e.g. 0.05 for 95% confidence)']],
      lesson:
`<p>The sample mean ȳ is only an estimate of the true mean μ. A <b>confidence interval (CI)</b> gives a range of believable values for μ.</p>
<h4>Recipe (copy this every time)</h4>
<ol><li>Write down n, ȳ, s.</li>
<li>Standard error: <b>se = s / √n</b>.</li>
<li>Degrees of freedom: <b>df = n − 1</b>.</li>
<li>Find t* in the table: row = df, column = <b>0.975 for a 95% CI</b> (0.95 for 90%, 0.995 for 99%). The column is 1 − α/2.</li>
<li>CI = <b>ȳ ± t* × se</b>.</li></ol>
<h4>What it means</h4>
<p>"We are 95% confident the true mean is between a and b." The method captures the true mean in 95% of repeated samples. It does <b>not</b> mean 95% of the data lies in the interval.</p>
<h4>Prediction interval (PI)</h4>
<p>A PI covers where <b>one new observation</b> is likely to fall: <b>ȳ ± t* × s√(1 + 1/n)</b>. It is always wider than the CI (it includes the spread of individual values), and it does not shrink to zero as n grows. This formula is <b>not on the formula sheet</b>, so put it on your A4 sheet.</p>
<h4>What makes it wider or narrower</h4>
<p>Wider: larger s, higher confidence. Narrower: larger n (width goes with 1/√n, so 4× the data halves the width).</p>
<h4>Two other shapes, same recipe</h4>
<ul><li><b>Paired / single-sample difference</b> (e.g. "increase from before to after"): treat the n <i>differences</i> as your data. ȳ and s are the mean and sd of the differences, df = n − 1. Same formula, ȳ<sub>diff</sub> ± t* × s<sub>diff</sub>/√n.</li>
<li><b>Difference of two means μ₁ − μ₂</b> (independent samples): estimate ȳ₁ − ȳ₂, se = √(s₁²/n₁ + s₂²/n₂), df = min(n₁ − 1, n₂ − 1) — the same se and df as the two-sample t-test.</li></ul>`,
      example: { q: 'n = 20, ȳ = 648, s = 84. 95% CI for the mean.',
        steps: ['se = s/√n = 84/√20 = 18.78. df = n − 1 = 19. t* (col 0.975, df 19) = 2.093.', 'Margin = t* × se = 2.093 × 18.78 = 39.3.', 'CI = ȳ ± margin = 648 ± 39.3 = <b>(608.7, 687.3) MPa</b>.'] },
      formulas: ['CI for mean: ȳ ± t* · s/√n, df = n − 1', '95% CI uses table column 0.975 (90%: 0.95, 99%: 0.995)', 'Prediction interval: ȳ ± t* · s·√(1 + 1/n)'],
      questions: [
        { type: 'mcq', q: 'Which column of the t-table do you use for a 95% confidence interval?', opts: ['0.95', '0.975', '0.99', '0.05'], a: 1, why: 'A 95% CI leaves 2.5% in each tail, so you need the 0.975 quantile.' },
        { type: 'mcq', q: 'Everything else the same, you collect 4 times as much data. The CI for the mean becomes about…', opts: ['half as wide', 'a quarter as wide', 'the same width', 'twice as wide'], a: 0, why: 'Width is proportional to 1/√n, and √4 = 2.' },
        { type: 'mcq', q: 'Compared to the 95% CI for the mean, the 95% prediction interval for a new observation is…', opts: ['narrower', 'the same', 'wider, because it includes the spread of individual values', 'wider only when n is small'], a: 2, why: 'The CI only has to pin down the mean; the PI also has to cover individual scatter around that mean.' },
        { type: 'mcq', q: 'A 95% CI for mean yield strength is (608, 688) MPa. Which statement is correct?', opts: ['95% of tensile bars have strengths in this range', 'The true mean is certainly in this range', 'We are 95% confident the true mean lies in this range', 'There is a 95% chance the next bar is in this range'], a: 2, why: 'The CI is about the mean, not about individual bars or the data.' },
        { type: 'work', marks: 3, paper: '2023a', order: 1.2, src: 'Sem 1 2023, Q1(b)',
          q: 'Using n = 20, sample mean 27.851 and standard deviation 1.057 for the breakdown voltages, construct a 95% confidence interval for the expected breakdown voltage.',
          hint: 'df = 19, column 0.975.',
          steps: ['se = 1.057/√20 = 0.2364.', 't* = 2.093 (df 19, col 0.975).', 'Margin = 2.093 × 0.2364 = 0.495.', 'CI = 27.851 ± 0.495 = (27.356, 28.346).'], ans: '(27.36, 28.35) volts (approx).' },
        { type: 'work', marks: 3, paper: '2025b', order: 1.3, src: 'Sem 2 2025, Q1(c)',
          q: '20 tensile bars printed in the vertical orientation had sample mean yield strength 648 MPa and sample standard deviation 84 MPa. Construct a 95% confidence interval for the expected yield strength.',
          steps: ['se = 84/√20 = 18.78; df = 19; t* = 2.093.', 'Margin = 2.093 × 18.78 = 39.3.', 'CI = 648 ± 39.3 = (608.7, 687.3) MPa.'], ans: '(608.7, 687.3) MPa.' },
        { type: 'work', marks: 2, paper: '2025b', order: 1.4, src: 'Sem 2 2025, Q1(d)',
          q: 'Using the same data (n = 20, mean 648, s = 84), construct a 95% PREDICTION interval for the yield strength of a new vertical bar.',
          hint: 'Replace s/√n with s√(1 + 1/n).',
          steps: ['se_pred = 84 × √(1 + 1/20) = 84 × 1.0247 = 86.08.', 'Margin = 2.093 × 86.08 = 180.2.', 'PI = 648 ± 180.2 = (467.8, 828.2) MPa.'], ans: '(467.8, 828.2) MPa. Much wider than the CI.' },
        { type: 'work', marks: 3, paper: '2025a', order: 1.7, src: 'Sem 1 2025, Q1(g)',
          q: 'The energy for crack initiation at a peak load of 4 N had n = 20, sample mean 2.9 J, sample standard deviation 2.8 J. Construct a 95% confidence interval for the expected energy.',
          steps: ['se = 2.8/√20 = 0.626; df = 19; t* = 2.093.', 'Margin = 2.093 × 0.626 = 1.31.', 'CI = 2.9 ± 1.31 = (1.59, 4.21) J.'], ans: '(1.59, 4.21) J.' },
        { type: 'work', marks: 3, src: 'Practice',
          q: 'n = 25, ȳ = 50.2, s = 4.0. Find a 99% confidence interval for the mean.',
          hint: '99% means column 0.995; df = 24.',
          steps: ['se = 4/√25 = 0.8. t* (df 24, col 0.995) = 2.797.', 'Margin = 2.797 × 0.8 = 2.24.', 'CI = 50.2 ± 2.24 = (47.96, 52.44).'], ans: '(47.96, 52.44).' },
        { type: 'work', marks: 4, paper: '2023b', order: 1.4, src: 'Sem 2 2023, Q1(d)',
          q: 'Friction tests: 22°C has n=15, ȳ=0.082, s=0.032; 50°C has n=14, ȳ=0.048, s=0.020. Construct a 95% confidence interval for the difference in mean friction between 22°C and 50°C.',
          steps: ['ȳ<sub>22</sub> − ȳ<sub>50</sub> = 0.082 − 0.048 = 0.034.', 'se = √(0.032²/15 + 0.020²/14) = 0.00984.', 'df = min(14, 13) = 13; t* (col 0.975) = 2.160. Margin = 2.160 × 0.00984 = 0.0213.', '<b>CI = 0.034 ± 0.0213 = (0.0127, 0.0553)</b>.'], ans: '0.034 ± 0.021 (i.e. about 0.013 to 0.055)' },
        { type: 'work', marks: 3, paper: '2024a', order: 1.4, src: 'Sem 1 2024, Q1(d)',
          q: 'The 18 cadets’ proportion of ice cleared increased by an average of 0.7 (tenths) with sd 0.4 (tenths) from moderate to high ice concentration (a paired comparison). Construct a 90% CI for the expected increase.',
          hint: 'This is a single-sample CI on the 18 "increase" values: df = 17.',
          steps: ['se = 0.4/√18 = 0.0943; df = 17; t* (col 0.95) = 1.740.', 'Margin = 1.740 × 0.0943 = 0.164.', '<b>CI = 0.7 ± 0.164 (tenths)</b>.'], ans: '0.7 ± 0.16 tenths' },
        { type: 'work', marks: 3, paper: '2024b', order: 2.1, src: 'Sem 2 2024, Q2(a)',
          q: 'return B (solar units willing to buy): n = 52, ȳ = 1.95, s = 2.02. Construct a 90% confidence interval for the expected number of units under return B.',
          steps: ['se = 2.02/√52 = 0.280; df = 51; t* (col 0.95) ≈ 1.675.', 'Margin = 1.675 × 0.280 = 0.469.', '<b>CI = 1.95 ± 0.469 (units)</b>.'], ans: '1.95 ± 0.47 units' }
      ] },

    /* ---------------------------------------------------------------- 3 */
    { id: 'ttest', name: 'Comparing two means (hypothesis test)', freq: 1, freqNote: 'Biggest Q1 part (5-6 marks) in all 3 past papers', assigned: false,
      notation: [['H₀', 'null hypothesis (the "no difference" claim)'], ['H₁', 'alternative hypothesis'], ['μ₁, μ₂', 'true means of the two groups'], ['ȳ₁, ȳ₂', 'sample means of the two groups'], ['s₁, s₂', 'sample standard deviations of the two groups'], ['n₁, n₂', 'sample sizes of the two groups'], ['t', 'test statistic'], ['df', 'degrees of freedom = min(n₁ − 1, n₂ − 1)'], ['P (P-value)', 'probability of a result this extreme if H₀ were true']],
      lesson:
`<p>Question: are two groups really different, or could the gap just be luck of the sample? This is the biggest single mark-earner on the exam, and it is a recipe.</p>
<h4>The 5-step recipe</h4>
<ol>
<li><b>Hypotheses.</b> H₀: μ₁ − μ₂ = 0 (no difference). H₁: μ₁ − μ₂ ≠ 0 (a difference). Use one-sided only if the question asks "is A greater than B".</li>
<li><b>Test statistic.</b> t = (ȳ₁ − ȳ₂) / √(s₁²/n₁ + s₂²/n₂).</li>
<li><b>Degrees of freedom.</b> df = min(n₁ − 1, n₂ − 1) (the formula sheet says so).</li>
<li><b>P-value bounds.</b> Look in row df. Find which two columns |t| sits between. The one-sided p is 1 − column. For a two-sided test <b>double it</b>.</li>
<li><b>Conclude in words</b> using the scale on the formula sheet.</li></ol>
<h4>Example of bracketing</h4>
<p>|t| = 2.68, df = 17. Row 17 gives 2.567 (col 0.99) and 2.898 (col 0.995). So the one-sided p is between 0.005 and 0.01 and the two-sided p is between <b>0.01 and 0.02</b>.</p>
<h4>P-value scale (formula sheet)</h4>
<ul><li>p &lt; 0.01 strong evidence against H₀</li><li>0.01 – 0.05 moderate</li><li>0.05 – 0.1 weak</li><li>&gt; 0.1 inconclusive</li></ul>
<p>Never say "H₀ is true". Say "<i>no evidence of a difference</i>" or "<i>inconclusive</i>". A p-value is the probability of seeing a result at least this extreme <b>if H₀ were true</b>.</p>
<p>Always finish with a sentence in context: "There is moderate evidence that the expected yield strength differs between print orientations."</p>
<h4>One-sample or paired version (same recipe, simpler se)</h4>
<p>If you only have one group — or one set of "before/after" differences per unit — H₀: μ = μ₀ (often 0), t = (ȳ − μ₀)/(s/√n), df = n − 1. Everything else (P-value bracketing, conclusion wording) is identical.</p>
<h4>One-sided tests</h4>
<p>The question says something directional, e.g. "is greater for the more experienced officers": H₁: μ₁ &gt; μ₂ (not ≠). The P-value is <b>not doubled</b>: bracket t between two table columns directly (watch the sign of t matches the direction in H₁).</p>`,
      example: { q: 'Group A: n=20, ȳ=648, s=84. Group B: n=18, ȳ=713, s=65. Test for a difference.',
        steps: ['H₀: μ_A = μ_B vs H₁: μ_A ≠ μ_B.', 'se = √(s₁²/n₁ + s₂²/n₂) = √(84²/20 + 65²/18) = √(352.8 + 234.5) = 24.24. t = (ȳ₁ − ȳ₂)/se = (648 − 713)/24.24 = −2.68.', 'df = min(n₁ − 1, n₂ − 1) = min(19, 17) = 17. Row 17: 2.567 (0.99), 2.898 (0.995).', 'One-sided p between 0.005 and 0.01, so two-sided p between 0.01 and 0.02: <b>moderate evidence</b> of a difference.'] },
      formulas: ['t = (ȳ₁ − ȳ₂) / √(s₁²/n₁ + s₂²/n₂), df = min(n₁−1, n₂−1)', 'Two-sided p = 2 × one-sided p. Bracket |t| between two table columns', 'p &lt;0.01 strong; 0.01-0.05 moderate; 0.05-0.1 weak; &gt;0.1 inconclusive', 'H₀: μ₁ − μ₂ = 0, H₁: μ₁ − μ₂ ≠ 0'],
      questions: [
        { type: 'mcq', q: 'df = 10 and |t| = 2.3. Which range is the two-sided p-value in?', opts: ['Below 0.01', 'Between 0.02 and 0.05', 'Between 0.05 and 0.1', 'Above 0.1'], a: 1, why: 'Row 10: 2.228 (col 0.975) and 2.764 (col 0.99). 2.3 is between, so one-sided p is between 0.01 and 0.025; doubling gives 0.02 to 0.05.' },
        { type: 'mcq', q: 'Two-sample test gives p between 0.1 and 0.2. The best conclusion is…', opts: ['The two means are equal', 'The inconclusive result gives no real evidence of a difference', 'There is moderate evidence of a difference', 'The null hypothesis is proved'], a: 1, why: 'A large p-value means the data are consistent with H₀, not that H₀ has been proved.' },
        { type: 'mcq', q: 'Samples of size 5 and 7. What df do you use for the table?', opts: ['10', '12', '4', '6'], a: 2, why: 'df = min(n₁−1, n₂−1) = min(4, 6) = 4.' },
        { type: 'mcq', q: 'What does a p-value tell you?', opts: ['The probability that H₀ is true', 'The probability of a result at least this extreme if H₀ were true', 'The probability that H₁ is true', 'The size of the difference'], a: 1, why: 'It is calculated assuming H₀ is true.' },
        { type: 'work', marks: 6, paper: '2025b', order: 1.5, src: 'Sem 2 2025, Q1(e)',
          q: 'Vertical: n = 20, ȳ = 648, s = 84. Horizontal: n = 18, ȳ = 713, s = 65 (yield strength, MPa). Do the data provide evidence of a difference in the expected yield strength between the two print orientations? State H₀ and H₁, use a test statistic to bound the P-value and state your conclusion.',
          steps: ['H₀: μ_V = μ_H, H₁: μ_V ≠ μ_H.', 'se = √(84²/20 + 65²/18) = √(352.8 + 234.7) = 24.24.', 't = (648 − 713)/24.24 = −2.68. df = min(19, 17) = 17.', 'Row 17: 2.567 (col 0.99), 2.898 (col 0.995). One-sided p is in (0.005, 0.01) so <b>two-sided P is between 0.01 and 0.02</b>.', 'Conclusion: moderate evidence that the expected yield strength differs between orientations (horizontal is higher).'],
          ans: 'P between 0.01 and 0.02: moderate evidence of a difference.' },
        { type: 'work', marks: 5, paper: '2025a', order: 1.5, src: 'Sem 1 2025, Q1(e)',
          q: 'Energy for crack initiation. Peak load 4 N: n = 20, ȳ = 2.9 J, s = 2.8 J. Peak load 6 N: n = 19, ȳ = 1.5 J, s = 2.6 J. Is there evidence of a difference in expected energy? State hypotheses, give a bound on the P-value and conclude.',
          steps: ['H₀: μ₄ = μ₆, H₁: μ₄ ≠ μ₆.', 'se = √(2.8²/20 + 2.6²/19) = √(0.392 + 0.356) = 0.865.', 't = (2.9 − 1.5)/0.865 = 1.62. df = min(19, 18) = 18.', 'Row 18: 1.330 (col 0.90), 1.734 (col 0.95). One-sided p in (0.05, 0.10), so two-sided P is between 0.10 and 0.20.', 'Inconclusive: no real evidence of a difference in expected energy between 4 N and 6 N.'],
          ans: 'P between 0.1 and 0.2: inconclusive.' },
        { type: 'work', marks: 6, paper: '2023a', order: 2.1, src: 'Sem 1 2023, Q2(a)',
          q: 'Fixation force (N) of a New suture anchor (n = 5, mean 195.5, s = 14.0) versus the Standard one (n = 7, mean 139.2, s = 62.5). Does the data provide evidence of a difference in expected fixation force? State hypotheses, bound the P-value and conclude.',
          steps: ['H₀: μ_new = μ_std, H₁: μ_new ≠ μ_std.', 'se = √(14²/5 + 62.5²/7) = √(39.2 + 558.0) = 24.44.', 't = (195.5 − 139.2)/24.44 = 2.30. df = min(4, 6) = 4.', 'Row 4: 2.132 (col 0.95), 2.776 (col 0.975). One-sided p in (0.025, 0.05); <b>two-sided P between 0.05 and 0.10</b>.', 'Weak evidence of a difference (new anchor appears stronger, but with tiny samples we cannot be sure).'],
          ans: 'P between 0.05 and 0.1: weak evidence.' },
        { type: 'work', marks: 5, paper: '2023b', order: 2.1, src: 'Sem 2 2023, Q2(a)',
          q: 'The average difference in read distance (Horizontal − Vertical) from 30 tags was 0.473 cm, sample sd 0.653 cm. Is there evidence of a difference in expected read distance between orientations? State hypotheses, bound the P-value and conclude.',
          hint: 'This is a single-sample test on the 30 paired differences, H₀: μ_diff = 0.',
          steps: ['H₀: μ = 0, H₁: μ ≠ 0 (μ = expected difference Horizontal − Vertical).', 't = (0.473 − 0)/(0.653/√30) = 0.473/0.1192 = 3.97. df = 29.', 'Row 29: P(T &gt; 3.659) = 0.0005 (col 0.9995) and P(T &gt; 4.254) = 0.0001 (col 0.9999). Since 3.659 &lt; 3.97 &lt; 4.254, the one-sided p is between 0.0001 and 0.0005, so <b>two-sided P is between 0.0002 and 0.001</b>.', 'Strong evidence against H₀: the expected read distance differs between orientations.'], ans: 'P between 0.0002 and 0.001: strong evidence of a difference.' },
        { type: 'work', marks: 6, paper: '2024a', order: 1.3, src: 'Sem 1 2024, Q1(c)',
          q: 'Cadets (n=18, ȳ=1.0, s=0.6) vs Seafarers (n=16, ȳ=1.6, s=0.5) proportion of ice cleared. Does the data provide evidence the expected proportion is <u>greater</u> for the more experienced officers? State hypotheses, bound the P-value, conclude.',
          hint: 'One-sided: H₁: μ_seafarer &gt; μ_cadet.',
          steps: ['H₀: μ_C = μ_S, H₁: μ_C &lt; μ_S (i.e. seafarers higher).', 'se = √(0.5²/16 + 0.6²/18) = 0.1887.', 't = (1.6 − 1.0)/0.1887 = 3.18 (testing ȳ_S − ȳ_C). df = min(17, 15) = 15.', 'Row 15: 2.947 (col 0.995), 3.733 (col 0.999). t = 3.18 is between → <b>one-sided P between 0.001 and 0.005</b> (no doubling, since H₁ is one-sided).', 'Strong evidence against H₀: the expected proportion of ice cleared is greater for more experienced officers.'], ans: 'P between 0.001 and 0.005: strong evidence (one-sided).' },
        { type: 'work', marks: 5, paper: '2024b', order: 2.4, src: 'Sem 2 2024, Q2(d)',
          q: 'return A: n=44, ȳ=1.60, s=1.79. return B: n=52, ȳ=1.95, s=2.02. Do the data provide evidence of a difference in expected willingness to buy between the two forms of return? State hypotheses, bound the P-value, conclude.',
          steps: ['H₀: μ_A = μ_B, H₁: μ_A ≠ μ_B.', 'se = √(1.79²/44 + 2.02²/52) = 0.389.', 't = (1.60 − 1.95)/0.389 = −0.90. df = min(43, 51) = 43.', 'Row 43 (nearby rows): P(T &gt; 0.680) ≈ 0.25, P(T &gt; 1.302) ≈ 0.10 → one-sided p in (0.10, 0.25), <b>two-sided P between 0.2 and 0.5</b>.', 'Inconclusive: no real evidence of a difference between the two return forms.'], ans: 'P between 0.2 and 0.5: inconclusive.' }
      ] },

    /* ---------------------------------------------------------------- 4 */
    { id: 'validity', name: 'Assumptions, experiment design and what can go wrong', freq: 1, freqNote: 'Short-answer marks in all 3 past papers', assigned: false,
      notation: [['n', 'sample size'], ['CLT', 'Central Limit Theorem'], ['CI', 'confidence interval'], ['PI', 'prediction interval']],
      lesson:
`<p>These are the easy "explain in a sentence or two" marks, but only if you know the standard answers.</p>
<h4>Assumptions behind CIs and t-tests</h4>
<ul><li>Observations are <b>independent</b>.</li>
<li>The data are roughly <b>normal</b> (this matters most for small n).</li></ul>
<p><b>If the data are not normal</b>: with a moderate or large sample the <b>Central Limit Theorem</b> makes the sample mean roughly normal, so CIs and t-tests <i>for means</i> are still approximately OK (unless there is extreme skew or outliers, or n is tiny). A <b>prediction interval</b> is for a single value, so there is no averaging to rescue it. It <b>is not valid</b> without normality.</p>
<h4>Experiment design</h4>
<ul><li><b>Randomise</b> which units get which treatment. That way other factors (operator, time, batch) average out, so any difference can be blamed on the treatment.</li>
<li><b>Confounding</b>: if all of A is run first then all of B, "type" is mixed up with "time order" (tool wear, warm-up, learning). Fix: randomise the run order.</li></ul>
<h4>Why a test might not be significant</h4>
<ul><li>Small sample size (not enough power).</li><li>Large variability in the data.</li><li>The true difference is small.</li></ul>`,
      example: { q: 'Why can a 95% PI be invalid when a 95% CI for the mean is fine?',
        steps: ['The CI is about an average, and averages of many values are approximately normal (CLT).', 'A PI is about one value, so it needs that single value to be normal. No CLT help.'] },
      formulas: ['Not normal + moderate n: CI/t-test for means OK by CLT; prediction interval NOT valid', 'Randomise allocation/run order to avoid confounding', 'Non-significant: small n, large variability, small true effect'],
      questions: [
        { type: 'mcq', q: 'All trials with the Standard anchor were run first, then all with the New anchor. The main problem is…', opts: ['The sample is too small', 'Anchor type is confounded with run order/time', 'The data must be non-normal', 'The t-test cannot be used'], a: 1, why: 'Any change over time (setup drift, operator learning) is mixed up with the anchor type.' },
        { type: 'mcq', q: 'The data are clearly non-normal but n = 50. Which is the most defensible?', opts: ['Both the CI for the mean and a PI are fine', 'The CI for the mean is approx. OK by the CLT but the PI is not valid', 'Neither is valid', 'Only the PI is valid'], a: 1, why: 'CLT helps averages, not individual observations.' },
        { type: 'mcq', q: 'Which is NOT a good reason for a non-significant t-test result?', opts: ['Small sample size', 'High variability', 'The null hypothesis is proved true', 'A small true difference'], a: 2, why: 'A non-significant result is not proof of H₀.' },
        { type: 'work', marks: 2, paper: '2023a', order: 2.2, src: 'Sem 1 2023, Q2(b)',
          q: 'The researcher tells you the trials with the Standard suture anchor were carried out first, then the New one. How does this affect the interpretation of the result? Suggest an improvement without increasing the number of trials.',
          steps: ['Anchor type is confounded with time/run order. A difference could be due to changes over time (e.g. machine setup, operator practice) rather than the anchor.', 'Improvement: randomise the order of the 12 trials (random allocation of anchor type to run order).'], ans: 'Confounding with run order; randomise the order.' },
        { type: 'work', marks: 1, paper: '2025a', order: 1.4, src: 'Sem 1 2025, Q1(d)',
          q: 'A researcher wants to be able to conclude that any difference in expected energy for crack initiation (4 N vs 6 N loads) is due to the peak load. How should the peak loads be allocated to the solder joints?',
          steps: ['Randomly allocate the two peak loads to the solder joints (a randomised experiment).'], ans: 'Random allocation.' },
        { type: 'work', marks: 1, paper: '2025a', order: 1.6, src: 'Sem 1 2025, Q1(f)',
          q: 'State two reasons why the result in the 4 N vs 6 N test might not have given significant evidence at the 5% level.',
          steps: ['Any two of: small sample size (low power), large variability in the data, the true difference is small.'], ans: 'e.g. small samples and high variability.' },
        { type: 'work', marks: 2, paper: '2025b', order: 1.6, src: 'Sem 2 2025, Q1(f)',
          q: 'Suppose the yield strengths are decided to be non-normal in each print orientation (n = 20 and 18). How does this affect the CI (part c), the PI (part d) and the t-test (part e)? Justify.',
          steps: ['The CI and t-test are for means. With n of about 20 the CLT gives approximately normal sample means, so they are still approximately valid (unless the data is very skewed or has extreme outliers).', 'The prediction interval is for an individual bar and relies directly on normality of the data, so it is <b>not</b> valid.'], ans: 'CI and test approx OK (CLT); PI invalid.' },
        { type: 'work', marks: 2, paper: '2023b', order: 2.2, src: 'Sem 2 2023, Q2(b)',
          q: 'In the RFID tag study, researchers already randomised the order in which tags were tested. How else should they have used randomisation? What issue does it help avoid?',
          steps: ['The <b>order of the two orientations tested on each tag</b> should also be randomised (e.g. flip a coin per tag to decide whether Horizontal or Vertical is measured first).', 'This helps avoid <b>confounding orientation with order</b> (e.g. the antenna or tag warming up, or measurement drift over the session).'], ans: 'Randomise which orientation is tested first per tag; avoids confounding orientation with order.' },
        { type: 'work', marks: 1, paper: '2024a', order: 1.5, src: 'Sem 1 2024, Q1(e)',
          q: 'A critic says the high-vs-moderate ice comparison was biased by a learning effect (cadets got better with practice by the second test). How could the study have avoided this criticism?',
          steps: ['Randomise, for each cadet, <b>which ice concentration is tested first</b> (e.g. flip a coin), so every cadet has an equal chance of meeting the moderate or high condition first — this stops practice/learning from being confounded with concentration.'], ans: 'Randomise the order of the two conditions per cadet.' },
        { type: 'work', marks: 1, paper: '2024b', order: 2.3, src: 'Sem 2 2024, Q2(c)',
          q: 'Each participant is shown only one form of return (A or B). How should participants be allocated to the two forms so a difference can be attributed to the form of return?',
          steps: ['Allocate participants to return A or B <b>at random</b> (e.g. flip a coin for each participant), so other factors average out between groups and cannot be confounded with the form of return.'], ans: 'Random allocation of participants to return A or B.' },
        { type: 'work', marks: 1, paper: '2024b', order: 2.2, src: 'Sem 2 2024, Q2(b)',
          q: 'Responses are integers (not normal) and somewhat right-skewed with no obvious outliers, n = 44 and 52. Why are the normal-based CI and test still valid here?',
          steps: ['With moderate skew and no outliers, a sample size of around 40+ is enough for the <b>Central Limit Theorem</b> to make the sampling distribution of the mean approximately normal, so inference based on the normal/t distribution is still approximately valid.'], ans: 'n ≈ 40+ with no extreme skew/outliers: CLT makes the sample mean approx normal.' },
        { type: 'work', marks: 1, paper: '2024b', order: 3.6, src: 'Sem 2 2024, Q3(f)',
          q: 'Why is the normality assumption important for a prediction interval, and why doesn’t the CLT let us relax it the way it does for a confidence interval?',
          steps: ['A PI must cover one <b>future individual observation</b>, not an average.', 'The CLT is about averages becoming normal as n grows — it says nothing about a single new observation, whose distribution is unaffected by sample size. So the PI needs the errors themselves to be normal.'], ans: 'PI covers one future value; CLT only helps averages, not individual observations.' }
      ] },

    /* ---------------------------------------------------------------- 5 */
    { id: 'regress', name: 'Linear regression: reading the output', freq: 1, freqNote: 'Q2 of all 3 past papers', assigned: false,
      notation: [['y', 'response (dependent) variable, what you are predicting'], ['x₁, x₂, …', 'explanatory (independent) variables'], ['β₀, β₁, …', 'true (unknown) model coefficients (intercept, slopes)'], ['β̂₀, β̂₁, … or "coef"', 'estimated coefficients from the fitted model'], ['ŷ', 'fitted/predicted value of y'], ['e', 'residual = y − ŷ'], ['std err', 'standard error of a coefficient estimate'], ['t', 'test statistic = coef / std err'], ['P&gt;|t|', 'two-sided p-value testing H₀: that coefficient = 0'], ['R²', 'R-squared, fraction of variation in y explained by the model'], ['n', 'number of observations'], ['p', 'number of explanatory variables'], ['df', 'residual degrees of freedom = n − (p + 1)']],
      lesson:
`<p>Regression finds the straight-line (or plane) rule that best predicts a response y from explanatory variables x₁, x₂, … The exam gives you Python output and asks you to interpret it. You never run the model.</p>
<h4>The model</h4>
<p>Mean of y = β₀ + β₁x₁ + β₂x₂ + … The fitted equation is ŷ = β̂₀ + β̂₁x₁ + … where the β̂ are the <b>coef</b> column. The <b>residual</b> for an observation is <b>e = y − ŷ</b> (actual minus predicted).</p>
<h4>How to read the table</h4>
<ul><li><b>coef</b>: estimated β̂.</li><li><b>std err</b>: standard error of β̂.</li>
<li><b>t</b> = coef / std err. <b>P&gt;|t|</b> = two-sided p-value for H₀: β = 0.</li>
<li><b>[0.025 0.975]</b>: the 95% CI for β.</li>
<li><b>R-squared</b>: fraction of variation in y explained by the model.</li>
<li><b>Df Residuals</b> = n − (p + 1), p = number of explanatory variables.</li></ul>
<h4>Interpreting a coefficient (use this template)</h4>
<p>"<i>Holding the other variables fixed</i>, a 1-unit increase in x (say the unit!) is associated with a change of β̂ units in the <i>expected</i> y (say the unit!)." Include the sign and the units; marks are lost for missing them.</p>
<h4>Confidence interval for a coefficient</h4>
<p><b>β̂ ± t* × std err</b> with df = n − (p + 1). If the table does not have your df, use the nearest row.</p>
<h4>Testing a value using the CI</h4>
<p>To test H₀: β = c: if c lies <b>outside</b> the 95% CI, the p-value is below 0.05. The further outside, the smaller the p-value.</p>`,
      example: { q: 'archard model: logW = 2.1515 + 0.7480 logS + 0.8096 logF (n = 75). Predict logW at logS = 1, logF = 0.5. Observed logW is 3.45; what is the residual?',
        steps: ['ŷ = β̂₀ + β̂₁logS + β̂₂logF = 2.1515 + 0.7480(1) + 0.8096(0.5) = 2.1515 + 0.748 + 0.4048 = 3.3043.', 'Residual = y − ŷ = 3.45 − 3.3043 = <b>0.1457</b> (the model under-predicted).'] },
      formulas: ['Fitted: ŷ = β̂₀ + β̂₁x₁ + …; residual e = y − ŷ', 'CI for β: β̂ ± t* · se(β̂), df = n − (p+1)', 'Test H₀: β=0 uses t = β̂ / se; the P&gt;|t| column is the 2-sided p', 'Interpretation: holding others fixed, 1 unit increase in x → change of β̂ (units) in expected y'],
      questions: [
        { type: 'mcq', q: 'A regression with 81 observations and 3 explanatory variables has how many residual degrees of freedom?', opts: ['81', '80', '78', '77'], a: 3, why: 'df = n − (p + 1) = 81 − 4 = 77.' },
        { type: 'mcq', q: 'In the output, the P&gt;|t| value for a coefficient tests…', opts: ['H₀: β = 1', 'H₀: β = 0 against a two-sided alternative', 'whether the model fits', 'whether the data are normal'], a: 1, why: 'Each row tests whether that variable has any (linear) effect after the other variables are in the model.' },
        { type: 'mcq', q: 'The 95% CI for a coefficient is (0.707, 0.789). Testing H₀: β = 1, the p-value is…', opts: ['bigger than 0.05', 'smaller than 0.05 since 1 is outside the CI', 'exactly 0.05', 'cannot be said'], a: 1, why: '1 lies well outside the interval so we reject at the 5% level.' },
        { type: 'mcq', q: 'Residual is…', opts: ['predicted − actual', 'actual − predicted', 'the standard error', 'the intercept'], a: 1, why: 'e = y − ŷ.' },
        { type: 'work', marks: 2, paper: '2025b', order: 2.3, src: 'Sem 2 2025, Q2(c)',
          q: 'Model: <pre>logW ~ logS + logF   (n = 75)\n             coef    std err      t     P&gt;|t|   [0.025   0.975]\nIntercept   2.1515    0.050    42.687   0.000   2.051    2.252\nlogS        0.7480    0.021    36.467   0.000   0.707    0.789\nlogF        0.8096    0.061    13.272   0.000</pre>One experiment had logS = 1, logF = 0.5 and logW = 3.45. Determine the residual.',
          steps: ['ŷ = 2.1515 + 0.7480(1) + 0.8096(0.5) = 3.3043.', 'Residual = 3.45 − 3.3043 = 0.1457.'], ans: 'Residual ≈ 0.146' },
        { type: 'work', marks: 2, paper: '2025b', order: 2.4, src: 'Sem 2 2025, Q2(d)',
          q: 'In the same model, briefly interpret the value 0.8096 in the logF row. (logF = log10 of normal force in N; logW = log10 of wear volume.)',
          steps: ['Holding sliding distance (logS) fixed, a 1 unit increase in log10 normal force is associated with an increase of 0.81 in the expected log10 wear volume.', '(Equivalent: multiplying the force by 10 multiplies wear by about 10^0.81 ≈ 6.5.)'], ans: '+0.81 in expected logW per +1 in logF, other variable fixed.' },
        { type: 'work', marks: 3, paper: '2025b', order: 2.5, src: 'Sem 2 2025, Q2(e)',
          q: 'Suppose the model assumptions are valid. Construct a 95% confidence interval for the coefficient of logF. (coef 0.8096, std err 0.061, n = 75, 2 explanatory variables.)',
          hint: 'df = 75 − 3 = 72. The table has rows 70 and 75.',
          steps: ['df = 75 − (2 + 1) = 72. Table: 1.994 (70), 1.992 (75). Use t* ≈ 1.99.', 'Margin = 1.99 × 0.061 = 0.121.', 'CI = 0.8096 ± 0.121 = (0.688, 0.931).'], ans: '(0.688, 0.931)' },
        { type: 'work', marks: 3, paper: '2025b', order: 2.6, src: 'Sem 2 2025, Q2(f)',
          q: 'Archard\'s equation says the coefficient of logS should equal one. State H₀ and H₁ to test this. What does the reported 95% CI (0.707, 0.789) for logS tell you about the P-value? What can you conclude?',
          steps: ['H₀: β_logS = 1, H₁: β_logS ≠ 1.', '1 is outside the 95% CI (0.707, 0.789), so P &lt; 0.05. It is also far outside (t ≈ (0.748 − 1)/0.021 = −12), so P is tiny.', 'Conclusion: strong evidence that the coefficient of logS is not 1 (it is below 1), so Archard\'s simple equation is not supported by these data.'], ans: 'P &lt; 0.05 (actually tiny): evidence the coefficient is not 1.' },
        { type: 'work', marks: 1, paper: '2025a', order: 2.2, src: 'Sem 1 2025, Q2(b)',
          q: 'Model Rt ~ feed + velocity + depth (Rt = roughness in μm, depth in mm, n = 81). The depth coefficient is −6.0348 (std err 2.161, P = 0.007). Briefly interpret −6.0348 with correct units.',
          steps: ['Holding feed rate and cutting velocity fixed, each extra 1 mm of depth of cut is associated with a decrease of about 6.03 μm in the expected total roughness.'], ans: '−6.03 μm per mm of depth, others fixed.' },
        { type: 'work', marks: 2, paper: '2025a', order: 2.3, src: 'Sem 1 2025, Q2(c)',
          q: 'The output gives 0.007 in the P&gt;|t| column for depth. State the null and alternative hypotheses being tested. Supposing the assumptions hold, what do you conclude?',
          steps: ['H₀: β_depth = 0 vs H₁: β_depth ≠ 0.', 'P = 0.007 &lt; 0.01: strong evidence that depth of cut has a linear association with expected roughness, after accounting for feed and velocity.'], ans: 'Strong evidence β_depth ≠ 0.' },
        { type: 'work', marks: 2, paper: '2025a', order: 2.4, src: 'Sem 1 2025, Q2(d)',
          q: 'Construct a 95% CI for the depth coefficient (coef −6.0348, std err 2.161, n = 81 observations, 3 explanatory variables).',
          steps: ['df = 81 − 4 = 77. The table has a row for 77: t* = 1.991.', 'Margin = 1.991 × 2.161 = 4.30.', 'CI = −6.0348 ± 4.30 = (−10.34, −1.73).'], ans: '(−10.34, −1.73)' },
        { type: 'work', marks: 2, paper: '2023a', order: 3.3, src: 'Sem 1 2023, Q3(c)',
          q: 'Honing model: Time ~ Vc + Pr + Pl + Pr² (Time in seconds, Vc cutting speed in m/min). The Vc coefficient is −5.6713. Briefly interpret it.',
          steps: ['Holding Pr, Pl (and the Pr² term, i.e. Pr) fixed, a 1 m/min increase in cutting speed is associated with a decrease of about 5.67 seconds in the expected time for the rough stage.'], ans: '−5.67 s per m/min, others fixed.' },
        { type: 'work', marks: 2, paper: '2023a', order: 3.4, src: 'Sem 1 2023, Q3(d)',
          q: 'The Vc coefficient is −5.6713 with std err 1.587. The model has 13 residual degrees of freedom. Construct a 90% CI.',
          hint: '90% CI → column 0.95.',
          steps: ['t* (df 13, col 0.95) = 1.771.', 'Margin = 1.771 × 1.587 = 2.81.', 'CI = −5.6713 ± 2.81 = (−8.48, −2.86).'], ans: '(−8.48, −2.86)' },
        { type: 'work', marks: 2, paper: '2023b', order: 3.1, src: 'Sem 2 2023, Q3(a)(b)',
          q: 'Hall-Petch model: Stress ~ Grain<sup>−1/2</sup>, fitted with 54 residual df, Intercept coef 446.2480.<br>(a) How many observations are in the data set? (1 mark)<br>(b) Briefly interpret 446.2480. (1 mark)',
          steps: ['(a) df = n − (p + 1) = n − 2 → <b>n = 54 + 2 = 56</b>.', '(b) As grain size d → ∞, 1/√d → 0, so the estimated expected initial yield point <b>approaches 446.25 MPa</b> (the stress with an infinitely large grain).'], ans: 'n = 56; intercept = the limiting expected stress as grain size → ∞.' },
        { type: 'work', marks: 2, paper: '2023b', order: 3.4, src: 'Sem 2 2023, Q3(d)',
          q: 'Intercept coef 446.2480, std err 10.977, df 54. Construct a 90% CI for the intercept.',
          steps: ['t* (df 54, col 0.95) = 1.674.', 'Margin = 1.674 × 10.977 = 18.37.', '<b>CI = 446.248 ± 18.37 MPa</b>.'], ans: '446.25 ± 18.37 MPa' },
        { type: 'work', marks: 2, paper: '2024a', order: 2.1, src: 'Sem 1 2024, Q2(a)(b)',
          q: 'Model: Annoyance ~ Loud + Impulsive (n=50). Loud coef 0.0612 (sone), Intercept 0.7546.<br>(a) Briefly interpret 0.0612. (1 mark)<br>(b) Briefly interpret 0.7546. (1 mark)',
          steps: ['(a) Holding impulsiveness fixed, a 1 sone increase in loudness is associated with a <b>0.0612 increase</b> in the expected annoyance score.', '(b) The estimated expected annoyance is <b>0.7546</b> when loudness = 0 sone and impulsiveness = 0 IU (the intercept, often outside the real data range).'], ans: '+0.0612 annoyance per sone (impulsiveness fixed); 0.7546 = fitted value at Loud=0, Impulsive=0.' },
        { type: 'work', marks: 2, paper: '2024a', order: 2.5, src: 'Sem 1 2024, Q2(e)(f)',
          q: 'In the same model, P&gt;|t| for the Intercept is 0.207.<br>(a) State H₀ for that row and what you conclude. (2 marks)<br>(b) Construct a 99% CI for the Loud coefficient (coef 0.0612, std err 0.004, df 47). (2 marks)',
          steps: ['(a) H₀: β₀ = 0 (the true intercept is 0). P = 0.207 &gt; 0.1: <b>inconclusive</b> — no real evidence the intercept differs from 0.', '(b) t* (df 47, col 0.995) = 2.685. Margin = 2.685 × 0.004 = 0.0107.', '<b>CI = 0.0612 ± 0.0107</b> (annoyance per sone).'], ans: 'Inconclusive for intercept; Loud coefficient CI = 0.0612 ± 0.011' },
        { type: 'work', marks: 1, paper: '2024b', order: 3.1, src: 'Sem 2 2024, Q3(a)',
          q: 'Model: Time ~ log2(Density) + log2(Retention). The Retention coefficient is −14.881. Briefly interpret it (recall log2(ab) = log2 a + log2 b).',
          steps: ['<b>Doubling</b> the CCA retention (holding density fixed) is associated with a <b>decrease of 14.881 minutes</b> in the expected time to maximum smouldering mass loss rate.'], ans: 'Doubling retention → −14.88 min expected time, density fixed.' },
        { type: 'work', marks: 2, paper: '2024b', order: 3.4, src: 'Sem 2 2024, Q3(d)',
          q: 'The log2(Retention) coefficient is −14.881 with std err 2.221, df 18. Construct a 99% CI.',
          steps: ['t* (df 18, col 0.995) = 2.878. Margin = 2.878 × 2.221 = 6.39.', '<b>CI = −14.881 ± 6.39</b>.'], ans: '−14.88 ± 6.39' }
      ] },

    /* ---------------------------------------------------------------- 6 */
    { id: 'diag', name: 'Regression diagnostics (checking assumptions)', freq: 1, freqNote: 'Q2 of all 3 past papers', assigned: false,
      notation: [['e (residual)', 'y − ŷ, the gap between the actual and fitted value'], ['ŷ (fitted value)', 'what the model predicts for that observation'], ['L-I-N-E', 'Linearity, Independence, Normality, Equal variance — the 4 assumptions'], ['Q-Q plot', 'normal quantile-quantile plot, used to check normality of residuals']],
      lesson:
`<p>Regression results are only trustworthy if four assumptions hold. Think <b>L-I-N-E</b>:</p>
<ul><li><b>L</b>inearity: the mean of y really is a straight-line function of the x's.</li>
<li><b>I</b>ndependence: errors are independent of each other.</li>
<li><b>N</b>ormality: the errors are normally distributed.</li>
<li><b>E</b>qual variance: the spread of errors is the same everywhere (constant variance).</li></ul>
<h4>The two standard plots</h4>
<p><b>Residuals vs fitted values</b> (checks L and E):</p>
<ul><li>Random cloud around 0 with an even band = good.</li>
<li>A <b>curve</b> (U-shape or arch) = linearity fails (try a quadratic term or a transformation).</li>
<li>A <b>funnel / fan</b> (spread grows with fitted value) = constant variance fails (try transforming y, e.g. log).</li></ul>
<p><b>Normal Q-Q plot of residuals</b> (checks N): points hugging the straight line = fine; S-shapes or bent ends = non-normal (skewed or heavy-tailed).</p>
<h4>Independence</h4>
<p>These two plots <b>cannot</b> check independence. You need to know how the data were collected, or plot residuals against time/order.</p>
<h4>Other plots you can suggest</h4>
<p>Histogram of residuals (check normality), residuals vs each explanatory variable (check linearity), residuals vs observation order (check independence).</p>
<h4>How bad is a violation?</h4>
<p>Non-normality matters least for coefficient inference when n is large (CLT), but it ruins prediction intervals. Non-linearity gives biased, misleading results. Non-constant variance makes standard errors, and therefore CIs and p-values, unreliable.</p>`,
      example: { q: 'Residuals vs fitted shows a fan opening to the right. Which assumption fails and what is a fix?',
        steps: ['Constant variance (the spread grows with the fitted value).', 'A common fix is to transform the response, e.g. use log(y).'] },
      formulas: ['LINE: Linearity, Independence, Normality, Equal variance', 'Residuals vs fitted: curve = non-linear; funnel = non-constant variance', 'Q-Q plot straight = normal. Independence cannot be checked from these plots'],
      questions: [
        { type: 'mcq', q: 'In the residuals-vs-fitted plot the points form a fan, narrow on the left and wide on the right. Which assumption is violated?', opts: ['Linearity', 'Normality', 'Constant variance', 'Independence'], a: 2, why: 'The spread of the residuals changes with the fitted value.' },
        { type: 'mcq', q: 'The residuals-vs-fitted plot shows a clear U-shape. Which fix is most sensible?', opts: ['Add a quadratic term', 'Remove all outliers', 'Collect fewer data', 'Use a PI instead of CI'], a: 0, why: 'The curve says the straight-line mean is wrong; a quadratic term or a transformation can capture the curvature.' },
        { type: 'mcq', q: 'Which assumption can NOT be assessed from residuals-vs-fitted and Q-Q plots?', opts: ['Linearity', 'Constant variance', 'Normality', 'Independence'], a: 3, why: 'Independence depends on how the data were collected (or needs a residual-vs-time plot).' },
        { type: 'mcq', q: 'The points on a normal Q-Q plot of residuals follow the straight line closely. This suggests…', opts: ['constant variance', 'normal errors', 'linear mean', 'independence'], a: 1, why: 'Q-Q plots check normality.' },
        { type: 'work', marks: 1, paper: '2025b', order: 2.2, src: 'Sem 2 2025, Q2(b)',
          q: 'Suppose the variance of the error term increased with the expected value of the response. Describe what you would expect to see in the plot of residuals against fitted values (a rough sketch is fine).',
          steps: ['A funnel/fan shape: residuals close to the zero line for small fitted values, spreading out more (bigger vertical scatter on both sides) as fitted values increase.'], ans: 'Fan opening to the right.' },
        { type: 'work', marks: 2, paper: '2023a', order: 3.2, src: 'Sem 1 2023, Q3(b)',
          q: 'Suggest one plot (other than residuals vs fitted values) that could be used to assess the model assumptions and briefly explain how it is interpreted.',
          steps: ['Normal Q-Q plot of the residuals: if the points fall roughly on the straight line the residuals are approximately normal; curved or S-shaped patterns or points far off the line indicate non-normality.', '(Alternatives: histogram of residuals; residuals vs order for independence.)'], ans: 'e.g. Q-Q plot: straight line means normal.' },
        { type: 'work', marks: 3, src: 'Practice',
          q: 'You fit a regression and the residual-vs-fitted plot shows a clear curve. The Q-Q plot looks fine. Which assumptions are OK / violated, and what would you do?',
          steps: ['The curve means linearity is violated (the straight-line mean is wrong).', 'The Q-Q plot looks fine so normality is OK. Constant variance cannot be judged until the curve is fixed, and independence needs the data-collection details.', 'Fix: add a quadratic term (as in the honing example) or transform variables, then re-check.'], ans: 'Linearity fails; add a quadratic or transform.' },
        { type: 'work', marks: 3, paper: '2023b', order: 3.3, src: 'Sem 2 2023, Q3(c)',
          q: 'Independence cannot be judged from residuals-vs-fitted and Q-Q plots. State the other assumptions of the linear regression model and comment on their validity: the residuals-vs-fitted plot shows a random scatter with even spread, and the Q-Q plot is close to the line but with slightly light tails.',
          steps: ['<b>Linearity</b>: no systematic trend in residuals vs fitted → appears satisfied.', '<b>Constant variance</b>: the spread of residuals looks constant across fitted values → appears satisfied.', '<b>Normality</b>: the Q-Q plot roughly follows the line → appears satisfied (the slightly light tails are a minor departure, not a concern).'], ans: 'Linearity, constant variance and normality all appear satisfied.' },
        { type: 'work', marks: 3, paper: '2024a', order: 2.3, src: 'Sem 1 2024, Q2(c)(d)',
          q: 'Residuals vs Loudness and vs Impulsiveness are plotted. Both show roughly even scatter around 0 with no trend, except the spread of residuals is visibly smaller for Impulsiveness &gt; 1 than below 1.<br>(a) Comment on linearity and constant variance. (2 marks)<br>(b) Suggest one other diagnostic plot. (1 mark)',
          steps: ['(a) <b>Linearity</b> looks fine (no trend in either plot). <b>Constant variance looks violated</b>: the residual spread shrinks for Impulsiveness &gt; 1, so the error variance is not constant.', '(b) A <b>normal Q-Q plot of the residuals</b> (or residuals vs fitted values, or residuals vs order).'], ans: 'Linearity OK; constant variance violated (smaller spread at Impulsive>1); suggest a Q-Q plot.' },
        { type: 'work', marks: 3, paper: '2024b', order: 3.2, src: 'Sem 2 2024, Q3(b)(c)',
          q: 'In the CCA smouldering model: (b) what does model.scale = 40.832 represent? (1 mark) (c) Residuals vs fitted show no trend and constant spread; the Q-Q plot is close to a straight line. Comment on the model assumptions. (3 marks)',
          steps: ['(b) model.scale is <b>σ̂², the estimated variance of the error/noise term</b> in the model.', '(c) No trend in residuals vs fitted → <b>linearity</b> holds. Constant spread → <b>constant variance</b> holds. Q-Q plot close to the line → <b>normality</b> holds. (Independence cannot be checked from these plots.)'], ans: 'scale = estimated error variance; linearity, constant variance and normality all look satisfied.' }
      ] },

    /* ---------------------------------------------------------------- 7 */
    { id: 'predict', name: 'Predictions from a regression', freq: 0.67, freqNote: 'Q2 in 2 of 3 past papers', assigned: false,
      notation: [['ŷ / "mean"', 'point prediction (fitted value) from the regression equation'], ['mean_ci_lower/upper', 'confidence interval for the average response (CI)'], ['obs_ci_lower/upper', 'prediction interval for one new observation (PI)'], ['mean_se', 'standard error of the mean prediction']],
      lesson:
`<p>Once you have a fitted equation you can predict y for new x values. Python gives two intervals and the exam asks which one is which and whether it is still valid.</p>
<h4>Point prediction</h4>
<p>Plug x into ŷ = β̂₀ + β̂₁x₁ + … In the Python output this is the <b>mean</b> column. (You can also work it out as the midpoint of <i>mean_ci_lower</i> and <i>mean_ci_upper</i>.)</p>
<h4>Two different intervals</h4>
<table class="t"><tr><th></th><th>mean_ci (CI)</th><th>obs_ci (PI)</th></tr>
<tr><td>Is about</td><td>the <b>average</b> y for all units with these x's</td><td>one <b>new</b> observation</td></tr>
<tr><td>Width</td><td>narrow</td><td>wider (adds individual scatter)</td></tr>
<tr><td>If errors not normal but n large</td><td>approx. valid (CLT)</td><td><b>not valid</b></td></tr></table>
<p>Both intervals are centred on the same predicted mean.</p>
<h4>Warning: extrapolation</h4>
<p>Predicting for x-values outside the range of your data is unreliable.</p>`,
      example: { q: 'Model: Rt = 26.47 + 40.20 feed − 0.0709 velocity − 6.035 depth. Predict at feed 0.2, velocity 100, depth 0.6.',
        steps: ['ŷ = β̂₀ + β̂₁feed + β̂₂velocity + β̂₃depth = 26.47 + 40.20(0.2) − 0.0709(100) − 6.035(0.6) = 26.47 + 8.04 − 7.09 − 3.62 = 23.8.'] },
      formulas: ['Prediction: plug x into fitted equation = "mean" column', 'mean_ci = CI for average response (narrow); obs_ci = PI for one new observation (wider)', 'Non-normal errors: mean_ci OK (large n, CLT), obs_ci invalid'],
      questions: [
        { type: 'mcq', q: 'You want the plausible range for the AVERAGE roughness of ALL parts machined with given settings. Which column pair do you use?', opts: ['mean_ci_lower / upper', 'obs_ci_lower / upper', 'mean_se', 'Either one'], a: 0, why: 'The mean_ci is about the average response. The obs_ci is for a single new part.' },
        { type: 'mcq', q: 'Which statement is true about the two intervals at the same x?', opts: ['The PI (obs) is wider and has the same centre', 'The CI (mean) is wider', 'They have different centres', 'They are always identical'], a: 0, why: 'Same predicted value, but the PI adds extra width for individual scatter.' },
        { type: 'work', marks: 3, paper: '2025a', order: 2.5, src: 'Sem 1 2025, Q2(e)',
          q: 'A prediction at feed 0.2, velocity 100, depth 0.6 gave: <pre>mean_se   mean_ci_lower  mean_ci_upper  obs_ci_lower  obs_ci_upper\n0.6717    22.4586        25.1338        15.7802       31.8122</pre>(The "mean" value is missing.) You then decide normality of the errors is violated but the other assumptions hold; n = 81.<br>(i) What value belongs under "mean"?<br>(ii) Is the inference from mean_ci still valid? Justify.<br>(iii) Is the inference from obs_ci still valid? Justify.',
          steps: ['(i) The midpoint of the mean CI: (22.4586 + 25.1338)/2 ≈ <b>23.80</b> (also (15.7802 + 31.8122)/2).', '(ii) Yes, approximately valid: with n = 81 the CLT makes the estimated mean (and coefficient estimates) approximately normal, so inference about the average response is still reasonable.', '(iii) No. The prediction interval is for a single observation and depends directly on the errors being normal; there is no averaging.'], ans: '(i) 23.80; (ii) approx valid by CLT; (iii) invalid.' },
        { type: 'work', marks: 2, src: 'Practice',
          q: 'Using logW = 2.1515 + 0.7480 logS + 0.8096 logF, predict the expected logW for logS = 1.2 and logF = 0.4.',
          steps: ['2.1515 + 0.7480(1.2) + 0.8096(0.4) = 2.1515 + 0.8976 + 0.3238 = 3.373.'], ans: '≈ 3.373' },
        { type: 'work', marks: 3, paper: '2023b', order: 3.5, src: 'Sem 2 2023, Q3(e)',
          q: 'Hall-Petch model: Intercept 446.2480, slope (Grain⁻¹ᐟ²) 58.3907, model.scale (σ̂²) 723.266. For Grain = 0.03 mm: mean = 776.079 to 790.655 is the 95% CI for the mean, and mean_se = 3.635. Determine a 95% prediction interval for the initial yield point at this grain size.',
          hint: 'PI uses se_pred = √(σ̂² + mean_se²), not just mean_se.',
          steps: ['Point prediction: 446.2480 + 58.3907/√0.03 = <b>783.37 MPa</b> (midpoint of the given mean CI too).', 'se_pred = √(723.266 + 3.635²) = √(723.266 + 13.21) = 27.14.', 't* (df 54, col 0.975) = 2.005. Margin = 2.005 × 27.14 = 54.4.', '<b>PI = 783.37 ± 54.4 MPa</b>.'], ans: '783.37 ± 54.4 MPa' },
        { type: 'work', marks: 2, paper: '2024a', order: 2.7, src: 'Sem 1 2024, Q2(g)',
          q: 'Model: Annoyance = 0.7546 + 0.0612 Loud + 1.3737 Impulsive (df 47). At Loud=70, Impulsive=0.9, mean_se = 0.1222. Determine a 95% CONFIDENCE interval (not prediction) for the expected annoyance.',
          steps: ['Point estimate: 0.7546 + 0.0612(70) + 1.3737(0.9) = <b>6.275</b>.', 't* (df 47, col 0.975) = 2.012. Margin = 2.012 × 0.1222 = 0.246.', '<b>CI = 6.275 ± 0.246</b> (this is narrower than a PI would be, since it is only about the average annoyance, not one new sample).'], ans: '6.275 ± 0.246' },
        { type: 'work', marks: 2, paper: '2024b', order: 3.5, src: 'Sem 2 2024, Q3(e)',
          q: 'Model: Time = −121.876 + 18.141 log₂(Density) − 14.881 log₂(Retention), σ̂² = 40.832, df 18. At Density=500, Retention=1.0, mean_se = 1.622. Determine a 95% PREDICTION interval for the time to maximum smouldering mass loss rate.',
          steps: ['log₂(500) = 8.966, log₂(1.0) = 0. Mean = −121.876 + 18.141(8.966) − 14.881(0) = <b>40.77 min</b>.', 'se_pred = √(40.832 + 1.622²) = √(43.46) = 6.59.', 't* (df 18, col 0.975) = 2.101. Margin = 2.101 × 6.59 = 13.85.', '<b>PI = 40.77 ± 13.85 min</b>.'], ans: '40.77 ± 13.85 minutes' }
      ] },

    /* ---------------------------------------------------------------- 8 */
    { id: 'estim', name: 'Estimators: bias, variance and MSE', freq: 1, freqNote: 'Q3 of all 3 past papers (the hardest-looking, but a pattern)', assigned: false,
      notation: [['θ', 'the true (unknown) parameter you are estimating'], ['θ̂ ("theta hat")', 'the estimator — a formula built from the data'], ['E(·)', 'expectation (the average over all possible samples)'], ['bias(θ̂)', 'E(θ̂) − θ'], ['Var(θ̂)', 'variance of the estimator'], ['MSE', 'mean squared error = bias² + Var(θ̂)'], ['c', 'a constant you are often asked to solve for'], ['Xᵢ, Yᵢ, Tᵢ', 'the i-th observation in the random sample']],
      lesson:
`<p>An <b>estimator</b> is a formula that turns data into a guess for an unknown parameter θ. Since the data are random, the estimate θ̂ is a random variable too. We judge estimators by how close they tend to be to θ.</p>
<h4>Three quantities</h4>
<ul><li><b>Bias</b> = E(θ̂) − θ. If it is 0 the estimator is <b>unbiased</b> (correct on average).</li>
<li><b>Variance</b> Var(θ̂) = how much θ̂ jumps around.</li>
<li><b>MSE</b> = bias² + Var(θ̂). Smaller is better. If unbiased, <b>MSE = Var</b>.</li></ul>
<h4>Rules you need (all but the first need independence)</h4>
<ul><li>E(aX + bY) = aE(X) + bE(Y) (always).</li>
<li>Var(aX + bY) = a²Var(X) + b²Var(Y) (if independent).</li>
<li>For an iid sample: E(X̄) = μ, Var(X̄) = σ²/n.</li></ul>
<h4>Common question shapes</h4>
<ol><li><b>"Show θ̂ is unbiased"</b>: compute E(θ̂), simplify, show it equals θ.</li>
<li><b>"Find the constant c so θ̂ is unbiased"</b>: compute E(θ̂) in terms of c, set it equal to θ and solve.</li>
<li><b>"Find the MSE"</b>: (bias is 0) so work out Var(θ̂) using the variance rule.</li>
<li><b>"Which n, m is best"</b>: write the MSE as a function of n and m, substitute m = total − n, then try each whole number.</li>
<li><b>"Find E(T)"</b> from a pdf: E(T) = ∫ t f(t) dt. Use the formula: ∫₀^∞ t·e^(−at/λ) dt = λ²/a².</li>
<li><b>"Build a CI for the parameter from the estimator"</b> (when θ̂ is unbiased with a known variance, but not simply a sample mean): use the CLT shortcut <b>(θ̂ − θ)/se(θ̂) ≈ N(0,1)</b>, write 0.95 ≈ P(−1.96 ≤ (θ̂−θ)/se ≤ 1.96), then rearrange for θ. If se(θ̂) involves θ itself (e.g. se = θ/√n), the algebra ends with θ between <b>θ̂/(1 + 1.96/√n)</b> and <b>θ̂/(1 − 1.96/√n)</b> — expect to flip an inequality when you divide by a negative or invert.</li></ol>`,
      example: { q: 'X₁,…,Xₙ iid with mean μ and variance σ². Show X̄ is unbiased for μ and find its MSE.',
        steps: ['E(X̄) = (1/n)ΣE(Xᵢ) = (1/n)(nμ) = μ so it is unbiased.', 'Var(X̄) = (1/n²)ΣVar(Xᵢ) = σ²/n. Unbiased so MSE = σ²/n.'] },
      formulas: ['bias = E(θ̂) − θ; MSE = bias² + Var(θ̂)', 'E(aX+bY) = aEX + bEY; independent: Var(aX+bY) = a²VarX + b²VarY', 'iid: E(X̄) = μ, Var(X̄) = σ²/n', '∫₀^∞ t e^(−at/λ) dt = λ²/a²;  ∫₀^∞ u e^(−u) du = 1'],
      questions: [
        { type: 'mcq', q: 'An estimator has bias 0.5 and variance 0.04. Its MSE is…', opts: ['0.29', '0.54', '0.04', '0.25'], a: 0, why: 'MSE = bias² + Var = 0.25 + 0.04 = 0.29.' },
        { type: 'mcq', q: 'X and Y are independent, Var(X) = 1 and Var(Y) = 2. What is Var(2X + 3Y)?', opts: ['8', '22', '13', '20'], a: 1, why: '2²·1 + 3²·2 = 4 + 18 = 22. Coefficients get squared.' },
        { type: 'mcq', q: 'θ̂ is unbiased for θ means…', opts: ['Var(θ̂) = 0', 'E(θ̂) = θ', 'θ̂ = θ every time', 'MSE is large'], a: 1, why: 'Unbiased = correct on average.' },
        { type: 'work', marks: 3, paper: '2025b', order: 3.1, src: 'Sem 2 2025, Q3(a)',
          q: 'The lifetime of a sensor has pdf f(t) = 6λ⁻¹e^(−2t/λ) − 6λ⁻¹e^(−3t/λ), t ≥ 0. Show that E(T) = (5/6)λ. You may use ∫₀^∞ u e^(−u) du = 1.',
          hint: 'Split into two integrals and use the substitution u = at/λ.',
          steps: ['E(T) = ∫₀^∞ t f(t) dt = (6/λ)[∫ t e^(−2t/λ) dt − ∫ t e^(−3t/λ) dt].', 'For a > 0, with u = at/λ (t = λu/a, dt = λ/a du): ∫₀^∞ t e^(−at/λ) dt = (λ/a)²∫ u e^(−u) du = λ²/a².', 'So E(T) = (6/λ)(λ²/4 − λ²/9) = 6λ(1/4 − 1/9) = 6λ(5/36) = (5/6)λ. ✓'], ans: 'E(T) = 5λ/6' },
        { type: 'work', marks: 3, paper: '2025b', order: 3.2, src: 'Sem 2 2025, Q3(b)',
          q: 'T₁,…,Tₙ is a random sample from that distribution (E T = 5λ/6). Find the constant c such that λ̂_c = (c/n)ΣTᵢ is an unbiased estimator of λ.',
          steps: ['E(λ̂_c) = (c/n)·n·E(T) = c·(5λ/6).', 'Unbiased: c·5λ/6 = λ, so c = 6/5.'], ans: 'c = 6/5' },
        { type: 'work', marks: 3, paper: '2025b', order: 3.3, src: 'Sem 2 2025, Q3(c)',
          q: 'Given Var(Tᵢ) = (13/36)λ², determine the MSE of λ̂_c (use c = 6/5).',
          steps: ['Unbiased so bias = 0 and MSE = Var(λ̂_c).', 'Var(λ̂_c) = (c/n)² · n · Var(T) = c²Var(T)/n = (36/25)(13/36)λ²/n = 13λ²/(25n).'], ans: 'MSE = 13λ²/(25n)' },
        { type: 'work', marks: 2, paper: '2025a', order: 3.1, src: 'Sem 1 2025, Q3(a)',
          q: 'X₁,…,Xₙ is a random sample from N(α + β, 1) and Y₁,…,Y_m is an independent random sample from N(α − β, 4). Show that α̂ = (1/2n)ΣXᵢ + (1/2m)ΣYᵢ is an unbiased estimator of α.',
          steps: ['E(α̂) = (1/2n)(n)(α + β) + (1/2m)(m)(α − β) = (α + β)/2 + (α − β)/2 = α. ✓'], ans: 'E(α̂) = α' },
        { type: 'work', marks: 4, paper: '2025a', order: 3.2, src: 'Sem 1 2025, Q3(b)',
          q: 'In the same set-up you have only 9 observations in total (n + m = 9). Find the n and m that give the best estimator in terms of MSE.',
          hint: 'The estimator is unbiased, so MSE = variance. Write Var in terms of n and m.',
          steps: ['Var(α̂) = (1/4n²)(n·1) + (1/4m²)(m·4) = 1/(4n) + 1/m.', 'With m = 9 − n: g(n) = 1/(4n) + 1/(9 − n). Try n = 1…8: 0.375, 0.268, <b>0.250</b>, 0.2625, 0.30, …', 'Minimum at n = 3 (so m = 6), MSE = 0.25.'], ans: 'n = 3, m = 6 (MSE = 0.25).' },
        { type: 'work', marks: 3, paper: '2023a', order: 4.1, src: 'Sem 1 2023, Q4(a)',
          q: 'Yᵢ ~ N(βxᵢ, xᵢ²) independent (xᵢ > 0 known). The estimator is β̂ = n⁻¹ΣYᵢ/xᵢ. Determine E(β̂). Is it unbiased?',
          steps: ['E(Yᵢ/xᵢ) = βxᵢ/xᵢ = β.', 'E(β̂) = n⁻¹·nβ = β. So β̂ <b>is unbiased</b>.'], ans: 'E(β̂) = β; unbiased.' },
        { type: 'work', marks: 3, paper: '2023a', order: 4.2, src: 'Sem 1 2023, Q4(b)',
          q: 'For the same estimator, determine the standard error of β̂.',
          steps: ['Var(Yᵢ/xᵢ) = Var(Yᵢ)/xᵢ² = xᵢ²/xᵢ² = 1.', 'Var(β̂) = n⁻²·n·1 = 1/n.', 'se(β̂) = 1/√n.'], ans: 'se = 1/√n' },
        { type: 'work', marks: 1, paper: '2023a', order: 4.3, src: 'Sem 1 2023, Q4(c)',
          q: 'What is the distribution of β̂ (same set-up)?',
          steps: ['β̂ is a linear combination of independent normal random variables, so it is normal: β̂ ~ N(β, 1/n).'], ans: 'N(β, 1/n)' },
        { type: 'work', marks: 9, paper: '2023b', order: 4.1, src: 'Sem 2 2023, Q4',
          q: 'File size pdf f(y;λ) = 3λ³(y+λ)⁻⁴, y ≥ 0. Y₁,…,Yₙ iid; estimator λ̂_c = (c/n)ΣYᵢ.<br>(a) Show λ̂_c is unbiased when c = 2. (5 marks)<br>(b) Given Var(Yᵢ) = ¾λ², find the c that minimises the MSE of λ̂_c. (4 marks)',
          hint: 'E(Y) = ∫₀^∞ y·3λ³(y+λ)⁻⁴ dy; split 3λ³(y+λ)⁻⁴y = 3λ³(y+λ)⁻³ − 3λ⁴(y+λ)⁻⁴ using y = (y+λ) − λ.',
          steps: ['(a) E(Y) = 3λ³∫(y+λ)⁻³dy − 3λ⁴∫(y+λ)⁻⁴dy = 3λ³·λ⁻²/2 − 3λ⁴·λ⁻³/3 = 1.5λ − λ = <b>λ/2</b>.', 'E(λ̂_c) = c·E(Y) = c·λ/2. With c = 2: E(λ̂_2) = λ. <b>Unbiased.</b>', '(b) bias(λ̂_c) = (c/2 − 1)λ. Var(λ̂_c) = c²Var(Y)/n = (3/4)c²λ²/n.', 'MSE = λ²(c²/4 − c + 1) + (3/4n)c²λ² = λ²[c²(1/4 + 3/(4n)) − c + 1], a quadratic in c.', 'Minimise: c* = 1/(2(1/4 + 3/(4n))) = <b>2n/(n+3)</b>.'], ans: 'Unbiased at c=2; MSE-minimising c* = 2n/(n+3)' },
        { type: 'work', marks: 6, paper: '2024a', order: 3.1, src: 'Sem 1 2024, Q3(a)(b)',
          q: 'Packet inter-arrival pdf f(t;b) = (1/(2b√t))exp(−√t/b), t &gt; 0. T₁,…,Tₙ iid; estimator b̂ = (1/n)Σ√Tᵢ.<br>(a) Show b̂ is unbiased for b. [Hint: ∫₀^∞ u·e⁻ᵘ du = 1.] (3 marks)<br>(b) Given E(Tᵢ) = 2b², show Var(b̂) = b²/n. (3 marks)',
          hint: 'For (a) substitute u = √t/b. For (b), √T has mean b and E[(√T)²]=E(T)=2b².',
          steps: ['(a) E(b̂) = E(√T). Substitute u = √t/b (t = b²u², dt = 2b²u du): E√T = ∫₀^∞ √t·(1/(2b√t))e^(−√t/b) dt = ∫₀^∞ (1/2b)e⁻ᵘ·2b²u du = b∫₀^∞ u e⁻ᵘ du = <b>b</b>. So E(b̂) = b: unbiased.', '(b) Let W = √T. Var(W) = E(W²) − (EW)² = E(T) − b² = 2b² − b² = b².', 'Var(b̂) = Var((1/n)ΣWᵢ) = (1/n²)·n·Var(W) = Var(W)/n = <b>b²/n</b>.'], ans: 'E(b̂)=b (unbiased); Var(b̂) = b²/n' },
        { type: 'work', marks: 4, paper: '2024a', order: 3.3, src: 'Sem 1 2024, Q3(c)',
          q: 'Using Var(b̂) = b²/n from the previous part, apply the CLT to b̂ to construct an approximate 95% CI for b.',
          hint: 'se(b̂) = b/√n depends on the unknown b itself — solve the inequality for b rather than just writing b̂ ± 1.96se.',
          steps: ['By the CLT, (b̂ − b)/(b/√n) ≈ N(0,1), so 0.95 ≈ P(−1.96 ≤ (b̂−b)√n/b ≤ 1.96).', 'Rearrange: −1.96/√n ≤ b̂/b − 1 ≤ 1.96/√n → 1 − 1.96/√n ≤ b̂/b ≤ 1 + 1.96/√n.', 'Flip (take reciprocals, all terms positive) and multiply by b̂:', '<b>95% CI for b: [ b̂/(1 + 1.96/√n), b̂/(1 − 1.96/√n) ]</b>.'], ans: '[b̂/(1+1.96/√n), b̂/(1−1.96/√n)]' },
        { type: 'work', marks: 6, paper: '2024b', order: 4.1, src: 'Sem 2 2024, Q4',
          q: 'Y₁,…,Yₙ independent with E(Yᵢ) = μ, Var(Yᵢ) = 1/xᵢ (xᵢ &gt; 0 known constants). Estimator μ̂ = (1/c(x))Σxᵢ Yᵢ.<br>(a) Find c(x₁,…,xₙ) so μ̂ is unbiased. (3 marks)<br>(b) Find the MSE of μ̂. (3 marks)',
          hint: 'E(Σxᵢ Yᵢ) = μΣxᵢ. For the variance, Var(xᵢYᵢ) = xᵢ²Var(Yᵢ) = xᵢ²/xᵢ = xᵢ.',
          steps: ['(a) E(μ̂) = (1/c)Σxᵢ E(Yᵢ) = (μ/c)Σxᵢ. Unbiased needs this to equal μ, so <b>c(x) = Σxᵢ</b>.', '(b) Unbiased, so MSE = Var(μ̂) = (1/C²)Σxᵢ²Var(Yᵢ) = (1/C²)Σxᵢ²(1/xᵢ) = (1/C²)Σxᵢ = C/C² = <b>1/Σxᵢ</b>.'], ans: 'c = Σxᵢ; MSE(μ̂) = 1/Σxᵢ' }
      ] },

    /* ---------------------------------------------------------------- 9 */
    { id: 'contrv', name: 'Continuous random variables (pdf, CDF, expectation)', freq: 0.33, freqNote: 'Appears inside Q3 estimator questions', assigned: true,
      assignedNote: 'Problem Set Q2 covers pdf/CDF/quantile/expectation, so lower priority.',
      notation: [['X', 'a continuous random variable'], ['f(x)', 'probability density function (pdf)'], ['F(x)', 'cumulative distribution function (CDF) = P(X ≤ x)'], ['E(X)', 'expectation (mean) of X'], ['Var(X)', 'variance of X'], ['q', 'a quantile (the x-value with P(X ≤ x) = given probability)']],
      lesson:
`<p>A continuous random variable X is described by its <b>pdf</b> f(x). It never goes negative and the total area under it is 1.</p>
<ul><li><b>Probability</b>: P(a &lt; X &lt; b) = ∫ₐᵇ f(x) dx.</li>
<li><b>CDF</b>: F(x) = P(X ≤ x) = ∫₋∞ˣ f(u) du. Differentiate F to get f back.</li>
<li><b>Expectation</b>: E(X) = ∫ x f(x) dx. For a function: E g(X) = ∫ g(x) f(x) dx.</li>
<li><b>Variance</b>: Var(X) = E(X²) − (EX)².</li>
<li><b>Quantile</b> (the value q with P(X ≤ q) = p): solve F(q) = p for q.</li></ul>
<p>Tip: P(X &gt; t) = 1 − F(t). Integrals over [0, ∞) of exponentials are the favourite.</p>`,
      example: { q: 'f(x) = 3x² on [0,1]. Find F, E(X) and the median.',
        steps: ['F(x) = ∫f(u)du = ∫₀ˣ 3u² du = x³ for 0 ≤ x ≤ 1.', 'E(X) = ∫x f(x) dx = ∫₀¹ x·3x² dx = 3/4.', 'Median: solve F(x) = 0.5 → x³ = 0.5 so x = 0.794.'] },
      formulas: ['F(x) = ∫ f; P(X&gt;t) = 1 − F(t)', 'E g(X) = ∫ g(x) f(x) dx; Var X = E X² − (E X)²', 'Quantile: solve F(q) = p'],
      questions: [
        { type: 'mcq', q: 'To get P(X &gt; 5) from the CDF you compute…', opts: ['F(5)', '1 − F(5)', 'F(5) − 1', 'f(5)'], a: 1, why: 'Upper tail = 1 minus lower tail.' },
        { type: 'mcq', q: 'Which of these is a valid pdf on [0, 1]?', opts: ['f(x) = 2x', 'f(x) = x', 'f(x) = 3x²−1', 'f(x) = −x'], a: 0, why: 'It must be ≥ 0 and integrate to 1. ∫₀¹ 2x dx = 1.' },
        { type: 'work', marks: 5, src: 'Practice',
          q: 'f(x) = 3x² for 0 ≤ x ≤ 1. Find (a) F(x) and P(X &gt; 0.5), (b) E(X), (c) Var(X), (d) the median.',
          steps: ['(a) F(x) = x³. P(X&gt;0.5) = 1 − 0.125 = 0.875.', '(b) E(X) = ∫₀¹ 3x³ dx = 3/4.', '(c) E(X²) = ∫₀¹ 3x⁴ dx = 3/5. Var = 3/5 − 9/16 = 0.0375.', '(d) x³ = 0.5 so median = 0.5^(1/3) = 0.794.'], ans: '0.875; 0.75; 0.0375; 0.794' },
        { type: 'work', marks: 4, src: 'Practice',
          q: 'T has pdf f(t) = 0.5e^(−0.5t), t ≥ 0. Find F(t), P(T &gt; 3), the 90% quantile and E(T).',
          steps: ['F(t) = 1 − e^(−0.5t).', 'P(T&gt;3) = e^(−1.5) = 0.223.', '1 − e^(−0.5q) = 0.9 → q = −ln(0.1)/0.5 = 4.61.', 'E(T) = 1/0.5 = 2.'], ans: '0.223; 4.61; 2' }
      ] },

    /* ---------------------------------------------------------------- 10 */
    { id: 'sums', name: 'Sums of random variables and the CLT', freq: 0.15, freqNote: 'Rarely tested directly, but the rules are used in estimator questions', assigned: true,
      assignedNote: 'Problem Set Q3 covers this, so lower priority.',
      notation: [['Xᵢ', 'the i-th random variable in a sum or sample'], ['aᵢ', 'a constant multiplying Xᵢ'], ['S', 'a sum of random variables, S = ΣaᵢXᵢ'], ['X̄', 'sample mean'], ['σ', 'population standard deviation'], ['z', 'standardised value, z = (x − mean)/sd'], ['CLT', 'Central Limit Theorem']],
      lesson:
`<p>These are the rules that make Topic 8 (estimators) work.</p>
<ul><li>E(Σaᵢ Xᵢ) = Σ aᵢ E(Xᵢ).</li>
<li>If independent: Var(Σaᵢ Xᵢ) = Σ aᵢ² Var(Xᵢ), then sd = √Var.</li>
<li>Sample mean of n iid values: mean μ and sd σ/√n.</li>
<li>Sums of independent normals are normal.</li>
<li><b>Central Limit Theorem</b>: for large n, X̄ (or a sum) is approximately normal even if the X's are not.</li></ul>
<h4>Normal probabilities with the exam table</h4>
<p>You are given quantiles, not a normal table. The bottom row (∞) is the standard normal: 1.282 (p = 0.90), 1.645 (0.95), 1.960 (0.975), 2.326 (0.99). Standardise z = (x − mean)/sd and locate z between two of these.</p>`,
      example: { q: 'X₁..X₄ independent, each mean 100 and sd 10. S = ΣXᵢ. Find E(S), sd(S) and bound P(S &lt; 370).',
        steps: ['E(S) = ΣE(Xᵢ) = 4(100) = 400. Var(S) = ΣVar(Xᵢ) = 4(100) = 400 → sd(S) = √Var(S) = 20.', 'z = (x − mean)/sd = (370 − 400)/20 = −1.5. By symmetry P(S &lt; 370) = P(Z &gt; 1.5).', '1.5 lies between 1.282 (p = 0.90) and 1.645 (p = 0.95), so the probability is between 0.05 and 0.10.'] },
      formulas: ['E(Σa X) = Σa E(X); independent: Var(Σa X) = Σa² Var(X)', 'X̄: mean μ, sd σ/√n; CLT for large n', 'Normal quantiles: bottom (∞) row of t-table'],
      questions: [
        { type: 'mcq', q: 'X₁…X₉ are iid with sd 6. What is the sd of X̄?', opts: ['6', '2', '18', '0.67'], a: 1, why: 'σ/√n = 6/3 = 2.' },
        { type: 'mcq', q: 'The CLT says that, for large n…', opts: ['the data become normal', 'the sample mean is approximately normal whatever the data distribution', 'the variance is zero', 'the median equals the mean'], a: 1, why: 'It is about the distribution of the average (or sum), not of the raw data.' },
        { type: 'work', marks: 3, src: 'Practice',
          q: 'S = 3X₁ + 2X₂ with X₁, X₂ independent, E(X₁) = 5, sd(X₁) = 1, E(X₂) = 10, sd(X₂) = 2. Find E(S) and sd(S).',
          steps: ['E(S) = 3(5) + 2(10) = 35.', 'Var(S) = 9(1) + 4(4) = 25, so sd(S) = 5.'], ans: 'E = 35, sd = 5' }
      ] }
  ]
});
