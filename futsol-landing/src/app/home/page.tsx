"use client";
import React from "react";
import fieldPlayers from "../../../public/field_with_players.png";
import tokenomic from "../../../public/tokenomics.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className=" min-h-screen my-10" style={{}}>
      <style jsx global>{`
        p {
          font-size: 1.2vw;
        }
      `}</style>
      <div className="md:pl-20 pl-5 pr-5">
        <div className=" grid grid-cols-12">
          <div className=" col-span-8">
            <Image src={fieldPlayers} alt="field_players"></Image>
          </div>
          <div className=" pl-6 col-span-4">
            <div className="text-center">
              <h1 className="text-7xl">FUTSOL</h1>
            </div>
            <p className="text-aquagreen text-justify">
              {`Compete, win & earn. Solana's next-gen fantasy football game.
              Glory is one transfer away.`}
            </p>

            <p className="pt-4 text-[1.2vw] text-justify">
              {` Welcome to the exciting world of Solana's Next-Gen Fantasy
              Football Game "FUTSOL", where sports passion meets blockchain
              innovation. We are thrilled to announce a platform that redefines
              the fantasy sports you've seen before, providing not only the
              excitement of competition but also the ability to win prizes like
              never before.`}
            </p>
          </div>
        </div>
        <p className="text-justify text-[1.2vw] pt-6">
          Our vision is simple yet ambitious: to create a thrilling gaming
          experience on the Solana blockchain, where players can compete in
          fantasy football leagues, showcase their managing skills, and earn
          valuable tokens for their achievements. What sets us apart is our
          commitment to leveraging the power of blockchain to provide a fair and
          engaging experience for all participants.
        </p>
        <div className="pt-8 grid grid-cols-12">
          <div className=" pr-6 col-span-6">
            <div className="text-center">
              <h1 className="text-4xl">TOKENOMICS</h1>
            </div>
            <p className="text-aquagreen text-center">
              {`First step of earn `}
            </p>

            <p className="pt-4 text-[1.2vw] text-justify">
              {` One of the key innovations of our platform is the introduction of two distinct tokens, each serving a unique purpose within the ecosystem. These tokens will revolutionize the way players interact with the game. Our first token will provide revenue-sharing rights as well as a discount on purchasing NFTs, and our second token will introduce new ways to earn, trade, and participate in the community. Additionally, we're proud to announce that all footballers featured in the game are represented as Non-Fungible Tokens (NFTs), each with its own unique attributes and characteristics.`}
            </p>
          </div>
          <div className=" col-span-6">
            <Image src={tokenomic} alt="tokenomics map"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
