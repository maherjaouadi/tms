import React, { Component } from 'react';
import MainNavbar from './mainNavbar';
import Test from './test';
import {Message, Button, MessageList} from './exper'

const Header = () => {
    const messages = [{
            id:1,
            text:"un"},
            {
                id:2,
                text: "deux"
            },
            {
               id: 3,
               text : "trois"
            }
            ];
    
return (
    
    <header>
        <div className="container-fluid">
            {/* <MainNavbar /> */}
            <Test />
            {/* <MessageList messages= {messages}/>             */}
        </div>
    </header>
)

}

export default Header;