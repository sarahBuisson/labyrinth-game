
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
  " .---------------------------.\n" +
  " |\\      \\¨¨¨¨¨¨¨¨¨¨¨/      /|\n" +
  " | \\      \\    1    /      / |\n" +
  " |  \\      \\       /      /  |\n" +
  " |   \\______\\-----/______/   |\n" +
  " |:\\ |                    | /:|\n" +
  " |: \\|                    |/ :|\n" +
  " |:  '                    '  :|\n" +
  " |: 1|                    |1 :|\n" +
  " |'--.                    .--'|\n" +
  " |   |                    |   |\n" +
  " |   /¨¨¨¨¨¨/-----\\¨¨¨¨¨¨\\   |\n" +
  " |  /      /   1   \\      \\  |\n" +
  " | /      /_ _ _ _ _\\      \\ |\n" +
  " `---------------------------'"



let viewOpenDoorZoneRaw = "" +
  " .---------------------------.\n" +
  " |\\      \\¨¨|¨¨¨¨¨|¨¨/      /|\n" +
  " | \\      \\ |     | /      / |\n" +
  " |  \\      \\|     |/      /  |\n" +
  " |   \\______\\     /______/   |\n" +
  " |:\\ |                    | /:|\n" +
  " |: \\|                    |/ :|\n" +
  " |:--'                    '--:|\n" +
  " |:                          :|\n" +
  " |'--.                    .--'|\n" +
  " |   |                    |   |\n" +
  " |   /¨¨¨¨¨¨/     \\¨¨¨¨¨¨\\   |\n" +
  " |  /      /|     |\\      \\  |\n" +
  " | /      /_|_ _ _|_\\      \\ |\n" +
  " `---------------------------'"

let viewWallZoneRaw = "" +
  " .---------------------------.\n" +
  " |\\                          /|\n" +
  " | \\                        / |\n" +
  " |  \\                      /  |\n" +
  " |   \\____________________/   |\n" +
  " |   |                    |   |\n" +
  " |   |                    |   |\n" +
  " |   |                    |   |\n" +
  " |   |                    |   |\n" +
  " |   |                    |   |\n" +
  " |   |                    |   |\n" +
  " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\\   |\n" +
  " |  /                      \\  |\n" +
  " | /                        \\ |\n" +
  " `---------------------------'"
export let viewCloseDoorGridTemplate = asciiStringToGridObject(viewCloseDoorZoneRaw, 6, 18, 5, 6)



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
  " .----.----.---  ---,----,---.\n" +
  " |\\                          /|\n" +
  " | \\                /       / |\n" +
  " |  \\      \\               / /\n" +
  " \\   \\                    /    \n" +
  " |    \\        |  /      /    |\n" +
  "    -  \\\\ |      /    ///  _  |\n" +
  "      ¨=################=¨    |\n" +
  " |    _=################=_  - |\n" +
  "       ////       \\   \\\\\\     |\n" +
  " |    /  /    |          \\    |\n" +
  " /   /     /              \\   \\\n" +
  " |  /  /            \\      \\  |\n" +
  " | /                        \\ |\n" +
  " `-- --'--'----- ----`---`---'"


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

export let viewEmptyZoneGridTemplate = asciiStringToGridObject(viewEmptyDeepOmbreZoneRaw, 6, 0, 5, 0)




export let viewOpenDoorGridTemplate = asciiStringToGridObject(viewOpenDoorZoneRaw, 6, 18, 5, 6)
export let viewWallGridTemplate = asciiStringToGridObject(viewWallZoneRaw, 6, 18, 5, 6)

export let exitTemplate: any = "" +
  "  |--|\n" +
  "  |--|\n" +
  ":¨|--|¨:\n" +
  "'¨¨¨¨¨¨'\n" +
  "  exit";
export let startTemplate: any = "" +
  "+______\n" +
  "|start<\n" +
  "+¨¨¨¨¨¨\n" +
  "|\n" +
  "|";
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
export let bagGridTemplate = asciiStringToGridObject(bigHandRaw, 2, 16, 6, 1)
