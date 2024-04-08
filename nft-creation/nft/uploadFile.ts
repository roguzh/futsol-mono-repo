import { Umi, createGenericFile, createGenericFileFromBrowserFile } from "@metaplex-foundation/umi";
import * as fs from "fs";

export async function uploadJSON({
    content, UMI
}: {
    content: Object;
    UMI: Umi;
}) {
    const uploadURI = await UMI.uploader.uploadJson(content);
    return uploadURI;
}



export async function uploadImage({
    imagePath,
    extension,
    UMI
}: {
    imagePath: string;
    extension: string;
    UMI: Umi;
}) {
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBlob = new Blob([imageBuffer], { type: 'image/' + extension });
    const imageFile = new File([imageBlob], 'image. ' + extension, { type: 'image/' + extension });

    const genericFile = await createGenericFileFromBrowserFile(imageFile, { contentType: imageFile.type });
    const uploadURI = await UMI.uploader.upload([genericFile]);
    return uploadURI;
}
