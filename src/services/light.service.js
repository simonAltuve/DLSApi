class LightService {

    async ProcessRoom(room) {

        if (this.ValidateRoom(room)) {
            let _room = this.LoadRoom(room);
            _room = this.PutLights(_room);

            return {
                room: this.FormatRoom(_room)
            }
        }
        const error = new Error();
        error.status = 400;
        error.message = "Invalid format"
        throw error;
    }

    ValidateRoom(room) {

        for (var i = 0; i < room.length; i++) {
            if (room.charAt(i) != '0' && room.charAt(i) != '1' &&
                room.charAt(i) != '*') {
                return false;
            }
        }

        return true;
    }

    LoadRoom(fileReaded) {

        var rows = fileReaded.split('*');
        var room = new Array(this.NumberRows(rows));

        try {

            for (var i = 0; i < room.length; i++) {
                room[i] = new Array(rows[i].length);
                for (var j = 0; j < rows[i].length; j++) {
                    room[i][j] = parseInt(rows[i].charAt(j));
                }
            }
            
            return room;

        } catch (error) {
            console.error(error);
        }
    }

    NumberRows(rows) {

        if (rows[0].length == rows[rows.length - 1].length) {
            return rows.length;
        } else {
            return rows.length - 1;
        }

    }

    PutLights(room) {
        var roomIsDone = false;
        var modifiedRoom = room;

        while (!roomIsDone) {
            var light = this.SearchHigherRange(modifiedRoom);
            modifiedRoom = this.SetLight(light, modifiedRoom);
            roomIsDone = this.CheckRoom(modifiedRoom);
        }

        return modifiedRoom;
    }

    FormatRoom(room) {

        let result = "";
        for (var i = 0; i < room.length; i++) {
            for (var j = 0; j < room[i].length; j++) {
                result += room[i][j];
            }
            result += '*';
        }
        result = result.substring(0, result.length - 1)

        return result;
    }

    SearchHigherRange(room) {

        var higherPosition = {
            i: 0,
            j: 0,
            value: 0
        };

        for (var i = 0; i < room.length; i++) {
            for (var j = 0; j < room[i].length; j++) {
                if (room[i][j] == 0) {
                    var value = this.CalculateRange(i, j, room);
                    if (higherPosition.value < value) {
                        higherPosition.i = i;
                        higherPosition.j = j;
                        higherPosition.value = value;
                    }
                }
            }
        }

        return higherPosition;
    }

    CalculateRange(i, j, room) {
        
        var flag = true;
        var range = 1;
        if (j > 0) {
            var leftCounter = j - 1;

            while (flag) {
                if (room[i][leftCounter] == 0) {
                    range++;
                } else if (room[i][leftCounter] == 1) {
                    flag = false;
                }
                leftCounter--;
                if (leftCounter < 0) {
                    flag = false;
                }
            }
            flag = true;
        }

        if (j < (room[0].length - 1)) {
            var rightCounter = j + 1;

            while (flag) {
                if (room[i][rightCounter] == 0) {
                    range++
                } else if (room[i][rightCounter] == 1) {
                    flag = false;
                }
                rightCounter++;
                if (rightCounter >= room[i].length) {
                    flag = false;
                }
            }
            flag = true;
        }

        if (i > 0) {
            var upCounter = i - 1;

            while (flag) {
                if (room[upCounter][j] == 0) {
                    range++;
                } else if (room[upCounter][j] == 1) {
                    flag = false;
                }
                upCounter--;
                if (upCounter < 0) {
                    flag = false;
                }
            }
            flag = true;
        }

        if (i < (room.length - 1)) {
            var downCounter = i + 1;

            while (flag) {
                if (room[downCounter][j] == 0) {
                    range++;
                } else if (room[downCounter][j] == 1) {
                    flag = false;
                }
                downCounter++;
                if (downCounter >= room.length) {
                    flag = false;
                }
            }
        }

        return range;
    }

    SetLight(light, modifiedRoom) {

        var flag = true;
        var room = modifiedRoom;

        room[light.i][light.j] = 2;
        if (light.j > 0) {
            var leftCounter = light.j - 1;

            while (flag) {
                if (room[light.i][leftCounter] == 0) {
                    room[light.i][leftCounter] = 3;
                } else if (room[light.i][leftCounter] == 1) {
                    flag = false;
                }
                leftCounter--;
                if (leftCounter < 0) {
                    flag = false;
                }
            }
            flag = true;
        }

        if (light.j < (room[0].length - 1)) {
            var rightCounter = light.j + 1;

            while (flag) {
                if (room[light.i][rightCounter] == 0) {
                    room[light.i][rightCounter] = 3;
                } else if (room[light.i][rightCounter] == 1) {
                    flag = false;
                }
                rightCounter++;
                if (rightCounter >= room[light.i].length) {
                    flag = false;
                }
            }
            flag = true;
        }

        if (light.i > 0) {
            var upCounter = light.i - 1;

            while (flag) {
                if (room[upCounter][light.j] == 0) {
                    room[upCounter][light.j] = 3;
                } else if (room[upCounter][light.j] == 1) {
                    flag = false;
                }
                upCounter--;
                if (upCounter < 0) {
                    flag = false;
                }
            }
            flag = true;
        }

        if (light.i < (room.length - 1)) {
            var downCounter = light.i + 1;

            while (flag) {
                if (room[downCounter][light.j] == 0) {
                    room[downCounter][light.j] = 3;
                } else if (room[downCounter][light.j] == 1) {
                    flag = false;
                }
                downCounter++;
                if (downCounter >= room.length) {
                    flag = false;
                }
            }
        }

        return room;
    }

    CheckRoom(room) {
        var isDone = true;
        for (var i = 0; i < room.length; i++) {
            for (var j = 0; j < room[i].length; j++) {
                if (room[i][j] == 0) {
                    isDone = false;
                    j = room[i].length;
                }
            }
        }
        return isDone;
    }



}

module.exports = LightService;