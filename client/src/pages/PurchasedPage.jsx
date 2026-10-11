import React, { useState, useEffect } from "react";

import PurchaseMusicCard from "../components/PurchaseMusicCard";
//import Web3 from "web3";

const PurchasedPage = () => {
  
  const [purchasedSongs, setPurchasedSongs] = useState([]); // Array to store purchased songs

  // useEffect(() => {
  //   // Web3.js setup
  //   const provider = new Web3.providers.HttpProvider("your_provider_url");
  //   const web3 = new Web3(provider);

  //   // Load the smart contract ABI and address
  //   const contractABI = []; // Replace with your smart contract's ABI
  //   const contractAddress = "0x..."; // Replace with your smart contract's address

  //   // Create a contract instance
  //   const contract = new web3.eth.Contract(contractABI, contractAddress);

  //   // Define a function to retrieve purchased songs
  //   async function getPurchasedSongs() {
  //     try {
  //       // Replace this with your contract's function to get purchased songs
  //       const purchasedData = await contract.methods.getPurchasedSongs().call();

  //       // Update the state with the fetched data
  //       setPurchasedSongs(purchasedData);
  //     } catch (error) {
  //       console.error("Error retrieving purchased songs:", error);
  //     }
  //   }

  //   // Call the function to retrieve purchased songs
  //   getPurchasedSongs();
  // }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const musicData = [
    {
      title: "Closer",
      imageUrl: "closer.jpeg",
      price: 7,
      artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
      songGenre: "Pop",
      songArtist: "Halsey ft. Chainsmokers",
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


  return (
    <Layout>
      <div className="flex flex-col relative top-[100px] w-[1300px]">
        <div className="flex justify-between">
          <p className="text-white text-6xl font-extrabold ml-10 mt-10">
            Purchased Songs & Albums
          </p>
        </div>

        <div className="grid grid-cols-3 ">
          {musicData.map((song, index) => (
            <PurchaseMusicCard
              key={index}
              title={song.title}
              imageUrl={song.imageUrl} // Assuming your contract returns an image URL
              artist={song.songArtist}
              price={song.price}
              songGenre={song.songGenre}
              // Include additional song details as needed
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PurchasedPage;
