import React from "react";

export default class ProjectItem extends React.Component {
    render() {
        return (
            <div className="media project-item">
                <div className="media-body">
                    <h4 className="media-heading">{this.props.project.title}
                        <div>
                            <small>
                                {this.props.project.techstack}
                            </small>
                        </div>
                    </h4>
                    <ul>{this.props.project.description.map((item)=><li key={item}>{item}</li>)}</ul>
                </div>
            </div>
        )
    }
}