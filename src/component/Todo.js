import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add,delet,complete,edit} from './actionCreator'
import '../App.css';


class todo extends Component {
    state = {
        input :"",
        
    }

    handleChange = event =>{
    this.setState({
        input : event.target.value 
    })
    
    }

    handleClick =(e)=>{
        e.preventDefault();
        this.props.add({
         title: this.state.input,
            isCompliete : false,
            id:Math.random()
        })
    }
    handleClickEdit =(e)=>{
        e.preventDefault();
        this.props.edit({
         title:this.state.input
        })
    }
    render() {
        return (
        <div className="cont">
        <div className="container-style">
           <input type='text' onChange={this.handleChange} />
               <button onClick={this.handleClick}>ADD</button>
          
               </div>
           <div>
          
                {this.props.x.map(el =>
                    <li className="myul" key={el.id}>
                       
                        <h4 style = {{textDecoration : el.isComplete? 'line-through' : 'none'}}>{el.title}</h4>
                        <button onClick={(e)=>{e.preventDefault();this.props.complete(el.id)}}>{el.isComplete ? 'Undo':'Complete'}</button>
                        <button onClick={(e)=>{e.preventDefault();this.props.delet(el.id)}}>delete</button>
                        <button onClick={(e)=>{e.preventDefault();this.props.edit(this.state.input,el.id)}}>edit</button>
                        <input type='text' onChange={this.handleChange} />
                    </li>
                )
                }</div>

            </div>
      

       
        )
    }

}


const mapStateToProps = state =>{
    return { x:state
    }
}

const mapDispatchToProps= dispatch =>{
    return { add : (payload)=>dispatch(add(payload)),
             delet : (payload)=>dispatch(delet(payload)),
             complete : (payload)=>dispatch(complete(payload)),
             edit : (payload,id)=>dispatch(edit(payload,id))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(todo)
