"use strict";

// Ages are years before present. All dates are rounded educational landmarks.
const EARTH_AGE = 4_540_000_000;
const epochs = [
  {
    tab: "El origen",
    age: EARTH_AGE,
    ageLabel: "HACE ≈4.540 MILLONES DE AÑOS",
    title: "Del polvo\nal fuego.",
    event: "Nace la Tierra",
    text: "La gravedad reunió material del joven sistema solar hasta formar la Tierra. Las colisiones liberaron enormes cantidades de energía: nuestro hogar comenzó como un mundo muy caliente, nada parecido al actual.",
    fact: "La edad del planeta se estima mediante relojes naturales: los isótopos radiactivos de rocas y meteoritos.",
    caption: "Un planeta en construcción.",
    clock: "La Tierra comienza su historia.",
    source: "https://pubs.usgs.gov/gip/geotime/age.html",
  },
  {
    tab: "La Luna",
    age: 4_500_000_000,
    ageLabel: "HACE ≈4.500 MILLONES DE AÑOS",
    title: "Un choque.\nUna compañera.",
    event: "Se forma la Luna",
    text: "La explicación principal del origen de la Luna apunta a un gran impacto contra la Tierra joven. Parte del material expulsado quedó en órbita y terminó reuniéndose para formar nuestro satélite.",
    fact: "Las muestras de las misiones Apollo aportaron pistas esenciales. Los detalles del impacto y su fecha exacta siguen investigándose.",
    caption: "La historia de dos mundos conectados.",
    clock: "Un impacto da origen a nuestra compañera celeste.",
    source: "https://science.nasa.gov/moon/formation/",
  },
  {
    tab: "La vida",
    age: 3_500_000_000,
    ageLabel: "HACE AL MENOS ≈3.500 MILLONES DE AÑOS",
    title: "Lo pequeño\nlo cambia todo.",
    event: "Un mundo microbiano",
    text: "En un planeta con océanos, la vida ya había encontrado su lugar. Durante una inmensa parte de la historia terrestre, sus protagonistas fueron organismos microscópicos: sin bosques, sin animales, sin ojos que contemplaran el paisaje.",
    fact: "La fecha exacta del origen de la vida no se conoce. Las evidencias más antiguas y su interpretación siguen siendo objeto de investigación.",
    caption: "La revolución que no se veía a simple vista.",
    clock: "La vida microbiana ya forma parte del planeta.",
    source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12329462/",
  },
  {
    tab: "El oxígeno",
    age: 2_400_000_000,
    ageLabel: "HACE ≈2.400 MILLONES DE AÑOS",
    title: "La vida transforma\nel aire.",
    event: "La Gran Oxidación",
    text: "El oxígeno producido por organismos fotosintéticos comenzó a acumularse de forma duradera en la atmósfera. Fue una transformación de todo el sistema terrestre, no la aparición instantánea de un aire como el nuestro.",
    fact: "La Gran Oxidación fue un proceso complejo. Los niveles de oxígeno continuaron cambiando durante miles de millones de años.",
    caption: "Una atmósfera que nunca volvería a ser la misma.",
    clock: "El oxígeno comienza a transformar la atmósfera.",
    source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8403206/",
  },
  {
    tab: "El Cámbrico",
    age: 539_000_000,
    ageLabel: "HACE ≈539 MILLONES DE AÑOS",
    title: "El océano\nse llena de formas.",
    event: "La vida se diversifica",
    text: "Durante el Cámbrico se diversificaron muchos de los grandes grupos de animales. Ojos, caparazones y nuevas maneras de moverse y alimentarse transformaron los ecosistemas marinos.",
    fact: "La «explosión» cámbrica no ocurrió en un instante: esa gran diversificación se desarrolló a lo largo de millones de años. Ya existían animales antes.",
    caption: "Un laboratorio de formas bajo el agua.",
    clock: "Los ecosistemas marinos se llenan de nuevas formas animales.",
    source: "https://www.nhm.ac.uk/discover/the-cambrian-period.html",
  },
  {
    tab: "Dinosaurios",
    age: 230_000_000,
    ageLabel: "HACE ≈230 MILLONES DE AÑOS",
    title: "Un mundo\nde dinosaurios.",
    event: "Aparecen los dinosaurios",
    text: "Los primeros dinosaurios aparecieron en el Triásico. Sus descendientes se diversificaron durante el Jurásico y el Cretácico, en paisajes que fueron cambiando con el clima y el movimiento de los continentes.",
    fact: "No todos vivieron juntos. El mundo de los dinosaurios abarcó una cantidad de tiempo difícil de imaginar, y las aves son dinosaurios que siguen vivos.",
    caption: "Muchos mundos, no una sola escena prehistórica.",
    clock: "Aparecen los primeros dinosaurios.",
    source: "https://www.nhm.ac.uk/discover/where-did-dinosaurs-come-from.html",
  },
  {
    tab: "El impacto",
    age: 66_000_000,
    ageLabel: "HACE ≈66 MILLONES DE AÑOS",
    title: "Un final.\nNuevos comienzos.",
    event: "La gran extinción",
    text: "El impacto de un asteroide desencadenó una crisis planetaria al final del Cretácico. Desaparecieron los dinosaurios no avianos y muchos otros organismos. La vida que sobrevivió siguió caminos nuevos.",
    fact: "La extinción no acabó con todos los dinosaurios: sobrevivieron los antepasados de las aves actuales.",
    caption: "La vida continúa, pero el mundo ha cambiado.",
    clock: "Una extinción cambia el rumbo de la vida.",
    source:
      "https://www.nhm.ac.uk/discover/news/2020/november/dinosaurs-were-not-in-decline-before-the-asteroid-wiped-them-out.html",
  },
  {
    tab: "Nosotros",
    age: 300_000,
    ageLabel: "DESDE HACE ≈300.000 AÑOS",
    title: "El planeta\nse hace preguntas.",
    event: "Aparece Homo sapiens",
    text: "Nuestra especie evolucionó en África. Muchísimo después de los primeros océanos, del oxígeno y de los dinosaurios, llegaron seres capaces de reconstruir esta historia a partir de fósiles, rocas y preguntas.",
    fact: "Si toda la historia terrestre durara un día, Homo sapiens aparecería aproximadamente seis segundos antes de medianoche.",
    caption: "El hogar de todas las historias que conocemos.",
    clock: "Nuestra especie aparece, a unos seis segundos de medianoche.",
    source:
      "https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens",
  },
];

