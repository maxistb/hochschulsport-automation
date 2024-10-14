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
Das Skript erwartet die Übergabe von E-Mail und Passwort für die Anmeldung. Es kann wie folgt aufgerufen werden:

```bash
node automation.js <deine-email> <dein-passwort>
```




