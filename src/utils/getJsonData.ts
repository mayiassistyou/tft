import path from "path"
import fsPromises from "fs/promises";

export default async function getJsonData(fileName: string) {
    const filePath = path.join(process.cwd(), `json/${fileName}`);

    const jsonData = await fsPromises.readFile(filePath);
    return JSON.parse(jsonData.toString());
}