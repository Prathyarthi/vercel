import { S3 } from "aws-sdk"
import fs from 'fs'

const s3 = new S3({
    accessKeyId: "",
    secretAccessKey: "",
    endpoint: ""
})

// fileName -> output/6tg12/src/App.jsx
// localFilePath -> Users/prathyarthi/vercel_clone/dist/output/6tg12/src/App.jsx
export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath)
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercel",
        Key: fileName
    }).promise()
}