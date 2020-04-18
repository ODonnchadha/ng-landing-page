export default class PaginationCalculator {
    static Pages(pageSize: number, totalResults: number): number {
        return Math.ceil(totalResults/pageSize);
    }
}