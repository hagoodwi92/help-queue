import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import WarningPage1 from './WarningPage1';
import WarningPage2 from './WarningPage2';
import WarningPage3 from './WarningPage3';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this); //new code here
  }

  handleClick() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />; 
      buttonText = "Return to Ticket List"; 
    }
    else {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket"; // new code
    } 


    // if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = <NewTicketForm />; 
    //   buttonText = "Return to Ticket List"; 
    // }
    // else if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = <WarningPage1 />;
    //   buttonText = "Add Ticket"; // new code
    // } 
    // else {
    //   currentlyVisibleState = <TicketList />;
    //   buttonText = "Add Ticket"; // new code
    // } 

    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default TicketControl;