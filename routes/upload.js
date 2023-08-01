
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { v4: uuid } = require("uuid");

const bucket = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: "AKIA2QFDA72GKAEC7MTM",
        secretAccessKey: "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"
    }
});

const express = require('express');
const router = express.Router();

router.get('/get/preSignedUrl', async (req, res) => {
    const contentType = req.query.contentType;
    const fileName =
        req.query.fileName.split(".")[0] +
        "-" +
        uuid() +
        "." +
        contentType.split("/")[1];
    const command = new PutObjectCommand({
        Bucket: "eduvlog-resource-bucket",
        Key: fileName,
        ContentType:contentType,
    });
    const url = await getSignedUrl(bucket, command, { expiresIn: 3600 });
    res.send({
        url: url
        ,fileName
    });
});

module.exports = router;
