import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./detail.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { ethers } from "ethers";
import WatchDexBase from "../../Contracts/WatchDexBase.json";
import { watchdexBaseaddress } from "../../config.example";
import Web3Modal from "web3modal";
import { useNotifyContext } from "../../context/notifyContext";
import Heronav from '../../Components/Heronav/Heronav'
import Footer from '../../Components/Footer/Footer'

const ProductDetail = () => {
  // @ts-ignore
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(true);
  const itemSelector = useSelector((state: any) => {
    return state.watchReducer.items;
  });

  // @ts-ignore
  const { set_notify } = useNotifyContext();

  // get product details
  useEffect(() => {
    if (id && itemSelector?.length > 0) {
      setLoading(false);
      let getItemDetails = itemSelector.find((v: any) => v.key === id);
      setDetails(getItemDetails);
    }
  }, [id, itemSelector]);

  //   buy percentage
  let [percentInp, setPercent] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const handleBuyByPercent = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provier = new ethers.providers.Web3Provider(connection);
    const signer = provier.getSigner();

    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD"
    )
      .then((response) => response.json())
      .then(async (data) => {
        let ethRate = Number(data.ETH.USD).toFixed(1);
        console.log("EthRate: ", ethRate);
        let amount = ethers.BigNumber.from(
          parseFloat(
            // @ts-ignore
            Number(details.inputValues.price * (percentage / 100)).toFixed(0)
          )
        );
        let ethAmount = ethers.BigNumber.from(
          // @ts-ignore
          Math.round((amount / ethRate) * 1000000000000000000).toString()
        );

        console.log("Amount: ", amount);
        console.log("EthAmount: ", ethAmount);
        let contract = new ethers.Contract(
          watchdexBaseaddress,
          WatchDexBase.abi,
          signer
        );
        let buySide = 0;
        const transaction = await contract.createMarketOrder(
          // @ts-ignore
          details.tokenId,
          amount,
          buySide,
          { value: ethAmount }
        );
        const tx = await transaction.wait();

        console.log("Transaction", tx);

        set_notify({
          open: true,
          msg: "Bought Successfully!",
          type: "success",
        });

        history.push("/");
      });
  };

  const handleBuyWhole = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provier = new ethers.providers.Web3Provider(connection);
    const signer = provier.getSigner();

    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD"
    )
      .then((response) => response.json())
      .then(async (data) => {
        let ethRate = data.ETH.USD;
        // let amount = details.inputValues.price * (percentage / 100);
        let ethAmount = ethers.BigNumber.from(
          Math.round(
            // @ts-ignore
            (details.inputValues.price / ethRate) * 1000000000000000000
          ).toString()
        );

        console.log("EthAmount: ", ethAmount);
        let contract = new ethers.Contract(
          watchdexBaseaddress,
          WatchDexBase.abi,
          signer
        );
        let buySide = 0;
        const transaction = await contract.createMarketOrder(
          // @ts-ignore
          details.tokenId,
          // @ts-ignore
          details.inputValues.price,
          buySide,
          { value: ethAmount }
        );
        const tx = await transaction.wait();

        console.log("Transaction", tx);

        set_notify({
          open: true,
          msg: "Bought Successfully!",
          type: "success",
        });
        history.push("/");
      });
  };

  return (
    <>
      <section className='relative w-full pb-6 bg-black sm:pb-8 lg:pb-12 h-screen'>
				<div className='relative z-20 px-10 mx-auto max-w-screen-2xl'>
					<Heronav />
					  <section className=''>
						
              <div className="">
                <div className="row py-3 mb-4">
                  {!loading ? (
                    <div className="col-12 p-0">
                      <div className="row m-0">
                        <div className="col-12 mb-2">
                          <IoArrowBackCircleSharp
                            onClick={() => history.goBack()}
                            className="cursor-pointer mb-2 goBackIcon"
                          />
                          <h3 className='text-gv-gold'>
                            Brand:{" "}
                            <span className="text-white">
                              {/* @ts-ignore */}
                              {details?.inputValues?.brand}
                            </span>
                          </h3>
                        </div>
                        <div className="col-md-5 mb-3 col-12">
                          <div className='watch_card'>
                            <img
                              className="img-fluid detail_page_img"
                              // @ts-ignore
                              src={details.url}
                              // @ts-ignore
                              alt={details?.inputValues?.brand}
                            />
                          </div>
                        </div>
                        <div className="col-md-7 col-12 text-white">
                          <h3 className="px-md-2 text-gv-gold">Other details: </h3>
                          <div className="d-flex justify-content-between align-items-center border rounded mx-md-2 px-3 py-2">
                            <p className="fw-bold m-0 ">Price: </p>
                            <p className="m-0 text-muted">
                              {/* @ts-ignore */}
                              ${details?.inputValues?.price}
                            </p>
                          </div>
                          <div className="d-flex mt-2 justify-content-between align-items-center border rounded mx-md-2 px-3 py-2">
                            <p className="fw-bold m-0">Model: </p>
                            <p className="m-0 text-muted">
                              {/* @ts-ignore */}
                              ${details?.inputValues?.model}
                            </p>
                          </div>
                          <div className="d-flex mt-2 justify-content-between align-items-center border rounded mx-md-2 px-3 py-2">
                            <p className="fw-bold m-0">Reference: </p>
                            <p className="m-0 text-muted">
                            {/* @ts-ignore */}
                              {details?.inputValues?.reference}
                            </p>
                          </div>
                          <div className="btnsContents flex items-center justify-between">
                            <button
                              className="bg-gv-gold text-white w-full py-3 px-4 rounded-sm"
                              onClick={() => setPercent(!percentInp)}
                            >
                              Buy %
                            </button>
                            <button
                              className="bg-gv-gold text-white ml-8 w-full py-3 px-4 rounded-sm"
                              onClick={handleBuyWhole}
                            >
                              Buy whole watch{" "}
                            </button>{" "}
                            <br />
                          </div>
                          {percentInp ? (
                            <InputGroup className="mb-3 mt-3">
                              <FormControl
                                placeholder="Enter value between 1% to 99%"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                type="number"
                                value={percentage}
                                // @ts-ignore
                                onChange={(e) => setPercentage(e.target.value)}
                              />
          
                              <Button variant="dark" onClick={handleBuyByPercent}>
                                Enter
                              </Button>
                            </InputGroup>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-100">
                        <hr />
                      </div>
                    </div>
                  ) : (
                    <div className="col-12 py-4 my-4 text-center">
                      <Spinner animation="border" variant="dark" />
                      <br />
                      <br />
                      <h4>Loading...</h4>
                    </div>
                  )}
                </div>
            </div>

							
					</section>
				</div>
				<div className='absolute inset-0 z-10 flex items-end w-full h-full bg-cover opacity-50'>
					<img
						src='/images/blue_bg.png'
						className='object-cover w-full h-full'
					/>
				</div>
			</section>
    
    <Footer/>
    </>
  );
};

export default ProductDetail;
