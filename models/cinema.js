const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const filmTitles = this.films.map(film => film.title);
  return filmTitles;
};

Cinema.prototype.getFilmByTitle = function (title) {
  const filmTitle = this.films.filter(film => film.title === title);
  return filmTitle[0];
};

Cinema.prototype.getFilmsByGenre = function (genre) {
  const films = this.films.filter(film => film.genre === genre);
  return films;

};

Cinema.prototype.getFilmsByYear = function (year) {
  const filmsByYear = this.films.filter(film => film.year === year);
  if (filmsByYear.length === 0) {
    return false
  } else {
    return true
  }
  return filmsByYear;
};

Cinema.prototype.getRunTime = function (length) {
  const filmsOverRunTime = this.films.filter(film => film.length >= length);
  if (this.films.length === filmsOverRunTime.length) {
    return true;

  } else {
    return false;
  }
};

Cinema.prototype.getTotalRunTime = function () {
  const runningTotal = 0;
  const totalRunTime = this.films.reduce((runningTotal, film) => runningTotal += film.length, runningTotal);
  return totalRunTime;

};

Cinema.prototype.getFilmsByProperty = function (property, value) {
  const filmsByProperty = this.films.filter(film => film[property] === value);
  return filmsByProperty;
};

module.exports = Cinema;
