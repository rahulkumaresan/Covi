import React from 'react';
import {Cards,Chart,Country} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png'
class App extends React.Component{
    state = {
        data: {},
        country:'', 
    }
    async componentDidMount(){
        const fetcheddata=await fetchData();
        this.setState({data:fetcheddata})
    }
    handleCountryChange= async(country)=>{
        const fetcheddata=await fetchData(country)
        console.log(fetcheddata)
        console.log(country)
        this.setState({data:fetcheddata,country: country})
    }
    render(){
        const {data,country}=this.state
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='COVID-19'/>
               <Cards data={data} />
               <Country handleCountryChange={this.handleCountryChange}/>
               <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;