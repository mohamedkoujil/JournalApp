import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={3} rowHeight={200}>
      {images?.map((image) => (
        <ImageListItem key={image}>
          <img src={image} alt="gallery" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
