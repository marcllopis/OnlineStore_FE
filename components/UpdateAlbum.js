import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import ErrorMessage from '../components/ErrorMessage';
import { RandomFallbackCoverImageAlbum } from '../utils/constants';


const SINGLE_ALBUM_QUERY = gql`
   query SINGLE_ALBUM_QUERY($id:ID!) {
     album(where: {id:$id}) {
      id
      title
      description
      coverImage
      largeCoverImage
     }
   }
`;
const UPDATE_ALBUM_MUTATION = gql`
  mutation UPDATE_ALBUM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $coverImage: String
    $largeCoverImage: String
  ) {
    updateAlbum(
      id: $id
      title: $title
      description: $description
      coverImage: $coverImage
      largeCoverImage: $largeCoverImage
    ) {
      id
      title
      description
      coverImage
      largeCoverImage
    }
  }
`;

class UpdateAlbum extends Component {
  state = {};
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  updateAlbum = async (e, updateAlbumMutation) => {
    e.preventDefault();
    const res = await updateAlbumMutation({
      variables: {
        id: this.props.id,
        ...this.state,
        coverImage: this.state.coverImage || RandomFallbackCoverImageAlbum()
      }
    })
    console.log('Updated album', res);
  }

  render() {
    console.log('props', this.props);

    return (
      <Query query={SINGLE_ALBUM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>
          if (!data.album) return <p>No Album found</p>
          return (
            <Mutation mutation={UPDATE_ALBUM_MUTATION}>
              {(updateAlbum, { loading, error }) => (
                <Form onSubmit={e => this.updateAlbum(e, updateAlbum)}>
                  <ErrorMessage error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">
                      Title *
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Album title"
                        required
                        defaultValue={data.album.title}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="description">
                      Description
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Album description"
                        defaultValue={data.album.description}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="coverImage">
                      coverImage
                      <input
                        type="text"
                        id="coverImage"
                        name="coverImage"
                        placeholder="Album coverImage"
                        defaultValue={data.album.coverImage}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">Sav{loading ? 'ing' : 'e'} changes</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          )
        }}
      </Query>
    );
  }
}

export default UpdateAlbum;