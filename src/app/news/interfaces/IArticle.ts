export default interface IArticle {
    totalResults: number,
    articles: {
        title: string,
        url: string
    }[]
}