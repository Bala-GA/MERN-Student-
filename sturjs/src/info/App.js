import React from 'react';
import Form from './form';
import Table from './table'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import axios from 'axios';
import Layout from './Layout';
class App extends React.Component{
    constructor(){
        super();

        this.state={
            data:[],
            editData:[]
        }
    }
    create = data =>{
        if(!data.isEdit){
        //console.log(data)
            axios.post('http://localhost:4000/info',data).then(res => {
            this.getall();
            })
        }
        else{
            axios.put('http://localhost:4000/info/update',data).then(res => {
                console.log(res)
                this.getall()
            })
        }
    }

    componentDidMount(){
        this.getall();
    }

    getall(){
        axios.get('http://localhost:4000/info').then(res => {
            //console.log(res.data)
            this.setState({
                data:res.data
            })
        })
    }

    update = data => {
        console.log(data)
        this.setState({
            editData:data
        })        
    }

    del = data => {
        var option = window.confirm(`Are you sure want to delete? ${data.FName}`)
        if(option){
            axios.delete(`http://localhost:4000/info/delete/${data._id}`).then(res => {
                console.log(res)
                this.getall();
            })
        }
    }
    
    render(){
        return(
            // <div className="container mt-4">
            //     <div className="row">
            //         <div className="col-6">
            //             <Form myData = {this.create} setForm={this.state.editData} /> 
            //         </div>
            //         <div className="col-6">
            //             <Table getData ={this.state.data} setData={this.update} del={this.del}/> 
            //         </div> 
            //     </div>
            // </div>      

            <BrowserRouter>
                <Routes>
                    <Route index element={<><Form myData = {this.create} setForm={this.state.editData} /><Layout/></>}/>
                    <Route path="/table" element = {
                        <>
                            <div className="container mt-4">
                                <div className="row">
                                    <div className="col-4">
                                        <Form myData = {this.create} setForm={this.state.editData} /> 
                                    </div>
                                    <div className="col-8">
                                        <Table getData ={this.state.data} setData={this.update} del={this.del} search={this.search}/> 
                                    </div> 
                                </div>
                            </div>              
                        </>}
                    />                    
                </Routes>
            </BrowserRouter>
        
        )
    }
}

export default App;