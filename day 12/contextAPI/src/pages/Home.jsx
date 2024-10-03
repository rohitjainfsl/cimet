import { ThemeProvider } from "@material-tailwind/react";
import { CarouselDefault } from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <>
      <ThemeProvider>
        <CarouselDefault />
      </ThemeProvider>
      <FeaturedProducts />
    </>
  );
}

export default Home;
