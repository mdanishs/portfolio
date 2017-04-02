import React from "react"

export default class LeftPane extends React.Component {
    render() {
        return (
            <div className="contact-info text-center">
                <img className="profile-pic img-circle" src="/my-img.jpg" alt="profile" />
                <h4>{this.props.store.name}    
                <div className="tagline text-muted">{this.props.store.tagline}</div>
                </h4>
                <hr/>
                  <a href="https://github.com/mdanishs"><span className="fa fa-github-square fa-3x" data-toggle="tooltip" title="mdanishs"></span></a>
                  <a href="mailto:mohammaddsiddiqui@gmail.com"><span className="fa fa-envelope-square fa-3x" data-toggle="tooltip" title="mohammaddsiddiqui@gmail.com"></span></a>
                  <a href="https://twitter.com/m_danish_s"><span className="fa fa-twitter-square fa-3x" data-toggle="tooltip" title="m_danish_s"></span></a>
                  <a href="https://pk.linkedin.com/in/mdanishs"><span className="fa fa-linkedin-square fa-3x" data-toggle="tooltip" title="mdanishs"></span></a>
                  <a href="https://medium.com/@m_danish_s"><span className="fa fa-rss-square fa-3x" data-toggle="tooltip" title="@m_danish_s"></span></a>
            </div>
        )
    }
}