// XKT013
// 国土数値情報（将来推計人口500mメッシュ）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi18

import { GeoResponseFormat } from "./common";

/**
 * XKT013
 *
 * 国土数値情報（将来推計人口500mメッシュ）APIリクエストパラメータ
 */
export type XKT013RequestParameters = {
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
 * XKT013
 *
 * 国土数値情報（将来推計人口500mメッシュ）APIレスポンスGeoJSON形式
 */
export type XKT013ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
  properties: {
    /**
     * 分割地域メッシュコード
     */
    MESH_ID: string;

    /**
     * 行政区域コード
     */
    SHICODE: string;

    /**
     * 20XX年男女計総数人口（秘匿なし）
     */
    PTN_20XX: number;

    /**
     * 20XX年秘匿記号
     */
    HITOKU_20XX: string;

    /**
     * 20XX年合算先メッシュ
     */
    GASSAN_20XX: string;

    /**
     * 20XX年男女計総数人口
     */
    PT0_20XX: number;

    /**
     * 20XX年男女計0～4歳人口
     */
    PT1_20XX: number;

    /**
     * 20XX年男女計5～9歳人口
     */
    PT2_20XX: number;

    /**
     * 20XX年男女計10～14歳人口
     */
    PT3_20XX: number;

    /**
     * 20XX年男女計15～19歳人口
     */
    PT4_20XX: number;

    /**
     * 20XX年男女計20～24歳人口
     */
    PT5_20XX: number;

    /**
     * 20XX年男女計25～29歳人口
     */
    PT6_20XX: number;

    /**
     * 20XX年男女計30～34歳人口
     */
    PT7_20XX: number;

    /**
     * 20XX年男女計35～39歳人口
     */
    PT8_20XX: number;

    /**
     * 20XX年男女計40～44歳人口
     */
    PT9_20XX: number;

    /**
     * 20XX年男女計45～49歳人口
     */
    PT10_20XX: number;

    /**
     * 20XX年男女計50～54歳人口
     */
    PT11_20XX: number;

    /**
     * 20XX年男女計55～59歳人口
     */
    PT12_20XX: number;

    /**
     * 20XX年男女計60～64歳人口
     */
    PT13_20XX: number;

    /**
     * 20XX年男女計65～69歳人口
     */
    PT14_20XX: number;

    /**
     * 20XX年男女計70～74歳人口
     */
    PT15_20XX: number;

    /**
     * 20XX年男女計75～79歳人口
     */
    PT16_20XX: number;

    /**
     * 20XX年男女計80～84歳人口
     */
    PT17_20XX: number;

    /**
     * 20XX年男女計85～89歳人口
     */
    PT18_20XX: number;

    /**
     * 20XX年男女計90歳以上人口
     */
    PT19_20XX: number;

    /**
     * 20XX年男女計0～14歳人口
     */
    PTA_20XX: number;

    /**
     * 20XX年男女計15～64歳人口
     */
    PTB_20XX: number;

    /**
     * 20XX年男女計65歳以上人口
     */
    PTC_20XX: number;

    /**
     * 20XX年男女計75歳以上人口
     */
    PTD_20XX: number;

    /**
     * 20XX年男女計80歳以上人口
     */
    PTE_20XX: number;

    /**
     * 20XX年男女計0～14歳人口比率
     */
    RTA_20XX: number;

    /**
     * 20XX年男女計15～64歳人口比率
     */
    RTB_20XX: number;

    /**
     * 20XX年男女計65歳以上人口比率
     */
    RTC_20XX: number;

    /**
     * 20XX年男女計75歳以上人口比率
     */
    RTD_20XX: number;

    /**
     * 20XX年男女計80歳以上人口比率
     */
    RTE_20XX: number;
  };
};

/**
 * XKT013
 *
 * 国土数値情報（将来推計人口500mメッシュ）APIレスポンスバイナリベクトルタイル形式
 */
export type XKT013ResponseDataPbf = ArrayBuffer;
