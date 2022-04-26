import PropTypes from "prop-types";

const data = [
  { image: "/wwwe", price: 2000 },
  { image: "/zx", price: 2000 },
  { image: "/z100", price: 2000 },
  { image: "/wave10", price: 2000 },
];
const TestCom = (props) => {
  // หรือ const TestCom = ({imagePath, price}) =>
  const { imagePath, price } = props;

  return (
    <div>
      <li>
        {data[0].image} <span>{data[0].price}</span>
      </li>
      <li>
        {imagePath} <span>{price}</span>
      </li>
    </div>
  );
};

TestCom.prototype = {
  // ตรวจสอบ type
  imagePath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default TestCom;