const $ = (selector) => document.querySelector(selector);
const pad = (value) => String(value).padStart(2, "0");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let motionPaused = reducedMotion.matches;
try {
  motionPaused =
    motionPaused || localStorage.getItem("tierra-motion") === "paused";
} catch (_) {
  /* Storage can be unavailable for file URLs or privacy modes. */
}
let currentEpoch = 0;
const renderers = [];
const tabs = $(".epoch-tabs");

epochs.forEach((epoch, index) => {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "epoch-tab";
  tab.id = `epoch-tab-${index}`;
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-controls", "epoch-panel");
  tab.setAttribute("aria-selected", String(index === 0));
  tab.tabIndex = index === 0 ? 0 : -1;
  const number = document.createElement("span");
  number.textContent = pad(index + 1);
  const name = document.createElement("strong");
  name.textContent = epoch.tab;
  tab.append(number, name);
  tab.addEventListener("click", () => selectEpoch(index));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % epochs.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + epochs.length) % epochs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = epochs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectEpoch(next);
      const target = document.getElementById(`epoch-tab-${next}`);
      target.focus({ preventScroll: true });
      // Move only the horizontal tab strip; do not jump the document.
      tabs.scrollTo({
        left: target.offsetLeft - tabs.offsetLeft - 15,
        behavior: motionPaused ? "instant" : "smooth",
      });
    }
  });
  tabs.append(tab);
});

function selectEpoch(index) {
  currentEpoch = Math.max(0, Math.min(epochs.length - 1, index));
  const epoch = epochs[currentEpoch];
  $("#epoch-age").textContent = epoch.ageLabel;
  const title = $("#epoch-title");
  title.replaceChildren();
  epoch.title.split("\n").forEach((line, i) => {
    if (i) title.append(document.createElement("br"));
    title.append(document.createTextNode(line));
  });
  $("#epoch-text").textContent = epoch.text;
  $("#epoch-fact").textContent = epoch.fact;
  $("#epoch-source").href = epoch.source;
  $("#epoch-count").textContent =
    `${pad(currentEpoch + 1)} / ${pad(epochs.length)}`;
  $(".visual-index").textContent = $("#epoch-count").textContent;
  $(".visual-caption").textContent = epoch.caption;
  $(".epoch-visual").dataset.mode = String(currentEpoch);
  $("#epoch-globe").setAttribute(
    "aria-label",
    `Interpretación artística: ${epoch.event}`,
  );
  $("#epoch-panel").setAttribute(
    "aria-labelledby",
    `epoch-tab-${currentEpoch}`,
  );
  tabs.querySelectorAll("button").forEach((tab, i) => {
    tab.setAttribute("aria-selected", String(i === currentEpoch));
    tab.tabIndex = i === currentEpoch ? 0 : -1;
  });
  $("#previous-epoch").disabled = currentEpoch === 0;
  $("#next-epoch").disabled = currentEpoch === epochs.length - 1;
  $("#time-slider").value = String(currentEpoch);
  updateClock(currentEpoch);
  renderers.forEach((renderer) => renderer.draw());
}

