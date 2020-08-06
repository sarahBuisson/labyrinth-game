import {AsciiHardDivComponent} from "../../../utils/ascii/ascii-hard-div/ascii-hard-div.component";

import {
  viewCloseDoorGridTemplate,
  viewOpenDoorGridTemplate,
  viewWallGridTemplate
} from "../../../labyrinth/service/render/resources/border";
import {AsciiModule} from "../ascii.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {APP_BASE_HREF} from "@angular/common";
import {moduleMetadata, storiesOf} from "@storybook/angular";


storiesOf('app/home/ascii-hard-div', module)
  .addDecorator(
    moduleMetadata({
      imports: [BrowserAnimationsModule, AsciiModule],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
      ],
    }),
  )
  .add('empty', () => ({
    component: AsciiHardDivComponent,
  }))
  .add('blabla', () => ({
    template: '<ascii-hard-div>blabla</ascii-hard-div>',
  }))
  .add('border', () => ({
    template: '<div>' +
      '<ascii-hard-div [borderDatas]="viewCloseDoorGridTemplate"></ascii-hard-div>' +
      '</div><div>' +
      '<ascii-hard-div [borderDatas]="viewOpenDoorGridTemplate"></ascii-hard-div>' +
      '</div><div>' +
      '<ascii-hard-div [borderDatas]="viewWallGridTemplate"></ascii-hard-div>' +
      '</div>',
    props: {viewCloseDoorGridTemplate, viewOpenDoorGridTemplate, viewWallGridTemplate}
  }))
  .add('fixSize', () => ({
    template: '<ascii-hard-div xRepeat="15" yRepeat="15">blabla</ascii-hard-div>',
  }));
