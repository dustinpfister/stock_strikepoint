
const perDay = {};

perDay.get_per_day = ( per_year=30000, days_per_year=365.25, precision=2 ) => {
    return parseFloat( ( per_year / days_per_year ).toFixed( precision ) );
};

module.exports = perDay;
