const parser = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream("src/data/kepler_data.csv")
      .pipe(parser.parse({ comment: "#", columns: true }))
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(habitablePlanets.map((planet) => planet["kepler_name"]));
        console.log(`${habitablePlanets.length} habitable planets`);
        resolve();
      });
  });
}
module.exports = {
  loadData,
  planets: habitablePlanets,
};
