import { createSplAssociatedTokenProgram, createSplTokenProgram } from "@metaplex-foundation/mpl-toolbox";
import { Umi, keypairIdentity } from "@metaplex-foundation/umi";
import { createIrysUploader } from "@metaplex-foundation/umi-uploader-irys";
import CONFIG from "./config.json";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { base58 } from "@metaplex-foundation/umi/serializers";

let UMI: Umi;
export const getUmi = () => {
    if (!UMI) {
        UMI = createUmi(CONFIG.RPC_URL);

        console.log(
            base58.deserialize(Uint8Array.from(CONFIG.KEYPAIR_SECRET))
        );

        const Keypair = UMI.eddsa.createKeypairFromSecretKey(
            Uint8Array.from(CONFIG.KEYPAIR_SECRET)
        );
        UMI.use(keypairIdentity(Keypair));

        UMI.programs.add(createSplAssociatedTokenProgram());
        UMI.programs.add(createSplTokenProgram());
        UMI.uploader = createIrysUploader(UMI);
    }

    return UMI;
}