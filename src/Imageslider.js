import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
 
const INITIAL_INDEX = 0


function Image() {
  const [index, setIndex] = React.useState(INITIAL_INDEX);

  React.useEffect (() => {
    const interval = setInterval(() => {
    if( index === images.length -1) {
        setIndex(INITIAL_INDEX)
    } else {
        setIndex(index + 1)
    }
  }, 5000)
    return () => clearInterval(interval)
  }, [index])
 
  const images = [
    {
      src:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1525200845123-a29d24f1ae65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1453486140354-a56fcc4bbfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1451680350250-2ae7d6e00f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    }
  ];
 
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(img => (
          <GalleryImage objectFit="contain" key={img.src} src={img.src} />
        ))}
      </Gallery>
    </div>
  );
}

export default Image