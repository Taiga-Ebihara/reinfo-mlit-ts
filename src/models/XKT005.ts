// XKT005
// 国土数値情報（中学校区）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi13

import { GeoResponseFormat } from "./common";

/**
 * XKT005
 *
 * 国土数値情報（中学校区）APIリクエストパラメータ
 */
export type XKT005RequestParameters = {
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
   * 11（市）～15（詳細）で指定可能であり、値が大きいほどズームレベルは高くなります（カバーする地理的領域は狭くなります）。
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

  /**
   * 行政区域コード
   *
   * 形式はNNNNN（数字5桁）
   * ※複数指定する場合は、「administrativeAreaCode=13101,13102」のようにカンマ区切りで指定してください。
   */
  administrativeAreaCode?: string;
};

/**
 * XKT005
 *
 * 国土数値情報（中学校区）APIレスポンスGeoJSON形式
 */
export type XKT005ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  properties: {
    /**
     * 行政区域コード
     */
    A32_001: string;

    /**
     * 設置主体
     */
    A32_002: string;

    /**
     * 学校コード
     */
    A32_003: string;

    /**
     * 名称
     */
    A32_004_ja: string;

    /**
     * 所在地
     */
    A32_005: string;
  };
};

/**
 * XKT005
 *
 * 国土数値情報（中学校区）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT005ResponseDataPbf = ArrayBuffer;
