import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export default function AuthorPage() {
  const data = useStaticQuery(graphql`
    query GetAllAuthors {
      allAuthor {
        nodes {
          name
          slug
        }
      }
    }
  `);

  const authors = data.allAuthor.nodes;

  return (
    <>
      <ul>
        {authors.map((author) => (
          <li>
            <Link to={`/${author.slug}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
