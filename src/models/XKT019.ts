// XKT019
// 国土数値情報（自然公園地域）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi24

import { GeoResponseFormat } from "./common";

/**
 * XKT019
 *
 * 国土数値情報（自然公園地域）APIリクエストパラメータ
 */
export type XKT019RequestParameters = {
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
   * 9（都道府県）～15（詳細）で指定可能であり、値が大きいほどズームレベルは高くなります（カバーする地理的領域は狭くなります）。
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
   * 形式はN（数字1桁）またはNN（数字2桁）
   * 1（北海道）～47（沖縄県）で指定可能です。
   * ※複数指定する場合は、「prefectureCode=13,14」のようにカンマ区切りで指定してください。
   */
  prefectureCode?: string;

  /**
   * 地区コード
   *
   * 振興局区域を一意に識別するためのコードです。形式はN（数字1桁）またはNN（数字2桁）です。
   * ※複数指定する場合は、「districtCode=9,10」のようにカンマ区切りで指定してください。
   *
   * https://nlftp.mlit.go.jp/ksj/gml/codelist/SubprefectureNameCd.html において、1桁目が0のものについては、0を取り除いた値で指定してください。
   */
  districtCode?: string;
};

/**
 * XKT019
 *
 * 国土数値情報（自然公園地域）APIレスポンスGeoJSON形式
 */
export type XKT019ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  properties: {
    /**
     * シェープID
     */
    OBJECTID: string;

    /**
     * 都道府県コード
     */
    PREFEC_CD: string;

    /**
     * 地区コード
     */
    AREA_CD: string;

    /**
     * 市町村名
     */
    CTV_NAME: string;

    /**
     * 年度
     */
    FIS_YEAR: string;

    /**
     * 主題番号
     */
    THEMA_NO: string;

    /**
     * レイヤ番号
     */
    LAYER_NO: string;

    /**
     * ポリゴン面積(ha)
     */
    AREA_SIZE: string;

    /**
     * 内外区分
     */
    IOSIDE_DIV: string;

    /**
     * 備考
     */
    REMARK_STR: string;

    /**
     * シェープの長さ
     */
    Shape_Leng: string;

    /**
     * シェープの面積
     */
    Shape_Area: string;

    /**
     * シェープ名
     */
    OBJ_NAME_ja: string;
  };
};

/**
 * XKT019
 *
 * 国土数値情報（自然公園地域）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT019ResponseDataPbf = ArrayBuffer;
