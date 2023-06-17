import React, { useState } from "react";
import { firestore } from "../firebase_setup/firebase";
import { addDoc, collection } from "@firebase/firestore";
import "./medicalform.css";

const MedicalForm = () => {
  const ref = collection(firestore, "forms");
  const [Name, setName] = useState();
  const [Address, setAddress] = useState();
  const [HospitalName, setHospitalName] = useState();
  const [Date, setDate] = useState();
  const [Amount, setAmount] = useState();
  const [Image, setImage] = useState();
  const onImageChange = (e) => {
    setImage([...e.target.files]);
  };
  const handleSubmit = (e) => {
    console.log({ Name, Address, HospitalName, Date, Amount });
    addDoc(ref, {
      Name: Name,
      Address: Address,
      HospitalName: HospitalName,
      Date: Date,
      Amount: Amount,
    });
  };
  return (
    <>
      <h1 className="main">Medical Form</h1>
      <labeL className="labelTag">
        Patient Name
        <input
          className="inpField"
          label="PatientName"
          type="text"
          placeholder="Enter name of Patient"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </labeL>
      <label className="labelTag">
        Address
        <input
          className="inpField"
          label="Address"
          type="text"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </label>
      <label className="labelTag">
        Hospital Name
        <input
          className="inpField"
          label="HospitalName"
          type="text"
          onChange={(e) => {
            setHospitalName(e.target.value);
          }}
          placeholder="Enter name of Hospital"
        />
      </label>
      <label className="labelTag">
        Transaction Date
        <input
          className="inpField"
          label="Date"
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <label className="labelTag">
        Total Amount
        <input
          className="inpField"
          label="Amount"
          type="text"
          placeholder="Bill Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </label>
      <label className="labelTag">
        Upload Image
        <input
          className="inpField"
          label="image"
          type="file"
          placeholder="Image of Bill"
          onChange={onImageChange}
        />
      </label>

      <button className="submitBtn" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default MedicalForm;
