import {asciiStringToGridObject} from "./border-compute";

let paperRaw = "" +
  "  ________   \n" +
  " / \\      \\  \n" +
  "(  )|      | \n" +
  " \\_/|      |  \n" +
  "    |      |  \n" +
  "    |  ,___|_ \n" +
  "    \\_/_____/ "
export let paperGridTemplate = asciiStringToGridObject(paperRaw, 8, 1, 4, 1)


let paperExitRaw = "" +
  "____  \n" +
  "\\   \\ \n" +
  "|   | \n" +
  " \\__| "
export let paperExitGridTemplate = asciiStringToGridObject(paperExitRaw, 2, 1, 2, 1)

let mapZoneRaw = "" +
  " | \n" +
  "- -\n" +
  " | "
export let mapGridTemplate = asciiStringToGridObject(mapZoneRaw, 1, 1, 1, 1)

let abcRaw = "" +
  "abc\n" +
  "d e\n" +
  "fgh"
export let abcGridTemplate = asciiStringToGridObject(abcRaw, 1, 1, 1, 1)

let defaultBorderRaw = "" +
  "+-+\n" +
  "| |\n" +
  "+-+"
export let defaultGridTemplate = asciiStringToGridObject(defaultBorderRaw, 1, 1, 1, 1)

let doubleBorderRaw = "" +
  "#=#\n" +
  "H H\n" +
  "#=#"
export let doubleGridTemplate = asciiStringToGridObject(doubleBorderRaw, 1, 1, 1, 1)

let buttonBorderRaw = "" +
  ",-.\n" +
  "| |\n" +
  "'-'"
export let defaultButtonBorderTemplate = asciiStringToGridObject(buttonBorderRaw, 1, 1, 1, 1)

let titleBorderRaw = "" +
  ".¨.\n" +
  ": :\n" +
  " ¨ "
export let defaultTitleBorderTemplate = asciiStringToGridObject(titleBorderRaw, 1, 1, 1, 1)


let loadingBorderRaw = "" +
  " _.-._. \n" +
  "(      )\n" +
  " )    (\n" +
  "(      )\n" +
  " '.-._. "
export let loadingBorderGridTemplate = asciiStringToGridObject(loadingBorderRaw, 2, 4, 1, 2)

let viewCloseDoorZoneRaw = "" +
  " .------------------------.\n" +
  " |\\    \\¨¨¨¨¨¨¨¨¨¨¨/    /|\n" +
  " | \\    \\    1    /    / |\n" +
  " |  \\    \\       /    /  |\n" +
  " |   \\____\\-----/____/   |\n" +
  " |:\\ |               | /:|\n" +
  " |: \\|               |/ :|\n" +
  " |:  '               '  :|\n" +
  " |: 1|               |1 :|\n" +
  " |'--,               ,--'|\n" +
  " |   /¨¨¨¨/-----\\¨¨¨¨\\   |\n" +
  " |  /    /   1   \\    \\  |\n" +
  " | /    /_ _ _ _ _\\    \\ |\n" +
  " `------------------------'"


let viewOpenDoorZoneRaw = "" +
  " .------------------------.\n" +
  " |\\    \\¨¨|¨¨¨¨¨|¨¨/    /|\n" +
  " | \\    \\ |     | /    / |\n" +
  " |  \\    \\|     |/    /  |\n" +
  " |   \\____\\     /____/   |\n" +
  " |:\\ |               | /:|\n" +
  " |: \\|               |/ :|\n" +
  " |:--'               '--:|\n" +
  " |:                     :|\n" +
  " |'--,               ,--'|\n" +
  " |   /¨¨¨¨/     \\¨¨¨¨\\   |\n" +
  " |  /    /|     |\\    \\  |\n" +
  " | /    /_|_ _ _|_\\    \\ |\n" +
  " `------------------------'"

let viewWallZoneRaw = "" +
  " .-----------------------.\n" +
  " |\\                     /|\n" +
  " | \\                   / |\n" +
  " |  \\                 /  |\n" +
  " |   \\_______________/   |\n" +
  " |   |               |   |\n" +
  " |   |               |   |\n" +
  " |   |               |   |\n" +
  " |   |               |   |\n" +
  " |   |               |   |\n" +
  " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\\   |\n" +
  " |  /                 \\  |\n" +
  " | /                   \\ |\n" +
  " `-----------------------'"


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
  " .---- ---   --- --------.\n" +
  " |\\         .             /|\n" +
  " | \\                       |\n" +
  " |                      /  |\n" +
  "     \\__ ___ _____  ___:   |\n" +
  " |   |                 |    \n" +
  "  .  |                 |    \n" +
  " |                       ¨ |\n" +
  " |   |                 |   |\n" +
  "     |                 |    \n" +
  " |                          \n" +
  "     /    ¨¨  ¨  ¨¨¨  ¨\\   |\n" +
  " |                      \\  |\n" +
  "   /           .         \\ |\n" +
  " `---- --   - -- -  - ---'"
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
  " |  /  /        \\      \\  |\n" +
  " | /                    \\ |\n" +
  " `-- --'--'------`---`---'"


