import Page from "@/components/page";
import Footer from "@/components/custom-footer";
import PolaroidGallery from "./components/polaroidGallery";
import { Picture } from "@/hooks/types";

export default function GalleryPage() {
  const images: Picture[] = [
    { id: 1, src: "/RHS_Photos/IMG_1930.JPG" },
    { id: 2, src: "/RHS_Photos/IMG_1932.JPG" },
    { id: 3, src: "/RHS_Photos/IMG_1933.JPG" },
    { id: 6, src: "/RHS_Photos/IMG_1941.JPG" },
    { id: 5, src: "/RHS_Photos/IMG_1935.JPG" },
    { id: 4, src: "/RHS_Photos/IMG_1934.JPG" },
    { id: 11, src: "/RHS_Photos/IMG_1997.JPG" },
    { id: 8, src: "/RHS_Photos/IMG_1943.JPG" },
    { id: 9, src: "/RHS_Photos/IMG_1951.JPG" },
    { id: 10, src: "/RHS_Photos/IMG_1953.JPG" },
    { id: 7, src: "/RHS_Photos/IMG_1942.JPG" },
    { id: 12, src: "/RHS_Photos/IMG_2002.JPG" },
    { id: 13, src: "/RHS_Photos/IMG_2042.JPG" },
    { id: 20, src: "/RHS_Photos/IMG_2385.JPG" },
    { id: 21, src: "/RHS_Photos/IMG_2386.JPG" },
    { id: 24, src: "/RHS_Photos/IMG_2952.JPG" },
    { id: 15, src: "/RHS_Photos/IMG_2187 (2).JPG" },
    { id: 18, src: "/RHS_Photos/IMG_2317.JPG" },
    { id: 19, src: "/RHS_Photos/IMG_2321.JPG" },
    { id: 16, src: "/RHS_Photos/IMG_2238.JPG" },
    { id: 17, src: "/RHS_Photos/IMG_2241.JPG" },
    { id: 22, src: "/RHS_Photos/IMG_2387.JPG" },
    { id: 23, src: "/RHS_Photos/IMG_2568.JPG" },
    { id: 14, src: "/RHS_Photos/IMG_2145.JPG" },
    { id: 25, src: "/RHS_Photos/IMG_2954.JPG" },
    { id: 26, src: "/RHS_Photos/IMG_2998.JPG" },
    { id: 27, src: "/RHS_Photos/IMG_2999.JPG" },
    { id: 28, src: "/RHS_Photos/IMG_3000.JPG" },
  ];
  return (
    <Page>
      <h1 className="mt-10 mb-8 font-serif text-5xl text-black font-semibold mb-8 text-center">
        Photo Gallery
      </h1>
      <PolaroidGallery images={images} />
      <Footer />
    </Page>
  );
}
