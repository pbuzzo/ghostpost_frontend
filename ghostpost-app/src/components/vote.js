import React from 'react'


export class Vote extends React.Component {
    up_vote = async () => {
        try {
            fetch("http://localhost:8000/api/post/" + this.props.id.toString() + "/upvote/")
            .then(results => results.json())
            .then(data => {this.setState({posts: data})})
        }
        catch (err) {
            return console.log(err)
        }
    }
    down_vote = async () => {
        try {
            fetch("http://localhost:8000/api/post/" + this.props.id.toString() + "/downvote/")
            .then(results => results.json())
            .then(data => {this.setState({posts: data})})
        }
        catch (err) {
            return console.log(err)
        }
    }

    render() {

        return (
            <div>
                <form onSubmit={() => this.up_vote()}>
                    <button type="submit">👍</button>
                </form>
                <form onSubmit={() => this.down_vote()}>
                    <button type="submit">👎</button>
                </form>
            </div>
        )
    }
}