import React, { Component } from 'react';
import Form from './Form';

class LoanCalculator extends Component {
  state = {
    amount: '',
    interest: '',
    years: '',
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: ''
  };

  handleAmountInput = e => {
    this.setState({ amount: e.target.value });
    console.log('Amount Input:', this.state.amount);
  };

  handleInterestInput = e => {
    this.setState({ interest: e.target.value });
    console.log('Interest Input:', this.state.amount);
  };

  handleYearsInput = e => {
    this.setState({ years: e.target.value });
    console.log('Years Input:', this.state.amount);
  };

  calculateResults = e => {
    e.preventDefault();
    const amount = this.state.amount;
    const interest = this.state.interest;
    const years = this.state.years;
    // const monthlyPayment = this.state.monthlyPayment;
    // const totalPayment = this.state.totalPayment;
    // const totalInterest = this.state.totalInterest;

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
