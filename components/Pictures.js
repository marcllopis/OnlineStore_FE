import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Picture from './Picture';


const ALL_PICTURES_QUERY = gql`
  query ALL_PICTURES_QUERY {
    pictures {
      id
      title
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const PicturesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Pictures extends Component {
  render() {
    return (
      <Center>
        <p>Pictures</p>
        <Query query={ALL_PICTURES_QUERY}>
          {
            ({ data, error, loading }) => {
              console.log('pay', data, error, loading);
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error: {error.message}</p>
              return (
                <PicturesList>{data.pictures.map(picture => <Picture picture={picture} key={picture.id} />)}</PicturesList>
              )
            }
          }
        </Query>
      </Center>
    );
  }
}

export default Pictures;