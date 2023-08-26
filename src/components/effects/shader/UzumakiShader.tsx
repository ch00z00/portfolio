import React, { useEffect, useRef } from "react";
import { UZU_VERT } from "./uzu_vert";
import { UZU_FRAG } from "./uzu_frag";

type Props = {
  width: number;
  height: number;
};

const UzumakiShader: React.FC<Props> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const uzumakiShader = useRef<any>(null);

  const vert_shader = UZU_VERT;
  const frag_shader = UZU_FRAG;

  useEffect(() => {
    if (!canvasRef.current) return;

    // UzumakiShaderのインスタンスを生成
    // uzumakiShader.current = new UzumakiShader(width, height);

    // マウス座標やスケールを設定する例
    if (uzumakiShader.current) {
      uzumakiShader.current.setMousePos(0, 0); // マウス座標の設定
      uzumakiShader.current.setUzumakiScale(1.0); // ウズマキのスケール設定
    }

    // Three.jsのセットアップやレンダリングループをここに追加
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default UzumakiShader;
