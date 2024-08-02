"use client";

import { LoginForm } from "@/modules/auth";
import { RegisterForm } from "@/modules/auth/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/packages/ui";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div
        className={`userAuth flex h-screen flex-col items-center justify-center md:flex-row md:justify-around`}
      >
        <div className="left__column text-center">
          <Image
            src={"/6974855_4380.jpg"}
            alt=""
            width={500}
            height={500}
            className="form_img hidden md:inline-block"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <Image
          src={"/ndt-technologies-web-logo.svg"}
          alt=""
          width={100}
          height={100}
          className="logo"
        />

        <div>
          <div className="intro relative bottom-12 grid justify-items-center">
            <h1 className="mt-8 text-[2rem] font-semibold text-[#015a4a]">
              New Dawn <span className="text-[#dda83a]">360</span>
            </h1>
            <p className="text-center font-medium text-[#015a4a]">
              Your Time, Our Commitment, Streamlined Together.
            </p>
          </div>
          <Tabs
            defaultValue="login"
            className="form__container mx-auto w-[300px] md:w-[400px]"
          >
            <TabsList className="tabs__header mb-8">
              <TabsTrigger value="login" className="login_tab">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="register_tab">
                Register
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Home;
