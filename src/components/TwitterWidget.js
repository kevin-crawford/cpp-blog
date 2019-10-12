import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap"

const TwitterWidget = () => (
  <StaticQuery
    query={twitterQuery}
    render={data => {
      return (
        <>
          <div className="widget twitter">
            <CardBody className="twitter-header">
              <img
                src={
                  data.twitterStatusesUserTimelineCppTwitterQuery.user
                    .profile_image_url_https
                }
                className="twitter-avatar"
              />
              <a
                href={data.twitterStatusesUserTimelineCppTwitterQuery.user.url}
                className="twitter-name"
              >
                {data.twitterStatusesUserTimelineCppTwitterQuery.user.name}
              </a>
            </CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
              Recent Tweets
            </CardTitle>
            {data.allTwitterStatusesUserTimelineCppTwitterQuery.edges.map(
              ({ node }) => (
                <CardBody className="tweet" key={node.favorite_count}>
                  <span className="date">
                    Date: {node.created_at.split(` `, 3).join(` `)}
                  </span>
                  <CardText className="tweet-content">
                    {node.full_text}
                  </CardText>
                  {node.entities.hashtags ? (
                    <div className="tweet-hastags">
                      {node.entities.hashtags.map(({ text }) => (
                        <a
                          href={`https://twitter.com/hashtag/${text}`}
                          key={text}
                          className="hashtag"
                        >
                          #{text}
                        </a>
                      ))}
                    </div>
                  ) : (
                    0
                  )}
                  <div className="tweet-head">
                    <span>Link: </span>
                    {node.entities.urls.map(({ url }) => (
                      <a href={url} className="tweet-link" key="1">
                        {url}
                      </a>
                    ))}
                  </div>
                </CardBody>
              )
            )}
          </div>
        </>
      )
    }}
  />
)

export const twitterQuery = graphql`
  query TweetQuery {
    allTwitterStatusesUserTimelineCppTwitterQuery {
      edges {
        node {
          full_text
          favorite_count
          retweet_count
          created_at
          user {
            name
            url
            profile_image_url
            screen_name
          }
          entities {
            urls {
              display_url
              url
            }
            hashtags {
              text
            }
          }
        }
      }
    }
    twitterStatusesUserTimelineCppTwitterQuery {
      user {
        profile_image_url_https
        name
        url
        screen_name
      }
    }
  }
`

export default TwitterWidget
