
import { PublicKey } from "@metaplex-foundation/umi";
import { getUmi } from "./config/setup";
import { checkAndCreateMetadataFolder, generateMetadata } from "./nft/createExampleNFTMetadata";
import { CreateNftMetadata, createNFT } from "./nft/createNFT";
import { uploadImage, uploadJSON } from "./nft/uploadFile";
import { base58 } from "@metaplex-foundation/umi/serializers";

async function main() {
    const UMI = getUmi();

    // const mints: PublicKey[] = [];

    // const GENERATION_AMOUNT = 25;
    // for (let i = 0; i < GENERATION_AMOUNT; i++) {
    //     const metadata = generateMetadata(i);
    //     const uri = await uploadJSON({ content: metadata, UMI });

    //     const nftPub = await createNFT({
    //         name: metadata.name,
    //         uri,
    //         UMI
    //     });

    //     if (nftPub) {
    //         mints.push(nftPub);
    //         console.log(`Mint successful: ${nftPub.toString()}`);
    //     }
    //     else {
    //         console.log(`Error occurred while creating NFT: ${metadata.name}`);
    //     }
    // }

    // console.log(`Successfully minted NFTs, please check wallet: https://solscan.io/account/${UMI.identity.publicKey.toString()}?cluster=devnet`);

}

main();