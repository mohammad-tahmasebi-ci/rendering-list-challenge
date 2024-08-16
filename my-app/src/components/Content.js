import React, { Component } from 'react'
import savedPosts from '../posts.json'
import css from './css/Content.modules.css'
import PostItem from './PostItem'

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
        <div>
            <PostItem posts={savedPosts.savedPosts}/>
        </div>
      </div>
    )
  }
}

export default Content
