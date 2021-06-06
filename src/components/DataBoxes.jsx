const DataBoxes = ({ stats }) => {
  const numberWithCommas = (num) => {
    if (num) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    // box 1
    <div className="grid md:grid-cols-2 gap-4">
      <div className="shadow-md bg-blue-100 p-10 text-center rounded">
        <h3 className="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
        <div className="text-2xl mb-4">
          <span className="font-bold">New:</span>
          {numberWithCommas(stats.NewConfirmed)}
        </div>
        <div>
          <span className="font-bold">Total:</span>
          {numberWithCommas(stats.TotalConfirmed)}
        </div>
      </div>
      {/* box 2 */}
      <div className="shadow-md bg-blue-200 p-10 text-center rounded">
        <h3 className="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>
        <div className="text-2xl mb-4">
          <span className="font-">New:</span>
          {numberWithCommas(stats.NewDeaths)}
        </div>
        <div>
          <span className="font-">Total:</span>
          {numberWithCommas(stats.TotalDeaths)}
        </div>
      </div>
    </div>
  );
};
export default DataBoxes;
