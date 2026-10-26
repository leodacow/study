/* ELEC2004 part 2: Fourier series, Fourier transform (circuits + Parseval energy), filters, convolution. Course info, mock papers and formula sheet.
   Past-paper answers checked against the official solutions (2016, 2018 Q3, 2019, 2021, 2022 Q2) and re-derived with sympy. */
DATA.addTopics('ELEC2004', [
  /* ------------------------------------------------------------ */
  { id: 'fseries', name: 'Fourier series (periodic inputs into circuits)', freq: 0.4, freqNote: '2016 Q2 (5 marks) and 2018 Q2 (9 marks)', assigned: true,
    assignedNote: 'Homework 4 was Fourier series, and it is in only 2 of 5 finals, so it ranks lower.',
    lesson:
`<p>A periodic signal (period T) is a DC term plus sinusoids at whole multiples of the <b>fundamental frequency ω₀ = 2π/T</b>:</p>
<p><b>f(t) = a₀ + Σ<sub>n=1</sub><sup>∞</sup> [a<sub>n</sub> cos nω₀t + b<sub>n</sub> sin nω₀t]</b></p>
<h4>Coefficients (NOT on the formula sheet: memorise)</h4>
<ul><li>a₀ = (1/T)∫<sub>0</sub><sup>T</sup> f(t) dt (the average value)</li>
<li>a<sub>n</sub> = (2/T)∫<sub>0</sub><sup>T</sup> f(t) cos nω₀t dt</li>
<li>b<sub>n</sub> = (2/T)∫<sub>0</sub><sup>T</sup> f(t) sin nω₀t dt</li></ul>
<h4>Symmetry (on the formula sheet) saves most of the work</h4>
<ul><li><b>Even</b> f(t) = f(−t): b<sub>n</sub> = 0, a<sub>n</sub> = (4/T)∫<sub>0</sub><sup>T/2</sup> f cos nω₀t dt.</li>
<li><b>Odd</b> f(t) = −f(−t): a₀ = a<sub>n</sub> = 0, b<sub>n</sub> = (4/T)∫<sub>0</sub><sup>T/2</sup> f sin nω₀t dt.</li>
<li><b>Half-wave</b> f(t) = −f(t − T/2): a₀ = 0 and only <b>odd</b> harmonics.</li>
<li><b>Quarter-wave</b> (half-wave + even or odd): (8/T)∫<sub>0</sub><sup>T/4</sup>, odd n only.</li></ul>
<p>Useful: sin nπ = 0, cos nπ = (−1)<sup>n</sup>, ∫t cos at dt = cos at/a² + t sin at/a, ∫t sin at dt = sin at/a² − t cos at/a.</p>
<h4>Periodic input into a circuit (the 2018 Q2 recipe)</h4>
<ol><li>Fourier series of the input (DC + harmonics).</li>
<li>H(jω) of the circuit.</li>
<li>Each term separately: DC × H(0); harmonic n × |H(jnω₀)| with phase + ∠H(jnω₀).</li>
<li>Add the outputs (superposition) and list the first few non-zero terms.</li></ol>`,
    example: { q: 'Find the Fourier series of a square wave of period T: +V<sub>m</sub> for 0 &lt; t &lt; T/2 and −V<sub>m</sub> for T/2 &lt; t &lt; T.',
      steps: ['Odd and half-wave symmetric: a₀ = 0, a<sub>n</sub> = 0, odd n only.', 'b<sub>n</sub> = (4/T)∫<sub>0</sub><sup>T/2</sup> V<sub>m</sub> sin nω₀t dt = (2V<sub>m</sub>/(nπ))(1 − cos nπ).', 'For odd n, 1 − cos nπ = 2 → <b>b<sub>n</sub> = 4V<sub>m</sub>/(nπ)</b>.', '<b>f(t) = (4V<sub>m</sub>/π)[sin ω₀t + ⅓ sin 3ω₀t + ⅕ sin 5ω₀t + …]</b>'] },
    slides: [E4('formula_p2', 'Formula sheet: Fourier series symmetry rules and Fourier transform table (given)')],
    formulas: ['f(t) = a₀ + Σ[a_n cos nω₀t + b_n sin nω₀t], ω₀ = 2π/T', 'a₀ = (1/T)∫f dt; a_n = (2/T)∫f cos nω₀t dt; b_n = (2/T)∫f sin nω₀t dt', 'Square wave ±V_m: b_n = 4V_m/(nπ), n odd', 'Full-wave rectified sine: a₀ = 2V_m/π, a_n = −4V_m/(π(4n² − 1)), ω₀ = 2ω_sine'],
    cards: [
      { f: 'Fourier series form', b: 'f(t) = a₀ + Σ [a<sub>n</sub> cos nω₀t + b<sub>n</sub> sin nω₀t], ω₀ = 2π/T' },
      { f: 'a₀, a<sub>n</sub>, b<sub>n</sub> (not on the sheet)', b: 'a₀ = (1/T)∫f dt<br>a<sub>n</sub> = (2/T)∫f cos nω₀t dt<br>b<sub>n</sub> = (2/T)∫f sin nω₀t dt (over one period)' },
      { f: 'Even / odd: which coefficients vanish?', b: 'Even: b<sub>n</sub> = 0. Odd: a₀ = a<sub>n</sub> = 0.' },
      { f: 'Half-wave symmetry: test and consequence', b: 'f(t) = −f(t − T/2) → a₀ = 0 and only odd harmonics' },
      { f: 'Square wave ±V<sub>m</sub> (odd): coefficients', b: 'b<sub>n</sub> = 4V<sub>m</sub>/(nπ) for odd n' },
      { f: 'Full-wave rectified sine V<sub>m</sub>|sin ω<sub>s</sub>t|: coefficients', b: 'ω₀ = 2ω<sub>s</sub>; a₀ = 2V<sub>m</sub>/π; a<sub>n</sub> = −4V<sub>m</sub>/(π(4n² − 1)); b<sub>n</sub> = 0' },
      { f: 'Periodic input into a circuit: method', b: 'Fourier series of the input → H(jnω₀) for each term → multiply magnitudes, add phases → add the terms' },
      { f: '∫ t cos(at) dt', b: 'cos(at)/a² + t sin(at)/a' }
    ],
    questions: [
      { type: 'mcq', q: 'A periodic signal is odd. Which coefficients are zero?', opts: ['b<sub>n</sub> only', 'a₀ and a<sub>n</sub>', 'everything except a₀', 'none'], a: 1, why: 'Odd functions are built only from sines.' },
      { type: 'mcq', q: 'A signal has half-wave symmetry, f(t) = −f(t − T/2). Its series contains…', opts: ['only even harmonics', 'only odd harmonics', 'only a DC term', 'only cosines'], a: 1, why: 'Half-wave symmetry kills a₀ and every even harmonic.' },
      { type: 'mcq', q: 'The DC term of a full-wave rectified sine with peak 340 V is…', opts: ['340 V', '216 V', '108 V', '0 V'], a: 1, why: 'a₀ = 2V<sub>m</sub>/π = 680/π = 216 V.' },
      { type: 'mcq', q: 'A periodic signal has period 2 ms. Its fundamental frequency ω₀ is…', opts: ['500 rad/s', '1000π rad/s', '2000 rad/s', '1000 rad/s'], a: 1, why: 'ω₀ = 2π/T = 2π/0.002 = 1000π ≈ 3142 rad/s.' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A ±10 V square wave (odd, period 2π ms so ω₀ = 1000 rad/s) drives an RC low-pass with RC = 1 ms. Find the first two non-zero terms of the output.',
        steps: ['Input: b<sub>n</sub> = 40/(nπ) → 12.73 sin 1000t + 4.24 sin 3000t + …', 'H(jω) = 1/(1 + jω × 10⁻³): H(j1000) = 0.707∠−45°, H(j3000) = 0.316∠−71.6°.', '<b>v<sub>o</sub> ≈ 9.00 sin(1000t − 45°) + 1.34 sin(3000t − 71.6°) + … V</b>'], ans: 'v_o ≈ 9.00 sin(1000t − 45°) + 1.34 sin(3000t − 71.6°) V' },
      { type: 'work', marks: 5, paper: '2016', order: 2, src: 'Sem 2 2016, Q2', q: 'Find the Fourier series for the periodic function shown in Figure 2.' + E4F('e16_tri') + '<span class="mute">Triangle wave of period T: v = −V<sub>p</sub> at t = 0, ±T, …; v = +V<sub>p</sub> at t = ±T/2, 3T/2, …; straight lines in between.</span>',
        steps: ['Symmetry: v(−t) = v(t), so it is even → b<sub>n</sub> = 0. Average = 0 → a₀ = 0. Half-wave symmetric → only odd n.', 'On 0 ≤ t ≤ T/2: v(t) = −V<sub>p</sub> + 4V<sub>p</sub>t/T.', 'Half-wave formula (on the sheet): a<sub>n</sub> = (4/T)∫<sub>0</sub><sup>T/2</sup> v cos nω₀t dt. The constant part gives 0 because sin nπ = 0.', 'Ramp part: (16V<sub>p</sub>/T²)[cos nω₀t/(nω₀)² + t sin nω₀t/(nω₀)]<sub>0</sub><sup>T/2</sup> = (16V<sub>p</sub>/T²)(cos nπ − 1)/(nω₀)².', 'For odd n: cos nπ − 1 = −2 and (nω₀)² = 4π²n²/T² → <b>a<sub>n</sub> = −8V<sub>p</sub>/(π²n²)</b>.', '<b>v(t) = −(8V<sub>p</sub>/π²) Σ<sub>n = 1,3,5,…</sub> (1/n²) cos nω₀t</b>, ω₀ = 2π/T. Check t = 0: Σ1/n² over odd n = π²/8 → v(0) = −V<sub>p</sub> ✓.'], ans: 'v(t) = −(8V_p/π²) Σ_(n odd) cos(nω₀t)/n²' },
      { type: 'work', marks: 9, paper: '2018', order: 2, src: 'Sem 2 2018, Q2', q: 'The full-wave rectified sine-wave voltage shown in Figure 2(a) is applied to the circuit shown in Figure 2(b).<br>(a) Find the first three non-zero terms in the Fourier series representation of i<sub>o</sub>. (7 marks)<br>(b) Does your solution for i<sub>o</sub> make sense? Explain. (2 marks)<br><i>Hint: v<sub>g</sub> = 340 sin(120πt) V, 0 ≤ t ≤ 1/120 s.</i>' + E4F('e18_q2') + '<span class="mute">Circuit: v<sub>g</sub> → 16 H → node; 12.5 µF and 1 kΩ both from the node to ground; i<sub>o</sub> flows down through 1 kΩ.</span>',
        steps: ['T = 1/120 s → ω₀ = 240π ≈ 754 rad/s. Even → b<sub>n</sub> = 0.', 'a₀ = 2 × 340/π = 216.5 V; a<sub>n</sub> = −4V<sub>m</sub>/(π(4n² − 1)): a₁ = −144.3 V, a₂ = −28.9 V.', 'H(jω) = I<sub>o</sub>/V<sub>g</sub> = 1/(R + jωL − ω²RLC) = 1/(1000 − 0.2ω² + j16ω).', 'DC: H(0) = 1/1000 → <b>216.5 mA</b>.', 'ω₀ = 754: H = 1/(−112 700 + j12 060) = 8.82×10⁻⁶∠−173.9° → −144.3H = <b>1.27∠6.1° mA</b>.', '2ω₀ = 1508: H = 1/(−453 800 + j24 130) = 2.20×10⁻⁶∠−177.0° → −28.9H = <b>0.064∠3.0° mA</b>.', '<b>i<sub>o</sub> ≈ 216.5 + 1.27 cos(240πt + 6.1°) + 0.064 cos(480πt + 3.0°) mA</b>', '(b) Yes. The L-C network is a low-pass filter with corner 1/√(LC) ≈ 71 rad/s, far below 754 rad/s, so the harmonics are almost removed and i<sub>o</sub> ≈ average(v<sub>g</sub>)/R. It is a DC power-supply smoothing filter.'], ans: 'i_o ≈ 216.5 + 1.27cos(240πt + 6.1°) + 0.064cos(480πt + 3.0°) mA' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'ftransform', name: 'Fourier transform: circuits and energy (Parseval)', freq: 1, freqNote: 'Q3 in every final 2016-2022 (7-10 marks)', assigned: false,
    lesson:
`<p>The Fourier transform handles signals that are not periodic and may exist for t &lt; 0 too, such as sgn(t), e<sup>at</sup>u(−t) and e<sup>−a|t|</sup>.</p>
<p><b>F(ω) = ∫<sub>−∞</sub><sup>∞</sup> f(t) e<sup>−jωt</sup> dt</b> and f(t) = (1/2π)∫<sub>−∞</sub><sup>∞</sup> F(ω) e<sup>jωt</sup> dω.</p>
<h4>Getting transforms quickly</h4>
<ul><li>The table on the formula sheet: δ(t) ↔ 1, A ↔ 2πAδ(ω), sgn(t) ↔ 2/(jω), u(t) ↔ πδ(ω) + 1/(jω), e<sup>−at</sup>u(t) ↔ 1/(a + jω), e<sup>at</sup>u(−t) ↔ 1/(a − jω), e<sup>−a|t|</sup> ↔ 2a/(a² + ω²).</li>
<li>If f(t) = 0 for t &lt; 0: F(ω) = F(s) with s = jω (use the Laplace table).</li>
<li>If f(t) = 0 for t &gt; 0: F(ω) = L{f(−t)} with s = −jω (the official solutions do this).</li>
<li>Convolution in time ↔ multiplication: V<sub>o</sub>(ω) = H(ω)V<sub>g</sub>(ω).</li></ul>
<h4>The Q3 circuit recipe</h4>
<ol><li>Find H(ω) = output/input with impedances jωL and 1/(jωC).</li>
<li>Transform the input V<sub>g</sub>(ω).</li>
<li>V<sub>o</sub>(ω) = H(ω)V<sub>g</sub>(ω), then partial fractions in jω.</li>
<li>Invert term by term: A/(a + jω) → Ae<sup>−at</sup>u(t); A/(a − jω) → Ae<sup>at</sup>u(−t); A/(jω) → (A/2)sgn(t); Aπδ(ω) → A/2.</li>
<li>Check: no jump at t = 0 unless the input has an impulse; v<sub>o</sub>(±∞) matches the DC gain.</li></ol>
<h4>Energy: Parseval’s theorem (not on the sheet: memorise)</h4>
<p>1 Ω energy: <b>W = ∫<sub>−∞</sub><sup>∞</sup> f²(t) dt = (1/2π)∫<sub>−∞</sub><sup>∞</sup> |F(ω)|² dω = (1/π)∫<sub>0</sub><sup>∞</sup> |F(ω)|² dω</b>.</p>
<ul><li>Energy in a band ω₁…ω₂: (1/π)∫<sub>ω₁</sub><sup>ω₂</sup> |F(ω)|² dω.</li>
<li>Output energy: |V<sub>o</sub>|² = |H|²|V<sub>g</sub>|², then partial fractions in ω² and ∫<sub>0</sub><sup>∞</sup> dω/(a² + ω²) = π/(2a).</li>
<li>Or find v<sub>o</sub>(t) and integrate v<sub>o</sub>² in time. Use whichever is easier.</li></ul>`,
    example: { q: 'Use the Fourier transform to find v<sub>o</sub>(t) when v<sub>g</sub> = sgn(t) V drives an RC low-pass with time constant τ = RC.',
      steps: ['H(ω) = 1/(1 + jωτ); V<sub>g</sub>(ω) = 2/(jω).', 'V<sub>o</sub> = 2/(jω(1 + jωτ)) = 2/(jω) − 2/(1/τ + jω).', 'Invert: 2/(jω) → sgn(t); 2/(1/τ + jω) → 2e<sup>−t/τ</sup>u(t).', '<b>v<sub>o</sub>(t) = sgn(t) − 2e<sup>−t/τ</sup>u(t)</b>: −1 for t &lt; 0, then 1 − 2e<sup>−t/τ</sup>. Continuous at t = 0 ✓.'] },
    slides: [E4('formula_p2', 'Formula sheet: Fourier transforms of elementary functions (given)')],
    formulas: ['F(ω) = ∫ f(t)e^(−jωt) dt', 'e^(−at)u(t) ↔ 1/(a + jω); e^(at)u(−t) ↔ 1/(a − jω)', 'sgn(t) ↔ 2/(jω); u(t) ↔ πδ(ω) + 1/(jω)', 'V_o(ω) = H(ω)V_g(ω)', 'Parseval: W = ∫f² dt = (1/π)∫_0^∞ |F(ω)|² dω', '∫_0^∞ dω/(a² + ω²) = π/(2a)'],
    cards: [
      { f: 'Fourier transform definition', b: 'F(ω) = ∫<sub>−∞</sub><sup>∞</sup> f(t) e<sup>−jωt</sup> dt' },
      { f: 'Shortcut for a causal f(t) (zero for t &lt; 0)', b: 'F(ω) = F(s) with s = jω (Laplace table)' },
      { f: 'Inverse transform of A/(a − jω)', b: 'A e<sup>at</sup> u(−t) (negative-time exponential)' },
      { f: 'Inverse transform of A/(jω)', b: '(A/2) sgn(t)' },
      { f: 'Inverse transform of Aπδ(ω)', b: 'the constant A/2' },
      { f: 'Parseval’s theorem (1 Ω energy)', b: 'W = ∫f²(t) dt = (1/2π)∫<sub>−∞</sub><sup>∞</sup>|F(ω)|² dω = (1/π)∫<sub>0</sub><sup>∞</sup>|F(ω)|² dω' },
      { f: '∫<sub>0</sub><sup>∞</sup> dω/(a² + ω²)', b: 'π/(2a)' },
      { f: 'Fourier transform circuit recipe', b: 'H(ω) → V<sub>g</sub>(ω) → V<sub>o</sub> = HV<sub>g</sub> → partial fractions in jω → invert each term with the table' },
      { f: '1 Ω energy of A e<sup>−at</sup>u(t)', b: 'A²/(2a)' }
    ],
    questions: [
      { type: 'mcq', q: 'The Fourier transform of 5e<sup>−3t</sup>u(t) is…', opts: ['5/(3 + jω)', '5/(3 − jω)', '30/(9 + ω²)', '5/(jω − 3)'], a: 0, why: 'Table: e<sup>−at</sup>u(t) ↔ 1/(a + jω).' },
      { type: 'mcq', q: 'Which signal has the transform 4/(2 − jω)?', opts: ['4e<sup>−2t</sup>u(t)', '4e<sup>2t</sup>u(−t)', '2e<sup>−2|t|</sup>', '4e<sup>2t</sup>u(t)'], a: 1, why: 'a − jω means a negative-time exponential.' },
      { type: 'mcq', q: 'V<sub>o</sub>(ω) contains the term 3/(jω). In time this is…', opts: ['3u(t)', '1.5 sgn(t)', '3 sgn(t)', '3t'], a: 1, why: 'sgn(t) ↔ 2/(jω), so 3/(jω) ↔ 1.5 sgn(t).' },
      { type: 'mcq', q: 'The 1 Ω energy of f(t) = 10e<sup>−5t</sup>u(t) is…', opts: ['10 J', '20 J', '100 J', '50 J'], a: 0, why: '∫<sub>0</sub><sup>∞</sup> 100e<sup>−10t</sup> dt = 10 J.' },
      { type: 'work', marks: 4, src: 'Practice', q: 'For f(t) = 10e<sup>−5t</sup>u(t), find the total 1 Ω energy and the fraction of it in the band 0 ≤ ω ≤ 5 rad/s.',
        steps: ['Total: ∫<sub>0</sub><sup>∞</sup> 100e<sup>−10t</sup> dt = 10 J.', '|F(ω)|² = 100/(25 + ω²). Band: (1/π)∫<sub>0</sub><sup>5</sup> 100/(25 + ω²) dω = (100/π)(1/5)tan⁻¹(1) = 5 J.', '<b>50%</b> of the energy lies below ω = 5 rad/s (the corner frequency).'], ans: '10 J; 50%' },
      { type: 'work', marks: 4, src: 'Practice', q: 'Use Parseval’s theorem with f(t) = te<sup>−t</sup>u(t) to evaluate ∫<sub>0</sub><sup>∞</sup> dω/(1 + ω²)².',
        steps: ['F(ω) = 1/(1 + jω)² (Laplace pair te<sup>−at</sup> ↔ 1/(s + a)², s = jω) → |F|² = 1/(1 + ω²)².', 'Time side: ∫<sub>0</sub><sup>∞</sup> t²e<sup>−2t</sup> dt = 2/2³ = 1/4.', 'Parseval: 1/4 = (1/π)∫<sub>0</sub><sup>∞</sup> |F|² dω → <b>π/4</b>.'], ans: 'π/4' },
      { type: 'work', marks: 8, paper: '2022', order: 3, src: 'Sem 2 2022, Q3', q: 'Use the Fourier transform method to find the output voltage V<sub>o</sub> marked in the circuit shown in Figure 3 if the signal voltage V<sub>g</sub> = 2.5δ(t) V. There is no energy stored in the circuit at the instant the signal voltage is applied.' + E4F('e22_q3') + '<span class="mute">Circuit: V<sub>g</sub> → 5 H → node; from the node, 20 H to ground and 40 Ω in series with 360 Ω to ground; V<sub>o</sub> across 360 Ω.</span>',
        steps: ['Impedances: 5 H → j5ω, 20 H → j20ω.', 'Source transformation (the official method): V<sub>g</sub>/(j5ω) in parallel with j5ω ∥ j20ω = j4ω, back to a source 0.8V<sub>g</sub> in series with j4ω.', 'V<sub>o</sub> = 0.8V<sub>g</sub> × 360/(400 + j4ω) → <b>H(ω) = 72/(jω + 100)</b>.', 'V<sub>g</sub>(ω) = 2.5 → V<sub>o</sub>(ω) = 180/(jω + 100).', '<b>v<sub>o</sub>(t) = 180e<sup>−100t</sup>u(t) V</b>'], ans: 'v_o(t) = 180e^(−100t)u(t) V' },
      { type: 'work', marks: 10, paper: '2016', order: 3, src: 'Sem 2 2016, Q3', q: 'Find v<sub>o</sub> in the circuit below if v<sub>g</sub> = −75e<sup>50t</sup>u(−t) + 75e<sup>−50t</sup>u(t) V.' + E4F('e22_q3') + '<span class="mute">Same circuit as 2022 Q3: v<sub>g</sub> → 5 H → node; 20 H to ground; 40 Ω + 360 Ω to ground; v<sub>o</sub> across 360 Ω.</span>',
        steps: ['H(ω) = 72/(jω + 100) (same circuit as 2022 Q3).', 'V<sub>g</sub>(ω) = −75/(50 − jω) + 75/(50 + jω).', 'V<sub>o</sub> = −5400/((jω + 100)(50 − jω)) + 5400/((jω + 100)(jω + 50)).', 'Partial fractions: the first term = −36/(jω + 100) − 36/(50 − jω); the second = 108/(jω + 50) − 108/(jω + 100).', '<b>v<sub>o</sub>(t) = −36e<sup>50t</sup>u(−t) + (108e<sup>−50t</sup> − 144e<sup>−100t</sup>)u(t) V</b>. Check: both pieces give −36 V at t = 0 ✓.'], ans: 'v_o = −36e^(50t)u(−t) + (108e^(−50t) − 144e^(−100t))u(t) V' },
      { type: 'work', marks: 7, paper: '2018', order: 3, src: 'Sem 2 2018, Q3', q: 'Find the output voltage v<sub>o</sub>(t) using the Fourier transform for the circuit of Figure 3 when v(t) = e<sup>t</sup>u(−t) + u(t) V.' + E4F('e18_q3') + '<span class="mute">Circuit: v(t) → 1 Ω → node; 1 F and ½ Ω both from the node to ground; v<sub>o</sub> across them.</span>',
        steps: ['½ ∥ (1/jω) = 1/(2 + jω), so H(ω) = [1/(2 + jω)]/[1 + 1/(2 + jω)] = <b>1/(3 + jω)</b>.', 'V(ω) = 1/(1 − jω) + πδ(ω) + 1/(jω).', 'V<sub>o</sub> = 1/((3 + jω)(1 − jω)) + πδ(ω)/(3 + jω) + 1/(jω(3 + jω)).', 'Partial fractions: (1/4)/(1 − jω) + (1/4)/(3 + jω) + (1/3)/(jω) − (1/3)/(3 + jω); the δ term is (π/3)δ(ω) → constant 1/6.', '<b>v<sub>o</sub>(t) = (1/4)e<sup>t</sup>u(−t) − (1/12)e<sup>−3t</sup>u(t) + (1/6)sgn(t) + 1/6 V</b>', 'Same thing tidied: e<sup>t</sup>/4 for t &lt; 0, and 1/3 − e<sup>−3t</sup>/12 for t &gt; 0. Continuous at t = 0 (both 1/4) ✓; v<sub>o</sub>(∞) = 1/3 = H(0) ✓.'], ans: 'v_o = (1/4)e^t u(−t) + (1/3 − (1/12)e^(−3t))u(t) V' },
      { type: 'work', marks: 7, paper: '2019', order: 3, src: 'Sem 2 2019, Q3', q: 'Use the Fourier transform method to find i<sub>o</sub>(t) in the circuit in Figure 3 if i<sub>g</sub> = 10 sgn(t) mA.' + E4F('e19_q3') + '<span class="mute">Circuit: current source i<sub>g</sub> in parallel with 100 Ω and an 8 µF capacitor; i<sub>o</sub> is the capacitor current.</span>',
        steps: ['Current divider: I<sub>o</sub> = I<sub>g</sub> × 100/(100 + 1/(jω × 8×10⁻⁶)) = I<sub>g</sub> × jω/(jω + 1250).', 'I<sub>g</sub>(ω) = 10 × 2/(jω) = 20/(jω) mA.', 'I<sub>o</sub>(ω) = 20/(jω + 1250) mA.', '<b>i<sub>o</sub>(t) = 20e<sup>−1250t</sup>u(t) mA</b>. Sense check: the capacitor sat at −1 V for t &lt; 0 (no current); when the source flips to +10 mA it charges toward +1 V with τ = RC = 0.8 ms.'], ans: 'i_o(t) = 20e^(−1250t)u(t) mA' },
      { type: 'work', marks: 8, paper: '2021', order: 3, src: 'Sem 2 2021, Q3', q: 'In Figure 3, the input voltage is v<sub>g</sub> = 30e<sup>−|t|</sup> V. Calculate:<br>(a) the 1 Ω energy content of the input signal (4 marks)<br>(b) the 1 Ω energy content of the output signal. (4 marks)<br><i>Hint: (1) If f(t) is the voltage or current across a 1 Ω resistor then ∫<sub>−∞</sub><sup>∞</sup> f²(t) dt = (1/π)∫<sub>0</sub><sup>∞</sup>|F(ω)|² dω. (2) ∫ dx/(1 + x²)² = ½(x/(x² + 1) + tan⁻¹x).</i>' + E4F('e21_q3') + '<span class="mute">Circuit: v<sub>g</sub> → 20 Ω → node; 80 Ω and 1/80 F both from the node to ground; v<sub>o</sub> across the capacitor.</span>',
        steps: ['(a) W = ∫<sub>−∞</sub><sup>0</sup> (30e<sup>t</sup>)² dt + ∫<sub>0</sub><sup>∞</sup> (30e<sup>−t</sup>)² dt = 450 + 450 = <b>900 J</b>.', '(b) KCL at the output node: (V<sub>g</sub> − V<sub>o</sub>)/20 = V<sub>o</sub>/80 + jωV<sub>o</sub>/80 → H(ω) = 4/(5 + jω).', 'V<sub>g</sub>(ω) = 30 × 2/(1 + ω²) → |V<sub>o</sub>|² = 240²/((ω² + 25)(ω² + 1)²).', 'Partial fractions in ω²: A/(ω² + 25) + B/(ω² + 1) + C/(ω² + 1)² with A = 100, B = −100, C = 2400.', 'W = (1/π)[100 × π/10 − 100 × π/2 + 2400 × π/4] = 10 − 50 + 600 = <b>560 J</b>.'], ans: '(a) 900 J (b) 560 J' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'filters', name: 'Filters: Butterworth design and Sallen-Key circuits', freq: 0.9, freqNote: 'Q4 in every final (4-6 marks): Butterworth high-pass 2016, 2018, 2021; low-pass design 2022', assigned: false,
    lesson:
`<h4>Words to use correctly</h4>
<ul><li><b>Ideal filter</b>: passes one band of frequencies unchanged and removes the rest completely. It is <b>physically unrealisable</b>: its impulse response (a sinc) starts before the impulse arrives (non-causal), and it would need infinite order.</li>
<li><b>Cutoff ω<sub>c</sub></b>: where |H| = H<sub>max</sub>/√2 = 0.707H<sub>max</sub> (−3 dB, half power). Passband, stopband.</li>
<li>Type check: evaluate H(0) and H(∞). LP: 1, 0. HP: 0, 1. BP: 0, 0. BS: 1, 1.</li></ul>
<h4>Butterworth (denominators for ω<sub>c</sub> = 1 rad/s are on the formula sheet)</h4>
<ul><li>Low-pass with cutoff ω<sub>c</sub>: replace <b>s by s/ω<sub>c</sub></b>.</li>
<li>High-pass with cutoff ω<sub>c</sub>: replace <b>s by ω<sub>c</sub>/s</b>. e.g. 2nd order, ω<sub>c</sub> = 60: s²/(s² + 84.84s + 3600).</li>
<li>Higher orders: split into (s + 1) and (s² + bs + 1) sections, build one stage per section, cascade them (op-amp stages do not load each other).</li></ul>
<h4>Second-order sections</h4>
<p>LP: kω₀²/(s² + (ω₀/Q)s + ω₀²). HP: ks²/(s² + (ω₀/Q)s + ω₀²). The Butterworth 2nd-order section has Q = 1/1.414 = 0.707; the s² + s + 1 section of the 3rd order has Q = 1.</p>
<table class="t"><tr><th>Series RLC, output across</th><th>Type</th></tr><tr><td>C</td><td>LPF</td></tr><tr><td>L</td><td>HPF</td></tr><tr><td>R</td><td>BPF</td></tr><tr><td>L + C</td><td>BSF</td></tr></table>
<p>All four have ω₀ = 1/√(LC), Q = (1/R)√(L/C), ω₀/Q = R/L.</p>
<h4>Sallen-Key (lecture version: equal R, equal C, gain A)</h4>
<ul><li><b>ω₀ = 1/(RC)</b>, <b>Q = 1/(3 − A)</b>, pass-band gain <b>k = A</b>. The non-inverting amplifier uses R (− input to ground) and (A − 1)R (output to − input).</li>
<li>Low-pass: two R in series to the + input, one C from the middle node to the output, one C from the + input to ground. High-pass: swap every R and C.</li>
<li>2nd-order Butterworth: A = 3 − 1.414 = 1.586. Q = 1 section: A = 2. A = 3 means Q = ∞ (oscillates).</li>
<li>Choose C first (100 pF to 1 µF), then R = 1/(ω₀C) (aim for 10 kΩ to 1 MΩ).</li></ul>
<p class="mute">Textbook alternative (unity gain): LP prototype R = 1 Ω with C(feedback) = 2/b, C(to ground) = b/2; HP prototype C = 1 F with R(feedback) = b/2, R(to ground) = 2/b. Then scale to ω<sub>c</sub> and a practical resistor size.</p>`,
    example: { q: 'Find the transfer function of a 500 rad/s 3rd-order high-pass Butterworth filter.',
      steps: ['Low-pass prototype (sheet): 1/((s + 1)(s² + s + 1)).', 'High-pass with ω<sub>c</sub> = 500: replace s by 500/s.', '1/((500/s + 1)((500/s)² + 500/s + 1)): multiply top and bottom by s³.', '<b>H(s) = s³/((s + 500)(s² + 500s + 250 000))</b>'] },
    slides: [E4('formula_p3', 'Formula sheet: Butterworth low-pass denominators for ω<sub>c</sub> = 1 rad/s (given)')],
    formulas: ['Cutoff: |H(jω_c)| = H_max/√2 (−3 dB)', 'LP at ω_c: s → s/ω_c; LP → HP at ω_c: s → ω_c/s', 'Sallen-Key: ω₀ = 1/(RC), Q = 1/(3 − A), k = A', '2nd-order Butterworth: Q = 0.707 → A = 1.586', 'Series RLC: ω₀ = 1/√(LC), Q = (1/R)√(L/C)'],
    cards: [
      { f: 'Ideal filter: what is it and why is it unrealisable?', b: 'Passes one band unchanged and blocks the rest completely. Its impulse response is non-causal (starts before the impulse) and it needs infinite order.' },
      { f: 'Cutoff frequency definition', b: '|H(jω<sub>c</sub>)| = H<sub>max</sub>/√2 (−3 dB, half power)' },
      { f: 'Butterworth low-pass with cutoff ω<sub>c</sub>', b: 'Take the table denominator and replace s by s/ω<sub>c</sub>' },
      { f: 'Butterworth high-pass with cutoff ω<sub>c</sub>', b: 'Take the low-pass table and replace s by ω<sub>c</sub>/s' },
      { f: '2nd-order Butterworth high-pass, ω<sub>c</sub> = 60 rad/s', b: 's²/(s² + 84.84s + 3600)' },
      { f: 'Sallen-Key (equal R, equal C): ω₀, Q, gain', b: 'ω₀ = 1/(RC); Q = 1/(3 − A); k = A; gain resistors R and (A − 1)R' },
      { f: 'Gain A for a 2nd-order Butterworth Sallen-Key', b: 'Q = 0.707 → A = 3 − 1.414 = 1.586' },
      { f: 'Series RLC filter: output across C / L / R / L+C', b: 'LPF / HPF / BPF / BSF' },
      { f: 'Series RLC filter: ω₀ and Q', b: 'ω₀ = 1/√(LC); Q = (1/R)√(L/C)' },
      { f: 'Lecturer’s practical component ranges', b: 'R: 10 kΩ to 1 MΩ. C: 100 pF to 1 µF.' }
    ],
    questions: [
      { type: 'mcq', q: 'An ideal low-pass filter cannot be built because…', opts: ['it needs an inductor', 'its impulse response starts before t = 0 (non-causal)', 'it has infinite gain', 'it has no cutoff frequency'], a: 1, why: 'The inverse transform of a brick-wall H(ω) is a sinc that extends to t &lt; 0.' },
      { type: 'mcq', q: 'In the lecture Sallen-Key circuit, Q = 1 needs amplifier gain A =…', opts: ['1', '1.586', '2', '3'], a: 2, why: 'Q = 1/(3 − A) = 1 → A = 2.' },
      { type: 'mcq', q: 'The transfer function of a 3rd-order Butterworth high-pass at 500 rad/s is…', opts: ['s³/((s + 500)(s² + 500s + 250 000))', '500³/((s + 500)(s² + 500s + 250 000))', 's³/((s + 1)(s² + s + 1))', '1/((s + 500)(s² + 500s + 1))'], a: 0, why: 'Replace s by 500/s and multiply through by s³.' },
      { type: 'mcq', q: 'A Sallen-Key low-pass uses C = 10 nF. For ω₀ = 10 000 rad/s, R must be…', opts: ['1 kΩ', '10 kΩ', '100 kΩ', '1 MΩ'], a: 1, why: 'R = 1/(ω₀C) = 1/(10⁴ × 10⁻⁸) = 10 kΩ.' },
      { type: 'work', marks: 1, paper: '2016', order: 4, src: 'Sem 2 2016, Q4(a)', q: 'What is an ideal filter? Why is such a filter said to be physically unrealisable in practice?',
        steps: ['An ideal filter separates its input into two parts: one band of frequencies is passed unchanged and the other is eliminated completely (a brick-wall cutoff).', 'It cannot exist because its impulse response would have to start before the impulse is applied (non-causal).'], ans: 'Passes one band unchanged, removes the rest; unrealisable because its impulse response is non-causal' },
      { type: 'work', marks: 4, paper: ['2016', '2018'], order: 4.5, src: 'Sem 2 2018, Q4 (also 2016 Q4b)', q: 'Obtain the transfer function for a second order Butterworth high pass filter with a cut off frequency of 60 rad/sec. Sketch the circuit schematic for this filter, and choose appropriate component values for the resistors and capacitors to realise this filter.',
        steps: ['Butterworth LP: 1/(s² + 1.414s + 1). Replace s by 60/s: <b>H(s) = s²/(s² + 84.84s + 3600)</b>.', 'Sketch a Sallen-Key high-pass: v<sub>i</sub> → C → C → op-amp + input; R from the + input to ground; R from the node between the two C to the output; amplifier resistors R<sub>a</sub> (− input to ground) and (A − 1)R<sub>a</sub> (output to − input).', 'ω₀ = 1/(RC) = 60: choose C = 1 µF → <b>R = 16.7 kΩ</b>.', 'ω₀/Q = 84.84 → Q = 0.707 → <b>A = 3 − 1/Q = 1.586</b>: R<sub>a</sub> = 10 kΩ, (A − 1)R<sub>a</sub> = <b>5.86 kΩ</b>. Pass-band gain 1.586.', 'Also accepted in the official solution: series C then R, output across L, giving s²/(s² + (R/L)s + 1/(LC)). With C = 10 µF: L = 27.8 H and R = 84.84 × 27.8 ≈ 2.4 kΩ. A 27.8 H inductor is impractical, so the Sallen-Key version is better.'], ans: 'H = s²/(s² + 84.84s + 3600); e.g. Sallen-Key HP with C = 1 µF, R = 16.7 kΩ, A = 1.586' },
      { type: 'work', marks: 2, paper: '2021', order: 4.5, src: 'Sem 2 2021, Q4(b)', q: 'Obtain the transfer function for a second order Butterworth high pass filter with a cut off frequency of 50 rad/sec.',
        steps: ['Butterworth LP (ω<sub>c</sub> = 1): H(s) = 1/(s² + 1.414s + 1).', 'Replace s by 50/s: H = 1/(2500/s² + 70.7/s + 1).', '<b>H<sub>HP</sub>(s) = s²/(s² + 70.7s + 2500)</b>'], ans: 's²/(s² + 70.7s + 2500)' },
      { type: 'work', marks: 6, paper: '2022', order: 4, src: 'Sem 2 2022, Q4 (also lecture Class Exercise 4)', q: 'Design a low pass filter circuit that has a transfer function H<sub>L</sub>(s) = 628³/((s + 628)(s² + 628s + 628²)).',
        steps: ['Recognise it: (s + 1)(s² + s + 1) is the 3rd-order Butterworth denominator with s → s/628. So it is a 3rd-order Butterworth low-pass with ω<sub>c</sub> = 628 rad/s (100 Hz).', 'Split it: H<sub>L</sub> = [628/(s + 628)] × [628²/(s² + 628s + 628²)], a first-order stage cascaded with a second-order stage.', 'Stage 1: RC low-pass (R in series, C to ground) followed by a voltage follower, with RC = 1/628. Choose C = 0.1 µF → <b>R = 15.9 kΩ</b>.', 'Stage 2: Sallen-Key low-pass with ω₀ = 1/(RC) = 628: C = 0.1 µF, <b>R = 15.9 kΩ</b>. ω₀/Q = 628 → <b>Q = 1 → A = 2</b>, so the two amplifier resistors are equal (e.g. 10 kΩ each).', 'Gain: that Sallen-Key stage has k = A = 2, so the cascade gives 2H<sub>L</sub>(s). For exactly H<sub>L</sub>, add a 2:1 divider at the output, or use the unity-gain Sallen-Key with R = 10 kΩ, C(feedback) = 318 nF and C(to ground) = 79.6 nF.', 'Draw both stages in cascade and label every component value: that is where the marks are.'], ans: '3rd-order Butterworth LP at 628 rad/s: RC stage (0.1 µF, 15.9 kΩ) + buffer, then Sallen-Key LP (0.1 µF, 15.9 kΩ, A = 2)' },
      { type: 'work', marks: 4, src: 'Lecture Class Exercise 1', q: 'Design a Butterworth second-order low-pass filter with cut-off frequency 1000 Hz.',
        steps: ['ω<sub>c</sub> = 2π × 1000 = 6283 rad/s. H(s) = 6283²/(s² + 1.414 × 6283s + 6283²) = 3.95×10⁷/(s² + 8886s + 3.95×10⁷).', 'Sallen-Key low-pass: ω₀ = 1/(RC) = 6283. Choose C = 10 nF → <b>R = 15.9 kΩ</b>.', 'Q = 0.707 → <b>A = 1.586</b>: R<sub>a</sub> = 10 kΩ, (A − 1)R<sub>a</sub> = 5.86 kΩ. Pass-band gain 1.586 (4 dB).'], ans: 'C = 10 nF, R = 15.9 kΩ, A = 1.586' },
      { type: 'work', marks: 4, src: 'Lecture Class Exercise 3', q: 'A second-order filter uses two identical first-order stages (inverting op-amp: R<sub>1</sub> at the input, R<sub>2</sub> ∥ C in the feedback). Each stage must break at ω<sub>c</sub> = 1000 rad/s with a pass-band gain of 0 dB.<br>(a) Find R<sub>1</sub>, R<sub>2</sub> and C. (b) Find the gain of the second-order filter at ω = 10 000 rad/s in dB.',
        steps: ['Each stage: H = −(R<sub>2</sub>/R<sub>1</sub>)/(1 + jωR<sub>2</sub>C).', '0 dB → R<sub>2</sub> = R<sub>1</sub>. 1/(R<sub>2</sub>C) = 1000: choose C = 0.1 µF → <b>R<sub>1</sub> = R<sub>2</sub> = 10 kΩ</b>.', '(b) One stage at 10 000 rad/s: 1/√(1 + 10²) = 0.0995 = −20.0 dB. Two stages: <b>−40.1 dB</b>.'], ans: 'R1 = R2 = 10 kΩ, C = 0.1 µF; −40.1 dB' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'convolution', name: 'Convolution and impulse response', freq: 0.3, freqNote: 'Only 2021 Q4(a) (4 marks), but quick marks if it appears', assigned: false,
    lesson:
`<p>For a linear time-invariant system with impulse response h(t), the output for any input x(t) is the <b>convolution</b>:</p>
<p><b>y(t) = x(t) * h(t) = ∫<sub>−∞</sub><sup>∞</sup> x(λ) h(t − λ) dλ</b> (λ is a dummy variable).</p>
<p>In the s or ω domain it is just a product, <b>Y = XH</b>, so convolution gives the same answer as Laplace or Fourier.</p>
<h4>The lecture’s four steps</h4>
<ol><li><b>Folding</b>: mirror h(λ) to get h(−λ).</li>
<li><b>Displacement</b>: shift by t to get h(t − λ). Its edges move with t.</li>
<li><b>Multiplication</b>: x(λ)h(t − λ).</li>
<li><b>Integration</b>: the area of the product. The limits are where the moving edges meet the edges of x, so each new overlap pattern is a new interval of t.</li></ol>
<p>Checks: the result runs from (start of x + start of h) to (end of x + end of h). Two rectangles of different widths give a <b>trapezoid</b>, equal widths a <b>triangle</b>. Total area of y = (area of x) × (area of h).</p>
<p>Also: x(t) * δ(t − a) = x(t − a), and h(t) = L⁻¹{H(s)}.</p>`,
    example: { q: 'Convolve a unit pulse x(t) = u(t) − u(t − 1) with h(t) = e<sup>−t</sup>u(t).',
      steps: ['t &lt; 0: no overlap → y = 0.', '0 ≤ t ≤ 1: y = ∫<sub>0</sub><sup>t</sup> e<sup>−(t − λ)</sup> dλ = 1 − e<sup>−t</sup>.', 't &gt; 1: y = ∫<sub>0</sub><sup>1</sup> e<sup>−(t − λ)</sup> dλ = (e − 1)e<sup>−t</sup>.', 'Continuity check at t = 1: 1 − e<sup>−1</sup> = 0.632 = (e − 1)e<sup>−1</sup> ✓.'] },
    slides: [],
    formulas: ['y(t) = x * h = ∫ x(λ)h(t − λ) dλ', 'Convolution ↔ multiplication: Y = XH', 'x(t) * δ(t − a) = x(t − a)', 'y runs from (start x + start h) to (end x + end h); area y = area x × area h'],
    cards: [
      { f: 'Convolution integral', b: 'y(t) = ∫<sub>−∞</sub><sup>∞</sup> x(λ) h(t − λ) dλ' },
      { f: 'Convolution in time equals … in the s / ω domain', b: 'multiplication: Y = XH' },
      { f: 'Where does x * h start and end?', b: 'Start = start of x + start of h; end = end of x + end of h' },
      { f: 'Two rectangles of different widths convolve to…', b: 'a trapezoid (equal widths give a triangle)' },
      { f: 'x(t) * δ(t − a)', b: 'x(t − a)' }
    ],
    questions: [
      { type: 'mcq', q: 'x(t) = 1 on [0, 2] and h(t) = 1 on [0, 2]. y = x * h is…', opts: ['a rectangle on [0, 2]', 'a triangle on [0, 4] with peak 2 at t = 2', 'a trapezoid on [0, 4]', 'a triangle on [0, 2]'], a: 1, why: 'Equal widths → triangle; peak = full overlap area = 2.' },
      { type: 'mcq', q: 'x(t) is non-zero on [1, 3] and h(t) on [2, 5]. y = x * h is non-zero on…', opts: ['[2, 3]', '[3, 8]', '[1, 5]', '[−1, 4]'], a: 1, why: 'Start 1 + 2 = 3, end 3 + 5 = 8.' },
      { type: 'work', marks: 4, paper: '2021', order: 4, src: 'Sem 2 2021, Q4(a)', q: 'Mathematically, find the convolution of the two signals x(t) and g(t) in Figure 4.' + E4F('e21_q4') + '<span class="mute">x(t) = 2 for 0 ≤ t ≤ 1 (else 0); g(t) = 1 for 1 ≤ t ≤ 3 (else 0).</span>',
        steps: ['y(t) = ∫ x(λ)g(t − λ) dλ. g(t − λ) = 1 when t − 3 ≤ λ ≤ t − 1; x is 2 for 0 ≤ λ ≤ 1.', 't &lt; 1: no overlap → y = 0.', '1 ≤ t ≤ 2: λ from 0 to t − 1 → y = ∫<sub>0</sub><sup>t−1</sup> 2 dλ = <b>2t − 2</b>.', '2 ≤ t ≤ 3: full overlap (λ from 0 to 1) → y = <b>2</b>.', '3 ≤ t ≤ 4: λ from t − 3 to 1 → y = 2(4 − t) = <b>8 − 2t</b>.', 't &gt; 4: y = 0. A trapezoid from 1 to 4 with height 2 (area 4 = 2 × 2 ✓).'], ans: 'y = 0 (t<1); 2t − 2 (1-2); 2 (2-3); 8 − 2t (3-4); 0 (t>4)' },
      { type: 'work', marks: 4, src: 'Practice', q: 'x(t) = 2 for 0 ≤ t ≤ 1 and g(t) = 1 for 0 ≤ t ≤ 3 (both zero elsewhere). Find y = x * g.',
        steps: ['0 ≤ t ≤ 1: overlap λ from 0 to t → y = <b>2t</b>.', '1 ≤ t ≤ 3: full overlap → y = <b>2</b>.', '3 ≤ t ≤ 4: λ from t − 3 to 1 → y = <b>2(4 − t)</b>.', 'Zero outside [0, 4]. Area check: (area of x = 2) × (area of g = 3) = 6 = ½·1·2 + 2·2 + ½·1·2 ✓.'], ans: 'y = 2t (0-1); 2 (1-3); 2(4 − t) (3-4)' },
      { type: 'work', marks: 3, src: 'Practice', q: 'Find y(t) = x(t) * h(t) for x(t) = u(t) and h(t) = 3e<sup>−2t</sup>u(t), then check it with Laplace transforms.',
        steps: ['y(t) = ∫<sub>0</sub><sup>t</sup> 3e<sup>−2λ</sup> dλ = <b>1.5(1 − e<sup>−2t</sup>)</b> for t ≥ 0.', 'Laplace check: Y = (1/s) × 3/(s + 2) = 1.5(1/s − 1/(s + 2)) ✓.'], ans: 'y = 1.5(1 − e^(−2t))u(t)' }
    ] }
]);

(function () {
  var c = DATA.course('ELEC2004');
  c.summary = 'Second half of the course only: Laplace circuit analysis, transfer functions with feedback and damping, frequency response, Fourier series and transforms (with Parseval energy), Butterworth and Sallen-Key filters, convolution.';
  c.exam.format = 'Every final from 2016 to 2022 is 40 marks in 120 min with the same 4-question pattern: Q1 Laplace circuit + feedback/damping (16-20 marks), Q2 several-frequency input or Fourier series (8-10), Q3 Fourier transform circuit or energy (7-10), Q4 filters or convolution (4-6). The formula sheet is printed at the back of the paper.';
  c.papers.push(
    { id: '2022', name: 'Sem 2 2022 final', fullMarks: 40, fullMin: 120, note: 'Most recent paper: Laplace op-amp circuit, PI feedback, op-amp with three frequencies, Fourier transform, Butterworth low-pass design.' },
    { id: '2021', name: 'Sem 2 2021 final', fullMarks: 42, fullMin: 120, note: 'Q2 is counted as 10 marks here (it was 8 marks in 2021). Has the Parseval energy and convolution questions.' },
    { id: '2019', name: 'Sem 2 2019 final', fullMarks: 40, fullMin: 120, note: 'Step response, suspension damping, multi-frequency RC, sgn(t) Fourier transform, RC low-pass.' },
    { id: '2018', name: 'Sem 2 2018 final', fullMarks: 40, fullMin: 120, note: 'PI feedback, two-source Laplace circuit, rectifier Fourier series, Fourier transform, Butterworth high-pass.' },
    { id: '2016', name: 'Sem 2 2016 final', fullMarks: 40, fullMin: 120, note: 'DC motor transfer function (20 marks), triangle-wave Fourier series, Fourier transform circuit, filters.' });
  c.ref = { label: 'Formula sheet', title: 'Formula sheet (printed at the back of the exam)',
    html: '<p class="mute">Laplace pairs and properties, Fourier series symmetry, Fourier transform table and Butterworth denominators. NOT on it: the Fourier series coefficient formulas, Parseval’s theorem, Sallen-Key and RLC filter formulas.</p>' +
      ['formula_p1', 'formula_p2', 'formula_p3'].map(function (p) { return '<img src="img/elec2004/' + p + '.jpg" alt="formula sheet page" style="max-width:100%;height:auto;margin:6px 0;background:#fff" onerror="this.remove()">'; }).join('') };
})();
