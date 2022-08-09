import axios from 'axios';

const url='https://covid19.mathdro.id/api';
const url2='https://covid19.mathdro.id/api/daily';
const url3='https://covid19.mathdro.id/api/countries';
export const fetchData = async (country) => {
    let changeableUrl=url
    if (country){
        changeableUrl=url+'/countries/'+country
    }
try{ 
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
    return { confirmed,recovered, deaths,lastUpdate,}
}
catch(error){

}

}

export const fetchDailyData = async ()=>{
    try{
        const {data} = await axios.get(url2)
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData
    }
    catch(error){
        console.log(error);
    }
}

export const fetchCountries = async()=>{
    try{
        const {data:{countries}} =await axios.get(url3)
        const retval=countries.map((country)=>country.name)
        return retval
    } catch(error){
        console.log(error);
    }
}