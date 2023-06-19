import { ChangeEvent, useState } from "react";
import "./credit-card-form.css";
import ValidationError from "./validation-error";

function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const visaRegex = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
  const masterCardRegex = new RegExp(
    "^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$"
  );
  let isLegit = true;
  let errorMsg: string = "";

  function inputCardNrChangeHandle(e: ChangeEvent<HTMLInputElement>): void {
    setCardNumber(e.target.value);
  }

  function inputCardNameChangeHandle(e: ChangeEvent<HTMLInputElement>): void {
    setCardName(e.target.value);
  }

  function inputCardCvvChangeHandle(e: ChangeEvent<HTMLInputElement>): void {
    setCardCvv(e.target.value);
  }

  function validateCard() {
    if (
      (cardNumber.match(visaRegex) || cardNumber.match(masterCardRegex)) &&
      cardName !== "" && cardCvv.length === 3
    ) {
      isLegit = true;
      errorMsg = "";
      alert("success");
      return;
    }

    errorMsg = "The card number is not valid or the name is empty";
    isLegit = false;
    alert(errorMsg);
  }

  function submitCard(): void {
    validateCard();
    // continue to submit to a service
  }

  const dom = (
    <div className="credit-form">
      <div className="inner-content">
        <div className="form-position">
          <label htmlFor="cardnr" className="label-style">
            Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardnr"
            placeholder="digits"
            value={cardNumber}
            onChange={inputCardNrChangeHandle}
          />
        </div>
        <div className="form-position">
          <label htmlFor="cardnr" className="label-style">
            Card Name
          </label>
          <input
            type="text"
            className="form-control"
            id="cardnr"
            value={cardName}
            onChange={inputCardNameChangeHandle}
          />
        </div>
        <div className="block-section">
          <div>
            <label htmlFor="expiration" className="label-style">
              expiration
            </label>
            <div className="row">
              <select name="month" id="expiration">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select name="year">
                <option value="1">2023</option>
                <option value="2">2022</option>
                <option value="3">2021</option>
              </select>
            </div>
          </div>
          <div className="row">
            <label htmlFor="cvv" className="label-style">
              cvv
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="cvv"
                value={cardCvv}
                onChange={inputCardCvvChangeHandle}
              />
            </div>
          </div>
        </div>
        {isLegit && errorMsg !== "" && <ValidationError errorMsg={errorMsg} />}
        <div className="submit-section">
          <button type="submit" className="btn" onClick={submitCard}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );

  return dom;
}

export default CreditCardForm;
