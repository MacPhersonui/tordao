const fs = require('fs')
const axios = require('axios')
const data = fs.readFileSync(`./Investment.json`, 'utf8');
const json = JSON.parse(data)
console.log(json)



var index = 0
var finnal_array = []

function getAddress(){
    console.log(json[index])
    axios.request({
        url: `https://www.oklink.com/api/explorer/v1/bsc/transfers?t=1659028777348&offset=0&limit=20&tranHash=${json[index]}`,
        method: `get`,
        headers: {
            'x-apiKey': 'LWIzMWUtNDU0Ny05Mjk5LWI2ZDA3Yjc2MzFhYmEyYzkwM2NjfDI3NzAxNDQwMjk3ODg5NjQ='
        },
    })
    .then(result=>{
        const { code, data } = result.data
        // console.log(data,code)
        if(code == 0){
            const token = data?.hits
            console.log("token", token)
            for (var i = 0; i < token.length; i++){
                if (token[i]['symbol'] == "USDT") {
                    console.log(json[index], token[i]['value'])
                    finnal_array.push({
                        "address":json[index],
                        "value": token[i]['value']
                    })
                }
            }
        }
        console.log("index", index)
        fs.writeFileSync('./airdrop.json', JSON.stringify(finnal_array))
        if(index == 2417){
            // console.log(JSON.stringify(finnal_array))
            fs.writeFileSync('./airdrop.json', JSON.stringify(finnal_array))
            return
        }
        index += 1
        getAddress()
    })
}

getAddress()
