import React from "react";

export default class Achievements extends React.Component{
    render(){
        return (
            <div className="detail-page">
                <h3 className="heading">About</h3>
                <hr/>
                <div className="description">
                    {this.props.store.professional_summary.join(". ")}
                </div>
            </div>
        )
    }
}