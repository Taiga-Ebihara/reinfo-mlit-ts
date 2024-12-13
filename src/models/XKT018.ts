// XKT018
// 国土数値情報（市区町村村役場及び集会施設等）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi23

import { GeoResponseFormat } from "./common";

/**
 * XKT018
 *
 * 国土数値情報（市区町村村役場及び集会施設等）APIリクエストパラメータ
 */
export type XKT018RequestParameters = {
  /**
   * 応答形式
   *
   * 応答形式（GeoJSON応答／バイナリベクトルタイル応答）を設定
   * geojson…GeoJSON応答
   * pbf…バイナリベクトルタイル応答
   */
  response_format: GeoResponseFormat;

  /**
   * ズームレベル（縮尺）
   *
   * XYZ方式における、ズームレベル（縮尺）を指定。
   * 13（大字）～15（詳細）で指定可能であり、値が大きいほどズームレベルは高くなります（カバーする地理的領域は狭くなります）。
   */
  z: number;

  /**
   * タイル座標のX値
   *
   * XYZ方式における、タイル座標のX値を指定
   */
  x: number;

  /**
   * タイル座標のY値
   *
   * XYZ方式における、タイル座標のY値を指定
   */
  y: number;
};

/**
 * XKT018
 *
 * 国土数値情報（市区町村村役場及び集会施設等）APIレスポンスGeoJSON形式
 */
export type XKT018ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 行政区域コード
     */
    P05_001: string;

    /**
     * 施設分類コード
     */
    P05_002: string;

    /**
     * 施設分類名
     */
    P05_002_name_ja: string;

    /**
     * 名称
     */
    P05_003_ja: string;

    /**
     * 所在地
     */
    P05_004_ja: string;
  };
};

/**
 * XKT018
 *
 * 国土数値情報（市区町村村役場及び集会施設等）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT018ResponseDataPbf = ArrayBuffer;
