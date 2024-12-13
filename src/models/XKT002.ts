// XKT002
// 都市計画決定GISデータ（用途地域）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi10

import { GeoResponseFormat } from "./common";

/**
 * XKT002
 *
 * 都市計画決定GISデータ（用途地域）APIリクエストパラメータ
 */
export type XKT002RequestParameters = {
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
 * XKT002
 *
 * 都市計画決定GISデータ（用途地域）APIレスポンスGeoJSON形式
 */
export type XKT002ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  properties: {
    /**
     * 用途地域分類
     */
    youto_id: string;

    /**
     * 都道府県名
     */
    prefecture: string;

    /**
     * 市区町村コード
     */
    city_code: string;

    /**
     * 市区町村名
     */
    city_name: string;

    /**
     * 区域設定年月日
     *
     * 最終告示日
     */
    decision_date: string;

    /**
     * 設定区分
     */
    decision_classification: string;

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
     * 用途地域名
     */
    use_area_ja: string;

    /**
     * 容積率
     */
    u_floor_area_ratio_ja: string;

    /**
     * 建蔽率
     */
    u_building_coverage_ratio_ja: string;

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
 * XKT002
 *
 * 都市計画決定GISデータ（用途地域）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT002ResponseDataPbf = ArrayBuffer;
