export default interface OpenWeather {
    list: {
        dt_text: string,
        main: {
            temp: number;
        }
    }[]
}