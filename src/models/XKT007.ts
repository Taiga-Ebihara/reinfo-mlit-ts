// XKT007
// 国土数値情報（保育園・幼稚園等）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi15

import { GeoResponseFormat } from "./common";

/**
 * XKT007
 *
 * 国土数値情報（保育園・幼稚園等）APIリクエストパラメータ
 */
export type XKT007RequestParameters = {
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
 * XKT007
 *
 * 国土数値情報（保育園・幼稚園等）APIレスポンスGeoJSON形式（幼稚園・こども園）
 */
export type XKT007ResponseDataGeoJsonKindergarten = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 行政区域コード
     */
    administrativeAreaCode: string;

    /**
     * 名称
     */
    preSchoolName_ja: string;

    /**
     * 学校コード
     */
    schoolCode: string;

    /**
     * 学校分類コード
     */
    schoolClassCode: string;

    /**
     * 学校分類名
     */
    schoolClassCode_name_ja: string;

    /**
     * 所在地
     */
    location_ja: string;

    /**
     * 管理者コード
     */
    administratorCode: string;

    /**
     * 休校コード
     */
    closeSchoolCode: string;
  };
};

/**
 * XKT007
 *
 * 国土数値情報（保育園・幼稚園等）APIレスポンスGeoJSON形式（保育園）
 */
export type XKT007ResponseDataGeoJsonNursery = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 行政区域コード
     */
    administrativeAreaCode: string;

    /**
     * 名称
     */
    preSchoolName_ja: string;

    /**
     * 福祉施設大分類コード
     */
    welfareFacilityClassCode: string;

    /**
     * 福祉施設中分類コード
     */
    welfareFacilityMiddleClassCode: string;

    /**
     * 福祉施設小分類コード
     */
    welfareFacilityMinorClassCode: string;

    /**
     * 所在地
     */
    location_ja: string;

    /**
     * 管理者コード
     */
    administratorCode: string;
  };
};

/**
 * XKT007
 *
 * 国土数値情報（保育園・幼稚園等）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT007ResponseDataPbf = ArrayBuffer;
