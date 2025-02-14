import React, { useEffect, useState } from 'react';

const Preview = ({ data, width, height }) => {
  const [widthRatio, setWidthRatio] = useState(width);
  const [heightRatio, setHeightRatio] = useState(height);

  console.log(width, height);

  // useEffect(() => {
  //   if (width) {
  //     setWidthRatio(width);
  //   }
  //   if (height) {
  //     setHeightRatio(1 / height);
  //   }
  //   console.log(width, height);
  // }, [width, height]);

  return (
    <div className="relative flex justify-center h-fit">
      <canvas
        // ref={canvasRef}
        className="bg-gray-200 border-2  relative"
        style={{
          width: data.size.width / 3 + 'px',
          height: data.size.height / 3 + 'px'
        }}
      />
      {data.hasTitle && (
        <p
          // ref={titleRef}
          style={{
            position: 'absolute',
            cursor: 'move',
            fontSize: data.font.title_size / 3 + 'px',
            width: data.font.title_width / 3 + 'px',
            border: '1px solid black',
            textAlign: 'center',
            color: data.font.title_color,
            textAlign: data.font.title_align,
            top: 100
          }}
        >
          Title
        </p>
      )}
      <p
        // ref={contentRef}
        style={{
          position: 'absolute',
          cursor: 'move',
          fontSize: data.font.content_size / 3 + 'px',
          width: data.font.content_width / 3 + 'px',
          minHeight: 'fit-content',
          height: data.font.content_height / 3 + 'px',
          border: '1px solid black',
          flexWrap: 'wrap',
          textAlign: data.font.content_align,
          color: data.font.content_color
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem deserunt incidunt placeat inventore, porro cum
        mollitia quas, tempore accusamus esse voluptatum suscipit ea animi laborum harum quia! Doloribus, ipsum.
      </p>
      {data.hasAuthor && (
        <p
          // ref={authorRef}
          style={{
            position: 'absolute',
            cursor: 'move',
            fontSize: data.font.credit_size / 3 + 'px',
            width: data.font.credit_width / 3 + 'px',
            border: '1px solid black',
            textAlign: data.font.credit_align,
            color: data.font.credit_color
          }}
        >
          Author or credit
        </p>
      )}
    </div>
  );
};

export default Preview;
