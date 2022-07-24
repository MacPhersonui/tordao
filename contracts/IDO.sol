// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
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
        require(
            block.timestamp >= starttime[0] && block.timestamp < starttime[1] ||
            block.timestamp >= starttime[2] && block.timestamp < starttime[3] ||
            block.timestamp >= starttime[4] && block.timestamp < starttime[5]
        , 'Out of time interval');
        _;
    }

    function setStart(bool _start) public onlyOwner{
        start = _start;
    }

    function setStarttime(uint256[]  memory _starttime) public onlyOwner{
        require(_starttime.length == 6, 'Error starttime');
        starttime = _starttime;
    }

    function setInvite(address[] memory _inviter, address[] memory _account) public onlyOwner{
        require(_inviter.length == _account.length, "Not equal");
        for(uint256 i = 0; i < _inviter.length; i++ ){
            users[_inviter[i]].invitee.push(_account[i]);
            users[_account[i]].referrer = _inviter[i];
        }
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
        if(block.timestamp > starttime[1]){
            uint256 investment = arrSum(users[_account].deposits, starttime[0] , starttime[1]);
            // console.log("users[_account].deposits.length", users[_account].deposits.length);
            if(IDO[0] >= totalInvestment[0]){
                lockInvestment = lockInvestment.add(investment);
            }
            lockInvestment = lockInvestment.add(investment * IDO[0] / totalInvestment[0]);
        }
        if(block.timestamp > starttime[3]){
            uint256 investment2 = arrSum(users[_account].deposits, starttime[2] , starttime[3]);
            // console.log("users[_account].deposits.length", users[_account].deposits.length);
            if(IDO[1] >= totalInvestment[1]){
                lockInvestment = lockInvestment.add(investment2);
            }
            lockInvestment = lockInvestment.add(investment2 * IDO[1] / totalInvestment[1]);
        }
        if(block.timestamp > starttime[5]){
            uint256 investment3 = arrSum(users[_account].deposits, starttime[4] , starttime[5]);
            // console.log("users[_account].deposits.length", users[_account].deposits.length);
            if(IDO[2] >= totalInvestment[2]){
                lockInvestment = lockInvestment.add(investment3);
            }
            lockInvestment = lockInvestment.add(investment3 * IDO[2] / totalInvestment[2]);
        }
        return lockInvestment;
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
