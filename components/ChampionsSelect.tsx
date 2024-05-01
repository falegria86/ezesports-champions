"use client";

import { ChampionsContext } from "@/context";
import { ChampionData, ChampionsAPI } from "@/interface/ChampionInterface";
import { downloadAllImages } from "@/utils/DownloadImgs";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";

interface Champion {
    id: string;
    name: string;
}

export const ChampionsSelect = () => {
    const [champions, setChampions] = useState<Champion[]>([]);
    const [modo, setModo] = useState('row');
    const [imgMode, setImgMode] = useState(`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/`);
    const [imgExtension, setImgExtension] = useState(`.png`);

    const [blueSelectedChampion, setBlueSelectedChampion] = useState({
        player1: "Black",
        player2: "Black",
        player3: "Black",
        player4: "Black",
        player5: "Black",
    });

    const [redSelectedChampion, setRedSelectedChampion] = useState({
        player1: "Black",
        player2: "Black",
        player3: "Black",
        player4: "Black",
        player5: "Black",
    });

    const getChampionsData = async () => {
        try {
            const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion.json`);
            const data: ChampionsAPI = await res.json();

            const championsArray = Object.values(data.data).map((champion: ChampionData) => {
                return {
                    id: champion.id,
                    name: champion.name,
                };
            });

            setChampions(championsArray);
        } catch (error) {
            console.error("Error al obtener los datos: ", error);
        }
    };

    const handleReset = () => {
        setBlueSelectedChampion({
            player1: "Black",
            player2: "Black",
            player3: "Black",
            player4: "Black",
            player5: "Black",
        });

        setRedSelectedChampion({
            player1: "Black",
            player2: "Black",
            player3: "Black",
            player4: "Black",
            player5: "Black",
        });
    }

    const handleKeyPress = (event: any) => {
        if (event.ctrlKey && event.shiftKey && event.key === 'k') {
            setImgMode(`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/champion/`);
            setImgExtension('.png');
        } else if (event.ctrlKey && event.shiftKey && event.key === 'l') {
            setImgMode(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/`);
            setImgExtension('_0.jpg');
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, []);


    useEffect(() => {
        getChampionsData();
    }, []);

    const { alto: height, ancho } = useContext(ChampionsContext);
    const width = ancho / 5;
    return (
        <>
            <div className="flex gap-1 mt-5">
                {/* Selects */}
                <div className="w-[150px]">
                    {/* ------------------------------- Equipo Azul ------------------------------ */}
                    <div className="w-[150px] mr-2">
                        <h3 className="text-blue-500 font-bold">Equipo Azul</h3>
                        <div>
                            <label className="text-blue-500 text-[10px] font-semibold">Player 1</label>
                            <div>
                                <Select
                                    onChange={(e) => setBlueSelectedChampion(prevState => ({
                                        ...prevState,
                                        player1: e.target.value
                                    }))}
                                    value={blueSelectedChampion.player1}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label className="text-blue-500 text-[10px] font-semibold">Player 2</label>
                            <div>
                                <Select
                                    onChange={(e) => setBlueSelectedChampion(prevState => ({
                                        ...prevState,
                                        player2: e.target.value
                                    }))}
                                    value={blueSelectedChampion.player2}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label className="text-blue-500 text-[10px] font-semibold">Player 3</label>
                            <div>
                                <Select
                                    onChange={(e) => setBlueSelectedChampion(prevState => ({
                                        ...prevState,
                                        player3: e.target.value
                                    }))}
                                    value={blueSelectedChampion.player3}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label className="text-blue-500 text-[10px] font-semibold">Player 4</label>
                            <div>
                                <Select
                                    onChange={(e) => setBlueSelectedChampion(prevState => ({
                                        ...prevState,
                                        player4: e.target.value
                                    }))}
                                    value={blueSelectedChampion.player4}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label className="text-blue-500 text-[10px] font-semibold">Player 5</label>
                            <div>
                                <Select
                                    onChange={(e) => setBlueSelectedChampion(prevState => ({
                                        ...prevState,
                                        player5: e.target.value
                                    }))}
                                    value={blueSelectedChampion.player5}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------- Equipo Rojo ------------------------------ */}
                    <div className="w-[150px] mr-2 mt-5">
                        <h3 className="text-red-500 font-bold">Equipo Rojo</h3>
                        <div>
                            <label className="text-red-500 text-[10px] font-semibold">Player 1</label>
                            <div>
                                <Select
                                    onChange={(e) => setRedSelectedChampion(prevState => ({
                                        ...prevState,
                                        player1: e.target.value
                                    }))}
                                    value={redSelectedChampion.player1}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label className="text-red-500 text-[10px] font-semibold">Player 2</label>
                            <div>
                                <Select
                                    onChange={(e) => setRedSelectedChampion(prevState => ({
                                        ...prevState,
                                        player2: e.target.value
                                    }))}
                                    value={redSelectedChampion.player2}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label className="text-red-500 text-[10px] font-semibold">Player 3</label>
                            <div>
                                <Select
                                    onChange={(e) => setRedSelectedChampion(prevState => ({
                                        ...prevState,
                                        player3: e.target.value
                                    }))}
                                    value={redSelectedChampion.player3}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label className="text-red-500 text-[10px] font-semibold">Player 4</label>
                            <div>
                                <Select
                                    onChange={(e) => setRedSelectedChampion(prevState => ({
                                        ...prevState,
                                        player4: e.target.value
                                    }))}
                                    value={redSelectedChampion.player4}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <label className="text-red-500 text-[10px] font-semibold">Player 5</label>
                            <div>
                                <Select
                                    onChange={(e) => setRedSelectedChampion(prevState => ({
                                        ...prevState,
                                        player5: e.target.value
                                    }))}
                                    value={redSelectedChampion.player5}
                                    size="small"
                                    className="w-full"
                                >
                                    <MenuItem value="Black"><em>Reset</em></MenuItem>
                                    {champions.map((champion, index) => (
                                        <MenuItem key={index} value={champion.id}>{champion.id}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>

                    <Button onClick={() => {
                        if (modo === 'row') {
                            setModo('fila');
                        } else {
                            setModo('row');
                        }
                    }}
                        variant="contained"
                        className="mt-4 w-full"
                        size="small"
                    >
                        Cambiar modo
                    </Button>

                    <Button
                        onClick={handleReset}
                        variant="contained"
                        color="warning"
                        className="mt-2 w-full"
                        size="small"
                    >
                        Reset
                    </Button>

                    {/* <Button
                        onClick={() => downloadAllImages(champions)}
                        variant="contained"
                        color="info"
                    >
                        Descargar
                    </Button> */}
                </div>

                {/* ------------------------------- Champions Render ------------------------------ */}
                <div
                    className={`${modo === 'fila' ? 'flex' : 'block'}
            cursor-none overflow-hidden w-full h-[810px] border border-gray-500 bg-black`}
                >
                    {/* ------------------------------- Equipo Azul ------------------------------ */}
                    <div className="flex max-h-[400px] overflow-hidden">
                        <img
                            src={blueSelectedChampion.player1 !== 'Black' ? `${imgMode}${blueSelectedChampion.player1}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={blueSelectedChampion.player1}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={blueSelectedChampion.player2 !== 'Black' ? `${imgMode}${blueSelectedChampion.player2}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={blueSelectedChampion.player2}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={blueSelectedChampion.player3 !== 'Black' ? `${imgMode}${blueSelectedChampion.player3}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={blueSelectedChampion.player3}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={blueSelectedChampion.player4 !== 'Black' ? `${imgMode}${blueSelectedChampion.player4}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={blueSelectedChampion.player4}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={blueSelectedChampion.player5 !== 'Black' ? `${imgMode}${blueSelectedChampion.player5}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={blueSelectedChampion.player5}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                    </div>

                    {/* ------------------------------- Equipo Rojo ------------------------------ */}
                    <div className="flex max-h-[400px] overflow-hidden">
                        <img
                            src={redSelectedChampion.player1 !== 'Black' ? `${imgMode}${redSelectedChampion.player1}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={redSelectedChampion.player1}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={redSelectedChampion.player2 !== 'Black' ? `${imgMode}${redSelectedChampion.player2}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={redSelectedChampion.player2}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={redSelectedChampion.player3 !== 'Black' ? `${imgMode}${redSelectedChampion.player3}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={redSelectedChampion.player3}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={redSelectedChampion.player4 !== 'Black' ? `${imgMode}${redSelectedChampion.player4}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={redSelectedChampion.player4}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={redSelectedChampion.player5 !== 'Black' ? `${imgMode}${redSelectedChampion.player5}${imgExtension}` : '/imgs/muebles-players/Black.png'}
                            alt={redSelectedChampion.player5}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}