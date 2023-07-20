import React from 'react';
import './FormClass.css';

class FormClass extends React.Component {
    state = {
        Name: "",
        // lastName:"",
        Dept: "",
        Rating: "",
        EmpData: [],

    }
    changeHandle = (e) => {
        // console.log(e.target.value)
        // if(e.target.name==="Name"){
        //     this.setState({Name:e.target.value})
        // }else if(e.target.name==="lastName"){
        //     this.setState({lastName:e.target.value})
        // }
        this.setState({ [e.target.name]: e.target.value })


        // console.log(this.state.Name);
    }
    clickHandle = () => {
        let newObj = {
            name: this.state.Name,
            // lastname:this.state.lastName,
            dept: this.state.Dept,
            rate: this.state.Rating

        }
        this.state.EmpData.push(newObj)
        this.setState({ 
            EmpData: this.state.EmpData,
            Name:'',
            Dept:'',
            Rating:''
         })
        console.log(this.state.EmpData)
    }
    render() {
        return (
            <>
                <div className="mainContainer">
                
                    {/* <div className="head">
                        <p>EMPLOYEE FEEDBACK FORM</p>
                    </div> */}
                    <div className="sec">
                    <p className="head">EMPLOYEE FEEDBACK FORM</p>
                        <form className="child">
                            <div>
                                <label htmlFor="name">NAME:</label>
                                <input className="inpt" type="text" id="name" name="Name" placeholder="Enter Name" value={this.state.Name} onChange={this.changeHandle} required /><br />
                            </div>
                            {/* <label htmlFor="lastname">LAST NAME:</label> */}
                            {/* <input type="text" id="lastname" name="lastName" value={this.state.lastName} onChange={this.changeHandle} required/><br/> */}
                            <div>
                                <label htmlFor="dept">DEPARTMENT:</label>
                                <input className="inpt" type="text" id="dept" name="Dept" placeholder="Enter Department" value={this.state.Dept} onChange={this.changeHandle} required /><br />
                            </div>
                            <div>
                                <label htmlFor="rate">RATING:</label>
                                <input className="inpt" type="text" id="rate" name="Rating" placeholder="Enter Rating" value={this.state.Rating} onChange={this.changeHandle} required /><br />
                            </div>
                        </form>
                        <div className="btn">
                            <button type="button" onClick={this.clickHandle}>Submit</button>
                        </div>
                    </div>
                    <div className="parent">
                        {this.state.EmpData.map((item, index) => {
                            return (
                                <div className="box">
                                    <span>Name:{item.name}|Dept:{item.dept}|Rating:{item.rate}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )

    }

}
export default FormClass;