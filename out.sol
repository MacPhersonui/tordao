// Sources flattened with hardhat v2.8.4 https://hardhat.org

// File @openzeppelin/contracts/utils/math/SafeMath.sol@v4.5.0

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (utils/math/SafeMath.sol)

pragma solidity ^0.8.0;

// CAUTION
// This version of SafeMath should only be used with Solidity 0.8 or later,
// because it relies on the compiler's built in overflow checks.

/**
 * @dev Wrappers over Solidity's arithmetic operations.
 *
 * NOTE: `SafeMath` is generally not needed starting with Solidity 0.8, since the compiler
 * now has built in overflow checking.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the substraction of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.
     *
     * _Available since v3.4._
     */
    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
            // benefit is lost if 'b' is also tested.
            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    /**
     * @dev Returns the division of two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.
     *
     * _Available since v3.4._
     */
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator.
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {trySub}.
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }

    /**
     * @dev Returns the integer division of two unsigned integers, reverting with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * reverting with custom message when dividing by zero.
     *
     * CAUTION: This function is deprecated because it requires allocating memory for the error
     * message unnecessarily. For custom revert reasons use {tryMod}.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}


// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.5.0

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}


// File @openzeppelin/contracts/utils/Address.sol@v4.5.0

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)

pragma solidity ^0.8.1;

/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     * ====
     *
     * [IMPORTANT]
     * ====
     * You shouldn't rely on `isContract` to protect against flash loan attacks!
     *
     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets
     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract
     * constructor.
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize/address.code.length, which returns 0
        // for contracts in construction, since the code is only stored at the end
        // of the constructor execution.

        return account.code.length > 0;
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain `call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionCall(target, data, "Address: low-level call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value
    ) internal returns (bytes memory) {
        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(
        address target,
        bytes memory data,
        uint256 value,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(address(this).balance >= value, "Address: insufficient balance for call");
        require(isContract(target), "Address: call to non-contract");

        (bool success, bytes memory returndata) = target.call{value: value}(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {
        return functionStaticCall(target, data, "Address: low-level static call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal view returns (bytes memory) {
        require(isContract(target), "Address: static call to non-contract");

        (bool success, bytes memory returndata) = target.staticcall(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionDelegateCall(target, data, "Address: low-level delegate call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(
        address target,
        bytes memory data,
        string memory errorMessage
    ) internal returns (bytes memory) {
        require(isContract(target), "Address: delegate call to non-contract");

        (bool success, bytes memory returndata) = target.delegatecall(data);
        return verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the
     * revert reason using the provided one.
     *
     * _Available since v4.3._
     */
    function verifyCallResult(
        bool success,
        bytes memory returndata,
        string memory errorMessage
    ) internal pure returns (bytes memory) {
        if (success) {
            return returndata;
        } else {
            // Look for revert reason and bubble it up if present
            if (returndata.length > 0) {
                // The easiest way to bubble the revert reason is using memory via assembly

                assembly {
                    let returndata_size := mload(returndata)
                    revert(add(32, returndata), returndata_size)
                }
            } else {
                revert(errorMessage);
            }
        }
    }
}


// File @openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol@v4.5.0

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC20/utils/SafeERC20.sol)

pragma solidity ^0.8.0;


/**
 * @title SafeERC20
 * @dev Wrappers around ERC20 operations that throw on failure (when the token
 * contract returns false). Tokens that return no value (and instead revert or
 * throw on failure) are also supported, non-reverting calls are assumed to be
 * successful.
 * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,
 * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.
 */
