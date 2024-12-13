// XKT015
// 国土数値情報（駅別乗降客数）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi20

import { GeoResponseFormat } from "./common";

/**
 * XKT015
 *
 * 国土数値情報（駅別乗降客数）APIリクエストパラメータ
 */
export type XKT015RequestParameters = {
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
};

/**
 * XKT015
 *
 * 国土数値情報（駅別乗降客数）APIレスポンスGeoJSON形式
 */
export type XKT015ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 駅名
     */
    S12_001_ja: string;

    /**
     * 駅コード
     */
    S12_001c: string;

    /**
     * グループコード
     */
    S12_001g: string;

    /**
     * 運営会社
     */
    S12_002_ja: string;

    /**
     * 路線名
     */
    S12_003_ja: string;

    /**
     * 鉄道区分
     */
    S12_004: string;

    /**
     * 事業者種別
     */
    S12_005: string;

    /**
     * 重複コード2011
     */
    S12_006: string;

    /**
     * データ有無コード2011
     */
    S12_007: string;

    /**
     * 備考2011
     */
    S12_008: string;

    /**
     * 乗降客数2011
     */
    S12_009: number;

    /**
     * 重複コード2012
     */
    S12_010: string;

    /**
     * データ有無コード2012
     */
    S12_011: string;

    /**
     * 備考2012
     */
    S12_012: string;

    /**
     * 乗降客数2012
     */
    S12_013: number;

    // Similar fields for subsequent years (2013 - 2022)
    /**
     * 重複コード2022
     */
    S12_050: string;

    /**
     * データ有無コード2022
     */
    S12_051: string;

    /**
     * 備考2022
     */
    S12_052: string;

    /**
     * 乗降客数2022
     */
    S12_053: number;
  };
};

/**
 * XKT015
 *
 * 国土数値情報（駅別乗降客数）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT015ResponseDataPbf = ArrayBuffer;
