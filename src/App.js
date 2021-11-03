import React, { Component } from 'react'
import img1 from './img1.jpg'
import { Container , Button, Row, Col} from 'react-bootstrap'
import './App.css'


export default class App extends Component {

    state = {

        fullName: 'Trabelsi Nader',
        bio: 'Future web developper',
        profession: 'engineer',
        srcImg: img1,
        isShow: false,


    }



    isOpen = () => {

        this.setState({
            isShow: true
        })

    }
    isClosed = () => {

        this.setState({
            isShow: false
        })

    }

    componentDidMount(){
      let intervalId = setInterval(this.isClosed, 5000)

      this.setState({ intervalId: intervalId })

    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)

    }
    

    render() {

        return ( 
            <Container>
               
        <div class='all'> {
           
                (this.state.isShow === true) ? (
                    <Row>
                   <div className='app'>
                       <Col lg={3} md={4} xs={12}>
                    <h2> <span>FullName: </span>{ this.state.fullName } </h2> 
                    </Col>
                    <br/>
                    <Col lg={3} md={4} xs={12}>
                        
                    <h2> <span>Bio:</span>{ this.state.bio } </h2> 
                    </Col>
                    <br/>
                    <Col lg={3} md={2} xs={12}>
                    <h2><span>Profession:</span>  { this.state.profession } </h2>
                    </Col>
                    <br/>
                    <Col lg={3} md={12} xs={12}>
                     <img src = { this.state.srcImg } alt = 'img' style = {{ width: '100px' } }/>
                     </Col>
                    </div>   
                    </Row>
                    ):(<div></div > )
                  
    }
          
            
            <Button variant="secondary" onClick = { this.isOpen } size="lg" className='btn'>
                        SHOW PROFILE
              </Button>


            </div>
         </Container>




        )
    }

}