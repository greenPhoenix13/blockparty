import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {margin:12}

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address:null,
      name:null,
      accounts:[]
    };

    this.props.getAccounts(accounts => {
      this.state = {
        address:accounts[0],
        accounts:accounts,
        name:null
      };
    })
  }

  handleAction(actionName) {
    this.setState({
      name: null,
    });
    this.props.action(actionName, this.state.address.trim(), this.state.name)
  }

  handleSelect(event,index,value){
    this.setState({
      address: value,
    });
  }

  handleName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <Paper zDepth={1}>
        <form>
          <TextField
            hintText="@twitter_handle"
            floatingLabelText="Twitter handle"
            floatingLabelFixed={true}
            value={this.state.name}
            onChange={this.handleName.bind(this)}
            style={{margin:'0 5px'}}
          />
          <SelectField
            value={this.state.address}
            onChange={this.handleSelect.bind(this)}
            floatingLabelText="Account address"
            floatingLabelFixed={true}
            style={{width:'25em', verticalAlign:'top', margin:'0 5px'}}
            >
            {
              this.state.accounts.map(account => {
                return (<MenuItem value={account} primaryText={account} />)
              })
            }
          </SelectField>

          <RaisedButton secondary={true}
            label="Register" style={styles}
            onClick={this.handleAction.bind(this, 'register')}
          />
          <RaisedButton secondary={true}
            label="Attend" style={styles}
            onClick={this.handleAction.bind(this, 'attend')}
          />
          <RaisedButton secondary={true}
            label="Payback" style={styles}
            onClick={this.handleAction.bind(this, 'payback')}
          />
        <RaisedButton secondary={true}
            label="Reset" style={styles}
            onClick={this.handleAction.bind(this, 'reset')}
          />
        </form>
      </Paper>
    );
  }
}

export default FormInput;
