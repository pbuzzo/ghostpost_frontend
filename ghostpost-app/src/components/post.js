import React from 'react'
import { Vote } from "./vote"


export class Post extends React.Component {
    id = this.props.id
    render() {
        const RoB = this.props.post_type;
        if (RoB == false) {
            return (
                <React.Fragment>
                    <div class="roast">
                        <h3>Title: {this.props.title}</h3>
                        <h4>Text: {this.props.text}</h4>
                        <div>
                            <h3>{this.props.title}</h3>
                            <h4>{this.props.text}</h4>
                            <h5>Date Posted: {this.props.date}</h5>
                            <h5>Boosts: {this.props.upvotes - this.props.downvotes}</h5>
                            <h5>Boast?: {JSON.stringify(this.props.post_type)}</h5>
                        </div>
                        <div className="btn">
                            <Vote id={this.props.id} />
                        </div>
                    </div>
                </React.Fragment >
            )
        } else {
            return (
                <React.Fragment>
                    <div class="boast">
                        <h3>Title: {this.props.title}</h3>
                        <h4>Text: {this.props.text}</h4>
                        <div>
                            <h3>{this.props.title}</h3>
                            <h4>{this.props.text}</h4>
                            <h5>Date Posted: {this.props.date}</h5>
                            <h5>Boosts: {this.props.upvotes - this.props.downvotes}</h5>
                            <h5>Boast?: {JSON.stringify(this.props.post_type)}</h5>
                        </div>
                        <div className="btn">
                            <Vote id={this.props.id} />
                        </div>
                    </div>
                </React.Fragment >
            )
        }
    }
}