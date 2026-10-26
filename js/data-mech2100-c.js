/* MECH2100 part 3: bearings, bolted joints, fastener fatigue, welds, weld fatigue, design practice (weeks 7, 9-13). */
var M23 = function (n, cap) { return { src: 'img/m2100/' + n + '.jpg', cap: cap }; };
DATA.addTopics('MECH2100', [
  /* ------------------------------------------------------------ */
  { id: 'bearings', name: 'Rolling and plain bearings: life, selection, Miner\'s rule', freq: 0.85, freqNote: 'Week 7. Applied class week 7 Q1-Q9 and week 8 Q6', assigned: false,
    lesson:
`<h4>Rolling-element bearings</h4>
<ul><li>Parts: inner race, outer race (raceways), rolling elements (balls or rollers), cage. Main failure: <b>surface fatigue</b> (spalling) after many revolutions.</li>
<li>Types: deep groove ball (radial + some thrust), angular contact (larger thrust), cylindrical roller (high radial), tapered roller (radial + thrust, used in pairs), needle (small radial space), spherical (misalignment), thrust bearings.</li>
<li><b>Basic dynamic load rating C</b>: the load giving a life of 10⁶ revolutions at 90% reliability (L₁₀).</li></ul>
<h4>Life equation (on the formula sheet)</h4>
<p><b>L<sub>d</sub> = (C/P<sub>d</sub>)<sup>k</sup> × 10⁶ revolutions</b>, k = 3 for ball, 3.33 for roller. So the required rating is <b>C = P<sub>d</sub>(L<sub>d</sub>/10⁶)<sup>1/k</sup></b>.</p>
<ul><li>Design life in revolutions = hours × 60 × rpm.</li>
<li>Other reliability: the catalogue is for 90%. Convert first: L₁₀ = L<sub>d</sub>/C<sub>R</sub> (C<sub>R</sub>: 95% → 0.62, 99% → 0.21), then use the equation.</li>
<li>Life ratio for different loads: L₂/L₁ = (P₁/P₂)<sup>k</sup>. Doubling the load cuts ball-bearing life by 8.</li>
<li><b>Equivalent load</b> with thrust: P<sub>d</sub> = V X R + Y T (V = 1.0 if the inner race rotates, 1.2 if the outer race rotates). For large thrust (T/R &gt; e) use X = 0.56 and Y from the table (start with Y = 1.5, then iterate using T/C₀).</li>
<li>Select the first bearing whose C exceeds the required value. Shaft shoulder diameter must lie between the bearing\'s minimum and maximum shoulder diameters.</li>
<li><b>Variable loads (Miner):</b> Σ(revolutions at load i)/(life at load i) = 1, with life at load i = 10⁶(C/P<sub>i</sub>)<sup>k</sup>.</li></ul>
<h4>Plain (sliding) bearings</h4>
<ul><li>Bearing pressure p = F/(L D) (projected area). Boundary-lubricated bearings are checked with <b>pV</b> (V = surface speed ωD/2), using the recommended L/D.</li>
<li>Hydrodynamic bearings use the <b>Sommerfeld number</b> S = μ n<sub>s</sub> (R/c<sub>r</sub>)²/p (μ in Pa·s, n<sub>s</sub> in rev/s, p in Pa, c<sub>r</sub> = radial clearance).</li>
<li>Friction torque T<sub>f</sub> = f F R; power loss P<sub>f</sub> = T<sub>f</sub> ω. (Rolling bearings: SKF friction model, P = M ω.)</li></ul>`,
    example: { q: 'A ball bearing carries 4200 N at 800 rpm for 15 000 h (90% reliability). Find the required C.',
      steps: ['L<sub>d</sub> = 15 000 × 60 × 800 = 7.2 × 10⁸ revolutions = 720 million.', 'C = P<sub>d</sub>(L<sub>d</sub>/10⁶)<sup>1/3</sup> = 4200 × 720<sup>1/3</sup> = 4200 × 8.96 = <b>37.6 kN</b>. Pick the first bearing with C ≥ 37.6 kN.'] },
    slides: [M23('w7_compare', 'Week 7: comparison of bearing types'), M23('w7_life', 'Week 7: dynamic load rating and L10 life'), M23('w7_steps', 'Week 7: bearing selection, radial load only'), M23('w7_steps2', 'Week 7: bearing selection with thrust')],
    formulas: ['L_d = (C/P_d)^k × 10⁶ rev; k = 3 ball, 3.33 roller', 'C = P_d (L_d/10⁶)^(1/k); L_d = hours × 60 × rpm', 'Reliability ≠ 90%: L10 = L_d/C_R (95%: 0.62, 99%: 0.21)', 'P_d = VXR + YT (V = 1.0 inner rotating, 1.2 outer)', 'Miner: Σ n_i/L_i = 1; L₂/L₁ = (P₁/P₂)^k', 'Plain: p = F/(LD); pV; Sommerfeld S = μ n_s (R/c_r)²/p'],
    cards: [
      { f: 'Bearing life equation', b: 'L = (C/P)<sup>k</sup> × 10⁶ revolutions<br>k = 3 (ball), 3.33 (roller)' },
      { f: 'What does the basic dynamic load rating C mean?', b: 'The load that gives a life of 1 million revolutions with 90% reliability (L₁₀)' },
      { f: 'How to design for 95% or 99% reliability', b: 'Divide the design life by C<sub>R</sub> to get the equivalent L₁₀ (95% → 0.62, 99% → 0.21), then use the L₁₀ equation' },
      { f: 'Equivalent bearing load with thrust', b: 'P<sub>d</sub> = V X R + Y T<br>(V = 1.0 inner race rotating, 1.2 outer race rotating)' },
      { f: 'If the bearing load doubles, a ball bearing\'s life becomes…', b: '1/8 of the original (life ∝ 1/P³)' },
      { f: 'Name the four parts of a ball bearing', b: 'Inner race, outer race, balls (rolling elements), cage (separator)' },
      { f: 'Sommerfeld number', b: 'S = μ n<sub>s</sub> (R/c<sub>r</sub>)² / p' }
    ],
    questions: [
      { type: 'mcq', q: 'The radial load on a ball bearing is doubled. Its L₁₀ life becomes…', opts: ['1/2', '1/4', '1/8', '1/10'], a: 2, why: 'L ∝ (1/P)³ for ball bearings: 2³ = 8.' },
      { type: 'mcq', q: 'Which bearing type suits a large radial load plus a significant thrust load?', opts: ['needle bearing', 'cylindrical roller bearing', 'tapered roller bearing', 'thrust ball bearing'], a: 2, why: 'Tapered rollers carry combined radial and axial loads (used in opposed pairs).' },
      { type: 'mcq', q: 'For 99% reliability, the required L₁₀ life compared to the design life is…', opts: ['the same', 'about 4.8 times longer', 'shorter', '1.62 times longer'], a: 1, why: 'L₁₀ = L<sub>d</sub>/0.21 ≈ 4.8 L<sub>d</sub>.' },
      { type: 'work', marks: 4, src: 'Practice (week 7 Q3 style)', q: 'A deep groove ball bearing carries 4200 N radial at 800 rpm. The L₁₀ design life is 15 000 h. Find the required basic dynamic load rating.',
        steps: ['L<sub>d</sub> = 15 000 × 60 × 800 = 720×10⁶ rev.', 'C = 4200 × (720)<sup>1/3</sup> = 4200 × 8.963 = <b>37.6 kN</b>.'], ans: 'C ≈ 37.6 kN' },
      { type: 'work', marks: 4, src: 'Practice (week 7 Q5 style)', q: 'A ball bearing must carry 3000 N at 1000 rpm for 12 000 h with 95% reliability. Find the required C.',
        steps: ['L<sub>d</sub> = 12 000 × 60 × 1000 = 720×10⁶ rev.', 'Equivalent L₁₀ = 720/0.62 = 1161×10⁶ rev.', 'C = 3000 × 1161<sup>1/3</sup> = 3000 × 10.51 = <b>31.5 kN</b>.'], ans: 'C ≈ 31.5 kN' },
      { type: 'work', marks: 3, src: 'Practice (week 7 Q6 style)', q: 'A deep groove ball bearing (inner race rotating) carries R = 4000 N and T = 2000 N. Using X = 0.56 and Y = 1.6, find the equivalent load.',
        steps: ['P<sub>d</sub> = VXR + YT = 1.0 × 0.56 × 4000 + 1.6 × 2000 = 2240 + 3200 = <b>5440 N</b>.'], ans: '5440 N' },
      { type: 'work', marks: 6, paper: 'prac1', order: 6, src: 'Practice (week 7 Q4 style)', q: 'A ball bearing with C = 62 kN runs at 300 rpm through a repeating 40-minute cycle: 30 min at 12 kN and 10 min at 24 kN. Find its L₁₀ life in hours.',
        steps: ['Revolutions per cycle: 300 × 30 = 9000 at 12 kN; 300 × 10 = 3000 at 24 kN.', 'Lives: L₁ = 10⁶(62/12)³ = 1.379×10⁸ rev; L₂ = 10⁶(62/24)³ = 1.724×10⁷ rev.', 'Damage per cycle = 9000/1.379×10⁸ + 3000/1.724×10⁷ = 6.53×10⁻⁵ + 1.74×10⁻⁴ = 2.39×10⁻⁴.', 'Cycles to failure = 1/2.39×10⁻⁴ = 4179 cycles → 4179 × 40/60 = <b>≈ 2790 hours</b>.'], ans: '≈ 2790 h' },
      { type: 'work', marks: 4, src: 'Practice (week 7 Q8-Q9 style)', q: 'A journal bearing: F = 3000 N, D = 40 mm, L = 60 mm, radial clearance 0.04 mm, oil viscosity 0.02 Pa·s, speed 4000 rpm. Find the bearing pressure and the Sommerfeld number.',
        steps: ['p = F/(LD) = 3000/(0.06 × 0.04) = 1.25 MPa.', 'n<sub>s</sub> = 4000/60 = 66.7 rev/s; R/c<sub>r</sub> = 20/0.04 = 500.', 'S = μn<sub>s</sub>(R/c<sub>r</sub>)²/p = 0.02 × 66.7 × 250 000/1.25×10⁶ = <b>0.267</b>.'], ans: 'p = 1.25 MPa, S ≈ 0.267' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'bolts', name: 'Bolted joints: preload, joint stiffness, separation and slip', freq: 0.9, freqNote: 'Week 9. Applied class week 9 demo + Q1-Q6', assigned: false,
    lesson:
`<h4>Bolt basics</h4>
<ul><li>Tensile stress area (formula sheet): <b>A<sub>t</sub> = (π/4)(D − 0.9382p)²</b> (D nominal diameter, p pitch). M10 × 1.5 → 58.0 mm², M12 × 1.75 → 84.3 mm², M16 × 2 → 157 mm².</li>
<li>Metric property class J.K: S<sub>u</sub> ≈ 100J MPa, S<sub>y</sub> ≈ 0.1K × S<sub>u</sub> (8.8: 800 and 640 MPa). Proof strength S<sub>p</sub> (table, about 94% of S<sub>y</sub>; 8.8 → 600 MPa). Proof load F<sub>p</sub> = S<sub>p</sub>A<sub>t</sub>.</li>
<li>Preload F<sub>i</sub> is usually 75% (reusable) to 90% (permanent) of the proof load. Torque-tension: <b>T = K F<sub>i</sub> D</b>, K = 0.20 dry, 0.15 lubricated.</li></ul>
<h4>Joint stiffness and the joint diagram</h4>
<ul><li>Bolt stiffness k<sub>b</sub> = E<sub>b</sub>A<sub>t</sub>/l (springs in series for shank + thread). Clamped members k<sub>c</sub> = E<sub>c</sub>A<sub>c</sub>/l (A<sub>c</sub> ≈ 3A<sub>t</sub>), members and gasket in series.</li>
<li><b>Joint stiffness constant λ = k<sub>b</sub>/(k<sub>b</sub> + k<sub>c</sub>)</b>: the fraction of the external load that goes into the bolt.</li>
<li>With an external separating load P per bolt: <b>bolt force F<sub>b</sub> = F<sub>i</sub> + λP</b>, <b>clamp force F<sub>c</sub> = F<sub>i</sub> − (1 − λ)P</b>.</li>
<li>Stiff clamp / soft bolt → λ small → the bolt hardly feels the load (good for fatigue). A soft gasket → λ ≈ 1 → the bolt takes almost all of P.</li></ul>
<h4>Design criteria</h4>
<ul><li><b>Separation</b> (leaks) when F<sub>c</sub> = 0, i.e. P = F<sub>i</sub>/(1 − λ). Required preload to avoid it: F<sub>i</sub> ≥ (1 − λ)P.</li>
<li><b>Slip</b> under shear: friction must carry the shear, V ≤ μF<sub>c</sub> per bolt. Otherwise the bolt shank takes shear.</li>
<li><b>Bolt yield/fracture:</b> σ<sub>b,max</sub> = F<sub>b</sub>/A<sub>t</sub> ≤ S<sub>fail</sub>/F<sub>d</sub>.</li></ul>
<h4>Bolt groups (formula sheet)</h4>
<ul><li><b>Shear from a torque</b> T = Pe about the group centroid: F<sub>k</sub> = T r<sub>k</sub>A<sub>k</sub>/ΣA r² (perpendicular to r<sub>k</sub>). Add vectorially the direct shear V = P/N. The farthest bolt is critical.</li>
<li><b>Tension from a moment</b> (bracket pivoting about its edge): F<sub>n</sub> = M y<sub>n</sub>A<sub>n</sub>/ΣA y². The bolt farthest from the pivot carries most.</li></ul>`,
    example: { q: 'M10 × 1.5 class 8.8 bolt (A<sub>t</sub> = 58 mm², S<sub>p</sub> = 600 MPa) preloaded to 75% of proof. λ = 0.25. External separating load 8 kN per bolt. Find F<sub>b</sub>, F<sub>c</sub>, and the separation load.',
      steps: ['F<sub>p</sub> = 600 × 58 = 34.8 kN; F<sub>i</sub> = 0.75 × 34.8 = 26.1 kN.', 'F<sub>b</sub> = 26.1 + 0.25 × 8 = <b>28.1 kN</b> (σ = 484 MPa &lt; 600).', 'F<sub>c</sub> = 26.1 − 0.75 × 8 = <b>20.1 kN</b> (still clamped).', 'Separation at P = F<sub>i</sub>/(1 − λ) = 26.1/0.75 = <b>34.8 kN</b>.'] },
    slides: [M23('w9_diagram', 'Week 9: bolted joint diagram'), M23('w9_stiff', 'Week 9: clamp member stiffness'), M23('w9_criteria', 'Week 9: design criteria (separation, slip, yield)')],
    formulas: ['A_t = (π/4)(D − 0.9382p)²', 'Class J.K: S_u = 100J, S_y = 0.1K·S_u; F_p = S_p A_t', 'T = K F_i D (K = 0.20 dry, 0.15 lubricated)', 'λ = k_b/(k_b + k_c); F_b = F_i + λP; F_c = F_i − (1 − λ)P', 'No separation: F_i ≥ (1 − λ)P; no slip: V ≤ μF_c', 'Torsion group: F_k = T r_k A_k/ΣAr²; bending group: F_n = M y_n A_n/ΣAy²'],
    cards: [
      { f: 'Bolt force and clamp force with external load P', b: 'F<sub>b</sub> = F<sub>i</sub> + λP<br>F<sub>c</sub> = F<sub>i</sub> − (1 − λ)P' },
      { f: 'Joint stiffness constant λ', b: 'λ = k<sub>b</sub>/(k<sub>b</sub> + k<sub>c</sub>): the fraction of external load taken by the bolt' },
      { f: 'Condition for joint separation', b: 'F<sub>c</sub> = 0 → P = F<sub>i</sub>/(1 − λ)' },
      { f: 'No-slip condition for a bolted shear joint', b: 'V ≤ μ F<sub>c</sub> per bolt' },
      { f: 'Torque-tension relationship', b: 'T = K F<sub>i</sub> D (K ≈ 0.20 dry, 0.15 lubricated)' },
      { f: 'Metric bolt class J.K', b: 'S<sub>u</sub> ≈ 100J MPa, S<sub>y</sub> ≈ 0.1K × S<sub>u</sub> (e.g. 8.8: 800, 640 MPa; proof 600)' },
      { f: 'Soft gasket (k<sub>c</sub> ≪ k<sub>b</sub>): what happens to the bolt load?', b: 'λ → 1: the bolt takes almost all the external load (F<sub>b</sub> ≈ F<sub>i</sub> + P)' },
      { f: 'Bolt group under eccentric shear: which bolt is critical?', b: 'The one farthest from the centroid where torsion and direct shear add' }
    ],
    questions: [
      { type: 'mcq', q: 'A joint has a thick soft gasket, so k<sub>c</sub> ≪ k<sub>b</sub>. Preload 80 kN, external load 60 kN per bolt. The bolt force is about…', opts: ['80 kN', '95 kN', '140 kN', '20 kN'], a: 2, why: 'λ ≈ 1, so F<sub>b</sub> ≈ F<sub>i</sub> + P = 140 kN.' },
      { type: 'mcq', q: 'The ratio S<sub>y</sub>/S<sub>u</sub> for a grade 5.8 bolt is about…', opts: ['0.5', '0.58', '0.8', '0.58 × 5'], a: 2, why: 'Class J.K: S<sub>y</sub> = 0.1K × S<sub>u</sub> = 0.8 S<sub>u</sub>.' },
      { type: 'mcq', q: 'Making the clamped members stiffer (lower λ) …', opts: ['increases the bolt\'s share of the load', 'decreases the bolt\'s share of the load', 'has no effect', 'causes separation'], a: 1, why: 'λ = k<sub>b</sub>/(k<sub>b</sub> + k<sub>c</sub>) falls as k<sub>c</sub> rises.' },
      { type: 'work', marks: 5, src: 'Practice (week 9 Q3 style)', q: 'A cover is held by 12 bolts. The total separating force is 96 kN and the clamp is 4 times stiffer than each bolt (k<sub>c</sub> = 4k<sub>b</sub>). Find the minimum preload per bolt to prevent separation.',
        steps: ['P per bolt = 96/12 = 8 kN. λ = 1/(1 + 4) = 0.2.', 'No separation: F<sub>i</sub> ≥ (1 − λ)P = 0.8 × 8 = <b>6.4 kN</b>.'], ans: '6.4 kN' },
      { type: 'work', marks: 6, paper: 'prac1', order: 7, src: 'Practice', q: 'An M10 × 1.5 class 8.8 bolt (A<sub>t</sub> = 58 mm², S<sub>p</sub> = 600 MPa) is preloaded to 75% of proof load. λ = 0.25 and the external separating load is 8 kN. (a) Preload and the dry tightening torque. (b) Bolt and clamp forces. (c) Load at which the joint separates.',
        steps: ['(a) F<sub>i</sub> = 0.75 × 600 × 58 = 26.1 kN. T = KF<sub>i</sub>D = 0.20 × 26 100 × 0.010 = <b>52.2 N·m</b>.', '(b) F<sub>b</sub> = 26.1 + 0.25 × 8 = 28.1 kN (484 MPa). F<sub>c</sub> = 26.1 − 0.75 × 8 = 20.1 kN.', '(c) P<sub>sep</sub> = F<sub>i</sub>/(1 − λ) = <b>34.8 kN</b>.'], ans: 'F_i = 26.1 kN, T = 52 N·m; F_b = 28.1, F_c = 20.1 kN; P_sep = 34.8 kN' },
      { type: 'work', marks: 6, paper: 'prac1', order: 8, src: 'Practice (week 9 Q4 style)', q: 'Four equal bolts sit at the corners of a 100 mm × 100 mm square. A bracket applies P = 8 kN downward at 300 mm (horizontally) from the bolt-group centroid. (a) Find the torsional shear force on each bolt. (b) Find the largest resultant shear force. (c) What clamp force per bolt is needed for no slip with μ = 0.35?',
        steps: ['(a) T = Pe = 8000 × 0.3 = 2400 N·m. Each bolt r = √(50² + 50²) = 70.7 mm. F = T/(4r) = 2400/(4 × 0.0707) = <b>8485 N</b> (perpendicular to r, components 6000 N each way).', '(b) Direct shear V = 8000/4 = 2000 N downward. On the worst bolt the torsion component (6000 N down) adds: resultant = √(6000² + (6000 + 2000)²) = <b>10.0 kN</b>.', '(c) F<sub>c</sub> ≥ 10 000/0.35 = <b>28.6 kN</b> per bolt.'], ans: '8.49 kN; 10.0 kN; 28.6 kN' },
      { type: 'work', marks: 6, src: 'Practice (week 9 demo style)', q: 'A wall bracket is held by 4 bolts: two at 50 mm and two at 250 mm above the pivot edge. A load P = 5 kN acts 200 mm from the wall. λ = 0.2, μ = 0.35. Find the tensile load on a top bolt from the moment and the preload needed so the top bolts do not slip.',
        steps: ['M = Pa = 5000 × 200 = 1.0×10⁶ N·mm. Σy² = 2(50²) + 2(250²) = 130 000 mm².', 'Top bolt: F = M y/Σy² = 10⁶ × 250/130 000 = <b>1923 N</b>.', 'Shear per bolt V = 5000/4 = 1250 N → required clamp F<sub>c</sub> = V/μ = 3571 N.', 'F<sub>i</sub> = F<sub>c</sub> + (1 − λ)F = 3571 + 0.8 × 1923 = <b>5110 N</b>.'], ans: '1923 N; F_i ≈ 5.1 kN' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'boltfatigue', name: 'Fastener fatigue and assembly practice', freq: 0.75, freqNote: 'Week 10. Applied class week 10 Q1-Q8', assigned: false,
    lesson:
`<h4>Stresses in a preloaded bolt under a fluctuating load</h4>
<p>External load per bolt varies between P<sub>min</sub> and P<sub>max</sub>. Only the fraction λ reaches the bolt:</p>
<ul><li>Alternating: <b>σ<sub>a</sub> = λ(P<sub>max</sub> − P<sub>min</sub>)/(2A<sub>t</sub>)</b></li>
<li>Mean: <b>σ<sub>m</sub> = σ<sub>i</sub> + λ(P<sub>max</sub> + P<sub>min</sub>)/(2A<sub>t</sub>)</b>, with preload stress σ<sub>i</sub> = F<sub>i</sub>/A<sub>t</sub>.</li>
<li>Without preload the bolt sees the whole load: σ<sub>a</sub> = (P<sub>max</sub> − P<sub>min</sub>)/(2A<sub>t</sub>).</li></ul>
<p><b>Preload raises the mean stress but cuts the alternating stress (by λ), which is what drives fatigue.</b> A lower λ (stiffer joint) lowers both and lengthens life.</p>
<h4>Goodman for bolts (fasteners formula sheet)</h4>
<p>The load line starts at σ<sub>i</sub>. Fatigue strengths:</p>
<p>S<sub>a</sub> = S<sub>n</sub>'σ<sub>a</sub>(S<sub>ut</sub> − σ<sub>i</sub>) / [S<sub>ut</sub>σ<sub>a</sub> + S<sub>n</sub>'(σ<sub>m</sub> − σ<sub>i</sub>)], and the <b>fatigue factor of safety n<sub>f</sub> = S<sub>a</sub>/σ<sub>a</sub></b>.</p>
<p>When P<sub>min</sub> = 0, σ<sub>m</sub> − σ<sub>i</sub> = σ<sub>a</sub> and this simplifies to S<sub>a</sub> = S<sub>n</sub>'(S<sub>ut</sub> − σ<sub>i</sub>)/(S<sub>ut</sub> + S<sub>n</sub>'). (Gerber is an alternative criterion, given when needed.)</p>
<h4>Why threads are weak in fatigue</h4>
<ul><li>Stress concentration at the thread roots, smaller root area, surface imperfections, and the first engaged threads carry most of the load.</li>
<li><b>Rolled threads</b> beat cut threads: compressive residual stress at the roots, continuous grain flow, better finish.</li></ul>
<h4>Assembly practice</h4>
<ul><li>Same torque can give different preload: friction scatter (lubrication, surfaces), geometric/thread tolerances, energy lost in twisting and bending. That is why torque control gives ±25% scatter; turn-of-nut, tension-control bolts or direct tension indicators are better.</li>
<li>Tighten in a cross (star) sequence in stages. Self-loosening is caused by transverse slip; prevent it with enough preload (no slip).</li></ul>`,
    example: { q: 'M12 class 8.8 bolt (A<sub>t</sub> = 84.3 mm², S<sub>ut</sub> = 830, S<sub>p</sub> = 600 MPa), preload 75% of proof, λ = 0.25, load 0 → 18 kN, S<sub>n</sub>\' = 140 MPa. Find n<sub>f</sub>.',
      steps: ['σ<sub>i</sub> = 0.75 × 600 = 450 MPa.', 'σ<sub>a</sub> = 0.25 × 18 000/(2 × 84.3) = 26.7 MPa; σ<sub>m</sub> = 450 + 26.7 = 476.7 MPa.', 'S<sub>a</sub> = S<sub>n</sub>\'(S<sub>ut</sub> − σ<sub>i</sub>)/(S<sub>ut</sub> + S<sub>n</sub>\') = 140 × 380/970 = 54.8 MPa.', '<b>n<sub>f</sub> = 54.8/26.7 = 2.06</b>.'] },
    slides: [M23('w10_goodman', 'Week 10: solving for fatigue strengths on the A-M diagram')],
    formulas: ['σ_a = λ(P_max − P_min)/(2A_t); σ_m = σ_i + λ(P_max + P_min)/(2A_t); σ_i = F_i/A_t', 'Goodman: S_a = S_n\'σ_a(S_ut − σ_i)/[S_ut σ_a + S_n\'(σ_m − σ_i)]; n_f = S_a/σ_a', 'P_min = 0: S_a = S_n\'(S_ut − σ_i)/(S_ut + S_n\')'],
    cards: [
      { f: 'Alternating and mean stress in a preloaded bolt', b: 'σ<sub>a</sub> = λ(P<sub>max</sub> − P<sub>min</sub>)/(2A<sub>t</sub>)<br>σ<sub>m</sub> = σ<sub>i</sub> + λ(P<sub>max</sub> + P<sub>min</sub>)/(2A<sub>t</sub>)' },
      { f: 'Effect of preload on bolt fatigue', b: 'Raises the mean stress but cuts the alternating stress (only λ of the load fluctuation reaches the bolt), so fatigue life improves' },
      { f: 'Four reasons threads are weak in fatigue', b: 'Stress concentration at roots; smaller root area; surface imperfections; first engaged threads carry most load' },
      { f: 'Why are rolled threads better than cut threads?', b: 'Compressive residual stress at roots, unbroken grain flow, smoother surface' },
      { f: 'Why can two bolts with the same torque have different preload?', b: 'Friction scatter (lubrication, surfaces), thread/geometry tolerances, energy lost to twisting and bending' },
      { f: 'Fatigue factor of safety for a bolt', b: 'n<sub>f</sub> = S<sub>a</sub>/σ<sub>a</sub>' }
    ],
    questions: [
      { type: 'mcq', q: 'Increasing the preload on a joint with fluctuating external load…', opts: ['increases the alternating stress', 'leaves the alternating stress unchanged (λ fixed) while raising the mean', 'removes all stress', 'makes λ = 1'], a: 1, why: 'σ<sub>a</sub> = λΔP/2A<sub>t</sub> does not depend on F<sub>i</sub> (as long as the joint stays clamped); σ<sub>m</sub> rises.' },
      { type: 'mcq', q: 'A 20% lower λ (stiffer joint) will…', opts: ['raise σ<sub>a</sub> and σ<sub>m</sub>', 'lower both σ<sub>a</sub> and σ<sub>m</sub>, so life increases', 'lower σ<sub>a</sub> but raise σ<sub>m</sub>', 'have no effect'], a: 1, why: 'Both λ terms shrink; preload part unchanged.' },
      { type: 'work', marks: 5, src: 'Practice (week 10 Q3 style)', q: 'An M12 bolt (A<sub>t</sub> = 84.3 mm²) sees an external load fluctuating from 10 kN to 30 kN. λ = 0.3. Find σ<sub>a</sub> and σ<sub>m</sub> (a) with no preload, (b) with a 40 kN preload.',
        steps: ['(a) σ<sub>a</sub> = (30 − 10)×10³/(2 × 84.3) = 118.6 MPa; σ<sub>m</sub> = (30 + 10)×10³/(2 × 84.3) = 237.2 MPa.', '(b) σ<sub>a</sub> = 0.3 × 20 000/(2 × 84.3) = <b>35.6 MPa</b>; σ<sub>m</sub> = 40 000/84.3 + 0.3 × 40 000/(2 × 84.3) = 474.5 + 71.2 = <b>545.7 MPa</b>.', 'Preload cut the alternating stress by 70% (the fatigue driver) while the mean rose.'], ans: '(a) 118.6, 237.2 MPa; (b) 35.6, 545.7 MPa' },
      { type: 'work', marks: 6, src: 'Practice (week 10 Q5 style)', q: 'An M12 class 8.8 bolt (A<sub>t</sub> = 84.3 mm², S<sub>ut</sub> = 830 MPa, S<sub>p</sub> = 600 MPa) is preloaded to 75% of proof. λ = 0.25. The load varies 0 to 18 kN per bolt. S<sub>n</sub>\' = 140 MPa. Find the Goodman fatigue factor of safety.',
        steps: ['σ<sub>i</sub> = 0.75 × 600 = 450 MPa.', 'σ<sub>a</sub> = 0.25 × 18 000/168.6 = 26.7 MPa; σ<sub>m</sub> = 476.7 MPa.', 'S<sub>a</sub> = 140 × 26.7 × (830 − 450)/(830 × 26.7 + 140 × 26.7) = 140 × 380/970 = 54.8 MPa.', 'n<sub>f</sub> = 54.8/26.7 = <b>2.05</b>.'], ans: 'n_f ≈ 2.05' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'welds', name: 'Welded joints: butt and fillet welds, weld groups', freq: 0.85, freqNote: 'Week 11. Applied class week 11 Q1-Q8', assigned: false,
    lesson:
`<h4>Weld types</h4>
<ul><li><b>Complete penetration butt weld:</b> fuses the whole thickness and the electrode matches/exceeds the parent metal, so treat it as the <b>parent metal strength</b>: F ≤ A S<sub>y</sub>/F<sub>d</sub> with A = thickness × width.</li>
<li><b>Fillet weld</b> of leg size h: the critical section is the <b>throat</b> t = h cos 45° = <b>0.707h</b>. Shear area A = 0.707 h L. Shear stress τ = P/(0.707 h L).</li>
<li>Allowable weld shear: AS4100 t = 0.6 k<sub>r</sub> S<sub>u</sub> (electrode E43XX: S<sub>u</sub> = 430 MPa → 258 MPa) divided by the factor of safety; or 0.58S<sub>y</sub> by distortion energy.</li>
<li>The heat-affected zone (HAZ) next to the weld has changed properties and residual stresses.</li></ul>
<h4>Weld groups (treat the weld as a line, formula sheet + Mott Fig 20-8)</h4>
<p>Work with <b>force per unit length</b> f (N/mm), then divide by the throat.</p>
<ul><li>Direct tension or shear: f = P/A<sub>w</sub> or V/A<sub>w</sub> (A<sub>w</sub> = total weld length).</li>
<li>Bending: f<sub>b</sub> = M/S<sub>w</sub>. Torsion: f<sub>t</sub> = T r/J<sub>w</sub> (S<sub>w</sub>, J<sub>w</sub> are geometry factors "per unit throat", e.g. circle: A<sub>w</sub> = πd, S<sub>w</sub> = πd²/4).</li>
<li>Combine: <b>f<sub>weld</sub> = √(f<sub>s</sub>² + f<sub>b</sub>² + f<sub>t</sub>²)</b>, then <b>τ = f<sub>weld</sub>/(0.707h) ≤ allowable</b>, or required size <b>h = f<sub>weld</sub>/(0.707 τ<sub>allow</sub>)</b>.</li>
<li>C-shaped (bracket) weld: x̄ = b²/(2b + d), J<sub>w</sub> = (2b + d)³/12 − b²(b + d)²/(2b + d). The critical point is the corner farthest from the centroid; the torque arm is measured from the centroid.</li></ul>`,
    example: { q: 'A 50 mm bar is welded all round to a plate with a 6 mm fillet. Load P at 250 mm from the plate, allowable weld shear 124 MPa. Find the maximum P.',
      steps: ['Allowable force per length = 124 × 0.707 × 6 = 526 N/mm.', 'A<sub>w</sub> = πd = 157.1 mm; S<sub>w</sub> = πd²/4 = 1963 mm².', 'f = P√[(250/1963)² + (1/157.1)²] = 0.1275P.', 'P = 526/0.1275 = <b>4.13 kN</b>.'] },
    slides: [M23('w11_throat', 'Week 11: minimum shear area (throat) of a fillet weld'), M23('fs_p28', 'Formula sheet: geometry factors for weld analysis')],
    formulas: ['Butt weld: F ≤ A S_y/F_d', 'Fillet throat t = 0.707h; A = 0.707hL; τ = P/(0.707hL)', 'Allowable: AS4100 0.6k_r S_u (E43XX: 258 MPa); or 0.58S_y', 'f_s = V/A_w; f_b = M/S_w; f_t = Tr/J_w; f = √(f_s² + f_b² + f_t²); h = f/(0.707τ_allow)', 'C-weld: x̄ = b²/(2b + d); J_w = (2b + d)³/12 − b²(b + d)²/(2b + d)'],
    cards: [
      { f: 'Throat of a fillet weld with leg size h', b: 't = 0.707 h (h cos 45°)' },
      { f: 'Why can a complete penetration butt weld be designed as parent metal?', b: 'It fuses the full thickness and the electrode matches/exceeds the base metal strength' },
      { f: 'Treating a weld as a line: how to combine loads', b: 'Find f<sub>s</sub>, f<sub>b</sub>, f<sub>t</sub> (N/mm) → f = √(f<sub>s</sub>² + f<sub>b</sub>² + f<sub>t</sub>²) → τ = f/(0.707h)' },
      { f: 'Allowable weld shear stress for E43XX (AS4100)', b: '0.6 × 430 = 258 MPa (before the factor of safety)' },
      { f: 'Weld all round a round bar: A<sub>w</sub> and S<sub>w</sub>', b: 'A<sub>w</sub> = πd, S<sub>w</sub> = πd²/4' },
      { f: 'Required fillet weld size from the force per length', b: 'h = f<sub>weld</sub> / (0.707 τ<sub>allow</sub>)' }
    ],
    questions: [
      { type: 'mcq', q: 'The shear area of a fillet weld of leg h and length L is…', opts: ['hL', '0.5hL', '0.707hL', '1.414hL'], a: 2, why: 'The throat is h cos 45° = 0.707h.' },
      { type: 'work', marks: 3, src: 'Practice (week 11 Q2 style)', q: 'Two 12 mm plates, 150 mm wide, are joined by a complete penetration butt weld. S<sub>y</sub> = 350 MPa, F<sub>d</sub> = 1.5. Find the allowable tensile load.',
        steps: ['F ≤ A S<sub>y</sub>/F<sub>d</sub> = 150 × 12 × 350/1.5 = <b>420 kN</b>.'], ans: '420 kN' },
      { type: 'work', marks: 5, src: 'Practice (week 11 Q3 style)', q: 'A 50 mm wide strap carries 60 kN. It is welded with 6 mm fillets across the end (50 mm) and along both sides (length h each). E43XX electrode (S<sub>u</sub> = 430 MPa, weld shear strength 0.6S<sub>u</sub>), factor of safety 3. Find h.',
        steps: ['τ<sub>allow</sub> = 0.6 × 430/3 = 86 MPa. Throat = 0.707 × 6 = 4.24 mm.', 'Total length needed L = P/(τ × throat) = 60 000/(86 × 4.24) = 164.5 mm.', 'L = 50 + 2h → h = (164.5 − 50)/2 = <b>57.2 mm</b>.'], ans: 'h ≈ 57 mm' },
      { type: 'work', marks: 5, src: 'Practice (week 11 Q4 style)', q: 'A 50 mm diameter bar is fillet-welded all round (6 mm weld) to a plate. A vertical load P acts at 250 mm from the plate. Allowable weld shear 124 MPa. Find the maximum P.',
        steps: ['f<sub>allow</sub> = 124 × 0.707 × 6 = 526 N/mm.', 'A<sub>w</sub> = π × 50 = 157.1 mm; S<sub>w</sub> = π × 50²/4 = 1963 mm².', 'f<sub>s</sub> = P/157.1, f<sub>b</sub> = 250P/1963 → f = P√(0.1273² + 0.00637²) = 0.1275P.', 'P = 526/0.1275 = <b>4126 N</b>.'], ans: '≈ 4.13 kN' },
      { type: 'work', marks: 6, paper: 'prac1', order: 9, src: 'Practice (week 11 Q5-Q8 style)', q: 'A bracket is welded with a C-shaped fillet weld: two horizontal welds of length b = 100 mm and one vertical weld d = 200 mm. A vertical load of 24 kN acts 300 mm beyond the end of the horizontal welds. Allowable weld shear is 96 MPa. Find the required weld size.',
        hint: 'x̄ = b²/(2b + d). The torque arm runs from the load to the centroid.',
        steps: ['x̄ = b²/(2b + d) = 10 000/400 = 25 mm. J<sub>w</sub> = 400³/12 − 100² × 300²/400 = 3.083×10⁶ mm³.', 'Arm = 300 + 100 − 25 = 375 mm → T = 24 000 × 0.375 = 9000 N·m.', 'Farthest corner: r = √(75² + 100²) = 125 mm → f<sub>t</sub> = Tr/J<sub>w</sub> = 9×10⁶ × 125/3.083×10⁶ = 364.9 N/mm.', 'f<sub>s</sub> = 24 000/400 = 60 N/mm → f = √(60² + 364.9²) = 369.8 N/mm.', 'h = f/(0.707 × 96) = 5.45 mm → use <b>6 mm</b>.'], ans: 'h ≈ 5.5 mm → 6 mm weld' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'weldfatigue', name: 'Weld fatigue and welded structures (Eurocode 3)', freq: 0.75, freqNote: 'Week 12. Applied class week 12 Q1-Q5', assigned: false,
    lesson:
`<p>Welded joints fail by fatigue at the <b>weld toe</b>, where there is a sharp notch, residual tensile stress and HAZ material. Their fatigue strength depends mainly on the <b>joint detail</b>, not on the steel strength.</p>
<h4>Classification (nominal stress) method</h4>
<ul><li>Find the <b>stress range</b> S = Δσ in the member (from the force range divided by the member area). Fatigue uses the range, not the maximum.</li>
<li>Pick the <b>detail category</b> from the standard (Eurocode 3 / CIDECT tables for hollow-section joints, or AS4100). The category number is the stress range for 2 × 10⁶ cycles (e.g. 71 MPa).</li>
<li>Life from the power law (formula sheet): <b>N = 10⁸ (S<sub>e</sub>/S)⁵</b> for S &gt; S<sub>e</sub>, where S<sub>e</sub> is the cut-off limit (e.g. category 71 → S<sub>e</sub> = 32 MPa). Below S<sub>e</sub>: infinite life.</li>
<li>For lattice (truss) joints of hollow sections, multiply the nominal stress by the <b>magnification factor</b> (secondary bending from joint eccentricity), from the table on the sheet.</li>
<li>Life in time = N × (time per cycle).</li></ul>
<h4>Hot-spot method</h4>
<p>Uses the stress at the weld toe (extrapolated) instead of nominal stress, for complex joints.</p>
<h4>Improving weld fatigue</h4>
<p>Post-weld treatments: grinding the toe, TIG dressing, hammer/needle peening (compressive residual stress), stress relief. Good detailing avoids abrupt changes and places welds away from high stress.</p>
<h4>Truss analysis reminder</h4>
<p>Member forces from joints or sections (assume tension). A load lying along a member often gives its force by inspection. Stable truss needs m ≥ 2j − 3.</p>`,
    example: { q: 'A welded detail of category 71 (S<sub>e</sub> = 32 MPa) sees a stress range of 60 MPa once every 30 s. Estimate its life.',
      steps: ['N = 10⁸ (32/60)⁵ = 10⁸ × 0.0432 = 4.32 × 10⁶ cycles.', 'Time = 4.32 × 10⁶ × 30 s = 1.29 × 10⁸ s = <b>about 36 000 hours</b>.'] },
    slides: [M23('fs_p29', 'Formula sheet: truss rules and magnification factors'), M23('fs_p30', 'Formula sheet: Eurocode 3 detail categories and S-N curves'), M23('fs_p31', 'Formula sheet: AS4100 S-N curves for weld categories')],
    formulas: ['Use stress RANGE S = ΔF/A for welds', 'EC3: N = 10⁸ (S_e/S)⁵ for S > S_e (cat. 71 → S_e = 32 MPa)', 'Hollow-section trusses: multiply by the magnification factor', 'Life time = N × cycle time'],
    cards: [
      { f: 'Where do welded joints crack in fatigue and why?', b: 'At the weld toe: sharp notch, tensile residual stress, HAZ properties' },
      { f: 'Does a stronger steel give a better welded joint fatigue life?', b: 'Not much: the detail category (geometry) governs welded fatigue' },
      { f: 'Eurocode 3 life equation (formula sheet)', b: 'N = 10⁸ (S<sub>e</sub>/S)⁵ for S &gt; S<sub>e</sub> (S = stress range, S<sub>e</sub> = cut-off limit)' },
      { f: 'Post-weld treatments that improve fatigue', b: 'Toe grinding, TIG dressing, hammer/needle peening, stress relief' },
      { f: 'What stress do you use for weld fatigue: maximum, mean or range?', b: 'The stress RANGE (Δσ)' }
    ],
    questions: [
      { type: 'mcq', q: 'A welded detail sees a stress range below its cut-off limit S<sub>e</sub>. Its fatigue life is…', opts: ['10⁸ cycles', '2 × 10⁶ cycles', 'infinite (no damage)', 'zero'], a: 2, why: 'Below the cut-off limit the curve is flat: no fatigue damage.' },
      { type: 'mcq', q: 'For fatigue of welded joints you should use…', opts: ['the maximum stress', 'the mean stress', 'the stress range', 'the yield strength'], a: 2, why: 'Weld S-N curves are in terms of stress range; residual stresses make the mean largely irrelevant.' },
      { type: 'work', marks: 5, paper: 'prac1', order: 10, src: 'Practice (week 12 Q5 style)', q: 'A welded hollow-section joint is category 71 (cut-off S<sub>e</sub> = 32 MPa). The chord (area 2918 mm²) force varies between 0 and 175 kN once every 30 s. No magnification factor applies. Estimate the fatigue life in hours.',
        steps: ['Stress range S = 175 000/2918 = 60.0 MPa.', 'N = 10⁸ (32/60)⁵ = 4.32 × 10⁶ cycles.', 'Life = 4.32 × 10⁶ × 30/3600 = <b>≈ 36 000 hours</b>.'], ans: '≈ 3.6 × 10⁴ h' },
      { type: 'work', marks: 4, src: 'Practice (week 12 Q1 style)', q: 'A strain gauge on a truss member (CHS, area 80.9 mm², E = 207 GPa) reads 250 microstrain. In a symmetric triangular truss the member makes 30° with the horizontal at the loaded apex and the load F acts vertically, shared by two identical members. Find the member force and F.',
        steps: ['Member force = εEA = 250 × 10⁻⁶ × 207 000 × 80.9 = 4187 N.', 'At the apex two members each give a vertical component F<sub>m</sub> sin 30°: F = 2 × 4187 × 0.5 = <b>4187 N</b>.'], ans: 'F ≈ 4.19 kN' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'design', name: 'Design process, ethics and sustainability', freq: 0.3, freqNote: 'Week 13 (short-answer marks at most)', assigned: false,
    lesson:
`<h4>What engineering design involves</h4>
<p>Problem recognition (a need) → problem formulation → solution generation and outcome prediction → evaluation of feasible alternatives and specification → implementation (clear specifications to the manufacturer).</p>
<h4>Barriers to idea generation</h4>
<p>Perceptual (information overload/underload, delimitation, saturation, stereotyping), cultural and environmental (tunnel vision), emotional, intellectual and expressive.</p>
<h4>Sustainable design: three pillars</h4>
<ul><li><b>Economic:</b> lower life-cycle cost, efficiency, durability; annual cost equivalent; benefit-cost analysis.</li>
<li><b>Social:</b> people at the centre: health and safety, ergonomics (design equipment around human needs), accessibility, worker and community wellbeing.</li>
<li><b>Environmental:</b> energy, CO₂ emissions (embodied carbon of materials), material waste, pollution. Use <b>life cycle assessment</b> (materials → manufacture → use → end of life).</li></ul>
<p>Engineering ethics are embodied in sustainable designs: function and performance at the least long-term environmental and social cost.</p>`,
    example: { q: 'Name the three pillars of sustainable engineering design and one example of each in a gearbox.',
      steps: ['Economic: longer bearing life lowers life-cycle cost.', 'Social: guarding and low noise protect operators (ergonomics, safety).', 'Environmental: a lighter housing material with lower embodied carbon, recyclable at end of life.'] },
    slides: [],
    formulas: ['Design process: recognise → formulate → generate → evaluate/specify → implement', 'Sustainability pillars: economic, social, environmental (LCA)'],
    cards: [
      { f: 'Three pillars of sustainable engineering design', b: 'Economic, social, environmental' },
      { f: 'Stages of engineering design', b: 'Problem recognition → formulation → solution generation → evaluation & specification → implementation' },
      { f: 'Four barriers to idea generation', b: 'Perceptual, cultural/environmental, emotional, intellectual/expressive' },
      { f: 'What is ergonomics?', b: 'Designing equipment around human needs, capabilities and limits instead of making the operator adapt' }
    ],
    questions: [
      { type: 'mcq', q: 'Which is NOT one of the three pillars of sustainability in design?', opts: ['economic', 'social', 'environmental', 'aesthetic'], a: 3, why: 'The pillars are economic, social and environmental.' },
      { type: 'mcq', q: '"Stereotyping" and "information overload" are examples of…', opts: ['emotional barriers', 'perceptual barriers', 'expressive barriers', 'cultural barriers'], a: 1, why: 'They distort how the problem is perceived.' }
    ] }
]);

/* ---- course-level details and practice paper ---- */
(function () {
  var c = DATA.course('MECH2100');
  c.summary = 'Designing machine parts against failure: stresses and failure theories, fatigue and fracture, gears, shafts, bearings, keys and fits, bolted and welded joints. The exam is calculation-heavy: always write the steps.';
  c.exam.format = 'No past papers are in your files. The applied-class worksheets say the final exam includes supporting tables (e.g. AS1654 fits), and the course formula sheet (v26.03) has all the charts, so it is assumed to be supplied. Check this on Blackboard.';
  c.papers.push({ id: 'prac1', name: 'Practice paper 1 (my questions, exam-style mix)', fullMarks: 100, fullMin: 120, note: 'Ten multi-step questions across all weeks. Have the formula sheet open, as in the exam.' });
  var pages = ['fs_p09', 'fs_p10', 'fs_p11', 'fs_p13', 'fs_p14', 'fs_p15', 'fs_p16', 'fs_p28', 'fs_p29', 'fs_p30', 'fs_p31'];
  c.ref = { label: 'Formula sheet', title: 'Formula sheet (assumed to be given in the exam)',
    html: '<p class="mute">Best: print your own copy of <b>MECH2100\\_Blackboard_new\\Resources\\Course Documents\\MECH2100 Formula sheet.pdf</b> and use it while practising. The chart pages are below.</p>' +
      pages.map(function (p) { return '<img src="img/m2100/' + p + '.jpg" alt="formula sheet page" style="max-width:100%;height:auto;margin:6px 0" onerror="this.remove()">'; }).join('') };
})();
