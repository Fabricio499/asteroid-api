import express from "express";
import moment from "moment";
import axios from 'axios';

export const Welcome = async (req: express.Request, res: express.Response) => {
    return res.status(200).json({report: 'These APIs is enabled.' ,status: '🟢'}) 
} 

export const NearbyAsteroids = async (req: express.Request, res: express.Response) => {
    const startDate = moment().format('YYYY-MM-DD');
    const finalDate = moment().add(0, 'days').format('YYYY-MM-DD');
    try {
        const r = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${finalDate}&api_key=MiwrpIC24l1AcpllNoc4xcxnsBALD18dvWJmnrqE`)
        return res.status(200).json(r.data.near_earth_objects)
    } catch (error: any) {
        return res.status(500).json({report: 'neabyAsteroids error ~ line 9 ❌', error: error})
    }
}

