import React from "react";
import ProjectItem from "./ProjectItem"

export default class Achievements extends React.Component{

    renderProjectItems(){
        return (
            this.props.store.projects.map((project)=>{
                return <ProjectItem key={project.title} project={project}/>
            })
        )
    }

    render(){
        return (
            <div className="detail-page">
                <h3 className="heading">Projects</h3>
                <hr/>
                <div>
                    {this.renderProjectItems()}
                </div>
            </div>
        )
    }
}