function clockForAge(age) {
  const seconds = Math.floor((1 - age / EARTH_AGE) * 86400);
  return `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor((seconds % 3600) / 60))}:${pad(seconds % 60)}`;
}
function updateClock(index) {
  const epoch = epochs[index];
  const clock = clockForAge(epoch.age);
  $("#clock-time").textContent = clock;
  $("#clock-event").textContent = epoch.event;
  $("#clock-explanation").textContent = `${clock} — ${epoch.clock}`;
  $("#slider-position").value = `${index + 1} de ${epochs.length}`;
  $("#time-slider").setAttribute("aria-valuetext", `${epoch.event}, ${clock}`);
  $(".clock-hand").style.transform =
    `rotate(${(1 - epoch.age / EARTH_AGE) * 360}deg)`;
}
$("#seconds-scale").textContent = Math.round(EARTH_AGE / 86400).toLocaleString(
  "es-ES",
);
$("#previous-epoch").addEventListener("click", () =>
  selectEpoch(currentEpoch - 1),
);
$("#next-epoch").addEventListener("click", () => selectEpoch(currentEpoch + 1));
$("#time-slider").addEventListener("input", (event) =>
  selectEpoch(Number(event.target.value)),
);

function updateMotionControl() {
  document.body.classList.toggle("motion-paused", motionPaused);
  const button = $("#motion-toggle");
  button.setAttribute("aria-pressed", String(motionPaused));
  button.replaceChildren(
    document.createTextNode(
      motionPaused ? "Activar movimiento " : "Pausar movimiento ",
    ),
  );
  const icon = document.createElement("span");
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = motionPaused ? "▷" : "Ⅱ";
  button.append(icon);
  renderers.forEach((renderer) => renderer.draw());
}
$("#motion-toggle").addEventListener("click", () => {
  motionPaused = !motionPaused;
  try {
    localStorage.setItem("tierra-motion", motionPaused ? "paused" : "playing");
  } catch (_) {
    /* No storage is required to use the site. */
  }
  updateMotionControl();
});
reducedMotion.addEventListener("change", (event) => {
  motionPaused = event.matches;
  updateMotionControl();
});
updateMotionControl();
selectEpoch(0);

// A small, dependency-free WebGL sphere. Historical surfaces are artistic,
// procedurally generated interpretations, deliberately not modern land maps.
const vertexSource = `
attribute vec2 aPosition;
varying vec2 vUv;
void main(){ vUv=aPosition; gl_Position=vec4(aPosition,0.0,1.0); }
`;
const fragmentSource = `
precision mediump float;
varying vec2 vUv;
uniform sampler2D uMap;
uniform float uRotation;
uniform float uMode;
float hash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=a*noise(p);p=p*2.03+1.7;a*=.5;}return n;}
void main(){
 vec2 xy=vUv/0.78;
 float r2=dot(xy,xy);
 if(r2>1.){
  float glow=exp(-(sqrt(r2)-1.)*33.)*.27;
  vec3 atm= uMode<1.5 ? vec3(.8,.24,.07) : vec3(.12,.43,.64);
  if(glow<.003)discard;
  gl_FragColor=vec4(atm,glow);return;
 }
 vec3 n=vec3(xy,sqrt(1.-r2));
 vec3 light=normalize(vec3(-.9,.6,1.25));
 float diffuse=max(dot(n,light),0.);
 float sh=.055+.945*pow(diffuse,1.3);
 float cr=cos(uRotation),sr=sin(uRotation);
 vec3 q=vec3(cr*n.x+sr*n.z,n.y,-sr*n.x+cr*n.z);
 float ct=cos(.17),st=sin(.17);
 q=vec3(q.x,ct*q.y-st*q.z,st*q.y+ct*q.z);
 float terrain=fbm(q*3.2+vec3(1.4,0.,.7));
 float fine=fbm(q*19.);
 vec3 color;
 if(uMode>6.5){
  vec2 uv=vec2(atan(q.z,q.x)/6.2831853+.5,asin(clamp(q.y,-1.,1.))/3.14159265+.5);
  color=texture2D(uMap,uv).rgb;
  color*=vec3(.92,1.02,1.08);
 }else if(uMode<1.5){
  float cracks=pow(1.-abs(terrain-.5)*2.,20.);
  vec3 rock=mix(vec3(.11,.06,.045),vec3(.42,.16,.065),fine);
  vec3 lava=mix(vec3(.85,.17,.015),vec3(1.,.74,.2),cracks);
  float flow=smoothstep(.41,.65,terrain);
  if(uMode>.5){flow*=.38;rock*=.85;}
  color=mix(rock,lava,flow);
  color=color*sh+lava*flow*.25;
 }else{
  vec3 sea=vec3(.025,.19,.24),land=vec3(.33,.32,.16);
  float limit=.57;
  if(uMode>2.5){sea=vec3(.035,.22,.35);land=vec3(.32,.36,.22);limit=.54;}
  if(uMode>3.5){sea=vec3(.035,.27,.35);land=vec3(.4,.36,.25);limit=.55;}
  if(uMode>4.5){sea=vec3(.025,.18,.28);land=vec3(.21,.33,.15);limit=.5;}
  if(uMode>5.5){sea=vec3(.14,.16,.17);land=vec3(.31,.28,.22);}
  float coast=smoothstep(limit-.012,limit+.012,terrain);
  color=mix(sea,land*(.7+fine*.8),coast);
  float clouds=smoothstep(.62,.78,fbm(q*7.+2.2));
  color=mix(color,vec3(.72,.78,.72),clouds*.5);
 }
 if(uMode>=1.5)color*=sh;
 float rim=pow(1.-n.z,3.)*max(dot(n,light),0.);
 vec3 atmosphere=uMode<1.5?vec3(.85,.21,.035):vec3(.1,.39,.65);
 color+=atmosphere*rim*.55;
 gl_FragColor=vec4(color,1.);
}
`;

function createGlobe(canvas, texture, historical) {
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: true,
    premultipliedAlpha: false,
    powerPreference: "low-power",
  });
  if (!gl) return null;
  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };
  const vertex = compile(gl.VERTEX_SHADER, vertexSource),
    fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return null;
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);
  const vertices = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const position = gl.getAttribLocation(program, "aPosition");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const map = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, map);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const rotationLocation = gl.getUniformLocation(program, "uRotation");
  const modeLocation = gl.getUniformLocation(program, "uMode");
  gl.uniform1i(gl.getUniformLocation(program, "uMap"), 0);
  let rotation = historical ? 0.4 : 1.25;
  let visible = false,
    dragging = false,
    previousX = 0,
    lost = false;
  const renderer = {
    draw() {
      if (lost) return;
      gl.useProgram(program);
      gl.uniform1f(rotationLocation, rotation);
      gl.uniform1f(modeLocation, historical ? currentEpoch : 7);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      canvas.classList.add("ready");
    },
    advance(delta) {
      if (visible && !dragging && !lost) {
        rotation += delta * 0.000028;
        renderer.draw();
      }
    },
  };
  const resize = () => {
    const size = Math.max(
      1,
      Math.min(
        640,
        Math.round(
          canvas.getBoundingClientRect().width *
            Math.min(window.devicePixelRatio, 1.35),
        ),
      ),
    );
    canvas.width = size;
    canvas.height = size;
    gl.viewport(0, 0, size, size);
    renderer.draw();
  };
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(
    (entries) => {
      visible = entries[0].isIntersecting;
      if (visible) renderer.draw();
    },
    { rootMargin: "80px" },
  ).observe(canvas);
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    lost = true;
    canvas.classList.remove("ready");
  });
  canvas.style.cursor = "grab";
  canvas.style.touchAction = "pan-y";
  canvas.title = "Arrastra horizontalmente para girar el planeta";
  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    previousX = event.clientX;
    canvas.setPointerCapture(event.pointerId);
    canvas.style.cursor = "grabbing";
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    rotation += (event.clientX - previousX) * 0.008;
    previousX = event.clientX;
    renderer.draw();
  });
  const release = () => {
    dragging = false;
    canvas.style.cursor = "grab";
  };
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", release);
  canvas.addEventListener("lostpointercapture", release);
  resize();
  return renderer;
}

const texture = new Image();
texture.addEventListener("load", () => {
  for (const [id, historical] of [
    ["hero-globe", false],
    ["epoch-globe", true],
  ]) {
    try {
      const renderer = createGlobe(
        document.getElementById(id),
        texture,
        historical,
      );
      if (renderer) renderers.push(renderer);
    } catch (_) {
      /* A static, local globe remains visible if WebGL is unavailable. */
    }
  }
});
texture.src = "./assets/earth-map.png";
let lastFrame = 0;
function animate(now) {
  requestAnimationFrame(animate);
  if (document.hidden || motionPaused) {
    lastFrame = now;
    return;
  }
  if (now - lastFrame < 40) return; // Limit decorative motion to 25 fps.
  const delta = Math.min(now - lastFrame, 80);
  lastFrame = now;
  renderers.forEach((renderer) => renderer.advance(delta));
}
requestAnimationFrame(animate);
