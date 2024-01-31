import React from "react";
import banner from "../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src='https://media.istockphoto.com/id/1161561165/photo/silhouette-of-the-meditaion-man-on-the-mountain.webp?b=1&s=170667a&w=0&k=20&c=hdzw_edlF6W87D4KsQ50h3h19b3afVBE0RpLSxh2WLM='
        alt=""
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute top-1/2 -translate-y-1/2 w-11/12 md:w-10/12 left-1/2 -translate-x-1/2">
        <h1 className="text-white text-3xl">
          Ready to ignite your fitness revolution?
        </h1>
        <p className="text-white pb-8 pt-2">
          There has never been a better time than right now. Dive into your
          fitness journey with StartFitter today.
        </p>
        <button className="bg-white py-4 px-12 rounded-full hover:bg-yellow-300">
          Get started
        </button>
      </div>
    </div>
  );
}
