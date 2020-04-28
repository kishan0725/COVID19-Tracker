import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import covid19 from './img/image.png';

class App extends React.Component {  
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
      const fetchedData = await fetchData();
      this.setState({data:fetchedData});
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country:country})

  }

  render() {
    const { data,country } = this.state;
    return (
      <div className={styles.container}>
        <img src={covid19} className={styles.image} alt="COVID-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange ={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <div className={styles.footer}>Made with<span className={styles.heart}> &hearts; </span>by Kishan</div>
      </div>
    );
  }
  }
  

export default App;
