import RestaurantGallery from "../../components/common/RestaurantGallery";

const images = [
  '/n1.jpg', '/n2.jpg', '/n3.jpg', '/n4.jpg', '/n5.jpg',
  '/n6.jpg', '/n7.jpg', '/n8.jpg', '/n9.jpg'
];

export default function Gallery() {
  return (
    <RestaurantGallery
      title="Al Naseeb Gallery"
      images={images}
      brandColor="#E1B43B"
    />
  );
}
