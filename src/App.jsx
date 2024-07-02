import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoanRequestCard from "./components/LoanRequestCard";
import axios from "axios";
import InsuranceRequestCard from "./components/InsuranceRequestCard";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [responseBody, setResponseBody] = useState(null);
  const [loan, setLoan] = useState(true);
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get("https://techbuzzers.somee.com/api/Admin/getRequest")
        .then((res) => {
          console.log(res.data);
          setResponseBody(res.data);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-2">
        <button
          className={`border-2 border-black p-2 rounded-md hover:bg-gray-500 ${
            loan ? "bg-gray-300" : ""
          }`}
          onClick={() => {
            setLoan(true);
          }}
        >
          Loan requests
        </button>
        <button
          className={`border-2 border-black p-2 rounded-md hover:bg-gray-500 ${
            !loan ? "bg-gray-300" : ""
          }`}
          onClick={() => {
            setLoan(false);
          }}
        >
          Insurance requests
        </button>
      </div>
      {loading ? (
        "loading"
      ) : responseBody === null ? (
        "error occured"
      ) : loan ? (
        <div className="grid grid-cols-3 gap-2">
          {responseBody.loanRequest.map((loanRequest) => (
            <div key={loanRequest.id}>
              <LoanRequestCard loanRequest={loanRequest}></LoanRequestCard>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {responseBody.insuranceRequest.map((insuranceRequest) => (
            <div key={insuranceRequest.id}>
              <InsuranceRequestCard
                insuranceRequest={insuranceRequest}
              ></InsuranceRequestCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
