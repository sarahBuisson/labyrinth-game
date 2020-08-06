
export function asciiStringToGridObject(str, leftCornerWidth, topSideWidth,
                                        leftCornerHeight, leftSideHeight) {
  let templates = {
    topTemplate: "",
    bottomTemplate: "",
    leftTemplate: "",
    rightTemplate: "",
    topLeftTemplate: "",
    topRightTemplate: "",
    bottomLeftTemplate: "",
    bottomRightTemplate: ""
  }

  let strR = str.split("\n")

  for (let y = 0; y < leftCornerHeight; y++) {
    for (let x = 0; x < leftCornerWidth; x++) {
      templates.topLeftTemplate += strR[y][x]
    }
    templates.topLeftTemplate += "\n"
    for (let x = leftCornerWidth; x < leftCornerWidth + topSideWidth; x++) {
      templates.topTemplate += strR[y][x]
    }
    templates.topTemplate += "\n"
    for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
      templates.topRightTemplate += strR[y][x]
    }
    templates.topRightTemplate += "\n"
  }

  for (let y = leftCornerHeight; y < leftCornerHeight + leftSideHeight; y++) {
    for (let x = 0; x < leftCornerWidth; x++) {
      templates.leftTemplate += strR[y][x]
    }
    templates.leftTemplate += "\n"
    for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
      templates.rightTemplate += strR[y][x]
    }
    templates.rightTemplate += "\n"
  }

  for (let y = leftCornerHeight + leftSideHeight; y < strR.length; y++) {
    for (let x = 0; x < leftCornerWidth; x++) {
      templates.bottomLeftTemplate += strR[y][x]
    }
    templates.bottomLeftTemplate += "\n"
    for (let x = leftCornerWidth; x < leftCornerWidth + topSideWidth; x++) {
      templates.bottomTemplate += strR[y][x]
    }

    templates.bottomTemplate += "\n"
    for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
      templates.bottomRightTemplate += strR[y][x]
    }
    templates.bottomRightTemplate += "\n"
  }
  Object.keys(templates).forEach((k) =>
    templates[k] = templates[k].slice(0, -1))
  return {
    ...templates,
    leftCornerWidth, topSideWidth,
    leftCornerHeight, leftSideHeight
  };
}


let paperRaw = "" +
  "   _______\n" +
  " / \\      \\.\n" +
  "|   |     |\n" +
  " \\_ |     |\n" +
  "    |     |\n" +
  "    |   __|___\n" +
  "    |  /     /\n" +
  "    \\_/_____/"
export let paperDataGridTemplate = asciiStringToGridObject(paperRaw, 5, 1, 4, 1)

let mapZoneRaw = "" +
  " | \n" +
  "- -\n" +
  " | "
export let mapGridTemplate = asciiStringToGridObject(mapZoneRaw, 1, 1, 1, 1)

let defaultRaw = "" +
  "+-+\n" +
  "| |\n" +
  "+-+"
export let defaultGridTemplate = asciiStringToGridObject(defaultRaw, 1, 1, 1, 1)

let viewCloseDoorZoneRaw = "" +
  " .-----------------------.\n" +
  " |\\    \\¨¨¨¨¨¨¨¨¨¨¨/    /|\n" +
  " | \\    \\    1    /    / |\n" +
  " |  \\    \\       /    /  |\n" +
  " |   \\____\\-----/____/   |\n" +
  " |:\\ |                | /:|\n" +
  " |: \\|                |/ :|\n" +
  " |:  '                '  :|\n" +
  " |: 1|                |1 :|\n" +
  " |'--,                ,--'|\n" +
  " |   /¨¨¨¨/-----\\¨¨¨¨\\   |\n" +
  " |  /    /   1   \\    \\  |\n" +
  " | /    /_ _ _ _ _\\    \\ |\n" +
  " `-----------------------'"



let viewOpenDoorZoneRaw = "" +
  " .-----------------------.\n" +
  " |\\    \\¨¨|¨¨¨¨¨|¨¨/    /|\n" +
  " | \\    \\ |     | /    / |\n" +
  " |  \\    \\|     |/    /  |\n" +
  " |   \\____\\     /____/   |\n" +
  " |:\\ |                | /:|\n" +
  " |: \\|                |/ :|\n" +
  " |:--'                '--:|\n" +
  " |:                      :|\n" +
  " |'--,                ,--'|\n" +
  " |   /¨¨¨¨/     \\¨¨¨¨\\   |\n" +
  " |  /    /|     |\\    \\  |\n" +
  " | /    /_|_ _ _|_\\    \\ |\n" +
  " `-----------------------'"

