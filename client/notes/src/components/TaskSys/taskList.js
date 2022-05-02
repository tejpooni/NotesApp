import React from 'react';


const center = {
    color: 'navy',
    textAlign: 'center',
    fontSize: '40px',
    fontFamily: 'Courier New '
}
//using semantic ui for styling

class TaskList extends React.Component{
    
    state = {
        task: ""
    }

    onDeleteClick =() =>{
        console.log('inside delete');

    }

    render(){
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
                        <button className = "ui primary button basic">Submit</button>
                    </div>
                </div>
                <br/>
                <div style ={{marginLeft: '760px'}}>
                    <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="meta">
                                Name of Task will go here
                            </div>
                        </div>

                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button">Done</div>
                                <div className="ui basic red button" onClick ={()=>this.onDeleteClick()}>Delete</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default TaskList;