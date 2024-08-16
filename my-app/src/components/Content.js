import React, { Component } from 'react'
import savedPosts from '../posts.json'
import css from './css/Content.modules.css'

export class Content extends Component {

    constructor(props) {
      super(props)
    }
    
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photots</h1>
        </div>
        <div className={css.SearchResults}>
            {savedPosts.savedPosts.map(post => {
                return (
                <div className={css.SearchResults}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt='an image'/>
                    <p>{post.description}</p>
                </div>
                )
            })}
        </div>
      </div>
    )
  }
}

export default Content
