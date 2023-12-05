// customDataTypes.js
const { DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

const IdCDT = sequelize.define('id_cdt', {
  id_cdt: {
    type: DataTypes.INTEGER,
  },
});

const NameCDT = sequelize.define('name_cdt', {
  name_cdt: {
    type: DataTypes.STRING(40),
  },
});

const DescriptionCDT = sequelize.define('description_cdt', {
  description_cdt: {
    type: DataTypes.STRING,
  },
});

const longVarchar = sequelize.define('long_varchar', {
  'long_varchar': {
    type: DataTypes.STRING,
  },
});
const shortVarchar = sequelize.define('short_varchar', {
  'short_varchar': {
    type: DataTypes.STRING(40),
  },
});

module.exports = { IdCDT, NameCDT, DescriptionCDT, longVarchar, shortVarchar, sequelize };
