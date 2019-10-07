import React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilities"

const Post = ({ title, author, path, date, body, tags, fluid, id }) => {
  return (
    <Card key={id}>
      <Link to={path}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date} </span>
          by <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map((tag, index) => (
            <li key={index}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="text-uppercase">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={path} className="btn btn-outline-primary float-right">
          Read More
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
