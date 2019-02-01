import React, { Component } from 'react';
import Form from './Form';

class LoanCalculator extends Component {
  state = {
    amount: '',
    interest: '',
    years: '',
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
    isShowResults: false,
    errors: false
  };

  handleAmountInput = e => {
    this.setState({ amount: e.target.value });
  };

  handleInterestInput = e => {
    this.setState({ interest: e.target.value });
  };

  handleYearsInput = e => {
    this.setState({ years: e.target.value });
  };

  calculateResults = e => {
    e.preventDefault();
    const amount = this.state.amount;
    const interest = this.state.interest;
    const years = this.state.years;

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const debt = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * debt * calculatedInterest) / (debt - 1);

    if (isFinite(monthly)) {
      this.setState({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: (monthly * calculatedPayments).toFixed(2),
        totalInterest: (monthly * calculatedPayments - principal).toFixed(2)
      });
    }
    if (amount === '' || interest === '' || years === '') {
      this.setState({ errors: true });
      setTimeout(() => {
        this.setState({ errors: false });
      }, 3000);
    } else {
      this.setState({ isShowResults: true });
    }
  };

  render() {
    return (
      <div>
        <Form
          amount={this.state.amount}
          interest={this.state.interest}
          years={this.state.years}
          monthlyPayment={this.state.monthlyPayment}
          totalPayment={this.state.totalPayment}
          totalInterest={this.state.totalInterest}
          isShowResults={this.state.isShowResults}
          errors={this.state.errors}
          handleAmountInput={this.handleAmountInput}
          handleInterestInput={this.handleInterestInput}
          handleYearsInput={this.handleYearsInput}
          calculateResults={this.calculateResults}
        />
      </div>
    );
  }
}

export default LoanCalculator;