library SafeERC20 {
    using Address for address;

    function safeTransfer(
        IERC20 token,
        address to,
        uint256 value
    ) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
    }

    function safeTransferFrom(
        IERC20 token,
        address from,
        address to,
        uint256 value
    ) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
    }

    /**
     * @dev Deprecated. This function has issues similar to the ones found in
     * {IERC20-approve}, and its usage is discouraged.
     *
     * Whenever possible, use {safeIncreaseAllowance} and
     * {safeDecreaseAllowance} instead.
     */
    function safeApprove(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        // safeApprove should only be called when setting an initial allowance,
        // or when resetting it to zero. To increase and decrease it, use
        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'
        require(
            (value == 0) || (token.allowance(address(this), spender) == 0),
            "SafeERC20: approve from non-zero to non-zero allowance"
        );
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));
    }

    function safeIncreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        uint256 newAllowance = token.allowance(address(this), spender) + value;
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    function safeDecreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        unchecked {
            uint256 oldAllowance = token.allowance(address(this), spender);
            require(oldAllowance >= value, "SafeERC20: decreased allowance below zero");
            uint256 newAllowance = oldAllowance - value;
            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
        }
    }

    /**
     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
     * on the return value: the return value is optional (but if data is returned, it must not be false).
     * @param token The token targeted by the call.
     * @param data The call data (encoded using abi.encode or one of its variants).
     */
    function _callOptionalReturn(IERC20 token, bytes memory data) private {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that
        // the target address contains contract code and also asserts for success in the low-level call.

        bytes memory returndata = address(token).functionCall(data, "SafeERC20: low-level call failed");
        if (returndata.length > 0) {
            // Return data is optional
            require(abi.decode(returndata, (bool)), "SafeERC20: ERC20 operation did not succeed");
        }
    }
}


// File @openzeppelin/contracts/utils/Context.sol@v4.5.0

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}


// File @openzeppelin/contracts/access/Ownable.sol@v4.5.0

// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (access/Ownable.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}


// File contracts/IDO.sol

// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;




// import "hardhat/console.sol";

