import axios, { AxiosResponse } from 'axios';

export const getData: () => Promise<AxiosResponse> = () => (
    axios.get('https://api.covid19api.com/summary')
);

export const formatNumber: (num: number) => string = (num) => (
    num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
);