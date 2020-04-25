import React, { Component } from 'react'
import { Grid, Image, Header, Icon, Container } from 'semantic-ui-react'
import Head from 'next/head';



class BannerThree extends Component {
    render() {
        const purposeOne = {
            backgroundColor:"#5B3197"
        }

        const purposeTwo = {
            backgroundColor:"#8255BC"
        }

        const imageStyle = {
            marginLeft: '8em',
            marginTop: '12em',
            marginBottom: '8em',
            width: '65%'
        }

        const contentStyle = {
            marginLeft: '15em',
            marginTop:'7em'
        }

        return (
            <div>
                <Head>    
                    <link rel="stylesheet" href="../static/css/style.css"/>
                </Head>
                <Container>
                <Header as='h2'>
                    <Header.Content>
                        Using our platform
                        <Header.Subheader>Use the Care Administration Network to connect all parties and publish personalized Care.Cards for them.</Header.Subheader>
                    </Header.Content>
                </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Image src="../static/image/administrators.jpg"/>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Image src="../static/image/platform_2.png" size='small'/>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Image src="../static/image/platform_3.png"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            </div>
         
            
        )
    }
    
}
  
  export default BannerThree;
