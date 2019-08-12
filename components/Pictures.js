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

const ChoosePicturesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  :hover{
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

class Pictures extends Component {

  render() {
    return (
      <Center>
        <Query query={ALL_PICTURES_QUERY}>
          {
            ({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error: {error.message}</p>
              return (
                this.props.mainHome ?
                  <PicturesList>{data.pictures.map(picture =>
                    <Picture homeDisplay picture={picture} key={picture.id} />)}
                  </PicturesList>
                  :
                  <ChoosePicturesList>{data.pictures.map(picture =>
                    <Picture selectPicture={this.props.selectPicture} picture={picture} key={picture.id} />)}
                  </ChoosePicturesList>
              )
            }
          }
        </Query>
      </Center>
    );
  }
}

export default Pictures;