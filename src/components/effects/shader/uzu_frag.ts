export const UZU_FRAG = `
uniform sampler2D tDiffuse;
varying vec2 vUv;
uniform vec2 vScreenSize;
uniform vec2 vCenter;
uniform float fRadius;
uniform float fUzuStrength;

void main() {
  vec2 pos = (vUv * vScreenSize) - vCenter;
  float len = length(pos);
  if(len >= fRadius) {
    gl_FragColor = texture2D(tDiffuse, vUv);
    return;
  }

  float uzu = min(max(1.0 - (len / fRadius), 0.0), 1.0) * fUzuStrength;
  float x = pos.x * cos(uzu) - pos.y * sin(uzu);
  float y = pos.x * sin(uzu) + pos.y * cos(uzu);
  vec2 retPos = (vec2(x, y) + vCenter) / vScreenSize;
  vec4 color = texture2D(tDiffuse, retPos);
  gl_FragColor = color;
}
`;
