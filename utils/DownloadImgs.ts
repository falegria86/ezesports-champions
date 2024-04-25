"use server";

interface Champion {
    id: string;
    name: string;
}

const downloadImage = async (url: string, name: string): Promise<void> => {
    const response = await fetch(url);
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', `${name}.png`);
    document.body.appendChild(link);
    link.click();
    if (link.parentNode) {
        link.parentNode.removeChild(link);
    }
};

export const downloadAllImages = async (champions: Champion[]) => {
    for (const champion of champions) {
        // let formattedName = champion.name.replace(/[\s.]+/g, '');
        // formattedName = formattedName.replace(/'(\w)/g, (match, p1) => p1.toLowerCase());

        // URL para muebles art
        // const imageUrl = `https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/${champion.id}.png`;

        // URL para loading art
        const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;

        await downloadImage(imageUrl, champion.id);

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
};