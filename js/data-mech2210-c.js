/* MECH2210 part 3: vibration (weeks 9-12, lectures L23-L34). Notation as in the slides: x(t), ω_n, ω_d, ζ, ω_0 (forcing), b (base amplitude), z = x − y. */
var S10c = function (n, cap) { return { src: 'img/m2210/' + n + '.jpg', cap: cap }; };
DATA.addTopics('MECH2210', [
  /* ------------------------------------------------------------ */
  { id: 'vfree', name: 'Undamped free vibration', freq: 0.9, freqNote: 'Part A of 2024 (inertia from measured frequency) and every vibration question builds on it', assigned: false,
    lesson:
`<p>A mass on a spring, pulled and let go, oscillates forever when there is no damping. This is the foundation of every vibration question.</p>
<h4>Equation of motion</h4>
<p>Newton: m ẍ = −k x → <b>m ẍ + k x = 0</b>, or <b>ẍ + ω<sub>n</sub>² x = 0</b> with natural frequency <b>ω<sub>n</sub> = √(k/m)</b> (rad/s).</p>
<ul><li>f<sub>n</sub> = ω<sub>n</sub>/2π (Hz), &nbsp;period T = 1/f<sub>n</sub> = 2π/ω<sub>n</sub></li></ul>
<h4>Solution</h4>
<p>x(t) = A cos ω<sub>n</sub>t + B sin ω<sub>n</sub>t = <b>C sin(ω<sub>n</sub>t + φ)</b>.</p>
<ul><li>x(0) = x₀ and ẋ(0) = v₀ give A = x₀, B = v₀/ω<sub>n</sub></li><li>Amplitude <b>C = √(x₀² + (v₀/ω<sub>n</sub>)²)</b>, phase φ = tan⁻¹(ω<sub>n</sub>x₀ / v₀)</li></ul>
<h4>Rotation</h4>
<p>I θ̈ + k<sub>t</sub> θ = 0 → <b>ω<sub>n</sub> = √(k<sub>t</sub>/I)</b>. For a pendulum or any pivoted body use small angles (sinθ ≈ θ) and ΣM<sub>O</sub> = I<sub>O</sub> θ̈.</p>
<h4>Handy results</h4>
<ul><li>Springs in <b>parallel</b>: k = k₁ + k₂. In <b>series</b>: 1/k = 1/k₁ + 1/k₂.</li><li>Static deflection δ<sub>st</sub> = mg/k, so ω<sub>n</sub> = √(g/δ<sub>st</sub>).</li><li><b>Finding an unknown inertia from frequencies:</b> I = k<sub>t</sub>/ω<sub>n</sub>². Measure the empty platform to get k<sub>t</sub>, then the loaded platform to get the total I, then subtract.</li></ul>
<p><b>Method for any SDOF system:</b> choose a coordinate, write ΣF = ma (or ΣM = Iα) with a small displacement from equilibrium, rearrange into the form (inertia) × (acceleration) + (stiffness) × (displacement) = 0. Then ω<sub>n</sub> = √(stiffness/inertia). Gravity cancels when you measure from the static equilibrium position.</p>`,
    example: { q: 'A platform of inertia 7.5 kg·m² on a torsion bar oscillates at 1 Hz unloaded and 0.52 Hz with a person on it (person\'s centre of mass on the axis). Find the person\'s inertia.',
      steps: ['Unloaded: k<sub>t</sub> = I ω<sub>n</sub>² = 7.5 (2π × 1)² = 296.1 N·m/rad.', 'Loaded: I<sub>total</sub> = k<sub>t</sub>/ω<sub>n</sub>² = 296.1/(2π × 0.52)² = 296.1/10.67 = 27.74 kg·m².', 'Person: 27.74 − 7.5 = <b>20.2 kg·m²</b>.'] },
    slides: [S10c('L23_Vib-15', 'L23: SDOF free vibration'), S10c('L23_Vib-19', 'L23: general solution')],
    formulas: ['Equation: mẍ + kx = 0 → ẍ + ω_n²x = 0; ω_n = √(k/m)', 'f_n = ω_n/2π, T = 1/f_n', 'x = C sin(ω_n t + φ), C = √(x₀² + (v₀/ω_n)²), φ = tan⁻¹(ω_n x₀/v₀)', 'Rotation: Iθ̈ + k_tθ = 0 → ω_n = √(k_t/I)', 'Parallel springs k₁ + k₂; series 1/k = 1/k₁ + 1/k₂; ω_n = √(g/δ_st)'],
    cards: [
      { f: 'Natural frequency of a spring-mass system', b: 'ω<sub>n</sub> = √(k/m) rad/s<br>f<sub>n</sub> = ω<sub>n</sub>/2π Hz, T = 1/f<sub>n</sub>' },
      { f: 'Natural frequency of a torsional system', b: 'ω<sub>n</sub> = √(k<sub>t</sub>/I)' },
      { f: 'Amplitude and phase of x(t) = C sin(ω<sub>n</sub>t + φ) from x₀ and v₀', b: 'C = √(x₀² + (v₀/ω<sub>n</sub>)²)<br>φ = tan⁻¹(ω<sub>n</sub>x₀ / v₀)' },
      { f: 'Equivalent stiffness: springs in parallel and in series', b: 'Parallel: k = k₁ + k₂<br>Series: 1/k = 1/k₁ + 1/k₂' },
      { f: 'ω<sub>n</sub> from static deflection', b: 'ω<sub>n</sub> = √(g/δ<sub>st</sub>)' },
      { f: 'Find unknown inertia from two measured frequencies', b: 'k<sub>t</sub> = I<sub>0</sub>ω<sub>0</sub>², then I<sub>total</sub> = k<sub>t</sub>/ω<sub>load</sub>², subtract I<sub>0</sub>' }
    ],
    questions: [
      { type: 'mcq', q: 'Doubling the mass of a spring-mass system changes its natural frequency by a factor of…', opts: ['2', '√2', '1/√2', '1/2'], a: 2, why: 'ω<sub>n</sub> = √(k/m): doubling m divides ω<sub>n</sub> by √2.' },
      { type: 'mcq', q: 'Two springs of stiffness k are connected in series. The equivalent stiffness is…', opts: ['2k', 'k', 'k/2', 'k/4'], a: 2, why: '1/k<sub>eq</sub> = 1/k + 1/k = 2/k → k<sub>eq</sub> = k/2.' },
      { type: 'mcq', q: 'A mass hangs on a spring and stretches it 25 mm statically. The natural frequency is…', opts: ['19.8 rad/s', '39.2 rad/s', '4.9 rad/s', '9.9 rad/s'], a: 0, why: 'ω<sub>n</sub> = √(g/δ<sub>st</sub>) = √(9.81/0.025) = 19.8 rad/s.' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A 2 kg mass is on a spring k = 800 N/m. It is displaced 0.05 m and given an initial velocity 0.4 m/s. Find ω<sub>n</sub>, f<sub>n</sub>, T, and the amplitude C.',
        steps: ['ω<sub>n</sub> = √(800/2) = 20 rad/s. f<sub>n</sub> = 20/2π = 3.18 Hz. T = 0.314 s.', 'C = √(x₀² + (v₀/ω<sub>n</sub>)²) = √(0.05² + 0.02²) = √0.0029 = 0.0539 m.'], ans: 'ω_n = 20 rad/s, f_n = 3.18 Hz, T = 0.314 s, C = 53.9 mm' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A uniform 1 m rod pivots about one end and swings with small amplitude. Find the natural frequency.',
        hint: 'ΣM_O = I_O θ̈ with I_O = (1/3)mL² and restoring moment mg(L/2) sinθ ≈ mg(L/2)θ.',
        steps: ['I<sub>O</sub> θ̈ + m g (L/2) θ = 0 with I<sub>O</sub> = (1/3) m L².', 'ω<sub>n</sub> = √(3g/2L) = √(3 × 9.81/2) = √14.7 = 3.84 rad/s, T = 1.64 s.'], ans: '3.84 rad/s' },
      { type: 'work', marks: 6, src: 'Practice (2024 A3 style)', q: 'A platform with inertia 7.5 kg·m² on a vertical steel bar (a torsional spring) oscillates at 1 Hz when empty and 0.52 Hz with an astronaut lying on it, whose centre of mass is on the bar axis. Find the astronaut\'s inertia.',
        steps: ['k<sub>t</sub> = I ω² = 7.5 (2π)² = 296.1 N·m/rad.', 'Loaded: I<sub>total</sub> = 296.1/(2π × 0.52)² = 27.74 kg·m².', 'I<sub>astronaut</sub> = 27.74 − 7.5 = 20.2 kg·m².'], ans: '≈ 20.2 kg·m²' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'vdamp', name: 'Damped free vibration', freq: 1, freqNote: 'Part A of 2025 (wheel with spring and damper). Foundation for forced vibration.', assigned: false,
    lesson:
`<p>Add a viscous damper (force = c ẋ opposing velocity):</p>
<p><b>m ẍ + c ẋ + k x = 0</b> → <b>ẍ + 2ζω<sub>n</sub> ẋ + ω<sub>n</sub>² x = 0</b></p>
<ul><li>ω<sub>n</sub> = √(k/m)</li><li><b>Damping ratio ζ = c / c<sub>c</sub></b>, where the critical damping is <b>c<sub>c</sub> = 2√(km) = 2mω<sub>n</sub></b></li></ul>
<h4>Three cases</h4>
<table class="t"><tr><th>ζ</th><th>Type</th><th>Response</th></tr><tr><td>&lt; 1</td><td>Underdamped</td><td>decaying oscillation</td></tr><tr><td>= 1</td><td>Critically damped</td><td>fastest return, no oscillation</td></tr><tr><td>&gt; 1</td><td>Overdamped</td><td>slow return, no oscillation</td></tr></table>
<h4>Underdamped response (the one the exam uses)</h4>
<p><b>x(t) = e<sup>−ζω<sub>n</sub>t</sup> C sin(ω<sub>d</sub>t + φ)</b> with the <b>damped natural frequency ω<sub>d</sub> = ω<sub>n</sub>√(1 − ζ²)</b> (rad/s). C and φ come from the initial conditions.</p>
<ul><li>The curve e<sup>−ζω<sub>n</sub>t</sup> is the decaying envelope that touches the peaks.</li><li>Period of oscillation T<sub>d</sub> = 2π/ω<sub>d</sub>.</li></ul>
<h4>Logarithmic decrement (finding ζ from a measured response)</h4>
<p>For two successive peaks x₁ and x₂ one period apart: <b>δ = ln(x₁/x₂) = 2πζ/√(1 − ζ²)</b>, so <b>ζ = δ / √(4π² + δ²)</b>. For small damping ζ ≈ δ/2π.</p>
<h4>The usual exam routine (read the trace)</h4>
<ol><li>Time between peaks gives T<sub>d</sub> → ω<sub>d</sub> = 2π/T<sub>d</sub>.</li><li>Ratio of two successive peaks gives δ → ζ.</li><li>ω<sub>n</sub> = ω<sub>d</sub>/√(1 − ζ²).</li><li>Match to the equation of motion: k = I ω<sub>n</sub>² (or m ω<sub>n</sub>²), c = 2ζ I ω<sub>n</sub> (or 2ζ m ω<sub>n</sub>).</li></ol>
<p>For a wheel or any rotating system, just replace m with I, c with c<sub>t</sub>, k with k<sub>t</sub>. If the equation of motion is given as I<sub>A</sub>θ̈ + (R − b)²c θ̇ + (R + b)²k θ = 0, then the <b>effective</b> torsional damping is c<sub>t</sub> = (R − b)²c and stiffness k<sub>t</sub> = (R + b)²k. Compute those, then convert back to c and k.</p>`,
    example: { q: 'm = 5 kg, k = 2000 N/m, c = 40 N·s/m. Find ω<sub>n</sub>, ζ, ω<sub>d</sub>, the log decrement and the ratio of successive peaks.',
      steps: ['ω<sub>n</sub> = √(2000/5) = 20 rad/s. c<sub>c</sub> = 2√(2000 × 5) = 200, so ζ = 40/200 = 0.2 (underdamped).', 'ω<sub>d</sub> = 20√(1 − 0.04) = 19.6 rad/s.', 'δ = 2π(0.2)/√0.96 = 1.283, so successive peaks fall by x₁/x₂ = e^1.283 = 3.61.'] },
    slides: [S10c('L24_Vib-05', 'L24: equation of motion'), S10c('L24_Vib-09', 'L24: underdamped motion'), S10c('L24_Vib-13', 'L24: underdamped solution'), S10c('L24_Vib-17', 'L24: strategy for unforced damped vibration')],
    formulas: ['mẍ + cẋ + kx = 0 → ẍ + 2ζω_nẋ + ω_n²x = 0', 'ζ = c/c_c, c_c = 2√(km) = 2mω_n', 'ω_d = ω_n√(1 − ζ²)', 'x(t) = e^(−ζω_n t) C sin(ω_d t + φ)', 'δ = ln(x₁/x₂) = 2πζ/√(1 − ζ²); ζ = δ/√(4π² + δ²)', 'From trace: T_d → ω_d; ratio → ζ; ω_n = ω_d/√(1 − ζ²)'],
    cards: [
      { f: 'Standard form of the damped free vibration equation', b: 'ẍ + 2ζω<sub>n</sub>ẋ + ω<sub>n</sub>²x = 0' },
      { f: 'Damping ratio and critical damping', b: 'ζ = c/c<sub>c</sub><br>c<sub>c</sub> = 2√(km) = 2mω<sub>n</sub>' },
      { f: 'Damped natural frequency', b: 'ω<sub>d</sub> = ω<sub>n</sub>√(1 − ζ²)' },
      { f: 'Underdamped free response', b: 'x(t) = e<sup>−ζω<sub>n</sub>t</sup> C sin(ω<sub>d</sub>t + φ)' },
      { f: 'Logarithmic decrement (formula and meaning)', b: 'δ = ln(x₁/x₂) = 2πζ/√(1 − ζ²)<br>x₁, x₂ = successive peaks' },
      { f: 'ζ from logarithmic decrement', b: 'ζ = δ / √(4π² + δ²)  (≈ δ/2π for small ζ)' },
      { f: 'Overdamped / critically damped / underdamped: ζ ranges', b: 'ζ &gt; 1 / ζ = 1 / ζ &lt; 1' },
      { f: 'Reading a decay trace for ζ, ω<sub>n</sub>, k, c: the 4 steps', b: '1. T<sub>d</sub> → ω<sub>d</sub> = 2π/T<sub>d</sub><br>2. peak ratio → δ → ζ<br>3. ω<sub>n</sub> = ω<sub>d</sub>/√(1 − ζ²)<br>4. k = Iω<sub>n</sub>², c = 2ζIω<sub>n</sub>' }
    ],
    questions: [
      { type: 'mcq', q: 'A system has ζ = 1.5. Its free response after a displacement is…', opts: ['a decaying oscillation', 'a slow non-oscillatory return to equilibrium', 'a constant-amplitude oscillation', 'unstable growth'], a: 1, why: 'ζ &gt; 1 is overdamped: no oscillation.' },
      { type: 'mcq', q: 'Damped natural frequency compared to undamped natural frequency is…', opts: ['higher', 'the same', 'lower: ω<sub>d</sub> = ω<sub>n</sub>√(1−ζ²)', 'unrelated'], a: 2, why: 'Damping slightly lowers the oscillation frequency.' },
      { type: 'mcq', q: 'Two successive peaks of a free decay are 0.50 and 0.25. The log decrement is…', opts: ['0.25', '0.5', '0.69', '2'], a: 2, why: 'δ = ln(0.50/0.25) = ln 2 = 0.693.' },
      { type: 'mcq', q: 'A system has m = 4 kg, k = 400 N/m, c = 40 N·s/m. Its damping ratio is…', opts: ['0.05', '0.25', '0.5', '1.0'], a: 1, why: 'c<sub>c</sub> = 2√(400 × 4) = 80, ζ = 40/80 = 0.5. Check: 2√(1600) = 80, so ζ = 0.5.' },
      { type: 'work', marks: 6, src: 'Practice', q: 'm = 5 kg, k = 2000 N/m, c = 40 N·s/m. Find ω<sub>n</sub>, ζ, ω<sub>d</sub>, δ, and the factor by which each successive peak is smaller.',
        steps: ['ω<sub>n</sub> = 20 rad/s. c<sub>c</sub> = 2√(2000×5) = 200 N·s/m, so ζ = 0.2.', 'ω<sub>d</sub> = 20√(1−0.04) = 19.6 rad/s.', 'δ = 2π(0.2)/√0.96 = 1.283. Ratio = e^δ = 3.61.'], ans: 'ω_n = 20, ζ = 0.2, ω_d = 19.6 rad/s, δ = 1.28, ratio 3.6' },
      { type: 'work', marks: 8, paper: 'prac1', order: 4, src: 'Practice (2025 A2 style)', q: 'A rotating system has I = 0.05 kg·m². Its free response θ(t) is underdamped. Two consecutive peaks are measured: θ = 0.0500 rad at t = 0.50 s and θ = 0.0266 rad at t = 1.00 s. (a) Find ω<sub>d</sub>, δ and ζ. (b) Find ω<sub>n</sub>. (c) Find the torsional stiffness k<sub>t</sub> and torsional damping c<sub>t</sub> if the equation of motion is Iθ̈ + c<sub>t</sub>θ̇ + k<sub>t</sub>θ = 0.',
        hint: 'T_d is the time between peaks. Then δ = ln(ratio).',
        steps: ['(a) T<sub>d</sub> = 1.00 − 0.50 = 0.50 s → ω<sub>d</sub> = 2π/0.5 = 12.57 rad/s. δ = ln(0.0500/0.0266) = 0.631. ζ = δ/√(4π² + δ²) = 0.631/6.315 = 0.100.', '(b) ω<sub>n</sub> = ω<sub>d</sub>/√(1 − ζ²) = 12.57/0.995 = 12.63 rad/s.', '(c) k<sub>t</sub> = I ω<sub>n</sub>² = 0.05(159.5) = 7.98 N·m/rad. c<sub>t</sub> = 2ζ I ω<sub>n</sub> = 2(0.1)(0.05)(12.63) = 0.126 N·m·s/rad.', 'It is underdamped since ζ &lt; 1.'], ans: 'ω_d = 12.57, ζ = 0.10, ω_n = 12.63 rad/s, k_t = 7.98, c_t = 0.126' },
      { type: 'work', marks: 3, src: 'Practice', q: 'How long does the envelope of an underdamped system with ω<sub>n</sub> = 20 rad/s and ζ = 0.2 take to fall to half its initial value?',
        steps: ['Envelope e^(−ζω<sub>n</sub>t) = 0.5 → ζω<sub>n</sub>t = ln 2.', 't = 0.693/(0.2 × 20) = 0.173 s.'], ans: '0.173 s' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'vforced', name: 'Forced vibration (harmonic force)', freq: 1, freqNote: 'Part A of 2025 (disk with applied moment), and L26-L28', assigned: false,
    lesson:
`<p>Now a harmonic force F₀ sin ω₀t drives the mass. (The lecture uses <b>ω₀</b> for the forcing frequency and ω<sub>n</sub> for the natural frequency.)</p>
<p><b>m ẍ + c ẋ + k x = F₀ sin ω₀t</b></p>
<p>The total response = transient (dies away because of damping) + <b>steady-state</b> (at the forcing frequency ω₀). The exam always asks for the steady-state part.</p>
<h4>Steady-state amplitude</h4>
<p>Define the <b>frequency ratio r = ω₀/ω<sub>n</sub></b> and the static deflection <b>δ<sub>st</sub> = F₀/k</b>.</p>
<p><b>X = δ<sub>st</sub> / √[(1 − r²)² + (2ζr)²]</b> &nbsp; (magnification factor MF = X/δ<sub>st</sub>)</p>
<p>Phase lag: <b>φ = tan⁻¹[ 2ζr / (1 − r²) ]</b> (response lags force; φ goes from 0 to 180° as r increases through 1, φ = 90° at r = 1).</p>
<h4>What the curve looks like</h4>
<ul><li>r ≪ 1: MF ≈ 1. The system just follows the force statically.</li><li>r = 1 (<b>resonance</b>): X = δ<sub>st</sub>/(2ζ), large if ζ is small. Without damping it is infinite.</li><li>r ≫ 1: MF → 0. The mass cannot keep up.</li><li>Peak of MF occurs at r = √(1 − 2ζ²) (just below 1).</li></ul>
<h4>Rotational version</h4>
<p>I θ̈ + c<sub>t</sub> θ̇ + k<sub>t</sub> θ = M₀ cos ω₀t gives the same formula with θ₀ = M₀/k<sub>t</sub> as the static rotation, r = ω₀/ω<sub>n</sub> with ω<sub>n</sub> = √(k<sub>t</sub>/I), ζ = c<sub>t</sub>/(2Iω<sub>n</sub>).</p>
<p><b>Routine:</b> (1) find ω<sub>n</sub> and ζ, (2) find the static deflection, (3) compute r, (4) put into the amplitude formula. If they ask "applied slowly (statically)", the answer is just F₀/k (or M₀/k<sub>t</sub>).</p>`,
    example: { q: 'm = 10 kg, k = 4000 N/m, c = 80 N·s/m, F = 50 sin(15t) N. Find the steady-state amplitude.',
      steps: ['ω<sub>n</sub> = √(4000/10) = 20 rad/s; ζ = 80/(2√(4000 × 10)) = 80/400 = 0.2; r = 15/20 = 0.75.', 'δ<sub>st</sub> = 50/4000 = 0.0125 m.', 'Denominator = √[(1 − 0.5625)² + (2 × 0.2 × 0.75)²] = √(0.1914 + 0.09) = 0.5305.', 'X = 0.0125/0.5305 = <b>0.0236 m</b> (MF = 1.88).'] },
    slides: [S10c('L26_Vib-06', 'L26: external force excitation'), S10c('L26_Vib-14', 'L26: forced vibration summary')],
    formulas: ['mẍ + cẋ + kx = F₀ sin ω₀t', 'r = ω₀/ω_n, δ_st = F₀/k', 'X = δ_st/√[(1 − r²)² + (2ζr)²]', 'φ = tan⁻¹[2ζr/(1 − r²)]', 'Resonance (r = 1): X = δ_st/(2ζ)', 'Rotational: θ₀ = M₀/k_t, same formula'],
    cards: [
      { f: 'Steady-state amplitude for force excitation F₀sin ω₀t', b: 'X = δ<sub>st</sub> / √[(1 − r²)² + (2ζr)²]<br>δ<sub>st</sub> = F₀/k, r = ω₀/ω<sub>n</sub>' },
      { f: 'Phase angle of steady-state response', b: 'φ = tan⁻¹[ 2ζr / (1 − r²) ]' },
      { f: 'Amplitude at resonance (r = 1)', b: 'X = δ<sub>st</sub> / (2ζ)' },
      { f: 'Magnification factor at r ≪ 1 and r ≫ 1', b: 'r ≪ 1: MF ≈ 1<br>r ≫ 1: MF → 0' },
      { f: 'Response if the force is applied "slowly (statically)"', b: 'X = F₀/k (or θ₀ = M₀/k<sub>t</sub>)' }
    ],
    questions: [
      { type: 'mcq', q: 'A lightly damped system is driven exactly at its natural frequency (r = 1). The amplitude is…', opts: ['δ<sub>st</sub>', 'δ<sub>st</sub>/(2ζ), which is large', 'zero', 'infinite whatever ζ'], a: 1, why: 'At r = 1 the denominator is just 2ζ.' },
      { type: 'mcq', q: 'At r = ω₀/ω<sub>n</sub> = 5 (driven much faster than natural), the magnification factor is…', opts: ['about 1', 'about 0.04', 'about 25', 'about 5'], a: 1, why: 'For r ≫ 1, MF ≈ 1/(r² − 1) = 1/24 ≈ 0.04.' },
      { type: 'mcq', q: 'The steady-state response to F₀ sin ω₀t occurs at which frequency?', opts: ['ω<sub>n</sub>', 'ω<sub>d</sub>', 'ω₀ (the forcing frequency)', 'a mix of ω<sub>n</sub> and ω₀ forever'], a: 2, why: 'The transient at ω<sub>d</sub> decays. The steady state follows the forcing.' },
      { type: 'work', marks: 5, src: 'Practice', q: 'm = 10 kg, k = 4000 N/m, c = 80 N·s/m, F = 50 sin 15t N. Find the steady-state amplitude and the amplitude at resonance (same F₀, same c).',
        steps: ['ω<sub>n</sub> = 20 rad/s, ζ = 0.2, r = 0.75, δ<sub>st</sub> = 0.0125 m.', 'X = 0.0125/√[(0.4375)² + (0.3)²] = 0.0125/0.5305 = 0.0236 m.', 'Resonance: X = δ<sub>st</sub>/(2ζ) = 0.0125/0.4 = 0.0313 m.'], ans: '23.6 mm; 31.3 mm at resonance' },
      { type: 'work', marks: 8, paper: 'prac1', order: 5, src: 'Practice (2025 A2(d,e) style)', q: 'A rotating system (I = 0.05 kg·m², k<sub>t</sub> = 8 N·m/rad, ζ = 0.1) is initially at rest. (a) If a moment M = 0.16 N·m is applied slowly (statically), what is the angular displacement θ₀? (b) If M(t) = 0.16 cos(6t), what is the peak steady-state response of θ(t)? (c) What is the phase lag?',
        hint: 'ω_n = √(k_t/I). Static first, then r = ω₀/ω_n.',
        steps: ['(a) θ₀ = M/k<sub>t</sub> = 0.16/8 = <b>0.020 rad</b>.', '(b) ω<sub>n</sub> = √(8/0.05) = 12.65 rad/s. r = 6/12.65 = 0.474, so r² = 0.225. 1 − r² = 0.775; 2ζr = 0.0949.', 'Θ = θ₀/√[(0.775)² + (0.0949)²] = 0.020/0.7808 = <b>0.0256 rad</b>.', '(c) φ = tan⁻¹(0.0949/0.775) = 7.0° (the response lags the moment).'], ans: 'θ₀ = 0.020 rad; Θ = 0.0256 rad; φ = 7.0°' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'vbase', name: 'Base excitation and vibration measurement', freq: 0.9, freqNote: 'Part A of 2023 (seismic instrument). Week 10-11 lectures L28-L29.', assigned: false,
    lesson:
`<p>Sometimes the <b>support</b> moves instead of a force being applied: a car chassis on a bumpy road, a seismic instrument on a vibrating structure. Let the base move as <b>y = b sin ω₀t</b>, the mass position be x, and the <b>relative</b> motion z = x − y (spring stretch).</p>
<p>Equation in relative coordinates (from the lecture): <b>z̈ + 2ζω<sub>n</sub> ż + ω<sub>n</sub>² z = −ÿ = ω₀² b sin ω₀t</b>.</p>
<h4>Amplitudes (with r = ω₀/ω<sub>n</sub>)</h4>
<ul><li>Relative amplitude: <b>Z = b r² / √[(1 − r²)² + (2ζr)²]</b> (what a sensor between mass and base reads)</li><li>Absolute amplitude of the mass: <b>X = b √[1 + (2ζr)²] / √[(1 − r²)² + (2ζr)²]</b></li></ul>
<p>"Amplitude factor" = the steady-state amplitude (e.g. Z). "Magnification factor" = this amplitude divided by the input (e.g. Z/b), a function of r and ζ.</p>
<h4>Limits (explain these in words)</h4>
<ul><li><b>r → 0</b> (base moves slowly, ω₀ ≪ ω<sub>n</sub>): Z/b ≈ r² → 0. The mass follows the base with almost no spring stretch. Z ∝ ω₀² b = base acceleration: this is how an <b>accelerometer</b> works (design it with a high ω<sub>n</sub>, ζ ≈ 0.7).</li><li><b>r → ∞</b> (ω₀ ≫ ω<sub>n</sub>): Z/b → 1. The mass stays still in space and the instrument reads the base motion directly: a <b>seismometer / displacement vibrometer</b> (design it with a low ω<sub>n</sub>).</li><li>Near r = 1: resonance, a large reading that is wrong unless damping is considered.</li></ul>
<h4>Finding ω<sub>n</sub> and damping from a measurement</h4>
<ol><li>ω<sub>n</sub> = √(k/m).</li><li>Compute r = ω₀/ω<sub>n</sub> and the measured ratio Z/b.</li><li>Rearrange Z/b = r²/√[(1 − r²)² + (2ζr)²] to find (2ζr)², then ζ, then c = 2ζ√(km).</li></ol>
<p><b>Watch the units:</b> "peak-to-peak" is twice the amplitude. If the exam gives peak-to-peak for both, the ratio is unaffected. Convert Hz to rad/s: ω₀ = 2πf.</p>`,
    example: { q: 'A seismic instrument (m = 2 kg, k = 1500 N/m) sits on a structure vibrating at 5 Hz, 18 mm peak-to-peak. The relative motion reads 24 mm peak-to-peak. Find f<sub>n</sub> and the damping constant c.',
      steps: ['ω<sub>n</sub> = √(1500/2) = 27.39 rad/s → f<sub>n</sub> = 4.36 Hz.', 'ω₀ = 2π(5) = 31.42 rad/s → r = 1.147, r² = 1.316.', 'Z/b = 24/18 = 1.333 = r²/√[(1 − r²)² + (2ζr)²] → √[…] = 0.987 → […] = 0.974.', '(1 − r²)² = 0.0998, so (2ζr)² = 0.874 → 2ζr = 0.935 → ζ = 0.408.', 'c = 2ζ√(km) = 2(0.408)√(1500 × 2) = <b>44.6 N·s/m</b>.'] },
    slides: [S10c('L28_Vib-05', 'L28: base excitation, relative coordinates'), S10c('L28_Vib-09', 'L28: base excitation response'), S10c('VibrationMeasurement-03', 'L29: measuring vibration (accelerometer / vibrometer)'), S10c('VibrationMeasurement-06', 'L29: summary')],
    formulas: ['Base y = b sin ω₀t, z = x − y: z̈ + 2ζω_nż + ω_n²z = ω₀²b sin ω₀t', 'Relative: Z = b r²/√[(1 − r²)² + (2ζr)²]', 'Absolute: X = b√[1 + (2ζr)²]/√[(1 − r²)² + (2ζr)²]', 'r → ∞: Z/b → 1 (displacement sensor); r → 0: Z ∝ base acceleration (accelerometer)', 'ω₀ = 2πf; peak-to-peak = 2 × amplitude'],
    cards: [
      { f: 'Relative amplitude for base excitation y = b sin ω₀t', b: 'Z = b r² / √[(1 − r²)² + (2ζr)²]' },
      { f: 'Absolute amplitude of the mass for base excitation', b: 'X = b√[1 + (2ζr)²] / √[(1 − r²)² + (2ζr)²]' },
      { f: 'Seismometer (vibrometer): r range and design', b: 'r ≫ 1 (ω<sub>n</sub> very low): Z/b → 1, reads base displacement' },
      { f: 'Accelerometer: r range and design', b: 'r ≪ 1 (ω<sub>n</sub> high): Z ∝ ω₀²b = base acceleration; ζ ≈ 0.7' },
      { f: 'Relative-coordinate equation for base excitation', b: 'z̈ + 2ζω<sub>n</sub>ż + ω<sub>n</sub>²z = −ÿ = ω₀²b sin ω₀t' }
    ],
    questions: [
      { type: 'mcq', q: 'A seismic instrument reads the base displacement directly when…', opts: ['ω₀ ≪ ω<sub>n</sub>', 'ω₀ ≫ ω<sub>n</sub> (low natural frequency instrument)', 'ω₀ = ω<sub>n</sub>', 'c = 0'], a: 1, why: 'For r ≫ 1, Z/b → 1: the mass stays still while the frame moves.' },
      { type: 'mcq', q: 'An accelerometer is designed with…', opts: ['a very low natural frequency', 'a high natural frequency compared to the measured frequencies', 'ζ = 0 exactly', 'r = 1'], a: 1, why: 'With r ≪ 1, Z ≈ b r² = (acceleration amplitude)/ω<sub>n</sub>², proportional to the base acceleration.' },
      { type: 'mcq', q: 'In z̈ + 2ζω<sub>n</sub>ż + ω<sub>n</sub>²z = −ÿ, z is…', opts: ['the absolute position of the mass', 'the mass position relative to the base (x − y)', 'the base position', 'the spring force'], a: 1, why: 'z = x − y is the spring stretch.' },
      { type: 'work', marks: 4, paper: 'pastA', order: 3.1, src: 'Sem 2 2023, Q A3(a)', q: 'A seismic instrument has a mass supported by a spring k and viscous damper c on a base that moves y = b sin ω₀t. Give the steady-state (particular) solution for the relative motion z = x − y, and explain what the amplitude factor and the magnification factor are.',
        steps: ['z̈ + 2ζω<sub>n</sub>ż + ω<sub>n</sub>²z = ω₀²b sin ω₀t has particular solution <b>z(t) = Z sin(ω₀t − φ)</b>.', 'Amplitude factor: Z = b r²/√[(1 − r²)² + (2ζr)²] (the actual amplitude, in length units).', 'Magnification factor: Z/b = r²/√[(1 − r²)² + (2ζr)²] (dimensionless; the ratio of response amplitude to input amplitude as a function of r and ζ).', 'Phase φ = tan⁻¹[2ζr/(1 − r²)].'], ans: 'z = Z sin(ω₀t − φ), Z = b r²/√[(1−r²)²+(2ζr)²]' },
      { type: 'work', marks: 4, paper: 'pastA', order: 3.2, src: 'Sem 2 2023, Q A3(b)', q: 'Sketch (describe) the magnification factor Z/b against frequency ratio r for several damping ratios, and explain the physical meaning of the limits ω₀ → 0 and ω₀ → ∞.',
        steps: ['Curves start at 0 at r = 0, rise to a peak near r = 1 (lower damping gives a taller, sharper peak), then settle towards 1 for large r, for every ζ. Higher damping gives a lower, flatter peak near r = 1.', 'ω₀ → 0: Z/b → 0. The base moves so slowly that the mass follows it rigidly; the spring does not stretch.', 'ω₀ → ∞: Z/b → 1. The mass cannot respond to fast base motion so stays still, and the relative motion equals the base motion (seismometer).'], ans: 'r → 0: Z/b → 0; r → ∞: Z/b → 1' },
      { type: 'work', marks: 4, paper: 'pastA', order: 3.3, src: 'Sem 2 2023, Q A3(c)', q: 'The seismic instrument is on a structure vibrating at f = 5 Hz with peak-to-peak amplitude 18 mm. The sensing mass is m = 2 kg on a spring k = 1.5 kN/m with viscous damping c. What is the natural frequency f<sub>n</sub> in Hz?',
        steps: ['ω<sub>n</sub> = √(k/m) = √(1500/2) = 27.39 rad/s.', 'f<sub>n</sub> = ω<sub>n</sub>/2π = <b>4.36 Hz</b>.'], ans: 'f_n = 4.36 Hz' },
      { type: 'work', marks: 8, paper: 'pastA', order: 3.4, src: 'Sem 2 2023, Q A3(d)', q: 'The motion of the mass relative to the base is recorded with a peak-to-peak amplitude of 24 mm in steady state. Using the data from part (c) (base 5 Hz, 18 mm peak-to-peak; m = 2 kg, k = 1.5 kN/m), calculate the damping constant c.',
        hint: 'Z/b = 24/18. Find r first.',
        steps: ['r = ω₀/ω<sub>n</sub> = (2π × 5)/27.39 = 31.42/27.39 = 1.147; r² = 1.316.', 'Z/b = 12/9 = 1.333 = r²/√[(1 − r²)² + (2ζr)²] → √[…] = 1.316/1.333 = 0.987 → […] = 0.974.', '(1 − r²)² = (−0.316)² = 0.0998 → (2ζr)² = 0.874 → 2ζr = 0.935 → ζ = 0.935/(2 × 1.147) = 0.408.', 'c = 2ζ√(km) = 2(0.408)√(1500 × 2) = 2(0.408)(54.77) = <b>44.6 N·s/m</b>.'], ans: 'c ≈ 44.6 N·s/m' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'viso', name: 'Vibration isolation (transmissibility)', freq: 0.7, freqNote: 'Weeks 11-12 (L30 transmissibility)', assigned: false,
    lesson:
`<p>Goal: stop vibration travelling from a machine into its supports (force transmissibility), or from a vibrating floor into delicate equipment (motion transmissibility). The same formula covers both:</p>
<p><b>TR = √[1 + (2ζr)²] / √[(1 − r²)² + (2ζr)²]</b>, r = ω₀/ω<sub>n</sub>.</p>
<ul><li><b>Force transmissibility:</b> F<sub>T</sub>/F₀ for a machine producing force F₀ on its mounts.</li><li><b>Motion transmissibility:</b> X/b (this is the absolute amplitude ratio from base excitation).</li></ul>
<h4>Rules</h4>
<ol><li>TR &gt; 1 (amplified!) for r &lt; √2. <b>Isolation only works for r &gt; √2 = 1.414.</b></li><li>For r &gt; √2, <b>less</b> damping gives better isolation. But some damping is needed to survive passing through resonance at start-up.</li><li>To isolate, <b>lower the natural frequency</b> (softer springs or heavier machine), so r gets large.</li><li>Undamped: TR = 1/(r² − 1) for r &gt; √2. Solve for r from the TR you want.</li></ol>
<h4>Design routine</h4>
<p>Required TR → r → ω<sub>n</sub> = ω₀/r → k = m ω<sub>n</sub>².</p>`,
    example: { q: 'A 100 kg machine runs at 1200 rpm. Choose k (no damping) so that only 10% of the force is transmitted.',
      steps: ['ω₀ = 1200 × 2π/60 = 125.7 rad/s.', 'Undamped: TR = 1/(r² − 1) = 0.1 → r² = 11 → r = 3.32.', 'ω<sub>n</sub> = 125.7/3.32 = 37.9 rad/s → k = m ω<sub>n</sub>² = 100 × 1435 = <b>143.5 kN/m</b>.'] },
    slides: [S10c('Transmissibility-03', 'L30: force and motion transmissibility'), S10c('Transmissibility-05', 'L30: notes on isolation')],
    formulas: ['TR = √[1 + (2ζr)²]/√[(1 − r²)² + (2ζr)²]', 'Isolation requires r &gt; √2', 'Undamped: TR = 1/(r² − 1)', 'Design: TR → r → ω_n = ω₀/r → k = mω_n²'],
    cards: [
      { f: 'Transmissibility ratio formula', b: 'TR = √[1 + (2ζr)²] / √[(1 − r²)² + (2ζr)²]' },
      { f: 'Frequency ratio needed for any isolation', b: 'r &gt; √2 ≈ 1.414' },
      { f: 'Effect of damping on isolation above r = √2', b: 'More damping gives WORSE isolation (but helps at resonance)' },
      { f: 'Undamped transmissibility', b: 'TR = 1 / (r² − 1)' }
    ],
    questions: [
      { type: 'mcq', q: 'A machine mount has natural frequency equal to half the machine speed (r = 2). The transmissibility (small damping) is about…', opts: ['0.33', '1', '3', '0.5'], a: 0, why: 'TR ≈ 1/(r² − 1) = 1/3 = 0.33 (r = 2 &gt; √2 so isolation works).' },
      { type: 'mcq', q: 'To improve isolation at a fixed machine speed, you should…', opts: ['stiffen the springs', 'make the springs softer (lower ω<sub>n</sub>)', 'add as much damping as possible', 'run at resonance'], a: 1, why: 'Lowering ω<sub>n</sub> raises r, moving further into the isolating region.' },
      { type: 'mcq', q: 'For r &gt; √2, increasing damping…', opts: ['reduces transmissibility', 'increases transmissibility', 'has no effect', 'removes the need for springs'], a: 1, why: 'The √[1 + (2ζr)²] numerator grows. Damping is only helpful near resonance.' },
      { type: 'work', marks: 5, paper: 'prac1', order: 6, src: 'Practice', q: 'A 100 kg machine runs at 1200 rpm. Choose the spring stiffness (negligible damping) so that only 10% of the unbalance force reaches the floor.',
        steps: ['ω₀ = 125.7 rad/s. TR = 1/(r² − 1) = 0.1 → r = √11 = 3.32.', 'ω<sub>n</sub> = 125.7/3.32 = 37.9 rad/s.', 'k = mω<sub>n</sub>² = 100 × 37.9² = 143.5 kN/m.'], ans: 'k ≈ 144 kN/m' },
      { type: 'work', marks: 4, src: 'Practice', q: 'For r = 3, find the transmissibility with ζ = 0 and with ζ = 0.1.',
        steps: ['ζ = 0: TR = 1/(9 − 1) = 0.125.', 'ζ = 0.1: 2ζr = 0.6; numerator √(1 + 0.36) = 1.166; denominator √[(1 − 9)² + 0.36] = 8.02; TR = 0.145. Damping makes isolation slightly worse at r = 3.'], ans: '0.125 and 0.145' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'vecc', name: 'Rotating unbalance (eccentric excitation)', freq: 0.7, freqNote: 'Week 11-12 (L31)', assigned: false,
    lesson:
`<p>A machine of total mass M has a small rotating unbalance m (an offset mass at eccentricity e), spinning at ω₀. The rotating mass produces a vertical force of amplitude <b>m e ω₀²</b> that grows with speed squared.</p>
<p><b>M ẍ + c ẋ + k x = m e ω₀² sin ω₀t</b></p>
<p>Steady-state amplitude: <b>X = (m e / M) r² / √[(1 − r²)² + (2ζr)²]</b>, with r = ω₀/ω<sub>n</sub> and ω<sub>n</sub> = √(k/M).</p>
<ul><li>r → 0: X → 0 (slow machines hardly shake)</li><li>r = 1: X = (m e/M)/(2ζ), the danger zone</li><li><b>r ≫ 1: X → m e/M</b>, a constant. Beyond resonance the machine "rotates about its own centre of mass" with this small amplitude.</li></ul>
<h4>Force transmitted to the ground</h4>
<p>The spring and damper force: <b>F<sub>T</sub> = X √[k² + (c ω₀)²]</b>.</p>
<p>(Same r²-type formula as base excitation: the relative-motion curve Z/b with b replaced by m e/M.)</p>`,
    example: { q: 'M = 50 kg machine (including unbalance m e = 0.02 kg·m) on k = 50 kN/m, ζ = 0.1, running at ω₀ = 100 rad/s. Find the amplitude.',
      steps: ['ω<sub>n</sub> = √(50 000/50) = 31.6 rad/s → r = 3.162, r² = 10.', 'm e/M = 0.02/50 = 0.0004 m.', 'Denominator √[(1 − 10)² + (2 × 0.1 × 3.162)²] = √(81 + 0.4) = 9.02.', 'X = 0.0004 × 10/9.02 = 0.443 mm (close to the limit m e/M = 0.4 mm).'] },
    slides: [S10c('EccentricExcitation-03', 'L31: amplitude and phase for eccentric excitation'), S10c('EccentricExcitation-05', 'L31: notes')],
    formulas: ['Force amplitude m e ω₀²; Mẍ + cẋ + kx = m e ω₀² sin ω₀t', 'X = (m e/M) r²/√[(1 − r²)² + (2ζr)²]', 'r ≫ 1: X → m e/M; r = 1: X = (m e/M)/(2ζ)', 'F_T = X√[k² + (cω₀)²]'],
    cards: [
      { f: 'Force from a rotating unbalance m at eccentricity e', b: 'F = m e ω₀² (grows with speed squared)' },
      { f: 'Steady-state amplitude, rotating unbalance', b: 'X = (me/M) r² / √[(1 − r²)² + (2ζr)²]' },
      { f: 'High-speed limit of rotating unbalance amplitude', b: 'X → m e / M  (as r → ∞)' },
      { f: 'Force transmitted to the ground', b: 'F<sub>T</sub> = X √[k² + (cω₀)²]' }
    ],
    questions: [
      { type: 'mcq', q: 'For a machine with rotating unbalance running well above resonance (r ≫ 1), the amplitude approaches…', opts: ['zero', 'me/M', 'infinity', 'F₀/k'], a: 1, why: 'r²/√[(1 − r²)² + …] → 1, so X → me/M.' },
      { type: 'mcq', q: 'The force produced by a rotating unbalance m e at speed ω₀ is proportional to…', opts: ['ω₀', 'ω₀²', 'constant', '1/ω₀'], a: 1, why: 'Centripetal force m e ω₀² goes with speed squared.' },
      { type: 'work', marks: 6, paper: 'prac1', order: 7, src: 'Practice', q: 'A 50 kg machine (total mass, including an unbalance m e = 0.02 kg·m) is on mounts with k = 50 kN/m and ζ = 0.1. It runs at 100 rad/s. Find the vibration amplitude X and the force transmitted to the floor.',
        steps: ['ω<sub>n</sub> = 31.62 rad/s, r = 3.162, r² = 10; m e/M = 0.0004 m.', 'X = 0.0004 × 10/√(81 + 0.4) = 0.000443 m = 0.443 mm.', 'c = 2ζ√(kM) = 0.2 × √(50 000 × 50) = 316 N·s/m; cω₀ = 31.6 kN/m.', 'F<sub>T</sub> = X√(k² + (cω₀)²) = 0.000443 × √(50 000² + 31 623²) = 0.000443 × 59 161 = 26.2 N.'], ans: 'X = 0.443 mm, F_T ≈ 26 N' }
    ] }
]);

/* ---- mock papers for MECH2210 ---- */
(function () {
  var c = DATA.course('MECH2210');
  c.papers.push({ id: 'pastA', name: 'Past Part A questions (2023 / 2025, parts that need no figure)', fullMarks: 100, fullMin: 120, note: 'Real exam questions. 2026 course content has changed (see the course page), so use as style practice.' });
  c.papers.push({ id: 'prac1', name: 'Mixed practice paper 1 (my questions in exam style)', fullMarks: 100, fullMin: 120, note: 'Rigid body, impacts and vibration questions in the style of Part A.' });
  c.summary = 'Dynamics of particles and rigid bodies, impacts, and vibration of spring-mass-damper systems. Exam is 2 hours, notes allowed (one A4 sheet, double-sided).';
  c.exam.format = 'The Blackboard page says past exams are NOT a reliable guide for 2026. Weekly quizzes and tutorials are the best guide.';
})();
