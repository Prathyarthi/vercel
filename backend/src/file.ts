import fs from 'fs'
import path from 'path'

export const getAllFiles = (folderPath: string) => {
    let response: string[] = []

    const allFilesAndFolders = fs.readdirSync(folderPath)
    allFilesAndFolders.forEach(file => {
        const fullFilePath = path.join(folderPath, file)     // It mean the file path gets appended to the folder path. Ex:  /Users/prathyarthi/vercel_clone/dist/output/6jg24/App.jsx

        if (fs.statSync(fullFilePath).isDirectory()) {  // Gives stats about the file, isDirectory() is a method of statSync
            response = response.concat(getAllFiles(fullFilePath))
        }
        else {
            response.push(fullFilePath)
        }
    })
    return response
}