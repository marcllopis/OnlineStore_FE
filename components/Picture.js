import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import PictureStyles from './styles/PictureStyles';


class Picture extends Component {

  render() {
    const { picture, homeDisplay } = this.props;

    return (
      <PictureStyles>
        {picture.image && <img onClick={() => this.props.selectPicture(picture.id)} src={picture.image} alt={picture.title} />}
        {homeDisplay &&
          <div>
            <Title>
              <Link
                href={{
                  pathname: '/picture',
                  query: { id: picture.id },
                }}
              >
                <a>{picture.title}</a>
              </Link>
            </Title>
            <p>{picture.description}</p>
          </div>
        }
        {/* <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id: picture.id },
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <button>Add To Cart</button>
          <button>Delete </button>
        </div> */}
      </PictureStyles>
    );
  }
}
Picture.propTypes = {
  picture: PropTypes.object.isRequired,
};

export default Picture;