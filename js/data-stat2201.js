/* STAT2201 - built from the 2023a, 2025a (Sem 1) and 2025b (Sem 2) final exams, the 2026 cover/formula page and Problem Set 2026b. */
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
    { id: '2023a', name: 'Semester 1, 2023 paper', fullMarks: 35, fullMin: 60, note: 'Parts that need a printed graph are left out. Duration assumed to be 60 min.' }
  ],
  topics: [
    /* ---------------------------------------------------------------- 1 */
    { id: 'describe', name: 'Describing data and reading plots', freq: 1, freqNote: 'Q1 of all 3 past papers', assigned: true,
      assignedNote: 'Problem Set Q1 (Unit 1) covers this, so a little less priority.',
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
        steps: ['IQR = 28.51 − 27.26 = 1.25.', 'Lower fence = 27.26 − 1.5(1.25) = 25.385. Upper fence = 28.51 + 1.5(1.25) = 30.385.', 'Min 25.44 &gt; 25.385 and max 29.61 &lt; 30.385, so both are inside.', '<b>No outliers.</b> Whiskers run to 25.44 and 29.61.'] },
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
          ans: '41 is an outlier; 2 is not.' }
      ] },

    /* ---------------------------------------------------------------- 2 */
    { id: 'ci', name: 'Confidence and prediction intervals for a mean', freq: 1, freqNote: 'Q1 of all 3 past papers', assigned: false,
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
<p>Wider: larger s, higher confidence. Narrower: larger n (width goes with 1/√n, so 4× the data halves the width).</p>`,
      example: { q: 'n = 20, ȳ = 648, s = 84. 95% CI for the mean.',
        steps: ['se = 84/√20 = 18.78. df = 19. t* (col 0.975, df 19) = 2.093.', 'Margin = 2.093 × 18.78 = 39.3.', 'CI = 648 ± 39.3 = <b>(608.7, 687.3) MPa</b>.'] },
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
          steps: ['se = 4/√25 = 0.8. t* (df 24, col 0.995) = 2.797.', 'Margin = 2.797 × 0.8 = 2.24.', 'CI = 50.2 ± 2.24 = (47.96, 52.44).'], ans: '(47.96, 52.44).' }
      ] },

    /* ---------------------------------------------------------------- 3 */
    { id: 'ttest', name: 'Comparing two means (hypothesis test)', freq: 1, freqNote: 'Biggest Q1 part (5-6 marks) in all 3 past papers', assigned: false,
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
<p>Always finish with a sentence in context: "There is moderate evidence that the expected yield strength differs between print orientations."</p>`,
      example: { q: 'Group A: n=20, ȳ=648, s=84. Group B: n=18, ȳ=713, s=65. Test for a difference.',
        steps: ['H₀: μ_A = μ_B vs H₁: μ_A ≠ μ_B.', 'se = √(84²/20 + 65²/18) = √(352.8 + 234.5) = 24.24. t = (648 − 713)/24.24 = −2.68.', 'df = min(19, 17) = 17. Row 17: 2.567 (0.99), 2.898 (0.995).', 'One-sided p between 0.005 and 0.01, so two-sided p between 0.01 and 0.02: <b>moderate evidence</b> of a difference.'] },
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
          ans: 'P between 0.05 and 0.1: weak evidence.' }
      ] },

    /* ---------------------------------------------------------------- 4 */
    { id: 'validity', name: 'Assumptions, experiment design and what can go wrong', freq: 1, freqNote: 'Short-answer marks in all 3 past papers', assigned: false,
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
          steps: ['The CI and t-test are for means. With n of about 20 the CLT gives approximately normal sample means, so they are still approximately valid (unless the data is very skewed or has extreme outliers).', 'The prediction interval is for an individual bar and relies directly on normality of the data, so it is <b>not</b> valid.'], ans: 'CI and test approx OK (CLT); PI invalid.' }
      ] },

    /* ---------------------------------------------------------------- 5 */
    { id: 'regress', name: 'Linear regression: reading the output', freq: 1, freqNote: 'Q2 of all 3 past papers', assigned: false,
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
        steps: ['ŷ = 2.1515 + 0.7480(1) + 0.8096(0.5) = 2.1515 + 0.748 + 0.4048 = 3.3043.', 'Residual = 3.45 − 3.3043 = <b>0.1457</b> (the model under-predicted).'] },
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
          steps: ['t* (df 13, col 0.95) = 1.771.', 'Margin = 1.771 × 1.587 = 2.81.', 'CI = −5.6713 ± 2.81 = (−8.48, −2.86).'], ans: '(−8.48, −2.86)' }
      ] },

    /* ---------------------------------------------------------------- 6 */
    { id: 'diag', name: 'Regression diagnostics (checking assumptions)', freq: 1, freqNote: 'Q2 of all 3 past papers', assigned: false,
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
          steps: ['The curve means linearity is violated (the straight-line mean is wrong).', 'The Q-Q plot looks fine so normality is OK. Constant variance cannot be judged until the curve is fixed, and independence needs the data-collection details.', 'Fix: add a quadratic term (as in the honing example) or transform variables, then re-check.'], ans: 'Linearity fails; add a quadratic or transform.' }
      ] },

    /* ---------------------------------------------------------------- 7 */
    { id: 'predict', name: 'Predictions from a regression', freq: 0.67, freqNote: 'Q2 in 2 of 3 past papers', assigned: false,
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
        steps: ['= 26.47 + 40.20(0.2) − 0.0709(100) − 6.035(0.6) = 26.47 + 8.04 − 7.09 − 3.62 = 23.8.'] },
      formulas: ['Prediction: plug x into fitted equation = "mean" column', 'mean_ci = CI for average response (narrow); obs_ci = PI for one new observation (wider)', 'Non-normal errors: mean_ci OK (large n, CLT), obs_ci invalid'],
      questions: [
        { type: 'mcq', q: 'You want the plausible range for the AVERAGE roughness of ALL parts machined with given settings. Which column pair do you use?', opts: ['mean_ci_lower / upper', 'obs_ci_lower / upper', 'mean_se', 'Either one'], a: 0, why: 'The mean_ci is about the average response. The obs_ci is for a single new part.' },
        { type: 'mcq', q: 'Which statement is true about the two intervals at the same x?', opts: ['The PI (obs) is wider and has the same centre', 'The CI (mean) is wider', 'They have different centres', 'They are always identical'], a: 0, why: 'Same predicted value, but the PI adds extra width for individual scatter.' },
        { type: 'work', marks: 3, paper: '2025a', order: 2.5, src: 'Sem 1 2025, Q2(e)',
          q: 'A prediction at feed 0.2, velocity 100, depth 0.6 gave: <pre>mean_se   mean_ci_lower  mean_ci_upper  obs_ci_lower  obs_ci_upper\n0.6717    22.4586        25.1338        15.7802       31.8122</pre>(The "mean" value is missing.) You then decide normality of the errors is violated but the other assumptions hold; n = 81.<br>(i) What value belongs under "mean"?<br>(ii) Is the inference from mean_ci still valid? Justify.<br>(iii) Is the inference from obs_ci still valid? Justify.',
          steps: ['(i) The midpoint of the mean CI: (22.4586 + 25.1338)/2 ≈ <b>23.80</b> (also (15.7802 + 31.8122)/2).', '(ii) Yes, approximately valid: with n = 81 the CLT makes the estimated mean (and coefficient estimates) approximately normal, so inference about the average response is still reasonable.', '(iii) No. The prediction interval is for a single observation and depends directly on the errors being normal; there is no averaging.'], ans: '(i) 23.80; (ii) approx valid by CLT; (iii) invalid.' },
        { type: 'work', marks: 2, src: 'Practice',
          q: 'Using logW = 2.1515 + 0.7480 logS + 0.8096 logF, predict the expected logW for logS = 1.2 and logF = 0.4.',
          steps: ['2.1515 + 0.7480(1.2) + 0.8096(0.4) = 2.1515 + 0.8976 + 0.3238 = 3.373.'], ans: '≈ 3.373' }
      ] },

    /* ---------------------------------------------------------------- 8 */
    { id: 'estim', name: 'Estimators: bias, variance and MSE', freq: 1, freqNote: 'Q3 of all 3 past papers (the hardest-looking, but a pattern)', assigned: false,
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
<li><b>"Find E(T)"</b> from a pdf: E(T) = ∫ t f(t) dt. Use the formula: ∫₀^∞ t·e^(−at/λ) dt = λ²/a².</li></ol>`,
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
          steps: ['β̂ is a linear combination of independent normal random variables, so it is normal: β̂ ~ N(β, 1/n).'], ans: 'N(β, 1/n)' }
      ] },

    /* ---------------------------------------------------------------- 9 */
    { id: 'contrv', name: 'Continuous random variables (pdf, CDF, expectation)', freq: 0.33, freqNote: 'Appears inside Q3 estimator questions', assigned: true,
      assignedNote: 'Problem Set Q2 covers pdf/CDF/quantile/expectation, so lower priority.',
      lesson:
`<p>A continuous random variable X is described by its <b>pdf</b> f(x). It never goes negative and the total area under it is 1.</p>
<ul><li><b>Probability</b>: P(a &lt; X &lt; b) = ∫ₐᵇ f(x) dx.</li>
<li><b>CDF</b>: F(x) = P(X ≤ x) = ∫₋∞ˣ f(u) du. Differentiate F to get f back.</li>
<li><b>Expectation</b>: E(X) = ∫ x f(x) dx. For a function: E g(X) = ∫ g(x) f(x) dx.</li>
<li><b>Variance</b>: Var(X) = E(X²) − (EX)².</li>
<li><b>Quantile</b> (the value q with P(X ≤ q) = p): solve F(q) = p for q.</li></ul>
<p>Tip: P(X &gt; t) = 1 − F(t). Integrals over [0, ∞) of exponentials are the favourite.</p>`,
      example: { q: 'f(x) = 3x² on [0,1]. Find F, E(X) and the median.',
        steps: ['F(x) = x³ for 0 ≤ x ≤ 1.', 'E(X) = ∫x·3x² dx = 3/4.', 'Median: x³ = 0.5 so x = 0.794.'] },
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
        steps: ['E(S) = 400. Var(S) = 4(100) = 400 → sd(S) = 20.', 'z = (370 − 400)/20 = −1.5. By symmetry P(S &lt; 370) = P(Z &gt; 1.5).', '1.5 lies between 1.282 (p = 0.90) and 1.645 (p = 0.95), so the probability is between 0.05 and 0.10.'] },
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
