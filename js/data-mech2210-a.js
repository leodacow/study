/* MECH2210 part 1: particle dynamics (weeks 1-5, lectures L2-L13).
   Notation follows the lecture slides: ΣF = m a, (a_G)_x, I_G, ω_n, ζ, etc. */
var S10 = function (n, cap) { return { src: 'img/m2210/' + n + '.jpg', cap: cap }; };
DATA.addTopics('MECH2210', [
  /* ------------------------------------------------------------ */
  { id: 'rect', name: 'Straight-line motion (rectilinear kinematics)', freq: 0.35, freqNote: 'Week 1. Used inside almost every later question.', assigned: false,
    notation: [['s', 'position (displacement) along the line'], ['v', 'velocity, ds/dt'], ['a', 'acceleration, dv/dt'], ['t', 'time'], ['s₀, v₀', 'position and velocity at t = 0 (initial conditions)'], ['C, C₂', 'constants of integration, found from initial conditions']],
    lesson:
`<p>Kinematics describes motion without asking what causes it. For a particle on a straight line, position <b>s</b>, velocity <b>v</b> and acceleration <b>a</b> are linked by calculus:</p>
<ul><li>v = ds/dt &nbsp;&nbsp; a = dv/dt</li><li><b>a ds = v dv</b> (this removes time, and is the key when a depends on position)</li></ul>
<h4>Constant acceleration only (the "SUVAT" set)</h4>
<ul><li>v = v₀ + a t</li><li>s = s₀ + v₀ t + ½ a t²</li><li>v² = v₀² + 2a (s − s₀)</li></ul>
<p>Never use these if a changes with time, position or velocity.</p>
<h4>If a is not constant, pick the integral that matches what a depends on</h4>
<table class="t"><tr><th>Given</th><th>Do this</th></tr>
<tr><td>a(t)</td><td>integrate once for v(t), again for s(t). Use initial conditions for the constants.</td></tr>
<tr><td>a(v)</td><td>a = dv/dt → dt = dv/a(v), integrate for t</td></tr>
<tr><td>a(s)</td><td>v dv = a(s) ds, integrate for v(s)</td></tr></table>
<p><b>Common mistakes:</b> mixing up the sign of a (choose a positive direction and stick to it), using SUVAT when a is not constant, forgetting initial conditions.</p>`,
    example: { q: 'A particle starts from rest at s = 0 with a = 4t (m/s²). Find v and s at t = 3 s.',
      steps: ['v = ∫a dt = ∫4t dt = 2t² + C. v(0) = 0 so C = 0 and v = 2t².', 's = ∫v dt = ∫2t² dt = (2/3)t³ + C₂, and s(0) = 0 so s = (2/3)t³.', 'At t = 3: v = 18 m/s and s = 18 m.'] },
    slides: [S10('L2_Rect-05', 'L2: straight-line motion'), S10('L2_Rect-19', 'L2: formula map (which equation to use)')],
    formulas: ['v = ds/dt, a = dv/dt, a ds = v dv', 'Constant a: v = v₀ + at; s = s₀ + v₀t + ½at²; v² = v₀² + 2a(s − s₀)'],
    cards: [
      { f: 'Equation that removes time from kinematics (a depends on s)', b: 'a ds = v dv' },
      { f: 'Constant acceleration: velocity-displacement equation', b: 'v² = v₀² + 2a(s − s₀)' },
      { f: 'Constant acceleration: position equation', b: 's = s₀ + v₀t + ½at²' }
    ],
    questions: [
      { type: 'mcq', q: 'A particle has a = −k v (air drag, k &gt; 0). Which relation do you integrate?', opts: ['a ds = v dv with a(s)', 'dv/dt = −k v, so dv/v = −k dt', 'SUVAT with constant a', 'v = ds/dt only'], a: 1, why: 'a depends on v, so separate: dv/v = −k dt, giving v = v₀e^(−kt).' },
      { type: 'mcq', q: 'a is given as a function of position, a(s). Which expression lets you find v(s)?', opts: ['∫a dt', 'v dv = a ds', 's = ½at²', 'v = at'], a: 1, why: 'a ds = v dv removes time.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A car brakes uniformly from 30 m/s to rest in 150 m. Find the deceleration and the stopping time.',
        steps: ['v² = v₀² + 2a(s − s₀) → 0 = 900 + 2a(150) → a = −3 m/s².', 'v = v₀ + at → 0 = 30 − 3t → t = 10 s.'], ans: 'a = −3 m/s², t = 10 s' },
      { type: 'work', marks: 4, src: 'Practice', q: 'a = 12t − 6 (m/s²), with v(0) = 2 m/s and s(0) = 1 m. Find v and s at t = 2 s.',
        steps: ['v = ∫a dt = 6t² − 6t + C, v(0) = 2 → C = 2. At t = 2: v = 24 − 12 + 2 = 14 m/s.', 's = ∫v dt = 2t³ − 3t² + 2t + C₂, s(0) = 1 → C₂ = 1. At t = 2: s = 16 − 12 + 4 + 1 = 9 m.'], ans: 'v = 14 m/s, s = 9 m' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'curv', name: 'Curved-path motion (projectiles, n-t and polar)', freq: 0.35, freqNote: 'Weeks 1-2', assigned: false,
    notation: [['x, y', 'horizontal and vertical Cartesian coordinates'], ['θ', 'launch angle (projectile) or angular position (polar)'], ['g', 'acceleration due to gravity, 9.81 m/s²'], ['a_t', 'tangential acceleration (along the path, changes speed)'], ['a_n', 'normal acceleration (towards the centre of curvature, v²/ρ)'], ['ρ ("rho")', 'radius of curvature of the path'], ['r', 'radial distance from the origin (polar coordinates)'], ['ṙ, r̈', 'first and second time-derivatives of r (speed and acceleration along the radius)'], ['θ̇, θ̈', 'angular velocity and angular acceleration'], ['v_r, v_θ', 'radial and transverse (tangential) velocity components'], ['a_r, a_θ', 'radial and transverse acceleration components']],
    lesson:
`<p>Pick the coordinate system that makes the problem easy.</p>
<h4>Cartesian: projectiles</h4>
<p>Horizontal: a<sub>x</sub> = 0 so x = x₀ + v₀cosθ·t. Vertical: a<sub>y</sub> = −g so y = y₀ + v₀sinθ·t − ½gt². Solve the two directions separately; time is the link.</p>
<ul><li>Time of flight (level ground) = 2v₀sinθ/g</li><li>Range = v₀² sin2θ / g</li><li>Max height = (v₀sinθ)² / (2g)</li></ul>
<h4>Normal-tangential (n-t): path known, speed along it</h4>
<ul><li>a<sub>t</sub> = dv/dt (speeds up or slows down)</li><li>a<sub>n</sub> = v²/ρ, always pointing to the <b>centre of curvature</b></li><li>|a| = √(a<sub>t</sub>² + a<sub>n</sub>²)</li></ul>
<h4>Polar (r, θ): rotation about a point</h4>
<ul><li>v<sub>r</sub> = ṙ, &nbsp; v<sub>θ</sub> = r θ̇</li>
<li>a<sub>r</sub> = r̈ − r θ̇², &nbsp; a<sub>θ</sub> = r θ̈ + 2 ṙ θ̇</li></ul>
<p>Even if r is constant, a<sub>r</sub> = −rθ̇² is not zero (centripetal).</p>`,
    example: { q: 'A ball is thrown at 20 m/s at 30° above level ground. Find time of flight, range and max height (g = 9.81).',
      steps: ['v₀sinθ = 10 m/s, v₀cosθ = 17.32 m/s.', 'Time of flight = 2v₀sinθ/g = 2(10)/9.81 = 2.04 s.', 'Range = v₀cosθ × (time of flight) = 17.32 × 2.04 = 35.3 m.', 'Max height = (v₀sinθ)²/(2g) = 10²/(2 × 9.81) = 5.10 m.'] },
    slides: [S10('L3_Curv-04', 'L3: Cartesian coordinates'), S10('L3_Curv-07', 'L3: projectile motion'), S10('L4_Curv-04', 'L4: path-based (n-t) coordinates'), S10('L4_Curv-10', 'L4: polar coordinates')],
    formulas: ['Projectile: x = v₀cosθ·t; y = v₀sinθ·t − ½gt²', 'n-t: a_t = dv/dt, a_n = v²/ρ', 'Polar: v_r = ṙ, v_θ = rθ̇; a_r = r̈ − rθ̇², a_θ = rθ̈ + 2ṙθ̇'],
    cards: [
      { f: 'Normal acceleration of a particle on a curved path', b: 'a<sub>n</sub> = v² / ρ  (towards the centre of curvature)' },
      { f: 'Polar acceleration components', b: 'a<sub>r</sub> = r̈ − rθ̇²<br>a<sub>θ</sub> = rθ̈ + 2ṙθ̇' },
      { f: 'Polar velocity components', b: 'v<sub>r</sub> = ṙ,  v<sub>θ</sub> = rθ̇' }
    ],
    questions: [
      { type: 'mcq', q: 'In normal-tangential coordinates, the normal acceleration a<sub>n</sub> is…', opts: ['dv/dt, along the path', 'v²/ρ, pointing towards the centre of curvature', 'v²/ρ, pointing away from the centre', 'zero if speed is constant'], a: 1, why: 'Even at constant speed, changing direction needs a<sub>n</sub> = v²/ρ towards the centre.' },
      { type: 'mcq', q: 'A particle moves on a circle of constant radius r with θ̇ = 4 rad/s constant. In polar components…', opts: ['a<sub>r</sub> = 0', 'a<sub>r</sub> = −16 r and a<sub>θ</sub> = 0', 'a<sub>θ</sub> = 16 r', 'a<sub>r</sub> = +16 r'], a: 1, why: 'ṙ = r̈ = 0 and θ̈ = 0, so a<sub>r</sub> = −rθ̇² = −16r and a<sub>θ</sub> = 0.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A car drives round a curve of radius 50 m at 20 m/s and is speeding up at 2 m/s². Find the magnitude of its acceleration.',
        steps: ['a<sub>t</sub> = 2 m/s².', 'a<sub>n</sub> = v²/ρ = 400/50 = 8 m/s².', '|a| = √(2² + 8²) = √68 = 8.25 m/s².'], ans: '8.25 m/s²' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A projectile is launched from the ground at 25 m/s at 40° above horizontal. How far does it land from the start? (g = 9.81)',
        steps: ['Range = v₀² sin(2θ)/g = 625 × sin 80° / 9.81.', 'sin 80° = 0.9848, so range = 615.5/9.81 = 62.7 m.'], ans: '62.7 m' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'dep', name: 'Dependent and relative motion', freq: 0.35, freqNote: 'Week 2 (pulleys and relative velocity)', assigned: false,
    notation: [['s_A, s_B, s_P', 'position coordinates of each body/end, measured from a fixed datum'], ['v_A, v_B', 'velocities of bodies A and B (measured from a fixed/ground frame)'], ['v_B/A', '"velocity of B relative to A" — how B appears to someone moving with A'], ['a_A, a_B, a_B/A', 'the acceleration equivalents']],
    lesson:
`<h4>Dependent motion (pulleys and cords)</h4>
<ol><li>Pick a coordinate for each moving object, measured from a fixed datum.</li><li>Write the <b>total cord length</b> as a sum of these coordinates plus constants.</li><li>Differentiate once for velocity and again for acceleration. Constants vanish.</li></ol>
<p>Example: cord fixed to the ceiling, round a movable pulley carrying load B and over a fixed pulley to end P: 2 s<sub>B</sub> + s<sub>P</sub> = constant, so v<sub>P</sub> = −2 v<sub>B</sub>. The free end moves twice as far as the load.</p>
<h4>Relative motion</h4>
<p>v<sub>B</sub> = v<sub>A</sub> + v<sub>B/A</sub> &nbsp;and&nbsp; a<sub>B</sub> = a<sub>A</sub> + a<sub>B/A</sub>, where v<sub>B/A</sub> is "B as seen from A". Draw the vector triangle first. This only works if the frame attached to A is not rotating.</p>`,
    example: { q: 'Car A drives east at 20 m/s and car B drives north at 15 m/s. Find the velocity of B relative to A.',
      steps: ['v<sub>B</sub> = v<sub>A</sub> + v<sub>B/A</sub> → v<sub>B/A</sub> = v<sub>B</sub> − v<sub>A</sub> = (0, 15) − (20, 0) = (−20, 15) m/s.', 'Magnitude = √(400 + 225) = 25 m/s, pointing north-west (36.9° above west).'] },
    slides: [S10('L5_Dep-04', 'L5: dependent motion method'), S10('L5_Dep-06', 'L5: relative motion')],
    formulas: ['Dependent: total cord length constant → differentiate', 'v_B = v_A + v_B/A; a_B = a_A + a_B/A'],
    cards: [
      { f: 'Method for dependent-motion (pulley) problems', b: '1. Coordinate for each body<br>2. Write the total cord length<br>3. Differentiate (once for v, twice for a)' },
      { f: 'Relative velocity equation', b: 'v<sub>B</sub> = v<sub>A</sub> + v<sub>B/A</sub>' }
    ],
    questions: [
      { type: 'mcq', q: 'A cord is fixed to the ceiling, passes under a movable pulley holding load B, and then over a fixed pulley to a free end P. If B rises 0.5 m, P moves…', opts: ['0.25 m', '0.5 m', '1.0 m', '2.0 m'], a: 2, why: '2s<sub>B</sub> + s<sub>P</sub> = const so |Δs<sub>P</sub>| = 2|Δs<sub>B</sub>|.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A boat heads straight across a river at 3 m/s relative to the water. The river flows at 1 m/s. Find its speed relative to the ground and the angle it is carried downstream.',
        steps: ['v<sub>boat</sub> = v<sub>water</sub> + v<sub>boat/water</sub> = 1 (downstream) + 3 (across), perpendicular components.', 'Speed = √(1² + 3²) = √10 = 3.16 m/s.', 'Angle downstream from straight across = tan⁻¹(1/3) = 18.4°.'], ans: '3.16 m/s, 18.4° downstream' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'pkin', name: 'Particle kinetics (F = ma)', freq: 0.5, freqNote: 'Weeks 2-3. Every force question starts here.', assigned: false,
    notation: [['F (or ΣF)', 'net external force on the body'], ['m', 'mass'], ['a', 'acceleration'], ['N', 'normal (contact) force'], ['μ_s, μ_k', 'coefficient of static and kinetic (sliding) friction'], ['β', 'incline angle'], ['v', 'speed'], ['ρ ("rho")', 'radius of the circular path'], ['FBD / KD', 'free body diagram / kinetic diagram']],
    lesson:
`<p>Kinetics links forces to motion through Newton's second law: <b>ΣF = m a</b>.</p>
<h4>Method</h4>
<ol><li>Choose coordinates (Cartesian, n-t, or polar).</li><li><b>Free body diagram (FBD):</b> only external forces (weight, normal, friction, tension, springs).</li><li><b>Kinetic diagram (KD):</b> shows m a in the same directions.</li><li>Write ΣF = m a in each direction and solve.</li></ol>
<h4>Friction</h4>
<ul><li>Not slipping: F ≤ μ<sub>s</sub> N (friction is whatever is needed, up to the limit).</li><li>Slipping: F = μ<sub>k</sub> N, opposing the sliding.</li></ul>
<h4>Circular motion (n-t)</h4>
<p>ΣF<sub>n</sub> = m v²/ρ towards the centre, and ΣF<sub>t</sub> = m dv/dt.</p>
<p>A block on an incline of angle β sliding down: a = g(sinβ − μ<sub>k</sub>cosβ).</p>`,
    example: { q: 'A 10 kg block slides down a 30° incline with μ<sub>k</sub> = 0.2. Find its acceleration.',
      steps: ['Perpendicular to slope: N = mg cos30° = 85.0 N, so friction F = μ<sub>k</sub>N = 17.0 N.', 'Along slope, ΣF = ma: mg sin30° − F = ma → 49.05 − 17.0 = 10a.', 'a = 3.21 m/s² down the slope (matches a = g(sinβ − μ<sub>k</sub>cosβ)).'] },
    slides: [S10('L6_Kin-05', 'L6: FBD and kinetic diagram'), S10('L6_Kin-09', 'L6: Newton in Cartesian coordinates'), S10('L6_Kin-10', 'L6: Newton in n-t coordinates')],
    formulas: ['ΣF = m a (draw FBD and kinetic diagram)', 'Friction: F ≤ μ_s N (static), F = μ_k N (slipping)', 'n-t: ΣF_n = m v²/ρ, ΣF_t = m dv/dt'],
    cards: [
      { f: 'Newton\'s second law for a particle', b: 'ΣF = m a' },
      { f: 'Friction when sliding vs. not sliding', b: 'Sliding: F = μ<sub>k</sub>N<br>Not sliding: F ≤ μ<sub>s</sub>N' },
      { f: 'Max speed round a flat curve (friction only)', b: 'v = √(μ<sub>s</sub> g ρ)' }
    ],
    questions: [
      { type: 'mcq', q: 'A free body diagram should show…', opts: ['all forces including internal ones', 'only external forces on the body', 'only the weight', 'the acceleration as a force'], a: 1, why: 'Internal forces cancel. The "m a" belongs on the kinetic diagram, not the FBD.' },
      { type: 'mcq', q: 'A 70 kg person stands in a lift accelerating upward at 2 m/s². The floor force on them is…', opts: ['687 N', '547 N', '827 N', '140 N'], a: 2, why: 'N − mg = ma → N = 70(9.81 + 2) = 827 N.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A car goes round a flat unbanked curve of radius 100 m. μ<sub>s</sub> between tyres and road is 0.6. What is the maximum speed before it skids?',
        steps: ['Friction supplies the centripetal force: μ<sub>s</sub>N = m v²/ρ with N = mg.', 'v = √(μ<sub>s</sub> g ρ) = √(0.6 × 9.81 × 100) = √588.6 = 24.3 m/s (87 km/h).'], ans: '24.3 m/s' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A 10 kg block on a 30° incline is released from rest. μ<sub>s</sub> = 0.4 and μ<sub>k</sub> = 0.2. Does it slide? If so, find a.',
        steps: ['Will it slide? It slides if tan β &gt; μ<sub>s</sub>: tan30° = 0.577 &gt; 0.4, so yes.', 'Sliding: a = g(sinβ − μ<sub>k</sub> cosβ) = 9.81(0.5 − 0.2 × 0.866) = 3.21 m/s².'], ans: 'It slides, a = 3.21 m/s² down the slope' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'pwe', name: 'Work and energy (particles)', freq: 0.5, freqNote: 'Weeks 3-4', assigned: false,
    notation: [['T', 'kinetic energy, ½mv²'], ['U (or ΣU₁₋₂)', 'work done by a force (from state 1 to state 2)'], ['V', 'potential energy, mgh + ½kx²'], ['F', 'a force'], ['d', 'distance moved in the direction of F'], ['h', 'height'], ['k', 'spring stiffness'], ['x', 'spring stretch/compression from its unstretched length'], ['P', 'power, F·v']],
    lesson:
`<p>Work-energy is a shortcut when you want <b>speed</b> after a <b>distance</b> (no time needed). Energy is a scalar, so no direction bookkeeping.</p>
<h4>Principle</h4>
<p><b>T₁ + ΣU₁₋₂ = T₂</b> with T = ½ m v².</p>
<h4>Work done by</h4>
<ul><li>Constant force along motion: U = F·d (negative if the force opposes the motion)</li><li>Gravity: U = −m g Δh (Δh up positive)</li><li>Spring: U = −½ k (x₂² − x₁²), x measured from the unstretched length</li><li>Friction: U = −μ<sub>k</sub> N d (always negative)</li></ul>
<h4>Conservation of energy</h4>
<p>If only conservative forces (gravity, springs) do work: <b>T₁ + V₁ = T₂ + V₂</b>, where V = m g h + ½ k x².</p>
<h4>Power and efficiency</h4>
<p>P = F·v. Efficiency = power out / power in.</p>
<p><b>Use work-energy when you need speed, height, distance or spring compression. Use F = ma when you need acceleration, force or time.</b></p>`,
    example: { q: 'A 2 kg block slides from rest down a smooth ramp 3 m high onto a spring k = 2000 N/m. Find the maximum spring compression.',
      steps: ['Conservation of energy T₁ + V₁ = T₂ + V₂: m g h = ½ k x² (ignore the tiny extra height during compression).', 'x = √(2mgh/k) = √(2 × 2 × 9.81 × 3 / 2000) = √0.05886 = 0.243 m.'] },
    slides: [S10('L7_WE-08', 'L7: principle of work and energy'), S10('L8_WE-05', 'L8: conservative forces'), ],
    formulas: ['T₁ + ΣU = T₂, T = ½mv²', 'Gravity: U = −mgΔh; spring: U = −½k(x₂² − x₁²)', 'Conservative: T₁ + V₁ = T₂ + V₂', 'Power P = F·v'],
    cards: [
      { f: 'Principle of work and energy', b: 'T<sub>1</sub> + ΣU<sub>1→2</sub> = T<sub>2</sub>' },
      { f: 'Work done by a spring', b: 'U = −½k(x<sub>2</sub>² − x<sub>1</sub>²)' },
      { f: 'When to use work-energy instead of F = ma', b: 'When you want speed, height, distance or spring compression (no time needed)' }
    ],
    questions: [
      { type: 'mcq', q: 'Which force does NOT do work on a block sliding on a horizontal floor?', opts: ['Friction', 'Weight', 'An applied push along the floor', 'None of them do work'], a: 1, why: 'Weight is perpendicular to the motion, so W·d = 0.' },
      { type: 'mcq', q: 'The work done by friction on a sliding block is…', opts: ['always positive', 'always negative (it opposes motion)', 'zero', 'equal to the change in potential energy'], a: 1, why: 'Friction opposes the displacement, so U = −μ<sub>k</sub>N d.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A 1200 kg car travelling at 20 m/s brakes to rest over 40 m. Find the constant braking force.',
        steps: ['T₁ + U = T₂: ½(1200)(400) − F(40) = 0.', '240 000 = 40F → F = 6000 N.'], ans: '6 kN' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A motor with 50 kW output lifts a 500 kg load at constant speed. Find the speed.',
        steps: ['At constant speed the lifting force equals the weight: F = 500 × 9.81 = 4905 N.', 'P = F v → v = 50 000/4905 = 10.2 m/s.'], ans: '10.2 m/s' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'pimp', name: 'Linear impulse, momentum and impact (particles)', freq: 0.6, freqNote: 'Weeks 4-5. Collisions are a favourite exam question.', assigned: false,
    notation: [['m v', 'linear momentum'], ['∫F dt', 'impulse (area under a force-time graph)'], ['e', 'coefficient of restitution (0 = plastic, 1 = elastic)'], ['v_A1, v_A2', 'velocity of body A before (1) and after (2) impact'], ['dm/dt', 'rate of mass flow (rocket exhaust)'], ['v_rel', 'exhaust velocity relative to the rocket']],
    lesson:
`<h4>Linear impulse and momentum</h4>
<p><b>m v₁ + Σ∫F dt = m v₂</b>. The area under a force-time graph is the impulse (N·s). Use it for problems involving <b>force, velocity and time</b>.</p>
<p>If there is no external impulse, <b>momentum is conserved</b>: Σm v₁ = Σm v₂ (ignore small forces such as friction during a very short impact).</p>
<h4>Direct central impact</h4>
<ol><li>Conservation of momentum: m<sub>A</sub>v<sub>A1</sub> + m<sub>B</sub>v<sub>B1</sub> = m<sub>A</sub>v<sub>A2</sub> + m<sub>B</sub>v<sub>B2</sub></li>
<li>Restitution: <b>e = (v<sub>B2</sub> − v<sub>A2</sub>) / (v<sub>A1</sub> − v<sub>B1</sub>)</b> (speed of separation / speed of approach)</li></ol>
<p>e = 1 perfectly elastic (energy conserved); e = 0 perfectly plastic (stick together, max energy loss). Energy loss = T₁ − T₂.</p>
<h4>Oblique impact (smooth surfaces)</h4>
<ul><li>Along the line of impact (normal): momentum + restitution as above.</li><li>Perpendicular (tangential): each particle's velocity component is <b>unchanged</b>.</li></ul>
<h4>Changing mass (rockets)</h4>
<p>Thrust = (dm/dt) × v<sub>rel</sub> (exhaust flow rate times relative exhaust speed).</p>`,
    example: { q: 'A 2 kg ball A at 6 m/s hits a stationary 4 kg ball B, e = 0.5. Find both velocities and the energy lost.',
      steps: ['Momentum m<sub>A</sub>v<sub>A1</sub> + m<sub>B</sub>v<sub>B1</sub> = m<sub>A</sub>v<sub>A2</sub> + m<sub>B</sub>v<sub>B2</sub>: 12 = 2v<sub>A2</sub> + 4v<sub>B2</sub>.', 'Restitution e = (v<sub>B2</sub> − v<sub>A2</sub>)/(v<sub>A1</sub> − v<sub>B1</sub>): v<sub>B2</sub> − v<sub>A2</sub> = 0.5(6 − 0) = 3, so v<sub>B2</sub> = v<sub>A2</sub> + 3.', 'Substitute: 12 = 2v<sub>A2</sub> + 4v<sub>A2</sub> + 12 → v<sub>A2</sub> = 0 and v<sub>B2</sub> = 3 m/s.', 'Energy lost = T₁ − T₂ = ½(2)(36) − ½(4)(9) = 36 − 18 = 18 J.'] },
    slides: [S10('L9_Imp-04', 'L9: linear impulse and momentum'), S10('L10_Imp-05', 'L10: coefficient of restitution'), S10('L10_Imp-07', 'L10: energy loss in impact'), S10('L11_Imp-05', 'L11: oblique impact steps')],
    formulas: ['m v₁ + ΣF dt = m v₂', 'e = (v_B2 − v_A2)/(v_A1 − v_B1)', 'Plastic impact e = 0: bodies move together', 'Oblique: tangential components unchanged, normal obeys momentum + e', 'Thrust = (dm/dt) v_rel'],
    cards: [
      { f: 'Coefficient of restitution (direct impact)', b: 'e = (v<sub>B2</sub> − v<sub>A2</sub>) / (v<sub>A1</sub> − v<sub>B1</sub>)<br>= speed of separation / speed of approach' },
      { f: 'Oblique impact: what happens in the tangential direction?', b: 'Each particle\'s tangential velocity component is unchanged (smooth surfaces)' },
      { f: 'Linear impulse-momentum equation', b: 'm v<sub>1</sub> + ∫F dt = m v<sub>2</sub>' },
      { f: 'e = 0 and e = 1 mean…', b: 'e = 0: plastic, bodies stick, max energy loss<br>e = 1: elastic, no energy loss' }
    ],
    questions: [
      { type: 'mcq', q: 'In a perfectly plastic impact (e = 0) between two particles…', opts: ['they separate at the same speed they approached', 'they move together with the same velocity after impact', 'momentum is not conserved', 'no energy is lost'], a: 1, why: 'e = 0 means zero relative velocity after impact. Momentum is conserved but energy is lost.' },
      { type: 'mcq', q: 'A ball hits a smooth wall obliquely. Which velocity component is unchanged?', opts: ['Normal to the wall', 'Parallel to the wall', 'Both', 'Neither'], a: 1, why: 'A smooth wall can only exert force along the normal, so the parallel component stays the same.' },
      { type: 'work', marks: 4, src: 'Practice', q: 'A 1500 kg car at 20 m/s hits a stationary 1000 kg car and they lock together. Find the common velocity and the kinetic energy lost.',
        steps: ['Momentum: 1500(20) = 2500 v → v = 12 m/s.', 'T₁ = ½(1500)(400) = 300 kJ; T₂ = ½(2500)(144) = 180 kJ.', 'Energy lost = 120 kJ.'], ans: '12 m/s, 120 kJ lost' },
      { type: 'work', marks: 5, src: 'Practice', q: 'A ball hits a smooth fixed wall at 10 m/s, with its path 30° from the wall\'s normal. e = 0.8. Find the rebound speed and the rebound angle from the normal.',
        steps: ['Normal component before: 10cos30° = 8.66 m/s. Tangential: 10sin30° = 5 m/s.', 'Rebound normal = e × 8.66 = 6.93 m/s. Tangential stays 5 m/s.', 'Speed = √(6.93² + 5²) = √73 = 8.54 m/s.', 'Angle from normal = tan⁻¹(5/6.93) = 35.8°.'], ans: '8.54 m/s at 35.8° from the normal' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A 0.15 kg ball arrives at −30 m/s, is hit by a bat and leaves at +40 m/s. The contact lasts 0.002 s. Find the impulse and the average force.',
        steps: ['Impulse = m(v₂ − v₁) = 0.15(40 − (−30)) = 10.5 N·s.', 'F<sub>avg</sub> = impulse/time = 10.5/0.002 = 5250 N.'], ans: '10.5 N·s, 5.25 kN' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'pang', name: 'Angular momentum (particles)', freq: 0.4, freqNote: 'Week 5', assigned: false,
    notation: [['H_O', 'angular momentum of the particle about point O (= r × mv)'], ['r', 'position vector from O to the particle'], ['v', 'velocity of the particle'], ['d', 'perpendicular distance from O to the line of velocity'], ['M_O (or ΣM_O)', 'moment (torque) about O'], ['T', 'kinetic energy']],
    lesson:
`<p>The angular momentum of a particle about a point O is <b>H<sub>O</sub> = r × m v</b> (units kg·m²/s). In 2D, H<sub>O</sub> = m v d, where d is the perpendicular distance from O to the line of the velocity, and it points in or out of the page.</p>
<ul><li><b>ΣM<sub>O</sub> = dH<sub>O</sub>/dt</b></li><li>Angular impulse-momentum: (H<sub>O</sub>)₁ + ∫ΣM<sub>O</sub> dt = (H<sub>O</sub>)₂</li><li><b>Conservation:</b> if ΣM<sub>O</sub> = 0 (for example a central force passing through O) then H<sub>O</sub> is constant.</li></ul>
<p>Classic: a mass on a string through a hole, pulled in: (m v r) stays constant, so smaller radius means faster speed. The tension does work, so kinetic energy is <b>not</b> conserved.</p>`,
    example: { q: 'A 0.5 kg mass on a string through a hole orbits at r = 0.6 m with v = 2 m/s. The string is pulled until r = 0.2 m. Find v and the change in kinetic energy.',
      steps: ['Angular momentum H conserved (no moment about the hole): m v₁ r₁ = m v₂ r₂ → v₂ = v₁r₁/r₂ = 2(0.6)/0.2 = 6 m/s.', 'ΔT = ½m(v₂² − v₁²) = ½(0.5)(36 − 4) = 8 J (work done by whoever pulls).'] },
    slides: [S10('L12_AM-05', 'L12: angular impulse and momentum'), S10('L12_AM-09', 'L12: conservation of angular momentum')],
    formulas: ['H_O = r × m v (2D: H_O = m v d)', 'ΣM_O = dH_O/dt; if ΣM_O = 0, H_O is constant'],
    cards: [
      { f: 'Angular momentum of a particle about O', b: 'H<sub>O</sub> = r × m v  (2D: m v d)' },
      { f: 'When is angular momentum conserved?', b: 'When the sum of moments about the point is zero, ΣM<sub>O</sub> = 0' }
    ],
    questions: [
      { type: 'mcq', q: 'A mass on a string is pulled inwards through a hole. Which quantity is conserved?', opts: ['Kinetic energy', 'Linear momentum', 'Angular momentum about the hole', 'Speed'], a: 2, why: 'The string tension passes through the hole, so it has no moment about it.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'A 2 kg particle at position (0, 4) m moves with velocity (3, 0) m/s. Find H<sub>O</sub> about the origin.',
        steps: ['H<sub>O</sub> = r × m v = (4j) × (6i) = 24 (j × i) = −24 k.', 'So H<sub>O</sub> = 24 kg·m²/s clockwise (into the page). Check: m v d = 2 × 3 × 4 = 24.'], ans: '24 kg·m²/s clockwise' }
    ] },

  /* ------------------------------------------------------------ */
  { id: 'bal', name: 'Balancing rotating machinery', freq: 0.4, freqNote: 'Weeks 5 and 12. Also in Practical 1 pre-work.', assigned: true,
    assignedNote: 'Practical 1 (balancing a shaft) already covers this, so it is a lower priority.',
    notation: [['m', 'an unbalanced mass'], ['r', 'radius at which the mass sits'], ['ω ("omega")', 'angular (rotational) speed'], ['F', 'the rotating (centrifugal) force produced, F = mrω²'], ['m_b, r_b', 'the balancing mass and its radius'], ['l', 'con-rod length (reciprocating engines)'], ['θ', 'crank angle']],
    lesson:
`<p>A mass m at radius r on a shaft spinning at ω pulls on the shaft with a rotating (centrifugal) force <b>F = m r ω²</b> pointing at the mass. Balancing means adding or removing mass so that these forces cancel.</p>
<h4>Single-plane (static) balancing</h4>
<p>Everything is in one plane. Add the vectors m<sub>i</sub> r<sub>i</sub> (the ω² cancels): the balancing mass has <b>m<sub>b</sub> r<sub>b</sub> = − Σ m<sub>i</sub> r<sub>i</sub></b> (same size, opposite direction).</p>
<h4>Two-plane (dynamic) balancing</h4>
<p>Masses in several planes along the shaft need <b>both</b> conditions: Σforces = 0 <b>and</b> Σmoments = 0 about a reference plane. Take moments about one correction plane, solve for the other correction, then take moments about the other.</p>
<h4>Reciprocating engines</h4>
<p>Piston inertia force along the stroke: <b>F = m r ω² (cosθ + (r/l) cos2θ)</b>. The first term is the <i>primary</i> force, the second (smaller, twice engine speed) the <i>secondary</i> force. You cannot fully balance a single cylinder with rotating masses.</p>`,
    example: { q: 'Two masses on one plane: m₁r₁ = 0.3 kg·m at 0° and m₂r₂ = 0.4 kg·m at 90°. Find the balancing mass-radius product and its angle.',
      steps: ['Σ m r (vector sum): (0.3, 0.4), magnitude √(0.09 + 0.16) = 0.5 kg·m at tan⁻¹(0.4/0.3) = 53.1°.', 'Balancing needs m<sub>b</sub>r<sub>b</sub> = −Σ m r: 0.5 kg·m at 53.1° + 180° = 233.1°.'] },
    slides: [S10('L13_Bal-04', 'L13: single-plane balancing'), S10('L13_Bal-07', 'L13: two-plane balancing'), S10('MCEbal2-03', 'L32: multi-cylinder engines')],
    formulas: ['Rotating force F = m r ω²', 'Balance: Σ m r (vector) = 0; two-plane also Σ moments = 0', 'Reciprocating: F = m r ω²(cosθ + (r/l)cos2θ)'],
    cards: [
      { f: 'Centrifugal force from an unbalanced mass', b: 'F = m r ω²' },
      { f: 'Two-plane (dynamic) balancing needs…', b: 'Force balance (Σ m r = 0) AND moment balance (Σ m r l = 0) about a reference plane' },
      { f: 'Reciprocating engine inertia force', b: 'F = m r ω² (cosθ + (r/l) cos 2θ)<br>primary + secondary' }
    ],
    questions: [
      { type: 'mcq', q: 'To statically balance masses all in one plane you need…', opts: ['Σ m r = 0 (vector sum)', 'Σ moments = 0 only', 'ω = 0', 'identical masses'], a: 0, why: 'In a single plane the force balance is enough. ω² is a common factor and cancels.' },
      { type: 'mcq', q: 'A shaft is balanced statically but still vibrates at high speed. The likely reason is…', opts: ['It still has a moment (couple) imbalance, so it needs two-plane balancing', 'ω is too small', 'The shaft is too stiff', 'The forces are not centrifugal'], a: 0, why: 'Static balance cancels forces only. Masses in different planes can still form a rotating couple.' },
      { type: 'work', marks: 3, src: 'Practice', q: 'An unbalance of m r = 0.5 kg·m rotates at 300 rpm. Find the rotating force it produces.',
        steps: ['ω = 300 × 2π/60 = 31.42 rad/s.', 'F = m r ω² = 0.5 × 987 = 493 N.'], ans: '≈ 493 N' }
    ] }
]);
