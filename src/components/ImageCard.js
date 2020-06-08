import React from 'react';

class ImageCrad extends React.Component {
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCrad;
