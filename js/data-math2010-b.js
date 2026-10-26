/* MATH2010 part 2: Laplace transforms. Notation as in the exam table: F(s) = L{f}, u(t − k) = Heaviside step, Q(s) = transfer function. */
var M10b = function (n, cap) { return { src: 'img/math2010/' + n, cap: cap }; };
DATA.addTopics('MATH2010', [
  /* ------------------------------------------------------------ */
  { id: 'lapbasic', name: 'Laplace transforms: using the table and inverting with partial fractions', freq: 1, freqNote: 'Inside every Laplace question on every paper', assigned: false,
    notation: [['f(t)', 'the original function of time'], ['F(s) or L{f}', 'the Laplace transform of f(t), a function of s'], ['s', 'the transform variable (plays the role of "frequency")'], ['a, α, k', 'constants that appear inside f(t) (decay rate, angular frequency, time shift)'], ['u(t − k)', 'the Heaviside unit step function, 0 before t = k and 1 after'], ['n!', 'n factorial, used in the tⁿ transform pair'], ['f⁽ⁿ⁾(t)', 'the n-th derivative of f with respect to t']],
    lesson:
`<p>The <b>Laplace transform</b> turns a hard calculus problem in t into an easy algebra problem in s. Definition: <b>F(s) = L{f(t)} = ∫₀^∞ e<sup>−st</sup> f(t) dt</b>. It is <b>linear</b>: L{a f + b g} = a F + b G.</p>
<h4>The exam gives you this table (you do not need to memorise it)</h4>
<table class="t"><tr><th>f(t)</th><th>F(s)</th></tr>
<tr><td>K</td><td>K/s</td></tr><tr><td>tⁿ</td><td>n!/sⁿ⁺¹</td></tr><tr><td>e<sup>at</sup></td><td>1/(s − a)</td></tr>
<tr><td>cos αt</td><td>s/(s² + α²)</td></tr><tr><td>sin αt</td><td>α/(s² + α²)</td></tr>
<tr><td>e<sup>at</sup> f(t)</td><td>F(s − a)  (first shifting)</td></tr>
<tr><td>f(t − k)u(t − k)</td><td>e<sup>−ks</sup> F(s)  (second shifting)</td></tr>
<tr><td>∫₀ᵗ f(τ)g(t − τ)dτ</td><td>F(s)G(s)  (convolution)</td></tr>
<tr><td>f⁽ⁿ⁾(t)</td><td>sⁿF − sⁿ⁻¹f(0) − … − f⁽ⁿ⁻¹⁾(0)</td></tr>
<tr><td>t f(t)</td><td>−F′(s)</td></tr><tr><td>f(t)/t</td><td>∫ₛ^∞ F(σ)dσ</td></tr></table>
<h4>Things NOT in the table: build them</h4>
<ul><li><b>First shifting:</b> t e<sup>at</sup> → 1/(s − a)², tⁿe<sup>at</sup> → n!/(s − a)ⁿ⁺¹, e<sup>at</sup>cos αt → (s − a)/((s − a)² + α²), e<sup>at</sup>sin αt → α/((s − a)² + α²).</li>
<li><b>Hyperbolic:</b> sinh at = (e<sup>at</sup> − e<sup>−at</sup>)/2 → a/(s² − a²); cosh at → s/(s² − a²).</li>
<li><b>Trig identities first:</b> sin A cos A = ½ sin 2A, cos²A = (1 + cos 2A)/2. Then use the table.</li></ul>
<h4>Inverting: the 4 tools</h4>
<ol><li><b>Powers:</b> 1/(s − a)ⁿ → tⁿ⁻¹e<sup>at</sup>/(n − 1)!.</li>
<li><b>Irreducible quadratic s² + α²:</b> (bs + c)/(s² + α²) → b cos αt + (c/α) sin αt.</li>
<li><b>Complete the square</b> when the quadratic has no real roots: s² − 4s + 5 = (s − 2)² + 1. Write the numerator in terms of (s − 2) and use first shifting: (s + 1)/((s − 2)² + 1) = [(s − 2) + 3]/((s − 2)² + 1) → e<sup>2t</sup>(cos t + 3 sin t).</li>
<li><b>Partial fractions</b> for products (see below).</li></ol>
<h4>Partial fractions: forms to write</h4>
<table class="t"><tr><th>Factor in denominator</th><th>Terms to write</th></tr>
<tr><td>(s − a) distinct</td><td>A/(s − a)</td></tr>
<tr><td>(s − a)²</td><td>A/(s − a) + B/(s − a)²</td></tr>
<tr><td>(s² + ps + q) irreducible</td><td>(As + B)/(s² + ps + q)</td></tr>
<tr><td>(s² + α²)² repeated</td><td>(As + B)/(s² + α²) + (Cs + D)/(s² + α²)²</td></tr></table>
<p><b>Cover-up rule</b> for a simple factor (s − a): cover it up in F(s) and substitute s = a into what is left. For the rest, multiply through by the denominator and compare coefficients (or substitute easy values of s).</p>`,
    example: { q: 'Find the inverse transform of F(s) = (s + 2)/(s(s − 1)(s − 2)).',
      steps: ['F = A/s + B/(s − 1) + C/(s − 2).', 'A (cover up s, put s = 0): 2/((−1)(−2)) = 1. B (put s = 1): 3/(1·(−1)) = −3. C (put s = 2): 4/(2·1) = 2.', '<b>f(t) = 1 − 3e<sup>t</sup> + 2e<sup>2t</sup></b>. Check: f(0) = 0, which matches F ~ 1/s² for large s (no 1/s term: A + B + C = 0).'] },
    slides: [],
    formulas: ['L{tⁿeᵃᵗ} = n!/(s − a)ⁿ⁺¹; L{eᵃᵗ cos αt} = (s − a)/((s − a)² + α²); L{eᵃᵗ sin αt} = α/((s − a)² + α²)', 'sinh at → a/(s² − a²); cosh at → s/(s² − a²)', 'L⁻¹{(bs + c)/(s² + α²)} = b cos αt + (c/α) sin αt', 'Complete the square: s² + ps + q = (s + p/2)² + (q − p²/4)', 'Partial fractions: (s − a)² → A/(s − a) + B/(s − a)²; irreducible quadratic → (As + B)/(…)'],
    cards: [
      { f: 'Inverse of 1/(s − a)ⁿ', b: 'tⁿ⁻¹e<sup>at</sup> / (n − 1)!' },
      { f: 'Inverse of (bs + c)/(s² + α²)', b: 'b cos αt + (c/α) sin αt' },
      { f: 'What to do with an irreducible quadratic like s² − 4s + 5 in the denominator', b: 'Complete the square: (s − 2)² + 1<br>Write the numerator in terms of (s − 2)<br>Use first shifting (e<sup>2t</sup> × cos/sin)' },
      { f: 'Partial fraction terms for (s − a)² in the denominator', b: 'A/(s − a) + B/(s − a)²' },
      { f: 'Partial fraction terms for an irreducible quadratic (s² + 4)', b: '(As + B)/(s² + 4)' },
      { f: 'Cover-up rule for A in A/(s − a)', b: 'Cover (s − a) in F(s), substitute s = a into the rest' },
      { f: 'L{sinh at} and L{cosh at}', b: 'a/(s² − a²) and s/(s² − a²)<br>(NOT on the table: use e<sup>±at</sup>)' },
      { f: 'First shifting theorem (how to use it for t e<sup>at</sup>, e<sup>at</sup>cos αt)', b: 'L{e<sup>at</sup> f(t)} = F(s − a): replace s by s − a in the transform of f' }
    ],
    questions: [
      { type: 'mcq', q: 'L{t e<sup>−2t</sup>} =', opts: ['1/(s + 2)', '1/(s + 2)²', '1/(s − 2)²', '2/(s + 2)²'], a: 1, why: 'L{t} = 1/s²; first shifting with a = −2 replaces s by s + 2.' },
      { type: 'mcq', q: 'L⁻¹{5/(s² + 25)} =', opts: ['cos 5t', 'sin 5t', '5 sin 5t', '(1/5) sin 5t'], a: 1, why: 'L{sin 5t} = 5/(s² + 25), exactly the given function.' },
      { type: 'mcq', q: 'L⁻¹{3s/(s² + 4)} =', opts: ['3 cos 2t', '3 sin 2t', '(3/2) sin 2t', '6 cos 2t'], a: 0, why: 'L{cos 2t} = s/(s² + 4).' },
      { type: 'mcq', q: 'The partial fraction form of F = 1/((s − 1)²(s² + 4)) is…', opts: ['A/(s − 1) + B/(s² + 4)', 'A/(s − 1) + B/(s − 1)² + (Cs + D)/(s² + 4)', 'A/(s − 1)² + B/(s² + 4)', 'A/(s − 1) + B/(s − 1)² + C/(s² + 4)'], a: 1, why: 'A repeated linear factor needs two terms; an irreducible quadratic needs (Cs + D) on top.' },
      { type: 'work', marks: 3, src: 'Workbook example', q: 'Find L{5e<sup>3t</sup> cos 2t + 4t³e<sup>−5t</sup>}.',
        steps: ['5e<sup>3t</sup> cos 2t → 5(s − 3)/((s − 3)² + 4).', '4t³e<sup>−5t</sup> → 4 · 3!/(s + 5)⁴ = 24/(s + 5)⁴.'], ans: '5(s−3)/((s−3)²+4) + 24/(s+5)⁴' },
      { type: 'work', marks: 3, src: 'Applied class sheet 4 (Q6-style)', q: 'Find L{e<sup>2t</sup> sin 3t cos 3t}.',
        steps: ['sin 3t cos 3t = ½ sin 6t.', 'L{½ sin 6t} = 3/(s² + 36); first shifting a = 2: <b>3/((s − 2)² + 36)</b>.'], ans: '3/((s−2)² + 36)' },
      { type: 'work', marks: 4, src: 'Applied class sheet 4 (Q6-style)', q: 'Find L{e<sup>2t</sup> cos²2t}.',
        steps: ['cos²2t = (1 + cos 4t)/2, so e<sup>2t</sup>cos²2t = ½e<sup>2t</sup> + ½e<sup>2t</sup>cos 4t.', 'L = 1/(2(s − 2)) + (s − 2)/(2[(s − 2)² + 16]).'], ans: '1/(2(s−2)) + (s−2)/(2((s−2)²+16))' },
      { type: 'work', marks: 3, src: 'Workbook example', q: 'Find L⁻¹{3/(s − 4)³ + 6/(s² + 9)}.',
        steps: ['3/(s − 4)³ = (3/2) · 2/(s − 4)³ → (3/2) t² e<sup>4t</sup>.', '6/(s² + 9) = 2 · 3/(s² + 9) → 2 sin 3t.'], ans: '(3/2)t²e^(4t) + 2 sin 3t' },
      { type: 'work', marks: 4, src: 'Applied class sheet 4, Q1(d)', q: 'Find L⁻¹{(s + 1)/(s² − 4s + 5)}.',
        steps: ['Complete the square: s² − 4s + 5 = (s − 2)² + 1.', 'Numerator: s + 1 = (s − 2) + 3.', '(s − 2)/((s − 2)² + 1) → e<sup>2t</sup>cos t; 3/((s − 2)² + 1) → 3e<sup>2t</sup>sin t.', '<b>f(t) = e<sup>2t</sup>(cos t + 3 sin t)</b>.'], ans: 'e^(2t)(cos t + 3 sin t)' },
      { type: 'work', marks: 5, src: 'Applied class sheet 4, Q1(e)', q: 'Find L⁻¹{(s + 2)/((s − 1)(s − 2)s)}.',
        steps: ['A/s + B/(s − 1) + C/(s − 2). Cover-up: A = 2/((−1)(−2)) = 1; B = 3/(1 · (−1)) = −3; C = 4/(2 · 1) = 2.', '<b>f(t) = 1 − 3e<sup>t</sup> + 2e<sup>2t</sup></b>.'], ans: '1 − 3e^t + 2e^(2t)' },
      { type: 'work', marks: 8, src: 'Applied class sheet 4, Q1(a)', q: 'Find L⁻¹{25/((s − 1)²(s² + 4))}.',
        hint: 'B comes from cover-up: put s = 1 into 25/(s² + 4).',
        steps: ['25/((s − 1)²(s² + 4)) = A/(s − 1) + B/(s − 1)² + (Cs + D)/(s² + 4).', 'B = 25/(1 + 4) = 5.', 'Multiply out: 25 = A(s − 1)(s² + 4) + 5(s² + 4) + (Cs + D)(s − 1)². s³ terms: 0 = A + C. s = 0: 25 = −4A + 20 + D → D = 5 + 4A. s = 2: 25 = 8A + 40 + 2C + D → with C = −A: 6A + D = −15 → 10A + 5 = −15 → A = −2, C = 2, D = −3.', 'F = −2/(s − 1) + 5/(s − 1)² + (2s − 3)/(s² + 4).', '<b>f(t) = −2e<sup>t</sup> + 5te<sup>t</sup> + 2cos 2t − (3/2) sin 2t</b>.'], ans: '−2e^t + 5te^t + 2cos 2t − (3/2) sin 2t' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'lapivp', name: 'Solving initial value problems with Laplace transforms', freq: 0.9, freqNote: 'Sem 2 2017 Q2(b), 2023 Q3, and the first step of every transfer function question', assigned: false,
    notation: [['y(t), x(t)', 'the unknown function(s) of time'], ['Y(s), X(s)', 'their Laplace transforms'], ['y(0), ẏ(0)', 'the given initial conditions'], ['R(s)', 'the Laplace transform of the forcing/right-hand side r(t)'], ['a, b, c', 'the constant coefficients of the ODE aÿ + bẏ + cy = r(t)'], ['s', 'the transform variable']],
    lesson:
`<p>An <b>initial value problem (IVP)</b> is a differential equation plus starting values. Laplace transforms handle the starting values automatically.</p>
<h4>The key rules (derivatives)</h4>
<ul><li><b>L{ẏ} = sY − y(0)</b></li><li><b>L{ÿ} = s²Y − s y(0) − ẏ(0)</b></li></ul>
<p>where Y(s) = L{y(t)}. These are the f⁽ⁿ⁾ row of the table.</p>
<h4>The 4 steps</h4>
<ol><li><b>Transform both sides</b> of the ODE. Use the rules above and L of the right-hand side.</li>
<li><b>Solve for Y(s)</b> (just algebra). For a ÿ + b ẏ + c y = r(t):
<p style="text-align:center"><b>(as² + bs + c) Y = R(s) + (as + b) y(0) + a ẏ(0)</b></p></li>
<li><b>Partial fractions</b> so every term is in the table.</li>
<li><b>Invert</b> to get y(t). <i>Check</i> y(0) and ẏ(0).</li></ol>
<h4>Systems of ODEs</h4>
<p>Transform each equation. You get two algebraic equations for X(s) and Y(s). Solve them (substitution or Cramer's rule), then invert each.</p>
<p>The characteristic polynomial (as² + bs + c) is the same one you used for eigenvalues. Its roots are the poles.</p>`,
    example: { q: '(2017 Q2b) Solve ẍ − 5ẋ + 6x = 2 with x(0) = 0, ẋ(0) = 0.',
      steps: ['Transform using L{ẍ} = s²X − sx(0) − ẋ(0) and L{ẋ} = sX − x(0): s²X − 5sX + 6X = 2/s (zero initial conditions).', 'X = 2/(s(s − 2)(s − 3)).', 'Cover-up: A (s = 0): 2/((−2)(−3)) = 1/3. B (s = 2): 2/(2 · (−1)) = −1. C (s = 3): 2/(3 · 1) = 2/3.', '<b>x(t) = 1/3 − e<sup>2t</sup> + (2/3)e<sup>3t</sup></b>. Check: x(0) = 1/3 − 1 + 2/3 = 0 ✓, ẋ(0) = −2 + 2 = 0 ✓.'] },
    slides: [M10b('sol/2017_q2b.jpg', 'Official handwritten solution, 2017 Q2(b)'), M10b('sol/2020s1_q2a.jpg', 'Official handwritten solution, Sem 1 2020 Q2 (1/2)'), M10b('sol/2020s1_q2b.jpg', 'Official handwritten solution, Sem 1 2020 Q2 (2/2)')],
    formulas: ['L{ẏ} = sY − y(0); L{ÿ} = s²Y − sy(0) − ẏ(0)', 'aÿ + bẏ + cy = r: (as² + bs + c)Y = R(s) + (as + b)y(0) + aẏ(0)', 'Steps: transform → solve for Y → partial fractions → invert → check ICs'],
    cards: [
      { f: 'Laplace transform of ẏ and ÿ', b: 'L{ẏ} = sY − y(0)<br>L{ÿ} = s²Y − s y(0) − ẏ(0)' },
      { f: 'Four steps to solve an IVP with Laplace', b: '1. Transform both sides<br>2. Solve for Y(s)<br>3. Partial fractions<br>4. Invert, then check y(0), ẏ(0)' },
      { f: 'For aÿ + bẏ + cy = r(t), what is Y(s)?', b: 'Y = [R(s) + (as + b)y(0) + aẏ(0)] / (as² + bs + c)' },
      { f: 'How to solve a SYSTEM of ODEs with Laplace', b: 'Transform each equation → 2 algebraic equations for X(s), Y(s) → solve → invert both' }
    ],
    questions: [
      { type: 'mcq', q: 'L{ÿ} for y(0) = 2 and ẏ(0) = 1 is…', opts: ['s²Y − 2s − 1', 's²Y − s − 2', 's²Y + 2s + 1', 'sY − 2'], a: 0, why: 's²Y − s·y(0) − ẏ(0) = s²Y − 2s − 1.' },
      { type: 'mcq', q: 'ÿ + 3y = 0 with y(0) = 2 and ẏ(0) = 0 gives Y(s) =', opts: ['2s/(s² + 3)', '2/(s² + 3)', '2s/(s² − 3)', '3s/(s² + 2)'], a: 0, why: '(s² + 3)Y = 2s → Y = 2s/(s² + 3); y = 2 cos(√3 t).' },
      { type: 'work', marks: 12, paper: '2017', order: 2.2, src: 'Sem 2 2017, Q2(b)', q: 'Use Laplace transforms to solve the initial value problem<br><i>ẍ(t) − 5ẋ(t) + 6x(t) = 2,  x(0) = 0,  ẋ(0) = 0</i>.',
        steps: ['L{ẍ} − 5L{ẋ} + 6L{x} = 2/s → (s² − 5s + 6)X = 2/s.', 'X = 2/(s(s − 3)(s − 2)).', 'A/s + B/(s − 3) + C/(s − 2): A = 2/((−3)(−2)) = 1/3; B = 2/(3 · 1) = 2/3; C = 2/(2 · (−1)) = −1.', 'x(t) = 1/3 + (2/3)e<sup>3t</sup> − e<sup>2t</sup>.'], ans: 'x(t) = 1/3 + (2/3)e^(3t) − e^(2t)' },
      { type: 'work', marks: 6, src: 'Applied class sheet 4, Q2(a)', q: 'Solve ẏ − 3y = −2e<sup>3t</sup> − 2e<sup>t</sup> + 4e<sup>−t</sup>, y(0) = 0.',
        steps: ['(s − 3)Y = −2/(s − 3) − 2/(s − 1) + 4/(s + 1).', 'Y = −2/(s − 3)² − 2/((s − 3)(s − 1)) + 4/((s − 3)(s + 1)).', 'Partial fractions: −2/((s − 3)(s − 1)) = −1/(s − 3) + 1/(s − 1); 4/((s − 3)(s + 1)) = 1/(s − 3) − 1/(s + 1).', 'Sum: Y = −2/(s − 3)² + 1/(s − 1) − 1/(s + 1) (the 1/(s − 3) terms cancel).', '<b>y = −2te<sup>3t</sup> + e<sup>t</sup> − e<sup>−t</sup></b>. Check y(0) = 0 ✓.'], ans: 'y = −2te^(3t) + e^t − e^(−t)' },
      { type: 'work', marks: 8, src: 'Applied class sheet 4, Q3(a)', q: 'Solve ÿ + 2ẏ − 15y = −60e<sup>−2t</sup>, y(0) = 2, ẏ(0) = 26.',
        steps: ['(s² + 2s − 15)Y = −60/(s + 2) + (s + 2)(2) + 26 = −60/(s + 2) + 2s + 30.', 's² + 2s − 15 = (s + 5)(s − 3).', 'Y = (2s + 30)/((s + 5)(s − 3)) − 60/((s + 2)(s + 5)(s − 3)).', 'First: −(5/2)/(s + 5) + (9/2)/(s − 3). Second: 4/(s + 2) − (5/2)/(s + 5) − (3/2)/(s − 3).', 'Y = 4/(s + 2) − 5/(s + 5) + 3/(s − 3).', '<b>y = 4e<sup>−2t</sup> − 5e<sup>−5t</sup> + 3e<sup>3t</sup></b>. Check: y(0) = 2 ✓, ẏ(0) = −8 + 25 + 9 = 26 ✓.'], ans: 'y = 4e^(−2t) − 5e^(−5t) + 3e^(3t)' },
      { type: 'work', marks: 6, src: 'Applied class sheet 4, Q2(d)', q: 'Solve ÿ − 6ẏ + 9y = te<sup>3t</sup>, y(0) = 1, ẏ(0) = 0.',
        steps: ['(s² − 6s + 9)Y = 1/(s − 3)² + (s − 6)(1) + 0 (using (as + b)y(0) = s − 6).', '(s − 3)²Y = 1/(s − 3)² + s − 6, so Y = 1/(s − 3)⁴ + (s − 6)/(s − 3)².', '(s − 6) = (s − 3) − 3: Y = 1/(s − 3)⁴ + 1/(s − 3) − 3/(s − 3)².', '<b>y = (t³/6 + 1 − 3t)e<sup>3t</sup></b>.'], ans: 'y = (t³/6 − 3t + 1)e^(3t)' },
      { type: 'work', marks: 5, src: 'Practice', q: 'Solve the system ẋ = y, ẏ = −x with x(0) = 1, y(0) = 0 using Laplace transforms.',
        steps: ['sX − 1 = Y and sY − 0 = −X.', 'From the second: X = −sY. Put into the first: −s²Y − 1 = Y → Y = −1/(s² + 1).', 'X = −sY = s/(s² + 1).', '<b>x = cos t, y = −sin t</b> (a circle: a centre).'], ans: 'x = cos t, y = −sin t' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'lapstep', name: 'Step functions and the second shifting theorem', freq: 0.8, freqNote: 'Sem 2 2017 Q3, Sem 1 2020 Q2, Sem 1 2021 Q2 (switching forcing)', assigned: false,
    notation: [['u(t − k)', 'the Heaviside unit step: 0 before t = k, 1 from t = k onward'], ['k', 'the time the switch happens'], ['f₁(t), f₂(t)', 'the function before and after the switch'], ['F(s)', 'the Laplace transform of f(t)'], ['r(t)', 'the forcing function (right-hand side of the ODE)']],
    lesson:
`<p>The <b>Heaviside step function</b> u(t − k) is 0 for t &lt; k and 1 for t ≥ k. It lets us write a force that switches on or off at time k.</p>
<h4>Writing a piecewise function with steps</h4>
<ul><li>A function equal to f₁(t) for t &lt; k and f₂(t) for t ≥ k is <b>f = f₁ + (f₂ − f₁) u(t − k)</b>.</li>
<li>A pulse that is 1 for a ≤ t &lt; b is <b>u(t − a) − u(t − b)</b>. For example r(t) = 1 for t &lt; 3 and 0 after is <b>1 − u(t − 3)</b>.</li></ul>
<h4>Second shifting theorem</h4>
<p><b>L{f(t − k) u(t − k)} = e<sup>−ks</sup> F(s)</b></p>
<p>The function that multiplies u(t − k) must be written in terms of (t − k). If it is not, rewrite: for example t = (t − k) + k, and t² = (t − k)² + 2k(t − k) + k².</p>
<h4>Inverse</h4>
<p>L⁻¹{e<sup>−ks</sup> F(s)} = <b>f(t − k) u(t − k)</b>: take the inverse f(t) of F, replace t by (t − k), and multiply by u(t − k). So the answer is "0 until t = k, then the shifted function".</p>
<p>Example: L{u(t − 3)} = e<sup>−3s</sup>/s. And L{t u(t − 2)}: write t = (t − 2) + 2, giving e<sup>−2s</sup>(1/s² + 2/s).</p>`,
    example: { q: '(2017 Q3) Solve ÿ + 3y = 2u(t − 5) sin(t − 5), y(0) = 0, ẏ(0) = 0.',
      steps: ['Second shifting theorem L{f(t − k)u(t − k)} = e<sup>−ks</sup>F(s), with f = sin, k = 5: L{2u(t − 5) sin(t − 5)} = 2e<sup>−5s</sup>/(s² + 1).', '(s² + 3)Y = 2e<sup>−5s</sup>/(s² + 1) → Y = 2e<sup>−5s</sup>/((s² + 1)(s² + 3)).', '1/((s² + 1)(s² + 3)) = ½[1/(s² + 1) − 1/(s² + 3)], so Y = e<sup>−5s</sup>[1/(s² + 1) − 1/(s² + 3)].', 'Invert with the shift: <b>y(t) = u(t − 5)[ sin(t − 5) − (1/√3) sin(√3(t − 5)) ]</b>.'] },
    slides: [M10b('sol/2017_q3.jpg', 'Official handwritten solution, 2017 Q3')],
    formulas: ['f = f₁ + (f₂ − f₁)u(t − k); pulse on [a, b): u(t − a) − u(t − b)', 'L{f(t − k)u(t − k)} = e^(−ks)F(s); L{u(t − k)} = e^(−ks)/s', 'L⁻¹{e^(−ks)F(s)} = f(t − k)u(t − k)', 'Write t = (t − k) + k before transforming t·u(t − k)'],
    cards: [
      { f: 'Second shifting theorem', b: 'L{f(t − k)u(t − k)} = e<sup>−ks</sup>F(s)' },
      { f: 'Inverse transform of e<sup>−ks</sup>F(s)', b: 'f(t − k) u(t − k)<br>(replace t by t − k, multiply by the step)' },
      { f: 'Write a function that is f₁ before t = k and f₂ after, using a step', b: 'f = f₁ + (f₂ − f₁)u(t − k)' },
      { f: 'Laplace transform of u(t − k)', b: 'e<sup>−ks</sup>/s' },
      { f: 'Before transforming t·u(t − k), what must you do?', b: 'Rewrite t = (t − k) + k, so the function is in terms of (t − k)' }
    ],
    questions: [
      { type: 'mcq', q: 'L{(t − 2)u(t − 2)} =', opts: ['e<sup>−2s</sup>/s', 'e<sup>−2s</sup>/s²', '1/(s²)', '2e<sup>−2s</sup>/s²'], a: 1, why: 'f(t) = t has F = 1/s²; shifting by 2 multiplies by e<sup>−2s</sup>.' },
      { type: 'mcq', q: 'r(t) = 1 for t &lt; 3 and 0 for t ≥ 3 can be written as…', opts: ['u(t − 3)', '1 − u(t − 3)', 'u(t) − u(3)', '1 + u(t − 3)'], a: 1, why: 'It starts at 1 and switches off at t = 3.' },
      { type: 'mcq', q: 'L⁻¹{e<sup>−4s</sup>/(s − 1)} =', opts: ['e<sup>t−4</sup>', 'e<sup>t</sup>u(t − 4)', 'e<sup>t−4</sup>u(t − 4)', 'e<sup>−4t</sup>'], a: 2, why: 'f(t) = e<sup>t</sup>; shifted: f(t − 4) = e<sup>t−4</sup>, times u(t − 4).' },
      { type: 'work', marks: 4, src: 'Sem 1 2020 Q2 (solutions)', q: 'Let r(t) = t for t &lt; 1 and r(t) = 1 for t ≥ 1. Write r(t) with a step function and find R(s).',
        steps: ['r = t + (1 − t)u(t − 1) = t − (t − 1)u(t − 1) (since 1 − t = −(t − 1)).', 'R(s) = 1/s² − e<sup>−s</sup>/s² = <b>(1 − e<sup>−s</sup>)/s²</b>.'], ans: 'R(s) = (1 − e^(−s))/s²' },
      { type: 'work', marks: 8, src: 'Sem 1 2020 Q2 (solutions)', q: 'Solve 2ẏ + y = r(t) with y(0) = 0 where r(t) = t for t &lt; 1 and 1 for t ≥ 1.',
        steps: ['2sY + Y = R(s) = (1 − e<sup>−s</sup>)/s² → Y = (1 − e<sup>−s</sup>)/(s²(2s + 1)).', '1/(s²(2s + 1)) = −2/s + 1/s² + 4/(2s + 1) = −2/s + 1/s² + 2/(s + ½).', 'g(t) = L⁻¹ = −2 + t + 2e<sup>−t/2</sup>.', '<b>y(t) = g(t) − u(t − 1) g(t − 1) = −2 + t + 2e<sup>−t/2</sup> − u(t − 1)[t − 3 + 2e<sup>−(t−1)/2</sup>]</b>.'], ans: 'y = g(t) − u(t−1)g(t−1), g = −2 + t + 2e^(−t/2)' },
      { type: 'work', marks: 12, paper: '2017', order: 3, src: 'Sem 2 2017, Q3', q: 'Use Laplace transforms to solve the initial value problem<br><i>ÿ(t) + 3y(t) = 2u(t − 5) sin(t − 5),  y(0) = 0,  ẏ(0) = 0</i>,<br>where u(t − 5) = 0 if t &lt; 5 and 1 if 5 ≤ t.',
        steps: ['L{2u(t − 5) sin(t − 5)} = 2e<sup>−5s</sup>/(s² + 1).', '(s² + 3)Y = 2e<sup>−5s</sup>/(s² + 1) → Y = 2e<sup>−5s</sup>/((s² + 1)(s² + 3)).', 'Partial fractions: 1/((s² + 1)(s² + 3)) = ½[1/(s² + 1) − 1/(s² + 3)] (check: [(s² + 3) − (s² + 1)]/2 = 1).', 'Y = e<sup>−5s</sup>[1/(s² + 1) − 1/(s² + 3)] → y(t) = u(t − 5)[ sin(t − 5) − (1/√3) sin(√3(t − 5)) ].'], ans: 'y = u(t−5)[sin(t−5) − (1/√3) sin(√3(t−5))]' },
      { type: 'work', marks: 6, src: 'Applied class sheet 4, Q6(a)', q: 'Find L{f} for f(t) = 4 − t² (t &lt; 2), f(t) = 0 (t ≥ 2).',
        steps: ['f = (4 − t²)[1 − u(t − 2)] = (4 − t²) − (4 − t²)u(t − 2).', 'Write 4 − t² in terms of (t − 2): t = (t − 2) + 2 → 4 − (t − 2)² − 4(t − 2) − 4 = −(t − 2)² − 4(t − 2).', 'So f = 4 − t² + [(t − 2)² + 4(t − 2)]u(t − 2).', 'L = 4/s − 2/s³ + e<sup>−2s</sup>[2/s³ + 4/s²].'], ans: '4/s − 2/s³ + e^(−2s)(2/s³ + 4/s²)' },
      { type: 'work', marks: 3, src: 'Practice', q: 'Find L⁻¹{e<sup>−2s</sup>/(s² + 9)}.',
        steps: ['L⁻¹{1/(s² + 9)} = (1/3) sin 3t.', 'Shift by 2: <b>(1/3) sin(3(t − 2)) u(t − 2)</b>.'], ans: '(1/3) sin(3(t−2)) u(t−2)' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'lapconv', name: 'Transfer functions and the convolution theorem', freq: 1, freqNote: 'Q2 in 2017, Sem 2 2020 and Sem 1 2021 ("USE THE CONVOLUTION THEOREM")', assigned: false,
    assignedNote: 'Assignment 2 Q8 uses the convolution theorem, but the exam style is different, so still practise it.',
    notation: [['f * g', 'the convolution of f and g, ∫₀ᵗ f(τ)g(t − τ)dτ'], ['τ ("tau")', 'the dummy integration variable inside a convolution (not time itself)'], ['Q(s)', 'the transfer function, 1/(as² + bs + c) — depends only on the system, not the forcing'], ['q(t)', 'the inverse transform of Q(s), L⁻¹{Q(s)}'], ['r(t), R(s)', 'the forcing function and its transform'], ['y(t), Y(s)', 'the response (solution) and its transform']],
    lesson:
`<p><b>The convolution of f and g</b> is <b>(f * g)(t) = ∫₀ᵗ f(τ) g(t − τ) dτ</b>. The theorem says <b>L{f * g} = F(s) G(s)</b>. So if you can see a transform as a <b>product</b> of two simpler transforms, its inverse is a convolution: <b>L⁻¹{F G} = f * g</b>. (f * g = g * f, so choose whichever order makes the integral easier.)</p>
<h4>Transfer function</h4>
<p>For a ÿ + b ẏ + c y = r(t) with y(0) = ẏ(0) = 0, transforming gives <b>Y(s) = Q(s) R(s)</b> where <b>Q(s) = 1/(as² + bs + c)</b> is the <b>transfer function</b>. It depends only on the left-hand side (the system), not on the forcing r(t).</p>
<p>Let <b>q(t) = L⁻¹{Q(s)}</b>. Then the solution for ANY forcing is <b>y(t) = (q * r)(t) = ∫₀ᵗ q(t − τ) r(τ) dτ</b>.</p>
<h4>The exam question template</h4>
<ol><li>(a) Transform: Y(s) = Q(s) R(s). State Q(s).</li>
<li>(b) Invert Q(s) by partial fractions to get q(t).</li>
<li>(c) <b>Write the convolution integral and evaluate it</b> (integration by parts if r(τ) = τ; split the integral if r switches at time k). <b>The exam says no marks if you avoid the convolution theorem!</b></li></ol>
<h4>With a switching forcing</h4>
<p>If r(t) = 1 for t &lt; 3 and 0 afterwards, then for t &lt; 3 the integral runs over [0, t] with r = 1, and for t ≥ 3 only over [0, 3] (where r = 1): y = ∫₀³ q(t − τ)dτ.</p>
<h4>First order with general initial value</h4>
<p>ẏ + αy = g(t), y(0) = y₀ → Y = (G(s) + y₀)/(s + α) → <b>y(t) = y₀e<sup>−αt</sup> + ∫₀ᵗ e<sup>−α(t−τ)</sup> g(τ) dτ</b>.</p>`,
    example: { q: '(2020 Q2) y″ − y = t, y(0) = y′(0) = 0. Find Q(s), q(t), then y(t) by convolution.',
      steps: ['Transfer function Q(s) = Y(s)/R(s) with zero ICs: (s² − 1)Y = R(s) = 1/s². So <b>Q(s) = 1/(s² − 1)</b>.', 'Q = 1/((s − 1)(s + 1)) = ½[1/(s − 1) − 1/(s + 1)] → <b>q(t) = ½(e<sup>t</sup> − e<sup>−t</sup>)</b> = sinh t.', 'Convolution theorem: y(t) = (q * r)(t) = ∫₀ᵗ q(t − τ) r(τ) dτ = ∫₀ᵗ ½(e<sup>t−τ</sup> − e<sup>−(t−τ)</sup>) τ dτ. Integrate by parts (u = τ): the result is <b>y(t) = ½(e<sup>t</sup> − e<sup>−t</sup>) − t = sinh t − t</b>.', 'Check: y″ − y = sinh t − (sinh t − t) = t ✓, y(0) = 0, y′(0) = cosh 0 − 1 = 0 ✓.'] },
    slides: [M10b('sol/2021_q2_a.jpg', 'Official handwritten solution, 2021 Q2 (1/3)'), M10b('sol/2021_q2_b.jpg', 'Official handwritten solution, 2021 Q2 (2/3)'), M10b('sol/2021_q2_c.jpg', 'Official handwritten solution, 2021 Q2 (3/3)'), M10b('sol/2020_q2_a.jpg', 'Official handwritten solution, 2020 Q2 (1/3)'), M10b('sol/2020_q2_b.jpg', 'Official handwritten solution, 2020 Q2 (2/3)'), M10b('sol/2020_q2_c.jpg', 'Official handwritten solution, 2020 Q2 (3/3)'), M10b('sol/2017_q4.jpg', 'Official handwritten solution, 2017 Q4')],
    formulas: ['(f * g)(t) = ∫₀ᵗ f(τ)g(t − τ)dτ; L{f * g} = F G; f * g = g * f', 'aÿ + bẏ + cy = r, zero ICs: Y = Q R, Q = 1/(as² + bs + c)', 'y(t) = (q * r)(t) = ∫₀ᵗ q(t − τ) r(τ) dτ, q = L⁻¹{Q}', 'ẏ + αy = g, y(0) = y₀: y = y₀e^(−αt) + ∫₀ᵗ e^(−α(t−τ))g(τ)dτ'],
    cards: [
      { f: 'Convolution theorem', b: 'L{f * g} = F(s)G(s)<br>(f * g)(t) = ∫₀ᵗ f(τ)g(t − τ)dτ' },
      { f: 'Transfer function of aÿ + bẏ + cy = r(t) (zero initial conditions)', b: 'Q(s) = 1/(as² + bs + c)<br>Y(s) = Q(s)R(s)' },
      { f: 'Solution of the forced ODE via the transfer function', b: 'y(t) = ∫₀ᵗ q(t − τ) r(τ)dτ, where q = L⁻¹{Q}' },
      { f: 'Exam template for "use the convolution theorem" questions', b: '(a) Y = Q R, state Q<br>(b) q(t) = L⁻¹{Q} by partial fractions<br>(c) write AND evaluate ∫₀ᵗ q(t − τ)r(τ)dτ' },
      { f: 'Convolution is commutative: what does that let you do?', b: 'f * g = g * f: put the simpler function inside the (t − τ) slot' },
      { f: 'Forcing that switches off at t = 3: how does the convolution integral change?', b: 't &lt; 3: integral over [0, t]<br>t ≥ 3: integral only over [0, 3] (where r ≠ 0)' }
    ],
    questions: [
      { type: 'mcq', q: 'The transfer function of ÿ + 3ẏ + 2y = r(t) with zero initial conditions is…', opts: ['1/(s² + 3s + 2)', '(s² + 3s + 2)', '1/(s² + 3s − 2)', 's/(s² + 3s + 2)'], a: 0, why: 'Transform: (s² + 3s + 2)Y = R, so Q = 1/(s² + 3s + 2).' },
      { type: 'mcq', q: 'L⁻¹{F(s)G(s)} equals…', opts: ['f(t) g(t)', '∫₀ᵗ f(τ) g(t − τ) dτ', 'f(t) + g(t)', 'f(t − τ) g(τ) summed over all τ'], a: 1, why: 'A product of transforms is the transform of a convolution.' },
      { type: 'mcq', q: 'The transfer function depends on…', opts: ['the forcing r(t)', 'the initial conditions', 'only the left-hand side (the system)', 'both sides'], a: 2, why: 'Q(s) = 1/(as² + bs + c) comes from the system, not the forcing.' },
      { type: 'work', marks: 12, paper: '2017', order: 4, src: 'Sem 2 2017, Q4', q: 'Use the convolution theorem to calculate L⁻¹{3/(s²(s − 2))}.',
        hint: 'Split as (1/s²)·(1/(s − 2)).',
        steps: ['L⁻¹{1/s²} = t and L⁻¹{1/(s − 2)} = e<sup>2t</sup>.', 'L⁻¹ = 3 ∫₀ᵗ τ e<sup>2(t−τ)</sup> dτ = 3e<sup>2t</sup> ∫₀ᵗ τ e<sup>−2τ</sup> dτ.', '∫ τe<sup>−2τ</sup>dτ = −τe<sup>−2τ</sup>/2 − e<sup>−2τ</sup>/4, so ∫₀ᵗ = 1/4 − te<sup>−2t</sup>/2 − e<sup>−2t</sup>/4.', 'Multiply by 3e<sup>2t</sup>: <b>(3/4)e<sup>2t</sup> − (3/2)t − 3/4</b>.', 'Check by partial fractions: 3/(s²(s − 2)) = −(3/4)/s − (3/2)/s² + (3/4)/(s − 2) ✓.'], ans: '(3/4)e^(2t) − (3/2)t − 3/4' },
      { type: 'work', marks: 15, paper: '2020b', order: 2, src: 'Sem 2 2020, Q2', q: 'Consider the system of equations<br><i>y″(t) − y(t) = t,  y(0) = 0,  y′(0) = 0</i>.<br>(a) Find the transfer function and compute its inverse Laplace transform.<br>(b) USE THE CONVOLUTION THEOREM to find y(t). Remark: No marks will be assigned if you compute y(t) in a way which avoids applying the convolution theorem!',
        steps: ['<b>(a)</b> (s² − 1)Y = 1/s², so Q(s) = 1/(s² − 1) = ½[1/(s − 1) − 1/(s + 1)] → q(t) = ½(e<sup>t</sup> − e<sup>−t</sup>).', '<b>(b)</b> y(t) = (q * r)(t) = ∫₀ᵗ q(τ) r(t − τ) dτ = ∫₀ᵗ ½(e<sup>τ</sup> − e<sup>−τ</sup>)(t − τ) dτ.', 'By parts with u = t − τ, dv = ½(e<sup>τ</sup> − e<sup>−τ</sup>)dτ (v = ½(e<sup>τ</sup> + e<sup>−τ</sup>)): [ (t − τ)·½(e<sup>τ</sup> + e<sup>−τ</sup>) ]₀ᵗ + ∫₀ᵗ ½(e<sup>τ</sup> + e<sup>−τ</sup>)dτ = −t + ½(e<sup>t</sup> − e<sup>−t</sup>).', '<b>y(t) = ½(e<sup>t</sup> − e<sup>−t</sup>) − t</b>.'], ans: 'Q = 1/(s²−1), q = sinh t, y = sinh t − t' },
      { type: 'work', marks: 19, paper: '2021a', order: 2, src: 'Sem 1 2021, Q2', q: 'Consider the system<br><i>y″(t) − 2y′(t) = r(t),  y(0) = 0,  y′(0) = 0</i>,<br>where r(t) = 1 for t &lt; 3 and r(t) = 0 for t ≥ 3.<br>(a) Find the Laplace transform of y(t).<br>(b) Find the transfer function and compute its inverse Laplace transform.<br>(c) USE THE CONVOLUTION THEOREM to find y(t). Remark: No marks will be assigned if you compute y(t) in a way which avoids applying the convolution theorem!',
        hint: 'r(t) = 1 − u(t − 3), so R(s) = (1 − e^(−3s))/s.',
        steps: ['<b>(a)</b> R(s) = (1 − e<sup>−3s</sup>)/s. (s² − 2s)Y = R → <b>Y(s) = (1 − e<sup>−3s</sup>)/(s²(s − 2))</b>.', '<b>(b)</b> Q(s) = 1/(s(s − 2)) = ½[1/(s − 2) − 1/s] → <b>q(t) = ½(e<sup>2t</sup> − 1)</b>.', '<b>(c)</b> y(t) = ∫₀ᵗ q(t − τ) r(τ) dτ.', 'For t &lt; 3 (r = 1 throughout): y = ∫₀ᵗ q(u) du = [e<sup>2u</sup>/4 − u/2]₀ᵗ = e<sup>2t</sup>/4 − t/2 − 1/4.', 'For t ≥ 3: r = 1 only for τ &lt; 3: y = ∫₀³ q(t − τ)dτ = ∫_{t−3}^{t} q(u)du = [e<sup>2u</sup>/4 − u/2] from t − 3 to t = (e<sup>2t</sup> − e<sup>2t−6</sup>)/4 − 3/2.', '<b>y(t) = ¼e<sup>2t</sup> − t/2 − ¼ for t &lt; 3; y(t) = ¼e<sup>2t</sup>(1 − e<sup>−6</sup>) − 3/2 for t ≥ 3</b>.'], ans: 'y = e^(2t)/4 − t/2 − 1/4 (t<3); y = e^(2t)(1 − e^(−6))/4 − 3/2 (t≥3)' },
      { type: 'work', marks: 6, src: 'Applied class sheet 4, Q5(a)', q: 'Use the convolution theorem to find L⁻¹{1/(s²(s + 2))}.',
        steps: ['t * e<sup>−2t</sup> = ∫₀ᵗ τ e<sup>−2(t−τ)</sup>dτ = e<sup>−2t</sup>∫₀ᵗ τe<sup>2τ</sup>dτ.', '∫ τe<sup>2τ</sup>dτ = τe<sup>2τ</sup>/2 − e<sup>2τ</sup>/4, so ∫₀ᵗ = te<sup>2t</sup>/2 − e<sup>2t</sup>/4 + 1/4.', '<b>t/2 − 1/4 + e<sup>−2t</sup>/4</b>.'], ans: 't/2 − 1/4 + e^(−2t)/4' },
      { type: 'work', marks: 5, src: 'Sem 2 2023 (MATH7100 paper) Q3.2', q: 'Express the solution of ẏ + αy = g(t), y(0) = y₀ as a convolution integral.',
        steps: ['(s + α)Y = G(s) + y₀ → Y = y₀/(s + α) + G(s)/(s + α).', 'L⁻¹{1/(s + α)} = e<sup>−αt</sup>.', '<b>y(t) = y₀e<sup>−αt</sup> + ∫₀ᵗ e<sup>−α(t−τ)</sup> g(τ) dτ</b>.'], ans: 'y = y₀e^(−αt) + ∫₀ᵗ e^(−α(t−τ)) g(τ) dτ' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'lapextra', name: 'Extra Laplace tools: t·f(t), f(t)/t, periodic functions', freq: 0.3, freqNote: 'Rarely examined; on the table so they may appear', assigned: true,
    assignedNote: 'Assignment 2 (Q4, Q6) already covers these, so a low priority.',
    notation: [['F′(s)', 'the derivative of F(s) with respect to s'], ['σ ("sigma")', 'dummy variable of integration (used instead of s so it isn\'t confused with the outer s)'], ['T', 'the period of a periodic function, f(t + T) = f(t)'], ['Γ(a)', 'the Gamma function (generalises factorial: Γ(n+1) = n!)']],
    lesson:
`<p>Three more rows of the table, and a standard formula that is NOT on it.</p>
<ul><li><b>Multiplying by t:</b> L{t f(t)} = −F′(s). Example: L{t sin t} = −d/ds[1/(s² + 1)] = 2s/(s² + 1)². Used backwards: L⁻¹{2s/(s² + 4)²} = (t sin 2t)/2, because L{t sin αt} = 2αs/(s² + α²)².</li>
<li><b>Dividing by t:</b> L{f(t)/t} = ∫ₛ^∞ F(σ)dσ. Example: L{sin t / t} = ∫ₛ^∞ dσ/(σ² + 1) = π/2 − arctan s = arctan(1/s).</li>
<li><b>Periodic functions</b> (not in the table): if f(t + T) = f(t), then <b>L{f} = [1/(1 − e<sup>−sT</sup>)] ∫₀ᵀ e<sup>−st</sup> f(t) dt</b>.</li>
<li><b>Non-integer powers:</b> L{t<sup>a</sup>} = Γ(a + 1)/s<sup>a+1</sup>, e.g. L{t<sup>−1/2</sup>} = √(π/s).</li></ul>`,
    example: { q: 'Square wave f(t) = 1 for 0 ≤ t &lt; 1 and 0 for 1 ≤ t &lt; 2, period T = 2. Find L{f}.',
      steps: ['∫₀ᵀ e<sup>−st</sup>f dt = ∫₀² e<sup>−st</sup>f dt = ∫₀¹ e<sup>−st</sup> dt = (1 − e<sup>−s</sup>)/s.', 'Periodic formula L{f} = [1/(1 − e<sup>−sT</sup>)]∫₀ᵀ e<sup>−st</sup>f dt = (1 − e<sup>−s</sup>)/(s(1 − e<sup>−2s</sup>)) = <b>1/(s(1 + e<sup>−s</sup>))</b> since 1 − e<sup>−2s</sup> = (1 − e<sup>−s</sup>)(1 + e<sup>−s</sup>).'] },
    slides: [],
    formulas: ['L{t f(t)} = −F′(s)', 'L{f(t)/t} = ∫ₛ^∞ F(σ)dσ', 'Periodic f, period T: L{f} = ∫₀ᵀ e^(−st) f dt / (1 − e^(−sT))', 'L{t^a} = Γ(a + 1)/s^(a+1)'],
    cards: [
      { f: 'L{t f(t)}', b: '−F′(s)' },
      { f: 'L{f(t)/t}', b: '∫ from s to ∞ of F(σ) dσ' },
      { f: 'Laplace transform of a periodic function with period T', b: '[1/(1 − e<sup>−sT</sup>)] ∫₀ᵀ e<sup>−st</sup> f(t) dt' }
    ],
    questions: [
      { type: 'mcq', q: 'L{t cos t} =', opts: ['(s² − 1)/(s² + 1)²', '2s/(s² + 1)²', 's/(s² + 1)²', '1/(s² + 1)²'], a: 0, why: '−d/ds[s/(s² + 1)] = −[(s² + 1) − 2s²]/(s² + 1)² = (s² − 1)/(s² + 1)².' },
      { type: 'work', marks: 5, src: 'Assignment 2, Q6', q: 'Show that L{sin t / t} = arctan(1/s).',
        steps: ['L{sin t} = 1/(s² + 1). Division by t: L{sin t / t} = ∫ₛ^∞ 1/(σ² + 1) dσ.', '= [arctan σ]ₛ^∞ = π/2 − arctan s = arctan(1/s) for s &gt; 0.'], ans: 'arctan(1/s)' },
      { type: 'work', marks: 4, src: 'Applied class sheet 4, Q4(a)', q: 'Find L⁻¹{2s/(s² + 4)²}.',
        steps: ['L{t sin 2t} = −d/ds[2/(s² + 4)] = 4s/(s² + 4)².', 'So 2s/(s² + 4)² = ½ L{t sin 2t}: <b>f(t) = (t sin 2t)/2</b>.'], ans: '(t sin 2t)/2' }
    ] }
]);

/* ---- course-level details and mock papers ---- */
(function () {
  var c = DATA.course('MATH2010');
  c.summary = 'Two parts: (1) systems of ODEs, phase portraits and stability, and (2) Laplace transforms. The exam is 60 minutes, closed book, no calculator, and gives you a Laplace table. Every past paper has one big phase-portrait question and Laplace questions.';
  c.exam.format = '60 marks, 60 min. Past papers: nonlinear phase portrait (about 20 marks), Laplace + transfer function + convolution (about 15-19), phase curves (about 11-15). Lectures for weeks 7-12 are PDEs (MATH2011) and are NOT part of your exam.';
  c.papers.push({ id: '2017', name: 'Semester 2, 2017 (full paper)', fullMarks: 60, fullMin: 60, note: 'Real paper: 5 questions of 12 marks. 60 minutes, closed book, no calculator.' });
  c.papers.push({ id: '2020b', name: 'Semester 2, 2020 (full paper)', fullMarks: 50, fullMin: 50, note: 'Real paper, 3 questions. Duration assumed to be 1 minute per mark.' });
  c.papers.push({ id: '2021a', name: 'Semester 1, 2021 (full paper)', fullMarks: 50, fullMin: 50, note: 'Real paper, 3 questions. Duration assumed to be 1 minute per mark.' });
  c.ref = { label: 'Laplace table', title: 'Table of Laplace transforms (printed at the end of the exam)', html:
    '<table class="tt" style="text-align:left"><tr><th>f(t), g(t)</th><th>F(s), G(s)</th></tr>' +
    '<tr><td>K</td><td>K/s</td></tr><tr><td>tⁿ</td><td>n!/sⁿ⁺¹</td></tr><tr><td>e<sup>at</sup></td><td>1/(s − a)</td></tr><tr><td>cos(αt)</td><td>s/(s² + α²)</td></tr><tr><td>sin(αt)</td><td>α/(s² + α²)</td></tr>' +
    '<tr><td>e<sup>at</sup> f(t)</td><td>F(s − a)</td></tr><tr><td>f(t − k)u(t − k) (= 0 for t &lt; k, f(t − k) for t ≥ k)</td><td>e<sup>−ks</sup> F(s)</td></tr><tr><td>∫₀ᵗ f(τ)g(t − τ)dτ</td><td>F(s)G(s)</td></tr>' +
    '<tr><td>f⁽ⁿ⁾(t)</td><td>sⁿF(s) − sⁿ⁻¹f(0) − … − f⁽ⁿ⁻¹⁾(0)</td></tr><tr><td>t f(t)</td><td>−F′(s)</td></tr><tr><td>f(t)/t</td><td>∫ₛ^∞ F(σ)dσ</td></tr></table><p class="mute">(u(·) is the Heaviside step function.)</p>' };
})();
