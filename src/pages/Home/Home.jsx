import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ListItem } from "@/components/customs/ListItem";
import { Button } from "@/components/ui/button";
import Nav from "@/components/customs/Nav";
import { VelocityText } from "@/components/customs/VelocityText";
import DepartmentInfoCard from "../Departments/DepartmentInfo/DepartmentInfoCard";
import { MarqueeDemo } from "@/components/customs/Marquee";
import Crousal from "@/components/customs/Crousal";
import { fetchImages } from "@/lib/fetchImages";
import Loading from "../Loading/Loading";
import Nopage from "../NoPage/Nopage";
import Footer from "../Footer/Footer";
import { MagicCard } from "@/components/magicui/magic-card";
import NumberTicker from "@/components/magicui/number-ticker";
import { fetchDepartments } from "@/lib/fetchDepartments";
import { ShimmerButton } from "@/components/customs/ShimmerButton";
import { Context } from "@/context/Context";

function Home() {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState([]);

  const { allDepartements, setAllDepartements, setBeds } = useContext(Context);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const fetchedStats = await fetchDepartments({
          route: "/stats",
        });
        setStats(stats);
        const departmentsForTiles = await fetchDepartments({
          route: "/getDepartments",
        });
        
        const docs = await fetchDepartments({ route: "/admin/getDoctors" });
        const depart = await fetchImages({
          query: "Hospital",
          perPage: 10,
          orientation: "square",
        });
        // const docs = await fetchImages({ query: 'Doctors', perPage: 10, orientation: 'square' });
        console.log(departmentsForTiles);
        setAllDepartements(departmentsForTiles);
        setDepartments(depart);
        setDoctors(docs);
        console.log("departments", depart);
        console.log("Docs", docs);
      } catch (error) {
        console.log(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      {departments && doctors && (
        // w-screen
        <div className="home mt-24 border overflow-hidden">
          {/* NavBar */}
          <div className="main h-[100vh]">
            <div className="container w-full p-3 flex">
              <div className="main-text w-1/5 h-full flex pt-20 items-start flex-col ">
                <h1 className="font-extrabold tracking-tight text-6xl">
                  CareCrest Multispeciality Hospital
                </h1>
                <p className="leading-7 mt-6">
                  At CareCrest Multispeciality Hospital, we provide exceptional
                  healthcare with advanced facilities and expert specialists.
                  Our mission is to deliver personalized, top-quality treatment
                  in a compassionate and comfortable environment.
                </p>
                <Link className="my-6" to="/departments">
                  <ShimmerButton text={"Book an Appointement"} />
                </Link>
              </div>
            </div>
          </div>
          <div className="decorations my-20">
            <VelocityText text={"CareCrest is Best •"} />
          </div>
          <div className="stats my-20">
            <div className="heading">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
                Stats
              </h2>
            </div>
            <div className="cards grid grid-cols-4 gap-5 grid-rows-1 px-20">
              {stats.map((item, idx) => {
                return (
                  <MagicCard
                    key={idx}
                    className={` cursor-pointer border-black/40  min-h-28 flex-col items-center justify-center whitespace-nowrap text-2xl`}
                    gradientColor="#c7c2b3"
                  >
                    <div className="text-lg text-center w-full font-semibold">
                      {item.name}
                    </div>
                    <NumberTicker value={item.number} />
                  </MagicCard>
                );
              })}
            </div>
          </div>
          <div className="departments mt-20 h-[100vh] p-5">
            <div className="container">
              <div className="heading">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
                  Departments
                </h2>
                <div className="cards flex justify-center items-center p-10">
                  <DepartmentInfoCard departments={departments} />
                </div>
              </div>
            </div>
          </div>
          <div className="doctors h-[100vh] w-full flex flex-col items-center justify-center my-20">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-center">
              Our Doctors
            </h2>
            <div className="doctor">
              <Crousal doctors={doctors} />
            </div>
          </div>
          <div className="marquee comments-reviews my-20">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-center">
              Reviews
            </h2>
            <MarqueeDemo />
          </div>
          {/* Footer */}
        </div>
      )}
    </>
  );
}

export default Home;
