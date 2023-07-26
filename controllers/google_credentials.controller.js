const { default: axios } = require("axios");
const db = require("../sequelize/models/index");
const { google } = require("googleapis");
const auth = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);
exports.saveGoogleCredentials = async ({ body: { access_token } }, res) => {
  auth.setCredentials({ access_token: access_token });

  const drive = google.drive({ version: "v3", auth });
  try {
    const profile = await axios.get(
      "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    if (
      profile.data &&
      profile.data.names &&
      profile.data.names[0].displayName
    ) {
      const data = await db.google_credentials.create({
        access_token: access_token,
        name: profile.data.names[0].displayName,
      });
      if (data) {
        const response = await drive.files.list({
          pageSize: 50, // Number of files to retrieve
          fields: "nextPageToken, files(id, name,mimeType,size)",
        });
        const files = response.data.files;
        if (files.length) {
          res.send({ status: "success", data: files });
        } else {
          res.send({ status: "error", data: [] });
        }
      } else res.send({ status: "error", data: [] });
    } else res.send({ status: "error", data: [] });
  } catch (error) {
    console.log("error:", error);
    res.status(200).send({ status: "error", message: error });
  }
};
exports.getFileStorageUse = async ({ body: { access_token } }, res) => {
  auth.setCredentials({ access_token: access_token });

  const drive = google.drive({ version: "v3", auth });
  try {
    const response = await drive.about.get({
      fields: "storageQuota",
    });
    if (response.data && response.data.storageQuota) {
      const files = response.data.storageQuota;
      if (files.limit && files.usage) {
        res.send({ status: "success", data: files });
      } else {
        res.send({ status: "error", data: {} });
        console.log("No files found.");
      }
    } else res.send({ status: "error", data: {} });
  } catch (error) {
    console.log("error:", error);
    res.status(200).send({ status: "error", message: error });
  }
};
exports.revokeAccessToken = async ({ body: { access_token } }, res) => {
  try {
    const response = await axios.post("https://oauth2.googleapis.com/revoke", {
      token: access_token,
    });
    if (response.status === 200) {
      res.send({ status: "success", data: true });
    } else {
      // Failed to revoke token
      res.send({ status: "error", data: false });
    }
  } catch (error) {
    console.error("Error revoking token:", error.message);
    res.status(200).send({ status: "error", message: error });
  }
};
