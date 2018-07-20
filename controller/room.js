const controllerDecorator = require('./controller-decorator');
const RoomService = require('../service/room');

exports.getRoom = controllerDecorator(async function (req, res, next) {
  const room = await RoomService.getRoom();
  console.log(999, room);
  res.send(room);
});
