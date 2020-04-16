export default class RandomGenerator {
    static Id(): number {
        return Math.round(Math.random() * 10000);
    }
}