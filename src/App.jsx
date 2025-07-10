import React, { useEffect, useState } from "react";
import { getLyrics } from "./utils/lyricsFetcher";

export default function App() {
    const [lyrics, setLyrics] = useState("Loading...");

    useEffect(() => {
        const interval = setInterval(async () => {
            const track = Spicetify.Player?.data?.track;
            if (track) {
                const name = track.name;
                const artist = track.artist.name;
                const fetched = await getLyrics(name, artist);
                setLyrics(fetched || "Not Found.");
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: "20px", whiteSpace: "pre-wrap" }}>
            <h2>Letra</h2>
            <div>{lyrics}</div>
        </div>
    );
}
