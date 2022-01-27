const baseURL = 'http://localhost:5000/api/shares';

const SharesService = {

    getStock() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    // updateShares(shares) {
    //     return fetch(baseURL + shares._id, {
    //         method: 'PUT',
    //         body: JSON.stringify(shares),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json());
    // },


}
export default SharesService;