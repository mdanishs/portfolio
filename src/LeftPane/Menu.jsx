import React from "react"
import {NavLink} from "react-router-dom";

export default class LeftPane extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            menuItems:[
                {title: "About", path:"/about"},
                {title: "Projects", path:"/projects"},
                {title: "Awards", path:"/achievements"}
            ]
        }
    }

    renderMenuItems(){
        return this.state.menuItems.map((item)=>{
            return (
                <li key={item.path}>
                    <NavLink activeClassName="link-active" to={item.path}>{item.title}</NavLink>
                </li>
            )
        })
    }

    render() {
        //TODO: credit 
        return (
            <div className="left-menu">
                {this.renderMenuItems()}
                <li>
                    <a href="https://medium.com/@m_danish_s/" target="_blank">Blog</a>
                </li>
            </div>
        )
    }
}
