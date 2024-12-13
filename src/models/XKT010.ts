// XKT010
// 国土数値情報（医療機関）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi16

import { GeoResponseFormat } from "./common";

/**
 * XKT010
 *
 * 国土数値情報（医療機関）APIリクエストパラメータ
 */
export type XKT010RequestParameters = {
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
 * XKT010
 *
 * 国土数値情報（医療機関）APIレスポンスGeoJSON形式
 */
export type XKT010ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 医療機関分類
     */
    P04_001: string;

    /**
     * 医療機関分類名
     */
    P04_001_name_ja: string;

    /**
     * 施設名称
     */
    P04_002_ja: string;

    /**
     * 所在地
     */
    P04_003_ja: string;

    /**
     * 診療科目１
     */
    P04_004: string;

    /**
     * 診療科目２
     */
    P04_005: string;

    /**
     * 診療科目３
     */
    P04_006: string;

    /**
     * 開設者分類
     */
    P04_007: string;

    /**
     * 病床数
     */
    P04_008: string;

    /**
     * 救急告示病院
     */
    P04_009: string;

    /**
     * 災害拠点病院
     */
    P04_010: string;

    /**
     * 診療科目
     */
    medical_subject_ja: string;
  };
};

/**
 * XKT010
 *
 * 国土数値情報（医療機関）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT010ResponseDataPbf = ArrayBuffer;
