import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const InsuranceRequestCard = ({ insuranceRequest }) => {
  const handleApprove = async () => {
    try {
      await axios.post(
        "https://techbuzzers.somee.com/api/Admin/approveInsurance",
        { insuranceId: insuranceRequest.insuranceId }
      );
      toast.success("Approved");
    } catch (error) {
      toast.error("error occured");
      console.log(error);
    }
  };
  const handleReject = async () => {
    try {
      await axios.post(
        "https://techbuzzers.somee.com/api/Admin/rejectInsurance",
        { insuranceId: insuranceRequest.insuranceId }
      );
      toast.success("Rejected");
    } catch (error) {
      toast.error("error occured");
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col justify-between gap-2 text-lg border-2 border-black rounded-md p-2">
      <div className="flex">
        ID: <div>{insuranceRequest.insuranceId}</div>
      </div>
      <div className="flex">
        Username: <div>{insuranceRequest.userName}</div>
      </div>
      <div className="flex">
        User ID: <div>{insuranceRequest.userId}</div>
      </div>
      <div className="flex">
        Account ID: <div>{insuranceRequest.accountId}</div>
      </div>
      <div className="flex">
        Balance: <div>{insuranceRequest.balance}</div>
      </div>
      <div className="flex">
        Insurance Type: <div>{insuranceRequest.insuranceType}</div>
      </div>
      <div className="flex">
        Unique Identification Number:{" "}
        <div>{insuranceRequest.uniqueIdentificationNumber}</div>
      </div>
      <div className="flex">
        Purchase Year: <div>{insuranceRequest.yearOfPurchase}</div>
      </div>
      <div className="flex">
        Purchase Amount: <div>{insuranceRequest.purchaseAmount}</div>
      </div>
      <div className="flex">
        Installment Amount: <div>{insuranceRequest.installmentAmount}</div>
      </div>
      <div className="flex">
        Coverage Amount: <div>{insuranceRequest.amountCovered}</div>
      </div>
      <div className="flex">
        Status: <div>{insuranceRequest.status}</div>
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
export default InsuranceRequestCard;
