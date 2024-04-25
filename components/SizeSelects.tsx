"use client";
import { useCallback, useState, useContext } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { ChampionsContext } from "@/context";


export const SizeSelects = () => {
    const { setSizes, alto, ancho } = useContext(ChampionsContext)
    const [inputWidth, setInputWidth] = useState(ancho.toString());
    const [inputHeight, setInputHeight] = useState(alto.toString());

    const setImageValues = useCallback(() => {
        if (!inputWidth || !inputHeight) return;
        const ancho = Number(inputWidth);
        const alto = Number(inputHeight);

        if (isNaN(ancho) || isNaN(alto)) {
            console.error("Números solamente");
            return;
        }

        setSizes(ancho, alto);
    }, [inputWidth, inputHeight])


    return (
        <div className="flex gap-x-5 justify-end">
            <TextField
                label="Ancho de pantalla..."
                onChange={(e) => setInputWidth(e.target.value)}
                size="small"
                value={inputWidth}
                InputProps={{
                    endAdornment: <InputAdornment position="start">px</InputAdornment>,
                }}
            />

            <TextField
                label="Alto de pantalla..."
                onChange={(e) => setInputHeight(e.target.value)}
                size="small"
                value={inputHeight}
                InputProps={{
                    endAdornment: <InputAdornment position="start">px</InputAdornment>,
                }}
            />

            <Button
                onClick={setImageValues}
                variant="contained"
                color="secondary"
            >
                Set
            </Button>
        </div>
    )
}