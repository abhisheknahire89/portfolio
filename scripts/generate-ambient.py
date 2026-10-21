"""Generate an original, gently voiced 16-second ambient loop (no external audio)."""
import math, struct, wave
from pathlib import Path
rate = 22050
seconds = 16
# Eight soft, overlapping bell/pad notes; only integer-period frequencies so the
# underlying pad loops continuously. Boundary fades prevent clicks in decays.
notes = [(0, 261.63), (2, 329.63), (4, 392.0), (6, 493.88),
         (8, 293.66), (10, 349.23), (12, 440.0), (14, 392.0)]
samples=[]
for i in range(rate*seconds):
    t=i/rate
    pad=0
    for hz,gain in [(130.8125,.24),(196,.12),(261.625,.14),(329.625,.08)]:
        pad += gain*math.sin(2*math.pi*hz*t)
    value=.18*pad
    for start,hz in notes:
        age=(t-start)%seconds
        if age < 6:
            envelope=(1-math.exp(-age*16))*math.exp(-age/.95)
            tone=(math.sin(2*math.pi*hz*age)+.22*math.sin(2*math.pi*2*hz*age)
                  +.07*math.sin(2*math.pi*3*hz*age))
            value += .28*envelope*tone
    # Gentle fade at loop boundary; no autoplay, volume controlled by the site.
    edge=min(1,t/.08,(seconds-t)/.08)
    samples.append(value*max(0,edge))
peak=max(map(abs,samples))
output=Path('public/assets/ambient-loop.wav')
with wave.open(str(output),'wb') as audio:
    audio.setnchannels(1); audio.setsampwidth(2); audio.setframerate(rate)
    audio.writeframes(b''.join(struct.pack('<h',round(v/peak*.7*32767)) for v in samples))
print(f'Generated {seconds}s original ambient audio: {output.stat().st_size:,} bytes')
