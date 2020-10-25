import React from 'react'

const ReleasePage = ({
  author,
  title,
  images,
}) => {
  return (
    <div>
      <h2>title {title}</h2>
      
      <p>{author}</p>
      
      {images && images.map((image, index) => (
        <div key={index} style={{border: '1px solid grey'}}>
          {image}
        </div>
      ))}
    </div>
  );
}

export default ReleasePage