# Svelte-mal for eksamen og prøver

Dette er en mal for Svelte-prosjekter som kan brukes på eksamen og prøver.
Ved kjøring av `npm run build` bygges hele Svelte-prosjektet til én enkelt HTML-fil, med *inline* CSS og Javascript.

## Slik bruker du denne malen

1. Åpne en ny terminal i VS Code
2. Skriv `npx degit https://github.com/thorcc/svelte-eksamen-starter .`
3. Skriv `npm install`
4. Skriv `npm run dev`
5. Prosjektet ditt kjører nå på en lokal webserver, og du kan se prosjektet ditt på `http://localhost:3000/`
6. Nå kan du skrive kode i `src/App.svelte`

## Bygging av HTML-fil og levering

1. Skriv `npm run build` i terminalen
2. Hele prosjektet ditt ligger nå i HTML-filen `index.html` i mappen `LEVERING`
3. Kopier `src/App.svelte` inn i mappen `LEVERING`
4. Pakk mappen dist til en .zip-fil og lever 
