
## 1. Introduction to Oscillators
An oscillator is an electronic circuit that generates a periodic, oscillating signal without any input (other than DC power). Oscillators are broadly classified into:

 Sinusoidal Oscillators – Generate smooth, continuous sine waves.

Non-Sinusoidal Oscillators – Generate waveforms such as square, rectangular, triangular, and sawtooth.

## 2. What are Non-Sinusoidal Oscillators?
Non-sinusoidal oscillators are circuits designed to produce non-sine waveforms, usually with sharp transitions between voltage levels. These waveforms are periodic, but not smooth or sinusoidal. They are widely used in digital systems, timing circuits, pulse generators, and switching devices.

## 3. Types of Non-Sinusoidal Oscillators
Non-sinusoidal oscillators are often implemented using multivibrator circuits. These are broadly categorized into:

## A. Astable Multivibrator
No stable state

Continuously switches between high and low output states, producing a square wave

Commonly built using:

Transistors

555 timer IC

Logic gates (NAND/NOR)

## B. Monostable Multivibrator
One stable state

Requires an external trigger to produce a single output pulse.

After the pulse, it returns to its stable state.

Used for timing or pulse width generation

## C. Bistable Multivibrator
Two stable states

Remains in a state until an external input flips it to the other.

Used in flip-flops and memory elements

## D. Schmitt Trigger Oscillator
Based on a comparator with hysteresis

Converts slow or noisy input signals into clean digital outputs

Can generate square waves when used with an RC timing network

## E. Relaxation Oscillator
Uses an op-amp or transistor to charge and discharge a capacitor

Output is usually sawtooth or exponential waveform

## 4. Working Principle
Non-sinusoidal oscillators work primarily based on charging and discharging of capacitors through resistors, creating time delays that produce sharp transitions in output. The components used to design these oscillators include:

Resistors (R)

Capacitors (C)

Transistors or Op-amps

Timers (e.g., 555 IC)

The timing and shape of the output waveform depend on the RC time constants and the switching behavior of the active components.

## 5. Waveforms Generated
Oscillator Type	Output Waveform
Astable	Square wave
Monostable	Single pulse
Bistable	Digital toggle (0 or 1)
Relaxation	Sawtooth / exponential
Schmitt Trigger	Square wave (with hysteresis)

##  6. Mathematical Expressions
 For Astable Multivibrator using 555 Timer:
Time high (T₁):

𝑇<sub>
1</sub>
=
0.693
×
(
𝑅<sub>
1</sub>
+
𝑅<sub>
2</sub>
)
×
𝐶
T<sub> 
1</sub>=0.693×(R<sub>1</sub>+R<sub>2</sub>)×C
Time low (T₂):

𝑇<sub>
2</sub>=
0.693
×
𝑅<sub>
2</sub>
×
𝐶
T<sub> 
2</sub>
​
 =0.693×R<sub>2</sub>×C
Total Time Period (T):

𝑇=𝑇<sub>1</sub>+𝑇<sub>2</sub>
=
0.693
×
(
𝑅<sub>
1</sub>
+
2
𝑅<sub>
2</sub>
)
×
𝐶
T=T<sub> 
1</sub>
​
 +T<sub> 
2</sub>
​
 =0.693×(R<sub>1</sub>+2R<sub>2</sub>)×C
Frequency (f):

f=
1.44
(
𝑅<sub>
1</sub>
+
2
𝑅<sub>
2</sub>
)
×
𝐶
f= (R<sub>1</sub>+2R<sub>2</sub>)×C
1.44
​
 
Duty Cycle (%):

𝐷=
𝑇<sub>
1</sub>
𝑇
×
100
D= 
T
T<sub> 
1</sub>
​
 
​
 ×100
 For Monostable Multivibrator:
Pulse Width (T):

𝑇=
1.1
×
𝑅
×
𝐶
T=1.1×R×C
This pulse is generated once when triggered.

