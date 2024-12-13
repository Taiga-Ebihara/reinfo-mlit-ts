// XKT020
// 国土数値情報（大規模盛土造成地マップ）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi25

import { GeoResponseFormat } from "./common";

/**
 * XKT020
 *
 * 国土数値情報（大規模盛土造成地マップ）APIリクエストパラメータ
 */
export type XKT020RequestParameters = {
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
 * XKT020
 *
 * 国土数値情報（大規模盛土造成地マップ）APIレスポンスGeoJSON形式
 */
export type XKT020ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  properties: {
    /**
     * 盛土区分
     */
    embankment_classification: string;

    /**
     * 都道府県コード
     */
    prefecture_code: string;

    /**
     * 都道府県名
     */
    prefecture_name: string;

    /**
     * 市区町村コード
     */
    city_code: string;

    /**
     * 市区町村名
     */
    city_name: string;

    /**
     * 盛土番号
     */
    embankment_number: string;
  };
};

/**
 * XKT020
 *
 * 国土数値情報（大規模盛土造成地マップ）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT020ResponseDataPbf = ArrayBuffer;
