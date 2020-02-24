import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import Footer from './headernavbar/footer';

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                {this.props.children}
                <Header />
                <Navbar />
                <Footer />
            </div>
        );
    }
}

export default Layout;