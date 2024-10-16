# Hochschulsport Automation

Dieses Projekt automatisiert die Buchung eines Volleyballplatzes für das Wintersemester 2024/2025 über die Hochschulsport-Seite Hamburg mithilfe von **Puppeteer**. Es erlaubt dem Benutzer, sich automatisch zur gewünschten Zeit anzumelden, indem er seine Zugangsdaten übergibt.

## Features
- Automatisierte Anmeldung auf der Hochschulsport-Website.
- Möglichkeit, die E-Mail und das Passwort als Argumente zu übergeben.
- Automatische Ausführung des Skripts zu einer festgelegten Zeit (dienstags um 19:31 Uhr).

## Voraussetzungen

Bevor du das Projekt installierst, stelle sicher, dass du die folgenden Voraussetzungen erfüllst:

- [Node.js](https://nodejs.org/) (v14 oder höher)
- npm (wird mit Node.js installiert)

## Installation

1. **Repository klonen** (oder das Projekt herunterladen):
   ```bash
   git clone <repository-url>
   ```

2. **In das Verzeichnis wechseln**
   ```bash
   cd hochschulsport-automation
   ```

3. **Pakete installieren**
   ```bash
   npm install
   ```
Dies installiert alle notwendigen Abhängigkeiten, wie **Puppeteer** und **node-schedule**.

## Verwendung
Dieses Skript startet einen Prozess, welcher durchgehend läuft (bis man zum Modul angemeldet ist) und dann zur bestimmten Zeit sich für den Hochschulsport anmeldet. Man muss also dafür sorgen, dass auch im Standby dieser Prozess laufen kann.
Dies tut man mit dem Befehl "caffeinate" auf macOS.

Es gibt vorbereitete Skrips für Handball und Volleyball. Diese erwarten die Übergabe von E-Mail und Passwort für die Anmeldung. Es kann wie folgt aufgerufen werden:

```bash
caffeinate node volleyball.js <deine-email> <dein-passwort>
caffeinate node handball.js <deine-email> <dein-passwort>
```

### Custom Kurse und Zeiten
Bei Nutzung für andere Kurse kann man Parameter übergeben, wie folgt:

```bash
caffeinate node custom.js <deine-email> <dein-passwort> <stunde> <minute> <wochentag> <link-zur-sportart> <selektor-fuer-button-zum-kurs>
```




