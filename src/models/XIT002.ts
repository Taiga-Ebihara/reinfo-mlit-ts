// XIT002
// 都道府県内市区町村一覧取得API
// https://www.reinfolib.mlit.go.jp/help/apiManual/#titleApi5

import { Language } from "./common";

/**
 * XIT002
 *
 * 都道府県内市区町村一覧取得APIリクエストパラメータ
 */
export type XIT002RequestParameters = {
  /**
   * 都道府県コード
   *
   * 形式はNN（数字2桁）\
   * NN…都道府県コード
   */
  area: string;

  /**
   * 出力結果の言語
   *
   * ja…日本語\
   * en…英語\
   * 未指定…日本
   */
  language?: Language;
};

/**
 * XIT002
 *
 * 都道府県内市区町村一覧取得APIレスポンスJSON形式
 */
export type XIT002ResponseData = {
  /**
   * 市区町村コード
   */
  id: string;

  /**
   * 市区町村名
   */
  name: string;
};
