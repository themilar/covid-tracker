import React, { Component } from "react";
export default class CountrySelect extends Component {
  state = {
    selected: 0,
  };

  render() {
    const { countries, onCountryChange } = this.props;
    return (
      <select
        onChange={onCountryChange}
        className="form-select mt-10 block w-full border p-3 rounded"
      >
        <option value={this.state.selected}>Select Country</option>
        {countries.map((country) => (
          <option value={country.ID} key={country.ID}>
            {country.Country}
          </option>
        ))}
      </select>
    );
  }
}
