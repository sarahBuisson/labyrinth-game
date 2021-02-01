import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import * as gameRules from 'gameRules';
import {getFromKotlin, parseKotlinPathToJsView, parseKotlinToJsView} from './kotlinUtils'

let labeatGeneration: any = parseKotlinToJsView(gameRules.fr.perso.labyrinth.labeat);
describe('test kotlin to JsView', () => {

  it("should parse methods of package", () => {
    expect(labeatGeneration.model.Partie).toBeDefined();
    expect(labeatGeneration.model.LevelBoard).toBeDefined();
    expect(labeatGeneration.generation.initPartieMapLabWithKeyFunction).toBeDefined();
  });

  it('should parse array, method and map ', () => {

    let level = labeatGeneration.generation.generateEmptyBoardFunction(5);
    let board = labeatGeneration.generation.connectAllZoneOfBoardFunction(level)

    let boardView = parseKotlinToJsView(board, 4, true)
    expect(boardView.contentArray).toBeDefined();
    expect(boardView.contentArray[0][0].connections).toBeDefined();
    expect(boardView.contentArray[0][0].connections.BOTTOM).toBeDefined();
  });

  it('should parse array, method and map of partie', () => {
    let partie = labeatGeneration.generation.initPartieMapLabWithKeyFunction(3);
    let partieView = parseKotlinToJsView(partie, 7, true);

    expect(partieView.level.contentArray[0][0].connections).toBeDefined();
  });

  it('should get array, method and map of partie', () => {
    let partie = labeatGeneration.generation.initPartieEmpty(2);
    let zone = getFromKotlin(partie, "level", "content", 0, 0)
    expect(zone).toBeDefined()
    expect(zone.connections).not.toBeDefined()
  });


  it('should get proxyarray, method and map of partie', () => {
    let partie = labeatGeneration.generation.initPartieEmpty(3, "myname");


    let zone2 = partie.level.content[0][0]
    expect(zone2).toBeDefined()
    expect(zone2.connections).toBeDefined()

  });

  it('call without proxy', () => {
    // @ts-ignore
    let method: string = Object.getOwnPropertyNames(labeatGeneration.generation).filter(it => it==("initPartieEmpty"))
    let r = labeatGeneration.generation[method].call(this, 3, "myName")
    expect(typeof r.level.content).toEqual('object')
  });
});