contract IDO is Ownable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    uint256 public decimals = 18;
    uint256[] public IDO = [200000  * (10 ** decimals), 200000  * (10 ** decimals), 100000  * (10 ** decimals)];
    uint256[] public starttime = [0, 0, 0, 0, 0, 0];
    uint256 public approvedQuota = 100 * (10 ** decimals);
    uint256 public maxDeposit = 500 * (10 ** decimals);
    uint256[] public totalInvestment = [0, 0, 0];
    IERC20 public USDT;
    mapping(address => uint256) public investments;
    bool start = true;


    struct Deposit {
		uint256 amount;
		uint256 start;
	}

    struct User {
		Deposit[] deposits;
		address[] invitee;
        address referrer;
        uint256 withdrawn;
	}

    mapping (address => User) internal users;

    constructor(address _usdt, uint256[] memory _starttime) {
        USDT = IERC20(_usdt);
        starttime = _starttime;
        // 0x343e53D0d06FBF692336CcF871d4c89aD8B706Be <= 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
        // users[0x343e53D0d06FBF692336CcF871d4c89aD8B706Be].invitee.push(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
        // users[0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266].referrer = 0x343e53D0d06FBF692336CcF871d4c89aD8B706Be;
        // users[0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266].deposits.push(Deposit(100 * (10 ** decimals), 1658237534));
        // totalInvestment[0] = totalInvestment[0].add(100 * (10 ** decimals));
        // // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 <= 0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281
        // users[0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266].invitee.push(0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281);
        // users[0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281].referrer = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
        // users[0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281].deposits.push(Deposit(100 * (10 ** decimals), 1658237534));
        // totalInvestment[0] = totalInvestment[0].add(100 * (10 ** decimals));
        // // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 <= 0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9
        // users[0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266].invitee.push(0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9);
        // users[0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9].referrer = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
        // users[0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9].deposits.push(Deposit(300 * (10 ** decimals), 1658237534));
        // totalInvestment[0] = totalInvestment[0].add(300 * (10 ** decimals));
        // // 0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281 <= 0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF
        // users[0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281].invitee.push(0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF);
        // users[0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF].referrer = 0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281;
        // users[0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF].deposits.push(Deposit(300 * (10 ** decimals), 1658237534));
        // totalInvestment[0] = totalInvestment[0].add(300 * (10 ** decimals));
        // // 0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281 <= 0x0c7cDbF9Dc661D430f8a907a5EaE692cC7b7Dd90
        // users[0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281].invitee.push(0x0c7cDbF9Dc661D430f8a907a5EaE692cC7b7Dd90);
        // users[0x0c7cDbF9Dc661D430f8a907a5EaE692cC7b7Dd90].referrer = 0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281;
        // users[0x0c7cDbF9Dc661D430f8a907a5EaE692cC7b7Dd90].deposits.push(Deposit(300 * (10 ** decimals), 1658237534));
        // totalInvestment[0] = totalInvestment[0].add(300 * (10 ** decimals));
        // // 0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281 <= 0x0c7cDbF9Dc661D430f8a907a5EaE692cC7b7Dd90
        // users[0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9].invitee.push(0x323eb9457d72b20b874493E7b72371a3733dB7C3);
        // users[0x323eb9457d72b20b874493E7b72371a3733dB7C3].referrer = 0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9;
        // users[0x323eb9457d72b20b874493E7b72371a3733dB7C3].deposits.push(Deposit(300 * (10 ** decimals), 1658237534));
        // totalInvestment[0] = totalInvestment[0].add(300 * (10 ** decimals));
    }

    modifier checkStart() {
        require(start, 'Not start');
        require(block.timestamp >= starttime[0] && block.timestamp < starttime[1], 'Out of time interval');
        require(block.timestamp >= starttime[2] && block.timestamp < starttime[3], 'Out of time interval');
        require(block.timestamp >= starttime[4] && block.timestamp < starttime[5], 'Out of time interval');
        _;
    }

    function setStart(bool _start) public onlyOwner{
        start = _start;
    }

    function setStarttime(uint256[]  memory _starttime) public onlyOwner{
        require(_starttime.length == 6, 'Error starttime');
        starttime = _starttime;
    }
    

    function arrSum(Deposit[] memory _deposits, uint256 _starttime, uint256 _endtime) public view returns(uint256 sum){
        for(uint256 i = 0; i < _deposits.length; i++){
            if(_deposits[i].start >= _starttime && _deposits[i].start < _endtime){
                // console.log("_deposits[i].amount", _deposits[i].amount);
                sum = sum.add(_deposits[i].amount);
            }
        }
        // console.log("sum", sum);
        return sum;
    }

    function getMyInvestment(address _account, uint256 _period) public view returns(uint256 myInvestment){
        if(_period == 0){
            return arrSum(users[_account].deposits, starttime[0] , starttime[1]);
        }
        if(_period == 1){
            return arrSum(users[_account].deposits, starttime[2] , starttime[3]);
        }
        if(_period == 2){
            return arrSum(users[_account].deposits, starttime[4] , starttime[5]);
        }
        return 0;
    }

    function getWeighting(address _account) public view returns(uint256 weighting){
        address[] memory invitee = users[_account].invitee;
        // console.log("invitee length", invitee.length);
        for(uint256 i = 0; i < invitee.length; i++){
            Deposit[] memory deposits = users[invitee[i]].deposits;
            uint256 totalDeposit = arrSum(deposits, 0, 9657885044);
            // console.log("invitee", invitee[i], totalDeposit);
            if( totalDeposit >= approvedQuota){
                weighting = weighting.add(10);
                // console.log("weighting", weighting);
            }
            address[] memory sub_invitee = users[invitee[i]].invitee;
            // console.log("subInvitee length", invitee[i], sub_invitee.length);
            for(uint j = 0; j < sub_invitee.length; j++){
                Deposit[] memory deposits = users[sub_invitee[j]].deposits;
                uint256 totalDeposit = arrSum(deposits, 0, 9657885044);
                // console.log("subInvitee", sub_invitee[j], totalDeposit);
                if( totalDeposit >= approvedQuota){
                    weighting = weighting.add(10);
                    // console.log("weighting", weighting);
                }
            }
        }
        if(weighting >= 100) weighting = 100;
        return weighting.add(100);
    }

    function getWhichPeriod() public view returns(uint256 period){
        // console.log("starttime", starttime[3]);
        if(block.timestamp >= starttime[0] && block.timestamp < starttime[1]){
            return 0;
        }
        if(block.timestamp >= starttime[2] && block.timestamp < starttime[3]){
            return 1;
        }
        if(block.timestamp >= starttime[4] && block.timestamp < starttime[5]){
            return 2;
        }
        return 3;
    }

    function getLockInvestment(address _account) public view returns(uint256 lockInvestment){
        uint256 period = getWhichPeriod();
        // console.log("period", period);
        if(period == 0){
            return 0;
        }
        uint256 investment = arrSum(users[_account].deposits, starttime[0] , starttime[1]);
        // console.log("users[_account].deposits.length", users[_account].deposits.length);
        if(IDO[0] >= totalInvestment[0]){
            lockInvestment = lockInvestment.add(investment);
        }
        lockInvestment = lockInvestment.add(investment * IDO[0] / totalInvestment[0]);
        if(period == 1){
            return lockInvestment;
        }
        uint256 investment2 = arrSum(users[_account].deposits, starttime[2] , starttime[3]);
        // console.log("users[_account].deposits.length", users[_account].deposits.length);
        if(IDO[1] >= totalInvestment[1]){
            lockInvestment = lockInvestment.add(investment2);
        }
        lockInvestment = lockInvestment.add(investment2 * IDO[1] / totalInvestment[1]);
        if(period == 2){
            return lockInvestment;
        }
        uint256 investment3 = arrSum(users[_account].deposits, starttime[4] , starttime[5]);
        // console.log("users[_account].deposits.length", users[_account].deposits.length);
        if(IDO[2] >= totalInvestment[2]){
            lockInvestment = lockInvestment.add(investment3);
        }
        lockInvestment = lockInvestment.add(investment3 * IDO[2] / totalInvestment[2]);
        if(period == 3){
            return lockInvestment;
        }
    }

    function getRemainingInvestment(address _account) public view returns(uint256 remainingInvestment){
        uint256 alreayInvestment = arrSum(users[_account].deposits, starttime[0] , starttime[5]);
        remainingInvestment = alreayInvestment - getLockInvestment(_account);
        // console.log("getRemainingInvestment",remainingInvestment);
        return remainingInvestment;
    }

    function withdrawRemainingInvestment() public checkStart {
        uint256 remainingInvestment = getRemainingInvestment(msg.sender);
        require(remainingInvestment >= users[msg.sender].withdrawn, "Lack of balance");
        remainingInvestment = remainingInvestment.sub(users[msg.sender].withdrawn);
        USDT.safeTransferFrom(msg.sender, address(this), remainingInvestment);
        users[msg.sender].withdrawn = users[msg.sender].withdrawn.add(remainingInvestment);
    }

    function investment(address _inviter, uint256 _amount) public checkStart{
        uint256 maxInvestment = maxDeposit.mul(getWeighting(msg.sender)).div(100);
        uint256 alreayInvestment = arrSum(users[msg.sender].deposits, starttime[0] , starttime[5]);
        uint256 remainingInvestment = getRemainingInvestment(msg.sender);
        // console.log("maxDeposit", maxInvestment);
        require(_inviter != 0x0000000000000000000000000000000000000000, "Inviter empty");
        require( _amount > 0 && _amount <= maxInvestment && _amount.add(remainingInvestment) <= maxInvestment, "Exceeds the investment maximum!" );
        require(_inviter != msg.sender, "You can't invite yourself");
        require(users[_inviter].referrer != msg.sender,"Your inviter's inviter can't be you");
        users[_inviter].invitee.push(msg.sender);
        if(users[msg.sender].referrer == 0x0000000000000000000000000000000000000000){
            users[msg.sender].referrer = _inviter;
        }
        USDT.safeTransferFrom(msg.sender, address(this), _amount);
        users[msg.sender].deposits.push(Deposit(_amount, block.timestamp));
        uint256 period = getWhichPeriod();
        totalInvestment[period] = totalInvestment[period].add(_amount);
    }

    function withdrawCoin() public onlyOwner checkStart{
        uint256 balance = USDT.balanceOf(address(this));
        if (balance > 0) {
            USDT.safeTransfer(msg.sender, balance);
        }
    }
}
