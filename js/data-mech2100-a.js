/* MECH2100 part 1: structural integrity (weeks 1-3).
   No past exams exist in the folder, so every question here is written in the style of the applied-class worksheets (weekly "Applied Class Questions").
   The exam gives a formula sheet (2026 version 26.03) and charts, so the cards focus on ideas and on knowing which formula to use. */
var M21 = function (n, cap) { return { src: 'img/m2100/' + n + '.jpg', cap: cap }; };
DATA.addTopics('MECH2100', [
  /* ------------------------------------------------------------ */
  { id: 'model', name: 'Structural modelling: load paths, FBD/SFD/BMD and trusses', freq: 0.75, freqNote: 'Weeks 1-2 and 12. Applied class: G-clamp, pliers, trusses (weeks 2 and 12)', assigned: false,
    notation: [['FBD', 'free body diagram'], ['SFD, BMD', 'shear force diagram, bending moment diagram'], ['V', 'shear force at a section'], ['M', 'bending moment at a section'], ['P', 'a point load'], ['w', 'uniformly distributed load (UDL), force per length'], ['L', 'span / length'], ['R', 'support reaction'], ['m, j', 'number of truss members and joints (determinacy check)'], ['two-force member', 'a truss member loaded only at its two end pins, so the force acts along it']],
    lesson:
`<p>Every machine-element question starts the same way: <b>find where the load goes and where the part is most stressed</b>. This is the "structural integrity framework".</p>
<h4>The 5 steps (from the applied class)</h4>
<ol><li><b>Simplify the geometry</b> (a clamp becomes a handle + a frame, a plier half becomes a beam).</li>
<li><b>Track the load path</b> from the point of application to where it is resisted (the ground, a pin, a bearing).</li>
<li><b>Idealise each part</b> as a standard element: cantilever, simply supported beam, shaft, truss member (two-force member).</li>
<li>Draw the <b>free body diagram (FBD)</b>, then the <b>shear force diagram (SFD)</b> and <b>bending moment diagram (BMD)</b>.</li>
<li>The <b>critical section</b> is where M is largest (usually), or V is largest, or the section is smallest, or there is a stress raiser (fillet, hole, keyway). Check these places.</li></ol>
<h4>Standard beam results to know</h4>
<table class="t"><tr><th>Case</th><th>Reactions</th><th>Max moment</th></tr>
<tr><td>Cantilever, end load P, length L</td><td>V = P, M = PL at the wall</td><td><b>PL</b> at the fixed end</td></tr>
<tr><td>Simply supported, central load P</td><td>R = P/2 each</td><td><b>PL/4</b> at mid-span</td></tr>
<tr><td>Simply supported, UDL w</td><td>R = wL/2</td><td><b>wL²/8</b> at mid-span</td></tr>
<tr><td>Cantilever, UDL w</td><td>R = wL</td><td><b>wL²/2</b> at the wall</td></tr></table>
<p>M is the area under the shear diagram. Where V = 0 the moment is at a maximum or minimum.</p>
<h4>Trusses (pin-jointed, loads at joints)</h4>
<ul><li>Every member is a <b>two-force member</b>: the force acts along the member. Assume every unknown member force is <b>tension</b>; a negative answer means compression.</li>
<li><b>Method of joints:</b> use ΣFx = 0 and ΣFy = 0 at a joint with at most 2 unknowns. <b>Method of sections:</b> cut through the members you want and take moments about a point where two of the cut members meet.</li>
<li>Determinacy: 2D needs m ≥ 2j − 3 members (m = members, j = joints); 3D needs m ≥ 3j − 6.</li>
<li>Look for shortcuts: if an external load lies along a member and the joint has no other loads, that member carries exactly that load.</li></ul>`,
    example: { q: 'An equilateral triangle truss ABC (side 2 m). A is pinned, C is on rollers, and a 12 kN load acts downward at the apex B. Find the member forces.',
      steps: ['Symmetry: R<sub>A</sub> = R<sub>C</sub> = 6 kN (up).', 'Joint A (angle 60°): ΣF<sub>y</sub>: 6 + F<sub>AB</sub> sin 60° = 0 → F<sub>AB</sub> = −6.93 kN (compression).', 'ΣF<sub>x</sub>: F<sub>AC</sub> + F<sub>AB</sub> cos 60° = 0 → F<sub>AC</sub> = +3.46 kN (tension).', 'By symmetry F<sub>BC</sub> = −6.93 kN (compression).'] },
    slides: [],
    formulas: ['Cantilever end load: M_max = PL at the wall', 'Simply supported central load: M_max = PL/4; UDL: wL²/8', 'Truss determinacy: 2D m ≥ 2j − 3; 3D m ≥ 3j − 6', 'Two-force members: force along the member; assume tension, negative = compression'],
    cards: [
      { f: 'The 5 steps of structural modelling', b: '1. Simplify geometry<br>2. Track the load path<br>3. Idealise as beam/shaft/truss<br>4. FBD, SFD, BMD<br>5. Identify critical section(s)' },
      { f: 'Where is the critical section of a beam?', b: 'Max bending moment (usually), max shear, smallest section, or a stress concentration (fillet, hole, keyway)' },
      { f: 'Cantilever with end load P: maximum moment', b: 'M<sub>max</sub> = P L at the fixed end' },
      { f: 'Simply supported beam: max moment for central load / for UDL', b: 'PL/4 at mid-span / wL²/8' },
      { f: 'Truss method of joints: how to assume unknown member forces', b: 'Assume TENSION (pulling away from the joint). A negative result means compression.' },
      { f: 'Minimum number of members for a stable 2D truss', b: 'm ≥ 2j − 3  (3D: m ≥ 3j − 6)' },
      { f: 'Relationship between shear and moment diagrams', b: 'dM/dx = V: moment is the area under the shear diagram; V = 0 where M is max/min' }
    ],
    questions: [
      { type: 'mcq', q: 'A cantilever carries a single load at its free end. The critical section for bending is…', opts: ['the free end', 'mid-length', 'the fixed end (the wall)', 'it is the same everywhere'], a: 2, why: 'M = P·x from the load, so it grows towards the wall. M<sub>max</sub> = PL at the fixed end.' },
      { type: 'mcq', q: 'A simply supported beam of length 4 m carries a central load of 10 kN. The maximum bending moment is…', opts: ['10 kN·m', '20 kN·m', '40 kN·m', '5 kN·m'], a: 0, why: 'PL/4 = 10 × 4/4 = 10 kN·m.' },
      { type: 'mcq', q: 'In the method of joints you find a member force of −8 kN. This means…', opts: ['8 kN tension', '8 kN compression', 'the joint is in error', 'the member is a zero-force member'], a: 1, why: 'Unknown forces are assumed tensile; a negative sign flips the sense to compression.' },
      { type: 'mcq', q: 'A pin-jointed truss has 6 joints. The minimum number of members for a stable 2D truss is…', opts: ['7', '9', '12', '6'], a: 1, why: 'm ≥ 2j − 3 = 12 − 3 = 9.' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A uniformly loaded simply supported beam (span 3 m) carries 8 kN/m. Find the reactions and the maximum bending moment.',
        steps: ['Total load = 8 × 3 = 24 kN → R = 12 kN each.', 'M<sub>max</sub> = wL²/8 = 8 × 9/8 = <b>9 kN·m</b> at mid-span.'], ans: 'R = 12 kN each; M_max = 9 kN·m' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A wall bracket has a horizontal strut AB (A at the wall) and a tie BC running from B up to the wall at C, inclined at 30° above the horizontal. A 10 kN load hangs from B. Find the force in each member (state tension or compression).',
        hint: 'Draw joint B. Assume both members pull away from B (tension), with BC pointing up and towards the wall.',
        steps: ['Joint B, wall on the left. BC pulls up and left: components (−cos 30°, +sin 30°) × F<sub>BC</sub>. AB pulls left: (−1, 0) × F<sub>AB</sub>. Load: 10 kN down.', 'ΣF<sub>y</sub>: F<sub>BC</sub> sin 30° − 10 = 0 → F<sub>BC</sub> = <b>20 kN (tension)</b>.', 'ΣF<sub>x</sub>: −F<sub>BC</sub> cos 30° − F<sub>AB</sub> = 0 → F<sub>AB</sub> = −17.3 kN, i.e. <b>17.3 kN compression</b>.'], ans: 'BC 20 kN tension; AB 17.3 kN compression' },
      { type: 'work', marks: 5, src: 'Practice', q: 'An equilateral triangle truss (A pinned, C on rollers, apex B) carries 12 kN vertically down at B. Find F<sub>AB</sub> and F<sub>AC</sub>.',
        steps: ['R<sub>A</sub> = R<sub>C</sub> = 6 kN. Joint A: 6 + F<sub>AB</sub> sin 60° = 0 → F<sub>AB</sub> = −6.93 kN (compression).', 'F<sub>AC</sub> = −F<sub>AB</sub> cos 60° = +3.46 kN (tension).'], ans: 'F_AB = −6.93 kN (compression), F_AC = +3.46 kN (tension)' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'stress', name: 'Stress analysis, Mohr\'s circle and failure theories', freq: 0.95, freqNote: 'Week 2. Used in every later calculation. Applied class Q2-Q8 (week 2) and Q5 (week 3)', assigned: false,
    notation: [['σ ("sigma")', 'normal (direct) stress'], ['τ ("tau")', 'shear stress'], ['F', 'applied force/load'], ['A', 'cross-sectional area'], ['M', 'bending moment'], ['c', 'distance from the neutral axis to the outer fibre'], ['I', 'second moment of area (bending)'], ['T', 'torque'], ['r', 'radius (torsion)'], ['J', 'polar second moment of area (torsion)'], ['V', 'shear force (transverse shear)'], ['σ₁, σ₂, σ₃', 'principal stresses'], ['τ_max', 'maximum shear stress'], ['σ_eq', 'von Mises equivalent stress'], ['S_y', 'yield strength'], ['n', 'factor of safety'], ['K_t', 'stress concentration factor'], ['E, ν ("nu")', 'Young\'s modulus and Poisson\'s ratio'], ['p, D, t', 'internal pressure, diameter and wall thickness (pressure vessel)']],
    lesson:
`<p>Stress is force per area. The skill is combining several stresses at one point and deciding if the part fails.</p>
<h4>Basic stresses (all on the formula sheet)</h4>
<ul><li>Axial: σ = F/A. Strain gauge: σ = E ε (ε in microstrain × 10⁻⁶).</li>
<li>Bending: σ = M c / I (c = distance to the outer fibre). Solid circle: I = πD⁴/64.</li>
<li>Torsion: τ = T r / J. Solid circle: J = πD⁴/32 = 2I.</li>
<li>Direct shear: τ = F/A. A pin in <b>double shear</b> has two shear areas: τ = F/(2A).</li>
<li>Transverse shear maximum (at the neutral axis): rectangle 3V/2A, solid circle 4V/3A, thin tube 2V/A.</li></ul>
<h4>Combine them at the critical point</h4>
<p>For a shaft: bending gives σ<sub>x</sub>, torsion gives τ<sub>xy</sub> (σ<sub>y</sub> = 0). Ignore transverse shear when bending and torsion are present (it is zero at the surface where they peak).</p>
<h4>Mohr's circle (plane stress)</h4>
<ul><li>Centre: σ<sub>avg</sub> = (σ<sub>x</sub> + σ<sub>y</sub>)/2. Radius: R = √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)² + τ<sub>xy</sub>²].</li>
<li>Principal stresses σ₁,₂ = σ<sub>avg</sub> ± R. In-plane maximum shear τ = R.</li>
<li><b>Careful with the third principal stress (σ₃ = 0 in plane stress).</b> The true maximum shear is (σ<sub>max</sub> − σ<sub>min</sub>)/2 over all three: if σ₁ and σ₂ have the <b>same sign</b>, then τ<sub>max</sub> = σ₁/2 (not (σ₁ − σ₂)/2). If they have opposite signs, τ<sub>max</sub> = (σ₁ − σ₂)/2 = R.</li></ul>
<h4>Failure theories (ductile material)</h4>
<ul><li><b>Maximum distortion energy (von Mises):</b> yielding when σ<sub>eq</sub> ≥ S<sub>y</sub>, where σ<sub>eq</sub> = √(σ₁² − σ₁σ₂ + σ₂²) (equivalently √(σ² + 3τ²) for σ and τ only).</li>
<li><b>Maximum shear (Tresca):</b> yield when τ<sub>max</sub> ≥ S<sub>y</sub>/2 (more conservative).</li>
<li><b>Factor of safety</b> n = S<sub>y</sub>/σ<sub>eq</sub>. Design factor F<sub>s</sub>: need n ≥ F<sub>s</sub>.</li></ul>
<h4>Stress concentration</h4>
<p>Near fillets, holes, keyways the peak stress is <b>σ<sub>max</sub> = K<sub>t</sub> σ<sub>nom</sub></b> (K<sub>t</sub> &gt; 1, read from charts using the geometry ratios). Use the nominal stress on the <b>section at the feature</b>.</p>
<h4>Two materials sharing a load (composite)</h4>
<p>If they are bonded they have the <b>same strain</b>: σ₁/E₁ = σ₂/E₂. Find which material reaches its strength first, then add the forces F = σ₁A₁ + σ₂A₂.</p>
<h4>Thin-walled pressure vessel</h4>
<p>Hoop stress σ<sub>h</sub> = pD/(2t), longitudinal σ<sub>l</sub> = pD/(4t). These are principal stresses and the third (radial) is about 0 on the outside surface (−p on the inside).</p>`,
    example: { q: 'σ<sub>x</sub> = 90 MPa, σ<sub>y</sub> = −30 MPa, τ<sub>xy</sub> = 40 MPa. Find the principal stresses, the maximum shear and the von Mises stress.',
      steps: ['σ<sub>avg</sub> = (σ<sub>x</sub> + σ<sub>y</sub>)/2 = (90 − 30)/2 = 30. R = √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)² + τ<sub>xy</sub>²] = √(60² + 40²) = 72.1.', 'σ₁,₂ = σ<sub>avg</sub> ± R: σ₁ = 102.1 MPa, σ₂ = −42.1 MPa (opposite signs).', 'τ<sub>max</sub> = (σ₁ − σ₂)/2 = R = 72.1 MPa (opposite-sign case).', 'σ<sub>eq</sub> = √(σ₁² − σ₁σ₂ + σ₂²) = √(10426 + 4300 + 1773) = <b>128.5 MPa</b>.'] },
    slides: [M21('w2_mohr', 'Week 2: Mohr\'s circle equations (centre and radius)')],
    formulas: ['σ = F/A; σ = Mc/I; τ = Tr/J; solid circle I = πD⁴/64, J = πD⁴/32', 'τ_max transverse: rectangle 3V/2A; solid circle 4V/3A; thin tube 2V/A', 'σ₁,₂ = (σx + σy)/2 ± √[((σx − σy)/2)² + τxy²]; τ_max = (σ_max − σ_min)/2 (include σ₃ = 0)', 'von Mises: σ_eq = √(σ₁² − σ₁σ₂ + σ₂²) = √(σ² + 3τ²); n = S_y/σ_eq', 'σ_max = K_t σ_nom', 'Pressure vessel: σ_h = pD/2t, σ_l = pD/4t'],
    cards: [
      { f: 'Mohr\'s circle: centre and radius', b: 'Centre (σ<sub>x</sub> + σ<sub>y</sub>)/2<br>R = √[((σ<sub>x</sub> − σ<sub>y</sub>)/2)² + τ<sub>xy</sub>²]' },
      { f: 'Maximum shear stress: when is it NOT just the Mohr radius?', b: 'When σ₁ and σ₂ have the SAME sign (third principal stress σ₃ = 0): τ<sub>max</sub> = σ<sub>max</sub>/2' },
      { f: 'von Mises (distortion energy) effective stress', b: 'σ<sub>eq</sub> = √(σ₁² − σ₁σ₂ + σ₂²)<br>= √(σ² + 3τ²) for σ and τ only' },
      { f: 'Factor of safety against yield (von Mises)', b: 'n = S<sub>y</sub> / σ<sub>eq</sub>' },
      { f: 'Stress concentration factor definition', b: 'K<sub>t</sub> = σ<sub>max</sub> / σ<sub>nom</sub> (&gt; 1); read from charts using D/d and r/d' },
      { f: 'Transverse shear maximum: rectangle, solid circle, thin tube', b: '3V/2A, 4V/3A, 2V/A' },
      { f: 'Two bonded materials in tension: the compatibility rule', b: 'Equal strains: σ₁/E₁ = σ₂/E₂; the one that reaches its strength first governs' },
      { f: 'Pin in double shear', b: 'τ = F / (2A): two cross-sections carry the load' }
    ],
    questions: [
      { type: 'mcq', q: 'σ₁ = 100 MPa, σ₂ = 40 MPa (plane stress, σ₃ = 0). The maximum shear stress is…', opts: ['30 MPa', '50 MPa', '70 MPa', '20 MPa'], a: 1, why: 'Same-sign principal stresses: the largest difference includes σ₃ = 0, so τ<sub>max</sub> = (100 − 0)/2 = 50 MPa. (σ₁ − σ₂)/2 = 30 would be wrong.' },
      { type: 'mcq', q: 'For a shaft carrying bending and torque, which stress component do you normally ignore at the critical surface point?', opts: ['bending stress', 'torsional shear', 'transverse (direct) shear', 'all three matter equally'], a: 2, why: 'Transverse shear is zero at the surface and maximum at the centre; bending and torsion peak at the surface.' },
      { type: 'mcq', q: 'The von Mises stress is 280 MPa and S<sub>y</sub> = 420 MPa. The factor of safety is…', opts: ['0.67', '1.5', '2.0', '1.2'], a: 1, why: 'n = 420/280 = 1.5.' },
      { type: 'mcq', q: 'A fillet in a stepped shaft has K<sub>t</sub> = 2. The nominal stress is 80 MPa. The peak stress is…', opts: ['40 MPa', '80 MPa', '160 MPa', '82 MPa'], a: 2, why: 'σ<sub>max</sub> = K<sub>t</sub>σ<sub>nom</sub> = 160 MPa.' },
      { type: 'work', marks: 5, src: 'Practice', q: 'σ<sub>x</sub> = 90 MPa, σ<sub>y</sub> = −30 MPa, τ<sub>xy</sub> = 40 MPa. Find the principal stresses, the maximum shear stress and the von Mises stress.',
        steps: ['σ<sub>avg</sub> = 30; R = √(60² + 40²) = 72.1.', 'σ₁ = 102.1, σ₂ = −42.1 MPa.', 'τ<sub>max</sub> = 72.1 MPa (opposite signs).', 'σ<sub>eq</sub> = √(102.1² + 102.1 × 42.1 + 42.1²) = 128.5 MPa.'], ans: 'σ₁ = 102.1, σ₂ = −42.1, τ_max = 72.1, σ_eq = 128.5 MPa' },
      { type: 'work', marks: 6, paper: 'prac1', order: 1, src: 'Practice (applied class style)', q: 'A solid round shaft (D = 40 mm, S<sub>y</sub> = 350 MPa) carries a bending moment of 600 N·m and a torque of 450 N·m at the critical section. Find the von Mises stress and the factor of safety.',
        steps: ['I = πD⁴/64, J = 2I. Bending: σ = 32M/(πD³) = 32 × 600/(π × 0.04³) = 95.5 MPa.', 'Torsion: τ = 16T/(πD³) = 16 × 450/(π × 0.04³) = 35.8 MPa.', 'σ<sub>eq</sub> = √(σ² + 3τ²) = √(95.5² + 3 × 35.8²) = 113.9 MPa.', 'n = S<sub>y</sub>/σ<sub>eq</sub> = 350/113.9 = <b>3.07</b>.'], ans: 'σ_eq = 114 MPa, n = 3.07' },
      { type: 'work', marks: 5, src: 'Practice (week 2 composite question)', q: 'A steel tube (A = 1000 mm², E = 200 GPa, failure stress 300 MPa) is filled with concrete (A = 6000 mm², E = 25 GPa, tensile failure 3 MPa) and loaded in tension with no slip. Find the maximum load.',
        steps: ['Equal strain: σ<sub>s</sub> = σ<sub>c</sub> E<sub>s</sub>/E<sub>c</sub> = 8 σ<sub>c</sub>.', 'Concrete fails first at σ<sub>c</sub> = 3 MPa → σ<sub>s</sub> = 24 MPa (far below 300).', 'F = σ<sub>c</sub>A<sub>c</sub> + σ<sub>s</sub>A<sub>s</sub> = 3(6000) + 24(1000) = 42 000 N = <b>42 kN</b>.', '(If steel failed first: σ<sub>s</sub> = 300, σ<sub>c</sub> = 37.5 MPa, far above 3 MPa, so concrete governs.)'], ans: '42 kN' },
      { type: 'work', marks: 4, src: 'Practice (week 2 strain gauge question)', q: 'A strain gauge on a 100 × 50 × 4 mm RHS steel member (E = 200 GPa) reads 180 microstrain under axial load. Find the force. (Use area ≈ 2(d + b)t.)',
        steps: ['σ = Eε = 200 000 × 180 × 10⁻⁶ = 36 MPa.', 'A ≈ 2(100 + 50) × 4 = 1200 mm².', 'F = σA = 36 × 1200 = <b>43.2 kN</b> (exact area 1136 mm² gives 40.9 kN, within 10%).'], ans: '≈ 43 kN' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A stepped bar (smaller diameter 20 mm) carries an axial load of 15 kN. The fillet has K<sub>t</sub> = 2.0 and the material has S<sub>y</sub> = 250 MPa. Find the peak stress and the factor of safety.',
        steps: ['σ<sub>nom</sub> = F/A = 15 000/(π × 10²) = 47.7 MPa.', 'σ<sub>max</sub> = K<sub>t</sub>σ<sub>nom</sub> = 95.5 MPa.', 'n = 250/95.5 = <b>2.6</b>.'], ans: 'σ_max = 95.5 MPa, n = 2.6' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A 16 mm pin in double shear carries 20 kN. Find the shear stress.',
        steps: ['A = π × 8² = 201 mm². Double shear: τ = F/(2A) = 20 000/402 = <b>49.7 MPa</b>.'], ans: '49.7 MPa' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A thin cylinder (D = 500 mm, t = 5 mm) has internal pressure 2 MPa. Find the hoop and longitudinal stresses and the maximum shear stress at the outer surface.',
        steps: ['σ<sub>h</sub> = pD/(2t) = 2 × 500/10 = 100 MPa. σ<sub>l</sub> = pD/(4t) = 50 MPa.', 'Both positive and σ₃ ≈ 0 on the outside, so τ<sub>max</sub> = (100 − 0)/2 = <b>50 MPa</b> (not (100 − 50)/2 = 25).'], ans: '100 MPa, 50 MPa, τ_max = 50 MPa' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'fracture', name: 'Fracture mechanics (Griffith, K<sub>I</sub>, critical crack length)', freq: 0.6, freqNote: 'Week 2 lectures and the first page of the formula sheet', assigned: false,
    notation: [['K_I', 'mode I stress intensity factor'], ['K_IC', 'fracture toughness (material property)'], ['Y', 'geometry factor (depends on crack/part shape)'], ['σ', 'applied (remote) stress'], ['a', 'crack length (or half-length)'], ['σ_f', 'fracture stress'], ['a_cr', 'critical crack length'], ['E', 'Young\'s modulus'], ['R (or 𝒢_c)', 'crack growth resistance (Griffith)'], ['𝒢 ("curly G")', 'energy release rate'], ['r_p', 'plastic zone size at the crack tip (Irwin)'], ['α_p', 'constant in the plastic-zone formula (plane stress vs plane strain)'], ['σ_YS', 'yield strength']],
    lesson:
`<p>A material containing a crack can break at a stress far below its yield strength. Fracture mechanics tells you the <b>critical stress</b> or <b>critical crack length</b>.</p>
<h4>Key ideas</h4>
<ul><li><b>Stress intensity factor</b> (mode I, tension opening the crack): <b>K<sub>I</sub> = Y σ √(π a)</b>, where a = crack length (or half-length for an embedded crack) and Y = geometry factor from the sheet.</li>
<li>Y values: embedded through-thickness crack: Y = 1; edge crack: Y = 1.1215; penny-shaped crack: Y = 2/π.</li>
<li><b>Fracture toughness</b> K<sub>IC</sub> is a material property (MPa√m). <b>Brittle fracture criterion: K<sub>I</sub> = K<sub>IC</sub>.</b></li>
<li>Critical stress: <b>σ<sub>f</sub> = K<sub>IC</sub>/(Y√(πa))</b>. Critical crack length: <b>a<sub>cr</sub> = (1/π)(K<sub>IC</sub>/(Yσ))²</b>.</li>
<li><b>Griffith:</b> crack grows when the energy release rate 𝒢 reaches the crack growth resistance R (= 𝒢<sub>c</sub>). σ<sub>f</sub> = √(E R/(πa)), a<sub>cr</sub> = E R/(πσ²). Also 𝒢 = K<sub>I</sub>²/E and K<sub>IC</sub> = √(𝒢<sub>c</sub>E).</li>
<li>Stress concentration of an elliptical hole: K<sub>t</sub> = 1 + 2a/b = 1 + 2√(a/ρ).</li></ul>
<h4>Plasticity near the crack tip (Irwin)</h4>
<p>Plastic zone size r<sub>p</sub> = α<sub>p</sub>(K<sub>I</sub>/σ<sub>YS</sub>)², with α<sub>p</sub> = 1/π (plane stress) or 1/(3π) (plane strain). The effective crack length is a<sub>eff</sub> = a + r<sub>p</sub>/2.</p>
<h4>Yield before fracture?</h4>
<p>Compare the fracture stress with the yield strength: if σ<sub>f</sub> &gt; S<sub>y</sub> the part yields first (ductile, safe warning); if σ<sub>f</sub> &lt; S<sub>y</sub> it fractures first (brittle, dangerous). Small-scale yielding needs a, B, L &gt; 2.5(K<sub>I</sub>/σ<sub>YS</sub>)².</p>`,
    example: { q: 'K<sub>IC</sub> = 50 MPa√m, an edge crack (Y = 1.12) and σ = 200 MPa. Find the critical crack length.',
      steps: ['a<sub>cr</sub> = (1/π)(K<sub>IC</sub>/(Yσ))² = (1/π)(50/(1.12 × 200))² = (1/π)(0.2232)² = 0.01586 m.', '<b>a<sub>cr</sub> ≈ 15.9 mm</b>. A longer crack than this breaks at 200 MPa.'] },
    slides: [],
    formulas: ['K_I = Yσ√(πa); fracture when K_I = K_IC', 'σ_f = K_IC/(Y√(πa)); a_cr = (1/π)(K_IC/(Yσ))²', 'Y: embedded 1, edge 1.1215, penny 2/π', 'Griffith: σ_f = √(ER/(πa)); 𝒢 = K_I²/E; K_IC = √(𝒢_c E)', 'Plastic zone r_p = α_p(K_I/σ_YS)²; α_p = 1/π (plane stress), 1/3π (plane strain); a_eff = a + r_p/2'],
    cards: [
      { f: 'Mode I stress intensity factor', b: 'K<sub>I</sub> = Y σ √(π a)' },
      { f: 'Brittle fracture criterion', b: 'K<sub>I</sub> ≥ K<sub>IC</sub> (fracture toughness, MPa√m)' },
      { f: 'Critical crack length', b: 'a<sub>cr</sub> = (1/π) (K<sub>IC</sub> / (Yσ))²' },
      { f: 'Geometry factor Y: embedded, edge, penny-shaped crack', b: '1, 1.1215, 2/π' },
      { f: 'Griffith fracture stress', b: 'σ<sub>f</sub> = √(E R / (π a)), R = crack growth resistance (𝒢<sub>c</sub>)' },
      { f: 'Relationship between energy release rate and K<sub>I</sub>', b: '𝒢 = K<sub>I</sub>² / E' },
      { f: 'Irwin plastic zone size', b: 'r<sub>p</sub> = α<sub>p</sub>(K<sub>I</sub>/σ<sub>YS</sub>)²<br>α<sub>p</sub> = 1/π plane stress, 1/(3π) plane strain' }
    ],
    questions: [
      { type: 'mcq', q: 'Doubling the crack length (all else equal) changes the fracture stress by a factor of…', opts: ['2', '√2', '1/√2', '1/2'], a: 2, why: 'σ<sub>f</sub> ∝ 1/√a, so doubling a divides σ<sub>f</sub> by √2.' },
      { type: 'mcq', q: 'Fracture toughness K<sub>IC</sub> has units of…', opts: ['MPa', 'MPa√m', 'N/m', 'J'], a: 1, why: 'K = Yσ√(πa): stress × √length.' },
      { type: 'mcq', q: 'The fracture stress for a given crack is 380 MPa and the yield strength is 450 MPa. The part will…', opts: ['yield first, then fracture later', 'fracture before it yields (brittle failure)', 'never fail', 'yield but never fracture'], a: 1, why: 'Fracture stress below yield means the crack runs before general yielding.' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A plate has an embedded through-thickness crack of half-length a = 5 mm. K<sub>IC</sub> = 50 MPa√m. Find the fracture stress, and say whether yielding (S<sub>y</sub> = 500 MPa) or fracture comes first.',
        steps: ['σ<sub>f</sub> = K<sub>IC</sub>/(Y√(πa)) with Y = 1: 50/√(π × 0.005) = 50/0.1253 = 399 MPa.', '399 &lt; 500 MPa → <b>fracture occurs before yielding</b>.'], ans: 'σ_f = 399 MPa; fracture first' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A very large steel plate has an edge crack (Y = 1.12) and is loaded to 200 MPa. K<sub>IC</sub> = 50 MPa√m. What is the critical crack length?',
        steps: ['a<sub>cr</sub> = (1/π)[K<sub>IC</sub>/(Yσ)]² = (1/π)(50/224)² = 0.01586 m.', '<b>15.9 mm</b>.'], ans: '15.9 mm' },
      { type: 'work', marks: 3, src: 'Practice', q: 'Find the plane-stress Irwin plastic zone for K<sub>I</sub> = 40 MPa√m and σ<sub>YS</sub> = 400 MPa. Compare to plane strain.',
        steps: ['r<sub>p</sub> = (1/π)(40/400)² = 0.00318 m = 3.18 mm (plane stress).', 'Plane strain: 1/(3π) → 1.06 mm (three times smaller).'], ans: '3.18 mm; 1.06 mm' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A glass pane has E = 70 GPa and crack growth resistance R = 8 J/m². Estimate the fracture stress with a crack of half-length a = 10 µm using Griffith.',
        steps: ['σ<sub>f</sub> = √(E R/(π a)) = √(70×10⁹ × 8 / (π × 10⁻⁵)) = √(1.78×10¹⁶) = 1.34×10⁸ Pa.', '<b>≈ 134 MPa</b>.'], ans: '≈ 134 MPa' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'fatigue', name: 'Fatigue: S-N curves, endurance strength and Miner\'s rule', freq: 0.9, freqNote: 'Week 3. Applied class Q2-Q4 (week 3). Used again in shafts, bolts, welds', assigned: false,
    notation: [['S', 'stress amplitude (S-N curve)'], ['N', 'number of cycles to failure'], ['m, b', 'slope and intercept of the log-log S-N line'], ['S_n', 'endurance strength (uncorrected, from a chart)'], ['S_n′', 'corrected endurance strength'], ['C_m, C_st, C_R, C_S', 'correction factors: material, type of stress, reliability, size'], ['n_i, N_i', 'cycles applied and cycles-to-failure at stress level i (Miner\'s rule)'], ['σ_m', 'mean stress'], ['σ_a', 'alternating (amplitude) stress'], ['S_u', 'ultimate tensile strength'], ['G', 'shear modulus'], ['ν ("nu")', 'Poisson\'s ratio']],
    lesson:
`<p>Parts under <b>repeated</b> stress can crack at stresses well below the yield strength. Fatigue life is described by the <b>S-N curve</b> (stress amplitude S against cycles to failure N, on log-log axes).</p>
<h4>S-N curve in equation form</h4>
<p><b>log S = m log N + b</b>, a straight line on the log-log plot (m is negative). With two known points (S₁, N₁) and (S₂, N₂): <b>S₂/S₁ = (N₂/N₁)<sup>m</sup></b>. Below the <b>endurance strength S<sub>n</sub></b> (at about 10⁶ cycles for steel) life is infinite.</p>
<h4>Corrected endurance strength</h4>
<p><b>S<sub>n</sub>' = S<sub>n</sub> C<sub>m</sub> C<sub>st</sub> C<sub>R</sub> C<sub>S</sub></b> (all four are on the formula sheet)</p>
<ul><li>S<sub>n</sub>: from a chart using S<sub>u</sub> and the surface finish.</li>
<li>C<sub>m</sub> (material): wrought steel 1.0, cast steel 0.8, grey cast iron 0.7, ductile iron 0.66...</li>
<li>C<sub>st</sub> (type of stress): bending 1.0, axial 0.8.</li>
<li>C<sub>R</sub> (reliability): 50% → 1.0, 90% → 0.90, 99% → 0.81, 99.9% → 0.75.</li>
<li>C<sub>S</sub> (size): from a chart; bigger parts are weaker (C<sub>S</sub> &lt; 1).</li></ul>
<p><b>Surface finish ranking</b> (best endurance first): polished &gt; ground &gt; machined/cold-drawn &gt; hot-rolled &gt; as-forged.</p>
<h4>Miner's rule (variable amplitude)</h4>
<p>For each stress level i find the life N<sub>i</sub> from the S-N curve (stress below S<sub>n</sub> contributes zero damage). <b>Σ n<sub>i</sub>/N<sub>i</sub> ≥ 1 means failure</b>. The sum itself is the fraction of life used.</p>
<h4>Non-zero mean stress</h4>
<p>σ<sub>m</sub> = (σ<sub>max</sub> + σ<sub>min</sub>)/2 and σ<sub>a</sub> = (σ<sub>max</sub> − σ<sub>min</sub>)/2. A tensile mean reduces the allowable alternating stress. Goodman line: <b>σ<sub>a</sub>/S<sub>n</sub>' + σ<sub>m</sub>/S<sub>u</sub> = 1/n</b>.</p>
<h4>Material facts</h4>
<ul><li>Shear modulus G = E / (2(1 + ν)).</li><li>Choose materials by the property that governs: strength vs weight (specific strength = S/(ρg)), hardenability for thick shafts (4140 over 1040), case-hardening (8620 carburised) for gears: hard surface, tough core.</li></ul>`,
    example: { q: 'S-N points (900 MPa, 10³ cycles) and (350 MPa, 10⁶ cycles). Find the life at 500 MPa.',
      steps: ['m = log(S₂/S₁)/log(N₂/N₁) = log(350/900)/log(10⁶/10³) = (−0.4102)/3 = −0.1367.', 'Rearranging S₂/S₁ = (N₂/N₁)<sup>m</sup>: N = N₁(S/S₁)<sup>1/m</sup> = 10³ (500/900)<sup>1/m</sup> = 10³ × (0.5556)<sup>−7.314</sup> = 10³ × 73.6 = <b>7.4 × 10⁴ cycles</b>.'] },
    slides: [M21('w3_endurance', 'Week 3: endurance strength chart (surface finish)')],
    formulas: ['log σ_a = m log N + b; S₂/S₁ = (N₂/N₁)^m', 'S_n\' = S_n C_m C_st C_R C_S', 'Miner: Σ n_i/N_i ≥ 1 → failure', 'σ_m = (σ_max + σ_min)/2; σ_a = (σ_max − σ_min)/2', 'Goodman: σ_a/S_n\' + σ_m/S_u = 1/n', 'G = E/(2(1 + ν))'],
    cards: [
      { f: 'Corrected endurance strength', b: 'S<sub>n</sub>\' = S<sub>n</sub> C<sub>m</sub> C<sub>st</sub> C<sub>R</sub> C<sub>S</sub><br>(material, type of stress, reliability, size)' },
      { f: 'Reliability factor C<sub>R</sub>: 50%, 90%, 99%, 99.9%', b: '1.0, 0.90, 0.81, 0.75' },
      { f: 'Type-of-stress factor C<sub>st</sub>', b: 'Bending 1.0, axial tension 0.8' },
      { f: 'Order of surface finishes for endurance strength (best first)', b: 'Polished, ground, machined / cold-drawn, hot-rolled, as-forged' },
      { f: 'Miner\'s rule', b: 'Σ n<sub>i</sub>/N<sub>i</sub> ≥ 1 → failure. Stresses below the endurance strength give N = ∞ (no damage).' },
      { f: 'Mean and alternating stress', b: 'σ<sub>m</sub> = (σ<sub>max</sub> + σ<sub>min</sub>)/2<br>σ<sub>a</sub> = (σ<sub>max</sub> − σ<sub>min</sub>)/2' },
      { f: 'S-N curve between two points', b: 'S₂/S₁ = (N₂/N₁)<sup>m</sup> with m = log(S₂/S₁)/log(N₂/N₁)' },
      { f: 'Shear modulus from E and Poisson\'s ratio', b: 'G = E / (2(1 + ν))' },
      { f: 'Gear material strategy (why carburised 8620?)', b: 'Hard case for contact fatigue (pitting, wear) + tough core for root bending and impact' }
    ],
    questions: [
      { type: 'mcq', q: 'Which surface finish gives the highest endurance strength for the same steel?', opts: ['as-forged', 'hot-rolled', 'machined', 'polished'], a: 3, why: 'Surface roughness acts as tiny stress raisers; polishing removes them.' },
      { type: 'mcq', q: 'In Miner\'s rule a stress block below the endurance strength contributes…', opts: ['damage = 1', 'damage = n/N with N = 10⁶', 'zero damage (N = ∞)', 'negative damage'], a: 2, why: 'Below the endurance strength life is infinite, so n/N = 0.' },
      { type: 'mcq', q: 'The reliability factor for 99% reliability is…', opts: ['1.00', '0.90', '0.81', '0.62'], a: 2, why: 'C<sub>R</sub> = 0.81 at 99% (0.75 at 99.9%).' },
      { type: 'mcq', q: 'A material has E = 225 GPa and ν = 0.34. Its shear modulus is…', opts: ['84 GPa', '112 GPa', '168 GPa', '66 GPa'], a: 0, why: 'G = 225/(2 × 1.34) = 83.96 GPa.' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A steel has S<sub>n</sub> = 300 MPa from the chart. The part is machined bending (C<sub>st</sub> = 1.0), wrought steel (C<sub>m</sub> = 1.0), designed for 99% reliability, with size factor C<sub>S</sub> = 0.80. Find the corrected endurance strength.',
        steps: ['S<sub>n</sub>\' = 300 × 1.0 × 1.0 × 0.81 × 0.80 = <b>194.4 MPa</b>.'], ans: '194 MPa' },
      { type: 'work', marks: 4, src: 'Practice', q: 'An S-N curve passes through (900 MPa, 10³ cycles) and (350 MPa, 10⁶ cycles). What is the expected life at 500 MPa?',
        steps: ['m = log₁₀(350/900)/3 = −0.1367.', 'log N = 3 + log(500/900)/m = 3 + (−0.2553)/(−0.1367) = 4.867.', '<b>N ≈ 73 600 cycles</b>.'], ans: '≈ 7.4 × 10⁴ cycles' },
      { type: 'work', marks: 6, paper: 'prac1', order: 2, src: 'Practice (applied class style)', q: 'Same S-N curve (900 MPa at 10³, 350 MPa at 10⁶ cycles; endurance strength 350 MPa). The part sees 2000 cycles at 700 MPa, 10 000 cycles at 500 MPa, 30 000 cycles at 400 MPa and 100 000 cycles at 300 MPa. Find the cumulative damage and say whether it survives.',
        steps: ['N at 700 MPa = 10³(700/900)<sup>1/m</sup> = 6285; at 500 MPa: 73 630; at 400 MPa: 376 600; at 300 MPa (below 350): ∞.', 'n/N: 2000/6285 = 0.318; 10 000/73 630 = 0.136; 30 000/376 600 = 0.080; 100 000/∞ = 0.', 'Σ = 0.318 + 0.136 + 0.080 = <b>0.53 &lt; 1</b>: the part survives with about 47% of its life left.'], ans: 'Damage = 0.53 → survives' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A fluctuating stress has σ<sub>max</sub> = 250 MPa and σ<sub>min</sub> = 50 MPa. S<sub>n</sub>\' = 250 MPa and S<sub>u</sub> = 600 MPa. Find the Goodman factor of safety.',
        steps: ['σ<sub>m</sub> = 150, σ<sub>a</sub> = 100.', '1/n = σ<sub>a</sub>/S<sub>n</sub>\' + σ<sub>m</sub>/S<sub>u</sub> = 0.40 + 0.25 = 0.65 → <b>n = 1.54</b>.'], ans: 'n = 1.54' }
    ] }
]);
