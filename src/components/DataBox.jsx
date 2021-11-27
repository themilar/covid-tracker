import tw from "twin.macro";
import styled from "styled-components";
const DataBox = function (props) {
  const { cases, stat } = props;
  return (
    <div className={props.className}>
      <div>
        <h3>{cases ? "Cases" : "Deaths"}</h3>
        <div>
          <span className="font-bold">New:</span>
          {numberWithCommas(cases ? stat.NewConfirmed : stat.NewDeaths)}
        </div>
        <div>
          <span className="font-bold">Total:</span>
          {numberWithCommas(cases ? stat.TotalConfirmed : stat.TotalDeaths)}
        </div>
      </div>
    </div>
  );
};
const numberWithCommas = (num) => {
  if (num) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const StyledDataBox = styled(DataBox).attrs((props) => ({
  className: `shadow-md ${
    props.cases ? "bg-blue-100" : "bg-blue-200"
  } p-10 text-center rounded`,
}))`
  & {
    h3 {
      ${tw`text-3xl text-blue-900 font-bold mb-4`}
    }
    div {
      ${tw`text-2xl mb-4`}
    }
  }
`;
export default StyledDataBox;

//   div {
//     ${tw`shadow-md p-10 text-center rounded`} ${(props) =>
// props.cases ? tw`bg-blue-100` : tw`bg-blue-200`} }
//   }
