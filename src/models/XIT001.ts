// XIT001
// 不動産価格（取引価格・成約価格）情報取得API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi4

import { Language } from "./common";

/**
 * XIT001
 *
 * 不動産価格（取引価格・成約価格）情報取得APIリクエストパラメータ
 */
export type XIT001RequestParameters = {
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
   * 取引時期（年）
   *
   * 形式はYYYY（数字4桁）\
   * YYYY … 西暦\
   * ※2005（2005年は第3四半期と第4四半期のみ）より指定可能
   */
  year: string;

  /**
   * 取引時期（四半期）
   *
   * 形式はN（数字1桁）\
   * N … 1～4（1:1月～3月、2:4月～6月、3:7月～9月、4:10月～12月）
   */
  quarter?: string;

  /**
   * 都道府県コード
   *
   * 形式はNN（数字2桁）
   * NN … 都道府県コード
   * 都道府県コードの詳細は、「5. 都道府県内市区町村一覧取得API」の＜参考＞を参照。
   */
  area?: string;

  /**
   * 市区町村コード
   *
   * 形式はNNNNN（数字5桁）\
   * NNNNN … 全国地方公共団体コードの上5桁
   */
  city?: string;

  /**
   * 駅コード
   *
   * 形式はNNNNNN（数字6桁）\
   * NNNNNN … 駅コード\
   * 国土数値情報の駅データ（鉄道データの下位クラス）のグループコード（N02_005g）を指定します。
   *
   * https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N02-v3_1.html を参照。
   */
  station?: string;

  /**
   * 出力結果の言語
   *
   * ja…日本語\
   * en…英語\
   * 未指定…日本語
   */
  language?: Language;
};

/**
 * XIT001
 *
 * 不動産価格（取引価格・成約価格）情報取得APIレスポンスJSON形式
 */
export type XIT001ResponseData = {
  /**
   * 取引の種類
   */
  Type: string;

  /**
   * 地区
   */
  Region: string;

  /**
   * 市区町村コード
   */
  MunicipalityCode: string;

  /**
   * 都道府県名
   */
  Prefecture: string;

  /**
   * 市区町村名
   */
  Municipality: string;

  /**
   * 地区名
   */
  DistrictName: string;

  /**
   * 取引価格（総額）
   */
  TradePrice: string;

  /**
   * 坪単価
   */
  PricePerUnit: string;

  /**
   * 間取り
   */
  FloorPlan: string;

  /**
   * 面積（平方メートル）
   */
  Area: string;

  /**
   * 取引価格（平方メートル単価）
   */
  UnitPrice: string;

  /**
   * 土地の形状
   */
  LandShape: string;

  /**
   * 間口
   */
  Frontage: string;

  /**
   * 延床面積（平方メートル）
   */
  TotalFloorArea: string;

  /**
   * 建築年
   */
  BuildingYear: string;

  /**
   * 建物の構造
   */
  Structure: string;

  /**
   * 用途
   */
  Use: string;

  /**
   * 今後の利用目的
   */
  Purpose: string;

  /**
   * 前面道路：方位
   */
  Direction: string;

  /**
   * 前面道路：種類
   */
  Classification: string;

  /**
   * 前面道路：幅員（m）
   */
  Breadth: string;

  /**
   * 都市計画
   */
  CityPlanning: string;

  /**
   * 建蔽率（%）
   */
  CoverageRatio: string;

  /**
   * 容積率（%）
   */
  FloorAreaRatio: string;

  /**
   * 取引時点
   */
  Period: string;

  /**
   * 改装
   */
  Renovation: string;

  /**
   * 取引の事情等
   */
  Remarks: string;
};
