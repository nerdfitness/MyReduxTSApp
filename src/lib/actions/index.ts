import ActionsEnum from "./actionsEnum";

export function addArticle(payload) {
  return { type: ActionsEnum.add_article, payload };
}
