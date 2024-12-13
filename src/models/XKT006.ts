// XKT006
// 国土数値情報（学校）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi14

import { GeoResponseFormat } from "./common";

/**
 * XKT006
 *
 * 国土数値情報（学校）APIリクエストパラメータ
 */
export type XKT006RequestParameters = {
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
 * XKT006
 *
 * 国土数値情報（学校）APIレスポンスGeoJSON形式
 */
export type XKT006ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 行政区域コード
     */
    P29_001: string;

    /**
     * 学校コード
     */
    P29_002: string;

    /**
     * 学校分類コード
     */
    P29_003: string;

    /**
     * 学校分類名
     */
    P29_003_name_ja: string;

    /**
     * 名称
     */
    P29_004_ja: string;

    /**
     * 所在地
     */
    P29_005_ja: string;

    /**
     * 管理者コード
     */
    P29_006: string;

    /**
     * 休校区分
     */
    P29_007: string;

    /**
     * キャンパスコード
     */
    P29_008: string;

    /**
     * 学校名備考
     */
    P29_009_ja: string;
  };
};

/**
 * XKT006
 *
 * 国土数値情報（学校）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT006ResponseDataPbf = ArrayBuffer;
