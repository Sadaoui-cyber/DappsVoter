import React, { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns() {
  const { state: { contract, accounts } } = useEth();
  const [voterAddress, setVoterAddress] = useState("");
  const [proposalDescription, setProposalDescription] = useState("");
  const [voteId, setVoteId] = useState("");

  const addVoter = async () => {
    try {
      await contract.methods.addVoter(voterAddress).send({ from: accounts[0] });
      console.log("Voter registered successfully");
    } catch (error) {
      console.error("Failed to register voter:", error);
    }
  };

  const addProposal = async () => {
    try {
      await contract.methods.addProposal(proposalDescription).send({ from: accounts[0] });
      console.log("Proposal added successfully");
    } catch (error) {
      console.error("Failed to add proposal:", error);
    }
  };

  const vote = async () => {
    try {
      const voteIdInt = parseInt(voteId);
      await contract.methods.setVote(voteIdInt).send({ from: accounts[0] });
      console.log("Vote cast successfully");
    } catch (error) {
      console.error("Failed to cast vote:", error);
    }
  };

  const startProposalsRegistration = async () => {
    try {
      await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
      console.log("Started proposals registration");
    } catch (error) {
      console.error("Failed to start proposals registration:", error);
    }
  };

  const endProposalsRegistration = async () => {
    try {
      await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
      console.log("Ended proposals registration");
    } catch (error) {
      console.error("Failed to end proposals registration:", error);
    }
  };

  const startVotingSession = async () => {
    try {
      await contract.methods.startVotingSession().send({ from: accounts[0] });
      console.log("Started voting session");
    } catch (error) {
      console.error("Failed to start voting session:", error);
    }
  };

  const endVotingSession = async () => {
    try {
      await contract.methods.endVotingSession().send({ from: accounts[0] });
      console.log("Ended voting session");
    } catch (error) {
      console.error("Failed to end voting session:", error);
    }
  };

  const tallyVotes = async () => {
    try {
      await contract.methods.tallyVotes().send({ from: accounts[0] });
      console.log("Votes tallied");
    } catch (error) {
      console.error("Failed to tally votes:", error);
    }
  };

  const addWhitelist = async () => {
    try {
      await contract.methods.addWhitelist(voterAddress).send({ from: accounts[0] });
      console.log("Voter added to whitelist successfully");
    } catch (error) {
      console.error("Failed to add voter to whitelist:", error);
    }
  };

  const getWinningProposalID = async () => {
    try {
      const winningProposalId = await contract.methods.winningProposalID().call({ from: accounts[0] });
      console.log("Winning Proposal ID:", winningProposalId);
    } catch (error) {
      console.error("Failed to get winning Proposal ID:", error);
    }
  };

  const getVoter = async () => {
    try {
      const voter = await contract.methods.getVoter(voterAddress).call({ from: accounts[0] });
      console.log("Voter:", voter);
    } catch (error) {
      console.error("Failed to get voter:", error);
    }
  };

  const getOneProposal = async () => {
    try {
      const proposal = await contract.methods.getOneProposal(voteId).call({ from: accounts[0] });
      console.log("Proposal:", proposal);
    } catch (error) {
      console.error("Failed to get proposal:", error);
    }
  };

  return (
    <div className="contract-btns">
      
      <h3 style={{ fontSize: "28px", color: "blue", textAlign: "right" }}>Suivez ces étapes:</h3>

      <br /><br />
      <div className="action-group">
        <h4><b>Add Voter</b></h4>
        <input
          type="text"
          placeholder=" Voter Address"
          value={voterAddress}
          onChange={(e) => setVoterAddress(e.target.value)}
          style={{
            width: "250px",
            height: "30px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={addVoter}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Add Voter
        </button>
      </div>
      <div className="action-group">
        <h4><b>Start Proposals Registration</b></h4>
        <button
          onClick={startProposalsRegistration}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Start Proposals Registration
        </button>
      </div>
      <div className="action-group">
        <h4><b>Add Proposal</b></h4>
        <input
          type="text"
          placeholder=" Proposal Description"
          value={proposalDescription}
          onChange={(e) => setProposalDescription(e.target.value)}
          style={{
            width: "250px",
            height: "30px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={addProposal}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Add Proposal
        </button>
      </div>
      <div className="action-group">
        <h4><b>End Proposals Registration</b></h4>
        <button
          onClick={endProposalsRegistration}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          End Proposals Registration
        </button>
      </div>
      <div className="action-group">
        <h4><b>Start Voting Session</b></h4>
        <button
          onClick={startVotingSession}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Start Voting Session
        </button>
      </div>
      <div className="action-group">
        <h4><b>Vote</b></h4>
        <input
          type="text"
          placeholder=" Proposal ID"
          value={voteId}
          onChange={(e) => setVoteId(e.target.value)}
          style={{
            width: "250px",
            height: "30px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={vote}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Vote
        </button>
      </div>
      <div className="action-group">
        <h4><b>End Voting Session</b></h4>
        <button
          onClick={endVotingSession}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          End Voting Session
        </button>
      </div>
      <div className="action-group">
        <h4><b>Tally Votes</b></h4>
        <button
          onClick={tallyVotes}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Tally Votes
        </button>
      </div>
      <div className="action-group">
        <h4><b>Add Whitelist</b></h4>
        <input
          type="text"
          placeholder=" Voter Address"
          value={voterAddress}
          onChange={(e) => setVoterAddress(e.target.value)}
          style={{
            width: "250px",
            height: "30px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={addWhitelist}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Add Whitelist
        </button>
      </div>
      <div className="action-group">
        <h4><b>Get Winning Proposal ID</b></h4>
        <button
          onClick={getWinningProposalID}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Get Winning Proposal ID
        </button>
      </div>
      <div className="action-group">
        <h4><b>Get Voter</b></h4>
        <input
          type="text"
          placeholder=" Voter Address"
          value={voterAddress}
          onChange={(e) => setVoterAddress(e.target.value)}
          style={{
            width: "250px",
            height: "30px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={getVoter}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Get Voter
        </button>
      </div>
      <div className="action-group">
        <h4><b>Get One Proposal</b></h4>
        <input
          type="text"
          placeholder=" Proposal ID"
          value={voteId}
          onChange={(e) => setVoteId(e.target.value)}
          style={{
            width: "250px",
            height: "30px",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={getOneProposal}
          style={{
            width: "250px",
            height: "40px",
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Get One Proposal
        </button>
      </div>
    </div>
  );
}

export default ContractBtns;



