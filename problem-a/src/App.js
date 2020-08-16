import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={this.props.senators}/>
      </div>
    );
  }
}

export class SenatorRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.senator.name}</td>
        <td>{this.props.senator.party.substring(0,1) + " - " + this.props.senator.state}</td>
        <td><a href={"tel:" + this.props.senator.phone}>{this.props.senator.phone}</a></td>
        <td><a href={"https://twitter.com/" + this.props.senator.twitter}>{"@" + this.props.senator.twitter}</a></td>
      </tr>
    )
  }
}

export class SenatorTable extends Component {
  render() {
    let SenatorArray = this.props.senators.map((senObject) =>
      <SenatorRow key={senObject.id}senator={senObject} />)
      return (
        <table className={"table table-bordered"}>
          <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
          <tbody>
            {SenatorArray}
          </tbody>
        </table>
      );
    }
}

export class TableHeader extends Component {
  render() {
    const colNames = this.props.cols.map((colName, index) => {
      return (<th key={index}>{colName}</th>);
    });
    return (
      <thead>
        <tr>{colNames}</tr>
      </thead>
    );
  }
}
