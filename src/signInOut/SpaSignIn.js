/**
 * Created by Kathy on 1/02/2018.
 */
import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/spaFrame.css';


export default class Class extends React.Component{
    constructor(){
        super();
        this.state={
            userName:'',
            passWord:'',
            needPop:true
        }
    }

    render(){
        // console.log('in sign in this.props', this.props.handleSignInRoute);
        if(this.state.needPop){
            return(

                <div className="popup">
                    <div className='login_popup_inner'>
                        <label style={{marginTop:20+'px'}}>User Name: </label>
                        <input type="text" onChange={(e) => {
                            this.setState({userName: e.target.value, password: this.state.passWord})
                        }}/>
                        <br />

                        <label style={{marginTop:15+'px'}}> PassWord : </label>
                        <input type="password" onChange={(e) => {
                            this.setState({passWord: e.target.value, userName: this.state.userName})
                        }}/>
                        <br />
                        <Button style={{marginTop:15+'px'}} className="btn-primary" onClick={()=>{
                            this.props.handleSignInRoute(this.state.userName);
                            this.setState((prevState, props)=>(
                                {userName:prevState.userName,
                                    passWord:prevState.passWord,
                                    needPop:!prevState.needPop }
                            ));

                        }}>  OK  </Button>
                    </div>
                </div>

            )
        }else{
            return (
                null
            )
        }

    }

}

