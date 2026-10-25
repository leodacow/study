/* STAT2201 flashcards: only things that are NOT on the exam formula sheet and so must be remembered (or put on the A4 sheet). */
(function () {
  var c = DATA.course('STAT2201');
  var cards = {
    describe: [
      ['Outlier fences on a box plot', 'Q1 − 1.5×IQR and Q3 + 1.5×IQR<br>IQR = Q3 − Q1'],
      ['What can a box plot NOT show?', 'The number of peaks (modes), e.g. bimodality'],
      ['Right-skewed: mean vs median?', 'Mean &gt; median (long tail on the right)'],
      ['What does correlation r measure?', 'Only STRAIGHT-LINE association (−1 to 1). Can mislead for curves, outliers, groups']
    ],
    ci: [
      ['CI for a mean (recipe)', 'ȳ ± t* × s/√n, df = n − 1<br>95% CI: table column 0.975'],
      ['Prediction interval for ONE new observation', 'ȳ ± t* × s√(1 + 1/n)  (NOT on the formula sheet)'],
      ['Correct meaning of a 95% CI', 'We are 95% confident the TRUE MEAN lies in the interval. (Not "95% of data".)'],
      ['How does CI width change with n?', 'Width ∝ 1/√n. 4× the data halves the width']
    ],
    ttest: [
      ['Two-sample t-test: statistic and df', 't = (ȳ₁ − ȳ₂)/√(s₁²/n₁ + s₂²/n₂)<br>df = min(n₁ − 1, n₂ − 1)'],
      ['How to bound the P-value from the table', 'Find the row (df), see which two columns |t| falls between. One-sided p = 1 − column. TWO-sided: double it.'],
      ['P-value scale on the formula sheet', '&lt; 0.01 strong<br>0.01 – 0.05 moderate<br>0.05 – 0.1 weak<br>&gt; 0.1 inconclusive'],
      ['Correct wording for a large p-value', '"Inconclusive / no evidence of a difference". NEVER "H₀ is true".'],
      ['What is a P-value?', 'Probability of a result at least this extreme IF H₀ were true']
    ],
    validity: [
      ['If data are non-normal, which inference still works?', 'CIs / t-tests for MEANS: approx OK for moderate n (CLT).<br>Prediction intervals: NOT valid (need normality)'],
      ['Why randomise?', 'So other factors (time, operator, batch) average out; avoids confounding. E.g. randomise run order.'],
      ['Three reasons a test is not significant', 'Small sample size, high variability, small true effect']
    ],
    regress: [
      ['Interpretation template for a regression coefficient', 'Holding the other variables fixed, a 1-unit increase in x (units!) is associated with a change of β̂ (units!) in the expected y'],
      ['What does P&gt;|t| test in Python regression output?', 'H₀: β = 0 vs H₁: β ≠ 0 (two-sided)'],
      ['CI for a regression coefficient', 'β̂ ± t* × std err, df = n − (p + 1)'],
      ['Residual', 'e = y − ŷ (actual minus predicted)'],
      ['Test H₀: β = c using a 95% CI', 'If c is outside the 95% CI then P &lt; 0.05']
    ],
    diag: [
      ['LINE assumptions of regression', 'Linearity, Independence, Normality, Equal variance'],
      ['Residuals vs fitted: curve means…', 'Linearity fails → add a quadratic term / transform'],
      ['Residuals vs fitted: funnel/fan shape means…', 'Non-constant variance → transform y (e.g. log)'],
      ['Which plot checks normality of residuals?', 'Normal Q-Q plot (points on straight line = normal)'],
      ['Which assumption can\'t be checked with the standard residual plots?', 'Independence (need how the data were collected, or residual vs time)']
    ],
    predict: [
      ['mean_ci vs obs_ci in Python predictions', 'mean_ci: CI for the AVERAGE response (narrow)<br>obs_ci: prediction interval for ONE new observation (wider)'],
      ['If errors are non-normal (n large): which interval is still OK?', 'mean_ci approx OK (CLT); obs_ci NOT valid']
    ],
    estim: [
      ['Bias and MSE', 'bias = E(θ̂) − θ<br>MSE = bias² + Var(θ̂)'],
      ['Var(aX + bY), X and Y independent', 'a²Var(X) + b²Var(Y)  (square the coefficients!)'],
      ['Mean and variance of the sample mean', 'E(X̄) = μ, Var(X̄) = σ²/n'],
      ['A linear combination of independent normals is…', 'Normal (use E and Var rules for its parameters)'],
      ['Useful integral for exponential-type pdfs', '∫₀^∞ t e^(−at/λ) dt = λ²/a²']
    ],
    contrv: [
      ['CDF and survival probability from a pdf', 'F(x) = ∫ f<br>P(X &gt; t) = 1 − F(t)'],
      ['Variance shortcut', 'Var(X) = E(X²) − (EX)²'],
      ['Quantile from the CDF', 'Solve F(q) = p for q']
    ],
    sums: [
      ['CLT in one sentence', 'For large n the sample mean (or sum) is approx normal whatever the data distribution'],
      ['Where are normal quantiles in the exam table?', 'Bottom row (∞) of the t-table: 1.282 (0.90), 1.645 (0.95), 1.960 (0.975), 2.326 (0.99)']
    ]
  };
  c.topics.forEach(function (t) {
    t.cards = (cards[t.id] || []).map(function (p, i) { return { f: p[0], b: p[1], id: c.id + '/' + t.id + '@' + i }; });
  });
})();
