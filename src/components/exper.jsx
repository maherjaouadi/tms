import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.props.color}}>
        {this.props.children}
      </button>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1> 
        <Button color={this.props.color}>Delete</Button>
      </div>
    );
  }
}

export class MessageList extends React.Component {
  render() {
    const color = "purple";
    
    const children = this.props.messages.map((message) =>
      <Message text={message.text} color={color} />
    );
    return <div>{children}</div>;
  }
}

export {Button, Message};