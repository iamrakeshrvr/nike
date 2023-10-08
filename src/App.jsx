import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='bg-black xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='bg-black padding'>
        <PopularProducts />
      </section>
      <section className='bg-black padding'>
        <SuperQuality />
      </section>
      <section className='bg-black padding-x py-10'>
        <Services />
      </section>
      <section className='bg-black padding'>
        <SpecialOffer />
      </section>
      <section className='bg-black  padding'>
        <CustomerReviews />
      </section>
      <section className='bg-black padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-red-500 padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;