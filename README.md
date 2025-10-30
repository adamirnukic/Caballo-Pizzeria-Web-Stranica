# Caballo-Pizzeria-Web-Stranica

Web stranica se pokreće tako što u jednoj instanci Command Prompt-a, unutar “C: \Users\Korisnik\Desktop\5_424\Web Dizajn” unesemo komandu:
npm run dev
Nakon ovoga web stranica se nalazi na http://localhost:5173/.
JSON server povezujemo s bazom podataka baza.json tako što u drugoj instanci Command Prompt-a, unutar “C: \Users\Korisnik\Desktop\5_424\Web Dizajn\src” unesemo komandu:
npx json-server --watch baza.json
Nakon ovoga JSON server koji je povezan sa baza.json se nalazi na http://localhost:3000/.
Baza podataka za korisnike se nalazi na http://localhost:3000/korisnici, baza podataka za kontakt se nalazi na http://localhost:3000/porukeKontakt, baza podataka za rezervacije se nalazi na http://localhost:3000/Rezervacije.
Kredencijali:
• Admin:
Email: restoran.caballo@gmail.com
Password: admin
_____________________________
• Gosti:
Email: adamirnukic@gmail.com
Password: Adamir321
_____________________________
Email: abidabiogradlija@gmail.com
Password: Abida123
_____________________________
