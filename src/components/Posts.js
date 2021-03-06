import React from 'react';
import { useHarperDB } from 'use-harperdb';

function Posts() {
let [data, loading, error, refresh] = useHarperDB({
    query: {
      operation: 'sql',
      sql: `select * from HackerNews.posts`
    }
    /* interval: 40000 */
  }
  )



if(loading) {
    return <div> Loading... </div>
  }


if(data) {
      return (
        <div className="body">
          <div className="posts">

          {data.map((post, index) => {
            return (
            <div key={post.id}>
              <p><span className="number">{post.id}.</span> <span className="triangle"></span>{post.title}<a href={post.url} className="website">{post.website}</a> </p>
              <p className="secondary">{post.points} points by <a href="https://news.ycombinator.com/newest" className="outline">{post.user}</a> <a href="https://news.ycombinator.com/newest" className="outline">{post.time}</a>  | <a href="https://news.ycombinator.com/newest" className="outline">hide</a> |  <a class="outline" href="">{post.comments} comments</a> </p>
            </div>
          )
          })}

          </div>

          <div className="footer">
            <p><a href="https://news.ycombinator.com/newest" onClick={refresh}>More</a></p>
            <hr />
            <div className="links">
              <p><a href="https://news.ycombinator.com/guidelines">Guidelines</a><span className="stroke">|</span> <a href="https://news.ycombinator.com/faqs">FAQs</a><span className="stroke">|</span> <a href="https://news.ycombinator.com/lists">Lists</a><span className="stroke">|</span>
                  <a href="https://news.ycombinator.com/api">API</a><span className="stroke">|</span> <a href="https://news.ycombinator.com/security">Security</a><span className="stroke">|</span> <a href="https://news.ycombinator.com/legal">Legal</a><span className="stroke">|</span>
                  <a href="https://news.ycombinator.com/apply">Apply to YC</a><span className="stroke">|</span> <a href="https://news.ycombinator.com/contact">Contact</a>
              </p>
            </div>
            <div className="form">
              <label for="Search">Search:</label>
              <input type="text" name="" id="" />
            </div>
        </div>
      </div>
)
} else {
    return (
      <div>Sorry No Data
        {error}
      </div>
  )
}

}

export default Posts
