import React, { useEffect, useState } from "react";
import { firestore } from "../firebase_setup/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { GlobalStateContext } from "../index";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "./showbills.css";
const ShowBills = (props) => {
  const { globalState, setGlobalState } = React.useContext(GlobalStateContext);
  const updateState = (newValue) => {
    setGlobalState((prevState) => ({
      ...prevState,
      qData: newValue,
    }));
  };
  const storage = getStorage();
  const [imageID, setImageID] = useState();
  useEffect(() => {
    const func = async () => {
      const data = collection(firestore, "forms");
      const q = query(data, where("uid", "==", props.uid));
      const querySnapshot = await getDocs(q);
      const qData = [];
      querySnapshot.forEach((doc) => {
        // console.log(typeof doc.data()['url']);

        let newDoc = doc.data();
        newDoc.id = doc.id;
        console.log(newDoc);
        qData.push(newDoc);
      });
      for (let i = 0; i < qData.length; i++) {
        const url = await getDownloadURL(ref(storage, qData[i].id));
        qData[i].url = url;
      }
      updateState(qData);
    };
    func();
  }, []);

  return (
    <>
      {/* <div>{globalState.qData && globalState.qData[1].Address}</div> */}
      <div className="billTable">
        <table className="container">
          <thead className="head">
            <tr className="row">
              <th>Name</th>
              <th>Address</th>
              <th>Hospital Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Bill Snapshot</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {globalState.qData ? (
              globalState.qData.map((val, i) => (
                <tr>
                  <td>{val.Name}</td>
                  <td>{val.Address}</td>
                  <td>{val.HospitalName}</td>
                  <td>{val.Date}</td>
                  <td>{val.Amount}</td>
                  <td>
                    <a href={val.url} target="_blank">
                      <img src={val.url}></img>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowBills;
