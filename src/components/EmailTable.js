import React from "react";
import "./components.css";

export default props => {
  const { emailsList, ranksList, hasSent } = props;
  const getRank = rankId => {
    let reviewsLeftToUprank = "";
    ranksList.forEach(rank => {
      if (rank[0] === rankId) {
        reviewsLeftToUprank = rank[1];
      }
    });
    return reviewsLeftToUprank;
  };
  const getMessage = element => {
    let message = "";
    if (element[5]) {
      message = "กำลังส่ง";
      return message;
    }
    if (hasSent) {
      if (element[5]) {
        message = "กำลังส่ง";
      } else {
        if (element[4]) {
          message = "ส่งสำเร็จ";
        } else {
          message = "ส่งล้มเหลว";
        }
      }
    } else {
      message = "รอส่ง";
    }
    return message;
  };

  const getColor = element => {
    let color = "";
    if (element[5]) {
      color = "blue";
      return color;
    }
    if (hasSent) {
      if (element[5]) {
        color = "blue";
      } else {
        if (element[4]) {
          color = "green";
        } else {
          color = "red";
        }
      }
    } else {
      color = "black";
    }
    return color;
  };

  return (
    <div className="emailtable-centerdiv">
      <table className="emailtable-table">
        <thead>
          <tr>
            <td>อีเมล</td>
            <td>ข้อความ</td>
            <td>สถานะ</td>
          </tr>
        </thead>
        <tbody>
          {emailsList.map((element, index) => (
            <tr key={index}>
              <td>{element[0]}</td>
              <td>
                สวัสดี คุณ {element[1]}
                <br /> อีก {element[3]} รีวิว คุณจะได้เป็น{" "}
                {`${getRank(element[2])} `}
                ร่วมแบ่งปันรีวิวกับเพื่อนสมาชิกกันนะคะ
              </td>
              <td>
                <label style={{color: getColor(element)}}>{getMessage(element)}</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
