import TestCom from "../components/TestCom";
import { v4 as uuidv4 } from "uuid";
import "./TestPage.css";

export const TestPage = () => {
  const design = { color: "red", textAlign: "center" };
  const data = [
    { imagePath: "/test1", price: "3000" },
    { imagePath: "/test2", price: 6000 },
    { imagePath: "/test3", price: 2000 },
  ];
  return (
    <div className="page">
      <div>
        <h1 style={design}> Test Variable</h1>
        <ul className="item-list">
          {data.map((element) => {
            return (
              // <TestCom
              //   imagePath={element.imagePath}
              //   price={element.price}
              //   key={uuidv4()}
              // />
              <TestCom {...element} key={uuidv4()} /> // กรณีชื่อข้อมูลที่ใช้กับ propoty เหมือนกัน (imagePath,price)
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default TestPage;
