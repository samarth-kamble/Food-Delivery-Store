import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Hungry?
            </p>
            <h2 className="text-5xl font-bold tracking-wider uppercase">
              Just Come To <span className="block py-4">Fooedied & Order</span>
            </h2>
            <p className="text-base text-center md:text-left text-neutral-500 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod
              ducimus ea debitis, repellendus expedita voluptates, nobis, enim
              neque magni aperiam.
            </p>
            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero">
                  Order Now
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full"
                  variant={"outline"}
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full relative h-[560px] flex items-center justify-center">
              <img
                src="/img/Food.png"
                alt="Hero Image"
                className="object-contain w-full h-full absolute"
              />
            </div>
          </div>
        </section>
        {/* Popular Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-20 md:gap-12 my-4 py-12"></section>
      </Container>
    </>
  );
};

export default HomePage;
