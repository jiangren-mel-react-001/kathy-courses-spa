/**
 * Created by Kathy on 31/01/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
import {Navbar, Nav, MenuItem,NavItem} from 'react-bootstrap';
import '../css/spaFrame.css';
import Home from './SpaHome';
import Teachers from '../teachers/SpaTeachers';
import Class from '../course/SpaClass';
import SignIn from '../signInOut/SpaSignIn';
import SignOut from '../signInOut/SpaSignOut';

export default class TryBootStrap extends React.Component{
    constructor(){
        super();
        this.state={
            userName:''
        }
    this.handleSignIn = this.handleSignIn.bind(this);
    }
    handleSignIn(user){
        this.setState({userName:user}, ()=>{

            ReactDOM.findDOMNode(this.signinItem).innerHTML = "Welcome!  "+this.state.userName;
            ReactDOM.findDOMNode(this.signinItem).className = "userNameText";
    });

        console.log("this.state.userName is ", this.state.userName);
        console.log("user is ", user);

            // this.signinItem.children = "Welcome";
            // console.log('this.signinItem is ', this.signinItem );


    }
    render(){
        return(
        <div  className="firstBorder">
            <Router>
                <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/home">SPA Learning System</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={2}  >
                            <Link to="/class">Class</Link>

                        </NavItem>
                        <NavItem eventKey={3} >
                            <Link to="/teachers">Teachers</Link>
                        </NavItem>
                    </Nav>

                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={4}   ref={input=>this.signinItem = input}>
                                <Link to="/signin">Sign In</Link>
                            </NavItem>
                            <NavItem eventKey={5} >
                                <Link to="/signout">Sign Out</Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>


                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/class" component={Class}/>
                    <PrivateRoute path="/teachers" userName={this.state.userName} component={Teachers}/>
                    <SignInRoute path="/signin" component={SignIn} handleSignInRoute={this.handleSignIn}/>
                    <Route path="/signout" component={SignOut}/>
                </Switch>
                </div>
            </Router>

        </div>
       )
    }
}

const SignInRoute =({component:Component,...rest})=>{
    // console.log('rest.handleSignInRoute: ',rest.handleSignInRoute);
return(
    <Route path={rest.path} render={()=>{
        return(
            <SignIn handleSignInRoute={rest.handleSignInRoute}/>
        )
    }}/>

)
}
const PrivateRoute=({component:Component, ...rest})=>{
    // console.log("...rest is ",rest);
    return (
        <Route path={rest.path} render={(props)=>{
            console.log("props is ",rest.userName);
            return(
                rest.userName? (<Component {...props}/>) :
                    <Redirect to="/signin"/>
            )
        }}
       />
    )
}








