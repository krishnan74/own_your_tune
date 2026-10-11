import React, { useState } from "react";
import Layout from "./Layout";
import MusicCard from "../components/MusicCard";

const musicData = [
  {
    title: "Closer",
    imageUrl: "closer.jpeg",
    price: 7,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Pop",
    songArtist: "HALSEY ft. Chainsmokers",
  },
  {
    title: "Shape of You",
    imageUrl: "shape.png",
    price: 3,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Pop",
    songArtist: "Ed Sheeran",
  },
  {
    title: "Beat it",
    imageUrl: "beatit.jpeg",
    price: 8,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Pop",
    songArtist: "Michael Jackson",
  },
  {
    title: "Born To Die",
    imageUrl: "borntodie.jpeg",
    price: 7,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Pop",
    songArtist: "Lana Del Rey",
  },
  {
    title: "Meat Loaf",
    imageUrl: "meatloaf.jpeg",
    price: 7,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Rock",
    songArtist: "Meat Loaf",
  },
  {
    title: "Paradise",
    imageUrl: "paradise.jpeg",
    price: 7,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Pop",
    songArtist: "Coldplay",
  },
  {
    title: "Dark Horse",
    imageUrl: "perry.jpeg",
    price: 7,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Pop",
    songArtist: "Katy Perry",
  },
  {
    title: "Rebirth",
    imageUrl: "rebirth.jpeg",
    price: 5,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Rock",
    songArtist: "Red Hot Chili Peppers",
  },
  {
    title: "Starboy",
    imageUrl: "starboy.jpeg",
    price: 6,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "R&B",
    songArtist: "The Weeknd",
  },
  {
    title: "1989",
    imageUrl: "taylor.jpeg",
    price: 4,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Pop",
    songArtist: "Taylor Swift",
  },
  {
    title: "Youth",
    imageUrl: "youth.jpeg",
    price: 3,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Pop",
    songArtist: "Troye Sivan",
  },
  {
    title: "Despacito",
    imageUrl: "desp.jpeg",
    price: 5,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
    songGenre: "Reggaeton",
    songArtist: "Luis Fonsi ft. Daddy Yankee",
  },
];

const ExplorePage = () => {
  const [copiedArtistAddress, setCopiedArtistAddress] = useState(null);

  const copyArtistAddress = (artistAddress) => {
    const textArea = document.createElement("textarea");
    textArea.value = artistAddress;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setCopiedArtistAddress(artistAddress);
  };

  return (
    <Layout>
      <div className="grid grid-cols-4 relative top-[100px]">
        {musicData.map((music, index) => (
          <div key={index}>
            <MusicCard
              title={music.title}
              imageUrl={music.imageUrl}
              songPrice={music.price}
              artistAddress={music.artistAddress}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ExplorePage;
