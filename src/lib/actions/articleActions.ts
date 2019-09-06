import ActionsEnum from "./actionsEnum";

export function addArticle(payload: any) {
  return { type: ActionsEnum.add_article, payload };
}
