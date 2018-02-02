import React from 'react';
import {Button} from 'react-bootstrap';
import './spaFrame.css';

export default class Class extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classList:[{className:'Java',classDesc:'Java is a widely used programming language',id:0},
                {className:'JavaScript',classDesc:'Javascript is a front-end and widely used programming language.',id:1}],
            currentClassId: 2,
            showPopPanel:false,
            currentInputClassName: '',
            currentInputClassDesc:''
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNameInputChange = this.handleNameInputChange.bind(this);
        this.handleDesInputChange = this.handleDesInputChange.bind(this);
    }

    handleToggle(){
        console.log("Toggle");
        let newState={
            classList:this.state.classList,
            currentClassId:this.state.currentClassId,
            showPopPanel:!this.state.showPopPanel,
            currentInputClassName:this.state.currentInputClassName,
            currentInputClassDesc:this.state.currentInputClassDesc
        };
        this.setState(newState);
    }
    handleClose(onlyClose){

        if(onlyClose){
            this.setState((preState,props)=>(
                {
                    classList: preState.classList,
                    currentClassId: preState.currentClassId ,
                    showPopPanel:false,
                    currentInputClassName:preState.currentInputClassName,
                    currentInputClassDesc:preState.currentInputClassDesc
                }
            ));
        }else{
            console.log("before adding , className is", this.state.currentInputClassName);
            console.log("before adding , classDesc is", this.state.currentInputClassDesc);
            let newClass = {className:this.state.currentInputClassName,
                classDesc:this.state.currentInputClassDesc,
                id:this.state.currentClassId};

            this.setState((preState,props)=>({
                classList: [...preState.classList, newClass],
                currentClassId: preState.currentClassId + 1,
                showPopPanel:false,
                currentInputClassName:preState.currentInputClassName,
                currentInputClassDesc:preState.currentInputClassDesc

            }));

            console.log("after close popup, state is ", this.state);
        }

    }

    handleNameInputChange(e){
        this.setState({classList:this.state.classList,
            currentClassId:this.state.currentClassId,
            showPopPanel: this.state.showPopPanel,
            currentInputClassName:e.target.value,
            currentInputClassDesc:this.state.currentInputClassDesc});
    }
    handleDesInputChange(e){
        this.setState({classList:this.state.classList,
            currentClassId:this.state.currentClassId,
            showPopPanel: this.state.showPopPanel,
            currentInputClassName:this.state.currentInputClassName,
            currentInputClassDesc:e.target.value});
    }
    render(){
        for(var i=0;i<this.state.classList.length; i++){
            console.log("classDesc is",this.state.classList[i].classDesc);
        }


        return (
            <div className="container">
            <div className="row" >
                    {this.state.classList.map((item,index)=>{
                        return (
                        <div key={item.id} className="col-sm-6 col-lg-3 classTab">
                            <h5 > Class :  {item.className} </h5>
                            <h5> Class Description: </h5>
                            <p> {item.classDesc} </p>
                            <br />
                        </div>
                    )}
                    )}
                {this.state.showPopPanel ?
                    <Popup
                        text='Close Me'
                        onPopClose={this.handleClose}
                        onChangeName={this.handleNameInputChange}
                        onChangeDes={this.handleDesInputChange}
                    />
                    : null
                }
            </div>
                <br />
                <br />
                <br />
                <Button bsStyle="primary" onClick={this.handleToggle}>Add New Class</Button>
                {/*<Button bsStyle="primary" onClick={this.handleClose}>Add New Class 1</Button>*/}
            </div>
        )
    }
}


class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className='class_popup_inner'>
                    <form style={{marginTop:15+'px'}}>

                            <input style={{width:250+'px'}} placeHolder="Class Name" type="text" onChange={this.props.onChangeName}/>
                        <br />

                            <textarea style={{marginTop:10+'px', width:250+'px'}} placeHolder="Class Description " type="textarea" onChange={this.props.onChangeDes}/>
                        <br />
                        <br />
                        <Button className="btn-primary" onClick={()=>{this.props.onPopClose(0)}}>Confirm</Button>
                        <Button className="btn-primary" onClick={()=>{this.props.onPopClose(1)}}>Cancel</Button>

                    </form>

                </div>

            </div>
        );
    }
}
