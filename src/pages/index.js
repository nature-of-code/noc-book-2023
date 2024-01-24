import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Head from '../components/Head';
import Header from '../components/Header';

export default function IndexPage({ data }) {
  return (
    <>
      <Head />

      <Header />

      <div className="py-8 px-1 mx-auto prose w-screen">
        <table className='table-auto border-collapse '>
          <tr >
            <th className='border border-noc-400 border-x-0 '>Chapter</th>
            <th className='border border-noc-400 border-x-0'>Descriptor</th>
            <th className='border border-noc-400 border-x-0'>Videos</th>
          </tr>

          {data.allChaptersJson.edges.map(({ node }) => {
            return (
              <tr key={node.id} className='py-2'>
                <td className='border border-noc-400 border-x-0'>{node.title}</td>
                <td className='border border-noc-400 border-x-0'>one sentence descriptor about the chapter</td>
                <td className='border border-noc-400 border-x-0'>
                  video icon
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export const query = graphql`
  query QueryChapters {
    allChaptersJson {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;