let viewEmptyDeepWaterZoneRaw = "" +
  " .----.--  .---,----,---.\n" +
  " |\\                     /|\n" +
  " | \\           /       / |\n" +
  " |  \\      \\           / /\n" +
  " \\   \\               /    \n" +
  " |    \\__-__-_--__  /    |\n" +
  " |  - ¨(  _-____   )¨ _  |\n" +
  "      ¨ )_-__  _  (¨    |\n" +
  " |    _(  -   -__  )_  - |\n" +
  "      /'--__--__---'\\    |\n" +
  " /   /     /          \\   \\\n" +
  " |  /  /       \\      \\  |\n" +
  " | /                   \\ |\n" +
  " `-- --'--'-----`---`---'"

let viewEmptySpikeZoneRaw = "" +
  " .----.--  .---,----,---.\n" +
  " |\\                     /|\n" +
  " | \\           /       / |\n" +
  " |  \\      \\          / /\n" +
  "     \\_______________/   |\n" +
  " |   |   A  /\\  /\\   |    \n" +
  " |   |  / \\  /\\      |   |\n" +
  "     |           ^   |   |\n" +
  "     |   ^           |   |\n" +
  " |   |     /\\    / \\ |   |\n" +
  " |   /¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\\   |\n" +
  "  / /  /       \\      \\  \\\n" +
  " | /                   \\ |\n" +
  " `-- --'--'-----`---`---'"


let viewEmptyObstructedZoneRaw = "" +
  " .                ---    \n" +
  "                         \n" +
  " |                       \n" +
  "                        |\n" +
  "                         \n" +
  " |                      |\n" +
  "                         \n" +
  "                         \n" +
  " |                      |\n" +
  "                         \n" +
  "                        |\n" +
  "                         \n" +
  " |                      \n" +
  "     --          ---  "
let viewObstructed2lZoneRaw = "" +
  " .----------------------.\n" +
  " |\\                     /|\n" +
  " | _-_---_-___-__-____-, |\n" +
  " |  |                  | |\n" +
  " | |     °            |  |\n" +
  " |  |            °     | |\n" +
  " | |      O            | |\n" +
  " | |                   | |\n" +
  " |  |             0   |  |\n" +
  " | |      °            | |\n" +
  " | |   o       °       | |\n" +
  " | '-_---_-___-__-_____- |\n" +
  " | /                   \\ |\n" +
  " `----------------------'"
let viewObstructed3lZoneRaw = "" +
  " .-  ---- - ---    --- -.\n" +
  " |\\                     /|\n" +
  " | _-_---_-___-__-____-,  \n" +
  "    |                  | |\n" +
  "   |     °            |  |\n" +
  "    |            °     |  \n" +
  " | |      O            |  \n" +
  "   |                   | |\n" +
  "   |           O       | |\n" +
  " |  |                 |   \n" +
  "   |   o       °       |  \n" +
  " | '-_---_-___-__-_____- |\n" +
  " | /                   \\ |\n" +
  " `------    ----  --  --'"


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
export let viewEmptyZones = [viewObstructed3lZoneRaw, viewObstructed2lZoneRaw, viewEmptySpikeZoneRaw, viewEmptyObstructedZoneRaw, viewEmptyDeepWaterZoneRaw]
export let viewEmptyZoneGridTemplates = viewEmptyZones.map((z => asciiStringToGridObject(z, 6, 0, 5, 0)));


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
let bagRaw = "" +
  "(@=======(@   \n" +
  "||       ||   \n" +
  " \\\\ '' '//    \n" +
  "  \\\\   //     \n" +
  "   \\===/      ";

let handRaw = "" +
  "       /EN\\         \n" +
  "   /NV||..||TO\\     \n" +
  "   |..||  ||..|     \n" +
  "/I||..||''||..|     \n" +
  "|.||..\\/..\\/..| / RY|\n" +
  "|.|          \\/\\  /\n" +
  "|              \\|  \\/ \n" +
  "\\                /   \n" +
  " \\              /    "


let bigHandRaw = "" +
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
  "\\\"-_ |¨¨| |¨¨¨||¨¨¨||¨| \n" +
  " \\  \\|¨¨¨  ¨¨¨  ¨¨¨ ¨¨/ \n" +
  "  \\  :               ¨| \n" +
  "   \\_               /   \n" +
  "     \\              /    "





export let bagGridTemplate = asciiStringToGridObject(otherHandRaw, 6, 15, 4, 1)

let inventoryBox =  "" +
  ".=====.\n" +
  "|\\   /|\n" +
  "| \\=/ |\n" +
  "| | | |\n" +
  "| /=\\ |\n" +
  "|/   \\|\n" +
  "`====='"
export let inventoryBoxGridTemplate = asciiStringToGridObject(inventoryBox, 3, 1, 3, 1)

console.log(bagGridTemplate)
