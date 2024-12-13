// XKT024
// 都市計画決定GISデータ（高度利用地区）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi29

import { GeoResponseFormat } from "./common";

/**
 * XKT024
 *
 * 都市計画決定GISデータ（高度利用地区）APIリクエストパラメータ
 */
export type XKT024RequestParameters = {
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
 * XKT024
 *
 * 都市計画決定GISデータ（高度利用地区）APIレスポンスGeoJSON形式
 */
export type XKT024ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  properties: {
    /**
     * 高度名称
     */
    advanced_name: string;

    /**
     * 高度区分名
     */
    advanced_type_ja: string;

    /**
     * 区分コード
     */
    kubun_id: string;

    /**
     * 行政コード
     */
    group_code: string;

    /**
     * 設定年月日
     *
     * 最終告示日
     */
    decision_date: string;

    /**
     * 設定区分名
     */
    decision_type_ja: string;

    /**
     * 設定者名
     */
    decision_maker: string;

    /**
     * 告示番号
     *
     * 告示番号L（告示番号（最終））
     */
    notice_number: string;

    /**
     * 都道府県名
     */
    prefecture: string;

    /**
     * 市町村名
     */
    city_name: string;

    /**
     * 当初決定日
     */
    first_decision_date: string;

    /**
     * 告示番号S
     *
     * 告示番号（当初）
     */
    notice_number_s: string;
  };
};

/**
 * XKT024
 *
 * 都市計画決定GISデータ（高度利用地区）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT024ResponseDataPbf = ArrayBuffer;
