export async function getLyrics(title, artist) {
    const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    if (!res.ok) return null;

    const json = await res.json();
    return json.lyrics;
}
