// XKT016
// 国土数値情報（災害危険区域）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi21

import { GeoResponseFormat } from "./common";

/**
 * XKT016
 *
 * 国土数値情報（災害危険区域）APIリクエストパラメータ
 */
export type XKT016RequestParameters = {
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
   * 代表行政コード
   *
   * 形式はNNNNN（数字5桁）
   * ※複数指定する場合は、「administrativeAreaCode=13101,13102」のようにカンマ区切りで指定してください。
   */
  administrativeAreaCode?: string;
};

/**
 * XKT016
 *
 * 国土数値情報（災害危険区域）APIレスポンスGeoJSON形式
 */
export type XKT016ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  properties: {
    /**
     * 都道府県名
     */
    A48_001: string;

    /**
     * 市町村名
     */
    A48_002: string;

    /**
     * 代表行政コード
     */
    A48_003: string;

    /**
     * 指定主体区分
     */
    A48_004: string;

    /**
     * 区域名
     */
    A48_005_ja: string;

    /**
     * 所在地
     */
    A48_006: string;

    /**
     * 指定理由コード
     */
    A48_007: string;

    /**
     * 指定理由
     */
    A48_007_name_ja: string;

    /**
     * 指定理由詳細
     */
    A48_008_ja: string;

    /**
     * 告示年月日
     */
    A48_009: string;

    /**
     * 告示番号
     */
    A48_010: string;

    /**
     * 根拠条例
     */
    A48_011: string;

    /**
     * 面積
     */
    A48_012: string;

    /**
     * 縮尺
     */
    A48_013: string;

    /**
     * その他
     */
    A48_014: string;
  };
};

/**
 * XKT016
 *
 * 国土数値情報（災害危険区域）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT016ResponseDataPbf = ArrayBuffer;
