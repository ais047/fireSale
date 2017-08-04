module.exports = function(sequelize, DataTypes) {
  var Shop = sequelize.define("Shop", {
    shopName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description:{
      type: DataTypes.STRING, 
      allowNull: true
    },

    item: {
      type:DataTypes.STRING,
      allowNull: false
        description: {
          type:DataTypes.STRING,
          allowNull: true
        },
        price: {
          type: DataTypes.Decimal,
          allowNull: false
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    }

  });

  //   Shop.associate = function(models) {
  //   Shop.hasMany(models.Item, {
  //     onDelete: "cascade"
  //   });
  // };


  return Shop;
};
