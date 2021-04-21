import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm({ onAdd }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
    onAdd({
      fullName,
      idNumber,
      email,
      gender,
      document,
      documentsNumber,
      expiryDate,
    });
  };
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [document, setDocument] = useState("");
  const [documentsNumber, setDocumentsNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">PERSONAL DETAILS</label>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="input-group mb-3">
            <span className="input-group-text">Full Name</span>
            <input
              {...register("fullName", { required: true })}
              className="form-control"
              id="fullName"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div style={{ color: "red" }}>
            {errors.fullName && "Full name is required"}
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="input-group mb-3">
            <span className="input-group-text">ID Number</span>
            <input
              {...register("idNumber", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
              className="form-control"
              id="idNumber"
              type="number"
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>
          <div style={{ color: "red" }}>
            {errors.idNumber && "Identification number missing or not correct"}
          </div>
        </div>
      </div>
      <div className="col-md-12 mb-3">
        <div className="input-group mb-3">
          <span className="input-group-text">E-mail</span>
          <input
            {...register("email", { required: true })}
            className="form-control"
            id="fullName"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ color: "red" }}>
          {errors.fullName && "E-mail is required"}
        </div>
      </div>
      <div className="row container">
        <div className="form-check mb-3 col-md-2">
          <input
            {...register("gender", { required: true })}
            className="form-check-input"
            type="radio"
            value="male"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            id="genderRadioMale"
          />
          <label className="form-check-label" htmlFor="genderRadioMale">
            Male
          </label>
        </div>
        <div className="form-check mb-3 col-md-2">
          <input
            {...register("gender", { required: true })}
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
            id="genderRadioFemale"
          />
          <label className="form-check-label" htmlFor="genderRadioFemale">
            Female
          </label>
        </div>
        <div className="form-check mb-3 col-md-2">
          <input
            {...register("gender", { required: true })}
            className="form-check-input"
            type="radio"
            value="other"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            id="genderRadioOther"
          />
          <label className="form-check-label" htmlFor="genderRadioOther">
            Other
          </label>
        </div>
      </div>
      <div style={{ color: "red" }}>
        {errors.gender && "Gender has to be chosen"}
      </div>
      <div>
        <label className="form-label">DOCUMENTS</label>
        <div className="row">
          <div className="col-md-4 mb-3">
            <select
              {...register("document", { required: true })}
              label="document"
              name="document"
              onChange={(e) => setDocument(e.target.value)}
              className="form-select"
            >
              <option value="">Choose...</option>
              <option value="passport">PASSPORT</option>
              <option value="idCard">ID CARD</option>
              <option value="driversLicence">DRIVERS LICENCE</option>
            </select>
            <div style={{ color: "red" }}>
              {errors.document && "Documents has to be chosen"}
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <input
              {...register("documentsNumber", { required: true })}
              label="documentsNumber"
              name="documentsNumber"
              placeholder="Dokument's number"
              onChange={(e) => setDocumentsNumber(e.target.value)}
              type="text"
              className="form-control"
            />
            <div style={{ color: "red" }}>
              {errors.documentsNumber && "Document number is missing"}
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <input
              {...register("expiryDate", { valueAsDate: true })}
              label="expiryDate"
              name="expiryDate"
              placeholder="Expiry date"
              onChange={(e) => setExpiryDate(e.target.value)}
              type="date"
              className="form-control"
            />
            <div style={{ color: "red" }}>
              {errors.expiryDate && "Expiry date is missing"}
            </div>
          </div>
        </div>
      </div>

      <input type="submit" className="btn-outline-primary btn" />
    </form>
  );
}
