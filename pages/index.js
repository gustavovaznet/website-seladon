//INDEX PAGE

//IMPORTING
import { useState, useEffect } from "react";
import Head from "next/head";
import DefaultLayout, { config } from "../layouts/default";
import Step from "../components/Step";

//HOME
export default function Home() {
  let [steps] = useState(null);
  steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Filling in all fields requested, all fields are mandatory."
    },
    {
      id: 2,
      title: "Paste the Barcode",
      description:
        "Copy and paste the barcode of the bill you are going to pay."
    },
    {
      id: 3,
      title: "Inform the Credit Card",
      description: "You can use more than one credit card if you want to."
    },
    {
      id: 4,
      title: "<span class='text-5xl font-bold'>Done!</span>",
      description: "If everything is ok, you will receive a success message!"
    }
  ];

  useEffect(() => {}, [steps]);

  return (
    <DefaultLayout>
      <Head>
        <title>{config.siteTitle}</title>
      </Head>
      <section className="my-24 xl:my-44 m-auto container">
        <h1 className="title">Easy to Use</h1>
        <div className="flex flex-col md:py-12 px-8 md:px-0 md:flex-row md:mt-24 md:space-x-12">
          {steps.map((item) => (
            <Step
              countStep={item.id}
              title={item.title}
              description={item.description}
            ></Step>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
