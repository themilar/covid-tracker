import React, { Component } from "react";
export default class CountrySelect extends Component {
  state = {
    selected: 0,
  };

  render() {
    const { countries, changeCountry } = this.props;
    return (
      <select
        onChange={() => changeCountry()}
        className="form-select mt-10 block w-full border p-3 rounded"
      >
        <option value="0">Select Country</option>
        {countries.map((country) => (
          <option key={country.ID}>{country.Country}</option>
        ))}
      </select>
    );
  }
}
