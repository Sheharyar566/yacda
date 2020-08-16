import React, { Component } from 'react';
import 'components/dashboard/Dashboard.scss';
import DataCard from 'components/dashboard/DataCard';
import LiveMap from 'components/dashboard/LiveMap';
import ExtrasCard from './ExtrasCard';
import RecoveryRate from './RecoveryRate';
import LiveReport from './LiveReport';
import { getData } from 'misc/functions';
import { CovidData } from 'types/summaryResponse';
import { DashboardState } from 'types/states';

class Dashboard extends Component {
    state: DashboardState = {
        Global: {
            TotalRecovered: 0,
            TotalDeaths: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0,
            NewConfirmed: 0
        },
        Date: '',
        Countries: [],
        loading: true
    }

    componentDidMount() {
        console.log('effect called!');
        getData().then(res => {
            this.setState({
                Global: res.data.Global,
                Countries: res.data.Countries,
                Date: res.data.Date
            }, this.setLoadingState);
        }).catch(e => {
            console.log(e);
        });
    }

    setLoadingState = () => {
        this.setState({
            Loading: false
        });
    }

    render() {
        const { Global, Countries, loading } = this.state;
    
        return <div className="dashboard">
            <>
                <DataCard value={ Global.TotalConfirmed } text="Total Cases" />
                <DataCard value={ Global.TotalRecovered } text="Recovered" />
                <DataCard value={ Global.TotalConfirmed - (Global.TotalRecovered + Global.TotalDeaths )} text="Active Cases" />
                <DataCard value={ Global.TotalDeaths } text="Total Deaths" />
            </>
    
            <LiveMap />
    
            <>
                <ExtrasCard card="Updates" />
                <ExtrasCard card="Donate" />
            </>
    
            <RecoveryRate totalCases={ Global.TotalConfirmed } totalRecovered={ Global.TotalRecovered } />
            <LiveReport />
        </div>;
    }
}

export default Dashboard;