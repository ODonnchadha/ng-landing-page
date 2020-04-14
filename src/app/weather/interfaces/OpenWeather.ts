export default interface OpenWeather {
    list: {
        dt_txt: string,
        main: {
            temp: number;
        }
    }[]
}