import React, { Component } from 'react';
import {Container } from 'semantic-ui-react';
import Head from 'next/head';
import Typing from 'react-typing-animation';

class BannerDoctor extends Component {
    render() {

        const imgStyle = {
            width:'65%'
        }
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> 
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet"  href="../static/css/doctor.css"/>
                </Head>
                {/* <Typing speed={5} hideCursor={true}> */}
                <div class="ui text segment landing ">
                  <div class="text-block">
                  
                    <h1 style={{fontSize: '55px !important'}}>COORDINATING TOTAL MANAGEMENT</h1>
                    <h1 style={{fontSize: '45px !important'}}><div>FOR DOCTORS AND ADMINISTRATORS</div>
                    </h1> 
                    
                  </div>
                </div> 
                {/* </Typing> */}
            </div>
        );
    }
};

export default BannerDoctor;