import { Image } from "..";

function Paynav() {
  return (
    <nav className="active-paymaster-nav">
      <a href="/" className="paylogo">
        <Image
          src="/assets/pm-images/logo.png"
          blurDataURL="/assets/pm-images/logo.png"
          alt="paymaster logo"
          width={120}
          height={50}
          priority
        />
      </a>

      <ul className="list-ul">
        <li>
          {/* <a href="#" className="mx-1 py-1">
            Docs
          </a> */}
          <div>
            <select className="bg-black px-1 py-1 h-9" name="crypto">
              <option value="ethereum">
                {/* <Image
                  src="/assets/pm-icons/eth.png"
                  alt="paymaster ethereum icon"
                  width={10}
                  height={16}
                  priority
                /> */}
                Ethereum
              </option>
              <option value="ethereum">Ethereum</option>
            </select>
          </div>
        </li>
        <li>
          <button className="px-1  pm-0 py-1 w-30 sm:w-40  sm:h-9 bg-purple-600 rounded-md">
            Create Paymaster
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Paynav;
