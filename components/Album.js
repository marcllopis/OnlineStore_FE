import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import PictureStyles from './styles/PictureStyles';


class Album extends Component {

  render() {
    const { album } = this.props;
    return (
      <PictureStyles>
        {album.coverImage && <img src={album.coverImage} alt={album.title} />}

        <Title>
          <Link
            href={{
              pathname: '/album',
              query: { id: album.id },
            }}
          >
            <a>{album.title}</a>
          </Link>
        </Title>
        <p>{album.description}</p>

        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id: album.id },
            }}
          >
            <a>Update</a>
          </Link>
          <button>Delete </button>
        </div>
      </PictureStyles>
    );
  }
}
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Album;