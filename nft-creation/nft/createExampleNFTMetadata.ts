import { AttackerStats, DefenderStats, GoalkeeperStats, MidfielderStats, Player, Position, STAT_TEMPLATES, Stats } from "../types/player";
import { PLAYER_NAME_POOL, PLAYER_LAST_NAME_POOL, UNREVEALED_PLAYER_IMG } from "../nft/constants";
import { Metadata } from "../types/metadata";
import fs from 'fs';
import path from 'path';

export function generateRandomStat(): number {
    return Math.floor(Math.random() * 100); // Generates a random integer between 0 and 100
}

export function generateStats(position: Position): Stats {
    const template = STAT_TEMPLATES[position];
    const stats = Object.keys(template).reduce((acc, key) => {
        acc[key] = generateRandomStat();
        return acc;
    }, {} as Stats);

    return stats;
}


export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomPlayer(): Player {
    const name = `${PLAYER_NAME_POOL[generateRandomNumber(0, PLAYER_NAME_POOL.length - 1)]} ${PLAYER_LAST_NAME_POOL[generateRandomNumber(0, PLAYER_LAST_NAME_POOL.length - 1)]}`;
    const positionKeys = Object.keys(Position);
    const position = Position[positionKeys[generateRandomNumber(0, positionKeys.length - 1)] as keyof typeof Position];
    const stats = generateStats(position);
    const stars = generateRandomNumber(1, 5);
    const overall = Object.values(stats).reduce((acc, stat) => acc + stat, 0) / Object.keys(stats).length;

    return {
        name,
        position,
        stats,
        stars,
        overall: Math.floor(overall),
    };
}


export function generateMetadata(index: number) {
    const player = generateRandomPlayer();

    return {
        name: `Player #${index + 1}`,
        symbol: `FUTSOL`,
        description: `Example metadata for Player as part of FutSol Game`,
        image: UNREVEALED_PLAYER_IMG,
        attributes: [
            { trait: "Name", value: player.name },
            { trait: "Stars", value: player.stars.toString() },
            { trait: "Overall", value: player.overall.toString() },
            { trait: "Position", value: player.position },
            ...(Object.keys(player.stats).map(statKey => ({
                trait: statKey,
                value: player.stats[statKey].toString()
            })))
        ],
        properties: {
            category: "image",
            collection: {
                name: "FutSol Game",
                family: "FUTSOL"
            }
        },
        creators: [
            {
                address: "HQxRUAWUdGE9JDS9GcP7y8seejeixJT8UyypHAV55PqG",
                share: 100
            }
        ]
    } as Metadata;
}


export function checkAndCreateMetadataFolder() {
    const folderPath = path.join(__dirname, 'metadata');

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    } else {
        const files = fs.readdirSync(folderPath);
        files.forEach(file => {
            fs.unlinkSync(path.join(folderPath, file));
        });
    }
}

export function saveMetadataToFile(index: number, metadata: Metadata) {
    const filePath = path.join(__dirname, 'metadata', `${index}.json`);
    fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2));
}

// function main() {
//     const GENERATION_AMOUNT = 25;
//     checkAndCreateMetadataFolder();

//     for (let i = 0; i < GENERATION_AMOUNT; i++) {
//         const metadata = generateMetadata(i);
//         saveMetadataToFile(i, metadata);
//     }
// }
