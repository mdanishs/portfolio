import React from "react"
import { Route, Switch } from "react-router-dom"

import About from "./About/About";
import Achievments from "./Achievements/Achievements";
import Projects from "./Projects/Projects";

export default class LeftPane extends React.Component {
    render() {
        return (
            <div className="row">
                <Switch>
                    <Route exact path="/about" render={() => {
                        return <About store={this.props.store} />
                    }} />
                    <Route path="/achievements" exact render={() => {
                        return <Achievments store={this.props.store} />
                    }} />
                    <Route path="/projects" exact render={() => {
                        return <Projects store={this.props.store} />
                    }} />
                    {/*<Route path="/blog" exact render={() => (<Redirect to="https://medium.com/@m_danish_s" />)} />*/}
                    <Route render={() => {
                        return <About store={this.props.store} />
                    }} />
                </Switch>
            </div>
        )
    }
}