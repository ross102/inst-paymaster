import { Image } from "..";

function AllPaymasters() {
  return (
    <div className="relative  py-9 ">
      <h5 className="absolute top-[100px] text-lg mb-2 font-semibold">
        All paymasters
      </h5>
      <div className="allpaymasters">
        <div className="active-logo">
          <Image
            src="/assets/pm-icons/zeta.png"
            alt="paymaster active logo"
            blurDataURL="/assets/pm-icons/zeta.png"
            width={36}
            height={36}
            priority
          />
        </div>
        <p>
          <span className="font-bold text-xl">ZetaChain</span>
          <br />
          <span className="text-white text-opacity-30">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Purus morbi aliquam risus
            velit a faucibus urna volutpat nam. Est curabitur viverra.
          </span>
        </p>
        <div className="requirements ">
          <p className=" text-[#E170FF] text-sm  font-semibold">
            Requirements
            <Image
              src="/assets/pm-icons/expand_more.png"
              alt="paymaster check_circle"
              blurDataURL="/assets/pm-icons/expand_more.png"
              width={7}
              height={5}
              priority
            />
          </p>{" "}
          <ul>
            <li>
              <Image
                src="/assets/pm-icons/check_circle.png"
                alt="paymaster check_circle"
                blurDataURL="/assets/pm-icons/check_circle.png"
                width={13}
                height={13}
                priority
              />{" "}
              max nounce 100{" "}
            </li>
            <li>
              <Image
                src="/assets/pm-icons/check_circle.png"
                alt="paymaster check_circle"
                blurDataURL="/assets/pm-icons/check_circle.png"
                width={13}
                height={13}
                priority
              />{" "}
              1 bonq NFT{" "}
            </li>
            <li>
              <Image
                src="/assets/pm-icons/check_circle.png"
                alt="paymaster active logo"
                blurDataURL="/assets/pm-icons/check_circle.png"
                width={13}
                height={13}
                priority
              />{" "}
              400 Eth tokens{" "}
            </li>
          </ul>
        </div>
        <div className="usebtn">
          <button className="bg-[#9B2ACD] bg-opacity-20 w-[76px] h-[26px]  rounded-md">
            Use
          </button>
        </div>
      </div>
    </div>
  );
}

export const Singlelist = () => {
  return (
    <div className="container">
      <div className="allpaymasters">
        <div className="active-logo">
          <Image
            src="/assets/pm-icons/zeta.png"
            alt="paymaster active logo"
            blurDataURL="/assets/pm-icons/zeta.png"
            width={36}
            height={36}
            priority
          />
        </div>
        <p>
          <span className="font-bold text-xl">ZetaChain</span>
          <br />
          <span className="text-white text-opacity-30">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Purus morbi aliquam risus
            velit a faucibus urna volutpat nam. Est curabitur viverra.
          </span>
        </p>
        <div className="requirements ">
          <p className=" text-[#E170FF] text-sm  font-semibold">
            Requirements
            <Image
              src="/assets/pm-icons/expand_more.png"
              alt="paymaster check_circle"
              blurDataURL="/assets/pm-icons/expand_more.png"
              width={7}
              height={5}
              priority
            />
          </p>{" "}
          <ul>
            <li>
              <Image
                src="/assets/pm-icons/check_circle.png"
                alt="paymaster check_circle"
                blurDataURL="/assets/pm-icons/check_circle.png"
                width={13}
                height={13}
                priority
              />{" "}
              max nounce 100{" "}
            </li>
            <li>
              <Image
                src="/assets/pm-icons/check_circle.png"
                alt="paymaster check_circle"
                blurDataURL="/assets/pm-icons/check_circle.png"
                width={13}
                height={13}
                priority
              />{" "}
              1 bonq NFT{" "}
            </li>
            <li>
              <Image
                src="/assets/pm-icons/check_circle.png"
                alt="paymaster active logo"
                blurDataURL="/assets/pm-icons/check_circle.png"
                width={13}
                height={13}
                priority
              />{" "}
              400 Eth tokens{" "}
            </li>
          </ul>
        </div>
        <div className="usebtn">
          <button className="bg-[#9B2ACD] bg-opacity-20 w-[76px] h-[26px]  rounded-md">
            Use
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllPaymasters;