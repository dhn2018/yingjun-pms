const RoomProxy = require('../proxy/room');
const ServiceError = require('./service-error');
const message = require('../properties').errorMessages;

exports.getRoom = async function () {
  return await RoomProxy.getRoom();
};
