
export default function (router, handle) {
    /** api **/
     router.get("/api/nft/:id", require("../container/nft.js").getNFTById)
     router.get("/api/getRiseFund", require("../container/nft.js").getRiseFund)

    //  router.get("/api/autoInsertData", require("../container/nft.js").autoInsertData)
     router.get("/api/autoInsertDescription", require("../container/nft.js").autoInsertDescription)
    
    // Default catch-all handler to allow Next.js to handle all other routes
    router.all("*", (req, res) => handle(req, res))
}