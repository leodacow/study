/* MECH2100 part 2: power transmission (weeks 4-8): gears, shafts, AS1403, keys/fits/couplings, belts and drive trains. */
var M22 = function (n, cap) { return { src: 'img/m2100/' + n + '.jpg', cap: cap }; };
DATA.addTopics('MECH2100', [
  /* ------------------------------------------------------------ */
  { id: 'gears', name: 'Gears: geometry, forces, trains and AGMA stresses', freq: 0.95, freqNote: 'Weeks 4-5 (also the basis of Assignment 2). Applied class week 4 Q1-Q9, week 5 Q2-Q8', assigned: false,
    notation: [['m', 'module (mm); D = mN'], ['N', 'number of teeth'], ['D', 'pitch diameter'], ['C', 'centre distance between gears'], ['ω, T, P', 'angular speed, torque, power (T = P/ω)'], ['φ ("phi")', 'pressure angle'], ['F_t, F_r, F_a, F_n', 'tangential, radial, axial and total (normal) tooth forces'], ['ψ ("psi")', 'helix angle (helical gears)'], ['γ ("gamma")', 'pinion cone angle (bevel gears)'], ['b', 'face width'], ['J', 'AGMA bending geometry factor'], ['I', 'AGMA contact (pitting) geometry factor'], ['K_o, K_s, K_m, K_B, K_v', 'AGMA factors: overload, size, load distribution, rim thickness, dynamic'], ['σ_t, σ_c', 'AGMA bending stress and contact (pitting) stress'], ['C_p', 'elastic coefficient (contact stress)'], ['S_at, S_ac', 'allowable bending and contact strength'], ['F_s', 'factor of safety'], ['K_R, Y_N, Z_N', 'reliability factor and stress-cycle (life) factors']],
    lesson:
`<h4>Geometry (spur gears)</h4>
<ul><li>Pitch diameter <b>D = m N</b> (m = module in mm, N = number of teeth). Diametral pitch P<sub>d</sub> = N/D (teeth per inch); m = 25.4/P<sub>d</sub>.</li>
<li>Centre distance <b>C = (D<sub>P</sub> + D<sub>G</sub>)/2 = m(N<sub>P</sub> + N<sub>G</sub>)/2</b>. Meshing gears must have the same module and pressure angle (usually 20°).</li>
<li>Velocity ratio <b>ω<sub>P</sub>/ω<sub>G</sub> = N<sub>G</sub>/N<sub>P</sub> = D<sub>G</sub>/D<sub>P</sub></b>. The pinion is the smaller gear.</li>
<li>Involute teeth keep a constant velocity ratio. Too few pinion teeth causes <b>interference</b> (about 17 minimum for 20° full depth). Contact ratio &gt; 1.2 is wanted.</li></ul>
<h4>Gear trains</h4>
<ul><li>Train value = product of (driven teeth / driving teeth) for each mesh. Gears on the same shaft turn at the same speed.</li>
<li>An <b>idler gear</b> changes the direction only. Its tooth number does not change the ratio.</li>
<li>Same shaft, same power, same speed → same torque: F<sub>t1</sub>R₁ = F<sub>t2</sub>R₂.</li></ul>
<h4>Forces (all on the formula sheet)</h4>
<ul><li>Torque T = P/ω (ω in rad/s = 2π rpm/60).</li>
<li>Spur: <b>F<sub>t</sub> = T/(D/2)</b>, <b>F<sub>r</sub> = F<sub>t</sub> tan φ</b>, total F<sub>n</sub> = F<sub>t</sub>/cos φ.</li>
<li>Helical (helix angle ψ): use the transverse module m = m<sub>n</sub>/cos ψ for the diameter. F<sub>a</sub> = F<sub>t</sub> tan ψ, F<sub>r</sub> = F<sub>t</sub> tan φ<sub>n</sub>/cos ψ.</li>
<li>Bevel (pinion cone angle γ = tan⁻¹(N<sub>P</sub>/N<sub>G</sub>)): F<sub>r</sub> = F<sub>t</sub> tan φ cos γ, F<sub>a</sub> = F<sub>t</sub> tan φ sin γ. On the mating gear (shaft at 90°) <b>radial and axial swap</b>.</li>
<li>Shafts at 90°: bevel, mitre, crossed helical or worm gears. <b>Spur gears only for parallel shafts.</b></li></ul>
<h4>AGMA stresses (design for both)</h4>
<ul><li><b>Bending:</b> σ<sub>t</sub> = [F<sub>t</sub>/(b m J)] K<sub>o</sub> K<sub>s</sub> K<sub>m</sub> K<sub>B</sub> K<sub>v</sub></li>
<li><b>Contact (pitting):</b> σ<sub>c</sub> = C<sub>p</sub> √{ [F<sub>t</sub>/(b D<sub>P</sub> I)] K<sub>o</sub> K<sub>s</sub> K<sub>m</sub> K<sub>v</sub> } with C<sub>p</sub> = 191 √MPa for steel on steel.</li>
<li>Factors (charts on the sheet): J bending geometry (different for pinion and gear), I contact geometry (same for both), K<sub>o</sub> overload (power source × driven machine), K<sub>s</sub> size (by module), K<sub>m</sub> = 1 + C<sub>pf</sub> + C<sub>ma</sub> load distribution, K<sub>B</sub> rim thickness (1 for solid blanks), K<sub>v</sub> dynamic (from quality number and pitch-line speed v = ωR).</li>
<li>The contact stress is the <b>same on pinion and gear</b>; the bending stress differs only through J.</li>
<li><b>Required material strength:</b> S<sub>at</sub> ≥ σ<sub>t</sub> F<sub>s</sub> K<sub>R</sub>/Y<sub>N</sub> and S<sub>ac</sub> ≥ σ<sub>c</sub> F<sub>s</sub> K<sub>R</sub>/Z<sub>N</sub> (Y<sub>N</sub>, Z<sub>N</sub> from the life in cycles = hours × 60 × rpm, ×2 for an idler).</li>
<li>Factor of safety = allowable / adjusted stress; take the <b>minimum of the four</b> (pinion and gear, bending and contact).</li></ul>
<h4>Gear tooth failures</h4>
<p>Bending fatigue (crack at the root), pitting (surface contact fatigue), scoring/scuffing (lubrication breakdown), wear. Reliability of a gearbox with n gears each R: R<sup>n</sup>.</p>`,
    example: { q: 'A pinion (m = 5 mm, 36 teeth, 20°) transmits 22 kW at 900 rpm. Find the tangential, radial and total tooth forces.',
      steps: ['ω = 900 × 2π/60 = 94.25 rad/s; T = P/ω = 22 000/94.25 = 233.4 N·m.', 'R = mN/2 = 5 × 36/2 = 90 mm. F<sub>t</sub> = T/R = 233.4/0.090 = <b>2594 N</b>.', 'F<sub>r</sub> = F<sub>t</sub> tan 20° = <b>944 N</b>; F<sub>n</sub> = F<sub>t</sub>/cos 20° = 2760 N.'] },
    slides: [M22('w4_features', 'Week 4: gear features (pitch circle, addendum, dedendum)'), M22('w4_profile', 'Week 4: tooth profile and module'), M22('w4_types', 'Week 4: gear types'), M22('w4_forces', 'Week 4: force and power flow'), M22('w5_helical', 'Week 5: helical gear forces'), M22('w5_bevel', 'Week 5: straight bevel gear forces'), M22('w4_steps', 'Week 4: gear design steps'), M22('fs_p09', 'Formula sheet: J and I geometry factors (given in the exam)'), M22('fs_p10', 'Formula sheet: overload K_o and dynamic K_v'), M22('fs_p11', 'Formula sheet: size K_s and load distribution K_m'), M22('fs_p13', 'Formula sheet: stress cycle factors Y_N, Z_N'), M22('fs_p14', 'Formula sheet: elastic coefficient and reliability K_R'), M22('fs_p15', 'Formula sheet: allowable bending and contact stresses'), M22('fs_p16', 'Formula sheet: allowable stresses for other gear materials')],
    formulas: ['D = mN; C = m(N_P + N_G)/2; ω_P/ω_G = N_G/N_P', 'T = P/ω; F_t = T/(D/2); F_r = F_t tanφ', 'Helical: m = m_n/cosψ; F_a = F_t tanψ; F_r = F_t tanφ_n/cosψ', 'Bevel: F_r = F_t tanφ cosγ; F_a = F_t tanφ sinγ; γ = tan⁻¹(N_P/N_G)', 'σ_t = F_t K_o K_s K_m K_B K_v/(b m J); σ_c = C_p √(F_t K_o K_s K_m K_v/(b D_P I))', 'S_at ≥ σ_t F_s K_R/Y_N; S_ac ≥ σ_c F_s K_R/Z_N; N = h × 60 × rpm'],
    cards: [
      { f: 'Pitch diameter and centre distance (spur gears)', b: 'D = m N<br>C = m (N<sub>P</sub> + N<sub>G</sub>) / 2' },
      { f: 'Spur gear tangential and radial forces', b: 'F<sub>t</sub> = T / (D/2)<br>F<sub>r</sub> = F<sub>t</sub> tan φ' },
      { f: 'What does an idler gear do?', b: 'Reverses direction. It does NOT change the overall speed ratio (its teeth cancel).' },
      { f: 'Helical gear: which module gives the pitch diameter?', b: 'The transverse module m = m<sub>n</sub> / cos ψ. Axial force F<sub>a</sub> = F<sub>t</sub> tan ψ.' },
      { f: 'Bevel gear pair at 90°: how are the forces on the two gears related?', b: 'Tangential equal; pinion axial = gear radial; pinion radial = gear axial' },
      { f: 'Which gear types can connect shafts at 90°?', b: 'Bevel, mitre, crossed helical, worm. NOT spur.' },
      { f: 'AGMA bending stress equation', b: 'σ<sub>t</sub> = F<sub>t</sub> K<sub>o</sub>K<sub>s</sub>K<sub>m</sub>K<sub>B</sub>K<sub>v</sub> / (b m J)' },
      { f: 'Is the contact stress different for the pinion and gear?', b: 'No: equal and opposite contact. Bending differs (J differs).' },
      { f: 'Four gear tooth failure modes', b: 'Root bending fatigue, pitting (contact fatigue), scoring/scuffing, wear' },
      { f: 'Gearbox reliability with n gears each of reliability R', b: 'R<sup>n</sup> (e.g. 0.99⁴ = 96.1%)' },
      { f: 'Number of load cycles for a gear (and for an idler)', b: 'N = hours × 60 × rpm (idler × 2: loaded on both sides)' }
    ],
    questions: [
      { type: 'mcq', q: 'An idler gear in a train is changed from 17 teeth to 57 teeth. The output speed…', opts: ['drops by 57/17', 'rises by 57/17', 'does not change', 'reverses only'], a: 2, why: 'An idler\'s teeth appear as driven then driving, so they cancel in the ratio.' },
      { type: 'mcq', q: 'Two shafts are at 90° to each other. Which is NOT a valid option?', opts: ['bevel gears', 'worm gear set', 'spur gears', 'mitre gears'], a: 2, why: 'Spur gears only connect parallel shafts.' },
      { type: 'mcq', q: 'For a bevel pinion F<sub>t</sub> = 1000 N, F<sub>r</sub> = 410 N, F<sub>a</sub> = 280 N. The axial force on the mating gear is…', opts: ['280 N', '410 N', '1000 N', '0'], a: 1, why: 'At 90° the pinion radial direction is the gear\'s axial direction.' },
      { type: 'mcq', q: 'A gearbox has four gears each designed for 99% reliability. The chance of no gear failure is about…', opts: ['99%', '96%', '90%', '75%'], a: 1, why: '0.99⁴ = 0.961.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A pinion with 24 teeth meshes with a 60-tooth gear, module 8 mm. Find the centre distance and the speed ratio.',
        steps: ['C = m(N<sub>P</sub> + N<sub>G</sub>)/2 = 8 × 84/2 = <b>336 mm</b>.', 'Ratio = 60/24 = 2.5 (the gear turns 2.5 times slower).'], ans: 'C = 336 mm; ratio 2.5' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A spur pinion (m = 5 mm, 36 teeth, φ = 20°) transmits 22 kW at 900 rpm. Find F<sub>t</sub>, F<sub>r</sub> and the total force.',
        steps: ['T = 22 000/(900 × 2π/60) = 233.4 N·m. R = 0.090 m.', 'F<sub>t</sub> = 2594 N; F<sub>r</sub> = 2594 tan 20° = 944 N; F<sub>n</sub> = 2594/cos 20° = 2760 N.'], ans: '2594 N, 944 N, 2760 N' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A helical gear has normal module 6 mm, 36 teeth, helix angle 20°, normal pressure angle 20°, and transmits 10 kW at 800 rpm. Find the tangential, axial and radial forces.',
        steps: ['Transverse module m = 6/cos 20° = 6.385 mm → D = 6.385 × 36 = 229.9 mm.', 'ω = 83.78 rad/s; T = 10 000/83.78 = 119.4 N·m; F<sub>t</sub> = T/(D/2) = <b>1039 N</b>.', 'F<sub>a</sub> = F<sub>t</sub> tan 20° = <b>378 N</b>.', 'F<sub>r</sub> = F<sub>t</sub> tan 20°/cos 20° = <b>402 N</b>.'], ans: 'F_t = 1039 N, F_a = 378 N, F_r = 402 N' },
      { type: 'work', marks: 4, src: 'Practice (week 4 Q1 style)', q: 'A pinion (m = 6 mm, 20 teeth) would fail in bending above F<sub>t</sub> = 5200 N and in pitting above F<sub>t</sub> = 6800 N. If it was transmitting 55 kW when it failed, at what speed was it running?',
        steps: ['Bending happens first (lower force): F<sub>t</sub> = 5200 N.', 'R = mN/2 = 60 mm → T = 5200 × 0.060 = 312 N·m.', 'ω = P/T = 55 000/312 = 176.3 rad/s → <b>1683 rpm</b>.'], ans: '≈ 1680 rpm' },
      { type: 'work', marks: 8, paper: 'prac1', order: 3, src: 'Practice (week 4 Q5-Q9 style)', q: 'A steel spur pinion: F<sub>t</sub> = 2800 N, face width b = 40 mm, m = 4 mm, 22 teeth, J = 0.34, I = 0.10, K<sub>o</sub> = 1.25, K<sub>s</sub> = 1.0, K<sub>m</sub> = 1.3, K<sub>B</sub> = 1.0, K<sub>v</sub> = 1.2. (a) Find the bending stress. (b) Find the contact stress. (c) With F<sub>s</sub> = 1.5, K<sub>R</sub> = 1.25, Y<sub>N</sub> = 0.95 and Z<sub>N</sub> = 0.91, what allowable stress numbers must the material have?',
        steps: ['(a) σ<sub>t</sub> = F<sub>t</sub>/(b m J) × K<sub>o</sub>K<sub>s</sub>K<sub>m</sub>K<sub>B</sub>K<sub>v</sub> = 2800/(40 × 4 × 0.34) × 1.95 = 51.5 × 1.95 = <b>100 MPa</b>.', '(b) D<sub>P</sub> = 4 × 22 = 88 mm. σ<sub>c</sub> = 191 √[2800/(40 × 88 × 0.10) × 1.25 × 1.0 × 1.3 × 1.2] = 191 √(7.95 × 1.95) = <b>752 MPa</b>.', '(c) S<sub>at</sub> ≥ 100 × 1.5 × 1.25/0.95 = <b>198 MPa</b>; S<sub>ac</sub> ≥ 752 × 1.5 × 1.25/0.91 = <b>1550 MPa</b> (contact governs the material choice).'], ans: 'σ_t ≈ 100 MPa, σ_c ≈ 752 MPa; need S_at ≥ 198, S_ac ≥ 1550 MPa' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A compound train: input gear 20 teeth drives 50 teeth; on the same shaft an 18-tooth gear drives 63 teeth. The input runs at 1750 rpm. Find the output speed. What changes if an idler is added between the last pair?',
        steps: ['Train value = (50/20)(63/18) = 2.5 × 3.5 = 8.75.', 'Output = 1750/8.75 = <b>200 rpm</b>.', 'An idler only reverses the output direction; speed stays 200 rpm.'], ans: '200 rpm (idler: direction only)' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'shaft', name: 'Shafts: loads, reactions, bending moments and design diameter', freq: 1, freqNote: 'Weeks 5-6, the biggest multi-step calculation. Applied class week 5 demo + week 6 Q3-Q7', assigned: false,
    notation: [['T, P, ω', 'torque, power, angular speed'], ['F_t, F_r', 'tangential and radial force from a gear/sheave on the shaft'], ['F₁, F₂', 'tight-side and slack-side belt tension'], ['M_y, M_z', 'bending moment in each of two perpendicular planes'], ['M', 'resultant bending moment, √(M_y² + M_z²)'], ['D', 'shaft diameter'], ['F_s', 'factor of safety'], ['K_t', 'stress concentration factor at a shaft feature'], ['S_n′', 'corrected endurance strength (used for the fatigue/bending term)'], ['S_y', 'yield strength (used for the steady torque term)'], ['V', 'shear force (at a point with no moment/torque)']],
    lesson:
`<p>A shaft question chains everything together: power → torque → element forces → reactions → bending moments → stresses → diameter.</p>
<h4>The procedure (write the steps, they earn marks)</h4>
<ol><li><b>Torque:</b> T = P/ω. Torque only exists between the input and output elements.</li>
<li><b>Element forces</b> at each gear/sheave: gears F<sub>t</sub> = T/R, F<sub>r</sub> = F<sub>t</sub> tan φ (plus axial for helical/bevel). V-belt: F₁ − F₂ = T/R and F₁/F₂ = 5, so the shaft load is F<sub>B</sub> = F₁ + F₂ (≈ 1.5 × net driving force). Flat belt: F₁/F₂ = e<sup>μθ</sup>.</li>
<li><b>Resolve into two perpendicular planes</b> (e.g. vertical y and horizontal z) through the shaft axis.</li>
<li><b>Reactions:</b> 4 equations: ΣF<sub>y</sub> = 0, ΣF<sub>z</sub> = 0, ΣM = 0 in each plane (take moments about one bearing).</li>
<li><b>Bending moment diagrams</b> in each plane, then the resultant <b>M = √(M<sub>y</sub>² + M<sub>z</sub>²)</b> at each critical point.</li>
<li><b>Critical points:</b> where M and T are large, shoulders (fillets), keyways, retaining-ring grooves, bearing seats.</li>
<li><b>Size the diameter</b> at each point.</li></ol>
<h4>Design diameter (reversed bending + steady torque, Mott)</h4>
<p><b>D = [ (32F<sub>s</sub>/π) √( (K<sub>t</sub>M/S<sub>n</sub>')² + (3/4)(T/S<sub>y</sub>)² ) ]<sup>1/3</sup></b></p>
<ul><li>Bending on a rotating shaft is fully reversed → uses the corrected endurance strength S<sub>n</sub>' (with C<sub>R</sub>, C<sub>S</sub> etc.).</li>
<li>Torque is steady → uses S<sub>y</sub>.</li>
<li>K<sub>t</sub> typical: well-rounded fillet 1.5, sharp fillet (bearing seat) 2.5, profile keyseat 2.0, sled-runner keyseat 1.6, ring groove 3.0.</li>
<li>Where only torque acts (M = 0) the first term disappears. Where only a shear force V acts (e.g. at the end bearing seat): <b>D = √(2.94 K<sub>t</sub> F<sub>s</sub> V/S<sub>n</sub>')</b>.</li>
<li>Equivalent check form: F<sub>s</sub> = 1/√[(K<sub>t</sub>σ/S<sub>n</sub>')² + 3(τ/S<sub>y</sub>)²].</li></ul>
<p>Make the diameter at a bearing seat slightly smaller than the next step so the bearing slides on.</p>`,
    example: { q: 'Shaft between bearings A (x = 0) and B (x = 600 mm). A spur gear (R = 100 mm) at x = 200 mm has F<sub>t</sub> = 3000 N (vertical) and F<sub>r</sub> = 1092 N (horizontal). Find M at the gear and the torque.',
      steps: ['Vertical: ΣM = 0 about A gives R<sub>A</sub> = 3000 × 400/600 = 2000 N, R<sub>B</sub> = 1000 N. M<sub>vert</sub> at gear = 2000 × 0.2 = 400 N·m.', 'Horizontal: R<sub>A</sub> = 1092 × 400/600 = 728 N. M<sub>horiz</sub> = 728 × 0.2 = 145.6 N·m.', 'Resultant M = √(M<sub>y</sub>² + M<sub>z</sub>²) = √(400² + 145.6²) = <b>425.7 N·m</b>. Torque T = F<sub>t</sub>R = 3000 × 0.1 = <b>300 N·m</b>.'] },
    slides: [M22('w5_procedure', 'Week 5: shaft design procedure'), M22('w5_spur', 'Week 5: spur gear forces on a shaft'), M22('w5_vbelt', 'Week 5: V-belt forces on a shaft'), M22('w6_steps', 'Week 6: shaft design steps (textbook method)')],
    formulas: ['T = P/ω; F_t = T/R; F_r = F_t tanφ', 'V-belt: F₁ − F₂ = T/R, F₁/F₂ = 5, F_B = F₁ + F₂; flat belt F₁/F₂ = e^(μθ)', 'Resultant M = √(M_y² + M_z²)', 'D = [(32F_s/π)√((K_tM/S_n\')² + ¾(T/S_y)²)]^(1/3)', 'Pure shear (bearing seat): D = √(2.94 K_t F_s V/S_n\')', 'σ = 32M/πD³, τ = 16T/πD³'],
    cards: [
      { f: 'Shaft design procedure (7 steps)', b: 'Torque → element forces → resolve into 2 planes → reactions → BMDs → resultant M at critical points → size D' },
      { f: 'Mott shaft design equation (reversed bending + steady torque)', b: 'D = [ (32F<sub>s</sub>/π) √((K<sub>t</sub>M/S<sub>n</sub>\')² + ¾(T/S<sub>y</sub>)²) ]<sup>1/3</sup>' },
      { f: 'Why does bending use S<sub>n</sub>\' but torque use S<sub>y</sub> in the shaft equation?', b: 'A rotating shaft reverses the bending stress every revolution (fatigue); steady torque gives a constant shear stress (yield)' },
      { f: 'Resultant bending moment from two planes', b: 'M = √(M<sub>y</sub>² + M<sub>z</sub>²)' },
      { f: 'Typical K<sub>t</sub> values for shafts', b: 'Well-rounded fillet 1.5, sharp fillet 2.5, profile keyseat 2.0, sled-runner keyseat 1.6, ring groove 3.0' },
      { f: 'Diameter where only a shear force V acts', b: 'D = √(2.94 K<sub>t</sub> F<sub>s</sub> V / S<sub>n</sub>\')' },
      { f: 'Shaft load from a V-belt drive', b: 'F₁/F₂ = 5, F₁ − F₂ = T/R; bending force F<sub>B</sub> = F₁ + F₂ ≈ 1.5 × net force' }
    ],
    questions: [
      { type: 'mcq', q: 'Two gears on the same shaft, diameters 660 mm and 330 mm. The force on the large gear is 35 kN. The force on the small gear is…', opts: ['17.5 kN', '35 kN', '70 kN', '140 kN'], a: 2, why: 'Same shaft → same torque: F₁R₁ = F₂R₂ → F₂ = 35 × 660/330 = 70 kN.' },
      { type: 'mcq', q: 'Which section is NOT normally a critical point on a shaft?', opts: ['a shoulder fillet next to a bearing', 'a keyway under a gear', 'the middle of a plain section with zero moment and zero torque', 'a retaining ring groove'], a: 2, why: 'With no load there is no stress to worry about. Stress raisers and high-moment points are critical.' },
      { type: 'mcq', q: 'In the shaft design equation, the bending moment term uses…', opts: ['S<sub>y</sub>', 'S<sub>u</sub>', 'the corrected endurance strength S<sub>n</sub>\'', 'the shear modulus'], a: 2, why: 'Rotating bending is fully reversed, a fatigue load.' },
      { type: 'work', marks: 4, src: 'Practice (week 5 style)', q: 'A V-belt sheave of diameter 300 mm transmits 300 N·m. Find the tight- and slack-side forces and the total bending force on the shaft.',
        steps: ['F₁ − F₂ = T/R = 300/0.15 = 2000 N and F₁ = 5F₂.', '4F₂ = 2000 → F₂ = 500 N, F₁ = 2500 N.', 'Shaft force F<sub>B</sub> = F₁ + F₂ = <b>3000 N</b> (= 1.5 × 2000).'], ans: 'F₁ = 2500 N, F₂ = 500 N, F_B = 3000 N' },
      { type: 'work', marks: 8, paper: 'prac1', order: 4, src: 'Practice (week 5-6 style)', q: 'A shaft is supported by bearings A (x = 0) and B (x = 600 mm). A spur gear of radius 100 mm at x = 200 mm carries F<sub>t</sub> = 3000 N (vertical) and F<sub>r</sub> = 1092 N (horizontal). (a) Find the bearing reactions in both planes. (b) Find the resultant bending moment at the gear and the torque. (c) With K<sub>t</sub> = 2.5, F<sub>s</sub> = 2.5, S<sub>n</sub>\' = 200 MPa, S<sub>y</sub> = 450 MPa, find the minimum diameter at the gear.',
        steps: ['(a) Vertical: R<sub>A</sub> = 2000 N, R<sub>B</sub> = 1000 N. Horizontal: R<sub>A</sub> = 728 N, R<sub>B</sub> = 364 N.', '(b) M<sub>vert</sub> = 400 N·m, M<sub>horiz</sub> = 145.6 N·m → M = 425.7 N·m. T = 300 N·m.', '(c) K<sub>t</sub>M/S<sub>n</sub>\' = 2.5 × 425.7/200×10⁶ = 5.32×10⁻⁶; ¾(T/S<sub>y</sub>)² = 0.75 × (6.67×10⁻⁷)² = 3.3×10⁻¹³.', 'D = [(32 × 2.5/π) √(2.83×10⁻¹¹ + 3.3×10⁻¹³)]<sup>1/3</sup> = (25.46 × 5.35×10⁻⁶)<sup>1/3</sup> = <b>0.0515 m ≈ 51.5 mm</b>.'], ans: 'M = 426 N·m, T = 300 N·m, D ≥ 51.5 mm' },
      { type: 'work', marks: 3, src: 'Practice (week 6 Q7 style)', q: 'At an end bearing seat there is no moment or torque, only a shear force V = 6000 N. K<sub>t</sub> = 2.5, F<sub>s</sub> = 2.5, S<sub>n</sub>\' = 200 MPa. Find the minimum diameter.',
        steps: ['D = √(2.94 K<sub>t</sub>F<sub>s</sub>V/S<sub>n</sub>\') = √(2.94 × 2.5 × 2.5 × 6000/200×10⁶) = √(5.51×10⁻⁴) = <b>23.5 mm</b>.'], ans: '23.5 mm' },
      { type: 'work', marks: 4, src: 'Practice (week 5 Q1 style)', q: 'A flat belt runs on a 400 mm driving pulley with a wrap angle of 150° and μ = 0.25. The belt can take 2800 N. What is the maximum torque?',
        steps: ['θ = 150° = 2.618 rad; e<sup>μθ</sup> = e<sup>0.6545</sup> = 1.924.', 'F<sub>slack</sub> = 2800/1.924 = 1455 N.', 'T = (F<sub>tight</sub> − F<sub>slack</sub>) D/2 = (2800 − 1455) × 0.2 = <b>269 N·m</b>.'], ans: '269 N·m' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'as1403', name: 'Shaft fatigue design to AS1403', freq: 0.7, freqNote: 'Week 6 lecture 2', assigned: false,
    notation: [['D', 'shaft diameter (mm)'], ['F_S', 'factor of safety'], ['F_R', 'endurance limit for fully-reversed bending (MPa)'], ['K_s', 'AS1403 size factor (applied to the stress — opposite sense to Mott\'s C_S)'], ['K', 'AS1403 stress-raising factor (from charts)'], ['M_q, T_q', 'design bending moment and torque (N·m)']],
    lesson:
`<p>AS1403 is the Australian Standard for designing rotating steel shafts for infinite life. It gives (almost) the same answer as the textbook equation, written differently.</p>
<h4>AS1403 sizing equation (low starts, many revolutions, no axial load)</h4>
<p><b>D³ = (10⁴ F<sub>S</sub>/F<sub>R</sub>) √[ (K<sub>s</sub> K M<sub>q</sub>)² + (3/4) T<sub>q</sub>² ]</b></p>
<p>with D in mm, M<sub>q</sub> and T<sub>q</sub> in N·m, and F<sub>R</sub> (endurance limit for reversed bending) in MPa. Rearranged to check a chosen diameter: <b>F<sub>S</sub> = F<sub>R</sub> D³ / (10⁴ √[(K<sub>s</sub>KM<sub>q</sub>)² + ¾T<sub>q</sub>²])</b>.</p>
<ul><li><b>K<sub>s</sub></b> = size factor applied to the <b>stress</b> (so bigger K<sub>s</sub> is worse). It is the inverse of Mott's C<sub>S</sub>. Example value about 1.5 for 60 mm.</li>
<li><b>K</b> = stress raising factor from AS1403 charts: diameter change (from D₁/D and fillet z = r/D), bearing seat, fitted components (interference fits such as H7/s6), keyseat/spline, groove/hole. If several features are close together use <b>K = max(K₁, K₂)</b>.</li>
<li><b>Procedure:</b> forces → reactions → M and T at critical points → choose trial diameters → find K<sub>s</sub> and K → compute F<sub>S</sub> → increase D where F<sub>S</sub> is too small → repeat until all points pass.</li></ul>
<p>Why the two methods agree: substitute N = F<sub>S</sub>, K<sub>t</sub> = K, C<sub>S</sub> = 1/K<sub>s</sub>, S<sub>n</sub>' = F<sub>R</sub>/K<sub>s</sub> and units of mm and MPa into Mott's equation and you get AS1403.</p>`,
    example: { q: 'M<sub>q</sub> = 1200 N·m, T<sub>q</sub> = 800 N·m, K = 2.0, K<sub>s</sub> = 1.4, F<sub>R</sub> = 300 MPa, F<sub>S</sub> = 2.5. Find D.',
      steps: ['Inner term √[(K<sub>s</sub>KM<sub>q</sub>)² + ¾T<sub>q</sub>²]: K<sub>s</sub>KM = 1.4 × 2.0 × 1200 = 3360; ¾T² = 0.75 × 800² = 480 000.', '√(3360² + 480 000) = √(11 289 600 + 480 000) = 3430.7.', 'D³ = (10⁴F<sub>S</sub>/F<sub>R</sub>) × [that root] = (10⁴ × 2.5/300) × 3430.7 = 285 893 → <b>D = 65.9 mm</b>. Choose 66 mm; check: F<sub>S</sub> = 300 × 66³/(10⁴ × 3430.7) = 2.51 ✓.'] },
    slides: [M22('w6_as1403', 'Week 6: AS1403 shaft sizing formulas (Table 2)')],
    formulas: ['AS1403: D³ = (10⁴F_S/F_R)√((K_s K M_q)² + ¾T_q²)  [mm, N·m, MPa]', 'Check: F_S = F_R D³ / (10⁴ √((K_s K M_q)² + ¾T_q²))', 'K_s (AS1403) = 1/C_S (Mott): applied on the stress', 'Several stress raisers close together: K = max(K₁, K₂)'],
    cards: [
      { f: 'AS1403 shaft sizing equation', b: 'D³ = (10⁴ F<sub>S</sub>/F<sub>R</sub>) √((K<sub>s</sub>K M<sub>q</sub>)² + ¾T<sub>q</sub>²)<br>D mm, M and T in N·m, F<sub>R</sub> MPa' },
      { f: 'AS1403 size factor K<sub>s</sub> vs Mott size factor C<sub>S</sub>', b: 'K<sub>s</sub> multiplies the stress (bigger = worse); C<sub>S</sub> multiplies the strength. K<sub>s</sub> = 1/C<sub>S</sub>.' },
      { f: 'AS1403: what if two stress raisers are close together?', b: 'Use the larger one: K = max(K₁, K₂)' },
      { f: 'AS1403 design loop', b: 'Trial diameter → K<sub>s</sub>, K → F<sub>S</sub> at each critical point → enlarge D where F<sub>S</sub> is too low → repeat' }
    ],
    questions: [
      { type: 'mcq', q: 'In AS1403 a larger size factor K<sub>s</sub>…', opts: ['raises the allowable stress', 'raises the calculated stress (needs a bigger shaft)', 'has no effect', 'only matters for torque'], a: 1, why: 'K<sub>s</sub> is applied to the stress, the opposite of Mott\'s C<sub>S</sub>.' },
      { type: 'mcq', q: 'A gear is press-fitted (H7/s6) next to a shoulder fillet. Which K do you use there?', opts: ['the fillet K only', 'the fitted-component K only', 'the larger of the two', 'their product'], a: 2, why: 'K = max(K₁, K₂) when the stress raisers are close together.' },
      { type: 'work', marks: 6, src: 'Practice', q: 'Size the shaft by AS1403: M<sub>q</sub> = 1200 N·m, T<sub>q</sub> = 800 N·m, K = 2.0, K<sub>s</sub> = 1.4, F<sub>R</sub> = 300 MPa, required F<sub>S</sub> = 2.5. Pick a whole-mm diameter and check F<sub>S</sub>.',
        steps: ['√[(1.4 × 2.0 × 1200)² + 0.75 × 800²] = √(11.29×10⁶ + 0.48×10⁶) = 3430.7.', 'D³ = (10⁴ × 2.5/300) × 3430.7 = 2.859×10⁵ → D = 65.9 mm → choose <b>66 mm</b>.', 'F<sub>S</sub> = 300 × 66³/(10⁴ × 3430.7) = <b>2.51</b> ≥ 2.5 ✓.'], ans: 'D = 66 mm, F_S = 2.51' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A 60 mm section carries M<sub>q</sub> = 635 N·m and no torque. K = 1.51, K<sub>s</sub> = 1.5, F<sub>R</sub> = 360 MPa. Find F<sub>S</sub>.',
        steps: ['F<sub>S</sub> = F<sub>R</sub>D³/(10⁴ K<sub>s</sub>K M<sub>q</sub>) = 360 × 216 000/(10⁴ × 1.5 × 1.51 × 635).', '= 7.776×10⁷/(1.438×10⁷) = <b>5.4</b>.'], ans: 'F_S ≈ 5.4' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'mounting', name: 'Keys, fits, shrink fits and couplings', freq: 0.65, freqNote: 'Week 8 part 1. Applied class week 8 Q1-Q5', assigned: false,
    notation: [['F', 'force transmitted by the key, T/(D/2)'], ['W, H, L', 'key width, height and length'], ['D', 'shaft diameter'], ['S_y', 'yield strength'], ['F_s', 'factor of safety'], ['H7/f6 etc.', 'ISO fit designation: capital letter = hole tolerance, lowercase = shaft tolerance'], ['p', 'contact pressure (shrink fit)'], ['E', 'Young\'s modulus'], ['δ ("delta")', 'radial interference'], ['R_s, R_h', 'shaft radius and hub outer radius'], ['μ ("mu")', 'coefficient of friction'], ['L', 'hub (engagement) length'], ['N, R', 'number of bolts and bolt-circle radius (flange coupling)']],
    lesson:
`<h4>Parallel keys</h4>
<p>The key carries the torque between the shaft and the hub. The force on the key is <b>F = T/(D/2)</b> (D = shaft diameter). Key size W × H comes from a standard table by shaft diameter; the length L is usually close to the hub length.</p>
<ul><li><b>Shear failure</b> (across the key): τ = F/(W L) ≤ 0.5 S<sub>y</sub>/F<sub>s</sub>.</li>
<li><b>Compression (bearing) failure</b> on the side face, which is H/2 high: σ<sub>c</sub> = F/(L × H/2) ≤ S<sub>y</sub>/F<sub>s</sub>.</li>
<li>Choose a key material weaker than the shaft so the key fails first (a cheap fuse). Usually compression governs.</li>
<li>Other keys: Woodruff, gib-head, taper, pin keys. Splines carry more torque. The keyway weakens the shaft (K<sub>t</sub> about 2.0 profile / 1.6 sled-runner).</li></ul>
<h4>Fits (hole-basis system, e.g. H7/f6)</h4>
<ul><li>Capital letter = hole tolerance zone, small letter = shaft. "H" holes have lower deviation 0 (minimum hole = basic size).</li>
<li><b>Clearance</b> (shaft always smaller): e.g. H11/c11, H9/d9, H8/f7, H7/g6, H7/h6.</li>
<li><b>Transition</b> (either): H7/k6, H7/n6.</li>
<li><b>Interference</b> (shaft always bigger): H7/p6, H7/s6, H7/u6.</li>
<li>Read deviations from the AS1654 table (given in the exam). Minimum interference = smallest shaft − largest hole.</li></ul>
<h4>Shrink (interference) fit</h4>
<p>Pressure for a solid shaft: <b>p = E δ (R<sub>h</sub>² − R<sub>s</sub>²)/(2 R<sub>s</sub> R<sub>h</sub>²)</b>, with δ the <b>radial</b> interference (half the diametral one), R<sub>s</sub> the shaft radius, R<sub>h</sub> the hub outer radius.</p>
<p>Torque capacity: <b>T = μ p 2π R<sub>s</sub>² L</b> (L = hub length). Use the <b>minimum</b> interference for torque capacity and the maximum for stress checks.</p>
<h4>Flange coupling</h4>
<p>N bolts on a bolt circle of radius R: bolt force F = T/(N R), bolt shear τ = F/A<sub>s</sub>.</p>`,
    example: { q: 'A 60 mm shaft transmits 1200 N·m through an 18 × 11 key, 80 mm long. Find the shear and bearing stresses.',
      steps: ['F = T/(D/2) = 1200/0.030 = 40 000 N.', 'Shear: τ = F/(W L) = 40 000/(18 × 80) = 27.8 MPa.', 'Bearing: σ<sub>c</sub> = F/(L H/2) = 40 000/(80 × 5.5) = 90.9 MPa (larger, usually governs).'] },
    slides: [M22('w8_key', 'Week 8: failure of a parallel key'), M22('w8_fits', 'Week 8: metric fit designations'), M22('w8_shrink', 'Week 8: pressure under a shrink fit')],
    formulas: ['Key: F = T/(D/2); τ = F/(WL) ≤ 0.5S_y/F_s; σ_c = F/(L·H/2) ≤ S_y/F_s', 'Fits: clearance (f, g, h), transition (k, n), interference (p, s, u) with an H hole', 'Shrink fit (solid shaft): p = Eδ(R_h² − R_s²)/(2R_s R_h²), δ radial', 'Torque capacity T = μ p 2π R_s² L', 'Flange coupling: F_bolt = T/(N R); τ = F/A_s'],
    cards: [
      { f: 'Two failure checks for a parallel key', b: 'Shear: τ = F/(W L) ≤ 0.5S<sub>y</sub>/F<sub>s</sub><br>Bearing: σ<sub>c</sub> = F/(L·H/2) ≤ S<sub>y</sub>/F<sub>s</sub>' },
      { f: 'Force on a key from the shaft torque', b: 'F = T / (D/2), D = shaft diameter' },
      { f: 'Is H7/f6 clearance, transition or interference?', b: 'Clearance. (k, n → transition; p, s, u → interference)' },
      { f: 'Shrink-fit pressure for a solid shaft', b: 'p = E δ (R<sub>h</sub>² − R<sub>s</sub>²) / (2 R<sub>s</sub> R<sub>h</sub>²), δ = radial interference' },
      { f: 'Torque capacity of a shrink fit', b: 'T = μ p 2π R<sub>s</sub>² L' },
      { f: 'Which interference do you use for torque capacity?', b: 'The MINIMUM interference (worst case). Use the maximum for checking stresses.' }
    ],
    questions: [
      { type: 'mcq', q: 'A hole-basis fit H7/s6 is…', opts: ['clearance', 'transition', 'interference', 'impossible to say'], a: 2, why: 's6 shafts are always larger than H7 holes: an interference (press/shrink) fit.' },
      { type: 'mcq', q: 'Why is the key usually made from a weaker steel than the shaft?', opts: ['it is cheaper to machine', 'so the key fails first and protects the shaft and hub', 'to reduce weight', 'to increase stiffness'], a: 1, why: 'A sheared key is cheap to replace; a cracked shaft is not.' },
      { type: 'work', marks: 5, src: 'Practice (week 8 Q1-Q2 style)', q: 'A 60 mm shaft transmits 1200 N·m via an 18 × 11 mm parallel key, 80 mm long. With F<sub>s</sub> = 2, find the shear and bearing stresses, and the minimum key yield strength.',
        steps: ['F = 1200/0.030 = 40 000 N.', 'τ = 40 000/(18 × 80) = 27.8 MPa → needs S<sub>y</sub> ≥ 2F<sub>s</sub>τ = 111 MPa.', 'σ<sub>c</sub> = 40 000/(80 × 5.5) = 90.9 MPa → needs S<sub>y</sub> ≥ F<sub>s</sub>σ<sub>c</sub> = 182 MPa.', 'Bearing governs: <b>S<sub>y</sub> ≥ 182 MPa</b>.'], ans: 'τ = 27.8 MPa, σ_c = 90.9 MPa, S_y ≥ 182 MPa' },
      { type: 'work', marks: 6, paper: 'prac1', order: 5, src: 'Practice (week 8 Q5 style)', q: 'A hub (outer radius 50 mm, length 50 mm) is shrink-fitted on a solid 50 mm diameter steel shaft (E = 200 GPa) with a radial interference of 0.020 mm. μ = 0.15. Find the contact pressure and the torque capacity.',
        steps: ['R<sub>s</sub> = 25 mm, R<sub>h</sub> = 50 mm. p = Eδ(R<sub>h</sub>² − R<sub>s</sub>²)/(2R<sub>s</sub>R<sub>h</sub>²) = 200 000 × 0.020 × (2500 − 625)/(2 × 25 × 2500).', '= 4000 × 1875/125 000 = <b>60 MPa</b>.', 'T = μp2πR<sub>s</sub>²L = 0.15 × 60 × 2π × 25² × 50 = 1.767×10⁶ N·mm = <b>1767 N·m</b>.'], ans: 'p = 60 MPa, T ≈ 1770 N·m' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A flange coupling transmits 3000 N·m with 6 bolts of 10 mm diameter on a 200 mm bolt-circle diameter. Find the shear stress in each bolt.',
        steps: ['F per bolt = T/(N R) = 3000/(6 × 0.1) = 5000 N.', 'A = π × 10²/4 = 78.5 mm² → τ = <b>63.7 MPa</b>.'], ans: '63.7 MPa' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'belts', name: 'Belts and drive-train dynamics', freq: 0.5, freqNote: 'Weeks 5 and 8 part 2', assigned: false,
    notation: [['F_tight, F_slack (F₁, F₂)', 'belt tension on the tight and slack side'], ['μ ("mu")', 'coefficient of friction between belt and pulley'], ['θ ("theta")', 'belt wrap angle (radians)'], ['D, d', 'large and small pulley diameters'], ['C', 'centre distance between pulleys'], ['L', 'belt length'], ['G', 'gear ratio, N₂/N₁'], ['I₁, I₂', 'motor-side and load-side mass moment of inertia'], ['α₁ ("alpha 1")', 'angular acceleration of the motor shaft'], ['T₁', 'motor torque needed']],
    lesson:
`<h4>Belt drives</h4>
<ul><li><b>Flat belt:</b> F<sub>tight</sub>/F<sub>slack</sub> = e<sup>μθ</sup> (θ = wrap angle on the smaller pulley, in radians). Torque T = (F<sub>tight</sub> − F<sub>slack</sub>) D/2.</li>
<li><b>V-belt:</b> design ratio F<sub>tight</sub>/F<sub>slack</sub> = 5. Shaft load F<sub>B</sub> = F₁ + F₂.</li>
<li>Wrap angles: θ<sub>d</sub> = π − 2 sin⁻¹[(D − d)/(2C)] (small pulley), θ<sub>D</sub> = π + 2 sin⁻¹[(D − d)/(2C)].</li>
<li>V-belt length L = 2C + 1.57(D + d) + (D − d)²/(4C). Keep 0.7(D + d) &lt; C &lt; 2(D + d).</li></ul>
<h4>Accelerating a drive train</h4>
<ul><li>Gear ratio G = N₂/N₁ (load turns G times slower). Reflected inertia: a load inertia I₂ looks like <b>I₂/G²</b> at the motor.</li>
<li>Motor torque needed: <b>T₁ = (I₁ + I₂/G² + …) α₁</b>.</li>
<li><b>Optimum gear ratio</b> for the fastest load acceleration: <b>G = √(I₂/I₁)</b>.</li></ul>
<p>Gear meshes also lose a little power to tooth friction (gear loss factor); bearings lose power to friction torque (SKF model: P = M ω).</p>`,
    example: { q: 'Motor inertia I₁ = 0.05 kg·m², load inertia I₂ = 2.0 kg·m² through G = 8. Find the motor torque for α₁ = 100 rad/s² and the optimum ratio.',
      steps: ['Equivalent inertia at motor I<sub>eq</sub> = I₁ + I₂/G² = 0.05 + 2.0/64 = 0.0813 kg·m².', 'T₁ = I<sub>eq</sub> α₁ = 0.0813 × 100 = <b>8.1 N·m</b>.', 'Optimum G = √(I₂/I₁) = √40 = <b>6.3</b>.'] },
    slides: [M22('w8_optratio', 'Week 8: optimum gear ratio')],
    formulas: ['Flat belt: F₁/F₂ = e^(μθ); T = (F₁ − F₂)D/2', 'V-belt: F₁/F₂ = 5; L = 2C + 1.57(D + d) + (D − d)²/4C', 'Wrap: θ_d = π − 2sin⁻¹((D − d)/2C)', 'T₁ = (I₁ + I₂/G²)α₁; optimum G = √(I₂/I₁)'],
    cards: [
      { f: 'Flat belt tension ratio', b: 'F<sub>tight</sub>/F<sub>slack</sub> = e<sup>μθ</sup> (θ in radians on the smaller pulley)' },
      { f: 'V-belt design tension ratio', b: 'F<sub>tight</sub>/F<sub>slack</sub> = 5' },
      { f: 'Reflected inertia of a load through a gear ratio G', b: 'I<sub>load</sub>/G² at the motor shaft' },
      { f: 'Optimum gear ratio for maximum load acceleration', b: 'G = √(I₂/I₁)' }
    ],
    questions: [
      { type: 'mcq', q: 'Increasing the wrap angle on a flat-belt pulley…', opts: ['reduces the torque capacity', 'increases the tension ratio and torque capacity', 'has no effect', 'only changes speed'], a: 1, why: 'F₁/F₂ = e<sup>μθ</sup> grows with θ.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'Find the V-belt length for D = 300 mm, d = 100 mm and C = 500 mm. Is C in the recommended range?',
        steps: ['L = 2(500) + 1.57(400) + 200²/(4 × 500) = 1000 + 628 + 20 = <b>1648 mm</b>.', 'Range 0.7(400) = 280 &lt; 500 &lt; 800 = 2(400) ✓.'], ans: '1648 mm, yes' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A motor (I₁ = 0.05 kg·m²) drives a drum (I₂ = 2.0 kg·m²) through an 8:1 reduction. Find the motor torque to accelerate the motor at 100 rad/s², and the optimum gear ratio.',
        steps: ['I<sub>eq</sub> = I₁ + I₂/G² = 0.05 + 2/64 = 0.0813 kg·m².', 'T = 0.0813 × 100 = <b>8.13 N·m</b>.', 'G<sub>opt</sub> = √(2/0.05) = <b>6.32</b>.'], ans: '8.13 N·m; G_opt = 6.32' }
    ] }
]);
