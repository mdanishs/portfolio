import React from "react";

export default class Achievements extends React.Component{
    render(){
        return (
            <div className="detail-page">
                <h3 className="heading">Awards</h3>
                <hr/>
                {this.props.store.achievements.map((a,i)=>{
                    return <p key={i} className="achievement-item">{a}</p>
                })}
            </div>
        )
    }
}