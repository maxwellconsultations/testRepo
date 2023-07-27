import { Contract, InfuraProvider, InfuraWebSocketProvider } from "ethers";
import "dotenv/config";
import { TESTLBP } from "./constants/contracts";
import { LBPABI } from "./constants/lbpabi";

if (!process.env.INFURA_MAINNET) {
  throw new Error("Missing INFURA_MAINNET environment variable");
}
const ethProvider = new InfuraWebSocketProvider(
  "homestead",
  process.env.INFURA_MAINNET
);

const ethProvider2 = new InfuraProvider(
  "homestead",
  process.env.INFURA_MAINNET
);

const testLBP = new Contract(TESTLBP, LBPABI, ethProvider);
const testLBP2 = new Contract(TESTLBP, LBPABI, ethProvider2);

//TO GET POOL TOKENS:
//balancerVault.getPoolTokens(LBP ID)

/*TO GET POOL STARTING TOKENS: 
LISTEN FOR PoolBalanceChanged EVENT ON POOL VAULT CONTRACT
PoolBalanceChanged (index_topic_1 bytes32 poolId, index_topic_2 address liquidityProvider, address[] tokens, int256[] deltas, uint256[] protocolFeeAmounts)
DELTAS ARE THE INTIAL TOKEN VALUES
*/

/*TO GET POOL INTIAILIZATOIN
LISTEN FOR POOLCREATED ON FjordLbpProxyV6
event PoolCreated(
        address indexed pool,
        bytes32 poolId,
        string name,
        string symbol,
        address[] tokens,
        uint256[] weights,
        uint256 swapFeePercentage,
        address owner,
        bool swapEnabledOnStart,
        LBPType lbpType
    );
*/
//ba=balanceA, bb=balanceB, wa=weightA, wb=weightB
//price_A = (ba ^ wa) / (bb ^ wb)
//price_B = (bb ^ wb) / (ba ^ wa)
//test
