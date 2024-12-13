// XKT021
// 国土数値情報（地すべり防止地区）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi26

import { GeoResponseFormat } from "./common";

/**
 * XKT021
 *
 * 国土数値情報（地すべり防止地区）APIリクエストパラメータ
 */
export type XKT021RequestParameters = {
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
   * 都道府県コード
   *
   * 形式はNN（数字2桁）
   * ※複数指定する場合は、「prefectureCode=13,14」のようにカンマ区切りで指定してください。
   */
  prefectureCode?: string;

  /**
   * 行政コード
   *
   * 形式はNNNNN（数字5桁）
   * ※複数指定する場合は、「administrativeAreaCode=13101,13102」のようにカンマ区切りで指定してください。
   */
  administrativeAreaCode?: string;
};

/**
 * XKT021
 *
 * 国土数値情報（地すべり防止地区）APIレスポンスGeoJSON形式
 */
export type XKT021ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  properties: {
    /**
     * 都道府県コード
     */
    prefecture_code: string;

    /**
     * 行政コード
     */
    group_code: string;

    /**
     * 市町村名
     */
    city_name: string;

    /**
     * 区域名
     */
    region_name: string;

    /**
     * 所在地
     */
    address: string;

    /**
     * 告示年月日
     */
    notice_date: string;

    /**
     * 告示番号
     */
    notice_number: string;

    /**
     * 指定面積（ha）
     */
    landslide_area: string;

    /**
     * 所管省庁コード
     */
    charge_ministry_code: string;

    /**
     * 都道府県名
     */
    prefecture_name: string;

    /**
     * 所管省庁名
     */
    charge_ministry_name: string;
  };
};

/**
 * XKT021
 *
 * 国土数値情報（地すべり防止地区）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT021ResponseDataPbf = ArrayBuffer;
