import axios from 'axios'


export const getRiseFund = async (address) => {
    try {
        const {
            data
        } = await axios.get(`/api/getRiseFund`)
        return data
    } catch (error) {
        console.log(error)
    }

}
