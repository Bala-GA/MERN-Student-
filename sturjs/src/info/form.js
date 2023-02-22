import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            _id:"",
            FName:"",
            LName:"",
            Location:"",
            Email:"",
            Dob:"",
            Education:"",
            isEdit:false
        }
    }
    infoChange = event => {
        const{name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    infoSubmit = event => {
        //event.preventDefault()
        if(!this.state.isEdit){
            let data = {
                isEdit:this.state.isEdit,
                FName:this.state.FName,
                LName:this.state.LName,
                Location:this.state.Location,
                Email:this.state.Email,
                Dob:this.state.Dob,
                Education:this.state.Education,
                
            }        
            //console.log(data);
            this.props.myData(data);
        }
        else{
            let data = {
                isEdit:this.state.isEdit,
                _id:this.state._id,
                FName:this.state.FName,
                LName:this.state.LName,
                Location:this.state.Location,
                Email:this.state.Email,
                Dob:this.state.Dob,
                Education:this.state.Education,
                
            }        
            // console.log(data);
            this.props.myData(data);
        }
    }

    componentWillReceiveProps(props){
        //console.log(props) componentWillReceiveProps is deprecated
        if(props.setForm._id !=null){
            this.setState({
                _id:props.setForm._id,
                FName:props.setForm.FName,
                LName:props.setForm.LName,
                Location:props.setForm.Location,
                Email:props.setForm.Email,
                Dob:props.setForm.Dob,
                Education:props.setForm.Education,
                isEdit:true
            })
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.infoSubmit} className="form-inline">
                    <label>First Name:</label>
                    <input type="text" className="form-control" placeholder="First Name"
                    onChange={this.infoChange}
                    name="FName"
                    value={this.state.FName}/>                
                
                    <label>Last Name:</label>
                    <input type="text" className="form-control" placeholder="Last Name"
                     onChange={this.infoChange}
                     name="LName"
                     value={this.state.LName}/>                                    
                
                    <label>Location:</label>
                    <input type="text" className="form-control" placeholder="Location"
                    onChange={this.infoChange}
                    name="Location"
                    value={this.state.Location}/>                                
                
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="Email"
                    onChange={this.infoChange}
                    name="Email"
                    value={this.state.Email}/>                                
                
                    <label>Dob:</label>
                    <input type="Date" className="form-control"
                    onChange={this.infoChange}
                    name="Dob"
                    value={this.state.Dob}/>                                    
                
                    <label>Education:</label>
                    <input type="text" className="form-control" placeholder="Education"
                    onChange={this.infoChange}
                    name="Education"
                    value={this.state.Education}/>                                   
                
                    <label>About:</label>
                    <textarea className="form-control" placeholder="About"/>
                                    
                    <button type="submit" className="btn btn-primary">{this.state.isEdit?'update':'create'}</button>
                </form>
            </div>        
        )
    }
}

export default Form