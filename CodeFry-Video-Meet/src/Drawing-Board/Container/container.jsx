import React from 'react';
import Board from '../Board/board';
import "./../Container/container.css";
import 'font-awesome/css/font-awesome.min.css';


class Container extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            color : "#000000",
            size : "5"
        }
    }

    changeColor(params){
        this.setState({
            color : params.target.value
        })
    }

    erase(){
        this.setState({
            color : "#fff"
        })
    }

    changeSize(params){
        this.setState({
            size : params.target.value
        })
    }

    render(){
        return(
            <div className="container-fluid draw-container">
                <div className="tools-section">
                    <div className="color-picker-container">
                      <span className="spanTitle">  Color: &nbsp;</span>
                        <input type="color" style={{width:"55px", height:"45px", padding:"8px", borderRadius:"7px", borderColor:"white", backgroundColor:"#F8F9FA"}} value={this.state.color} onChange={this.changeColor.bind(this)}/>
                    </div>

                    <div className="color-picker-container eraserButton">
                    <span className="spanTitle">  Eraser: &nbsp;</span>
                        <button className="btn btn-light" onClick={this.erase.bind(this)}><i class="fa fa-eraser"></i></button>
                    </div>

                    <div className="brushsize-container">
                    <span className="spanTitle">  Size: &nbsp;</span>
                        <select  style={{width:"55px", height:"45px", padding:"8px", borderRadius:"7px", borderColor:"white", backgroundColor:"#F8F9FA"}} value={this.state.size} onChange={this.changeSize.bind(this)}>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                        </select>
                    </div>

                </div>

                <div className="board-container">
                    <Board color={this.state.color} size={this.state.size}></Board>
                </div>

            </div>
        )
    }
} 

export default Container;