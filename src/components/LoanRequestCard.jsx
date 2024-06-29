import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const LoanRequestCard = ({ loanRequest }) => {
  const handleApprove = async () => {
    try {
      await axios.post("https://techbuzzers.somee.com/api/Admin/approveLoan", {
        loanId: loanRequest.loanId,
      });
      toast.success("Approved");
    } catch (error) {
      toast.error("error occured");
      console.log(error);
    }
  };
  const handleReject = async () => {
    try {
      await axios.post("https://techbuzzers.somee.com/api/Admin/rejectLoan", {
        loanId: loanRequest.loanId,
      });
      toast.success("Rejected");
    } catch (error) {
      toast.error("error occured");
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col justify-between gap-2 text-lg border-2 border-black rounded-md p-2">
      <div className="flex">
        ID: <div>{loanRequest.loanId}</div>
      </div>
      <div className="flex">
        Username: <div>{loanRequest.userName}</div>
      </div>
      <div className="flex">
        User ID: <div>{loanRequest.userId}</div>
      </div>
      <div className="flex">
        Account ID: <div>{loanRequest.accountId}</div>
      </div>
      <div className="flex">
        Balance: <div>{loanRequest.balance}</div>
      </div>
      <div className="flex">
        Loan Type: <div>{loanRequest.loanType}</div>
      </div>
      <div className="flex">
        Requested Amount: <div>{loanRequest.requestedAmount}</div>
      </div>
      <div className="flex">
        Tenure: <div>{loanRequest.tenure}</div>
      </div>
      <div className="flex">
        Status: <div>{loanRequest.status}</div>
      </div>
      <div className="flex gap-4">
        <button
          className="border-2 border-black bg-green-300 p-2 rounded-md hover:bg-green-500"
          onClick={handleApprove}
        >
          Approve
        </button>
        <button
          className="border-2 border-black bg-red-300 p-2 rounded-md hover:bg-red-500"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>
    </div>
  );
};
export default LoanRequestCard;
