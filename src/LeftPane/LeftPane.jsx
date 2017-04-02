import React from "react"
import Menu from "./Menu";
import ContactInfo from "./ContactInfo"

export default class LeftPane extends React.Component {
    render() {

        //TODO: credit 
        return (
            <div className="">
                <Menu store={this.props.store}/>
                <div className="left-image-attrib">
                    <small><a href='http://www.freepik.com/free-vector/striped-black-background_801315.htm'>Image by Freepik</a></small>
                </div>
                <ContactInfo store={this.props.store.contact_info}/>
            </div>
        )
    }
}