let viewWallZoneRaw = "" +
  " .-----------------------.\n" +
  " |\\                      /|\n" +
  " | \\                    / |\n" +
  " |  \\                  /  |\n" +
  " |   \\_______________/   |\n" +
  " |   |               |   |\n" +
  " |   |               |   |\n" +
  " |   |               |   |\n" +
  " |   |               |   |\n" +
  " |   |               |   |\n" +
  " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\\   |\n" +
  " |  /                 \\  |\n" +
  " | /                   \\ |\n" +
  " `----------------------'"


let defaultZoneCornerWidth = 6;
let defaultZoneSideWidth = 15;
let defaultZoneCornerHeight = 5;
let defaultZoneSideHeight = 5;
export let viewCloseDoorGridTemplate = asciiStringToGridObject(viewCloseDoorZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight)



let viewEmptyZoneRawOld = "" +
  " .---------------------------.\n" +
  " |\\##########################/|\n" +
  " |#\\########################/#|\n" +
  " |##\\######################/##|\n" +
  " |###\\####################/###|\n" +
  " |###|####################|###|\n" +
  " |###|####################|###|\n" +
  " |###|####################|###|\n" +
  " |###|####################|###|\n" +
  " |###|####################|###|\n" +
  " |###|####################|###|\n" +
  " |###/####################\\###|\n" +
  " |##/######################\\##|\n" +
  " |#/########################\\#|\n" +
  " `---------------------------'"
let viewEmptyZoneRawOld2 = "" +
  " .---- ---    ---- ---------.\n" +
  " |\\          .               /|\n" +
  " | \\                          |\n" +
  " |                         /  |\n" +
  "     \\__ ____ ______   ___:   |\n" +
  " |   |                    |    \n" +
  "  .  |                    |    \n" +
  " |                          ¨ |\n" +
  " |   |                    |   |\n" +
  "     |                    |    \n" +
  " |                             \n" +
  "     /    ¨¨   ¨   ¨¨¨¨  ¨\\   |\n" +
  " |                         \\  |\n" +
  "   /            .           \\ |\n" +
  " `---- --    - --- -   - ---'"
let viewEmptyZoneRaw3 = "" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               "

let viewEmptyZoneRaw4 = "" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "        /                       \n" +
  "       /                        \n" +
  "      /                         \n" +
  "     /                          \n" +
  "    /                           \n" +
  "   /                            \n" +
  "  /                             \n" +
  " /                              \n" +
  "/                               "

let viewWallZoneRaw2 = "" +
  " .---------------------------.\n" +
  " |             /              /|\n" +
  " |            /              / |\n" +
  " |           /              /  |\n" +
  " |          /              /   |\n" +
  " |         /              /   |\n" +
  " |        /              /    |\n" +
  " |       /              /  |   |\n" +
  " |      /              /   |   |\n" +
  " |     /              /    |   |\n" +
  " |    /              /     |   |\n" +
  " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨/¨¨¨¨¨\\   |\n" +
  " |  /              /        \\  |\n" +
  " | /              /          \\ |\n" +
  " `---------------+-----------'"




let viewEmptyDeepZoneRaw = "" +
  " .---------------------------.\n" +
  " |\\                          /|\n" +
  " | \\                /       / |\n" +
  " |  \\      \\               /  |\n" +
  " |   \\                    /   |\n" +
  " |    \\           /      /    |\n" +
  " |     \\                /     |\n" +
  " |      ################      |\n" +
  " |      ################      |\n" +
  " |     /                \\     |\n" +
  " |    /                  \\    |\n" +
  " |   /     /              \\   |\n" +
  " |  /  /                   \\  |\n" +
  " | /                        \\ |\n" +
  " `---------------------------'"

let viewEmptyDeepOmbreZoneRaw = "" +
  " .----.--  .----,----,---.\n" +
  " |\\                      /|\n" +
  " | \\            /       / |\n" +
  " |  \\      \            / /\n" +
  " \\   \\                /    \n" +
  " |    \\       /      /    |\n" +
  "    -  \\\\ |  /    ///  _  |\n" +
  "      ¨=############=¨    |\n" +
  " |    _=############=_  - |\n" +
  "      /////   \\   \\\\\\     |\n" +
  " /   /     /          \\   \\\n" +
  " |  /  /        \\      \\  |\n" +
  " | /                    \\ |\n" +
  " `-- --'--'------`---`---'"



let viewEmptyDeepWaterZoneRaw = "" +
  " .----.--  .----,----,---.\n" +
  " |\\                      /|\n" +
  " | \\            /       / |\n" +
  " |  \\      \\            / /\n" +
  " \\   \\                /    \n" +
  " |    \\__-__-__--__  /    |\n" +
  " |  - ¨(  _-__-__   )¨ _  |\n" +
  "      ¨ )_-__   _  (¨    |\n" +
  " |    _(  -   _-__  )_  - |\n" +
  "      /'--__--__---'\\     |\n" +
  " /   /     /          \\   \\\n" +
  " |  /  /        \\      \\  |\n" +
  " | /                    \\ |\n" +
  " `-- --'--'------`---`---'"

