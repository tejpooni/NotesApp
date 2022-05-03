import React from 'react';
import axios from 'axios';
// import { TaskCard } from './TaskCards';


const center = {
    color: 'navy',
    textAlign: 'center',
    fontSize: '40px',
    fontFamily: 'Courier New '
}

const adjust ={
    marginRight:'500px'
    // left:'50px'
}
//using semantic ui for styling

class TaskList extends React.Component{
    
    state = {
        task: "", //current user entered task
        taskList: [] //holds all tasks
    }

    componentDidMount(){
       this.getTaskList();
    }

    getTaskList = () =>{
        axios.get('http://localhost:3001/tasks')
        .then((response)=>response.data)
        .then(response=> {
            console.log(response)
            this.setState({taskList:response})
        })
            
    }

    onDeleteClick = taskId =>{
        console.log('inside delete');
        axios.delete(`http://localhost:3001/deleteTask/${taskId}`);
        this.getTaskList();

    }

    onSubmitClick = () =>{
        axios.post('http://localhost:3001/addTask',{
            task: this.state.task
        })        
        this.getTaskList();
    }

    render(){
        console.log(this.state.taskList)
        return(
            <div>

                <div style = {center}>Task Manager</div>
                <br/>
                <br/>
                <div style={{textAlign:'center'}}>
                    <br/>
                    <input value = {this.state.task} onChange = {e =>this.setState({task: e.target.value})} placeholder = "your tasks..."/>
                    <div>
                        <br/>
                        <button className = "ui primary button basic" onClick= {()=>this.onSubmitClick()}>Submit</button>
                    </div>
                </div>
                <br/>
                <div style ={{marginLeft: '760px'}}>
                    <div className="ui cards">
                        {this.state.taskList.map((task)=>
                            
                                <div className="card" style ={adjust}>
                                    <div className="content">
                                      <div className="meta">
                                          {/* Name of Task will go here */}
                                          {task.task}
                                      </div>
                                    </div>
          
                                    <div className="extra content">
                                      <div className="ui two buttons">
                                          {/* <div className="ui basic green button">Done</div> */}
                                          <div className="ui basic green button" onClick ={()=>this.onDeleteClick(task.taskId)}>Completed</div>
                                      </div>
                                    </div>
                                </div>
                         )}  
              
                    </div>
                </div>
            </div>

        )
    }
}
export default TaskList;