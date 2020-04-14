export default interface IOpenWeather {
    list: {
        dt_txt: string,
        main: {
            temp: number;
        }
    }[]
}