export default function (sequelize, DataTypes) {
  var NFT = sequelize.define('nft', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    attribute: DataTypes.STRING,
    external_url: DataTypes.STRING,
    background_color: DataTypes.STRING,
    card_state: DataTypes.INTEGER,
  })
  NFT.sync();
  return NFT;
}
