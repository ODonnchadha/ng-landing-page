import IArticle from './IArticle';

export default interface IResponse {
    totalResults: number,
    articles: IArticle[]
}