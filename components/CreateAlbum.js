import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import ErrorMessage from '../components/ErrorMessage';
import { RandomFallbackCoverImageAlbum } from '../utils/constants';


const CREATE_ALBUM_MUTATION = gql`
  mutation CREATE_ALBUM_MUTATION(
    $title: String!
    $description: String
    $coverImage: String
    $largeCoverImage: String
  ) {
    createAlbum(
      title: $title
      description: $description
      coverImage: $coverImage
      largeCoverImage: $largeCoverImage
    ) {
      id
    }
  }
`;

class CreateAlbum extends Component {
  state = {
    title: '',
    description: '',
    coverImage: '',
    largeCoverImage: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Mutation mutation={CREATE_ALBUM_MUTATION}>
        {(createAlbum, { loading, error }) => (
          <Form onSubmit={async e => {
            e.preventDefault();
            const res = await createAlbum({
              variables: {
                ...this.state,
                coverImage: this.state.coverImage || RandomFallbackCoverImageAlbum()
              }
            });
            console.log('res', res);
          }}>
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
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="description">
                Description
              <textarea
                  id="description"
                  name="description"
                  placeholder="Album description"
                  value={this.state.description}
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
                  value={this.state.coverImage}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateAlbum;