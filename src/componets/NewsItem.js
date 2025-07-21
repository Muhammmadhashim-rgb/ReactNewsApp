import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl} = this.props
        return (
            <div>
                <div className="card my-3" style={{ width: "18rem" }}>
                    <img src={!imageurl?"https://techcrunch.com/wp-content/uploads/2025/07/Screenshot-2025-07-14-at-2.44.29PM.png?resize=1200,616":imageurl} className="card-img-top" alt="/" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
