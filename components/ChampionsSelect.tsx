"use client";

import { ChampionsContext } from "@/context";
import { ChampionData, ChampionsAPI } from "@/interface/ChampionInterface";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";

interface Champion {
    id: string;
    name: string;
}

export const ChampionsSelect = () => {
    const [champions, setChampions] = useState<Champion[]>([]);
    const [modo, setModo] = useState('row');

    const [blueSelectedChampion, setBlueSelectedChampion] = useState({
        player1: "Aatrox",
        player2: "Aatrox",
        player3: "Aatrox",
        player4: "Aatrox",
        player5: "Aatrox",
    });

    const [redSelectedChampion, setRedSelectedChampion] = useState({
        player1: "Aatrox",
        player2: "Aatrox",
        player3: "Aatrox",
        player4: "Aatrox",
        player5: "Aatrox",
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


    useEffect(() => {
        getChampionsData();
    }, []);

    const { alto: height, ancho } = useContext(ChampionsContext);
    const width = ancho / 5;

    return (
        <>
            <div className="flex gap-1 mt-5">
                {/* Selects */}
                <div>
                    {/* ------------------------------- Equipo Azul ------------------------------ */}
                    <div className="w-[150px] mr-2">
                        <h3 className="text-blue-500 font-bold">Equipo Azul</h3>
                        <div className="space-y-2">
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
                        <div className="space-y-2">
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
                        className="mt-4"
                    >
                        Cambiar modo
                    </Button>
                </div>

                {/* Champions render */}
                <div
                    className={`${modo === 'fila' ? 'flex' : 'block'}
            cursor-none overflow-hidden w-full h-[810px] border border-gray-500`}
                >

                    {/* ------------------------------- Equipo Azul ------------------------------ */}
                    <div className="flex max-h-[400px] overflow-hidden">
                        <img
                            src={`/imgs/loading/${blueSelectedChampion.player1}.png`}
                            alt={blueSelectedChampion.player1}
                            style={{ width: `${width}px`, height: `${height}px` }}
                            className="glitch"
                        />
                        <img
                            src={`/imgs/loading/${blueSelectedChampion.player2}.png`}
                            alt={blueSelectedChampion.player2}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={`/imgs/loading/${blueSelectedChampion.player3}.png`}
                            alt={blueSelectedChampion.player3}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={`/imgs/loading/${blueSelectedChampion.player4}.png`}
                            alt={blueSelectedChampion.player4}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={`/imgs/loading/${blueSelectedChampion.player5}.png`}
                            alt={blueSelectedChampion.player5}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                    </div>

                    {/* ------------------------------- Equipo Rojo ------------------------------ */}
                    <div className="flex max-h-[400px] overflow-hidden">
                        <img
                            src={`/imgs/loading/${redSelectedChampion.player1}.png`}
                            alt={redSelectedChampion.player1}
                            style={{ width: `${width}px`, height: `${height}px` }}
                            className="glitch"
                        />
                        <img
                            src={`/imgs/loading/${redSelectedChampion.player2}.png`}
                            alt={redSelectedChampion.player2}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={`/imgs/loading/${redSelectedChampion.player3}.png`}
                            alt={redSelectedChampion.player3}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={`/imgs/loading/${redSelectedChampion.player4}.png`}
                            alt={redSelectedChampion.player4}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                        <img
                            src={`/imgs/loading/${redSelectedChampion.player5}.png`}
                            alt={redSelectedChampion.player5}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                    </div>
                </div>
                {/* <button onClick={downloadAllImages}>Download images</button> */}
            </div>
        </>
    )
}