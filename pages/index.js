import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  // const res = await fetch('http://localhost:3000/api/photos');
  // const data = await res.json();
  const data = [{
        "id": "1",
        "url": "http://www.tvmaze.com/shows/1/under-the-dome",
        "name": "Under the Dome",
        "type": "Scripted"
    },
    {
        "id": "2",
        "url": "http://www.tvmaze.com/shows/1/under-the-dome",
        "name": "Under the table",
        "type": "Scripted"
    },
    {
        "id": "3",
        "url": "http://www.tvmaze.com/shows/1/under-the-dome",
        "name": "MIchael is left",
        "type": "Scripted"
    }]

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry)
  };
};

export default Index;