import gql from 'graphql-tag';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import ErrorMessage from './ErrorMessage';
import Picture from './Picture';


const SINGLE_ALBUM_QUERY = gql`
  query SINGLE_ALBUM_QUERY($id:ID!) {
    album(where: {id:$id}) {
      pictures {
        id
        title
        description
        image
        largeImage
      }
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


class ShowAlbum extends React.Component {
  render() {
    return (
      <Center>
        <Query query={SINGLE_ALBUM_QUERY} variables={{ id: this.props.id }}>
          {({ data, error, loading }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <p>Loading...</p>;
            return (
              <PicturesList>{data.album.pictures.map(picture =>
                <Picture homeDisplay picture={picture} key={picture.id} />)}
              </PicturesList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default ShowAlbum;