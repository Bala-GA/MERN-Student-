import React from 'react'

class Table extends React.Component{
    constructor(){
        super();
        this.state={
            search:"",
            status:false
        }
    
    }
    dataChange = event =>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        }) 
    }
    
    render(){
        return(
            <div className="Container">
                <div className="input-group">
                    <div className="form-outline">
                        <input type="search" className="form-control"
                        onChange={this.dataChange}
                        name="search"
                        value={this.state.search}/>
                    </div>
                    <button className="btn btn-primary" onClick={()=>!this.setState({status:!this.state.status})}>
                        search
                    </button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Dob</th>
                            <th>Education</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>                        
                    <tbody>
                    {
                            (this.props.getData.length)>0?
                            (
                                (!this.state.status)?(
                                    this.props.getData.map((e,index) => 
                                        (
                                            <tr key={e._id}>                                    
                                                <td>{index+1}</td>
                                                <td>{e.FName}</td>
                                                <td>{e.LName}</td>
                                                <td>{e.Location}</td>
                                                <td>{e.Email}</td>
                                                <td>{e.Dob}</td>
                                                <td>{e.Education}</td>
                                                <td>
                                                    <button className="btn btn-primary"
                                                    onClick={event => {
                                                        this.props.setData(e)
                                                    }}>
                                                        Edit
                                                    </button>
                                                </td>
                                                <td>
                                                <button className="btn btn-primary"
                                                    onClick={event => {
                                                        this.props.del(e)
                                                    }}>
                                                        Delete
                                                    </button>
                                                </td>                                    
                                            </tr>
                                        )
                                    )
                                )
                                :
                                (
                                    this.props.getData.filter(e => this.state.search==e.FName).map((e,index) => 
                                        (
                                            <tr key={e._id}>                                    
                                                <td>{index+1}</td>
                                                <td>{e.FName}</td>
                                                <td>{e.LName}</td>
                                                <td>{e.Location}</td>
                                                <td>{e.Email}</td>
                                                <td>{e.Dob}</td>
                                                <td>{e.Education}</td>
                                                <td>
                                                    <button className="btn btn-primary"
                                                    onClick={event => {
                                                        this.props.setData(e)
                                                    }}>
                                                        Edit
                                                    </button>
                                                </td>
                                                <td>
                                                <button className="btn btn-primary"
                                                    onClick={event => {
                                                        this.props.del(e)
                                                    }}>
                                                        Delete
                                                    </button>
                                                </td>                                    
                                            </tr>
                                        )
                                    )
                                )
                                    

                            )
                            :
                            (
                                <tr>
                                    <td>No Data</td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        )
           
    }
}

export default Table



// filter(e => e==FName)