import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import ErrorMessage from '../components/ErrorMessage';


const CREATE_PICTURE_MUTATION = gql`
  mutation CREATE_PICTURE_MUTATION(
    $title: String!
    $description: String
    $image: String
    $largeImage: String
  ) {
    createPicture(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreatePicture extends Component {
  state = {
    addMore: false,
    title: '',
    description: '',
    image: '',
    largeImage: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Mutation mutation={CREATE_PICTURE_MUTATION}>
        {(createPicture, { loading, error }) => (
          <Form onSubmit={async e => {
            e.preventDefault();
            const res = await createPicture({
              variables: {
                ...this.state,
              }
            });
            this.setState({
              title: '',
              description: '',
              image: '',
              largeImage: '',
              addMore: true,
            })
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
                  placeholder="Picture title"
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
                  placeholder="Picture description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="image">
                Image
              <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">{!this.state.addMore ? 'Add image' : 'Add another image'}</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreatePicture;