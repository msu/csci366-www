import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as _,g as A,c as d,a as s,e as R,t as b,r as f,d as u}from"./runtime-core.esm-bundler-CCdwqH5A.js";const S={class:"sh"},E={key:0,class:"sh-fail"},v=`precision mediump float;
uniform float time;       // seconds
varying vec2 uv;          // this pixel, 0 to 1

void main() {
  vec2 p = uv - 0.5;
  float d = length(p);
  float ring = sin(d * 40.0 - time * 3.0);
  gl_FragColor = vec4(0.5 + 0.5 * ring,
                      uv.y,
                      1.0 - d, 1.0);
}`,F=`attribute vec2 pos;
varying vec2 uv;
void main() { uv = pos * 0.5 + 0.5; gl_Position = vec4(pos, 0.0, 1.0); }`,y={__name:"ShaderDemo",setup(w){const i=f(),c=f(!1);let r;return _(()=>{const e=i.value.getContext("webgl",{preserveDrawingBuffer:!0});if(!e){c.value=!0;return}const t=(o,p)=>{const n=e.createShader(o);return e.shaderSource(n,p),e.compileShader(n),n},a=e.createProgram();e.attachShader(a,t(e.VERTEX_SHADER,F)),e.attachShader(a,t(e.FRAGMENT_SHADER,v)),e.linkProgram(a),e.useProgram(a),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const l=e.getAttribLocation(a,"pos");e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0);const g=e.getUniformLocation(a,"time"),m=o=>{e.uniform1f(g,o/1e3),e.drawArrays(e.TRIANGLE_STRIP,0,4),r=requestAnimationFrame(m)};r=requestAnimationFrame(m)}),A(()=>cancelAnimationFrame(r)),(e,t)=>(u(),d("div",S,[s("canvas",{ref_key:"canvas",ref:i,class:"sh-screen",width:"350",height:"130",role:"img","aria-label":"Moving colored rings drawn by a fragment shader"},null,512),c.value?(u(),d("div",E,"WebGL is not available in this browser")):R("v-if",!0),s("pre",{class:"sh-code"},b(v)),t[0]||(t[0]=s("div",{class:"sh-note"},"Running now, on this machine's GPU, once per pixel",-1))]))}},D=h(y,[["__scopeId","data-v-fa71e690"]]);export{D as default};
