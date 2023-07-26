const google_credentials = require("../controllers/google_credentials.controller");
module.exports = (app) => {
  // save google credentials
  app.post(
    "/api/save-google-credentials",
    google_credentials.saveGoogleCredentials
  );
  //get file storage use
  app.post("/api/get-file-storage-use", google_credentials.getFileStorageUse);

  // revoke access token
  app.post("/api/revoke-access-token", google_credentials.revokeAccessToken);
};
