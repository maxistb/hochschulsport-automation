const puppeteer = require("puppeteer");
const schedule = require("node-schedule");

const email = process.argv[2] || "default@example.com";
const password = process.argv[3] || "default_password";

async function automateWebsite() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(
      "https://buchung.hochschulsport-hamburg.de/angebote/Wintersemester_2024_2025/_Handball.html"
    );

    await page.waitForSelector("#bs_tr4EB9B28E27 > td.bs_sbuch", {
      visible: true,
    });

    const [newPage] = await Promise.all([
      new Promise((resolve) =>
        browser.once("targetcreated", (target) => resolve(target.page()))
      ),

      page.click("#bs_tr4EB9B28E27 > td.bs_sbuch"),
    ]);

    await newPage.waitForSelector(
      "#bs_form_main > div > div.bs_etvg > div:nth-child(1) > label > div.bs_form_uni.bs_right.padding0",
      { visible: true }
    );
    await newPage.click(
      "#bs_form_main > div > div.bs_etvg > div:nth-child(1) > label > div.bs_form_uni.bs_right.padding0"
    );

    await newPage.waitForSelector("#bs_pw_anmlink", { visible: true });
    await newPage.click("#bs_pw_anmlink");

    await newPage.waitForSelector(
      "#bs_pw_anm > div:nth-child(2) > div.bs_form_sp2 > input",
      { visible: true }
    );
    await newPage.type(
      "#bs_pw_anm > div:nth-child(2) > div.bs_form_sp2 > input",
      email
    );

    await newPage.waitForSelector(
      "#bs_pw_anm > div:nth-child(3) > div.bs_form_sp2 > input",
      { visible: true }
    );
    await newPage.type(
      "#bs_pw_anm > div:nth-child(3) > div.bs_form_sp2 > input",
      password
    );

    await newPage.waitForSelector(
      "#bs_pw_anm > div.bs_form_foot > div.bs_form_row > div.bs_right > input",
      { visible: true }
    );

    await Promise.all([
      newPage.click(
        "#bs_pw_anm > div.bs_form_foot > div.bs_form_row > div.bs_right > input"
      ),
      newPage.waitForNavigation({ waitUntil: "networkidle0" }),
    ]);

    await newPage.waitForSelector("#bs_bed > label > input[type=checkbox]", {
      visible: true,
    });
    await newPage.click("#bs_bed > label > input[type=checkbox]");

    await Promise.all([
      newPage.click("#bs_submit"),
      newPage.waitForNavigation({ waitUntil: "networkidle0" }),
    ]);

    await newPage.evaluate(() => {
      const element = document.querySelector(
        "#bs_foot > div.bs_form_row > div.bs_right > input"
      );
      if (element) {
        element.scrollIntoView();
      }
    });

    await newPage.waitForSelector(
      "#bs_foot > div.bs_form_row > div.bs_right > input",
      { visible: true }
    );

    await newPage.click("#bs_foot > div.bs_form_row > div.bs_right > input");
  } catch (error) {
    console.error("Fehler während der Automatisierung:", error);
  }
}

console.log(
  "Starte die Automatisierung für Handball am Dienstag 21:01 Uhr ..."
);

const job = schedule.scheduleJob({ hour: 21, minute: 1, dayOfWeek: 2 }, () => {
  console.log("Starte die Automatisierung...");
  automateWebsite();
});
