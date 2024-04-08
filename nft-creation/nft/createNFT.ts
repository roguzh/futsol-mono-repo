
import { PublicKey, TransactionBuilder, Umi, createAmount, generateSigner, publicKey, sol } from '@metaplex-foundation/umi';
import { createNft, createProgrammableNft, findMetadataPda } from '@metaplex-foundation/mpl-token-metadata';
import { findAssociatedTokenPda, setComputeUnitPrice } from '@metaplex-foundation/mpl-toolbox';
import { getUmi } from '../config/setup';

export interface CreateNftMetadata {
    name: string;
    uri: string;
}

export async function createNFT({
    name, uri, UMI
}: CreateNftMetadata & { UMI: Umi }) {

    const mint = generateSigner(UMI);
    const mintMetadata = findMetadataPda(UMI, { mint: mint.publicKey });
    const mintAta = findAssociatedTokenPda(UMI, {
        mint: mint.publicKey,
        owner: UMI.identity.publicKey
    });

    let txBuilder = new TransactionBuilder().add(
        createProgrammableNft(UMI, {
            mint,
            metadata: mintMetadata,
            tokenOwner: UMI.identity.publicKey,
            token: mintAta,
            uri,
            symbol: 'FUTSOL',
            name,
            sellerFeeBasisPoints: createAmount(500, "%", 2),
            payer: UMI.identity,
            creators: [
                {
                    verified: false,
                    address: publicKey(UMI.identity.publicKey),
                    share: 100,
                },
            ],
        })
    ).add(
        setComputeUnitPrice(UMI, {
            microLamports: 500000
        })
    );

    txBuilder = txBuilder.setFeePayer(UMI.identity);

    const latestBlockhash = await UMI.rpc.getLatestBlockhash({ commitment: 'confirmed' });
    txBuilder = txBuilder.setBlockhash(latestBlockhash);
    const solanaTx = await txBuilder.buildAndSign(UMI);
    const signature = await UMI.rpc.sendTransaction(solanaTx, {
        maxRetries: 9,
        skipPreflight: true
    });

    const confirmation = await UMI.rpc.confirmTransaction(signature, {
        strategy: {
            type: 'blockhash',
            blockhash: latestBlockhash.blockhash,
            lastValidBlockHeight: latestBlockhash.lastValidBlockHeight
        }
    })

    return (!(confirmation.value)) ? mint.publicKey as PublicKey : undefined;
}