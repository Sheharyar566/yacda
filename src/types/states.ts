import { Global, CountriesEntity } from "./summaryResponse";

export interface DashboardState {
    Global: Global,
    Countries: CountriesEntity[],
    Date: string,
    loading: boolean
}