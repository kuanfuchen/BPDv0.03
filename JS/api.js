const bdpAPI = new BDPClientAPI();
(async () => {
    await bdpAPI.initialize();
    /* The bdpAPI is ready to use! */
    const thePkgInfo = await bdpAPI.getCurrentPackageInfo();
    const files = await bdpAPI.listFiles();
})().catch((err) => {
    console.log(err);
    bdpAPI.log(err);
});