let viewEmptySpikeZoneRaw = "" +
  " .----.--  .----,----,---.\n" +
  " |\\                      /|\n" +
  " | \\            /       / |\n" +
  " |  \\      \\            / /\n" +
  "     \\________________/   |\n" +
  " |   |   A  /\\   /\\   |    \n" +
  " |   |  / \\   /\\      |   |\n" +
  " |   |   ^   /\\   /\\  |    \n" +
  "     |  / \\   /\\  ^   |   |\n" +
  " |   |        /\\  / \\ |   |\n" +
  " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\\   |\n" +
  "  / /  /        \\      \\  \\\n" +
  " | /                    \\ |\n" +
  " `-- --'--'------`---`---'"



let viewEmptyObstructedZoneRaw = "" +
  " .                  ---    \n" +
  "                           \n" +
  " |                         \n" +
  "                          |\n" +
  "                           \n" +
  " |                        |\n" +
  "                           \n" +
  " |                        |\n" +
  "                           \n" +
  "                          |\n" +
  "                           \n" +
  "                           \n" +
  " |                        \n" +
  "     --            ---  "
let viewObstructed2lZoneRaw = "" +
  " .-----------------------.\n" +
  " |\\                      /|\n" +
  " | _-_---_-____-__-____-, |\n" +
  " |  |                   | |\n" +
  " | |     °             |  |\n" +
  " |  |             °     | |\n" +
  " | |      O             | |\n" +
  " | |            O       | |\n" +
  " |  |                  |  |\n" +
  " | |      °             | |\n" +
  " | |   o        °       | |\n" +
  " | '-_---_-____-__-_____- |\n" +
  " | /                    \\ |\n" +
  " `-----------------------'"
let viewObstructed3lZoneRaw = "" +
  " .-  ---- - ----    --- -.\n" +
  " |\\                      /|\n" +
  " | _-_---_-____-__-____-,  \n" +
  "    |                   | |\n" +
  "   |     °             |  |\n" +
  "    |             °     |  \n" +
  " | |      O             |  \n" +
  "   |            O       | |\n" +
  " |  |                  |   \n" +
  "   |      °             |  \n" +
  "   |   o        °       |  \n" +
  " | '-_---_-____-__-_____- |\n" +
  " | /                    \\ |\n" +
  " `------    -----  --  --'"


let viewEmptyZoneRaw5 = "" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "        ( @   @ )                  \n" +
  "         \\ A /                   \n" +
  "          uUuu                      \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               \n" +
  "                               "

export let viewEmptyZoneGridTemplate = asciiStringToGridObject(viewObstructed3lZoneRaw, 6, 0, 5, 0)




export let viewOpenDoorGridTemplate = asciiStringToGridObject(viewOpenDoorZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight)
export let viewWallGridTemplate = asciiStringToGridObject(viewWallZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight)

export let exitTemplate: any = "" +
  "  |--|  \n" +
  "  |--|  \n" +
  ":¨|--|¨:\n" +
  "'¨¨¨¨¨¨'\n" +
  "  exit ";
export let startTemplate: any = "" +
  "+______\n" +
  "|start<\n" +
  "+¨¨¨¨¨¨\n" +
  "|      \n" +
  "|      ";
let bagRaw="" +
  "(@=======(@   \n" +
  "||       ||   \n" +
  " \\\\ '' '//    \n" +
  "  \\\\   //     \n" +
  "   \\===/      ";

let handRaw="" +
  "       /EN\\         \n" +
  "   /NV||..||TO\\     \n" +
  "   |..||  ||..|     \n" +
  "/I||..||''||..|     \n" +
  "|.||..\\/..\\/..| / RY|\n" +
  "|.|          \\/\\  /\n" +
  "|              \\|  \\/ \n" +
  "\\                /   \n" +
  " \\              /    "




let bigHandRaw="" +
  "         /EN\\         \n" +
  "    / NV||...||TO \\     \n" +
  "    |...||   ||...|     \n" +
  "/I ||...||'''||...|     \n" +
  "|..||...\\/...\\/...| / RY |\n" +
  "|..|            \\/\\   /\n" +
  "|                \\|   \\/ \n" +
  "\\                    /   \n" +
  " \\                  /    "

let otherHandRaw = "" +
  "     (IN) (VEN)(TOR)    \n" +
  "     |¨¨| |¨¨¨||¨¨¨|(Y) \n" +
  "\\\"-_ |¨¨| |¨¨¨||¨¨¨||¨|\n"+
" \\  \\|¨¨¨  ¨¨¨  ¨¨¨ ¨¨/\n" +
"  \\  :              ¨|\n" +
"   \\_               /\n" +
"     \\              /    "


export let bagGridTemplate = asciiStringToGridObject(otherHandRaw, 6, 15, 4, 1)
