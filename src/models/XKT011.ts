// XKT011
// 国土数値情報（福祉施設）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi17

import { GeoResponseFormat } from "./common";

/**
 * XKT011
 *
 * 国土数値情報（福祉施設）APIリクエストパラメータ
 */
export type XKT011RequestParameters = {
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
   */
  administrativeAreaCode?: string;

  /**
   * 福祉施設大分類コード
   *
   * 形式はNN（数字2桁）
   * ※複数指定する場合は、「welfareFacilityClassCode=01,02」のようにカンマ区切りで指定してください。
   */
  welfareFacilityClassCode?: string;

  /**
   * 福祉施設中分類コード
   *
   * 形式はNNNN（数字4桁）
   * ※複数指定する場合は、「welfareFacilityMiddleClassCode=0101,0201」のようにカンマ区切りで指定してください。
   */
  welfareFacilityMiddleClassCode?: string;

  /**
   * 福祉施設小分類コード
   *
   * 形式はNNNNNN（数字6桁）
   * ※複数指定する場合は、「welfareFacilityMinorClassCode=020101,020102」のようにカンマ区切りで指定してください。
   */
  welfareFacilityMinorClassCode?: string;
};

/**
 * XKT011
 *
 * 国土数値情報（福祉施設）APIレスポンスGeoJSON形式
 */
export type XKT011ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 都道府県名
     */
    P14_001: string;

    /**
     * 市区町村名
     */
    P14_002: string;

    /**
     * 行政区域コード
     */
    P14_003: string;

    /**
     * 所在地
     */
    P14_004_ja: string;

    /**
     * 福祉施設大分類コード
     */
    P14_005: string;

    /**
     * 福祉施設大分類名
     */
    P14_005_name_ja: string;

    /**
     * 福祉施設中分類コード
     */
    P14_006: string;

    /**
     * 福祉施設中分類名
     */
    P14_006_name_ja: string;

    /**
     * 福祉施設小分類コード
     */
    P14_007: string;

    /**
     * 名称
     */
    P14_008_ja: string;

    /**
     * 管理者コード
     */
    P14_009: string;

    /**
     * 位置正確度コード
     */
    P14_010: string;
  };
};

/**
 * XKT011
 *
 * 国土数値情報（福祉施設）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT011ResponseDataPbf = ArrayBuffer;
