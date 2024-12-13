// XPT001
// 不動産価格（取引価格・成約価格）情報のポイント (点) API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi7

import { GeoResponseFormat } from "./common";

/**
 * XPT001
 *
 * 不動産価格（取引価格・成約価格）情報のポイント (点) APIリクエストパラメータ
 */
export type XPT001RequestParameters = {
  /**
   * 応答形式
   *
   * 応答形式（GeoJSON応答／バイナリベクトルタイル応答）を設定\
   * geojson…GeoJSON応答\
   * pbf…バイナリベクトルタイル応答
   */
  response_format: GeoResponseFormat;

  /**
   * ズームレベル（縮尺）
   *
   * XYZ方式における、ズームレベル（縮尺）を指定。\
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
   * 取引時期From
   *
   * 形式はYYYYN（数字5桁）\
   * YYYY … 西暦\
   * N … 1～4（1:1月～3月、2:4月～6月、3:7月～9月、4:10月～12月）\
   * ※20053（平成17年第３四半期）より指定可能
   */
  from?: string;

  /**
   * 取引時期To
   *
   * 形式はYYYYN（数字5桁）\
   * YYYY … 西暦\
   * N … 1～4（1:1月～3月、2:4月～6月、3:7月～9月、4:10月～12月）\
   * ※20053（平成17年第３四半期）より指定可能
   */
  to?: string;

  /**
   * 価格情報区分コード
   *
   * 形式はNN（数字2桁）\
   * 01 … 不動産取引価格情報のみ\
   * 02 … 成約価格情報のみ\
   * 未指定 … 不動産取引価格情報と成約価格情報の両方
   */
  priceClassification?: string;

  /**
   * 種類コード
   *
   * 形式はNN（数字2桁）\
   * 01 … 宅地（土地）\
   * 02 … 宅地（土地と建物）\
   * 07 … 中古マンション等\
   * 10 … 農地\
   * 11 … 林地\
   * 未指定 … すべて\
   * ※複数指定する場合は、「landTypeCode=01,02,07」のようにカンマ区切りで指定してください。
   */
  landTypeCode?: string;
};

/**
 * XPT001
 *
 * 不動産価格（取引価格・成約価格）情報のポイント (点) APIレスポンスGeoJSON形式
 */
export type XPT001ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 価格情報区分
     */
    price_information_cagegory_name_ja: string;

    /**
     * 地区コード
     */
    district_code: string;

    /**
     * 市区町村コード
     */
    city_code: string;

    /**
     * 都道府県名
     */
    prefecture_name_ja: string;

    /**
     * 市区町村名
     */
    city_name_ja: string;

    /**
     * 地区名
     */
    district_name_ja: string;

    /**
     * 取引価格（総額）
     */
    u_transaction_price_total_ja: string;

    /**
     * 坪単価
     */
    u_unit_price_per_tsubo_ja: string;

    /**
     * 間取り
     */
    floor_plan_name_ja: string;

    /**
     * 面積
     */
    u_area_ja: string;

    /**
     * 取引価格（平方メートル単価）
     */
    u_transaction_price_unit_price_square_meter_ja: string;

    /**
     * 土地の形状
     */
    land_shape_name_ja: string;

    /**
     * 間口
     */
    u_land_frontage_ja: string;

    /**
     * 建物の延床面積
     */
    u_building_total_floor_area_ja: string;

    /**
     * 建築年
     */
    u_construction_year_ja: string;

    /**
     * 建物の構造
     */
    building_structure_name_ja: string;

    /**
     * 用途地域
     */
    land_use_name_ja: string;

    /**
     * 今後の利用目的
     */
    future_use_purpose_name_ja: string;

    /**
     * 前面道路の方位
     */
    front_road_azimuth_name_ja: string;

    /**
     * 前面道路の種類
     */
    front_road_type_name_ja: string;

    /**
     * 前面道路の幅員
     */
    u_front_road_width_ja: string;

    /**
     * 建蔽率
     */
    u_building_coverage_ratio_ja: string;

    /**
     * 容積率
     */
    u_floor_area_ratio_ja: string;

    /**
     * 取引時点
     */
    point_in_time_name_ja: string;

    /**
     * 改装
     */
    remark_renovation_name_ja: string;

    /**
     * 取引の事情等
     */
    transaction_contents_name_ja: string;
  };
};

/**
 * XPT001
 *
 * 不動産価格（取引価格・成約価格）情報のポイント (点) APIレスポンスバイナリベクトルタイル形式
 */
export type XPT001ResponseDataPbf = ArrayBuffer;
