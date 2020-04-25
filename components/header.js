import React, { Component } from 'react';
import {Container } from 'semantic-ui-react';
import Head from 'next/head';



class Header extends Component {
  render() {
    return (
        <div>
            <Head>
               <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> 
              <link rel="stylesheet"  href="../static/css/mycss.css"/>
            </Head>
            <div class="ui sidebar  menu large compact container icon labeled vertical">
              <a class ="item" href="#"><i class="global icon">Home</i></a>
              <a class ="item" href="#"><i class="car icon">Doctor</i></a>
              <a class ="item" href="#"><i class="car icon">About Us</i></a>
              {/* <div class="ui buttons">
                <button class="ui button black">
                  <i class="sign in icon"></i>Login
                </button>
                <div class="or"></div>
                <button class="ui button green">
                  <i class="users icon">Sign Up</i>
                </button>
              </div> */}
            </div>

            <div class="pusher">
              <div class="ui vertical aligned center landing inverted">
                <div class="transbg">
                  <div class="ui container">
                    <div class="ui secondary inverted top large pointing  menu">
                      <div class="left item">
                        <a class="toc item">
                          <i class="sidebar icon"></i>
                        </a>
                      </div>
                      <div class="right item">
                        <a class ="active item" href="/">Home</a>
                        <a class ="item" href="/DoctorPage">Doctor</a>
                        <a class ="item" href="/PatientHomePage">Patient</a>
                        <a class ="item" href="/OwnerHomePage">Insurance Owner</a>
                        {/* <div class="ui buttons">
                          <button class="ui button black">
                            <i class="sign in icon"></i>Login
                          </button>
                          <div class="or"></div>
                          <button class="ui button teal">
                            <i class="users icon">SignUp</i>
                          </button>
                        </div>*/}
                      </div> 
                    </div>
                  </div>
                 
                </div>
                {/* <div class="ui text container ">
                  {/* <h1 class="ui header inverted" >HEALTHCARE ON BLOCKCHAIN</h1>
                  <h3 class="ui centered inverted">GLOBAL PLATFORM FOR HEALTHCARE BENEFIT</h3>
                  <h3 class="ui centered inverted">ADMINISTRATION AND PAYMENTS</h3> 

                 
                </div> */}
              </div>
            </div>
        </div>
    );
  }
};

export default Header;



// import React, { Component } from "react";
// import {
//   Button,
//   Icon,
//   Menu,
//   Container,
//   Divider,
//   Dropdown,
//   Grid,
//   Header,
//   Image,
//   List,
//   Segment,
//   Input,
// } from "semantic-ui-react";
// import { Link } from "../routes";

// class header extends Component {
//   render() {
//     return (
//       <Grid stackable style={{ marginBottom: "30px" }}>
//         <Grid.Column>
//           <Menu fixed="top" inverted color="red" stackable>
//             <Container>
//               <Link href="/">
//                 <Menu.Item as="a">
//                   <Icon name="home" size="big" />
//                   MedBlocks
//                 </Menu.Item>
//               </Link>
//               <Link href="/DoctorPage">
//                 <Menu.Item as="a">
//                   <Icon name="user doctor" size="big" />
//                   Doctor
//                 </Menu.Item>
//               </Link>
//               <Link href="/PatientHomePage">
//                 <Menu.Item as="a">
//                   <Icon name="thermometer half" size="big" />
//                   Patient
//                 </Menu.Item>
//               </Link>
//               <Link href="/OwnerHomePage">
//                 <Menu.Item as="a">
//                   <Icon name="male" size="big" />
//                   Insurance Owner
//                 </Menu.Item>
//               </Link>
//             </Container>
//           </Menu>
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }

// export default header;
