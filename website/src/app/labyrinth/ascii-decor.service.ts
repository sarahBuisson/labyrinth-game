import {Injectable} from '@angular/core';
import {AsciiGeneratorService} from "../utils/ascii/ascii-generator.service";

@Injectable({
  providedIn: 'root'
})
export class AsciiDecorService {

  constructor(private  asciiGeneratorService: AsciiGeneratorService) {
    this.partsKeys = Object.keys(this.defaultData)
    this.rightDoorTemplate = this.asciiGeneratorService.reverseTemplate(this.leftDoorTemplate, this.partsKeys)
this.rightWallTemplate=  this.asciiGeneratorService.reverseTemplate(this.leftWallTemplate, this.partsKeys)

    console.log("this.rightDoorTemplate")
    console.log(this.rightDoorTemplate)
  }

  doorSize = 1
  sideWidth = 7
  defaultData = {
    name: "#",
    closedBottom: "-----",
    closedTop: "-----",
    closedLeft: "|"

  }
  partsKeys = []
  topDoorTemplate = "-------------------\n" +
    "\n"+
    "    \\¨¨¨¨¨¨¨¨¨/\n" +
    "     \\   ${name}   /\n" +
    "______\\${closedTop}/______"

  bottomDoorTemplate = "¨¨¨¨¨¨/${closedBottom}\\¨¨¨¨¨¨\n" +
    "     /   ${name}   \\\n" +
    "    /_________\\\n" +
    "\n"+
    "-------------------"
  leftDoorTemplate = " |   |\n" +
    " ||\\ |\n" +
    " || \\|\n" +
    " ||  \\\n" +
    " || ${name}${closedLeft}\n" +
    " ||  ${closedLeft}\n" +
    " |'---\n" +
    " |   |"
  rightDoorTemplate;
  leftWallTemplate = " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |\n" +
    " |   |";
  rightWallTemplate ;

  topWallTemplate = "-------------------\n" +
    " \n" +
    " \n" +
    " \n" +
    "___________________"

  bottomWallTemplate = "¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n" +
    "\n" +
    "\n" +
    "\n" +
    "-------------------"

  leftBottomCornerTemplate = " |   /\n" +
    " |  / \n" +
    " | /  \n" +
    " |/   \n" +
    " '----";
  rightBottomCornerTemplate = this.asciiGeneratorService.reverseTemplate(this.leftBottomCornerTemplate, this.partsKeys)


  leftTopCornerTemplate = " +----\n" +
    " |\\   \n" +
    " | \\  \n" +
    " |  \\ \n"+
    " |   \\"
  rightTopCornerTemplate = this.asciiGeneratorService.reverseTemplate(this.leftTopCornerTemplate, this.partsKeys)


  renderSide(direction: string, door: any) {
    let templateName = direction.toLowerCase() + (door ? "Door" : "Wall") + "Template";

    let data:any = {...this.defaultData, name: door&&door.name!="door" ? door.name : " "};
    data.nameReversed=data.name
    data.closedLeftReversed= data.closedLeft;
    if(door&&door.name=="door"){
      data.closedTop= data.closedTop.replace(/./g," ")
      data.closedBottom= data.closedBottom.replace(/./g," ")
      data.closedLeft= data.closedLeft.replace(/./g," ")
      data.closedLeftReversed= data.closedLeft;
    }
   console.log(door)
   console.log(data)
    return this.asciiGeneratorService.templateString(this[templateName], data)
  }

  renderCorner(dir1: string, dir2: string) {
    let templateName = dir2.toLowerCase() + this.capitalize(dir1.toLowerCase()) + "CornerTemplate";
    let data = this.defaultData
    return this.asciiGeneratorService.templateString(this[templateName], data)

  }

  capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

}
