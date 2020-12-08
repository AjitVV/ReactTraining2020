import React from 'react'
import Content from "./Content"
import Header from "./Header"
import Footer from "./Footer"

export default class BMSApp extends React.Component {
    render(){
        return <React.Fragment>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </React.Fragment>
    }
}