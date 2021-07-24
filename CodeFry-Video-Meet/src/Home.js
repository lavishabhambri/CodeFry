import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				<div> 
					<h1 style={{ fontSize: "60px", fontWeight:"bold", color:"#6474E5", marginTop:"30px" }}>CodeFry Video Meet</h1>
					<p style={{ fontSize: "25px", fontWeight: "200", fontWeight:"bold", color:"#F4A4A4", marginTop:"20px" }}>Get your doubts cleared by online CodeFry Community.</p>
				</div>

				<div className="myHomeMeetLink" style={{
					width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button className="joinButton" onClick={this.join} style={{ margin: "20px", width:"40px", height:"40px",borderRadius:"50%", padding:"5%" }}>Go</Button>
				</div>
			</div>
		)
	}
}

export default Home;