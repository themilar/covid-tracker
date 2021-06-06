import "./App.css";
import React, { Component } from "react";
import { Header, DataTitle, DataBoxes, CountrySelect } from "./components";
import moment from "moment";
import hourglass from "./assets/hourglass.gif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Global",
      loading: true,
      dataDate: "",
      stats: {},
      countries: [],
      error: null,
      selected: 0,
    };
    this.fetchCovData = this.fetchCovData.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  fetchCovData() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then(
        (result) =>
          this.setState({
            dataDate: result.Date,
            stats: result.Global,
            countries: result.Countries,
            loading: false,
          }),
        (error) => this.setState({ loading: false, error })
      );
  }
  handleCountryChange(e) {
    let selected = e.target.value;
    const country = this.state.countries.find((item) => item.ID === selected);
    if (country) {
      this.setState({
        title: country.Country,
        stats: country,
        selected: selected,
      });
    }
  }
  handleClick(e) {
    this.setState({ loading: true });
    this.fetchCovData();
    this.setState({ title: "Global", selected: "0" });
  }

  componentDidMount() {
    this.fetchCovData();
  }
  render() {
    const { title, dataDate, stats, countries } = this.state;
    const timestamp = () => moment(dataDate).format("MMMM Do YYYY, h:mm:ss a");
    return (
      <div className="App">
        <Header />
        {!this.state.loading ? (
          <main>
            <DataTitle text={title} dataDate={timestamp(dataDate)} />
            <DataBoxes stats={stats} />
            <select
              onChange={this.handleCountryChange}
              className="form-select mt-10 block w-full border p-3 rounded"
            >
              <option value="0">Select Country</option>
              {countries.map((country) => (
                <option value={country.ID} key={country.ID}>
                  {country.Country}
                </option>
              ))}
            </select>
            {stats.Country && (
              <button
                onClick={this.handleClick}
                className="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"
              >
                Clear Data
              </button>
            )}
          </main>
        ) : (
          <main className="flex flex-col align-center justify-center text-center">
            <div className="text-gray-500 text-3xl mt-10 mb-6">
              Fetching Data
            </div>
            <img src={hourglass} alt="loading" width="20" height="20" />
          </main>
        )}
      </div>
    );
  }
}
export default App;
