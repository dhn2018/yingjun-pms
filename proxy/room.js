const models = require('../models');
const RoomModel = models.Room;
/**
 * 根据id获取数据
 * @param id
 * @returns {*|Query}
 */

exports.getRoom = function () {
  return RoomModel.find();
};
