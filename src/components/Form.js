import React, { Component } from 'react';

class Form extends Component {
  onCalculateClicked = () => {};

  render() {
    const {
      monthlyPayment,
      totalPayment,
      totalInterest,
      isShowResults,
      errors,
      handleAmountInput,
      handleInterestInput,
      handleYearsInput,
      calculateResults
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body text-center mt-5">
              <h1 className="heading display-5 pb-3">Loan Calculator</h1>
              {errors === true && (
                <div className="alert alert-danger" role="alert">
                  Please check your numbers
                </div>
              )}
              <form id="loan-form">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      onChange={handleAmountInput}
                      type="number"
                      className="form-control"
                      id="amount"
                      placeholder="Loan Amount"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">%</span>
                    </div>
                    <input
                      onChange={handleInterestInput}
                      type="number"
                      className="form-control"
                      id="interest"
                      placeholder="Interest"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={handleYearsInput}
                      type="number"
                      className="form-control"
                      id="years"
                      placeholder="Years To Repay"
                    />
                  </div>
                  <input
                    onClick={calculateResults}
                    type="submit"
                    value="Calculate"
                    className="btn btn-primary btn-block"
                  />
                </div>
              </form>
              {isShowResults && (
                <div id="results" className="pt-4">
                  <h5>Results</h5>
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          Monthly Payment
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="monthly-payment"
                        value={monthlyPayment}
                        disabled
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Total Payment</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="total-payment"
                        value={totalPayment}
                        disabled
                      />
                    </div>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Total Interest</span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="total-interest"
                        value={totalInterest}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
