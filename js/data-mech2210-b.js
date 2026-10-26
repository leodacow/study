/* MECH2210 part 2: rigid body dynamics (weeks 6-8, lectures L14-L22). */
var S10b = function (n, cap) { return { src: 'img/m2210/' + n + '.jpg', cap: cap }; };
DATA.addTopics('MECH2210', [
  /* ------------------------------------------------------------ */
  { id: 'rkin', name: 'Rigid body kinematics (rotation, IC, relative motion)', freq: 0.7, freqNote: 'Week 6. Needed in every rigid body problem.', assigned: false,
    notation: [['θ', 'angular position'], ['ω ("omega")', 'angular velocity, dθ/dt'], ['α ("alpha")', 'angular acceleration, dω/dt'], ['r', 'distance from the rotation axis to the point'], ['v, a_t, a_n', 'speed, tangential and normal acceleration of a point on the body'], ['v_B/A, a_B/A', 'relative velocity/acceleration of point B as seen from point A'], ['IC', 'instantaneous centre of zero velocity'], ['G', 'the body\'s mass centre'], ['R', 'wheel/disk radius (rolling problems)']],
    lesson:
`<p>A rigid body does not deform, so the distance between any two of its points never changes. Three kinds of motion: <b>translation</b> (every point moves the same), <b>rotation about a fixed axis</b>, and <b>general plane motion</b> (both together).</p>
<h4>Angular motion</h4>
<p>ω = dθ/dt (rad/s), α = dω/dt (rad/s²). Counter-clockwise is positive. If α is constant the SUVAT set works with ω and θ: ω = ω₀ + αt, θ = θ₀ + ω₀t + ½αt², ω² = ω₀² + 2α(θ − θ₀).</p>
<h4>A point on a body rotating about a fixed axis, at distance r from the axis</h4>
<ul><li>v = ω r (tangent to the circle)</li><li>a<sub>t</sub> = α r (along the tangent), a<sub>n</sub> = ω² r (towards the axis)</li></ul>
<h4>Relative velocity (two points A and B on the same body)</h4>
<p><b>v<sub>B</sub> = v<sub>A</sub> + v<sub>B/A</sub></b>, and v<sub>B/A</sub> = ω × r<sub>B/A</sub>. In 2D: size = ω × (distance AB), direction <b>perpendicular to AB</b>.</p>
<h4>Relative acceleration</h4>
<p><b>a<sub>B</sub> = a<sub>A</sub> + α × r<sub>B/A</sub> − ω² r<sub>B/A</sub></b>: a tangential part (α r) and a part pointing from B towards A (ω² r).</p>
<h4>Instantaneous centre (IC) of zero velocity</h4>
<p>Draw a line perpendicular to the velocity at two points. They cross at the IC. Then v = ω × (distance from the IC) for every point. <b>The IC works for velocities only, not for accelerations.</b></p>
<h4>Rolling without slipping</h4>
<p>The contact point is the IC (zero velocity). v<sub>G</sub> = ω R, a<sub>G</sub> = α R (centre in a straight line). The top of the wheel moves at 2 v<sub>G</sub>. The contact point's acceleration is ω² R pointing towards the centre (it is <b>not</b> zero).</p>`,
    example: { q: 'A 2 m ladder AB has end A sliding on the floor at 4 m/s (right) while B slides down a wall. At 30° to the floor, find ω and v<sub>B</sub>.',
      steps: ['Perpendicular to v<sub>A</sub> (vertical line through A) and to v<sub>B</sub> (horizontal line through B) intersect at the IC, directly above A at height L sin30° = 1 m, and level with B.', 'v = ω × (distance to IC) → ω = v<sub>A</sub>/(distance A to IC) = 4/1 = 4 rad/s.', 'Distance from B to IC = L cos30° = 1.732 m, so v<sub>B</sub> = ω × (distance B to IC) = 4 × 1.732 = 6.93 m/s (down the wall).'] },
    slides: [S10b('L14_Kin-05', 'L14: angular motion'), S10b('L14_Kin-09', 'L14: instantaneous centre of rotation'), S10b('L14_Kin-14', 'L14: relative velocity')],
    formulas: ['v = ωr, a_t = αr, a_n = ω²r', 'v_B = v_A + ω × r_B/A (|v_B/A| = ω·AB, ⟂ AB)', 'a_B = a_A + α × r_B/A − ω²r_B/A', 'Rolling no slip: v_G = ωR, a_G = αR, contact point is the IC'],
    cards: [
      { f: 'Relative velocity of two points on one rigid body', b: 'v<sub>B</sub> = v<sub>A</sub> + ω × r<sub>B/A</sub><br>(size ω·AB, direction ⟂ AB)' },
      { f: 'Relative acceleration of two points on one rigid body', b: 'a<sub>B</sub> = a<sub>A</sub> + α × r<sub>B/A</sub> − ω² r<sub>B/A</sub>' },
      { f: 'Rolling without slipping: kinematic conditions', b: 'v<sub>G</sub> = ωR and a<sub>G</sub> = αR<br>Contact point is the IC (v = 0, but a ≠ 0)' },
      { f: 'How to find the instantaneous centre', b: 'Intersection of lines drawn perpendicular to the velocities of two points' },
      { f: 'Acceleration of a point at radius r on a rotating body', b: 'a<sub>t</sub> = αr (tangential), a<sub>n</sub> = ω²r (towards the axis)' }
    ],
    questions: [
      { type: 'mcq', q: 'A wheel of radius R rolls without slipping along a straight road, centre speed v. The speed of the top point is…', opts: ['0', 'v', '2v', 'v/2'], a: 2, why: 'The top is 2R from the IC (the contact point), so its speed is ω(2R) = 2v.' },
      { type: 'mcq', q: 'For a wheel rolling at constant speed without slipping, the acceleration of the contact point is…', opts: ['zero', 'ω²R pointing towards the centre', 'ωR forwards', 'αR backwards'], a: 1, why: 'The contact point has zero velocity but not zero acceleration. The IC method does not give accelerations.' },
      { type: 'mcq', q: 'Points A and B are on the same rigid body. The relative velocity v<sub>B/A</sub> is…', opts: ['along line AB', 'perpendicular to line AB with size ω × AB', 'zero', 'equal to v<sub>A</sub>'], a: 1, why: 'Points on a rigid body can only move relative to each other by rotation, so v<sub>B/A</sub> ⟂ AB.' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A wheel of radius 0.4 m rolls without slipping with centre speed 8 m/s (constant). Find ω, the speed of the top point, and the acceleration of the contact point.',
        steps: ['ω = v<sub>G</sub>/R = 8/0.4 = 20 rad/s.', 'v<sub>top</sub> = 2v<sub>G</sub> = 16 m/s.', 'Contact point: a = ω²R = 400 × 0.4 = 160 m/s² directed up towards the centre.'], ans: '20 rad/s; 16 m/s; 160 m/s² upward' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A 2 m ladder has end A sliding on the floor at 4 m/s to the right. When the ladder is at 30° to the floor, find its angular velocity and the speed of end B on the wall.',
        hint: 'Find the IC from perpendiculars to v_A and v_B.',
        steps: ['IC is above A at height L sin30° = 1 m, and level with B.', 'ω = v<sub>A</sub>/1 = 4 rad/s.', 'v<sub>B</sub> = ω(L cos30°) = 4 × 1.732 = 6.93 m/s.'], ans: 'ω = 4 rad/s, v<sub>B</sub> = 6.93 m/s' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'rkinetics', name: 'Rigid body kinetics (ΣF = ma, ΣM = Iα)', freq: 1, freqNote: 'Part A of 2023, 2024 and 2025 exams (see-saw, wheel with couple, disk + block)', assigned: false,
    notation: [['G', 'the mass centre of the body'], ['a_G', 'acceleration of the mass centre'], ['I_G', 'mass moment of inertia about the mass centre G'], ['I_O', 'mass moment of inertia about a fixed axis O'], ['α ("alpha")', 'angular acceleration'], ['k (or k_G)', 'radius of gyration (I = mk²)'], ['d', 'distance between two parallel axes (parallel axis theorem)'], ['M (or ΣM)', 'applied moment/couple'], ['N', 'normal force'], ['μ_s, μ_k', 'static and kinetic friction coefficients'], ['FBD', 'free body diagram']],
    lesson:
`<p>Kinetics of a rigid body = Newton's second law for translation <b>plus</b> a moment equation for rotation. This is the single most examined idea in MECH2210 Part A.</p>
<h4>Equations of motion (2D)</h4>
<ul><li>ΣF<sub>x</sub> = m (a<sub>G</sub>)<sub>x</sub></li><li>ΣF<sub>y</sub> = m (a<sub>G</sub>)<sub>y</sub></li><li><b>ΣM<sub>G</sub> = I<sub>G</sub> α</b> (moments about the mass centre G)</li></ul>
<p>About any other point P: <b>ΣM<sub>P</sub> = Σ(M<sub>k</sub>)<sub>P</sub></b>, i.e. I<sub>G</sub>α plus the moment of m a<sub>G</sub> about P. For rotation about a <b>fixed</b> axis O: <b>ΣM<sub>O</sub> = I<sub>O</sub> α</b>.</p>
<h4>Mass moment of inertia</h4>
<table class="t"><tr><th>Body</th><th>I<sub>G</sub></th></tr><tr><td>Uniform rod, length L (about centre)</td><td>(1/12) m L²</td></tr><tr><td>Rod about its end</td><td>(1/3) m L²</td></tr><tr><td>Solid disk/cylinder, radius R</td><td>½ m R²</td></tr><tr><td>Ring / thin hoop</td><td>m R²</td></tr><tr><td>Solid sphere</td><td>(2/5) m R²</td></tr><tr><td>Given radius of gyration k</td><td>m k²</td></tr></table>
<p><b>Parallel axis theorem:</b> I = I<sub>G</sub> + m d².</p>
<h4>Method (follow every time)</h4>
<ol><li>Draw the <b>FBD</b> (all external forces including weight, N, friction).</li><li>Draw the <b>kinetic diagram</b>: m(a<sub>G</sub>)<sub>x</sub>, m(a<sub>G</sub>)<sub>y</sub> and I<sub>G</sub>α.</li><li>Write kinematic constraints (e.g. rolling: a<sub>G</sub> = αR).</li><li>Write the three equations and solve.</li></ol>
<h4>Rolling or slipping? (the exam loves this)</h4>
<ol><li>Assume <b>rolling</b>: a<sub>G</sub> = αR. Solve for the friction force F needed.</li><li>If F ≤ μ<sub>s</sub>N the assumption is right.</li><li>If F &gt; μ<sub>s</sub>N it slips instead. Redo with F = μ<sub>k</sub>N and no a<sub>G</sub> = αR relation.</li></ol>`,
    example: { q: 'A 25 kg wheel (k<sub>G</sub> = 0.2 m, R = 0.3 m) has a 50 N·m clockwise couple applied. μ<sub>s</sub> = 0.3, μ<sub>k</sub> = 0.25. Does it roll or slip, and what is a<sub>G</sub>?',
      steps: ['Assume rolling: a<sub>G</sub> = αR. Moments about G (clockwise +): M − F R = I<sub>G</sub> α = m k² (a<sub>G</sub>/R). Forces: F = m a<sub>G</sub>.', 'So M = m a<sub>G</sub> (R + k²/R) → a<sub>G</sub> = 50/[25(0.3 + 0.04/0.3)] = 4.62 m/s², giving F = 115 N.', 'Limit: μ<sub>s</sub>N = 0.3 × 245 = 73.6 N. Needed F = 115 N &gt; 73.6 N, so it <b>cannot roll: it slips</b>.', 'Slipping: F = μ<sub>k</sub>N = 0.25 × 245.25 = 61.3 N, so a<sub>G</sub> = F/m = 2.45 m/s². α = (M − FR)/(m k²) = (50 − 18.4)/1 = 31.6 rad/s².'] },
    slides: [S10b('L17_Kin-05', 'L17: problem-solving approach'), S10b('L17_Kin-11', 'L17: general 2D motion (moments about P)'), S10b('L17_Kin-13', 'L17: rotation about a fixed axis'), S10b('L18_Kin-02', 'L18: problem-solving approach')],
    formulas: ['ΣF_x = m(a_G)_x, ΣF_y = m(a_G)_y, ΣM_G = I_Gα', 'ΣM_P = Σ(M_k)_P = I_Gα + m(a_G)_x d_y + m(a_G)_y d_x', 'Fixed axis O: ΣM_O = I_Oα', 'I: rod (1/12)mL² (centre) (1/3)mL² (end); disk ½mR²; ring mR²; sphere (2/5)mR²; I = mk²', 'Parallel axis: I = I_G + md²', 'Rolling: a_G = αR, need F ≤ μ_sN; slipping F = μ_kN'],
    cards: [
      { f: 'Three equations of motion for planar rigid body kinetics', b: 'ΣF<sub>x</sub> = m(a<sub>G</sub>)<sub>x</sub><br>ΣF<sub>y</sub> = m(a<sub>G</sub>)<sub>y</sub><br>ΣM<sub>G</sub> = I<sub>G</sub>α' },
      { f: 'Moment of inertia of a uniform rod about its centre / its end', b: 'Centre: (1/12) m L²<br>End: (1/3) m L²' },
      { f: 'Moment of inertia of a solid disk, ring and sphere', b: 'Disk: ½mR²<br>Ring: mR²<br>Sphere: (2/5)mR²' },
      { f: 'Parallel axis theorem', b: 'I = I<sub>G</sub> + m d²' },
      { f: 'Moments about a point P other than G', b: 'ΣM<sub>P</sub> = Σ(M<sub>k</sub>)<sub>P</sub> = I<sub>G</sub>α + moment of m a<sub>G</sub> about P' },
      { f: 'Rolling or slipping check', b: '1. Assume rolling (a<sub>G</sub> = αR), find F<br>2. If F ≤ μ<sub>s</sub>N → rolling<br>3. Otherwise slipping with F = μ<sub>k</sub>N' },
      { f: 'Equation of motion for rotation about a fixed axis O', b: 'ΣM<sub>O</sub> = I<sub>O</sub> α' }
    ],
    questions: [
      { type: 'mcq', q: 'A uniform rod of length L is pivoted at one end. Its mass moment of inertia about the pivot is…', opts: ['(1/12) m L²', '(1/3) m L²', '½ m L²', 'm L²'], a: 1, why: '(1/12)mL² + m(L/2)² = (1/3)mL² by the parallel axis theorem.' },
      { type: 'mcq', q: 'A wheel is pushed so that it rolls without slipping. The friction force…', opts: ['is always μ<sub>k</sub>N', 'is whatever value is needed, up to μ<sub>s</sub>N', 'is zero', 'does a lot of work on the wheel'], a: 1, why: 'Static friction adjusts to provide the rolling condition, up to a maximum μ<sub>s</sub>N.' },
      { type: 'mcq', q: 'In a rolling-vs-slipping problem, you assume rolling, calculate F = 115 N, but μ<sub>s</sub>N = 74 N. What next?', opts: ['Use F = 115 N anyway', 'It slips: redo with F = μ<sub>k</sub>N and drop a<sub>G</sub> = αR', 'It stays at rest', 'Use the conservation of energy'], a: 1, why: 'The friction needed exceeds the limit, so the rolling assumption fails.' },
      { type: 'work', marks: 8, paper: 'prac1', order: 1, src: 'Practice (2024 A2 style)', q: 'A 25 kg wheel has radius of gyration k<sub>G</sub> = 0.2 m and radius R = 0.3 m, on a horizontal plane. A 50 N·m clockwise couple acts on the wheel. μ<sub>s</sub> = 0.3, μ<sub>k</sub> = 0.25. (a) Assuming rolling, find a<sub>G</sub> and the friction force. (b) Assuming slipping, find a<sub>G</sub>. (c) Which one actually happens?',
        hint: 'Rolling: a_G = αR. Slipping: F = μ_k N. Compare the rolling friction need against μ_sN.',
        steps: ['(a) F = m a<sub>G</sub> and M − F R = m k²(a<sub>G</sub>/R) → a<sub>G</sub> = M/[m(R + k²/R)] = 50/(25 × 0.4333) = 4.62 m/s²; F = 115 N.', '(b) N = mg = 245.25 N. F = μ<sub>k</sub>N = 61.3 N, a<sub>G</sub> = 61.3/25 = 2.45 m/s². α = (50 − 61.3 × 0.3)/(25 × 0.04) = 31.6 rad/s².', '(c) Rolling needs F = 115 N but μ<sub>s</sub>N = 0.3 × 245.25 = 73.6 N &lt; 115 N, so the rolling assumption fails. The wheel <b>slips</b> with a<sub>G</sub> = 2.45 m/s².'], ans: 'Slips; a_G = 2.45 m/s²' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A 10 kg block hangs from a light cord wrapped round a 20 kg solid disk pulley of radius 0.2 m on a fixed frictionless axle. Released from rest, find the block\'s acceleration, the disk\'s angular acceleration and the cord tension.',
        steps: ['Block: m g − T = m a. Disk: T R = I α = ½ M R² (a/R) → T = ½ M a = 10a.', '10(9.81) − 10a = 10a → a = 4.905 m/s².', 'α = a/R = 24.5 rad/s². T = 10(4.905) = 49.05 N.'], ans: 'a = 4.91 m/s², α = 24.5 rad/s², T = 49.1 N' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A uniform rod, 3 kg and 1.2 m long, is pinned at one end and released from rest horizontal. Find α at release, and the vertical pin reaction.',
        steps: ['I<sub>O</sub> = (1/3)mL² = (1/3)(3)(1.44) = 1.44 kg·m².', 'ΣM<sub>O</sub> = I<sub>O</sub>α: m g (L/2) = 1.44α → 3(9.81)(0.6) = 17.66 → α = 12.26 rad/s².', 'a<sub>G</sub> = α L/2 = 7.36 m/s² downward. Vertical: mg − R<sub>y</sub> = m a<sub>G</sub> → R<sub>y</sub> = 3(9.81 − 7.36) = 7.36 N (= mg/4).'], ans: 'α = 12.3 rad/s², R_y = 7.36 N' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'rwe', name: 'Rigid body work and energy', freq: 0.6, freqNote: 'Week 7. Shortcut for speed problems.', assigned: false,
    notation: [['T', 'kinetic energy (translation + rotation)'], ['V', 'potential energy (gravity + spring)'], ['v_G', 'speed of the mass centre'], ['ω', 'angular velocity'], ['I_G, I_O', 'mass moment of inertia about G or a fixed axis O'], ['U (ΣU)', 'work done'], ['M', 'applied moment/couple'], ['Δθ', 'angle turned through'], ['k, k_t', 'linear and torsional spring stiffness'], ['s, θ', 'spring stretch / torsional spring twist']],
    lesson:
`<p>Same principle as for particles, but kinetic energy now includes rotation.</p>
<h4>Kinetic energy</h4>
<ul><li>General plane motion: <b>T = ½ m v<sub>G</sub>² + ½ I<sub>G</sub> ω²</b></li><li>Fixed axis O: T = ½ I<sub>O</sub> ω²</li><li>Rolling without slipping: v<sub>G</sub> = ωR so T = ½(m + I<sub>G</sub>/R²) v<sub>G</sub>²</li></ul>
<h4>Work</h4>
<ul><li>Force: U = F·d along the displacement of its point of application</li><li>Couple/moment: <b>U = M Δθ</b></li><li>Gravity: −m g Δh (of G)</li><li>Spring: −½k(s₂² − s₁²). Torsional spring: −½k<sub>t</sub>(θ₂² − θ₁²)</li><li><b>Friction on a rolling body without slipping does no work</b> (the contact point has zero velocity). Friction during slipping does negative work.</li><li>Pin reactions at a fixed pivot do no work.</li></ul>
<p><b>T₁ + ΣU = T₂</b>. With only gravity and springs: T₁ + V₁ = T₂ + V₂.</p>
<p>Use it for: speed or angular speed after a given displacement or angle. Use ΣM = Iα for accelerations or forces.</p>`,
    example: { q: 'A uniform rod (L = 1.2 m, pinned at one end) is released from rest horizontal. Find ω when vertical.',
      steps: ['Centre drops L/2 = 0.6 m. Gravity does U = mg(L/2).', 'T₂ = ½ I<sub>O</sub> ω² = ½ (1/3 mL²) ω² = (1/6) m L² ω².', 'm g L/2 = (1/6) m L² ω² → ω² = 3g/L = 24.5 → ω = 4.95 rad/s.'] },
    slides: [S10b('L19_WE-04', 'L19: kinetic energy of a rigid body'), S10b('L19_WE-16', 'L19: principle of work and energy'), S10b('L20_WE-11', 'L20: conservation of energy')],
    formulas: ['T = ½mv_G² + ½I_Gω² (fixed axis: ½I_Oω²)', 'Work of a moment: U = MΔθ', 'Rolling no slip: friction does no work, v_G = ωR', 'T₁ + ΣU = T₂, or T₁ + V₁ = T₂ + V₂'],
    cards: [
      { f: 'Kinetic energy of a rigid body in plane motion', b: 'T = ½ m v<sub>G</sub>² + ½ I<sub>G</sub> ω²' },
      { f: 'Work done by a couple moment', b: 'U = M Δθ' },
      { f: 'Work done by friction on a body rolling without slipping', b: 'Zero (contact point has zero velocity)' },
      { f: 'Kinetic energy of a body rolling without slipping', b: 'T = ½ (m + I<sub>G</sub>/R²) v<sub>G</sub>²' }
    ],
    questions: [
      { type: 'mcq', q: 'A disk rolls down a slope without slipping. Friction on the disk…', opts: ['does negative work, losing energy as heat', 'does no work, so mechanical energy is conserved', 'does positive work', 'does work equal to μ<sub>k</sub>N d'], a: 1, why: 'The contact point is momentarily at rest, so static friction does no work.' },
      { type: 'mcq', q: 'A solid cylinder and a thin ring of equal mass and radius roll down the same incline from rest. Which reaches the bottom faster?', opts: ['The ring', 'The solid cylinder', 'Both together', 'Depends on the mass'], a: 1, why: 'The ring puts more energy into rotation (I = mR² vs ½mR²), so less goes into translation.' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A solid cylinder (I<sub>G</sub> = ½mR²) starts from rest at the top of a 2 m high slope and rolls down without slipping. Find its speed at the bottom.',
        steps: ['Energy: m g h = ½ m v² + ½ (½ m R²)(v/R)² = (3/4) m v².', 'v = √(4gh/3) = √(4 × 9.81 × 2/3) = √26.16 = 5.11 m/s.'], ans: '5.11 m/s' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A uniform 3 kg rod, 1.2 m long, pinned at one end, is released from rest horizontal. Find ω and the tip speed when vertical.',
        steps: ['m g (L/2) = ½ ((1/3) m L²) ω² → ω² = 3g/L = 24.5.', 'ω = 4.95 rad/s. Tip speed = ω L = 5.94 m/s.'], ans: 'ω = 4.95 rad/s; v<sub>tip</sub> = 5.94 m/s' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'rimp', name: 'Rigid body impulse-momentum and impacts', freq: 1, freqNote: 'Part A of 2023 (clay on plank), 2024 (ballistic pendulum), 2025 (see-saw)', assigned: false,
    notation: [['v_G', 'velocity of the mass centre'], ['ω₁, ω₂', 'angular velocity just before (1) and after (2) the event'], ['∫F dt, ∫M dt', 'linear and angular impulse'], ['I_G, I_O', 'mass moment of inertia about G or a fixed point O'], ['H_P', 'angular momentum of the body about point P'], ['P', 'a reference point (often a pivot) impulses are taken about'], ['J', 'an internal contact impulse between two bodies']],
    lesson:
`<p>Use impulse-momentum for <b>sudden events</b> (a bullet hitting a block, a plank struck by a mass) or when <b>time</b> is involved.</p>
<h4>Linear</h4>
<p><b>m (v<sub>G</sub>)₁ + Σ∫F dt = m (v<sub>G</sub>)₂</b></p>
<h4>Angular</h4>
<ul><li>About G: I<sub>G</sub>ω₁ + Σ∫M<sub>G</sub> dt = I<sub>G</sub>ω₂</li><li>About a fixed point O: I<sub>O</sub>ω₁ + Σ∫M<sub>O</sub> dt = I<sub>O</sub>ω₂</li><li>Angular momentum of a body about any point P: <b>H<sub>P</sub> = I<sub>G</sub> ω + (moment of m v<sub>G</sub> about P)</b></li></ul>
<h4>Conservation of angular momentum</h4>
<p>If the only external impulses pass through point P (for example the pin reaction at a hinge, which is large but acts at P), then <b>H<sub>P</sub> is conserved through the impact</b>, even though linear momentum is not. This is the key trick for a bullet hitting a hanging block or rod.</p>
<h4>Impact then swing: two stages</h4>
<ol><li><b>Impact</b> (very short): conserve angular momentum about the pivot (or momentum for a translating pendulum). Energy is lost.</li><li><b>Swing</b>: after impact, use conservation of energy (T + V constant) to relate speed to the max angle.</li></ol>
<p>Ignore small forces (weight) during the impact only if the impact is truly instantaneous. If a finite time is given (e.g. "force for 0.1 s") include weight impulses.</p>`,
    example: { q: 'A 0.02 kg bullet hits and embeds in a 5 kg block hung on two cords of length 1.5 m (so it stays level). The block swings to a max angle of 20°. Find the bullet speed.',
      steps: ['Swing (energy): ½(M + m)v′² = (M + m) g L(1 − cos20°) → v′ = √(2 × 9.81 × 1.5 × 0.0603) = 1.332 m/s.', 'Impact (momentum): m v = (M + m) v′ → v = 5.02 × 1.332/0.02 = <b>334 m/s</b>.'] },
    slides: [S10b('L22_Imp-03', 'L22: conservation of momentum'), S10b('L22_Imp-04', 'L22: conservation of angular momentum')],
    formulas: ['m v_G1 + ΣF dt = m v_G2', 'I_Gω₁ + ΣM_G dt = I_Gω₂ (or about fixed O with I_O)', 'H_P = I_Gω + moment of m v_G about P; conserved if external impulses pass through P', 'Impact: conserve H about pivot; swing: conserve energy'],
    cards: [
      { f: 'Angular impulse-momentum for a rigid body about G', b: 'I<sub>G</sub>ω<sub>1</sub> + ∫ΣM<sub>G</sub>dt = I<sub>G</sub>ω<sub>2</sub>' },
      { f: 'Bullet hits hanging block/rod: what is conserved during the impact?', b: 'Angular momentum about the pivot (pivot impulse has no moment). NOT energy.' },
      { f: 'After the impact, how do you find the swing angle?', b: 'Conservation of energy: T + V constant from just after impact to the highest point' },
      { f: 'Angular momentum of a rigid body about a point P', b: 'H<sub>P</sub> = I<sub>G</sub>ω + (moment of m v<sub>G</sub> about P)' }
    ],
    questions: [
      { type: 'mcq', q: 'A bullet embeds in a block hanging from a pivot. During the impact…', opts: ['kinetic energy is conserved', 'angular momentum about the pivot is conserved', 'linear momentum is always conserved', 'both energy and momentum are conserved'], a: 1, why: 'The pin reaction impulse acts at the pivot so has no moment about it. Energy is lost in the embedding.' },
      { type: 'mcq', q: 'After a bullet embeds in a hanging block, you want the maximum swing angle. The right principle for the swing is…', opts: ['impulse-momentum', 'conservation of energy', 'restitution', 'ΣF = ma at the instant of impact'], a: 1, why: 'After the impact only gravity does work, so T + V is conserved.' },
      { type: 'work', marks: 5, paper: 'pastA', order: 1.2, src: 'Sem 2 2025, Q A1(b)', q: 'A uniform 3 m long plank is pivoted at its centre. It starts horizontal and stationary with a 40 kg child sitting on the right end. Assume θ is small. Based on the kinematics, express the vertical component of the child\'s velocity as a function of the plank\'s angular velocity ω.',
        steps: ['The child sits at the right end, 1.5 m from the pivot. For small θ (cos θ ≈ 1), the end moves vertically.', '<b>v<sub>child</sub> = 1.5 ω</b> (upward when ω is counter-clockwise, positive).'], ans: 'v = 1.5 ω' },
      { type: 'work', marks: 12, paper: 'pastA', order: 1.3, src: 'Sem 2 2025, Q A1(c)', q: 'Same set-up: 20 kg plank (3 m long, very thin) pivoted at centre, 40 kg child at the right end, plank initially horizontal and stationary. An 800 N downward force is applied 0.9 m to the left of the pivot for 0.1 s. Gravity acts down. Apply the impulse-momentum principle to the plank and to the child separately and find the child\'s vertical velocity at 0.1 s.',
        hint: 'Let J be the impulse of the contact force between plank and child. Plank: angular impulse about the pivot. Child: linear impulse including weight.',
        steps: ['I<sub>pivot</sub> = (1/12)(20)(3²) = 15 kg·m². Counter-clockwise (left end down) positive.', '<b>Plank</b> (angular impulse about pivot): 15 ω = (800 × 0.9)(0.1) − 1.5 J = 72 − 1.5 J. (The child pushes down on the plank at 1.5 m; the pivot reaction and plank weight have no moment.)', '<b>Child</b> (linear impulse, up +): 40 v = J − 40(9.81)(0.1) = J − 39.24, with v = 1.5 ω from kinematics.', 'So J = 60 ω + 39.24. Substitute: 15ω = 72 − 90ω − 58.86 → 105ω = 13.14 → ω = 0.1251 rad/s.', 'v = 1.5 × 0.1251 = <b>0.188 m/s upward</b>. (J = 46.8 N·s, positive, so the child stays in contact.)'], ans: 'v ≈ 0.188 m/s upward (ω = 0.125 rad/s)' },
      { type: 'work', marks: 5, paper: 'prac1', order: 2, src: 'Practice', q: 'A 0.1 kg ball travelling at 20 m/s horizontally hits the bottom end of a 2 kg uniform rod, 1 m long, which hangs from a smooth pin at its top end. The ball sticks. Find the angular velocity of the rod just after impact.',
        hint: 'Angular momentum about the pin is conserved during the impact.',
        steps: ['About the pin: ball H = m v L = 0.1 × 20 × 1 = 2 kg·m²/s.', 'After: I<sub>total</sub> = (1/3)(2)(1)² + 0.1(1)² = 0.667 + 0.1 = 0.767 kg·m².', 'ω = 2/0.767 = 2.61 rad/s.'], ans: '2.61 rad/s' },
      { type: 'work', marks: 6, paper: 'prac1', order: 3, src: 'Practice (2024 A1 style)', q: 'A 0.02 kg bullet embeds in a 5 kg block hung from two parallel cords of length 1.5 m (the block stays level as it swings). The block swings up to 20° from vertical. Find the speed of the bullet just before impact.',
        steps: ['Swing: energy → v′ = √(2gL(1 − cos20°)) = √(2 × 9.81 × 1.5 × 0.06031) = 1.332 m/s.', 'Impact: momentum 0.02 v = (5.02)(1.332) → v = 334 m/s.'], ans: '≈ 334 m/s' }
    ] }
]);
