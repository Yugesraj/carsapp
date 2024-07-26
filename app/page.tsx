import Image from "next/image";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CustomFilter from "./components/CustomFilter";
import { FetchCars, FilterProps, HomeProps } from "@/utils";
import CarCard from "./components/CarCard";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import ShowMore from "./components/ShowMore";


/* export default async function Home({searchParams} : HomeProps ) {


  const allcars = await FetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  //console.log(allcars);

  const isDataEmpty = !allcars || !Array.isArray(allcars) || allcars.length < 1;

  return (
    <main className="p-3">



      <Hero />

      <div className="w-full padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catelogue </h1>
          <p> Find your cars</p>

        </div>

        <div className="home__filters">

          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>

          {
            !isDataEmpty ? 
            (
            <section> <div className="home__cars-wrapper">
              {allcars?.map((car) =>(<CarCard car={car} />))}</div>
              
                <ShowMore 
                pageNumber = {(searchParams.limit || 10)/10}
                isNext={(searchParams.limit || 10)>
                  allcars.length
                }
                />

              </section>

            ) : 
            (<div className="home__error-container"> 
            <h2 className="text-xl text-black font-bold"> Oops no cars found! </h2>
              <p> {allcars?.message} </p></div>)
          }



        </div>

      </div>


    </main>


  );
}
 */


export default async function Home({ searchParams }: HomeProps) {
  
  const allCars = await FetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}