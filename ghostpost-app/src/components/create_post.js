import React from 'react'


export class CreatePost extends React.Component {

    handleTypeChange = e => {
        this.setState({ post_type: true })
    }
    
    handleCreateText = e => {
        this.setState({ text: e.target.value });
    }

    handleCreateTitle = e => {
        this.setState({ title: e.target.value });
    }

    
    addPost = () => {
        fetch("http://localhost:8000/api/post/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                post_type: this.state.post_type,
                text: this.state.text,
                title: this.state.title,
            })
        })
        .then(res => console.log(res));
    }

    handleSubmit = e => {
        e.preventDefault()
        this.addPost()
        window.location.reload()
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Create Post (Check for Boast, leave Empty for Roast!): </label>
                    <input type="radio" value={this.props.post_type} onChange={this.handleTypeChange}/>
                    <input type="text" value={this.props.title} onChange={this.handleCreateTitle}/>
                    <input type="text" value={this.props.text} onChange={this.handleCreateText}/>
                    <button type="submit">post</button>
                </form>
            </div>
        )
    }
}