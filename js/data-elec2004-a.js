/* ELEC2004 part 1 (second half of the course): op-amp building blocks, Laplace circuit analysis, feedback/second-order systems, frequency response.
   Built from the 2016, 2018, 2019, 2021 and 2022 finals, the 2026 in-semester exam (first-half topics), homework 3-4 and tutorials 6-12. */
var E4 = function (n, cap) { return { src: 'img/elec2004/' + n + '.jpg', cap: cap }; };
var E4F = function (n) { return '<img class="fig" src="img/elec2004/' + n + '.jpg" alt="Exam figure" onerror="this.remove()">'; };
DATA.addTopics('ELEC2004', [
  /* ------------------------------------------------------------ */
  { id: 'opamp', name: 'Ideal op-amp circuits (the building blocks)', freq: 0.4, freqNote: 'First-half topic, but hidden inside 2022 Q1A, Q2 and every Sallen-Key filter', assigned: false,
    lesson:
`<p>Almost every second-half circuit hides an op-amp. With an <b>ideal op-amp and negative feedback</b> two rules solve everything:</p>
<ol><li><b>No current into the inputs</b> (i₊ = i₋ = 0).</li><li><b>The inputs sit at the same voltage</b> (v₊ = v₋).</li></ol>
<p>Then write KCL at the inverting input node. In the s-domain use impedances Z<sub>R</sub> = R, Z<sub>C</sub> = 1/(sC), Z<sub>L</sub> = sL.</p>
<table class="t"><tr><th>Circuit</th><th>Gain</th></tr>
<tr><td>Inverting (Z<sub>in</sub> in, Z<sub>f</sub> feedback)</td><td>V<sub>o</sub>/V<sub>i</sub> = −Z<sub>f</sub>/Z<sub>in</sub></td></tr>
<tr><td>Non-inverting (R<sub>g</sub> to ground, R<sub>f</sub> feedback)</td><td>V<sub>o</sub>/V<sub>+</sub> = 1 + R<sub>f</sub>/R<sub>g</sub></td></tr>
<tr><td>Voltage follower</td><td>1</td></tr>
<tr><td>Integrator (R in, C feedback)</td><td>−1/(sRC): v<sub>o</sub> = −(1/RC)∫v<sub>i</sub>dt</td></tr>
<tr><td>Differentiator (C in, R feedback)</td><td>−sRC</td></tr>
<tr><td>Inverting with R<sub>f</sub> ∥ C in feedback (first-order low-pass)</td><td>−(R<sub>f</sub>/R<sub>in</sub>) / (1 + sR<sub>f</sub>C)</td></tr></table>
<p>The op-amp output cannot exceed its supply rails (saturation). The output also behaves like an ideal voltage source, so a load resistor on the output does not change V<sub>o</sub>.</p>`,
    example: { q: 'Inverting amplifier: input resistor 10 kΩ, feedback 25 kΩ in parallel with 0.4 µF. Find H(jω) and its value at ω = 100 rad/s.',
      steps: ['Z<sub>f</sub> = R/(1 + sRC) → H(s) = −(25k/10k)/(1 + s × 25 000 × 0.4×10⁻⁶) = −2.5/(1 + 0.01s).', 'At ω = 100: H = −2.5/(1 + j1) = 2.5/√2 ∠(180° − 45°) = <b>1.77∠135°</b>.'] },
    slides: [],
    formulas: ['Ideal op-amp with negative feedback: v₊ = v₋, no input current', 'Inverting: −Z_f/Z_in; non-inverting: 1 + R_f/R_g', 'Integrator −1/(sRC); differentiator −sRC', 'R_f ∥ C feedback: −(R_f/R_in)/(1 + sR_fC)'],
    cards: [
      { f: 'Two golden rules of an ideal op-amp with negative feedback', b: 'No current into the inputs; v₊ = v₋' },
      { f: 'Inverting amplifier gain (impedance form)', b: 'V<sub>o</sub>/V<sub>i</sub> = −Z<sub>f</sub>/Z<sub>in</sub>' },
      { f: 'Non-inverting amplifier gain', b: '1 + R<sub>f</sub>/R<sub>g</sub>' },
      { f: 'Op-amp integrator output', b: 'v<sub>o</sub> = −(1/RC)∫v<sub>i</sub> dt  (H = −1/(sRC))' },
      { f: 'Inverting amp with R<sub>f</sub> ∥ C feedback: transfer function', b: '−(R<sub>f</sub>/R<sub>in</sub>) / (1 + sR<sub>f</sub>C): a first-order low-pass with DC gain −R<sub>f</sub>/R<sub>in</sub>' }
    ],
    questions: [
      { type: 'mcq', q: 'A non-inverting amplifier has R<sub>f</sub> = 30 kΩ and R<sub>g</sub> = 10 kΩ. Its gain is…', opts: ['3', '−3', '4', '0.33'], a: 2, why: '1 + 30/10 = 4.' },
      { type: 'mcq', q: 'An integrator has R = 50 kΩ and C = 10 nF. A constant input of 25 mV gives an output that…', opts: ['stays at 0', 'ramps at −50 V/s', 'ramps at +50 V/s', 'jumps to −25 mV'], a: 1, why: 'dv<sub>o</sub>/dt = −v<sub>i</sub>/(RC) = −0.025/(5×10⁻⁴) = −50 V/s.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'An inverting amplifier has 10 kΩ input resistor and 25 kΩ ∥ 0.4 µF feedback. Find the DC gain, the corner frequency and the gain magnitude at 100 rad/s.',
        steps: ['DC: −25/10 = −2.5.', 'Corner ω<sub>c</sub> = 1/(R<sub>f</sub>C) = 1/(25 000 × 0.4×10⁻⁶) = 100 rad/s.', 'At 100 rad/s: |H| = 2.5/√2 = 1.77 (phase 135°).'], ans: '−2.5; 100 rad/s; 1.77' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'lapcirc', name: 'Laplace transforms in circuit analysis', freq: 0.8, freqNote: '4 of 5 finals: 2018 Q1B, 2019 Q1A, 2021 Q1A, 2022 Q1A (8-9 marks each)', assigned: false,
    lesson:
`<p>The s-domain turns differential equations into algebra. Analyse the circuit exactly as with resistors, using impedances.</p>
<h4>s-domain elements (zero initial conditions)</h4>
<ul><li>R → R. L → sL. C → 1/(sC).</li>
<li>With initial conditions: inductor = sL in series with a voltage source L i(0) (or in parallel with a current source i(0)/s); capacitor = 1/(sC) in series with a voltage source v(0)/s (or parallel current source C v(0)).</li></ul>
<h4>Transfer function and responses</h4>
<ul><li><b>H(s) = Y(s)/X(s)</b> with zero initial conditions.</li>
<li>Impulse response h(t) = L⁻¹{H(s)}. Step response = L⁻¹{H(s)/s}. Response to x(t): Y = H X, then partial fractions and the table.</li>
<li>Complex pole pair −α ± jβ with residue K∠θ at −α + jβ gives <b>2|K|e<sup>−αt</sup>cos(βt + θ)</b>.</li>
<li><b>Initial value theorem:</b> f(0⁺) = lim<sub>s→∞</sub> sF(s). <b>Final value theorem:</b> f(∞) = lim<sub>s→0</sub> sF(s) (only if all poles of sF(s) are in the left half-plane).</li>
<li>A switched sinusoid x = A cos(ωt)u(t) gives transient terms (from the circuit poles) plus a steady state you can check with phasors: |H(jω)|A cos(ωt + ∠H(jω)).</li></ul>
<h4>Second-order circuits</h4>
<p>Series RLC with output across C: H(s) = (1/LC)/(s² + (R/L)s + 1/LC). Compare with s² + 2ζω<sub>n</sub>s + ω<sub>n</sub>²: ω<sub>n</sub> = 1/√(LC), ζ = (R/2)√(C/L).</p>`,
    example: { q: 'Series RLC (R = 120 Ω, L = 0.1 H, C = 10 µF), output across C, unit step input. Find v<sub>C</sub>(t).',
      steps: ['H(s) = 1/(LCs² + RCs + 1) = 10⁶/(s² + 1200s + 10⁶). Poles: −600 ± j800 (ζ = 0.6, underdamped).', 'V<sub>C</sub> = 10⁶/(s(s² + 1200s + 10⁶)) = 1/s − (s + 1200)/((s + 600)² + 800²).', 'Write s + 1200 = (s + 600) + 0.75 × 800.', '<b>v<sub>C</sub>(t) = 1 − e<sup>−600t</sup>(cos 800t + 0.75 sin 800t)</b> V.'] },
    slides: [E4('formula_p1', 'Formula sheet: Laplace transform pairs and properties (given in the exam)')],
    formulas: ['Z_R = R, Z_L = sL, Z_C = 1/(sC); initial conditions as extra sources', 'H(s) = Y/X; h(t) = L⁻¹{H}; step = L⁻¹{H/s}', 'Complex poles: 2|K|e^(−αt)cos(βt + θ)', 'IVT f(0⁺) = lim s→∞ sF(s); FVT f(∞) = lim s→0 sF(s)', 'Series RLC (V_C): ω_n = 1/√(LC), ζ = (R/2)√(C/L)'],
    cards: [
      { f: 's-domain impedances of R, L, C', b: 'R, sL, 1/(sC)' },
      { f: 'Initial value and final value theorems', b: 'f(0⁺) = lim<sub>s→∞</sub> sF(s)<br>f(∞) = lim<sub>s→0</sub> sF(s) (poles of sF(s) in the left half-plane)' },
      { f: 'Impulse and step response from H(s)', b: 'h(t) = L⁻¹{H(s)}; step response = L⁻¹{H(s)/s}' },
      { f: 'Inverse transform of a complex pole pair', b: 'Residue K∠θ at −α + jβ → 2|K| e<sup>−αt</sup> cos(βt + θ)' },
      { f: 'Inductor with initial current in the s-domain', b: 'sL in series with a voltage source L·i(0) (or sL in parallel with current source i(0)/s)' },
      { f: 'Capacitor with initial voltage in the s-domain', b: '1/(sC) in series with a voltage source v(0)/s' },
      { f: 'Series RLC (output across C): ω<sub>n</sub> and ζ', b: 'ω<sub>n</sub> = 1/√(LC); ζ = (R/2)√(C/L)' }
    ],
    questions: [
      { type: 'mcq', q: 'V(s) = 10(s + 2)/(s(s + 5)). The final value v(∞) is…', opts: ['10', '4', '2', '0'], a: 1, why: 'sV(s) at s → 0: 10 × 2/5 = 4.' },
      { type: 'mcq', q: 'V(s) = 10(s + 2)/(s(s + 5)). The initial value v(0⁺) is…', opts: ['10', '4', '0', '∞'], a: 0, why: 'sV(s) = 10(s + 2)/(s + 5) → 10 as s → ∞.' },
      { type: 'mcq', q: 'A system has poles at −2 ± j5. Its natural response is…', opts: ['e<sup>−5t</sup>cos 2t', 'e<sup>−2t</sup>cos(5t + θ)', 'e<sup>2t</sup>cos 5t', 'a pure exponential'], a: 1, why: 'Real part → decay e<sup>−2t</sup>; imaginary part → oscillation at 5 rad/s.' },
      { type: 'work', marks: 4, src: 'Practice', q: 'Series RC (R = 1 kΩ, C = 10 µF), output across C. Find H(s), the impulse response and the response to a 5 V step.',
        steps: ['H(s) = 1/(1 + sRC) = 100/(s + 100).', 'h(t) = 100e<sup>−100t</sup>u(t).', 'Step: V<sub>o</sub> = 500/(s(s + 100)) = 5/s − 5/(s + 100) → <b>v<sub>o</sub> = 5(1 − e<sup>−100t</sup>) V</b>.'], ans: 'v_o = 5(1 − e^(−100t)) V' },
      { type: 'work', marks: 6, src: 'Practice', q: 'Series RLC: R = 120 Ω, L = 0.1 H, C = 10 µF, output across C, unit step input, zero initial conditions. Find ω<sub>n</sub>, ζ and v<sub>C</sub>(t).',
        steps: ['ω<sub>n</sub> = 1/√(LC) = 1/√(10⁻⁶) = 1000 rad/s. ζ = (R/2)√(C/L) = 60 × 0.01 = 0.6.', 'Poles −600 ± j800. V<sub>C</sub> = 1/s − (s + 1200)/((s + 600)² + 800²).', '<b>v<sub>C</sub> = 1 − e<sup>−600t</sup>(cos 800t + 0.75 sin 800t)</b>.'], ans: 'v_C = 1 − e^(−600t)(cos 800t + 0.75 sin 800t)' },
      { type: 'work', marks: 6, src: 'Practice (2022 Q1A style)', q: 'An RC low-pass (H(s) = 4000/(s + 4000)) has input v<sub>i</sub> = 5 cos(4000t)u(t) mV. Find v<sub>o</sub>(t).',
        steps: ['V<sub>o</sub> = 4000 × 5s/((s + 4000)(s² + 4000²)).', 'A/(s + 4000): A = 4000 × 5 × (−4000)/(2 × 4000²) = −2.5.', 'Remaining (Bs + C)/(s² + 4000²): B = 2.5, C = 2.5 × 4000.', '<b>v<sub>o</sub> = −2.5e<sup>−4000t</sup> + 2.5 cos 4000t + 2.5 sin 4000t mV = −2.5e<sup>−4000t</sup> + 3.54 cos(4000t − 45°) mV</b>.'], ans: 'v_o = −2.5e^(−4000t) + 3.54 cos(4000t − 45°) mV' },
      { type: 'work', marks: 8, paper: '2022', order: 1, src: 'Sem 2 2022, Q1A', q: 'The input to the circuit shown in Figure 1A is the voltage v<sub>i</sub>(t) and the output is the voltage v<sub>o</sub>(t).' + E4F('e22_q1a') + 'Circuit in words: v<sub>i</sub> drives a series 20 Ω resistor and 40 mH inductor into a node that has a 1 µF capacitor to ground. That node is connected to the + input of an op-amp configured as a non-inverting amplifier with 10 kΩ from the − input to ground and 30 kΩ from the output to the − input. Determine the output when v<sub>i</sub>(t) = 5 cos(4000t)u(t) mV.',
        hint: 'V+ is an RLC divider across C, then the amplifier gain is 4.',
        steps: ['V₊/V<sub>i</sub> = (1/sC)/(R + sL + 1/sC) = 1/(LCs² + RCs + 1) with LC = 4×10⁻⁸, RC = 2×10⁻⁵. Gain 1 + 30/10 = 4.', 'H(s) = 4/(4×10⁻⁸s² + 2×10⁻⁵s + 1) = 10⁸/(s² + 500s + 2.5×10⁷) (ω<sub>n</sub> = 5000, ζ = 0.05).', 'Steady state: H(j4000) = 10⁸/(9×10⁶ + j2×10⁶) = 10.85∠−12.5° → 54.2 cos(4000t − 12.5°) mV.', 'Partial fractions: V<sub>o</sub> = (100/17)(9s + 8000)/(s² + 4000²) − (100/17)(9s + 12 500)/((s + 250)² + 4994²).', 'Transient: −e<sup>−250t</sup>[52.9 cos(4994t) + 12.1 sin(4994t)] mV.', '<b>v<sub>o</sub>(t) = 54.2 cos(4000t − 12.5°) − e<sup>−250t</sup>[52.9 cos 4994t + 12.1 sin 4994t] mV</b> (check: v<sub>o</sub>(0) = 0 ✓).'], ans: 'v_o = 54.2cos(4000t − 12.5°) − e^(−250t)[52.9cos4994t + 12.1sin4994t] mV' },
      { type: 'work', marks: 9, paper: '2019', order: 1, src: 'Sem 2 2019, Q1A', q: 'The input to the circuit shown in Figure 1 is the voltage v<sub>i</sub>(t) of the independent voltage source. The output is the voltage v<sub>o</sub>(t) across the resistor labelled R. The <u>step response</u> of this circuit is v<sub>o</sub>(t) = 0.75 × (1 − e<sup>−100t</sup>) V.' + E4F('e19_q1a') + '(a) Determine the value of the inductance, L, and the value of the resistance, R. (6 marks)<br>(b) Determine the impulse response of this circuit. (3 marks)<br><span class="mute">Circuit: v<sub>i</sub> → 5 Ω → L → R to ground; v<sub>o</sub> across R.</span>',
        steps: ['H(s) = R/(R + 5 + sL) = (R/L)/(s + (R + 5)/L).', 'The step response is L⁻¹{H(s)/s}. Here 0.75(1 − e<sup>−100t</sup>) ↔ 75/(s(s + 100)), so H(s) = 75/(s + 100).', 'Compare: R/L = 75 and (R + 5)/L = 100 → 5/L = 25 → <b>L = 0.2 H, R = 15 Ω</b> (check: DC gain 15/20 = 0.75 ✓).', '(b) <b>h(t) = L⁻¹{H(s)} = 75e<sup>−100t</sup>u(t) V</b> (the derivative of the step response).'], ans: 'L = 0.2 H, R = 15 Ω; h(t) = 75e^(−100t)u(t)' },
      { type: 'work', marks: 8, paper: '2021', order: 1, src: 'Sem 2 2021, Q1A', q: 'Find v<sub>o</sub>(t) for the circuit shown in Figure 1A. Assume v<sub>o</sub>(0) = 5 V.' + E4F('e21_q1a') + '<span class="mute">Circuit: source 10e<sup>−t</sup>u(t) V in series with 10 Ω feeds the top node. From that node to ground: 10 Ω, 0.1 F (v<sub>o</sub> across it), and a current source 2δ(t) A pushing current into the node.</span>',
        hint: 'Model the charged capacitor as 1/(sC) in parallel with a current source C·v(0), then write one KCL at the top node.',
        steps: ['s-domain: the source becomes 10/(s + 1); the capacitor becomes 1/(sC) = 10/s in parallel with a current source C v<sub>o</sub>(0) = 0.1 × 5 = 0.5; the impulse source becomes 2.', 'KCL at the top node: (V<sub>o</sub> − 10/(s + 1))/10 + V<sub>o</sub>/10 + 0.1sV<sub>o</sub> = 0.5 + 2.', 'V<sub>o</sub>(0.1s + 0.2) = 1/(s + 1) + 2.5 → V<sub>o</sub> = 10/((s + 1)(s + 2)) + 25/(s + 2).', 'Partial fractions: V<sub>o</sub> = 10/(s + 1) + 15/(s + 2).', '<b>v<sub>o</sub>(t) = 10e<sup>−t</sup> + 15e<sup>−2t</sup> V</b> (t &gt; 0). Check: v<sub>o</sub>(0⁺) = 25 V because the impulse dumps 2 C into 0.1 F (a 20 V jump on top of 5 V) ✓.'], ans: 'v_o(t) = 10e^(−t) + 15e^(−2t) V' },
      { type: 'work', marks: 7, paper: '2018', order: 1.5, src: 'Sem 2 2018, Q1B', q: 'There is no energy stored in the circuit in Figure 1(B) at the time the sources are energised.' + E4F('e18_q1b') + '(a) Find I<sub>1</sub>(s) and I<sub>2</sub>(s). (3 marks)<br>(b) Use the initial and final value theorems to check the initial and final values of i<sub>1</sub>(t) and i<sub>2</sub>(t). (2 marks)<br>(c) Find i<sub>1</sub>(t) and i<sub>2</sub>(t). (2 marks)',
        hint: 'Node voltages. The right node is fixed at 375/s by the voltage source, so the unknowns are the left node V<sub>1</sub> and the middle node V<sub>2</sub>.',
        steps: ['s-domain: 30/s A, 375/s V, 500 mH → 0.5s, 400 µF → 2500/s. Right node V<sub>3</sub> = 375/s.', 'KCL left node: 30/s = (V<sub>1</sub> − V<sub>3</sub>)/100 + (V<sub>1</sub> − V<sub>2</sub>)/(0.5s).<br>KCL middle node: (V<sub>1</sub> − V<sub>2</sub>)/(0.5s) = V<sub>2</sub>/50 + (V<sub>2</sub> − V<sub>3</sub>)s/2500.', 'I<sub>1</sub> = (V<sub>1</sub> − V<sub>3</sub>)/100. I<sub>2</sub> (down through the source) = I<sub>1</sub> + the capacitor current (V<sub>2</sub> − V<sub>3</sub>)s/2500.', '(a) <b>I<sub>1</sub>(s) = 30(s² + 50s + 3750)/(s(s + 100)(s + 150))</b> and <b>I<sub>2</sub>(s) = 7.5(3s² + 800s + 15 000)/(s(s + 100)(s + 150))</b>.', '(b) IVT: i<sub>1</sub>(0⁺) = 30 A (inductor acts open, so all 30 A goes through 100 Ω ✓); i<sub>2</sub>(0⁺) = 22.5 A. FVT: i<sub>1</sub>(∞) = i<sub>2</sub>(∞) = 7.5 A (capacitor open, inductor short ✓).', '(c) <b>i<sub>1</sub>(t) = (7.5 − 52.5e<sup>−100t</sup> + 75e<sup>−150t</sup>)u(t) A</b><br><b>i<sub>2</sub>(t) = (7.5 + 52.5e<sup>−100t</sup> − 37.5e<sup>−150t</sup>)u(t) A</b>.'], ans: 'i1 = 7.5 − 52.5e^(−100t) + 75e^(−150t) A; i2 = 7.5 + 52.5e^(−100t) − 37.5e^(−150t) A' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'feedback', name: 'Transfer functions, feedback and damping conditions', freq: 1, freqNote: 'Every final 2016-2022 (Q1, 8-20 marks); Homework 3 Q2 is the same style', assigned: true,
    assignedNote: 'Homework 3 already practised the PI-controller question, but it is on almost every final, so keep it high.',
    lesson:
`<h4>Block diagrams</h4>
<p>Controller C(s) and plant P(s) in a unity negative feedback loop: <b>T(s) = Y/R = C P/(1 + C P)</b>. Multiply out so T is one fraction; the <b>denominator is the characteristic polynomial</b>; its roots are the closed-loop poles.</p>
<h4>Second-order behaviour</h4>
<p>Write the denominator as a s² + b s + c (or s² + 2ζω<sub>n</sub>s + ω<sub>n</sub>²):</p>
<ul><li><b>Underdamped</b> (oscillatory): complex poles: <b>b² − 4ac &lt; 0</b> (0 &lt; ζ &lt; 1).</li>
<li><b>Critically damped</b>: b² = 4ac (ζ = 1), repeated real pole.</li>
<li><b>Overdamped</b>: b² &gt; 4ac (ζ &gt; 1), two real poles.</li>
<li>Stable if all poles have negative real parts (for a 2nd-order polynomial: all coefficients the same sign).</li></ul>
<h4>Typical exam moves</h4>
<ul><li>PI controller C(s) = k<sub>p</sub> + k<sub>i</sub>/s: multiply through by s.</li>
<li>Physical models: mass-spring-damper m d″ + b d′ + k d = 0 → oscillatory when b² &lt; 4mk. DC motor: L di/dt + Ri = v and J dω/dt = ki − bω → G(s) = k/((Ls + R)(Js + b)).</li>
<li>State the condition in the simplest form and remember any given sign limits (k<sub>p</sub>, k<sub>i</sub> &gt; 0).</li></ul>`,
    example: { q: 'C(s) = k<sub>p</sub> + k<sub>i</sub>/s, P(s) = 1/(s + 1), unity negative feedback. Find T(s) and the condition for underdamping.',
      steps: ['CP = (k<sub>p</sub>s + k<sub>i</sub>)/(s(s + 1)).', 'T = CP/(1 + CP) = (k<sub>p</sub>s + k<sub>i</sub>)/(s² + (1 + k<sub>p</sub>)s + k<sub>i</sub>).', 'Underdamped: (1 + k<sub>p</sub>)² − 4k<sub>i</sub> &lt; 0 → <b>k<sub>i</sub> &gt; (1 + k<sub>p</sub>)²/4</b>.'] },
    slides: [],
    formulas: ['Unity feedback: T = CP/(1 + CP)', 'as² + bs + c: underdamped b² < 4ac; critical b² = 4ac; overdamped b² > 4ac', 's² + 2ζω_n s + ω_n²', 'm d″ + b d′ + k d = 0 oscillatory if b² < 4mk', 'DC motor: G = k/((Ls + R)(Js + b))'],
    cards: [
      { f: 'Closed-loop transfer function (unity negative feedback)', b: 'T(s) = C(s)P(s) / (1 + C(s)P(s))' },
      { f: 'Damping conditions for a s² + b s + c', b: 'Underdamped b² &lt; 4ac; critical b² = 4ac; overdamped b² &gt; 4ac' },
      { f: 'Standard second-order denominator', b: 's² + 2ζω<sub>n</sub>s + ω<sub>n</sub>²' },
      { f: 'Mass-spring-damper oscillates when…', b: 'b² &lt; 4mk  (c &lt; c<sub>cr</sub> = 2√(mk))' },
      { f: 'PI controller transfer function', b: 'C(s) = k<sub>p</sub> + k<sub>i</sub>/s = (k<sub>p</sub>s + k<sub>i</sub>)/s' }
    ],
    questions: [
      { type: 'mcq', q: 'A closed-loop denominator is s² + 4s + 13. The response is…', opts: ['overdamped', 'critically damped', 'underdamped', 'unstable'], a: 2, why: 'b² − 4ac = 16 − 52 &lt; 0: poles −2 ± j3.' },
      { type: 'mcq', q: 'For s² + 2ζω<sub>n</sub>s + ω<sub>n</sub>² = s² + 6s + 25, ζ is…', opts: ['0.6', '0.24', '1.2', '0.3'], a: 0, why: 'ω<sub>n</sub> = 5, 2ζ × 5 = 6 → ζ = 0.6.' },
      { type: 'work', marks: 13, paper: '2018', order: 1, src: 'Sem 2 2018, Q1A', q: 'In Figure 1(A), C(s) and P(s) represent the controller and the plant, with C(s) = (k<sub>p</sub> + k<sub>i</sub>/s) and P(s) = 1/(s + 1), where k<sub>p</sub> &gt; 0 and k<sub>i</sub> &gt; 0 are constant gains.' + E4F('e22_q1b') + '(a) Derive the closed loop transfer function T(s) = Y(s)/R(s). (6 marks)<br>(b) Find the conditions on k<sub>p</sub> and k<sub>i</sub> for which T(s) is underdamped. Express your conditions in the simplest form possible. (7 marks)',
        steps: ['(a) CP = (k<sub>p</sub>s + k<sub>i</sub>)/(s(s + 1)). T = CP/(1 + CP) = <b>(k<sub>p</sub>s + k<sub>i</sub>)/(s² + (1 + k<sub>p</sub>)s + k<sub>i</sub>)</b>.', '(b) Complex poles need (1 + k<sub>p</sub>)² − 4k<sub>i</sub> &lt; 0 → <b>k<sub>i</sub> &gt; (1 + k<sub>p</sub>)²/4</b> (with k<sub>p</sub>, k<sub>i</sub> &gt; 0; the system is then stable since all coefficients are positive).'], ans: 'T = (k_p s + k_i)/(s² + (1 + k_p)s + k_i); underdamped if k_i > (1 + k_p)²/4' },
      { type: 'work', marks: 8, paper: '2022', order: 1.5, src: 'Sem 2 2022, Q1B', q: 'In Figure 1B, C(s) and P(s) represent the controller and the plant, with C(s) = (k<sub>p</sub> + k<sub>i</sub>/s) and P(s) = (s + 1)/(s + 3), where k<sub>p</sub> &gt; 0 and k<sub>i</sub> &gt; 0 are constant gains.' + E4F('e22_q1b') + '(a) Derive the closed loop transfer function T(s) = Y(s)/R(s).<br>(b) Let k<sub>i</sub> = 1. Find the condition on k<sub>p</sub> for which T(s) is underdamped.',
        steps: ['(a) CP = (k<sub>p</sub>s + k<sub>i</sub>)(s + 1)/(s(s + 3)). T = (k<sub>p</sub>s + k<sub>i</sub>)(s + 1)/[s(s + 3) + (k<sub>p</sub>s + k<sub>i</sub>)(s + 1)] = <b>(k<sub>p</sub>s + k<sub>i</sub>)(s + 1)/[(1 + k<sub>p</sub>)s² + (3 + k<sub>p</sub> + k<sub>i</sub>)s + k<sub>i</sub>]</b>.', '(b) k<sub>i</sub> = 1: denominator (1 + k<sub>p</sub>)s² + (4 + k<sub>p</sub>)s + 1.', 'Discriminant: (4 + k<sub>p</sub>)² − 4(1 + k<sub>p</sub>) = k<sub>p</sub>² + 4k<sub>p</sub> + 12 = (k<sub>p</sub> + 2)² + 8 &gt; 0 for every k<sub>p</sub>.', '<b>So there is no value of k<sub>p</sub> &gt; 0 that makes T(s) underdamped</b>: the poles are always real (overdamped). Show the completed square to justify.'], ans: 'No k_p > 0 works: discriminant (k_p + 2)² + 8 > 0 always' },
      { type: 'work', marks: 9, paper: '2019', order: 1.5, src: 'Sem 2 2019, Q1B', q: 'The vertical dynamics of a vehicle suspension are (m<sub>v</sub> + m<sub>l</sub>)d″(t) + b d′(t) + k d(t) = 0, with m<sub>v</sub> = 1000 kg (vehicle), m<sub>l</sub> ≥ 0 (load), b = 2.2 × 10⁴ N/(m/s), k = 10⁵ N/m, d(0) = 0.1 m, d′(0) = 0. What is the smallest load mass m<sub>l</sub> for which d(t) is oscillatory?',
        steps: ['Characteristic equation: (m<sub>v</sub> + m<sub>l</sub>)s² + bs + k = 0. Oscillatory (underdamped) when b² &lt; 4(m<sub>v</sub> + m<sub>l</sub>)k.', 'm<sub>v</sub> + m<sub>l</sub> &gt; b²/(4k) = (2.2×10⁴)²/(4 × 10⁵) = 4.84×10⁸/4×10⁵ = 1210 kg.', '<b>m<sub>l</sub> &gt; 210 kg</b> (at exactly 210 kg it is critically damped, so just above 210 kg).'], ans: 'm_l > 210 kg' },
      { type: 'work', marks: 20, paper: '2016', order: 1, src: 'Sem 2 2016, Q1', q: 'A DC motor: L di/dt + R i = v, and J dω/dt = k i − b ω (ω = shaft speed, i(0) = θ(0) = ω(0) = 0).<br>(a) Obtain G(s) = Ω(s)/V(s). (6)<br>(b) With b = 0.1, J = 0.1, L = 1 H, k = 0.1, find R so that G(s) is critically damped. (6)<br>(c) The motor is placed in a unity negative feedback loop. Using the values above, find the closed-loop transfer function and comment on its damping. (8)',
        steps: ['(a) (Ls + R)I = V and (Js + b)Ω = kI → <b>G(s) = k/((Ls + R)(Js + b))</b>.', '(b) G = 0.1/((s + R)(0.1s + 0.1)) = 1/((s + R)(s + 1)). Denominator s² + (R + 1)s + R. Critical: (R + 1)² = 4R → (R − 1)² = 0 → <b>R = 1 Ω</b>.', '(c) G = 1/(s + 1)². T = G/(1 + G) = <b>1/(s² + 2s + 2)</b>.', 'ω<sub>n</sub> = √2, 2ζω<sub>n</sub> = 2 → ζ = 1/√2 = 0.707: <b>underdamped</b> (poles −1 ± j). Feedback made it faster but slightly oscillatory.'], ans: 'G = k/((Ls+R)(Js+b)); R = 1 Ω; T = 1/(s² + 2s + 2), underdamped (ζ = 0.707)' },
      { type: 'work', marks: 10, paper: '2021', order: 1.5, src: 'Sem 2 2021, Q1B', q: 'The waveform shown in Figure 1B is the current in a series RLC circuit. The value of the resistor is 100 Ω.<br>(a) Estimate L and C. (5 marks)<br>(b) About how long will it be before 99% of the initial stored energy in the circuit has dissipated? (5 marks)<br><i>Hint: i(t) = Constant × exp(−ζω<sub>n</sub>t) sin(ω<sub>d</sub>t), where ω<sub>d</sub> = ω<sub>n</sub>(1 − ζ²)<sup>0.5</sup>, ω<sub>n</sub> = 1/(LC)<sup>0.5</sup>, ζ = R/(2(L/C)<sup>0.5</sup>). The value of the constant is not required.</i>' + E4F('e21_q1b'),
        steps: ['Read two peaks off the graph: i ≈ 0.8 A at t ≈ 1 s and i ≈ 0.2 A at t ≈ 10 s. Ratio 4 = e<sup>ζω<sub>n</sub>(10 − 1)</sup> → ζω<sub>n</sub> = ln 4/9 ≈ 0.15 s⁻¹.', 'For a series RLC, ζω<sub>n</sub> = R/(2L) → L = 100/(2 × 0.15) ≈ <b>330-360 H</b> (the official solution reads 0.14 and gets L ≈ 360 H).', 'Count cycles: about 8 cycles in 10 s → ω<sub>d</sub> = 2π × 0.8 ≈ 5 rad/s. ω<sub>n</sub>² = ω<sub>d</sub>² + (ζω<sub>n</sub>)² ≈ 25 → C = 1/(Lω<sub>n</sub>²) ≈ <b>0.11 mF</b>.', '(b) Stored energy ∝ i² ∝ e<sup>−2ζω<sub>n</sub>t</sup>. 1% left: e<sup>−2ζω<sub>n</sub>Δt</sup> = 1/100 → Δt = ln 100/(2ζω<sub>n</sub>) ≈ 4.6/0.28 ≈ <b>15-18 s</b>.'], ans: 'L ≈ 360 H, C ≈ 0.11 mF; about 16 s (15-18 s from a sensible graph reading)' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'freqresp', name: 'Frequency response and multi-frequency inputs', freq: 0.8, freqNote: 'Q2 in 2019, 2021 and 2022 (10 marks: find R, C, c, θ); 2019 Q4 (RC low-pass)', assigned: false,
    lesson:
`<p>For a sinusoidal input in steady state, put <b>s = jω</b>: the output is the input scaled by <b>|H(jω)|</b> and shifted by <b>∠H(jω)</b>.</p>
<p>x(t) = A cos(ωt + φ) → y(t) = A|H(jω)| cos(ωt + φ + ∠H(jω)).</p>
<h4>Input with several frequencies (the classic Q2)</h4>
<p>The circuit is linear, so use <b>superposition</b>: treat each term (DC is ω = 0) separately and add the outputs. Each term gives you one equation for the unknowns:</p>
<ul><li><b>DC term</b> → the DC gain H(0) (often a resistor ratio, sign shows inversion).</li>
<li><b>One sinusoid</b> → magnitude ratio and phase shift → the time constant (e.g. ωRC = 1 when the gain has dropped by √2 and the phase by 45°).</li>
<li>Then predict the remaining terms (find c and θ).</li></ul>
<h4>First-order filters</h4>
<ul><li>RC low-pass (output across C): H = 1/(1 + jωRC). |H| = 1/√(1 + (ωRC)²). Cutoff (−3 dB, |H| = 1/√2) at <b>ω<sub>c</sub> = 1/RC</b>, phase −45° there.</li>
<li>RC high-pass (output across R): H = jωRC/(1 + jωRC).</li>
<li>Inverting op-amp with R<sub>f</sub> ∥ C: H = −(R<sub>f</sub>/R<sub>in</sub>)/(1 + jωR<sub>f</sub>C): the −1 adds 180° to the phase.</li></ul>
<p>Decibels: 20 log₁₀|H|. A pole gives −20 dB/decade above its corner.</p>`,
    example: { q: 'v<sub>in</sub> = 2 + 4 cos(100t) + 5 cos(400t + 45°) V into an inverting amplifier (10 kΩ input, R ∥ C feedback). Output: −5 + 7.071 cos(100t + 135°) + c₄ cos(400t + θ₄). Find R, C, c₄, θ₄.',
      steps: ['H(jω) = −(R/10k)/(1 + jωRC). DC: −5/2 = −R/10k → <b>R = 25 kΩ</b>.', 'At 100 rad/s: |H| = 7.071/4 = 1.768 = 2.5/√(1 + (100RC)²) → 100RC = 1 → <b>C = 0.4 µF</b>. Phase 180° − 45° = 135° ✓.', 'At 400 rad/s: ωRC = 4 → |H| = 2.5/√17 = 0.606 → <b>c₄ = 3.03 V</b>.', 'θ₄ = 45° + 180° − tan⁻¹4 = 45 + 180 − 76.0 = <b>149.0°</b>.'] },
    slides: [],
    formulas: ['Steady state: y = A|H(jω)|cos(ωt + φ + ∠H(jω))', 'Superposition over DC + each sinusoid', 'RC low-pass H = 1/(1 + jωRC), ω_c = 1/RC (|H| = 1/√2, −45°)', 'RC high-pass H = jωRC/(1 + jωRC)', 'dB = 20 log|H|'],
    cards: [
      { f: 'Sinusoidal steady-state output from H(jω)', b: 'Amplitude × |H(jω)|, phase + ∠H(jω)' },
      { f: 'First-order RC low-pass: cutoff frequency and what happens there', b: 'ω<sub>c</sub> = 1/RC: |H| drops to 1/√2 (−3 dB), phase −45°' },
      { f: 'Method for a DC + several sinusoids input', b: 'Superposition: DC gain H(0) from the DC term, H(jω) for each frequency, then add' },
      { f: 'Effect of an inverting stage on the phase', b: 'Adds 180° (the minus sign)' }
    ],
    questions: [
      { type: 'mcq', q: 'An RC low-pass has R = 1 kΩ and C = 1 µF. Its cutoff frequency is…', opts: ['1 rad/s', '1000 rad/s', '159 rad/s', '6283 rad/s'], a: 1, why: 'ω<sub>c</sub> = 1/RC = 1/10⁻³ = 1000 rad/s (= 159 Hz).' },
      { type: 'mcq', q: 'At ω = ω<sub>c</sub> the output of a first-order low-pass lags the input by…', opts: ['0°', '45°', '90°', '180°'], a: 1, why: 'H = 1/(1 + j1): phase −45°.' },
      { type: 'work', marks: 5, src: 'Practice', q: 'v<sub>i</sub> = 2 + 4 cos(1000t) + 3 cos(5000t) V is applied to an RC low-pass with R = 1 kΩ, C = 1 µF (output across C). Find v<sub>o</sub>(t).',
        steps: ['DC: H(0) = 1 → 2 V.', 'ω = 1000: ωRC = 1 → |H| = 0.707, ∠ −45° → 2.83 cos(1000t − 45°).', 'ω = 5000: ωRC = 5 → |H| = 1/√26 = 0.196, ∠ −78.7° → 0.588 cos(5000t − 78.7°).', '<b>v<sub>o</sub> = 2 + 2.83 cos(1000t − 45°) + 0.59 cos(5000t − 78.7°) V</b>.'], ans: 'v_o = 2 + 2.83cos(1000t − 45°) + 0.59cos(5000t − 78.7°) V' },
      { type: 'work', marks: 10, paper: '2022', order: 2, src: 'Sem 2 2022, Q2', q: 'The input voltage applied to the circuit shown in Figure 2 is v<sub>in</sub>(t) = 2 + 4 cos(100t) + 5 cos(400t + 45°) V.' + E4F('e22_q2') + 'The circuit is an inverting op-amp amplifier: 10 kΩ input resistor, and a resistor R in parallel with a capacitor C in the feedback path; the output is taken across a 5 kΩ load resistor. The output is v<sub>out</sub> = −5 + 7.071 cos(100t + 135°) + c₄ cos(400t + θ₄) V. Determine R, C, c₄ and θ₄.',
        steps: ['H(jω) = −(R/10 kΩ)/(1 + jωRC) (the load does not affect an ideal op-amp output).', 'DC: −5 = −(R/10k) × 2 → <b>R = 25 kΩ</b>.', '100 rad/s: 7.071/4 = 1.768 = 2.5/√(1 + (100RC)²) → 100RC = 1 → <b>C = 1/(100 × 25 000) = 0.4 µF</b>. Phase check: 180° − 45° = 135° ✓.', '400 rad/s: |H| = 2.5/√(1 + 16) = 0.606 → <b>c₄ = 5 × 0.606 = 3.03 V</b>.', '<b>θ₄ = 45° + 180° − tan⁻¹(4) = 149.0°</b>.'], ans: 'R = 25 kΩ, C = 0.4 µF, c₄ = 3.03 V, θ₄ = 149°' },
      { type: 'work', marks: 10, paper: ['2019', '2021'], order: 2, src: 'Sem 2 2019, Q2 (repeated word for word as 2021 Q2, 8 marks)', q: 'The input to the circuit in Figure 2 is the voltage of the independent voltage source v<sub>i</sub>(t) = 6 + 4 cos(1000t) + 5 cos(3000t + 45°) V. The output is the voltage across a 500 Ω resistor: v<sub>o</sub>(t) = 3.75 + 2.34 cos(1000t − 20.5°) + c<sub>3</sub> cos(3000t + θ<sub>3</sub>) V. Determine the values of the resistance R<sub>1</sub>, the capacitance C, the coefficient c<sub>3</sub> and the phase angle θ<sub>3</sub>.' + E4F('e21_q2') + '<span class="mute">Circuit: v<sub>i</sub> → R<sub>1</sub> → node; C and 500 Ω both from the node to ground; v<sub>o</sub> across 500 Ω.</span>',
        steps: ['With R<sub>2</sub> = 500 Ω: H(jω) = V<sub>o</sub>/V<sub>i</sub> = R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub> + jωCR<sub>1</sub>R<sub>2</sub>).', 'DC (ω = 0): R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>) = 3.75/6 = 0.625 → <b>R<sub>1</sub> = 300 Ω</b>.', 'ω = 1000: the phase is −20.5° = −tan⁻¹(ωC R<sub>1</sub>R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>)) → 1000 × C × 187.5 = tan 20.5° = 0.374 → <b>C = 2 µF</b>. (Magnitude check: 4 × 0.625/√(1 + 0.374²) = 2.34 ✓.)', 'ω = 3000: H = 500/(800 + j3000 × 2×10⁻⁶ × 300 × 500) = 500/(800 + j900) = 0.415∠−48.4°.', 'c<sub>3</sub>∠θ<sub>3</sub> = 5∠45° × 0.415∠−48.4° = <b>2.08∠−3.4°</b>, so c<sub>3</sub> = 2.08 V and θ<sub>3</sub> = −3.4°.'], ans: 'R1 = 300 Ω, C = 2 µF, c3 = 2.08 V, θ3 = −3.4°' },
      { type: 'work', marks: 5, paper: '2019', order: 4, src: 'Sem 2 2019, Q4', q: 'For the R-C low-pass filter circuit shown in Figure 4:<br>(a) Derive an expression for H(jω) = V<sub>out</sub>(jω)/V<sub>i</sub>(jω). (2 marks)<br>(b) At what frequency will the magnitude of H(jω) be maximum? What is the maximum value of the magnitude of H(jω)? (1.5 marks)<br>(c) At what frequency will the magnitude of H(jω) equal its maximum value divided by √2? (1.5 marks)' + E4F('e19_q4') + '<span class="mute">Circuit: v<sub>i</sub> → R → node; C and R<sub>L</sub> both from the node to ground; v<sub>out</sub> across R<sub>L</sub>.</span>',
        steps: ['(a) Z<sub>p</sub> = R<sub>L</sub> ∥ (1/jωC) = R<sub>L</sub>/(1 + jωR<sub>L</sub>C). Voltage divider: <b>H(jω) = R<sub>L</sub>/(R + R<sub>L</sub> + jωRR<sub>L</sub>C)</b>.', '(b) The denominator is smallest at ω = 0 (DC), so <b>|H|<sub>max</sub> = R<sub>L</sub>/(R + R<sub>L</sub>) at ω = 0</b>.', '(c) |H| = max/√2 when the imaginary part of the denominator equals the real part: ωRR<sub>L</sub>C = R + R<sub>L</sub> → <b>ω<sub>c</sub> = (R + R<sub>L</sub>)/(RR<sub>L</sub>C) = 1/((R ∥ R<sub>L</sub>)C)</b>.'], ans: 'H = R_L/(R + R_L + jωRR_LC); max R_L/(R + R_L) at ω = 0; ω_c = (R + R_L)/(RR_LC)' }
    ] }
]);
