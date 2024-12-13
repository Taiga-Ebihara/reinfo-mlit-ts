// XKT017
// 国土数値情報（図書館）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi22

import { GeoResponseFormat } from "./common";

/**
 * XKT017
 *
 * 国土数値情報（図書館）APIリクエストパラメータ
 */
export type XKT017RequestParameters = {
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

  /**
   * 行政区域コード
   *
   * 形式はNNNNN（数字5桁）
   * ※複数指定する場合は、「administrativeAreaCode=13101,13102」のようにカンマ区切りで指定してください。
   *
   * https://nlftp.mlit.go.jp/ksj/gml/codelist/AdminiBoundary_CD.xlsx を参照。
   */
  administrativeAreaCode?: string;
};

/**
 * XKT017
 *
 * 国土数値情報（図書館）APIレスポンスGeoJSON形式
 */
export type XKT017ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 行政区域コード
     */
    P27_001: string;

    /**
     * 公共施設大分類
     */
    P27_002: string;

    /**
     * 公共施設小分類
     */
    P27_003: string;

    /**
     * 公共施設小分類名
     */
    P27_003_name_ja: string;

    /**
     * 文化施設分類
     */
    P27_004: string;

    /**
     * 文化施設分類名
     */
    P27_004_name_ja: string;

    /**
     * 名称
     */
    P27_005_ja: string;

    /**
     * 所在地
     */
    P27_006_ja: string;

    /**
     * 管理者コード
     */
    P27_007: string;

    /**
     * 階数
     */
    P27_008: string;

    /**
     * 建築年
     */
    P27_009: string;
  };
};

/**
 * XKT017
 *
 * 国土数値情報（図書館）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT017ResponseDataPbf = ArrayBuffer;
