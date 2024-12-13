// XPT002
// 地価公示・地価調査のポイント（点）API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi8

import { GeoResponseFormat } from "./common";

/**
 * XPT002
 *
 * 地価公示・地価調査のポイント（点）APIリクエストパラメータ
 */
export type XPT002RequestParameters = {
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
   * 対象年
   *
   * 形式はNNNN（数字4桁）\
   * 1970～最新年（システム一般公開時点では2024）で一つのみ指定可能です。
   */
  year: string;

  /**
   * 地価情報区分コード
   *
   * 形式はN（数字1桁）\
   * 0 … 国土交通省地価公示のみ\
   * 1 … 都道府県地価調査のみ\
   * 未指定 … 国土交通省地価公示と都道府県地価調査の両方
   */
  priceClassification?: string;

  /**
   * 用途区分コード
   *
   * 形式はNN（数字2桁）\
   * 00 … 住宅地\
   * 03 … 宅地見込地\
   * 05 … 商業地\
   * 07 … 準工業地\
   * 09 … 工業地\
   * 10 … 市街地調整区域内の現況宅地\
   * 13 … 市街地調整区域内の現況林地（国土交通省地価公示のみ）\
   * 20 … 林地（都道府県地価調査のみ）\
   * 未指定 … すべて
   */
  useCategoryCode?: string;
};

/**
 * XPT002
 *
 * 地価公示・地価調査のポイント（点）APIレスポンスGeoJSON形式
 */
export type XPT002ResponseDataGeoJson = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    /**
     * 地点ID
     */
    point_id: string;

    /**
     * 対象年
     */
    target_year_name_ja: string;

    /**
     * 地価区分
     */
    land_price_type: string;

    /**
     * 重複フラグ
     */
    duplication_flag: string;

    /**
     * 都道府県コード
     */
    prefecture_code: string;

    /**
     * 都道府県名
     */
    prefecture_name_ja: string;

    /**
     * 市区町村コード
     */
    city_code: string;

    /**
     * 用途区分名
     */
    use_category_name_ja: string;

    /**
     * 標準地/基準地番号
     */
    standard_lot_number_ja: string;

    /**
     * 市郡名
     */
    city_county_name_ja: string;

    /**
     * 区町村名
     */
    ward_town_village_name_ja: string;

    /**
     * 地名
     */
    place_name_ja: string;

    /**
     * 住居表示
     */
    residence_display_name_ja: string;

    /**
     * 所在及び地番
     */
    location_number_ja: string;

    /**
     * 当年価格
     */
    u_current_years_price_ja: string;

    /**
     * 前年価格
     */
    last_years_price: string;

    /**
     * 対前年変動率
     */
    year_on_year_change_rate: string;

    /**
     * 地積
     */
    u_cadastral_ja: string;

    /**
     * 間口比率
     */
    frontage_ratio: string;

    /**
     * 奥行き比率
     */
    depth_ratio: string;

    /**
     * 構造
     */
    building_structure_name_ja: string;

    /**
     * 地上階層
     */
    u_ground_hierarchy_ja: string;

    /**
     * 地下階層
     */
    u_underground_hierarchy_ja: string;

    /**
     * 前面道路区分
     */
    front_road_name_ja: string;

    /**
     * 前面道路の方位区分
     */
    front_road_azimuth_name_ja: string;

    /**
     * 前面道路の幅員
     */
    front_road_width: string;

    /**
     * 前面道路の舗装状況
     */
    front_road_pavement_condition: string;

    /**
     * 側道の方位区分
     */
    side_road_azimuth_name_ja: string;

    /**
     * 側道区分
     */
    side_road_name_ja: string;

    /**
     * ガスの有無
     */
    gas_supply_availability: string;

    /**
     * 水道の有無
     */
    water_supply_availability: string;

    /**
     * 下水道の有無
     */
    sewer_supply_availability: string;

    /**
     * 最寄り駅名
     */
    nearest_station_name_ja: string;

    /**
     * 交通施設との近接区分
     */
    proximity_to_transportation_facilities: string;

    /**
     * 最寄り駅までの道路距離
     */
    u_road_distance_to_nearest_station_name_ja: string;

    /**
     * 利用現況
     */
    usage_status_name_ja: string;

    /**
     * 周辺の土地の利用現況
     */
    current_usage_status_of_surrounding_land_name_ja: string;

    /**
     * 区域区分
     */
    area_division_name_ja: string;

    /**
     * 法規制・用途区分
     */
    regulations_use_category_name_ja: string;

    /**
     * 法規制・高度地区
     */
    regulations_altitude_district_name_ja: string;

    /**
     * 法規制・防火・準防火
     */
    regulations_fireproof_name_ja: string;

    /**
     * 法規制・建蔽率
     */
    u_regulations_building_coverage_ratio_ja: string;

    /**
     * 法規制・容積率
     */
    u_regulations_floor_area_ratio_ja: string;

    /**
     * 法規制・森林法
     */
    regulations_forest_law_name_ja: string;

    /**
     * 法規制・公園法
     */
    regulations_park_law_name_ja: string;

    /**
     * 休止フラグ
     */
    pause_flag: string;

    /**
     * 利用区分名
     */
    usage_category_name_ja: string;

    /**
     * 所在及び地番
     */
    location: string;

    /**
     * 形状（間口：奥行き）
     */
    shape: string;

    /**
     * 前面道路の状況
     */
    front_road_condition: string;

    /**
     * その他の接面道路
     */
    side_road_condition: string;

    /**
     * 森林法、公園法、自然環境等
     */
    park_forest_law: string;
  };
};

/**
 * XPT002
 *
 * 地価公示・地価調査のポイント（点）APIレスポンスバイナリベクトルタイル形式
 */
export type XPT002ResponseDataPbf = ArrayBuffer;
