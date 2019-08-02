import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Album from './Album';


const ALL_ALBUMS_QUERY = gql`
  query ALL_ALBUMS_QUERY {
    albums {
      id
      title
      description
      coverImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const AlbumsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Albums extends Component {
  render() {
    return (
      <Center>
        <p>Albums</p>
        <Query query={ALL_ALBUMS_QUERY}>
          {
            ({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error: {error.message}</p>
              return (
                <AlbumsList>{data.albums.map(album => <Album album={album} key={album.id} />)}</AlbumsList>
              )
            }
          }
        </Query>
      </Center>
    );
  }
}

export default Albums;