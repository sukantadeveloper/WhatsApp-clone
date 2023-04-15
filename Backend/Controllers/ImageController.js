import grid from "gridfs-stream";
import mongoose from "mongoose";
// const url = "https://whatsappbackend-mfgj.onrender.com";

let gfs;
let gridFsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(404).send("File not found");
  }
  const imageUrl = `${url}/file/${req.file.filename}`;
  return res.status(200).send(imageUrl);
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
