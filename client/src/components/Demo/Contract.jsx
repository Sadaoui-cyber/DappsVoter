import React, { useState, useEffect } from "react";
import Web3 from "web3";
import VotingArtifact from './Voting.json';


const Contract = () => {
  const [contract, setContract] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const initContract = async () => {
      // Votre code pour initialiser Web3 et récupérer le contrat Voting

      // Exemple de code pour initialiser Web3 avec MetaMask
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const networkId = await web3.eth.net.getId();
          const contractData = require("./Voting.json");
          const deployedNetwork = contractData.networks[networkId];
          const votingContract = new web3.eth.Contract(
            contractData.abi,
            deployedNetwork.address
          );
          setContract(votingContract);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("Web3 provider not found");
      }
    };

    initContract();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Votre code pour récupérer les données du contrat

      if (contract) {
        try {
          const winningProposalID = await contract.methods.winningProposalID().call();
          setValue(winningProposalID);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [contract]);

  return (
    <div>
      {contract ? (
        <div>
          <h2>✅GO!</h2>
        </div>
      ) : (
        <p>🕦Loading...</p>
      )}
    </div>
  );
};

export default Contract;



