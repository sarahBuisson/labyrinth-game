(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/IdM":
/*!********************************************!*\
  !*** ./src/app/music-view/music.module.ts ***!
  \********************************************/
/*! exports provided: MusicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicModule", function() { return MusicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _music_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-view.component */ "3tw5");
/* harmony import */ var _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partition-view/partition-view.component */ "lCfX");
/* harmony import */ var _partition_view_temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partition-view/temp-view/temp-view.component */ "0kx2");
/* harmony import */ var _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ascii/ascii.module */ "O1Wb");







let MusicModule = /** @class */ (() => {
    class MusicModule {
    }
    MusicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MusicModule });
    MusicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MusicModule_Factory(t) { return new (t || MusicModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"]
            ]] });
    return MusicModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MusicModule, { declarations: [_music_view_component__WEBPACK_IMPORTED_MODULE_2__["MusicViewComponent"], _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__["PartitionViewComponent"], _partition_view_temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_4__["TempViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"]], exports: [_partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__["PartitionViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_music_view_component__WEBPACK_IMPORTED_MODULE_2__["MusicViewComponent"], _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__["PartitionViewComponent"], _partition_view_temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_4__["TempViewComponent"]],
                exports: [
                    _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_3__["PartitionViewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "/SE3":
/*!**********************************************************!*\
  !*** ./src/app/labyrinth/service/sound/sound.service.ts ***!
  \**********************************************************/
/*! exports provided: SoundService, createLoop, play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLoop", function() { return createLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tone */ "XlTo");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! music-generator */ "fIap");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _game_musique_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-musique.service */ "wRYn");
/* harmony import */ var _tone_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tone.service */ "Fey8");








let SoundService = /** @class */ (() => {
    class SoundService {
        constructor(gameMusiqueService, toneService) {
            // document.body.addEventListener("mousemove", () => this.soundOnSubject$.next(true), {once: true})
            this.gameMusiqueService = gameMusiqueService;
            this.toneService = toneService;
            this.soundOnSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.soundOn$ = this.soundOnSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((previousValue, forcedValue) => {
                let soundOn = forcedValue ? forcedValue : !previousValue;
                if (!soundOn) {
                    console.warn("mute");
                    tone__WEBPACK_IMPORTED_MODULE_3__["Destination"].mute = true;
                }
                else {
                    console.warn("unmute");
                    tone__WEBPACK_IMPORTED_MODULE_3__["Destination"].mute = false;
                }
                this.soundOn = soundOn;
                return soundOn;
            }));
            this.toneHaveBeenInitialized = false;
            document.querySelector('body') && document.querySelector('body').addEventListener('click', async () => {
                if (tone__WEBPACK_IMPORTED_MODULE_3__ && !this.toneHaveBeenInitialized) {
                    this.toneService.start();
                    //this.currentAmbiance.volume-=10
                    console.log('audio is ready');
                    this.forceSoundOn();
                    this.toneHaveBeenInitialized = true;
                    tone__WEBPACK_IMPORTED_MODULE_3__["Transport"].start();
                }
                else if (this.toneHaveBeenInitialized) {
                    console.log("audio already ready");
                }
                else {
                    console.error('audio not ready');
                }
            });
            this.menuInstrument = toneService.Synth();
            this.gameInstrument = toneService.Synth();
            this.generateGameMusic();
            this.generateMenuMusic();
            this.soundInstrument = toneService.Synth();
            this.gameInstrument.toDestination();
            this.menuInstrument.toDestination();
            this.soundInstrument.toDestination();
            this.soundInstrument.volume.value -= 35;
            this.moveSound = this.gameMusiqueService.moveMusic();
            this.takeSound = this.gameMusiqueService.takeMusic();
            this.noSound = this.gameMusiqueService.noMusic();
        }
        subscribeSoundOn(observer) {
            return this.soundOn$.subscribe(observer);
        }
        generateMenuMusic() {
            this.tryNTimes(5, () => {
                if (!this.menuMusic)
                    this.menuMusic = createLoop(this.menuInstrument, this.gameMusiqueService.menuMusicRandom(), 1.3);
            });
        }
        generateGameMusic() {
            this.tryNTimes(5, () => {
                if (!this.gameMusic)
                    this.gameMusic = createLoop(this.gameInstrument, this.gameMusiqueService.gameMusicRandom(), 0.8);
            });
        }
        tryNTimes(numberOfTry, callback) {
            while (numberOfTry > 0) {
                console.log("try generate menu music");
                try {
                    numberOfTry--;
                    callback();
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        playMove() {
            play(this.soundInstrument, this.moveSound, 0.5);
        }
        playTake() {
            play(this.soundInstrument, this.takeSound, 0.5);
        }
        playNo() {
            play(this.soundInstrument, this.noSound, 0.5);
        }
        async playMenuMusic() {
            return this.playAmbiantMusic(this.menuMusic, this.menuInstrument);
        }
        async playAmbiantMusic(newMusic, instrument) {
            console.log("new music to play");
            if (this.currentAmbiance) {
                this.currentAmbiance.loop = false;
                this.currentAmbiance.mute = true;
                await this.currentAmbiance.stop(tone__WEBPACK_IMPORTED_MODULE_3__["now"]());
                this.ambiantInstrument.volume.value -= 100;
            }
            newMusic.loop = true;
            this.currentAmbiance = newMusic;
            this.ambiantInstrument = instrument;
            this.ambiantInstrument.volume.value = -45;
            return newMusic.start();
        }
        async playBruitageSound(music) {
        }
        async playGameMusic() {
            return this.playAmbiantMusic(this.gameMusic, this.gameInstrument);
        }
        toogleSound() {
            this.soundOnSubject$.next();
        }
        forceSoundOn() {
            this.soundOnSubject$.next(true);
        }
        ngOnDestroy() {
            if (this.menuMusic) {
                this.menuMusic.dispose();
            }
            if (this.gameMusic) {
                this.gameMusic.dispose();
            }
            this.noSound.dispose();
            this.takeSound.dispose();
            this.moveSound.dispose();
            this.ambiantInstrument.dispose();
        }
        createInstrument() {
            return new tone__WEBPACK_IMPORTED_MODULE_3__["Synth"]().toDestination();
        }
    }
    SoundService.ɵfac = function SoundService_Factory(t) { return new (t || SoundService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_game_musique_service__WEBPACK_IMPORTED_MODULE_5__["GameMusiqueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tone_service__WEBPACK_IMPORTED_MODULE_6__["ToneService"])); };
    SoundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SoundService, factory: SoundService.ɵfac, providedIn: 'root' });
    return SoundService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoundService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _game_musique_service__WEBPACK_IMPORTED_MODULE_5__["GameMusiqueService"] }, { type: _tone_service__WEBPACK_IMPORTED_MODULE_6__["ToneService"] }]; }, null); })();
function createLoop(instrument, partition, tempo = 1) {
    let flatpartition = music_generator__WEBPACK_IMPORTED_MODULE_4__["compositionUtils"].flatPartition(partition);
    let timeC = 0;
    let part = new tone__WEBPACK_IMPORTED_MODULE_3__["Part"]((time, note) => {
        let decalage = music_generator__WEBPACK_IMPORTED_MODULE_4__["rhythmUtils"].duration(note.value) * tempo;
        instrument.triggerAttackRelease(note.tune, note.value, "+" + timeC);
        timeC += decalage;
        //time = InstrumentUtils.playNote(instrument, n, time, 1.2)
    }, flatpartition.map((note) => [0, note]));
    part.loop = true;
    return part;
}
function play(instrument, partition, tempo = 1) {
    let flatpartition = music_generator__WEBPACK_IMPORTED_MODULE_4__["compositionUtils"].flatPartition(partition);
    let now = tone__WEBPACK_IMPORTED_MODULE_3__["now"]();
    instrument.toDestination();
    for (let i = 0; i < 1; i++) {
        flatpartition.forEach((n) => {
            now = music_generator__WEBPACK_IMPORTED_MODULE_4__["instrumentUtils"].playNote(instrument, n, now, tempo);
        });
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/labyrinth-game/labyrinth-game/website/src/main.ts */"zUnb");


/***/ }),

/***/ "0T/z":
/*!**************************************************!*\
  !*** ./src/app/labyrinth/menu/menu.component.ts ***!
  \**************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_highscores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/highscores.service */ "RNzt");
/* harmony import */ var _service_sound_sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/sound/sound.service */ "/SE3");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/ascii/ascii-modal/ascii-modal.component */ "K43I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../new-form/new-labyrinth-form.component */ "SpuM");
/* harmony import */ var _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../characterEditor/character-form/character-form.component */ "DbXV");











const _c0 = ["highScoreModal"];
const _c1 = ["loadingModal"];
const _c2 = ["newFormModal"];
const _c3 = ["characterFormModal"];
function MenuComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", score_r6.player.name, " : ", score_r6.score, "");
} }
let MenuComponent = /** @class */ (() => {
    class MenuComponent {
        constructor(router, highscoresService, soundService) {
            this.router = router;
            this.highscoresService = highscoresService;
            this.soundService = soundService;
        }
        ngOnInit() {
            this.subscriptionHighscores = this.highscoresService.getScores().subscribe((scores) => {
                this.highscores = scores;
            });
        }
        clickNew() {
            this.soundService.playMove();
            this.newFormModal.show();
        }
        clickMusic() {
            this.router.navigateByUrl('/music');
        }
        clickCharacter() {
            this.soundService.playMove();
            this.characterFormModal.show();
        }
        saveHighScore() {
            this.subs = this.highscoresService.saveScore({ name: 'test' }, Math.random() * 100);
        }
        ngOnDestroy() {
            this.subscriptionHighscores && this.subscriptionHighscores.unsubscribe();
            this.subs && this.subs.unsubscribe();
        }
        ngAfterViewInit() {
            this.soundService.playMenuMusic();
        }
    }
    MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_highscores_service__WEBPACK_IMPORTED_MODULE_3__["HighscoresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"])); };
    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.highScoreModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newFormModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.characterFormModal = _t.first);
        } }, decls: 36, vars: 3, consts: [[1, "title"], [1, "container", "text"], ["ascii-render", "", 3, "click"], [3, "click"], ["highScoreModal", ""], ["ascii-render", "", "borderTemplateName", "paper", 1, "container", "text", "decor-ui"], ["ascii-border", "", "hoverClass", "asciiHighlight"], ["ascii-border", ""], [4, "ngFor", "ngForOf"], [3, "closable"], ["newFormModal", ""], ["loadingModal", ""], ["characterFormModal", ""], ["player", ""], ["ascii-border", "", "xRepeat", "30"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
            const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n\n   _           _        _____                           _\n  | |         | |      / ____|                         | |\n  | |     __ _| |__   | |  __  ___ _ __   ___ _ __ __ _| |_ ___  _ __\n  | |    / _` | '_ \\  | | |_ |/ _ \\ '_ \\ / _ \\ '__/ _` | __/ _ \\| '__|\n  | |___| (_| | |_) | | |__| |  __/ | | |  __/ | | (_| | || (_) | |\n  |______\\__,_|_.__/   \\_____|\\___|_| |_|\\___|_|  \\__,_|\\__\\___/|_|\n    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_5_listener() { return ctx.clickNew(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NEW LABYRINTH ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_7_listener() { return ctx.clickCharacter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CHANGE CHARACTER LOOK ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); ctx.saveHighScore(); return _r0.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HIGHSCORE ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_11_listener() { return ctx.clickMusic(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT THE MUSIC... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-ascii-modal", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_app_ascii_modal_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r0.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Highscore");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Your best score ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ever! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MenuComponent_div_23_Template, 3, 2, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-ascii-modal", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-labyrinth-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-ascii-modal", 3, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_app_ascii_modal_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return _r3.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-ascii-modal", 9, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-character-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "audio", null, 13);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highscores);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closable", true);
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_5__["AsciiBorderComponent"], _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_6__["AsciiModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_8__["NewLabyrinthFormComponent"], _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_9__["CharacterFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n\n  .title[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    width: 540px;\n  }\n\n  button[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0 36px;\n  }"] });
    return MenuComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styles: [`.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }


  .title pre {
    margin-left: auto;
    margin-right: auto;
    width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 60}px;
  }

  button {
    text-align: center;
    padding: 0 ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 4}px;
  }
  `]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_highscores_service__WEBPACK_IMPORTED_MODULE_3__["HighscoresService"] }, { type: _service_sound_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"] }]; }, { highScoreModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['highScoreModal']
        }], loadingModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loadingModal']
        }], newFormModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['newFormModal']
        }], characterFormModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['characterFormModal']
        }] }); })();


/***/ }),

/***/ "0XYs":
/*!**************************************************************!*\
  !*** ./src/app/labyrinth/game-view/labyrinth-game.module.ts ***!
  \**************************************************************/
/*! exports provided: LabyrinthGameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabyrinthGameModule", function() { return LabyrinthGameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labyrinth-game.component */ "tdOx");
/* harmony import */ var _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ui/atom/sliding/sliding.component */ "Bds/");
/* harmony import */ var _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keypad-form/keypad-form.component */ "jVA7");
/* harmony import */ var _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ascii/ascii.module */ "O1Wb");
/* harmony import */ var _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level-view/level-view.component */ "hZio");
/* harmony import */ var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-view/map-view.component */ "UJlK");
/* harmony import */ var _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory-view/inventory-view.component */ "JoyB");
/* harmony import */ var _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./level-view/zone-view/zone-view.component */ "BDe6");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loading/loading.module */ "z4sO");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app-routing.module */ "vY5A");














let LabyrinthGameModule = /** @class */ (() => {
    class LabyrinthGameModule {
    }
    LabyrinthGameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LabyrinthGameModule });
    LabyrinthGameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LabyrinthGameModule_Factory(t) { return new (t || LabyrinthGameModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"],
                _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ]] });
    return LabyrinthGameModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LabyrinthGameModule, { declarations: [_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__["LabyrinthGameComponent"],
        _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__["SlidingComponent"],
        _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"],
        _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__["LevelViewComponent"],
        _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__["MapViewComponent"],
        _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"],
        _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__["InventoryViewComponent"],
        _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__["ZoneViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
        _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"],
        _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]], exports: [_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__["LabyrinthGameComponent"],
        _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__["SlidingComponent"],
        _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"],
        _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__["LevelViewComponent"],
        _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__["MapViewComponent"],
        _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"],
        _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__["InventoryViewComponent"],
        _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__["ZoneViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabyrinthGameModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__["LabyrinthGameComponent"],
                    _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__["SlidingComponent"],
                    _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"],
                    _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__["LevelViewComponent"],
                    _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__["MapViewComponent"],
                    _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"],
                    _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__["InventoryViewComponent"],
                    _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__["ZoneViewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                    _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_5__["AsciiModule"],
                    _loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
                ],
                exports: [_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_2__["LabyrinthGameComponent"],
                    _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_3__["SlidingComponent"],
                    _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"],
                    _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_6__["LevelViewComponent"],
                    _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_7__["MapViewComponent"],
                    _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_4__["KeypadFormComponent"],
                    _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_8__["InventoryViewComponent"],
                    _level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_9__["ZoneViewComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "0kx2":
/*!****************************************************************************!*\
  !*** ./src/app/music-view/partition-view/temp-view/temp-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: TempViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempViewComponent", function() { return TempViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! music-generator */ "fIap");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TempViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tune_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.noteStyle(tune_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tune_r1, "");
} }
let TempViewComponent = /** @class */ (() => {
    class TempViewComponent {
        constructor() {
            this.scale = [];
        }
        style() {
            return this.temp ? {
                minWidth: "" + (music_generator__WEBPACK_IMPORTED_MODULE_1__["rhythmUtils"].duration(this.temp.value) * 50) + " px",
                width: "" + (music_generator__WEBPACK_IMPORTED_MODULE_1__["rhythmUtils"].duration(this.temp.value) * 50) + " px",
                display: "inline-block"
            } : {};
        }
        ngOnInit() {
        }
        noteStyle(note) {
            if (note == this.temp.tune) {
                return {};
            }
            else {
                return { color: 'lightgrey' };
            }
        }
    }
    TempViewComponent.ɵfac = function TempViewComponent_Factory(t) { return new (t || TempViewComponent)(); };
    TempViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TempViewComponent, selectors: [["app-temp-view"]], inputs: { temp: "temp", scale: "scale" }, decls: 4, vars: 4, consts: [[3, "style", 4, "ngFor", "ngForOf"]], template: function TempViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TempViewComponent_div_3_Template, 2, 3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.style());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.temp == null ? null : ctx.temp.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scale);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%]{display: inline-block;\nborder-left: gray 1px solid}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXAtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0scUJBQXFCO0FBQzNCLDJCQUEyQiIsImZpbGUiOiJ0ZW1wLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbmJvcmRlci1sZWZ0OiBncmF5IDFweCBzb2xpZH1cbiJdfQ== */"] });
    return TempViewComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TempViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-temp-view',
                templateUrl: './temp-view.component.html',
                styleUrls: ['./temp-view.component.css']
            }]
    }], function () { return []; }, { temp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "3tw5":
/*!****************************************************!*\
  !*** ./src/app/music-view/music-view.component.ts ***!
  \****************************************************/
/*! exports provided: MusicViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicViewComponent", function() { return MusicViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../labyrinth/service/sound/sound.service */ "/SE3");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ "XlTo");
/* harmony import */ var _labyrinth_service_sound_game_musique_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../labyrinth/service/sound/game-musique.service */ "wRYn");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partition-view/partition-view.component */ "lCfX");








let MusicViewComponent = /** @class */ (() => {
    class MusicViewComponent {
        constructor(musiqueService, soundService) {
            this.musiqueService = musiqueService;
            this.soundService = soundService;
        }
        ngOnInit() {
        }
        generateMenuMusic() {
            this.changeMusic(this.musiqueService.menuMusicRandom());
        }
        generateGameMusic() {
            this.changeMusic(this.musiqueService.gameMusicRandom());
        }
        pause() {
            this.currentPart.stop(tone__WEBPACK_IMPORTED_MODULE_2__["now"]());
            this.currentInstrument.volume.value = -100;
        }
        play() {
            this.currentPart.start();
        }
        clear() {
            if (this.currentPart) {
                this.currentPart.stop();
            }
        }
        changeMusic(newPartition) {
            console.log("changeMusic");
            if (this.currentInstrument)
                this.currentInstrument.clear();
            this.currentInstrument = this.soundService.createInstrument();
            this.currentMusicPartition = newPartition;
            this.clear();
            this.currentPart = Object(_labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["createLoop"])(this.currentInstrument, this.currentMusicPartition);
            this.currentInstrument.volume = -40;
            this.soundService.playAmbiantMusic(this.currentPart, this.currentInstrument);
        }
    }
    MusicViewComponent.ɵfac = function MusicViewComponent_Factory(t) { return new (t || MusicViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_sound_game_musique_service__WEBPACK_IMPORTED_MODULE_3__["GameMusiqueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"])); };
    MusicViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicViewComponent, selectors: [["app-music-view"]], decls: 24, vars: 1, consts: [["ascii-border", "", "contentClass", "text"], ["ascii-border", "", "contentClass", "text", 3, "click"], ["ascii-border", "", 3, "click"], [3, "partitionForms"]], template: function MusicViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About the music...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A new music is randomly generated at each new level. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Only the music's menu is generated with a fix seed.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Try-it !");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicViewComponent_Template_button_click_12_listener() { return ctx.generateMenuMusic(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Music menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicViewComponent_Template_button_click_14_listener() { return ctx.generateGameMusic(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Random Level Music");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicViewComponent_Template_button_click_17_listener() { return ctx.pause(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pause");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicViewComponent_Template_button_click_19_listener() { return ctx.play(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Play");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " partition of the current musique: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-partition-view", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("partitionForms", ctx.currentMusicPartition);
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _partition_view_partition_view_component__WEBPACK_IMPORTED_MODULE_5__["PartitionViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy12aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });
    return MusicViewComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-music-view',
                templateUrl: './music-view.component.html',
                styleUrls: ['./music-view.component.css']
            }]
    }], function () { return [{ type: _labyrinth_service_sound_game_musique_service__WEBPACK_IMPORTED_MODULE_3__["GameMusiqueService"] }, { type: _labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"] }]; }, null); })();


/***/ }),

/***/ "5SNw":
/*!******************************************************************************!*\
  !*** ./src/app/utils/ascii/ascii-on-grid-div/ascii-inside-grid.component.ts ***!
  \******************************************************************************/
/*! exports provided: AsciiInsideGridDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiInsideGridDivComponent", function() { return AsciiInsideGridDivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AsciiInsideGridDivComponent = /** @class */ (() => {
    class AsciiInsideGridDivComponent {
        get hostStyle() {
            let contentSplited = (this.content ? this.content : this.child ? this.child.textContent : 'x').split('\n');
            console.log("contentSplited");
            console.log(contentSplited);
            return {
                gridColumn: 'span ' + contentSplited[0].length,
                gridRow: 'span ' + contentSplited.length
            };
        }
    }
    AsciiInsideGridDivComponent.ɵfac = function AsciiInsideGridDivComponent_Factory(t) { return new (t || AsciiInsideGridDivComponent)(); };
    AsciiInsideGridDivComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AsciiInsideGridDivComponent, selectors: [["", "app-ascii-on-grid-div", ""]], contentQueries: function AsciiInsideGridDivComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, HTMLElement, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.child = _t.first);
        } }, hostVars: 2, hostBindings: function AsciiInsideGridDivComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyle);
        } }, inputs: { content: "content" } });
    return AsciiInsideGridDivComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiInsideGridDivComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[app-ascii-on-grid-div] '
            }]
    }], null, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [HTMLElement]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style"]
        }] }); })();


/***/ }),

/***/ "639w":
/*!****************************************************************!*\
  !*** ./src/app/utils/ascii/ascii-line/ascii-line.component.ts ***!
  \****************************************************************/
/*! exports provided: AsciiLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiLineComponent", function() { return AsciiLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AsciiLineComponent = /** @class */ (() => {
    class AsciiLineComponent {
        constructor() {
            this.size = 1;
            this.char = ".";
        }
        ngOnInit() {
            this.line = "";
            for (let i = 0; i < this.size; i++)
                this.line += this.char;
        }
    }
    AsciiLineComponent.ɵfac = function AsciiLineComponent_Factory(t) { return new (t || AsciiLineComponent)(); };
    AsciiLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsciiLineComponent, selectors: [["ascii-line"]], inputs: { size: "size" }, decls: 1, vars: 1, template: function AsciiLineComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.line, " ");
        } }, styles: [".asciiArt[_ngcontent-%COMP%]{\n  display: block;\n  font-family: monospace;\n  white-space: pre;\n  margin: 1em 0;\n}\n.container[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: -webkit-min-content -webkit-min-content -webkit-min-content;\n  grid-template-columns: min-content min-content min-content;\n  grid-template-rows: 1em -webkit-min-content 1em;\n  grid-template-rows: 1em min-content 1em;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtGQUEwRDtFQUExRCwwREFBMEQ7RUFDMUQsK0NBQXVDO0VBQXZDLHVDQUF1QztFQUN2QywwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXNjaWktbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzY2lpQXJ0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbi5jb250YWluZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtIG1pbi1jb250ZW50IDFlbTtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
    return AsciiLineComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiLineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ascii-line',
                templateUrl: './ascii-line.component.html',
                styleUrls: ['./ascii-line.component.css']
            }]
    }], function () { return []; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6uqV":
/*!********************************************************************!*\
  !*** ./src/app/utils/ascii/ascii-button/ascii-button.component.ts ***!
  \********************************************************************/
/*! exports provided: AsciiButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiButtonComponent", function() { return AsciiButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../labyrinth/service/render/resources/border */ "7yLV");
/* harmony import */ var _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ascii-border/ascii-border.component */ "XxEr");




const _c0 = ["*"];
let AsciiButtonComponent = /** @class */ (() => {
    class AsciiButtonComponent {
        constructor() {
            this.defaultButtonBorderTemplate = _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultButtonBorderTemplate"];
        }
        ngOnInit() {
        }
    }
    AsciiButtonComponent.ɵfac = function AsciiButtonComponent_Factory(t) { return new (t || AsciiButtonComponent)(); };
    AsciiButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsciiButtonComponent, selectors: [["app-ascii-button"]], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [["ascii-border", "", "contentClass", "text interact-ui", 1, "ihm-ui", 3, "computeRenderEachTime", "borderTemplate"]], template: function AsciiButtonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("computeRenderEachTime", false)("borderTemplate", ctx.defaultButtonBorderTemplate);
        } }, directives: [_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__["AsciiBorderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2NpaS1idXR0b24uY29tcG9uZW50LmNzcyJ9 */"] });
    return AsciiButtonComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ascii-button',
                template: '<span ascii-border class="ihm-ui" contentClass="text interact-ui" [computeRenderEachTime]="false" [borderTemplate]="defaultButtonBorderTemplate" ><ng-content></ng-content></span>',
                styleUrls: ['./ascii-button.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7yLV":
/*!**************************************************************!*\
  !*** ./src/app/labyrinth/service/render/resources/border.ts ***!
  \**************************************************************/
/*! exports provided: paperGridTemplate, paperExitGridTemplate, mapGridTemplate, abcGridTemplate, defaultGridTemplate, doubleGridTemplate, defaultButtonBorderTemplate, defaultTitleBorderTemplate, loadingBorderGridTemplate, viewCloseDoorGridTemplate, viewEmptyZoneGridTemplate, viewEmptyZones, viewEmptyZoneGridTemplates, viewOpenDoorGridTemplate, viewWallGridTemplate, exitTemplate, startTemplate, bagGridTemplate, inventoryBoxGridTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paperGridTemplate", function() { return paperGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paperExitGridTemplate", function() { return paperExitGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGridTemplate", function() { return mapGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abcGridTemplate", function() { return abcGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridTemplate", function() { return defaultGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleGridTemplate", function() { return doubleGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultButtonBorderTemplate", function() { return defaultButtonBorderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTitleBorderTemplate", function() { return defaultTitleBorderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingBorderGridTemplate", function() { return loadingBorderGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewCloseDoorGridTemplate", function() { return viewCloseDoorGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewEmptyZoneGridTemplate", function() { return viewEmptyZoneGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewEmptyZones", function() { return viewEmptyZones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewEmptyZoneGridTemplates", function() { return viewEmptyZoneGridTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewOpenDoorGridTemplate", function() { return viewOpenDoorGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewWallGridTemplate", function() { return viewWallGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitTemplate", function() { return exitTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTemplate", function() { return startTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bagGridTemplate", function() { return bagGridTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventoryBoxGridTemplate", function() { return inventoryBoxGridTemplate; });
/* harmony import */ var _border_compute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./border-compute */ "cJNv");

let paperRaw = "" +
    "  ________   \n" +
    " / \\      \\  \n" +
    "(  )|      | \n" +
    " \\_/|      |  \n" +
    "    |      |  \n" +
    "    |  ,___|_ \n" +
    "    \\_/_____/ ";
let paperGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(paperRaw, 8, 1, 4, 1);
let paperExitRaw = "" +
    "____  \n" +
    "\\   \\ \n" +
    "|   | \n" +
    " \\__| ";
let paperExitGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(paperExitRaw, 2, 1, 2, 1);
let mapZoneRaw = "" +
    " | \n" +
    "- -\n" +
    " | ";
let mapGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(mapZoneRaw, 1, 1, 1, 1);
let abcRaw = "" +
    "abc\n" +
    "d e\n" +
    "fgh";
let abcGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(abcRaw, 1, 1, 1, 1);
let defaultBorderRaw = "" +
    "+-+\n" +
    "| |\n" +
    "+-+";
let defaultGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(defaultBorderRaw, 1, 1, 1, 1);
let doubleBorderRaw = "" +
    "#=#\n" +
    "H H\n" +
    "#=#";
let doubleGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(doubleBorderRaw, 1, 1, 1, 1);
let buttonBorderRaw = "" +
    ",-.\n" +
    "| |\n" +
    "'-'";
let defaultButtonBorderTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(buttonBorderRaw, 1, 1, 1, 1);
let titleBorderRaw = "" +
    ".¨.\n" +
    ": :\n" +
    " ¨ ";
let defaultTitleBorderTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(titleBorderRaw, 1, 1, 1, 1);
let loadingBorderRaw = "" +
    " _.-._. \n" +
    "(      )\n" +
    " )    (\n" +
    "(      )\n" +
    " '.-._. ";
let loadingBorderGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(loadingBorderRaw, 2, 4, 1, 2);
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
    " `------------------------'";
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
    " `------------------------'";
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
    " `-----------------------'";
let defaultZoneCornerWidth = 6;
let defaultZoneSideWidth = 15;
let defaultZoneCornerHeight = 5;
let defaultZoneSideHeight = 5;
let viewCloseDoorGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(viewCloseDoorZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight);
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
    " `---------------------------'";
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
    " `---- --   - -- -  - ---'";
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
    "                               ";
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
    "/                               ";
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
    " `---------------+-----------'";
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
    " `---------------------------'";
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
    " `-- --'--'------`---`---'";
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
    " `-- --'--'-----`---`---'";
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
    " `-- --'--'-----`---`---'";
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
    "     --          ---  ";
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
    " `----------------------'";
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
    " `------    ----  --  --'";
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
    "                               ";
let viewEmptyZoneGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(viewObstructed3lZoneRaw, 6, 0, 5, 0);
let viewEmptyZones = [viewObstructed3lZoneRaw, viewObstructed2lZoneRaw, viewEmptySpikeZoneRaw, viewEmptyObstructedZoneRaw, viewEmptyDeepWaterZoneRaw];
let viewEmptyZoneGridTemplates = viewEmptyZones.map((z => Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(z, 6, 0, 5, 0)));
let viewOpenDoorGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(viewOpenDoorZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight);
let viewWallGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(viewWallZoneRaw, defaultZoneCornerWidth, defaultZoneSideWidth, defaultZoneCornerHeight, defaultZoneSideHeight);
let exitTemplate = "" +
    "  |--|  \n" +
    "  |--|  \n" +
    ":¨|--|¨:\n" +
    "'¨¨¨¨¨¨'\n" +
    "  exit ";
let startTemplate = "" +
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
    " \\              /    ";
let bigHandRaw = "" +
    "         /EN\\         \n" +
    "    / NV||...||TO \\     \n" +
    "    |...||   ||...|     \n" +
    "/I ||...||'''||...|     \n" +
    "|..||...\\/...\\/...| / RY |\n" +
    "|..|            \\/\\   /\n" +
    "|                \\|   \\/ \n" +
    "\\                    /   \n" +
    " \\                  /    ";
let otherHandRaw = "" +
    "     (IN) (VEN)(TOR)    \n" +
    "     |¨¨| |¨¨¨||¨¨¨|(Y) \n" +
    "\\\"-_ |¨¨| |¨¨¨||¨¨¨||¨| \n" +
    " \\  \\|¨¨¨  ¨¨¨  ¨¨¨ ¨¨/ \n" +
    "  \\  :               ¨| \n" +
    "   \\_               /   \n" +
    "     \\              /    ";
let bagGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(otherHandRaw, 6, 15, 4, 1);
let inventoryBox = "" +
    ".=====.\n" +
    "|\\   /|\n" +
    "| \\=/ |\n" +
    "| | | |\n" +
    "| /=\\ |\n" +
    "|/   \\|\n" +
    "`====='";
let inventoryBoxGridTemplate = Object(_border_compute__WEBPACK_IMPORTED_MODULE_0__["asciiStringToGridObject"])(inventoryBox, 3, 1, 3, 1);
console.log(bagGridTemplate);


/***/ }),

/***/ "9YXO":
/*!***********************************************************!*\
  !*** ./src/app/labyrinth/service/generate-lab.service.ts ***!
  \***********************************************************/
/*! exports provided: GenerateLabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateLabService", function() { return GenerateLabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gameRules */ "B5sm");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-storage.service */ "Pmye");
/* harmony import */ var _sound_sound_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound/sound.service */ "/SE3");






let labeatGeneration = gameRules__WEBPACK_IMPORTED_MODULE_1__["fr"].perso.labyrinth.labeat.generation;
let GenerateLabService = /** @class */ (() => {
    class GenerateLabService {
        constructor(router, dataStorageService, soundService) {
            this.router = router;
            this.dataStorageService = dataStorageService;
            this.soundService = soundService;
            this.generateSpirale();
        }
        generate(size, playerName) {
            let party = labeatGeneration.initPartieMapLabWithKey(size, playerName); //labeatGeneration.initPartieCompositeLabWithKeyFunction(size)
            this.dataStorageService.saveParty(party);
            this.soundService.generateGameMusic();
        }
        generateEmpty(size) {
            let party = { level: labeatGeneration.connectAllZoneOfBoard(labeatGeneration.generateEmptyBoard(size)) };
            this.dataStorageService.saveParty(party);
            this.router.navigateByUrl('/game');
        }
        generateSpirale() {
            let party = labeatGeneration.initPartieSpiral();
            this.dataStorageService.saveParty(party);
        }
    }
    GenerateLabService.ɵfac = function GenerateLabService_Factory(t) { return new (t || GenerateLabService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sound_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"])); };
    GenerateLabService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GenerateLabService, factory: GenerateLabService.ɵfac, providedIn: 'root' });
    return GenerateLabService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerateLabService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] }, { type: _sound_sound_service__WEBPACK_IMPORTED_MODULE_4__["SoundService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BDe6":
/*!*********************************************************************************!*\
  !*** ./src/app/labyrinth/game-view/level-view/zone-view/zone-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ZoneViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneViewComponent", function() { return ZoneViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/render/resources/border */ "7yLV");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! music-generator */ "fIap");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/gameplay-lab.service */ "ty5H");
/* harmony import */ var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/render/fullsize-ascii-render.service */ "qOzd");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/ascii/component/ascii.component */ "LuAq");










function ZoneViewComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoneViewComponent_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const obj_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.takeObj(obj_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltip", ctx_r0.computeTooltip(obj_r1))("content", ctx_r0.renderObj(obj_r1));
} }
let backgroundTemplate = music_generator__WEBPACK_IMPORTED_MODULE_2__["utils"].shuffle([' ¨    \n  °',
    ' -      \n       -   \n    -',
    "",
    //'__/___/____\\_\\_\n_/_/_______\\___\n_____/____\\____\n___/____\\______\n_/_______\\___\\_\n',
    ' _/  _/____\\_\\_\n_/_/___    \\___\n_____/  __\\____\n___/____\\__    \n_/   ___\\__ \\_\n',
    //' _/___ /_ \\_\\_\n_/_/_ __  _\\___\n____ /__ _\\_ __\n_ _/_ _ \\__ ___\n_/__ __ _\\__\\__\n',
    //' _/_/__ \\__ \\_\n___/ / __\\__  \\\n __/ /__ \\_\\\\_\n_ __/  __\\_\\ \\\n/ __/_/_\\__  \\_',
    ' ,`    ,  \'  \n ,\'    \'  ,  ,,  \n       ,  \n    \'\'  , ` ,     ',
    ' .    .  \n    .   .   \n    .',
    ' .       .  \n       .    .   \n       .',
    ' °       o  \n       °    .   \n  o   °       .',
    ' ..    ..... .. \n. . .... ..... .\n.. ... ..   ....\n....     .... . \n. .      ...   .\n'
]);
let ZoneViewComponent = /** @class */ (() => {
    class ZoneViewComponent {
        constructor(gameplayLabService, renderService) {
            this.gameplayLabService = gameplayLabService;
            this.renderService = renderService;
            this.clickOnBorder = (direction, event) => {
                if (this.gameplayLabService.hasPlayer(this.zone)) {
                    if (this.gameplayLabService.move(direction)) {
                        event.preventDefault();
                    }
                }
                else {
                    this.clickOnZone(event);
                }
            };
            this.takeObj = (obj) => {
                this.gameplayLabService.take(obj);
            };
            this.clickOnZone = (e) => {
                if (this.gameplayLabService.moveAtCase(this.zone)) {
                    e.preventDefault();
                }
            };
        }
        ngOnInit() {
            if (!this.zone)
                this.zone = {};
        }
        borderRendered() {
            let borderRendered = { ..._service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewWallGridTemplate"] };
            let directions = ['left', "right", 'top', 'bottom']; //should stay lowcase
            directions.forEach((direction) => {
                let door = this.gameplayLabService.doorAt(this.zone, direction.toUpperCase());
                borderRendered[direction + "BorderClass"] = 'decor-ui';
                if (door) {
                    borderRendered[direction + "BorderClass"] = 'interact-ui';
                    if (door.key) {
                        borderRendered[direction + "Template"] = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewCloseDoorGridTemplate"][direction + "Template"].replace("1", door.name); //TODO : use template instead of replace
                    }
                    else {
                        borderRendered[direction + "Template"] = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewOpenDoorGridTemplate"][direction + "Template"];
                    }
                    borderRendered[direction + "Tooltip"] = this.computeTooltip(door);
                }
            });
            return borderRendered;
        }
        backgroundRender() {
            return backgroundTemplate[(this.zone.x + this.zone.y * 3) % backgroundTemplate.length];
        }
        renderObj(obj) {
            return this.renderService.renderObj(obj);
        }
        computeTooltip(obj) {
            if (obj.name == 'start')
                return 'start flag';
            if (obj.name == 'exit')
                return 'the exit';
            if (obj.key)
                return 'closed door ' + obj.name;
            if (obj.destination)
                return 'door';
            if (obj.inventory)
                return 'You';
            return 'key ' + obj.name;
        }
        getLevelContent() {
            return this.gameplayLabService.levelContent(this.zone);
        }
    }
    ZoneViewComponent.ɵfac = function ZoneViewComponent_Factory(t) { return new (t || ZoneViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__["GameplayLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_5__["FullsizeAsciiRenderService"])); };
    ZoneViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoneViewComponent, selectors: [["app-zone-view"]], inputs: { zone: "zone" }, decls: 6, vars: 7, consts: [["ascii-border", "", 1, "zone", "asciiArt", "decor-ui", 3, "borderTemplate", "borderClick", "xRepeat", "yRepeat", "name"], [1, "zoneContent", 3, "click"], [1, "background-ui", "zoneBackground"], ["app-ascii-on-grid-div", ""], ["app-ascii", "", "class", "zoneObject asciiArt interact-ui", 3, "tooltip", "content", "click", 4, "ngFor", "ngForOf"], ["app-ascii", "", 1, "zoneObject", "asciiArt", "interact-ui", 3, "tooltip", "content", "click"]], template: function ZoneViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoneViewComponent_Template_div_click_1_listener($event) { return ctx.clickOnZone($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ZoneViewComponent_span_5_Template, 1, 2, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx.borderRendered())("borderClick", ctx.clickOnBorder)("xRepeat", 1)("yRepeat", 1)("name", "zone");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.backgroundRender());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getLevelContent());
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_8__["AsciiComponent"]], styles: [".zoneBackground[_ngcontent-%COMP%] {\n  position:absolute;\n  right: 0;\n  bottom: 0;\n  display: inline-block;\n  z-index: -100;\n}\n.zoneObject[_ngcontent-%COMP%] {\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpvbmUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBQ0E7QUFDQSIsImZpbGUiOiJ6b25lLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uem9uZUJhY2tncm91bmQge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB6LWluZGV4OiAtMTAwO1xufVxuLnpvbmVPYmplY3Qge1xufVxuIl19 */", ".zoneContent[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 70px;\n  }"] });
    return ZoneViewComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoneViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zone-view',
                templateUrl: './zone-view.component.html',
                styleUrls: ['./zone-view.component.css'],
                styles: [`.zoneContent {
    position: relative;
    min-height: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_3__["LINE_HEIGHT"] * 5}px;
  }`]
            }]
    }], function () { return [{ type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__["GameplayLabService"] }, { type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_5__["FullsizeAsciiRenderService"] }]; }, { zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Bds/":
/*!************************************************************!*\
  !*** ./src/app/utils/ui/atom/sliding/sliding.component.ts ***!
  \************************************************************/
/*! exports provided: SlidingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingComponent", function() { return SlidingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");



const _c0 = function (a0, a1) { return { value: a0, params: a1 }; };
const _c1 = ["*"];
const defaultData = {
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    right: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'initial',
    position: 'initial',
    transform: 'initial',
};
function generateStyle(dataName) {
    const tokenStyle = {};
    for (let key in defaultData) {
        tokenStyle[key] = '{{ ' + dataName + '' + key + ' }}';
    }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(tokenStyle);
}
function generateDefaultParams(dataName) {
    const tokenStyle = {};
    for (let key in defaultData) {
        tokenStyle['' + dataName + '' + key] = defaultData[key];
    }
    return tokenStyle;
}
let SlidingComponent = /** @class */ (() => {
    class SlidingComponent {
        constructor() {
            this.openData = {};
            this.closeData = {};
            this.slideOnlyOnClick = false;
            this.isOpen = false;
        }
        ngOnInit() {
            this.ngOnChanges();
        }
        ngOnChanges() {
        }
        open() {
            this.isOpen = true;
        }
        close() {
            this.isOpen = false;
        }
        onAnimationEvent($event) {
        }
        generateParams() {
            const params = {};
            for (let key in defaultData) {
                params['_openData' + key] = this.openData[key] ? this.openData[key] : defaultData[key];
                params['_closeData' + key] = this.closeData[key] ? this.closeData[key] : defaultData[key];
            }
            return params;
        }
        toggle() {
            this.isOpen = !this.isOpen;
        }
        mouseOver() {
            !this.slideOnlyOnClick && this.open();
        }
        mouseLeave() {
            !this.slideOnlyOnClick && this.close();
        }
        click() {
            if (this.slideOnlyOnClick) {
                this.toggle();
            }
            else {
                this.close();
            }
        }
    }
    SlidingComponent.ɵfac = function SlidingComponent_Factory(t) { return new (t || SlidingComponent)(); };
    SlidingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlidingComponent, selectors: [["app-sliding"]], inputs: { openData: "openData", closeData: "closeData", slideOnlyOnClick: "slideOnlyOnClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 2, vars: 4, consts: [[1, "slideContainer", 3, "mouseover", "mouseout", "mouseleave", "mousedown"]], template: function SlidingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SlidingComponent_Template_div_mouseover_0_listener() { return ctx.mouseOver(); })("mouseout", function SlidingComponent_Template_div_mouseout_0_listener() { return ctx.mouseLeave(); })("mouseleave", function SlidingComponent_Template_div_mouseleave_0_listener() { return ctx.mouseLeave(); })("mousedown", function SlidingComponent_Template_div_mousedown_0_listener() { return ctx.click(); })("@openClose.start", function SlidingComponent_Template_div_animation_openClose_start_0_listener($event) { return ctx.onAnimationEvent($event); })("@openClose.done", function SlidingComponent_Template_div_animation_openClose_done_0_listener($event) { return ctx.onAnimationEvent($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.isOpen ? "open" : "close", ctx.generateParams()));
        } }, styles: [".slideContainer[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic2xpZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', generateStyle('_openData'), {
                        params: generateDefaultParams('_openData')
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', generateStyle('_closeData'), {
                        params: generateDefaultParams('_closeData')
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => close', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                ]),
            ] } });
    return SlidingComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sliding',
                templateUrl: './sliding.component.html',
                styleUrls: ['./sliding.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                        // ...
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', generateStyle('_openData'), {
                            params: generateDefaultParams('_openData')
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', generateStyle('_closeData'), {
                            params: generateDefaultParams('_closeData')
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => close', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                        ]),
                    ]),
                ],
            }]
    }], function () { return []; }, { openData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideOnlyOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "DbXV":
/*!****************************************************************************!*\
  !*** ./src/app/characterEditor/character-form/character-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: CharacterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterFormComponent", function() { return CharacterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _labyrinth_service_render_character_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../labyrinth/service/render/character-render.service */ "mks4");
/* harmony import */ var _labyrinth_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../labyrinth/service/data-storage.service */ "Pmye");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function CharacterFormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CharacterFormComponent_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const bodyPart_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r2.data[bodyPart_r1] = $event); })("change", function CharacterFormComponent_div_3_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bodyPart_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bodyPart_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data[bodyPart_r1])("maxLength", bodyPart_r1 === "hat" ? 6 : 1);
} }
let CharacterFormComponent = /** @class */ (() => {
    class CharacterFormComponent {
        constructor(renderService, dataStorage, ngZone) {
            this.renderService = renderService;
            this.dataStorage = dataStorage;
            this.ngZone = ngZone;
            this.data = new _labyrinth_service_render_character_render_service__WEBPACK_IMPORTED_MODULE_2__["CharacterRenderData"]();
            this.render = "";
        }
        update() {
            this.dataStorage.saveCharacter(this.data);
        }
        ngOnInit() {
            this.update();
            this.initCharacterRotation();
        }
        initCharacterRotation() {
            let time = 0;
            this.ngZone.runOutsideAngular(() => {
                this.interval = setInterval(this.rotate(time), 1000);
            });
        }
        rotate(time) {
            return () => {
                time = (time + 1) % 4;
                let direction;
                switch (time) {
                    case 0:
                        direction = 'LEFT';
                        break;
                    case 1:
                        direction = 'BOTTOM';
                        break;
                    case 2:
                        direction = 'RIGHT';
                        break;
                    case 3:
                        direction = 'TOP';
                        break;
                    default:
                        direction = 'LEFT';
                }
                this.render = this.renderService.render(this.data, direction);
            };
        }
        ngOnDestroy() {
            clearInterval(this.interval);
        }
    }
    CharacterFormComponent.ɵfac = function CharacterFormComponent_Factory(t) { return new (t || CharacterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_render_character_render_service__WEBPACK_IMPORTED_MODULE_2__["CharacterRenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
    CharacterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterFormComponent, selectors: [["app-character-form"]], decls: 10, vars: 4, consts: [["ascii-render", "", 1, "text", "ihm-ui"], [1, "layout"], [4, "ngFor", "ngForOf"], ["ascii-render", "", 1, "text"], ["ascii-render", "", "borderTemplateName", "double", 1, "character-render", "asciiArt", 3, "xRepeat", "yRepeat"], [1, "important-ui"], ["ascii-render", "", 1, "input--border"], [1, "interact-ui", 3, "ngModel", "maxLength", "ngModelChange", "change"]], template: function CharacterFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aspect of your character");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterFormComponent_div_3_Template, 5, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.renderService.bodyPartsKey);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xRepeat", 6)("yRepeat", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.render);
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["input[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\nspan.label[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: flex;\n}\n\n.layout[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: -webkit-min-content -webkit-min-content -webkit-min-content;\n  grid-template-columns: min-content min-content min-content;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.character-render[_ngcontent-%COMP%]{\n}\n\n.column[_ngcontent-%COMP%]{\n  display: inline-block;\n}\n\n.input--border[_ngcontent-%COMP%]{\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGFBQWE7RUFDYixrRkFBMEQ7RUFBMUQsMERBQTBEO0VBQzFELG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUNBO0FBQ0E7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiY2hhcmFjdGVyLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ubGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmxheW91dHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uY2hhcmFjdGVyLXJlbmRlcntcbn1cblxuLmNvbHVtbntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmlucHV0LS1ib3JkZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */", "input[_ngcontent-%COMP%] {\n    width: 54px;\n    padding: 0;\n  }"] });
    return CharacterFormComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-character-form',
                templateUrl: './character-form.component.html',
                styleUrls: ['./character-form.component.css'],
                styles: [`input {
    width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 6}px;
    padding: 0;
  }
  `]
            }]
    }], function () { return [{ type: _labyrinth_service_render_character_render_service__WEBPACK_IMPORTED_MODULE_2__["CharacterRenderService"] }, { type: _labyrinth_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "Fey8":
/*!*********************************************************!*\
  !*** ./src/app/labyrinth/service/sound/tone.service.ts ***!
  \*********************************************************/
/*! exports provided: ToneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToneService", function() { return ToneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tone */ "XlTo");



let ToneService = /** @class */ (() => {
    class ToneService {
        constructor() {
        }
        Synth() {
            return new tone__WEBPACK_IMPORTED_MODULE_1__["Synth"]();
        }
        ;
        start() {
            tone__WEBPACK_IMPORTED_MODULE_1__["start"]();
        }
    }
    ToneService.ɵfac = function ToneService_Factory(t) { return new (t || ToneService)(); };
    ToneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToneService, factory: ToneService.ɵfac, providedIn: 'root' });
    return ToneService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToneService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JoyB":
/*!********************************************************************************!*\
  !*** ./src/app/labyrinth/game-view/inventory-view/inventory-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: InventoryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryViewComponent", function() { return InventoryViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/render/resources/border */ "7yLV");
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/render/fullsize-ascii-render.service */ "qOzd");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/ascii/component/ascii.component */ "LuAq");








function InventoryViewComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InventoryViewComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltip", ctx_r1.computeTooltip(item_r2))("content", ctx_r1.render(item_r2));
} }
let InventoryViewComponent = /** @class */ (() => {
    class InventoryViewComponent {
        constructor(_renderService) {
            this._renderService = _renderService;
            this.borderDatas = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["bagGridTemplate"];
        }
        ngOnInit() {
        }
        render(obj) {
            return this._renderService.renderObj(obj);
        }
        computeTooltip(obj) {
            if (obj.name == 'start')
                return 'start flag';
            if (obj.name == 'exit')
                return 'the exit';
            if (obj.key)
                return 'closed door ' + obj.name;
            if (obj.destination)
                return 'door';
            if (obj.inventory)
                return 'You';
            return 'key ' + obj.name;
        }
    }
    InventoryViewComponent.ɵfac = function InventoryViewComponent_Factory(t) { return new (t || InventoryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_3__["FullsizeAsciiRenderService"])); };
    InventoryViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryViewComponent, selectors: [["inventory-view"]], inputs: { player: "player" }, decls: 6, vars: 3, consts: [["ascii-border", "", "borderTemplateName", "inventoryBoxGridTemplate", 1, "inventory", "container", "decor-ui", 3, "xRepeat"], [1, "title"], ["app-ascii-on-grid-div", "", 1, "content"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["app-ascii", "", 1, "important-ui", 3, "tooltip", "content"]], template: function InventoryViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I N V E N T O R Y");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InventoryViewComponent_ng_container_4_Template, 2, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InventoryViewComponent_ng_container_5_Template, 2, 2, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xRepeat", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.player && !!ctx.player.inventoryArray && ctx.player.inventoryArray.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.player.inventoryArray);
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_6__["AsciiComponent"]], styles: ["[_nghost-%COMP%] {\n    background: white;\n    display: inline-block;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    width: 9px;\n    margin-left: -18px;\n    margin-right: 9px;\n    display: inline-block;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 117px;\n  }"] });
    return InventoryViewComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'inventory-view',
                templateUrl: './inventory-view.component.html',
                styles: [`:host {
    background: white;
    display: inline-block;
  }

  .title {
    width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"]}px;
    margin-left: -${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 2}px;
    margin-right: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"]}px;
    display: inline-block;
  }

  .content {
    display: inline-block;
    width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * (6 * 2 + 1)}px;
  }
  `]
            }]
    }], function () { return [{ type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_3__["FullsizeAsciiRenderService"] }]; }, { player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "K43I":
/*!******************************************************************!*\
  !*** ./src/app/utils/ascii/ascii-modal/ascii-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: AsciiModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiModalComponent", function() { return AsciiModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ascii-border/ascii-border.component */ "XxEr");




function AsciiModalComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplateName", "paperExitGridTemplate");
} }
function AsciiModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AsciiModalComponent_div_0_div_6_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiModalComponent_div_0_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.closable);
} }
const _c0 = ["*"];
let AsciiModalComponent = /** @class */ (() => {
    class AsciiModalComponent {
        constructor() {
            this._show = false;
            this.closable = false;
        }
        ngOnInit() {
        }
        show() {
            this._show = true;
        }
        hide() {
            this._show = false;
        }
    }
    AsciiModalComponent.ɵfac = function AsciiModalComponent_Factory(t) { return new (t || AsciiModalComponent)(); };
    AsciiModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsciiModalComponent, selectors: [["app-ascii-modal"]], inputs: { _show: "_show", closable: "closable" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "modalScreen", 4, "ngIf"], [1, "modalScreen"], [1, "behindModal", 3, "click"], [1, "backgroundModal"], ["ascii-border", "", "class", "cross asciiArt ihm-ui", 3, "borderTemplateName", "click", 4, "ngIf"], ["ascii-border", "", 1, "cross", "asciiArt", "ihm-ui", 3, "borderTemplateName", "click"]], template: function AsciiModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AsciiModalComponent_div_0_Template, 12, 1, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._show === true);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__["AsciiBorderComponent"]], styles: [".modalScreen[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr -webkit-min-content 1fr;\n  grid-template-columns: 1fr min-content 1fr;\n  grid-template-rows: 1fr -webkit-min-content 1fr;\n  grid-template-rows: 1fr min-content 1fr;\n  z-index: 100;\n}\n\n.behindModal[_ngcontent-%COMP%] {\n  background: white;\n  opacity: 0.8;\n  z-index: 10;\n}\n\n.backgroundModal[_ngcontent-%COMP%] {\n  background: white;\n  text-align: center;\n  z-index: 99;\n  position: relative;\n}\n\n.cross[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 0;\n  top: 0;\nbackground: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixrREFBMEM7RUFBMUMsMENBQTBDO0VBQzFDLCtDQUF1QztFQUF2Qyx1Q0FBdUM7RUFDdkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0FBQ1IsaUJBQWlCO0FBQ2pCIiwiZmlsZSI6ImFzY2lpLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxTY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudCAxZnI7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmJlaGluZE1vZGFsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbiAgei1pbmRleDogMTA7XG59XG5cblxuLmJhY2tncm91bmRNb2RhbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcm9zcyB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuYmFja2dyb3VuZDogd2hpdGU7XG59XG4iXX0= */"] });
    return AsciiModalComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ascii-modal',
                templateUrl: './ascii-modal.component.html',
                styleUrls: ['./ascii-modal.component.css']
            }]
    }], function () { return []; }, { _show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LIiV":
/*!********************************************************!*\
  !*** ./src/app/utils/ascii/ascii-generator.service.ts ***!
  \********************************************************/
/*! exports provided: AsciiGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiGeneratorService", function() { return AsciiGeneratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AsciiGeneratorService = /** @class */ (() => {
    class AsciiGeneratorService {
        constructor() {
            this.reverseChar = {
                'd': 'b',
                '/': '\\',
                'q': 'p',
                '(': ')'
            };
            for (let key in { ...this.reverseChar }) {
                this.reverseChar[this.reverseChar[key]] = key;
            }
        }
        reverseString(str) {
            return this.reverseChar[str] ? this.reverseChar[str] : str;
        }
        reverseTemplate(template, partsKey) {
            return template.split("\n")
                .map(row => {
                let reversedRow = row.split(/\$\{(\w+)\}/g)
                    .filter(s => s != "")
                    .map((word) => {
                    if (!partsKey.includes(word) && !partsKey.includes(word.replace("Reversed", ""))) {
                        return word.split("").map(e => {
                            return this.reverseChar[e] ? this.reverseChar[e] : e;
                        })
                            .reverse().join("");
                    }
                    else if (word.endsWith("Reversed")) {
                        return `$\{${word.replace("Reversed", "")}}`;
                    }
                    else {
                        return `$\{${word}Reversed}`;
                    }
                }).reverse().join("");
                return reversedRow;
            })
                .join("\n");
        }
        reverseData(data) {
            let ret = {};
            for (let key in data) {
                ret[key + "Reversed"] = this.reverseString(data[key]);
            }
            return ret;
        }
        templateString(template, data) {
            return template.replace(/\$\{(\w+)\}/g, (_, name) => {
                return data[name] || "?";
            });
        }
    }
    AsciiGeneratorService.ɵfac = function AsciiGeneratorService_Factory(t) { return new (t || AsciiGeneratorService)(); };
    AsciiGeneratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AsciiGeneratorService, factory: AsciiGeneratorService.ɵfac, providedIn: 'root' });
    return AsciiGeneratorService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiGeneratorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LuAq":
/*!**********************************************************!*\
  !*** ./src/app/utils/ascii/component/ascii.component.ts ***!
  \**********************************************************/
/*! exports provided: AsciiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiComponent", function() { return AsciiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["app-ascii", ""];
function AsciiComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.tooltip, "]");
} }
const _c1 = function (a0) { return [a0, "asciiArt"]; };
const _c2 = ["*"];
let AsciiComponent = /** @class */ (() => {
    class AsciiComponent {
        constructor() {
            this.asciiClass = '';
        }
        ngOnInit() {
        }
    }
    AsciiComponent.ɵfac = function AsciiComponent_Factory(t) { return new (t || AsciiComponent)(); };
    AsciiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsciiComponent, selectors: [["", "app-ascii", ""]], inputs: { content: "content", tooltip: "tooltip", asciiClass: "asciiClass" }, attrs: _c0, ngContentSelectors: _c2, decls: 5, vars: 5, consts: [[1, "withtooltip", 3, "ngClass"], ["class", "tooltiptext text", 4, "ngIf"], [1, "tooltiptext", "text"]], template: function AsciiComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AsciiComponent_div_3_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.asciiClass));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tooltip);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["pre[_ngcontent-%COMP%] {\n  margin: 0px;\n  display: inline-block;\n  background: white;\n}\n\n\n\n.withtooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  background-color: white;\n  text-align: center;\n  background: white;\n  border: thin;\n  \n  position: absolute;\n  z-index: 1;\n}\n\n\n\n.withtooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFzY2lpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcmUge1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLyogVG9vbHRpcCB0ZXh0ICovXG4ud2l0aHRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiB0aGluO1xuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0IC0gc2VlIGV4YW1wbGVzIGJlbG93ISAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xuLndpdGh0b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4iXX0= */"] });
    return AsciiComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-ascii]',
                templateUrl: './ascii.component.html',
                styleUrls: ['./ascii.component.css']
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], asciiClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "O+Zk":
/*!**********************************************************************!*\
  !*** ./src/app/labyrinth/service/render/map-ascii-render.service.ts ***!
  \**********************************************************************/
/*! exports provided: MapAsciiRenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapAsciiRenderService", function() { return MapAsciiRenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ascii_render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascii-render.service */ "ZLBt");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gameRules */ "B5sm");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/ascii/ascii-generator.service */ "LIiV");





let MapAsciiRenderService = /** @class */ (() => {
    class MapAsciiRenderService extends _ascii_render_service__WEBPACK_IMPORTED_MODULE_1__["AsciiRenderService"] {
        constructor(asciiGeneratorService) {
            let directions = ["top", "bottom", "left", "right"];
            super(asciiGeneratorService);
            directions.forEach((dir) => {
                this[dir + "DoorTemplate"] = "${name}";
                this[dir + "WallTemplate"] = " ";
            });
            this.leftBottomCornerTemplate = " ";
            this.rightBottomCornerTemplate = " ";
            this.leftTopCornerTemplate = " ";
            this.rightTopCornerTemplate = " ";
        }
        renderPlayer(characterData) {
            return "@";
        }
        renderCenter(zone, party) {
            let content = zone.content.filter(it => !it.destination);
            if (party.player.location.x === zone.x && party.player.location.y === zone.y)
                return "@";
            else if (zone.x === party.level.exit.x && zone.y === party.level.exit.y) {
                return "€";
            }
            else if (content.length > 0) {
                if (content.filter(it => it.name === "start").length > 0)
                    return "$";
                else
                    return content[0].name;
            }
            else
                return "+";
        }
        renderSide(direction, door) {
            let templateName = direction.toLowerCase() + (door ? "Door" : "Wall") + "Template";
            let doorName;
            if (!door)
                doorName = " ";
            else if (door.name != "door") {
                doorName = door.name;
            }
            else {
                if (direction == 'TOP' || direction == "BOTTOM")
                    doorName = "|";
                else
                    doorName = "-";
            }
            let data = { ...this.defaultData, name: doorName };
            data.nameReversed = data.name;
            data.closedLeftReversed = data.closedLeft;
            if (door && door.name == "door") {
                data.closedTop = data.closedTop.replace(/./g, " ");
                data.closedBottom = data.closedBottom.replace(/./g, " ");
                data.closedLeft = data.closedLeft.replace(/./g, " ");
                data.closedLeftReversed = data.closedLeft;
            }
            return this.asciiGeneratorService.templateString(this[templateName], data);
        }
        renderObj(obj, characterRenderData) {
            if (obj.classname === gameRules__WEBPACK_IMPORTED_MODULE_2__["fr"].perso.labyrinth.freezone.model.KeyObjectZone.name) {
                return obj.name;
            }
            else if (obj.name === "player") {
                return "¤";
            }
            else if (obj.name === "exit") {
                return "€";
            }
            else if (obj.name === "start") {
                return "$";
            }
            else if (obj.name === "compass") {
                return "%";
            }
            else if (obj.name === "boussole") {
                return "@";
            }
            else if (obj.name === "radar") {
                return "®";
            }
            else if (obj.name === "map") {
                return "#";
            }
            else {
                return obj.name;
            }
        }
    }
    MapAsciiRenderService.ɵfac = function MapAsciiRenderService_Factory(t) { return new (t || MapAsciiRenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_3__["AsciiGeneratorService"])); };
    MapAsciiRenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapAsciiRenderService, factory: MapAsciiRenderService.ɵfac, providedIn: 'root' });
    return MapAsciiRenderService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapAsciiRenderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_3__["AsciiGeneratorService"] }]; }, null); })();


/***/ }),

/***/ "O1Wb":
/*!*********************************************!*\
  !*** ./src/app/utils/ascii/ascii.module.ts ***!
  \*********************************************/
/*! exports provided: AsciiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiModule", function() { return AsciiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ascii-character/ascii-character.component */ "sAm1");
/* harmony import */ var _component_ascii_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/ascii.component */ "LuAq");
/* harmony import */ var _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ascii-line/ascii-line.component */ "639w");
/* harmony import */ var _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ascii-modal/ascii-modal.component */ "K43I");
/* harmony import */ var _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ascii-button/ascii-button.component */ "6uqV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ascii_on_grid_div_ascii_grid_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ascii-on-grid-div/ascii-grid.module */ "Vt3m");











let AsciiModule = /** @class */ (() => {
    class AsciiModule {
    }
    AsciiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AsciiModule });
    AsciiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AsciiModule_Factory(t) { return new (t || AsciiModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _ascii_on_grid_div_ascii_grid_module__WEBPACK_IMPORTED_MODULE_9__["AsciiGridModule"]
            ]] });
    return AsciiModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AsciiModule, { declarations: [_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"],
        _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"],
        _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__["AsciiLineComponent"],
        _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__["AsciiModalComponent"],
        _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__["AsciiButtonComponent"],
        _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__["AsciiCharacterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _ascii_on_grid_div_ascii_grid_module__WEBPACK_IMPORTED_MODULE_9__["AsciiGridModule"]], exports: [_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"],
        _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__["AsciiCharacterComponent"],
        _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"],
        _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__["AsciiLineComponent"],
        _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__["AsciiModalComponent"],
        _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__["AsciiButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"],
                    _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"],
                    _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__["AsciiLineComponent"],
                    _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__["AsciiModalComponent"],
                    _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__["AsciiButtonComponent"],
                    _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__["AsciiCharacterComponent"],
                ],
                exports: [
                    _component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"],
                    _ascii_character_ascii_character_component__WEBPACK_IMPORTED_MODULE_2__["AsciiCharacterComponent"],
                    _ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_6__["AsciiBorderComponent"],
                    _ascii_line_ascii_line_component__WEBPACK_IMPORTED_MODULE_4__["AsciiLineComponent"],
                    _ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_5__["AsciiModalComponent"],
                    _ascii_button_ascii_button_component__WEBPACK_IMPORTED_MODULE_7__["AsciiButtonComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                    _ascii_on_grid_div_ascii_grid_module__WEBPACK_IMPORTED_MODULE_9__["AsciiGridModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Pmye":
/*!***********************************************************!*\
  !*** ./src/app/labyrinth/service/data-storage.service.ts ***!
  \***********************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _render_character_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/character-render.service */ "mks4");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gameRules */ "B5sm");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_3__);





let DataStorageService = /** @class */ (() => {
    class DataStorageService {
        constructor() {
            this.currentParty$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.currentPartyView$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.lastMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.characterDirection$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.currentCharaRenderData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
            this.characterDirection$.next('LEFT');
            this.currentCharaRenderData$.next(new _render_character_render_service__WEBPACK_IMPORTED_MODULE_2__["CharacterRenderData"]());
            this.gameplay = gameRules__WEBPACK_IMPORTED_MODULE_3__["fr"].perso.labyrinth.labeat;
        }
        saveParty(party) {
            this.currentParty$.next(party);
            this.currentPartyView$.next(JSON.parse(this.gameplay.toJson(party)));
        }
        saveLastMessages(...messages) {
            this.lastMessage$.next(messages[messages.length - 1]);
        }
        getCurrentParty() {
            return this.currentParty$;
        }
        getCurrentPartyView() {
            return this.currentPartyView$;
        }
        saveCharacter(chardata) {
            this.currentCharaRenderData$.next(chardata);
        }
        saveCharacterDirection(direction) {
            this.characterDirection$.next(direction);
        }
        getCurrentCharaRenderData() {
            return this.currentCharaRenderData$;
        }
        getPlayerDirection() {
            return this.characterDirection$;
        }
    }
    DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(); };
    DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: 'root' });
    return DataStorageService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RNzt":
/*!*********************************************************!*\
  !*** ./src/app/labyrinth/service/highscores.service.ts ***!
  \*********************************************************/
/*! exports provided: HighscoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighscoresService", function() { return HighscoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let HighscoresService = /** @class */ (() => {
    class HighscoresService {
        constructor(http) {
            this.http = http;
        }
        saveScore(player, score) {
            let objectObservable = this.http.post("http://sarahbuisson-server-sample.herokuapp.com/score", {
                player: player,
                score
            }, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
                .subscribe(data => console.log('success', data), error => console.log('oops', error));
            return objectObservable;
        }
        getScores() {
            return this.http.get("http://sarahbuisson-server-sample.herokuapp.com/scores");
        }
    }
    HighscoresService.ɵfac = function HighscoresService_Factory(t) { return new (t || HighscoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    HighscoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HighscoresService, factory: HighscoresService.ɵfac, providedIn: 'root' });
    return HighscoresService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighscoresService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "SpuM":
/*!********************************************************************!*\
  !*** ./src/app/labyrinth/new-form/new-labyrinth-form.component.ts ***!
  \********************************************************************/
/*! exports provided: NewLabyrinthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLabyrinthFormComponent", function() { return NewLabyrinthFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/generate-lab.service */ "9YXO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../characterEditor/character-form/character-form.component */ "DbXV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/ascii/ascii-modal/ascii-modal.component */ "K43I");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading/loading.component */ "dyXb");










const _c0 = ["loadingModal"];
let NewLabyrinthFormComponent = /** @class */ (() => {
    class NewLabyrinthFormComponent {
        constructor(labService, router, route) {
            this.labService = labService;
            this.router = router;
            this.route = route;
            this.size = 5;
        }
        ngOnInit() {
            this.subscriptions = this.route.queryParams.subscribe(params => {
                this.size = params['size'] ? params['size'] : 5;
            });
        }
        play() {
            this.loadingModal.show();
            let timer = new Promise((resolve) => {
                // after 1 second signal that the job is finished with an error
                setTimeout(() => resolve('done'), 5000);
            });
            let generation = new Promise((resolve) => {
                // not taking our time to do the job
                this.labService.generate(this.size, this.playerName);
                resolve({}); // immediately give the result: 123
            });
            Promise.all([timer, generation]).then(() => {
                this.loadingModal.hide();
                this.router.navigateByUrl('/game');
            });
        }
        emptyBoard() {
            this.labService.generateEmpty(this.size);
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe();
        }
    }
    NewLabyrinthFormComponent.ɵfac = function NewLabyrinthFormComponent_Factory(t) { return new (t || NewLabyrinthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__["GenerateLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    NewLabyrinthFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewLabyrinthFormComponent, selectors: [["app-labyrinth-form"]], viewQuery: function NewLabyrinthFormComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingModal = _t.first);
        } }, decls: 15, vars: 1, consts: [["ascii-render", "", "borderTemplateName", "paper", 1, "container", "text", "background-ui"], ["ascii-render", "", 1, "text", "ihm-ui"], [1, "grid"], ["ascii-render", "", 1, "input--border"], [1, "text", 3, "ngModel", "ngModelChange"], ["ascii-render", "", 1, "text", "important-ui", 3, "click"], ["loadingModal", ""]], template: function NewLabyrinthFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-character-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Level creation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Labyrinth Size: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewLabyrinthFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.size = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewLabyrinthFormComponent_Template_button_click_10_listener() { return ctx.play(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "play ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-ascii-modal", null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.size);
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_5__["CharacterFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_7__["AsciiModalComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"]], styles: ["input[_ngcontent-%COMP%] {\n      width: 72px\n    }\n\n\n    .grid[_ngcontent-%COMP%] {\n      max-width: 270px;\n      display: grid;\n      grid-template-columns: 2fr 81px;\n      align-items: center;\n      text-align: center;\n    }"] });
    return NewLabyrinthFormComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewLabyrinthFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-labyrinth-form',
                templateUrl: './new-labyrinth-form.component.html',
                styles: [`
    input {
      width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 8}px
    }


    .grid {
      max-width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 30}px;
      display: grid;
      grid-template-columns: 2fr ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 9}px;
      align-items: center;
      text-align: center;
    }
  `]
            }]
    }], function () { return [{ type: _service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__["GenerateLabService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { loadingModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loadingModal']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ui/atom/sound/sound.component */ "dxnq");




let AppComponent = /** @class */ (() => {
    class AppComponent {
        constructor() {
            this.title = 'website-angular';
        }
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["href", "https://github.com/sarahBuisson/labyrinth-game/actions", 1, "text", "repository"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ui-sound");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "repository github");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_2__["SoundComponent"]], styles: [".menuBar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n}\n\n.repository[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tZW51QmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5yZXBvc2l0b3J5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cbiJdfQ== */"] });
    return AppComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UJlK":
/*!********************************************************************!*\
  !*** ./src/app/labyrinth/game-view/map-view/map-view.component.ts ***!
  \********************************************************************/
/*! exports provided: MapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewComponent", function() { return MapViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/render/resources/border */ "7yLV");
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/gameplay-lab.service */ "ty5H");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MapViewComponent_div_1_div_9_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const levelCaseInput_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx_r7.borderRendered(levelCaseInput_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.computeClass(levelCaseInput_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.contentRendered(levelCaseInput_r5));
} }
function MapViewComponent_div_1_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapViewComponent_div_1_div_9_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const levelCaseInput_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isCaseShowable(levelCaseInput_r5));
} }
function MapViewComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapViewComponent_div_1_div_9_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
const _c0 = function (a0) { return { "grid-template-columns": a0 }; };
function MapViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MapViewComponent_div_1_div_9_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "repeat(auto-fill, " + ctx_r0.currentParty.level.content[0].length + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentParty.level.content);
} }
let mapBorderData = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["paperGridTemplate"];
let MapViewComponent = /** @class */ (() => {
    class MapViewComponent {
        constructor(gameplayLabService) {
            this.gameplayLabService = gameplayLabService;
            this.rangeArroundPlayer = -1;
            this.borderData = mapBorderData;
        }
        ngOnChanges(changes) {
            console.log("update");
            console.log(this.currentParty);
            this.updateFieldOfView();
            console.log(this.currentParty.level);
        }
        ngOnInit() {
            this.updateFieldOfView();
        }
        updateFieldOfView() {
        }
        isStart(levelCase) {
            let start = this.currentParty.level.start;
            return start.x === levelCase.x && start.y === levelCase.y;
        }
        isExit(levelCase) {
            let exit = this.currentParty.level.exit;
            return exit.x === levelCase.x && exit.y === levelCase.y;
        }
        hasPlayer(levelCase) {
            let location = this.currentParty.player.location;
            return location.x === levelCase.x && location.y === levelCase.y;
        }
        isCaseShowable(levelCase) {
            if (this.rangeArroundPlayer < 0)
                return true;
            let location = this.currentParty.player.location;
            return (Math.abs(location.x - levelCase.x) <= this.rangeArroundPlayer
                && Math.abs(location.y - levelCase.y) <= this.rangeArroundPlayer);
        }
        borderRendered(levelCase) {
            let borderRendered = { ..._service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["mapGridTemplate"] };
            let directions = ['left', 'right', 'top', 'bottom'];
            directions.forEach((direction) => {
                let door = this.gameplayLabService.doorAt(levelCase, direction.toUpperCase());
                borderRendered[direction + "Class"] = "decor-ui";
                if (!!door) {
                    if (door.key) {
                        borderRendered[direction + "Template"] = door.name;
                        borderRendered[direction + "Class"] = "interact-ui";
                    }
                    else {
                    }
                }
                else {
                    borderRendered[direction + "Template"] = ' ';
                }
            });
            return borderRendered;
        }
        contentRendered(levelCaseInput) {
            let content = this.gameplayLabService.levelContent(levelCaseInput);
            if (content[0]) {
                return this.renderService.renderObj(content[0]);
            }
            else {
                let nbrOfConnections = levelCaseInput.connected.length;
                if (nbrOfConnections == 1) {
                    return " ";
                }
                if (nbrOfConnections == 2) {
                    return ".";
                }
                else {
                    return "+";
                }
            }
        }
        computeClass(levelCaseInput) {
            let content = this.gameplayLabService.levelContent(levelCaseInput);
            if (content[0]) {
                if (content[0].name === "player" || content[0].name === "exit") {
                    return "important-ui";
                }
            }
            return "ihm-ui";
        }
    }
    MapViewComponent.ɵfac = function MapViewComponent_Factory(t) { return new (t || MapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__["GameplayLabService"])); };
    MapViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapViewComponent, selectors: [["map-view"]], inputs: { currentParty: "currentParty", renderService: "renderService", rangeArroundPlayer: "rangeArroundPlayer" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 2, consts: [["ascii-render", "", 1, "container", "decor-ui", 3, "borderTemplate"], ["class", "row1", 4, "ngIf"], ["ascii-border", "", 1, "legend", "text", "decor-ui"], [1, "important-ui"], [1, "row1"], [1, "title", "text", "decor-ui"], [1, "main", "asciiArt", "ihm-ui", 3, "ngStyle"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["ascii-border", "", "xRepeat", "1", "yRepeat", "1", 1, "mapzone", 3, "borderTemplate"], [3, "ngClass"]], template: function MapViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapViewComponent_div_1_Template, 10, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "legend:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A4 = You are here");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u20AC = Exit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A-Z = Locked door");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " a-z = keys");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " | ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".+- = open path");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx.borderData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentParty);
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_4__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  background: white;\n  text-align: left;\n}\n\n.levelRowRender[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 1.5em);\n}\n\n.container[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.row1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: white;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.mapzone[_ngcontent-%COMP%] {\n  display: inline-block\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6Im1hcC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGV2ZWxSb3dSZW5kZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEuNWVtKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnJvdzEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGFpbmVyID4gZGl2IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb250YWluZXIgPiBzcGFuIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cblxuLm1haW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYXB6b25lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbiJdfQ== */", ".title[_ngcontent-%COMP%] {\n      display: inline-flex;\n      flex-direction: column;\n      width: 27px;\n      padding:14px 9px;\n    }\n\n    .legend[_ngcontent-%COMP%] {\n        min-width: 90px;\n    }"] });
    return MapViewComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'map-view',
                templateUrl: './map-view.component.html',
                styleUrls: ['./map-view.component.css'],
                styles: [`
    .title {
      display: inline-flex;
      flex-direction: column;
      width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 3}px;
      padding:${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * 1}px ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 1}px;
    }

    .legend {
        min-width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 10}px;
    }`]
            }]
    }], function () { return [{ type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__["GameplayLabService"] }]; }, { currentParty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], renderService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rangeArroundPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Vt3m":
/*!********************************************************************!*\
  !*** ./src/app/utils/ascii/ascii-on-grid-div/ascii-grid.module.ts ***!
  \********************************************************************/
/*! exports provided: AsciiGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiGridModule", function() { return AsciiGridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ascii-on-grid-div.component */ "knP+");
/* harmony import */ var _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ascii-inside-grid.component */ "5SNw");





let AsciiGridModule = /** @class */ (() => {
    class AsciiGridModule {
    }
    AsciiGridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AsciiGridModule });
    AsciiGridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AsciiGridModule_Factory(t) { return new (t || AsciiGridModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return AsciiGridModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AsciiGridModule, { declarations: [_ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__["AsciiOnGridDivComponent"],
        _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__["AsciiInsideGridDivComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__["AsciiOnGridDivComponent"],
        _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__["AsciiInsideGridDivComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiGridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__["AsciiOnGridDivComponent"],
                    _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__["AsciiInsideGridDivComponent"]
                ], exports: [
                    _ascii_on_grid_div_component__WEBPACK_IMPORTED_MODULE_2__["AsciiOnGridDivComponent"],
                    _ascii_inside_grid_component__WEBPACK_IMPORTED_MODULE_3__["AsciiInsideGridDivComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "XxEr":
/*!********************************************************************!*\
  !*** ./src/app/utils/ascii/ascii-border/ascii-border.component.ts ***!
  \********************************************************************/
/*! exports provided: AsciiBorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiBorderComponent", function() { return AsciiBorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../labyrinth/service/render/resources/border */ "7yLV");
/* harmony import */ var _AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AsciiConst */ "fMyw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AsciiBorderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["left"]; };
function AsciiBorderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiBorderComponent_div_10_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.borderClick("LEFT", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.borderClasses.left || ctx_r1.borderClasses.default)("ngStyle", ctx_r1.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.renders.left);
} }
const _c1 = function () { return ["bottom"]; };
function AsciiBorderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiBorderComponent_div_14_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.borderClick("BOTTOM", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.borderClasses.bottom || ctx_r2.borderClasses.default)("ngStyle", ctx_r2.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.renders.bottom);
} }
const _c2 = function () { return ["top", "left"]; };
const _c3 = function () { return ["top"]; };
const _c4 = function () { return ["top", "right"]; };
const _c5 = function () { return ["right"]; };
const _c6 = function () { return ["bottom", "left"]; };
const _c7 = function () { return ["bottom", "right"]; };
const _c8 = ["*"];
let AsciiBorderComponent = /** @class */ (() => {
    class AsciiBorderComponent {
        constructor(_changeDetectorRef, hostRef, renderer, ngZone) {
            this._changeDetectorRef = _changeDetectorRef;
            this.hostRef = hostRef;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.computeRenderEachTime = undefined;
            this.haveAlreadyBeComputed = false;
            this.xComputedRepeat = 0;
            this.yComputedRepeat = 0;
            this.renders = {};
            this.borderClasses = {};
            this.computedData = { borderSizePx: {}, computed: 'none' };
            this.toClear = [];
            this.borderClick = () => {
            };
            this.debug = false;
        }
        get hostStyle() {
            let hostStyle = {
                border: 'solid transparent',
                borderTopWidth: this.computedData.borderSizePx.top + 'px',
                borderBottomWidth: this.computedData.borderSizePx.bottom + 'px',
                borderRightWidth: this.computedData.borderSizePx.right + 'px',
                borderLeftWidth: this.computedData.borderSizePx.left + 'px',
                height: this.yRepeat ? (this.yRepeat * this.borderTemplate.leftSideHeight * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"]) + 'px' : undefined,
                width: this.xRepeat ? (this.xRepeat * this.borderTemplate.topSideWidth * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"]) + 'px' : undefined
            };
            return hostStyle;
        }
        ngOnInit() {
            try {
                this.borderTemplateName = this.borderTemplateName || this.hostRef.nativeElement.nodeName;
                this.borderTemplate = this.borderTemplate || this.getAsciiBorderForName(this.borderTemplateName);
                this.computeBorderTemplateData();
                if (this.computeRenderEachTime == undefined) {
                    if (this.xRepeat && this.yRepeat) {
                        this.computeRenderEachTime = false;
                    }
                    else
                        this.computeRenderEachTime = true; // this.hostRef.nativeElement.clientWidth ? false : true
                }
                if (this.xRepeat && this.yRepeat) {
                    this.computeBorderDimension();
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        computeBorderTemplateData() {
            if (this.borderTemplate) {
                this.computedData = {
                    ...this.computedData,
                    borderSizePx: {
                        top: this.borderTemplate.topPartHeight * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"],
                        bottom: this.borderTemplate.bottomPartHeight * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"],
                        right: this.borderTemplate.rightPartWidth * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"],
                        left: this.borderTemplate.leftPartWidth * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"]
                    }
                };
            }
        }
        get compJson() {
            return JSON.stringify(this.computedData);
        }
        /**
         * return an array of counter
         * @param size
         */
        counter(size) {
            let array = new Array();
            for (let i = 0; i < size; i++) {
                array.push(i);
            }
            return array; //TODO check why dont work for modal: [...Array(size).keys()]
        }
        ngAfterViewInit() {
            this.computeAndUpdateDimension();
        }
        computeAndUpdateDimension() {
            try {
                if (this.computeBorderDimension()) {
                    this.ngZone.runOutsideAngular(() => {
                        let timeout = setTimeout(() => {
                            this._changeDetectorRef.detectChanges();
                            clearTimeout(timeout);
                        }, 100);
                        this.toClear.push(timeout);
                    });
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        computeBorderDimension() {
            try {
                if (!this.computedData.borderSizePx.top)
                    this.computeBorderTemplateData();
                let mainElement = this.hostRef.nativeElement;
                let height, width;
                if (mainElement.clientWidth) {
                    height = mainElement.clientHeight; // - this.computedData.borderTopSizePx - this.computedData.borderBottomSizePx
                    width = mainElement.clientWidth;
                    this.computedData.computed = 'client';
                }
                else if (mainElement.offsetWidth) {
                    this.computedData.computed = 'offset' + mainElement.offsetWidth;
                    height = mainElement.offsetHeight - this.computedData.borderSizePx.top - this.computedData.borderSizePx.bottom;
                    width = mainElement.offsetWidth - this.computedData.borderSizePx.left - this.computedData.borderSizePx.right;
                }
                else {
                    this.computedData.computed = 'none';
                    return false;
                }
                if (isNaN(height) || isNaN(width)) {
                    console.warn("no dimension " + height + " " + width);
                    return false;
                }
                const hostHaveChangedX = this.computedData.widthPx != width;
                const hostHaveChangedY = this.computedData.heightPx != height;
                let shouldComputeX = (width || this.xRepeat) && (hostHaveChangedX || this.computeRenderEachTime || !this.haveAlreadyBeComputed);
                let shouldComputeY = (height || this.yRepeat) && (hostHaveChangedY || this.computeRenderEachTime || !this.haveAlreadyBeComputed);
                if (shouldComputeX) {
                    this.computedData.widthPx = width;
                    let oldX = this.xComputedRepeat;
                    if (this.xRepeat != undefined) {
                        this.xComputedRepeat = this.xRepeat;
                    }
                    else {
                        this.xComputedRepeat = Math.floor(width / (_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * this.borderTemplate.topSideWidth));
                    }
                    let allDataPresent = this.xComputedRepeat;
                    let computedDataHaveChange = oldX != this.xComputedRepeat;
                    if (allDataPresent && computedDataHaveChange) {
                        try {
                            let counterX = this.counter(this.xComputedRepeat);
                            let splitTop = this.borderTemplate.topTemplate.split("\n");
                            let splitBottom = this.borderTemplate.bottomTemplate.split("\n");
                            this.renders = {
                                ...this.renders,
                                top: splitTop.map((l) => counterX.map((i) => l).join('')).join('\n'),
                                bottom: splitBottom.map((l) => counterX.map((i) => l).join('')).join('\n'),
                            };
                            this.haveAlreadyBeComputed = true;
                            return true;
                        }
                        catch (e) {
                            console.error(e);
                            return true;
                        }
                    }
                }
                else {
                }
                if (shouldComputeY) {
                    console.log("shouldComputeY" + this.yRepeat);
                    this.computedData.heightPx = height;
                    let oldY = this.yComputedRepeat;
                    if (this.yRepeat != undefined) {
                        this.yComputedRepeat = this.yRepeat;
                    }
                    else {
                        this.yComputedRepeat = Math.floor(height / (_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * this.borderTemplate.leftSideHeight));
                    }
                    let allDataPresent = this.yComputedRepeat;
                    let computedDataHaveChange = oldY != this.yComputedRepeat;
                    if (allDataPresent && computedDataHaveChange) {
                        try {
                            let counterY = this.counter(this.yComputedRepeat);
                            this.renders = {
                                ...this.renders,
                                left: counterY.map((i) => this.borderTemplate.leftTemplate).join('\n'),
                                right: counterY.map((i) => this.borderTemplate.rightTemplate).join('\n')
                            };
                            this.haveAlreadyBeComputed = true;
                            return true;
                        }
                        catch (e) {
                            console.error(e);
                            return false;
                        }
                    }
                }
                else {
                }
            }
            catch (e) {
                console.log("error during compute");
            }
        }
        ngAfterContentChecked() {
            if (this.computeRenderEachTime || this.haveAlreadyBeComputed)
                this.ngZone.runOutsideAngular(() => {
                    let timeout = setTimeout(() => {
                        try {
                            this.computeAndUpdateDimension();
                            clearTimeout(timeout);
                        }
                        catch (e) {
                            console.error(e);
                        }
                    }, 100);
                    this.toClear.push(timeout);
                });
        }
        getAsciiBorderForName(name) {
            if (Object.keys(_labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__).includes(name + 'GridTemplate'))
                return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__[name + 'GridTemplate']; //TODO : we need to test the include otherwise it bug
            if (Object.keys(_labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__).includes(name))
                return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__[name]; //TODO : we need to test the include otherwise it bug
            if (name === 'BUTTON') {
                return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultButtonBorderTemplate"];
            }
            if (name === 'DIV') {
                return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultGridTemplate"];
            }
            if (name === 'H1') {
                return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultTitleBorderTemplate"];
            }
            return _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["defaultGridTemplate"];
        }
        styleOfPart(directions) {
            let style = { position: 'absolute', top: 0, left: 0 };
            directions.forEach(dir => {
                if (dir === 'left') {
                    style.left = -this.computedData.borderSizePx.left + 'px';
                    style.width = this.computedData.borderSizePx.left + 'px';
                }
                if (dir === 'right') {
                    style.width = this.computedData.borderSizePx.right + 'px';
                    style.right = -this.computedData.borderSizePx.right + 'px';
                    style.left = undefined;
                    //style.marginRight = -this.computedData.borderSizePx.right + 'px';
                    //style.top = '0px';
                    /* if (directions.length === 1) {
                       style.top = this.computedData.borderSizePx.top + 'px';
                     }*/
                }
                if (dir === 'top') {
                    style.top = -this.computedData.borderSizePx.top + 'px';
                    if (directions.length != 1)
                        style.width = (this.xComputedRepeat * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"]) + 'px';
                }
                if (dir === 'bottom') {
                    style.bottom = -this.computedData.borderSizePx.bottom + 'px';
                    if (directions.length != 1)
                        style.width = (this.xComputedRepeat * _AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"]) + 'px';
                    style.top = undefined;
                }
            });
            return style;
        }
        ngOnDestroy() {
            this.toClear.forEach((timeout) => {
                clearTimeout(timeout);
            });
        }
    }
    AsciiBorderComponent.ɵfac = function AsciiBorderComponent_Factory(t) { return new (t || AsciiBorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
    AsciiBorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsciiBorderComponent, selectors: [["ascii-border"], ["", "ascii-border", ""], ["div", "ascii-render", ""], ["span", "ascii-render", ""], ["button", "ascii-render", ""], ["p", "ascii-render", ""], ["h1", "ascii-render", ""]], hostVars: 3, hostBindings: function AsciiBorderComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dataComputed", ctx.compJson);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.hostStyle);
        } }, inputs: { name: "name", computeRenderEachTime: "computeRenderEachTime", contentClass: "contentClass", xRepeat: "xRepeat", yRepeat: "yRepeat", borderTemplateName: "borderTemplateName", borderTemplate: "borderTemplate", borderClick: "borderClick", debug: "debug" }, ngContentSelectors: _c8, decls: 17, vars: 27, consts: [[4, "ngIf"], [1, "asciiArt", "border-part", "top", "left", 2, "display", "inline-block", "position", "absolute", 3, "ngStyle", "ngClass"], [1, "asciiArt", "border-part", "top", 3, "ngClass", "ngStyle", "click"], [1, "asciiArt", "border-part", "top", "right", 3, "ngClass", "ngStyle"], [1, "asciiArt", "rightSide", 3, "ngClass", "ngStyle", "click"], ["class", "asciiArt border-part leftSide", "style", "position: absolute;", 3, "ngClass", "ngStyle", "click", 4, "ngIf"], [1, "borderBottom"], [1, "asciiArt", "border-part", "bottom", "left", 3, "ngStyle", "ngClass"], ["class", "asciiArt border-part bottom", 3, "ngClass", "ngStyle", "click", 4, "ngIf"], [1, "asciiArt", "border-part", "bottom", "right", 3, "ngClass", "ngStyle"], [1, "debug", "top", "left"], [1, "debug", "top", "right"], [1, "debug", "bottom", "left"], [1, "debug", "bottom", "right"], [1, "asciiArt", "border-part", "leftSide", 2, "position", "absolute", 3, "ngClass", "ngStyle", "click"], [1, "asciiArt", "border-part", "bottom", 3, "ngClass", "ngStyle", "click"]], template: function AsciiBorderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsciiBorderComponent_ng_container_1_Template, 6, 0, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiBorderComponent_Template_div_click_4_listener($event) { return ctx.borderClick("TOP", $event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiBorderComponent_Template_div_click_8_listener($event) { return ctx.borderClick("RIGHT", $event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AsciiBorderComponent_div_10_Template, 2, 4, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AsciiBorderComponent_div_14_Template, 2, 4, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.debug);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2)))("ngClass", ctx.borderClasses.topLeft || ctx.borderClasses.default);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.borderTemplate.topLeftTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.borderClasses.top || ctx.borderClasses.default)("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.renders.top);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.borderClasses.topRight || ctx.borderClasses.default)("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.borderTemplate.topRightTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.borderClasses.right || ctx.borderClasses.default)("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.renders.right);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yComputedRepeat > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c6)))("ngClass", ctx.borderClasses.bottomLeft || ctx.borderClasses.default);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.borderTemplate.bottomLeftTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.xComputedRepeat > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.borderClasses.bottomRight || ctx.borderClasses.default)("ngStyle", ctx.styleOfPart(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c7)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.borderTemplate.bottomRightTemplate);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.border-part[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow-x: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLWJvcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhc2NpaS1ib3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm9yZGVyLXBhcnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG59XG4iXX0= */"], changeDetection: 0 });
    return AsciiBorderComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiBorderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ascii-border , [ascii-border] , div [ascii-render], span [ascii-render], button [ascii-render], p [ascii-render], h1 [ascii-render]',
                templateUrl: './ascii-border.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./ascii-border.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], computeRenderEachTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xRepeat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], yRepeat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borderTemplateName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borderTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], borderClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["style"]
        }], debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compJson: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.dataComputed']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characterEditor/character-form/character-form.component */ "DbXV");
/* harmony import */ var _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./labyrinth/new-form/new-labyrinth-form.component */ "SpuM");
/* harmony import */ var _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./labyrinth/menu/menu.component */ "0T/z");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/ascii/ascii.module */ "O1Wb");
/* harmony import */ var _labyrinth_game_view_labyrinth_game_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./labyrinth/game-view/labyrinth-game.module */ "0XYs");
/* harmony import */ var _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/ui/atom/sound/sound.component */ "dxnq");
/* harmony import */ var _music_view_music_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./music-view/music.module */ "/IdM");
/* harmony import */ var _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ascii-gallery/ascii-gallery.component */ "uyBj");
/* harmony import */ var _labyrinth_loading_loading_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./labyrinth/loading/loading.module */ "z4sO");

















let AppModule = /** @class */ (() => {
    class AppModule {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_10__["AsciiModule"],
                _labyrinth_game_view_labyrinth_game_module__WEBPACK_IMPORTED_MODULE_11__["LabyrinthGameModule"],
                _music_view_music_module__WEBPACK_IMPORTED_MODULE_13__["MusicModule"], _labyrinth_loading_loading_module__WEBPACK_IMPORTED_MODULE_15__["LoadingModule"]
            ]] });
    return AppModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_6__["CharacterFormComponent"],
        _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_7__["NewLabyrinthFormComponent"],
        _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_12__["SoundComponent"],
        _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_14__["AsciiGalleryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_10__["AsciiModule"],
        _labyrinth_game_view_labyrinth_game_module__WEBPACK_IMPORTED_MODULE_11__["LabyrinthGameModule"],
        _music_view_music_module__WEBPACK_IMPORTED_MODULE_13__["MusicModule"], _labyrinth_loading_loading_module__WEBPACK_IMPORTED_MODULE_15__["LoadingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_6__["CharacterFormComponent"],
                    _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_7__["NewLabyrinthFormComponent"],
                    _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                    _utils_ui_atom_sound_sound_component__WEBPACK_IMPORTED_MODULE_12__["SoundComponent"],
                    _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_14__["AsciiGalleryComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_10__["AsciiModule"],
                    _labyrinth_game_view_labyrinth_game_module__WEBPACK_IMPORTED_MODULE_11__["LabyrinthGameModule"],
                    _music_view_music_module__WEBPACK_IMPORTED_MODULE_13__["MusicModule"], _labyrinth_loading_loading_module__WEBPACK_IMPORTED_MODULE_15__["LoadingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZLBt":
/*!******************************************************************!*\
  !*** ./src/app/labyrinth/service/render/ascii-render.service.ts ***!
  \******************************************************************/
/*! exports provided: AsciiRenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiRenderService", function() { return AsciiRenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/ascii/ascii-generator.service */ "LIiV");



let AsciiRenderService = /** @class */ (() => {
    class AsciiRenderService {
        constructor(asciiGeneratorService) {
            this.asciiGeneratorService = asciiGeneratorService;
            this.defaultData = {
                name: "#",
                closedBottom: "-----",
                closedTop: "-----",
                closedLeft: "|"
            };
            this.partsKeys = [];
            this.topDoorTemplate = "TODO";
            this.bottomDoorTemplate = "TODO";
            this.leftDoorTemplate = "TODO";
            this.rightDoorTemplate = "TODO";
            this.leftWallTemplate = "TODO";
            this.rightWallTemplate = "TODO";
            this.topWallTemplate = "TODO";
            this.bottomWallTemplate = "TODO";
            this.leftBottomCornerTemplate = "TODO";
            this.rightBottomCornerTemplate = "TODO";
            this.leftTopCornerTemplate = "TODO";
            this.rightTopCornerTemplate = "TODO";
            this.partsKeys = Object.keys(this.defaultData);
            this.rightDoorTemplate = this.asciiGeneratorService.reverseTemplate(this.leftDoorTemplate, this.partsKeys);
            this.rightWallTemplate = this.asciiGeneratorService.reverseTemplate(this.leftWallTemplate, this.partsKeys);
        }
        renderSide(direction, door) {
            let templateName = direction.toLowerCase() + (door ? "Door" : "Wall") + "Template";
            let data = { ...this.defaultData, name: door && door.name != "door" ? door.name : " " };
            data.nameReversed = data.name;
            data.closedLeftReversed = data.closedLeft;
            if (door && door.name == "door") {
                data.closedTop = data.closedTop.replace(/./g, " ");
                data.closedBottom = data.closedBottom.replace(/./g, " ");
                data.closedLeft = data.closedLeft.replace(/./g, " ");
                data.closedLeftReversed = data.closedLeft;
            }
            return this.asciiGeneratorService.templateString(this[templateName], data);
        }
        renderCorner(dir1, dir2) {
            let templateName = dir2.toLowerCase() + this.capitalize(dir1.toLowerCase()) + "CornerTemplate";
            let data = this.defaultData;
            return this.asciiGeneratorService.templateString(this[templateName], data);
        }
        capitalize(s) {
            if (typeof s !== 'string')
                return '';
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    }
    AsciiRenderService.ɵfac = function AsciiRenderService_Factory(t) { return new (t || AsciiRenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__["AsciiGeneratorService"])); };
    AsciiRenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AsciiRenderService, factory: AsciiRenderService.ɵfac, providedIn: 'root' });
    return AsciiRenderService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiRenderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__["AsciiGeneratorService"] }]; }, null); })();


/***/ }),

/***/ "cJNv":
/*!**********************************************************************!*\
  !*** ./src/app/labyrinth/service/render/resources/border-compute.ts ***!
  \**********************************************************************/
/*! exports provided: BorderTemplate, asciiStringToGridObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderTemplate", function() { return BorderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asciiStringToGridObject", function() { return asciiStringToGridObject; });
class BorderTemplate {
    constructor() {
        this.topTemplate = "";
        this.bottomTemplate = "";
        this.leftTemplate = "";
        this.rightTemplate = "";
        this.topLeftTemplate = "";
        this.topRightTemplate = "";
        this.bottomLeftTemplate = "";
        this.bottomRightTemplate = "";
        this.leftPartWidth = 1;
        this.topSideWidth = 1;
        this.topPartHeight = 1;
        this.leftSideHeight = 1;
        this.rightPartWidth = 1;
        this.bottomPartHeight = 1;
    }
}
function asciiStringToGridObject(str, leftCornerWidth, topSideWidth, leftCornerHeight, leftSideHeight) {
    try {
        let templates = new BorderTemplate();
        let strR = str.split("\n");
        for (let y = 0; y < leftCornerHeight; y++) {
            for (let x = 0; x < leftCornerWidth; x++) {
                templates.topLeftTemplate += strR[y][x];
            }
            templates.topLeftTemplate += "\n";
            for (let x = leftCornerWidth; x < leftCornerWidth + topSideWidth; x++) {
                templates.topTemplate += strR[y][x];
            }
            templates.topTemplate += "\n";
            for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
                templates.topRightTemplate += strR[y][x];
            }
            templates.topRightTemplate += "\n";
        }
        for (let y = leftCornerHeight; y < leftCornerHeight + leftSideHeight; y++) {
            for (let x = 0; x < leftCornerWidth; x++) {
                templates.leftTemplate += strR[y][x];
            }
            templates.leftTemplate += "\n";
            for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
                templates.rightTemplate += strR[y][x];
            }
            templates.rightTemplate += "\n";
        }
        for (let y = leftCornerHeight + leftSideHeight; y < strR.length; y++) {
            for (let x = 0; x < leftCornerWidth; x++) {
                templates.bottomLeftTemplate += strR[y][x];
            }
            templates.bottomLeftTemplate += "\n";
            for (let x = leftCornerWidth; x < leftCornerWidth + topSideWidth; x++) {
                templates.bottomTemplate += strR[y][x];
            }
            templates.bottomTemplate += "\n";
            for (let x = leftCornerWidth + topSideWidth; x < strR[y].length; x++) {
                templates.bottomRightTemplate += strR[y][x];
            }
            templates.bottomRightTemplate += "\n";
        }
        Object.keys(templates).forEach((k) => {
            if (templates[k].slice) {
                if (templates[k].endsWith("\n"))
                    templates[k] = templates[k].slice(0, -1);
                //add a space at the end so the template with \n have the same length than the other
                if ((k != 'bottomTemplate' && k != 'topTemplate')) {
                    templates[k] += " ";
                }
            }
        });
        let topRightFirstLine = templates.topRightTemplate.split("\n")[0];
        let borderTemplate = {
            ...templates,
            leftPartWidth: leftCornerWidth,
            topSideWidth,
            leftSideHeight,
            rightPartWidth: topRightFirstLine.length + (templates.topRightTemplate.includes('\n') ? 1 : 0),
            topPartHeight: leftCornerHeight,
            bottomPartHeight: templates.bottomLeftTemplate.split("\n").length,
        };
        return borderTemplate;
    }
    catch (e) {
        console.error(e);
    }
}


/***/ }),

/***/ "dxnq":
/*!********************************************************!*\
  !*** ./src/app/utils/ui/atom/sound/sound.component.ts ***!
  \********************************************************/
/*! exports provided: SoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundComponent", function() { return SoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../labyrinth/service/sound/sound.service */ "/SE3");
/* harmony import */ var _ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ascii/component/ascii.component */ "LuAq");






function SoundComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.on);
} }
function SoundComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r1.off);
} }
let SoundComponent = /** @class */ (() => {
    class SoundComponent {
        constructor(soundService) {
            this.soundService = soundService;
            this.on = '' +
                '           __ \n' +
                ' ((\'c\') < d d \n';
            //≮
            this.off = '' +
                '            _ \n' +
                ' ((\'x\') ° (d) \n';
            this.subscription = this.soundService.subscribeSoundOn((data) => {
                this.soundOn = data;
            });
        }
        ngOnInit() {
        }
        ngOnDestroy() {
            this.subscription.unsubscribe();
        }
        toogle() {
            this.soundService.toogleSound();
        }
    }
    SoundComponent.ɵfac = function SoundComponent_Factory(t) { return new (t || SoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"])); };
    SoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SoundComponent, selectors: [["ui-sound"]], decls: 3, vars: 2, consts: [["ascii-border", "", 1, "asciiArt", 3, "click"], ["app-ascii", "", "tooltip", "mute", 3, "content", 4, "ngIf"], ["app-ascii", "", "tooltip", "music", 3, "content", 4, "ngIf"], ["app-ascii", "", "tooltip", "mute", 3, "content"], ["app-ascii", "", "tooltip", "music", 3, "content"]], template: function SoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SoundComponent_Template_div_click_0_listener() { return ctx.toogle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SoundComponent_div_1_Template, 1, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SoundComponent_div_2_Template, 1, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.soundOn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.soundOn);
        } }, directives: [_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_2__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_4__["AsciiComponent"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiJdfQ== */"] });
    return SoundComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-sound',
                templateUrl: './sound.component.html',
                styleUrls: ['./sound.component.css']
            }]
    }], function () { return [{ type: _labyrinth_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_1__["SoundService"] }]; }, null); })();


/***/ }),

/***/ "dyXb":
/*!********************************************************!*\
  !*** ./src/app/labyrinth/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/render/fullsize-ascii-render.service */ "qOzd");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function () { return { name: "exit" }; };
function LoadingComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Find the ladder to the exit to win. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fullViewRenderService.renderObj(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
} }
function LoadingComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can move by : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clicking on the room you want to go");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clicking on the door you want to use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "using directional key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "using the pad at the bottom of the screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " some door are closed and need a key to be open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have a map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The lab didn't really take that much time to generate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The dev just wanted a way to give tips to player.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All labyrinths always have a solution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
let LoadingComponent = /** @class */ (() => {
    class LoadingComponent {
        constructor(fullViewRenderService) {
            this.fullViewRenderService = fullViewRenderService;
            this.currentLoadingMessage = 0;
            this.maxNumberOfMessage = 6;
        }
        ngOnInit() {
        }
        clickDuringLoading() {
            this.currentLoadingMessage = Math.floor(this.maxNumberOfMessage * Math.random());
            console.log(this.currentLoadingMessage);
        }
    }
    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_2__["FullsizeAsciiRenderService"])); };
    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 18, vars: 8, consts: [["ascii-render", "", "borderTemplateName", "loadingBorderGridTemplate", 1, "container", "text", "background-ui"], ["ascii-render", "", 1, "ihm-ui"], ["ascii-border", "", 1, "content", "ihm-ui"], [4, "ngIf"], ["ascii-render", "", 3, "click"], ["app-render", "", 1, "asciiArt"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Labyrinth generating ...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoadingComponent_ng_container_8_Template, 4, 2, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoadingComponent_ng_container_9_Template, 11, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoadingComponent_ng_container_10_Template, 2, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoadingComponent_ng_container_11_Template, 2, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoadingComponent_ng_container_12_Template, 5, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoadingComponent_ng_container_13_Template, 2, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadingComponent_Template_button_click_16_listener() { return ctx.clickDuringLoading(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "next advice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Do you know it ? (", ctx.currentLoadingMessage, "/", ctx.maxNumberOfMessage, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentLoadingMessage === 5);
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_3__["AsciiBorderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n        max-width: 576px;\n        min-width: 360px;\n        min-height: 336px;\n        text-align: center;\n        padding: 14px 9px;\n    }\n\n    .content[_ngcontent-%COMP%] {\n\n    }\n    ul[_ngcontent-%COMP%] {\n        text-align: left;\n    }"] });
    return LoadingComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styles: [`
    .container {
        max-width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 16 * 4}px;
        min-width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 10 * 4}px;
        min-height: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 6 * 4}px;
        text-align: center;
        padding: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"]}px ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"]}px;
    }

    .content {

    }
    ul {
        text-align: left;
    }

  `]
            }]
    }], function () { return [{ type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_2__["FullsizeAsciiRenderService"] }]; }, null); })();


/***/ }),

/***/ "fMyw":
/*!*******************************************!*\
  !*** ./src/app/utils/ascii/AsciiConst.ts ***!
  \*******************************************/
/*! exports provided: CHARACTER_FONT_SIZE, LINE_HEIGHT, CHARACTER_HEIGHT, CHARACTER_SPACING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARACTER_FONT_SIZE", function() { return CHARACTER_FONT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_HEIGHT", function() { return LINE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARACTER_HEIGHT", function() { return CHARACTER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARACTER_SPACING", function() { return CHARACTER_SPACING; });
const CHARACTER_FONT_SIZE = 12;
const LINE_HEIGHT = 14;
const CHARACTER_HEIGHT = 8;
const CHARACTER_SPACING = 9;


/***/ }),

/***/ "hZio":
/*!************************************************************************!*\
  !*** ./src/app/labyrinth/game-view/level-view/level-view.component.ts ***!
  \************************************************************************/
/*! exports provided: LevelViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelViewComponent", function() { return LevelViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/render/resources/border */ "7yLV");
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/gameplay-lab.service */ "ty5H");
/* harmony import */ var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/render/fullsize-ascii-render.service */ "qOzd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone-view/zone-view.component */ "BDe6");
/* harmony import */ var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/ascii/component/ascii.component */ "LuAq");









function LevelViewComponent_div_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-zone-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const levelCaseInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", levelCaseInput_r4);
} }
function LevelViewComponent_div_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const y_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r8.emptyRendered(x_r2, y_r5));
} }
function LevelViewComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelViewComponent_div_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LevelViewComponent_div_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const levelCaseInput_r4 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!levelCaseInput_r4)("ngIfElse", _r7);
} }
function LevelViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelViewComponent_div_1_ng_container_1_Template, 4, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
} }
let LevelViewComponent = /** @class */ (() => {
    class LevelViewComponent {
        constructor(gameplayLabService, renderService) {
            this.gameplayLabService = gameplayLabService;
            this.renderService = renderService;
            this.rangeArroundPlayer = -1;
        }
        ngOnChanges(changes) {
            this.updateFieldOfView();
        }
        ngOnInit() {
            this.updateFieldOfView();
        }
        updateFieldOfView() {
            if (this.rangeArroundPlayer === -1) {
                this.fieldOfView = this.currentParty.level.content;
            }
            else {
                this.fieldOfView = new Array();
                let location = this.currentParty.player.location;
                for (let dy = -this.rangeArroundPlayer; dy <= this.rangeArroundPlayer; dy++) {
                    this.fieldOfView[this.rangeArroundPlayer + dy] = new Array();
                    for (let dx = -this.rangeArroundPlayer; dx <= this.rangeArroundPlayer; dx++) {
                        let x = 0 + location.x + dx;
                        let y = 0 + location.y + dy;
                        let ix = 0 + this.rangeArroundPlayer + dx;
                        let iy = 0 + this.rangeArroundPlayer + dy;
                        if (x >= 0 && y >= 0)
                            if (this.currentParty.level.content[y])
                                this.fieldOfView[iy][ix] = this.currentParty.level.content[y][x];
                    }
                }
            }
        }
        emptyRendered(x, y) {
            let dx = x + this.currentParty.player.location.x;
            let dy = y + this.currentParty.player.location.y;
            let index = (dx + dy) % _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewEmptyZones"].length;
            let borderTemplate = _service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewEmptyZones"][index];
            return borderTemplate;
        }
    }
    LevelViewComponent.ɵfac = function LevelViewComponent_Factory(t) { return new (t || LevelViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__["GameplayLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_4__["FullsizeAsciiRenderService"])); };
    LevelViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LevelViewComponent, selectors: [["level-view"]], inputs: { currentParty: "currentParty", rangeArroundPlayer: "rangeArroundPlayer" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "levelRender"], ["class", "levelRowRender", 4, "ngFor", "ngForOf"], [1, "levelRowRender"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["backgroundZone", ""], [3, "zone"], ["app-ascii", "", 1, "zone", "outside", "background-ui", 3, "content"]], template: function LevelViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelViewComponent_div_1_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fieldOfView);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_6__["ZoneViewComponent"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_7__["AsciiComponent"]], styles: [".levelRowRender[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 270px);\n    grid-template-rows: repeat(auto-fit, 210px);\n  }"] });
    return LevelViewComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'level-view',
                templateUrl: './level-view.component.html',
                styles: [`
    .levelRowRender {
    display: grid;
    grid-template-columns: repeat(auto-fit, ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["CHARACTER_SPACING"] * 30}px);
    grid-template-rows: repeat(auto-fit, ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_2__["LINE_HEIGHT"] * 15}px);
  }
  `]
            }]
    }], function () { return [{ type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_3__["GameplayLabService"] }, { type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_4__["FullsizeAsciiRenderService"] }]; }, { currentParty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rangeArroundPlayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jVA7":
/*!**************************************************************************!*\
  !*** ./src/app/labyrinth/game-view/keypad-form/keypad-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: KeypadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeypadFormComponent", function() { return KeypadFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/gameplay-lab.service */ "ty5H");
/* harmony import */ var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data-storage.service */ "Pmye");
/* harmony import */ var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/ascii/component/ascii.component */ "LuAq");





let KeypadFormComponent = /** @class */ (() => {
    class KeypadFormComponent {
        constructor(gameplayLabService, dataService) {
            this.gameplayLabService = gameplayLabService;
            this.dataService = dataService;
            this.message = "use keyword to move or click on destination, use enter or click to grab object\n";
        }
        ngOnInit() {
            this.subscription = this.dataService.lastMessage$.subscribe((m) => {
                this.message = m;
            });
        }
        ngOnDestroy() {
            this.subscription.unsubscribe();
        }
        move(direction) {
            this.gameplayLabService.move(direction);
        }
        handleKey(event) {
            if (event.key === 'Enter') {
                this.gameplayLabService.takeAll();
            }
            if (event.key === 'ArrowUp') {
                this.gameplayLabService.move('TOP');
            }
            if (event.key === 'ArrowDown') {
                this.gameplayLabService.move('BOTTOM');
            }
            if (event.key === 'ArrowLeft') {
                this.gameplayLabService.move('LEFT');
            }
            if (event.key === 'ArrowRight') {
                this.gameplayLabService.move('RIGHT');
            }
        }
        take() {
            this.gameplayLabService.takeAll();
        }
    }
    KeypadFormComponent.ɵfac = function KeypadFormComponent_Factory(t) { return new (t || KeypadFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_1__["GameplayLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"])); };
    KeypadFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeypadFormComponent, selectors: [["keypad-form"]], hostBindings: function KeypadFormComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function KeypadFormComponent_keydown_HostBindingHandler($event) { return ctx.handleKey($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        } }, decls: 35, vars: 1, consts: [["app-ascii", ""], [1, "key", 3, "click"]], template: function KeypadFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0\u00A0\u00A0+---+ ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0\u00A0\u00A0|");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_6_listener() { return ctx.move("TOP"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "/^\\");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "| ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+---+---+---+-------+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_15_listener() { return ctx.move("LEFT"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "<<-");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "|");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_19_listener() { return ctx.move("BOTTOM"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\\V/");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "|");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_23_listener() { return ctx.move("RIGHT"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "->>");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "|");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeypadFormComponent_Template_span_click_27_listener() { return ctx.take(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Prendre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "|");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+---+---+---+-------+");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "");
        } }, directives: [_utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"]], styles: [".key[_ngcontent-%COMP%]{\n  color: black;\n}\n\n[_nghost-%COMP%] {\n  color: lightgray\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXBhZC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6ImtleXBhZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5e1xuICBjb2xvcjogYmxhY2s7XG59XG5cbjpob3N0IHtcbiAgY29sb3I6IGxpZ2h0Z3JheVxufVxuIl19 */"] });
    return KeypadFormComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeypadFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'keypad-form',
                templateUrl: './keypad-form.component.html',
                styleUrls: ['./keypad-form.component.css']
            }]
    }], function () { return [{ type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_1__["GameplayLabService"] }, { type: _service_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] }]; }, { handleKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "knP+":
/*!******************************************************************************!*\
  !*** ./src/app/utils/ascii/ascii-on-grid-div/ascii-on-grid-div.component.ts ***!
  \******************************************************************************/
/*! exports provided: AsciiOnGridDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiOnGridDivComponent", function() { return AsciiOnGridDivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsciiConst */ "fMyw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["app-ascii-on-grid-div", ""];
const _c1 = function (a0, a1) { return { gridTemplateRows: a0, gridTemplateColumns: a1 }; };
const _c2 = ["*"];
let AsciiOnGridDivComponent = /** @class */ (() => {
    class AsciiOnGridDivComponent {
        constructor() {
            this.width = 'auto-fit';
        }
        ngOnInit() {
            this.gridColumn = 'repeat(' + this.width + ', ' + _AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] + ')';
            if (this.height)
                this.gridRow = 'repeat(' + this.width + ', ' + _AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_HEIGHT"] + ')';
        }
    }
    AsciiOnGridDivComponent.ɵfac = function AsciiOnGridDivComponent_Factory(t) { return new (t || AsciiOnGridDivComponent)(); };
    AsciiOnGridDivComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsciiOnGridDivComponent, selectors: [["", "app-ascii-on-grid-div", ""]], inputs: { width: "width", height: "height" }, attrs: _c0, ngContentSelectors: _c2, decls: 2, vars: 4, consts: [[1, "grid-content", 3, "ngStyle"]], template: function AsciiOnGridDivComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx.gridRow, ctx.gridColumn));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".grid-content[_ngcontent-%COMP%] {\n         display: inline-grid;\n         grid-auto-flow: row dense;\n         grid-template-rows: repeat(auto-fill, 14px);\n         grid-template-columns: repeat(15, 9px);\n    }"] });
    return AsciiOnGridDivComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiOnGridDivComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-ascii-on-grid-div]',
                template: `
    <div class="grid-content"
         [ngStyle]="{gridTemplateRows: gridRow, gridTemplateColumns: gridColumn}">
      <ng-content></ng-content>
    </div>`,
                styles: [
                    ` .grid-content {
         display: inline-grid;
         grid-auto-flow: row dense;
         grid-template-rows: repeat(auto-fill, ${_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"]}px);
         grid-template-columns: repeat(15, ${_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"]}px);
    }`
                ]
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lCfX":
/*!***********************************************************************!*\
  !*** ./src/app/music-view/partition-view/partition-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: PartitionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartitionViewComponent", function() { return PartitionViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! music-generator */ "fIap");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temp-view/temp-view.component */ "0kx2");





function PartitionViewComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no partition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PartitionViewComponent_div_1_ng_container_1_app_temp_view_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-temp-view", 6);
} if (rf & 2) {
    const note_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temp", note_r7)("scale", ctx_r6.scale);
} }
function PartitionViewComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PartitionViewComponent_div_1_ng_container_1_app_temp_view_1_Template, 1, 2, "app-temp-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", form_r2);
} }
function PartitionViewComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-temp-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("temp", form_r2)("scale", ctx_r4.scale);
} }
function PartitionViewComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-partition-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("partitionForms", form_r2)("initscale", ctx_r5.scale);
} }
const _c0 = function (a0) { return { borderColor: a0 }; };
function PartitionViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PartitionViewComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PartitionViewComponent_div_1_ng_container_2_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PartitionViewComponent_div_1_ng_container_3_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const form_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.borderColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isPattern(form_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isNote(form_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isNote(form_r2) && !ctx_r1.isPattern(form_r2));
} }
let PartitionViewComponent = /** @class */ (() => {
    class PartitionViewComponent {
        constructor() {
        }
        ngOnInit() {
            this.borderColor = '#' + Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9);
        }
        ngOnChanges() {
            if (this.initscale)
                this.scale = this.initscale;
            else if (this.partitionForms) {
                let tunes = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(this.partitionForms).map((n) => n.tune);
                this.scale = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getSuroundingTunes(tunes).sort((a, b) => music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getLevel(b) - music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getLevel(a));
            }
        }
        isPattern(form) {
            return Array.isArray(form) && !Array.isArray(form[0]);
        }
        isNote(form) {
            return !Array.isArray(form);
        }
    }
    PartitionViewComponent.ɵfac = function PartitionViewComponent_Factory(t) { return new (t || PartitionViewComponent)(); };
    PartitionViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PartitionViewComponent, selectors: [["app-partition-view"]], inputs: { partitionForms: "partitionForms", initscale: "initscale" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "text", 4, "ngIf"], ["class", "vertical musicForm", 3, "style", 4, "ngFor", "ngForOf"], [1, "text"], [1, "vertical", "musicForm"], [4, "ngIf"], [3, "temp", "scale", 4, "ngFor", "ngForOf"], [3, "temp", "scale"], [3, "partitionForms", "initscale"]], template: function PartitionViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PartitionViewComponent_span_0_Template, 2, 0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PartitionViewComponent_div_1_Template, 4, 7, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.partitionForms);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.partitionForms);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _temp_view_temp_view_component__WEBPACK_IMPORTED_MODULE_3__["TempViewComponent"], PartitionViewComponent], styles: [".vertical[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: auto;\n  height: auto;\n}\n.musicForm[_ngcontent-%COMP%]{\n  border-left: 1px black solid;\n  border-bottom: 1px black solid;\n\n}\n.note[_ngcontent-%COMP%] {\n  display: block;\n}\n.note[_ngcontent-%COMP%]:nth-child(even) {\n  background: aliceblue;\n}\n.temp[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 18px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpdGlvbi12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLDhCQUE4Qjs7QUFFaEM7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCO0FBQ0YiLCJmaWxlIjoicGFydGl0aW9uLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubXVzaWNGb3Jte1xuICBib3JkZXItbGVmdDogMXB4IGJsYWNrIHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XG5cbn1cbi5ub3RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ub3RlOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbn1cblxuLnRlbXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMThweFxufVxuIl19 */"] });
    return PartitionViewComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartitionViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-partition-view',
                template: `<span *ngIf="!partitionForms" class="text">no partition</span>
  <div class="vertical musicForm" *ngFor="let form of partitionForms" [style]="{borderColor:borderColor}">
    <ng-container *ngIf="isPattern(form) ">
      <app-temp-view *ngFor="let note of form" [temp]="note" [scale]="scale"></app-temp-view>
    </ng-container>
    <ng-container *ngIf="isNote(form) ">
      <app-temp-view [temp]="form" [scale]="scale"></app-temp-view>
    </ng-container>
    <ng-container *ngIf="!isNote(form)&&!isPattern(form) ">
      <app-partition-view [partitionForms]="form" [initscale]="scale"></app-partition-view>
    </ng-container>
  </div> `,
                styleUrls: ['./partition-view.component.css']
            }]
    }], function () { return []; }, { partitionForms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initscale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mks4":
/*!**********************************************************************!*\
  !*** ./src/app/labyrinth/service/render/character-render.service.ts ***!
  \**********************************************************************/
/*! exports provided: CharacterRenderData, TemplateAnimation, CharacterRenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterRenderData", function() { return CharacterRenderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateAnimation", function() { return TemplateAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterRenderService", function() { return CharacterRenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/ascii/ascii-generator.service */ "LIiV");



class CharacterRenderData {
    constructor() {
        this.eye = "'";
        this.hair = "(";
        this.torso = "M";
        this.hat = "_--_";
        this.leg = "d";
    }
}
class TemplateAnimation {
}
let CharacterRenderService = /** @class */ (() => {
    class CharacterRenderService {
        constructor(asciiGeneratorService) {
            this.asciiGeneratorService = asciiGeneratorService;
            this.templateLeft = "${hat}\n" +
                "${hair}${eye}${eye} ${hairReversed}${hairReversed}\n" +
                " /${torso} \\ \n" +
                "  ${leg}${leg}  \n";
            this.templateFront = "${hat}\n" +
                "${hair} ${eye}${eye} ${hairReversed}\n" +
                " / ${torso}\\ \n" +
                "  ${leg}${legReversed}  \n";
            this.templateBack = "${hat}\n" +
                "${hair}${hair}${hair}${hairReversed}${hairReversed}${hairReversed}\n" +
                " /  \\ \n" +
                "  ${leg}${legReversed}  \n";
            this.defaultData = Object.assign(new CharacterRenderData(), {
                eye: "'",
                hair: "(",
                torso: "M",
                hat: " _--_ ",
                leg: "d"
            });
            this.bodyPartsKey = Object.keys(this.defaultData);
            this.templateRight = this.asciiGeneratorService.reverseTemplate(this.templateLeft, this.bodyPartsKey);
        }
        render(data, direction = 'LEFT') {
            let template;
            switch (direction) {
                case 'LEFT':
                    template = this.templateLeft;
                    break;
                case 'RIGHT':
                    template = this.templateRight;
                    break;
                case 'TOP':
                    template = this.templateBack;
                    break;
                case 'BOTTOM':
                    template = this.templateFront;
                    break;
                default:
                    template = this.templateLeft;
                    break;
            }
            return this.asciiGeneratorService.templateString(template, { ...data, ...this.asciiGeneratorService.reverseData(data) });
        }
    }
    CharacterRenderService.ɵfac = function CharacterRenderService_Factory(t) { return new (t || CharacterRenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__["AsciiGeneratorService"])); };
    CharacterRenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CharacterRenderService, factory: CharacterRenderService.ɵfac, providedIn: 'root' });
    return CharacterRenderService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterRenderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_1__["AsciiGeneratorService"] }]; }, null); })();


/***/ }),

/***/ "qOzd":
/*!***************************************************************************!*\
  !*** ./src/app/labyrinth/service/render/fullsize-ascii-render.service.ts ***!
  \***************************************************************************/
/*! exports provided: FullsizeAsciiRenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullsizeAsciiRenderService", function() { return FullsizeAsciiRenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ascii_render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascii-render.service */ "ZLBt");
/* harmony import */ var _resources_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/border */ "7yLV");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gameRules */ "B5sm");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/ascii/ascii-generator.service */ "LIiV");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-storage.service */ "Pmye");
/* harmony import */ var _character_render_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-render.service */ "mks4");








let FullsizeAsciiRenderService = /** @class */ (() => {
    class FullsizeAsciiRenderService extends _ascii_render_service__WEBPACK_IMPORTED_MODULE_1__["AsciiRenderService"] {
        constructor(asciiGeneratorService, dataStorageService, characterRenderService) {
            super(asciiGeneratorService);
            this.asciiGeneratorService = asciiGeneratorService;
            this.dataStorageService = dataStorageService;
            this.characterRenderService = characterRenderService;
            this.defaultData = {
                name: "#",
                closedBottom: "-----",
                closedTop: "-----",
                closedLeft: "|"
            };
            this.partsKeys = [];
            this.topDoorTemplate = "-------------------\n" +
                "\n" +
                "    \\¨¨¨¨¨¨¨¨¨/\n" +
                "     \\   ${name}   /\n" +
                "______\\${closedTop}/______";
            this.bottomDoorTemplate = "¨¨¨¨¨¨/${closedBottom}\\¨¨¨¨¨¨\n" +
                "     /   ${name}   \\\n" +
                "    /_________\\\n" +
                "\n" +
                "-------------------";
            this.leftDoorTemplate = " |   |\n" +
                " ||\\ |\n" +
                " || \\|\n" +
                " ||  \\\n" +
                " || ${name}${closedLeft}\n" +
                " ||  ${closedLeft}\n" +
                " |'---\n" +
                " |   |";
            this.leftWallTemplate = " |   |\n" +
                " |   |\n" +
                " |   |\n" +
                " |   |\n" +
                " |   |\n" +
                " |   |\n" +
                " |   |\n" +
                " |   |";
            this.topWallTemplate = "-------------------\n" +
                " \n" +
                " \n" +
                " \n" +
                "___________________";
            this.bottomWallTemplate = "¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n" +
                "\n" +
                "\n" +
                "\n" +
                "-------------------";
            this.leftBottomCornerTemplate = " |   /\n" +
                " |  / \n" +
                " | /  \n" +
                " |/   \n" +
                " '----";
            this.rightBottomCornerTemplate = this.asciiGeneratorService.reverseTemplate(this.leftBottomCornerTemplate, this.partsKeys);
            this.leftTopCornerTemplate = " +----\n" +
                " |\\   \n" +
                " | \\  \n" +
                " |  \\ \n" +
                " |   \\";
            this.rightTopCornerTemplate = this.asciiGeneratorService.reverseTemplate(this.leftTopCornerTemplate, this.partsKeys);
            this.partsKeys = Object.keys(this.defaultData);
            this.rightDoorTemplate = this.asciiGeneratorService.reverseTemplate(this.leftDoorTemplate, this.partsKeys);
            this.rightWallTemplate = this.asciiGeneratorService.reverseTemplate(this.leftWallTemplate, this.partsKeys);
            this.dirSub = this.dataStorageService
                .getPlayerDirection()
                .subscribe((c) => this.playerDirection = c);
            this.playerRenderDataSub = this.dataStorageService
                .getCurrentCharaRenderData()
                .subscribe((c) => this.playerRenderData = c);
        }
        renderPlayer(characterData, direction = undefined) {
            return this.characterRenderService.render(characterData, direction);
        }
        renderCenter(zone, party) {
            return "\n\n" + zone.content.filter(it => it.className !== gameRules__WEBPACK_IMPORTED_MODULE_3__["fr"].perso.labyrinth.freezone.model.DoorObjectZone.name).map((it) => "[" + it.name + "]");
        }
        renderObj(obj) {
            if (obj.name === 'exit')
                return _resources_border__WEBPACK_IMPORTED_MODULE_2__["exitTemplate"];
            if (obj.name === 'start')
                return _resources_border__WEBPACK_IMPORTED_MODULE_2__["startTemplate"];
            if (obj.name === 'player')
                return this.renderPlayer(this.playerRenderData, this.playerDirection);
            if (obj.type === "key")
                return `(${obj.name})--±`;
            if (obj.name === "boussole")
                return `(;)`;
            if (obj.name === "radar")
                return `(®)`;
            if (obj.name === "map")
                return `/#/`;
            if (obj.name === "compas")
                return `%/`;
            return `[${obj.name}]`;
        }
        ngOnDestroy() {
            this.dirSub.unsubscribe();
            this.playerRenderDataSub.unsubscribe();
        }
    }
    FullsizeAsciiRenderService.ɵfac = function FullsizeAsciiRenderService_Factory(t) { return new (t || FullsizeAsciiRenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_4__["AsciiGeneratorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_character_render_service__WEBPACK_IMPORTED_MODULE_6__["CharacterRenderService"])); };
    FullsizeAsciiRenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FullsizeAsciiRenderService, factory: FullsizeAsciiRenderService.ɵfac, providedIn: 'root' });
    return FullsizeAsciiRenderService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullsizeAsciiRenderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _utils_ascii_ascii_generator_service__WEBPACK_IMPORTED_MODULE_4__["AsciiGeneratorService"] }, { type: _data_storage_service__WEBPACK_IMPORTED_MODULE_5__["DataStorageService"] }, { type: _character_render_service__WEBPACK_IMPORTED_MODULE_6__["CharacterRenderService"] }]; }, null); })();


/***/ }),

/***/ "sAm1":
/*!**************************************************************************!*\
  !*** ./src/app/utils/ascii/ascii-character/ascii-character.component.ts ***!
  \**************************************************************************/
/*! exports provided: AsciiCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiCharacterComponent", function() { return AsciiCharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsciiConst */ "fMyw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_ascii_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/ascii.component */ "LuAq");





const _c0 = ["contentDiv"];
const _c1 = function (a0) { return { "column-span": a0 }; };
let AsciiCharacterComponent = /** @class */ (() => {
    class AsciiCharacterComponent {
        constructor(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
            this.xRepeat = 1;
        }
        ngOnInit() {
        }
        ngAfterViewInit() {
            if (this.contentDiv.nativeElement)
                this.xRepeat = Math.ceil(this.contentDiv.nativeElement.getBoundingClientRect().width / _AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"]);
            this._changeDetectorRef.detectChanges();
        }
        ngAfterViewChecked() {
            this.ngAfterViewInit();
        }
    }
    AsciiCharacterComponent.ɵfac = function AsciiCharacterComponent_Factory(t) { return new (t || AsciiCharacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    AsciiCharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsciiCharacterComponent, selectors: [["app-ascii-character"]], viewQuery: function AsciiCharacterComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentDiv = _t.first);
        } }, inputs: { content: "content", tooltip: "tooltip" }, decls: 3, vars: 5, consts: [[3, "ngStyle"], ["app-ascii", "", 1, "content", 3, "tooltip", "content"], ["contentDiv", ""]], template: function AsciiCharacterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.xRepeat));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltip", ctx.tooltip)("content", ctx.content);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _component_ascii_component__WEBPACK_IMPORTED_MODULE_3__["AsciiComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzY2lpLWNoYXJhY3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWCIsImZpbGUiOiJhc2NpaS1jaGFyYWN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4iXX0= */"], changeDetection: 0 });
    return AsciiCharacterComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiCharacterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ascii-character',
                templateUrl: './ascii-character.component.html',
                styleUrls: ['./ascii-character.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentDiv']
        }] }); })();


/***/ }),

/***/ "tdOx":
/*!*****************************************************************!*\
  !*** ./src/app/labyrinth/game-view/labyrinth-game.component.ts ***!
  \*****************************************************************/
/*! exports provided: LabyrinthGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabyrinthGameComponent", function() { return LabyrinthGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ascii/AsciiConst */ "fMyw");
/* harmony import */ var _service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/generate-lab.service */ "9YXO");
/* harmony import */ var _service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data-storage.service */ "Pmye");
/* harmony import */ var _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/gameplay-lab.service */ "ty5H");
/* harmony import */ var _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/render/fullsize-ascii-render.service */ "qOzd");
/* harmony import */ var _service_render_map_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/render/map-ascii-render.service */ "O+Zk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_sound_sound_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/sound/sound.service */ "/SE3");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./level-view/level-view.component */ "hZio");
/* harmony import */ var _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/ui/atom/sliding/sliding.component */ "Bds/");
/* harmony import */ var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map-view/map-view.component */ "UJlK");
/* harmony import */ var _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inventory-view/inventory-view.component */ "JoyB");
/* harmony import */ var _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./keypad-form/keypad-form.component */ "jVA7");
/* harmony import */ var _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/ascii/ascii-modal/ascii-modal.component */ "K43I");
/* harmony import */ var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/ascii/component/ascii.component */ "LuAq");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../loading/loading.component */ "dyXb");




















const _c0 = ["level-view"];
const _c1 = ["winModal"];
const _c2 = ["loadingModal"];
function LabyrinthGameComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "no game loaded for the moment, please wait or create a new game ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "new game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { position: "absolute", transform: "translateX(-50%)", left: "-100%" }; };
const _c4 = function () { return { position: "absolute", transform: "translateX(-81px)", left: "100%" }; };
const _c5 = function () { return { position: "absolute", transform: "translateX(-50%)", left: "50%", bottom: "0" }; };
const _c6 = function () { return { position: "absolute", transform: "translateX(-27px)", left: "-100%", bottom: "0" }; };
const _c7 = function () { return { name: "exit" }; };
function LabyrinthGameComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "level-view", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-sliding", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "map-view", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-sliding", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "inventory-view", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "keypad-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-ascii-modal", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " YOU WIN !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LabyrinthGameComponent_div_11_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.nextLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "next level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-ascii-modal", null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentParty", ctx_r1.currentParty)("rangeArroundPlayer", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("openData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("closeData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4))("slideOnlyOnClick", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentParty", ctx_r1.currentParty)("renderService", ctx_r1.mapRenderService);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("openData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5))("closeData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", ctx_r1.currentParty.player);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.fullViewRenderService.renderObj(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c7)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fullViewRenderService.renderObj(ctx_r1.currentParty.player), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total size:", ctx_r1.score.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total number of room:", ctx_r1.score.numberOfRooms, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("minimum solution:", ctx_r1.score.solutionLength, " m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total number of wrong exit:", ctx_r1.score.numberOfCulDeSac, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total walked distance:", ctx_r1.score.numberOfSteps, " m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total score:", ctx_r1.score.score, "");
} }
let LabyrinthGameComponent = /** @class */ (() => {
    class LabyrinthGameComponent {
        constructor(labService, dataStorageService, gameplayLabService, fullViewRenderService, mapRenderService, router, soundService) {
            this.labService = labService;
            this.dataStorageService = dataStorageService;
            this.gameplayLabService = gameplayLabService;
            this.fullViewRenderService = fullViewRenderService;
            this.mapRenderService = mapRenderService;
            this.router = router;
            this.soundService = soundService;
            this.toClear = [];
        }
        ngOnInit() {
            this.subscribeCurrentParty();
            this.soundService.playGameMusic();
        }
        subscribeCurrentParty() {
            this.subscriptionCurrentParty = this.dataStorageService.getCurrentPartyView()
                .subscribe((nextParty) => {
                this.currentParty = nextParty;
                if (nextParty) {
                    if (this.currentParty.status == "WIN") {
                        this.winModal.show();
                    }
                    this.score = this.gameplayLabService.computePartieScore();
                }
            });
            return this.currentParty;
        }
        move(direction) {
            this.gameplayLabService.move(direction);
        }
        take() {
            this.gameplayLabService.takeAll();
        }
        ngOnDestroy() {
            this.subscriptionCurrentParty.unsubscribe();
            this.toClear.forEach((timer) => clearInterval(timer));
        }
        nextLevel() {
            this.loadingModal.show();
            this.winModal.hide();
            let timer = new Promise((resolve) => {
                // after 1 second signal that the job is finished with an error
                this.toClear.push(setTimeout(() => resolve('done'), 5000));
            });
            let generation = new Promise((resolve) => {
                // not taking our time to do the job
                resolve(this.labService.generate((parseInt(this.score.size) + 1), this.currentParty.player.name)); // immediately give the result: 123
            });
            Promise.all([timer, generation]).then(() => {
                this.loadingModal.hide();
                this.router.navigateByUrl('/game');
            });
        }
    }
    LabyrinthGameComponent.ɵfac = function LabyrinthGameComponent_Factory(t) { return new (t || LabyrinthGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__["GenerateLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__["GameplayLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_5__["FullsizeAsciiRenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_render_map_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__["MapAsciiRenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_sound_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"])); };
    LabyrinthGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabyrinthGameComponent, selectors: [["app-labyrinth-game"]], viewQuery: function LabyrinthGameComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.levelView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.winModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingModal = _t.first);
        } }, decls: 12, vars: 4, consts: [["ascii-border", "", "borderTemplateName", "doubleGridTemplate", 1, "menuBar", "text"], ["ascii-render", "", 1, "ihm-ui"], [1, "interact-ui", "text", 3, "routerLink"], ["class", "noPartyMessage", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "noPartyMessage"], ["ascii-border", "", 1, "text", "interact-ui"], ["ascii-border", "", 1, "ihm-ui"], ["href", "./new", 1, "text", "interact-ui"], [1, "container"], [1, "mainArea"], [3, "currentParty", "rangeArroundPlayer"], [1, "sidebar"], [2, "background-color", "red", "overflow", "hidden", 3, "openData", "closeData", "slideOnlyOnClick"], [3, "currentParty", "renderService"], ["slideOnlyOnClick", "true", 3, "openData", "closeData"], [1, "inventoryArea"], [3, "player"], [1, "toolbar"], [1, "gameplay"], [1, "text"], ["winModal", ""], ["ascii-border", "", 1, "background-ui"], ["ascii-border", "", 1, "text", "important-ui"], ["app-ascii", ""], ["ascii-border", "", "xRepeat", "40"], ["ascii-border", "", 1, "important-ui", 3, "click"], ["loadingModal", ""]], template: function LabyrinthGameComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LAB GENERATOR ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "new Labyrinth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LabyrinthGameComponent_div_10_Template, 6, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LabyrinthGameComponent_div_11_Template, 41, 23, "div", 4);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/new");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentParty);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentParty);
        } }, directives: [_utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_9__["AsciiBorderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _level_view_level_view_component__WEBPACK_IMPORTED_MODULE_11__["LevelViewComponent"], _utils_ui_atom_sliding_sliding_component__WEBPACK_IMPORTED_MODULE_12__["SlidingComponent"], _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_13__["MapViewComponent"], _inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_14__["InventoryViewComponent"], _keypad_form_keypad_form_component__WEBPACK_IMPORTED_MODULE_15__["KeypadFormComponent"], _utils_ascii_ascii_modal_ascii_modal_component__WEBPACK_IMPORTED_MODULE_16__["AsciiModalComponent"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_17__["AsciiComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"]], styles: [".mainArea[_ngcontent-%COMP%] {\n  grid-area: main;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.inventoryArea[_ngcontent-%COMP%]{\n   bottom: 0;\n}\n\n.mapArea[_ngcontent-%COMP%] {\n}\n\n.button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYnlyaW50aC1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtHQUNHLFNBQVM7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJsYWJ5cmludGgtZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbkFyZWEge1xuICBncmlkLWFyZWE6IG1haW47XG59XG5cbi5zaWRlYmFyIHtcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnZlbnRvcnlBcmVhe1xuICAgYm90dG9tOiAwO1xufVxuXG4ubWFwQXJlYSB7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbiJdfQ== */", ".container[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: 900px 36px;\n      grid-template-rows: 630px 112px;\n      grid-template-areas:\n    \"main sidebar\"\n    \"toolbar toolbar\";\n      margin-left: auto;\n      margin-right: auto;\n      width: 990px;\n      overflow-x: hidden;\n    }\n\n    .menuBar[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n    }\n\n    .toolbar[_ngcontent-%COMP%] {\n      z-index: 100;\n      grid-area: toolbar;\n      display: grid;\n      grid-template-columns: 900px 54px 1fr;\n    }\n\n    .noPartyMessage[_ngcontent-%COMP%] {\n      padding: 14px 9px;\n    }"] });
    return LabyrinthGameComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabyrinthGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-labyrinth-game',
                templateUrl: './labyrinth-game.component.html',
                styleUrls: ['./labyrinth-game.component.css'],
                styles: [`
    .container {
      display: grid;
      grid-template-columns: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 100}px ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 4}px;
      grid-template-rows: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 45}px ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 8}px;
      grid-template-areas:
    "main sidebar"
    "toolbar toolbar";
      margin-left: auto;
      margin-right: auto;
      width: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 110}px;
      overflow-x: hidden;
    }

    .menuBar {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    .toolbar {
      z-index: 100;
      grid-area: toolbar;
      display: grid;
      grid-template-columns: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 100}px ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 6}px 1fr;
    }

    .noPartyMessage {
      padding: ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 1}px ${_utils_ascii_AsciiConst__WEBPACK_IMPORTED_MODULE_1__["CHARACTER_SPACING"] * 1}px;
    }

  `]
            }]
    }], function () { return [{ type: _service_generate_lab_service__WEBPACK_IMPORTED_MODULE_2__["GenerateLabService"] }, { type: _service_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"] }, { type: _service_gameplay_lab_service__WEBPACK_IMPORTED_MODULE_4__["GameplayLabService"] }, { type: _service_render_fullsize_ascii_render_service__WEBPACK_IMPORTED_MODULE_5__["FullsizeAsciiRenderService"] }, { type: _service_render_map_ascii_render_service__WEBPACK_IMPORTED_MODULE_6__["MapAsciiRenderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _service_sound_sound_service__WEBPACK_IMPORTED_MODULE_8__["SoundService"] }]; }, { levelView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['level-view']
        }], winModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['winModal']
        }], loadingModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loadingModal']
        }] }); })();


/***/ }),

/***/ "ty5H":
/*!***********************************************************!*\
  !*** ./src/app/labyrinth/service/gameplay-lab.service.ts ***!
  \***********************************************************/
/*! exports provided: GameplayLabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameplayLabService", function() { return GameplayLabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gameRules */ "B5sm");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_findKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/findKey */ "dMi0");
/* harmony import */ var lodash_findKey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_findKey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _generate_lab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-lab.service */ "9YXO");
/* harmony import */ var _data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-storage.service */ "Pmye");
/* harmony import */ var _sound_sound_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound/sound.service */ "/SE3");







// @ts-ignore
let GameplayLabService = /** @class */ (() => {
    class GameplayLabService {
        constructor(serviceLabService, dataStorageService, soundService) {
            this.serviceLabService = serviceLabService;
            this.dataStorageService = dataStorageService;
            this.soundService = soundService;
            this.gameplay = gameRules__WEBPACK_IMPORTED_MODULE_1__["fr"].perso.labyrinth.labeat;
            this.subscriptions = dataStorageService
                .getCurrentParty()
                .subscribe((party) => {
                this.currentParty = party;
                this.currentPartyProxy = JSON.parse(this.gameplay.toJson(party));
            });
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe();
        }
        move(direction) {
            this.dataStorageService.saveCharacterDirection(direction);
            let interactionResult = this.gameplay.playerInteractWithJson(this.currentParty, direction);
            this.dataStorageService.saveParty(this.currentParty);
            this.dataStorageService.saveLastMessages(JSON.parse(this.gameplay.toJsonInteraction(interactionResult)).messages);
            if (interactionResult.result == "Success") {
                this.soundService.playMove();
                return false;
            }
            else {
                this.soundService.playNo();
                return true;
            }
        }
        take(objToTake) {
            this.dataStorageService.saveCharacterDirection('LEFT');
            if (this.play(objToTake).result == "Success") {
                this.soundService.playTake();
            }
        }
        takeAll() {
            this.currentPartyProxy.player.location.content
                .filter(it => it.type != "door")
                .forEach((it) => {
                this.take(it);
            });
        }
        play(obj) {
            let interactionResult = this.gameplay.playerInteractWithJson(this.currentParty, JSON.stringify(obj));
            this.dataStorageService.saveParty(this.currentParty);
            this.dataStorageService.saveLastMessages(JSON.parse(this.gameplay.toJsonInteraction(interactionResult)).messages);
            return interactionResult;
        }
        levelContent(levelCase) {
            return levelCase.content.filter(it => !this.isDoor(it));
        }
        isDoor(it) {
            return it.destination !== undefined;
        }
        doorAt(levelCase, direction) {
            let destination = levelCase.connections[direction];
            if (destination) {
                return levelCase.content
                    .filter(obj => {
                    let doorDestination = obj.destination;
                    return doorDestination && doorDestination.x === destination.x && doorDestination.y === destination.y;
                })[0];
            }
        }
        moveAtCase(levelCase) {
            let connections = this.currentPartyProxy.player.location.connections;
            let direction = lodash_findKey__WEBPACK_IMPORTED_MODULE_2___default()(connections, (it) => {
                return it && it.x === levelCase.x && it.y === levelCase.y;
            });
            if (direction) {
                return this.move(direction);
            }
            return false;
        }
        hasPlayer(levelCase) {
            return levelCase.content
                .find(p => {
                return p.type === "player";
            });
        }
        computePartieScore() {
            return this.gameplay.computePartieScore(this.currentParty);
        }
    }
    GameplayLabService.ɵfac = function GameplayLabService_Factory(t) { return new (t || GameplayLabService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_generate_lab_service__WEBPACK_IMPORTED_MODULE_3__["GenerateLabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sound_sound_service__WEBPACK_IMPORTED_MODULE_5__["SoundService"])); };
    GameplayLabService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameplayLabService, factory: GameplayLabService.ɵfac, providedIn: 'root' });
    return GameplayLabService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameplayLabService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _generate_lab_service__WEBPACK_IMPORTED_MODULE_3__["GenerateLabService"] }, { type: _data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"] }, { type: _sound_sound_service__WEBPACK_IMPORTED_MODULE_5__["SoundService"] }]; }, null); })();


/***/ }),

/***/ "uyBj":
/*!**********************************************************!*\
  !*** ./src/app/ascii-gallery/ascii-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: AsciiGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsciiGalleryComponent", function() { return AsciiGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../labyrinth/service/render/resources/border */ "7yLV");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gameRules */ "B5sm");
/* harmony import */ var gameRules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gameRules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _labyrinth_game_view_level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../labyrinth/game-view/level-view/zone-view/zone-view.component */ "BDe6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _labyrinth_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../labyrinth/loading/loading.component */ "dyXb");
/* harmony import */ var _labyrinth_game_view_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../labyrinth/game-view/inventory-view/inventory-view.component */ "JoyB");
/* harmony import */ var _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ascii/ascii-border/ascii-border.component */ "XxEr");
/* harmony import */ var _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ascii/component/ascii.component */ "LuAq");










const _c0 = function (a0) { return { inventoryArray: a0 }; };
function AsciiGalleryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "inventory-view", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "art");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "spon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "H1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "SPA LABYRINTH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "BTN LABYRINTH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "text div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " another div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " some exemple of text lorelum ipsum blbkuuhiue hfue hfuezhfuhz efuhezfez hfizofhioezhfoz hiehfozehfnhoif zz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " some exemple of text lorelum ipsum blbkuuhiue hfue hfuezhfuhz efuhezfez hfizofhioezhfoz hiehfozehfnhoif zz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("player", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx_r0.defaultZone.content.toArray()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "bigspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx_r0.abc)("name", "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("borderTemplate", ctx_r0.abc)("name", "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "bigspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "bigspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", "BTN \nLABYRINTH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xRepeat", 0)("yRepeat", 0)("borderTemplate", ctx_r0.outsideZone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xRepeat", 0)("yRepeat", 0)("borderTemplate", ctx_r0.outsideZone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv")("borderTemplate", ctx_r0.parchemin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", "div \nmulti\n line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", "div \nmulti\n line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", "div \nmulti\n with content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "bigspan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultValue", "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "diiiiv");
} }
let AsciiGalleryComponent = /** @class */ (() => {
    class AsciiGalleryComponent {
        constructor() {
            this.display = false;
            this.abc = _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["abcGridTemplate"];
            this.outsideZone = _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["viewEmptyZoneGridTemplates"][0];
            this.parchemin = _labyrinth_service_render_resources_border__WEBPACK_IMPORTED_MODULE_1__["paperGridTemplate"];
        }
        ngOnInit() {
            console.log("ngOnInit");
            try {
                let emptyParty = gameRules__WEBPACK_IMPORTED_MODULE_2__["fr"].perso.labyrinth.labeat.generation.initPartieEmpty(3, "empty");
                this.emptyZone = emptyParty.level.content[0][0];
                this.defaultZone = emptyParty.level.content[1][1];
                this.defaultZone = gameRules__WEBPACK_IMPORTED_MODULE_2__["fr"].perso.labyrinth.labeat.generation.initPartieMapLabWithKey(4, "key").level.content.toArray()[0].toArray()[1];
            }
            catch (e) {
                console.log(e);
            }
            console.log(this.emptyZone);
            console.log(this.defaultZone);
        }
        toggle() {
            this.display = !this.display;
        }
    }
    AsciiGalleryComponent.ɵfac = function AsciiGalleryComponent_Factory(t) { return new (t || AsciiGalleryComponent)(); };
    AsciiGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsciiGalleryComponent, selectors: [["app-ascii-gallery"]], decls: 5, vars: 3, consts: [[1, "text", 3, "click"], [3, "zone"], [4, "ngIf"], [3, "player"], ["ascii-border", ""], [1, "text"], [1, "asciiArt"], ["ascii-render", "", 1, "text", 3, "name"], ["ascii-render", "", 3, "borderTemplate", "name"], ["ascii-render", "", "value", "inputAlone"], ["ascii-render", "", 2, "display", "inline-block", 3, "borderTemplate", "name"], ["value", "inputDiv"], ["app-ascii", "", 3, "content"], ["ascii-border", "", 1, "zone", "outside", "background-ui", 3, "xRepeat", "yRepeat", "borderTemplate"], ["ascii-render", "", 1, "asciiArt"], ["ascii-render", "", 1, "text", 3, "name", "borderTemplate"], ["ascii-render", ""], ["ascii-render", "", 3, "defaultValue"], [2, "width", "300px"], ["ascii-render", "", "borderTemplateName", "paper", 1, "asciiArt", 3, "name"]], template: function AsciiGalleryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsciiGalleryComponent_Template_span_click_0_listener() { return ctx.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " toggle galery");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-zone-view", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-zone-view", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AsciiGalleryComponent_div_4_Template, 75, 31, "div", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", ctx.defaultZone);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", ctx.emptyZone);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
        } }, directives: [_labyrinth_game_view_level_view_zone_view_zone_view_component__WEBPACK_IMPORTED_MODULE_3__["ZoneViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _labyrinth_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _labyrinth_game_view_inventory_view_inventory_view_component__WEBPACK_IMPORTED_MODULE_6__["InventoryViewComponent"], _utils_ascii_ascii_border_ascii_border_component__WEBPACK_IMPORTED_MODULE_7__["AsciiBorderComponent"], _utils_ascii_component_ascii_component__WEBPACK_IMPORTED_MODULE_8__["AsciiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2NpaS1nYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */"] });
    return AsciiGalleryComponent;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsciiGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ascii-gallery',
                templateUrl: './ascii-gallery.component.html',
                styleUrls: ['./ascii-gallery.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterEditor/character-form/character-form.component */ "DbXV");
/* harmony import */ var _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labyrinth/new-form/new-labyrinth-form.component */ "SpuM");
/* harmony import */ var _labyrinth_game_view_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labyrinth/game-view/labyrinth-game.component */ "tdOx");
/* harmony import */ var _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labyrinth/menu/menu.component */ "0T/z");
/* harmony import */ var _music_view_music_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-view/music-view.component */ "3tw5");
/* harmony import */ var _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ascii-gallery/ascii-gallery.component */ "uyBj");










const routes = [{ path: 'character', component: _characterEditor_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_2__["CharacterFormComponent"] },
    { path: 'new', component: _labyrinth_new_form_new_labyrinth_form_component__WEBPACK_IMPORTED_MODULE_3__["NewLabyrinthFormComponent"] },
    { path: 'menu', component: _labyrinth_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: 'game', component: _labyrinth_game_view_labyrinth_game_component__WEBPACK_IMPORTED_MODULE_4__["LabyrinthGameComponent"] },
    { path: 'music', component: _music_view_music_view_component__WEBPACK_IMPORTED_MODULE_6__["MusicViewComponent"] },
    { path: 'ascii', component: _ascii_gallery_ascii_gallery_component__WEBPACK_IMPORTED_MODULE_7__["AsciiGalleryComponent"] },
    { path: '**', redirectTo: '/menu' }
];
let AppRoutingModule = /** @class */ (() => {
    class AppRoutingModule {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wRYn":
/*!*****************************************************************!*\
  !*** ./src/app/labyrinth/service/sound/game-musique.service.ts ***!
  \*****************************************************************/
/*! exports provided: GameMusiqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMusiqueService", function() { return GameMusiqueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! music-generator */ "fIap");
/* harmony import */ var music_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(music_generator__WEBPACK_IMPORTED_MODULE_1__);



let GameMusiqueService = /** @class */ (() => {
    class GameMusiqueService {
        constructor() {
        }
        gameDeprimanteMusicRandom() {
            function choseNoteFromRandomNWhoRespect(sizeOfChoice) {
                let chooseNoteWhoRespect = (note, possibilites, filters) => {
                    const values = possibilites.filter((newNote) => {
                        return filters.every((f) => {
                            return f.bind(this)(note, newNote);
                        });
                    });
                    return music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(values.slice(0, sizeOfChoice));
                };
                return chooseNoteWhoRespect;
            }
            let chooseNoteWhoRespect = choseNoteFromRandomNWhoRespect(3);
            return this.generateMusicDeprimante(chooseNoteWhoRespect);
        }
        menuDeprimanteMusicRandom() {
            let chooseNoteWhoRespect = music_generator__WEBPACK_IMPORTED_MODULE_1__["chooseNoteUtils"].getFirstTuneWhoRespect;
            return this.generateMusicDeprimante(chooseNoteWhoRespect);
        }
        gameMusicRandom() {
            let chooseNoteWhoRespect = music_generator__WEBPACK_IMPORTED_MODULE_1__["chooseNoteUtils"].getRandomFromBestsWhoRespect;
            return this.generateMusicAngoissante(chooseNoteWhoRespect);
        }
        menuMusicRandom() {
            let chooseNoteWhoRespect = music_generator__WEBPACK_IMPORTED_MODULE_1__["chooseNoteUtils"].getFirstFromBestsWhoRespect;
            return this.generateMusicAngoissante(chooseNoteWhoRespect);
        }
        generateMusicDeprimante(chooseNoteWhoRespect) {
            let mainNotes = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getNNextDescendante('B4', 24);
            let mainRhytme = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle([["4n", "4n"], ["4n", "4n"], ["4n", "4n."]]);
            mainRhytme[0] = ["4n"].concat(mainRhytme[0]);
            mainRhytme[2] = mainRhytme[2].concat(["4n."]);
            let firstNoteTheme = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(mainNotes.slice(0, 4));
            let mainTheme = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillPatternWithNoteDescendantes(firstNoteTheme, mainRhytme, mainNotes, chooseNoteWhoRespect);
            let firstNoteIntro = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(mainNotes.slice(0, 4).filter(n => firstNoteTheme != n));
            let intro = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillPatternWithNoteDescendantes(firstNoteIntro, mainRhytme, mainNotes, chooseNoteWhoRespect);
            let beforeLastNoteIntro = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(intro).reverse()[1].tune;
            let lastNoteIntro = chooseNoteWhoRespect(firstNoteTheme, mainNotes, [music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isConsonnanteOf, (n, n2) => {
                    return music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isConsonnanteOf(n2, beforeLastNoteIntro);
                }]);
            music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(intro).reverse()[0].tune = lastNoteIntro;
            let variation1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillPatternWithNoteDescendantes(mainTheme[0][0].tune, mainRhytme, mainNotes.filter(n => n != mainTheme[0].tune), chooseNoteWhoRespect);
            let variation2 = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillPatternWithNoteDescendantes(mainTheme[0][0].tune, mainRhytme, mainNotes.filter(n => n != mainTheme[0].tune && n != variation1[0].tune), chooseNoteWhoRespect);
            let conclusion = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithNotesRespecting(mainNotes.filter(n => n != mainTheme.reverse()[0].tune && n != variation1.reverse()[0].tune && n != variation2.reverse()[0].tune), mainRhytme, mainTheme[0][0].tune, chooseNoteWhoRespect);
            let form = [intro, mainTheme, variation1, mainTheme, variation2, mainTheme, conclusion];
            let partition = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(form);
            return partition;
        }
        generateMusicAngoissante(chooseNoteWhoRespect = music_generator__WEBPACK_IMPORTED_MODULE_1__["chooseNoteUtils"].getRandomFromBestsWhoRespect) {
            let mainNotes = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getNNextDescendante('B4', 24);
            let mainRhytmePart1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle([["4n", "4n", "8n", "8n"], ["8n", "8n", "4n", "4n",], ["4n", "4n", "4n"], ["4n", "4n", "4n"]]).slice(0, 2);
            let mainRhytmePart2 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle([["4n", "4n", "8n", "8n"], ["8n", "8n", "4n", "4n",], ["4n", "4n", "4n"], ["8n", "8n", "8n", "8n", "4n",],]).slice(0, 2);
            ;
            //mainRhytmePart1[0] = ["4n"].concat(mainRhytmePart1[0])
            //mainRhytmePart1[2] = mainRhytmePart1[2].concat(["8n", "4n"])
            let mainRhytme = mainRhytmePart1.concat(mainRhytmePart2);
            let firstNoteTheme = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(mainNotes.slice(0, 3));
            let lastNotePreviousPattern = firstNoteTheme;
            let mainThemePart1;
            try {
                let previousPattern = [null, new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"](firstNoteTheme, ""), null];
                mainThemePart1 = mainRhytmePart1.map((pattern, indexP) => {
                    let firstNote = previousPattern.length > 2 ? music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(previousPattern.slice(1, -1)).tune : music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getTunesBeetween(previousPattern[0].tune, previousPattern[1].tune));
                    let maxNoteIndex = Math.round((indexP + pattern.length * 2) * mainNotes.length / (mainRhytmePart1.length + pattern.length * 2));
                    let firstNoteIndex = mainNotes.findIndex((n) => n === firstNote);
                    let currentNotes = mainNotes.slice(firstNoteIndex, maxNoteIndex);
                    let result = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithNotesRespecting2(currentNotes, pattern, lastNotePreviousPattern, [music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isDescendanceOf, music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isDiffOf], chooseNoteWhoRespect);
                    music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].insertResolutionAtEndIfNeed(result, mainNotes, chooseNoteWhoRespect);
                    lastNotePreviousPattern = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getTuneAt(music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getLevel(result[0].tune) - 1);
                    previousPattern = result;
                    return result;
                });
            }
            catch (e) {
                console.error(e);
                console.error("fail create main theme");
            }
            //  let mainThemePart1 = fillWithNotesRespecting(mainNotes, mainRhytmePart1, firstNoteTheme, [isInIntervalConsonnance(-1), isInIntervalDegres(6, 3), isDiffOf], chooseNoteWhoRespect);
            let flatMainThemePart1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(mainThemePart1);
            let noteFromPart1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getSuroundingTunes(flatMainThemePart1.map(n => n.tune));
            let noteForPart2 = noteFromPart1.slice(noteFromPart1.length / 4, -noteFromPart1.length / 4);
            //noteForPart2 = mainNotes.concat(getSuroundingTunes(noteForPart2));
            if (noteForPart2.length < 2) {
                console.error("not enought note");
            }
            let mainThemePart2 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle(mainThemePart1).map((pattern) => {
                let shufflePattern = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle(pattern);
                let rythme = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(shufflePattern).map(n => n.value);
                let newPattern = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithRandomNote([rythme], noteForPart2);
                music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].insertDisconnanceAndResolutionAtEnd(music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(newPattern), noteForPart2, chooseNoteWhoRespect);
                return newPattern;
            });
            let mainTheme = mainThemePart1.concat(mainThemePart2);
            let mainThemeNotes = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(mainTheme).map(n => n.tune);
            let intro = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithNotesRespecting(music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getSuroundingTunes(mainThemePart1[0].map(n => n.tune)), mainRhytmePart2, music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].randomFromArray(mainThemeNotes), [music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isInIntervalDegres(-3, 3)]);
            music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].insertDisconnanceAndResolutionAtEnd(music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(intro), mainNotes, chooseNoteWhoRespect);
            let flatIntro = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(intro);
            let noteForVariation = music_generator__WEBPACK_IMPORTED_MODULE_1__["harmoniqueUtils"].getSuroundingTunes(music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].last(mainThemePart1).map(n => n.tune));
            let variation1 = music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle(mainThemePart2).map(pattern => music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithRandomNote(music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(pattern).map(n => n.value), noteForVariation));
            let variation2 = (music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].shuffle(variation1));
            let conclusion;
            try {
                conclusion = music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].fillWithNotesRespecting(mainThemeNotes, mainRhytmePart2, music_generator__WEBPACK_IMPORTED_MODULE_1__["utils"].last(music_generator__WEBPACK_IMPORTED_MODULE_1__["compositionUtils"].flatPartition(variation2)).tune, [music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isConsonnanteOf, music_generator__WEBPACK_IMPORTED_MODULE_1__["selector"].isDiffOf]);
            }
            catch (e) {
                console.log(e);
            }
            let form = [intro, mainThemePart1, mainThemePart2, mainThemePart1, variation1, mainThemePart1, variation2, mainThemePart1, mainThemePart2, conclusion];
            return form;
        }
        moveMusic() {
            return [new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("D3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("E3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("D3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("E3", "8n")];
        }
        noMusic() {
            return [new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("C3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("B3", "8n")];
        }
        takeMusic() {
            return [new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("C3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("E3", "8n"), new music_generator__WEBPACK_IMPORTED_MODULE_1__["Note"]("G3", "8n")];
            ;
        }
    }
    GameMusiqueService.ɵfac = function GameMusiqueService_Factory(t) { return new (t || GameMusiqueService)(); };
    GameMusiqueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameMusiqueService, factory: GameMusiqueService.ɵfac, providedIn: 'root' });
    return GameMusiqueService;
})();

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameMusiqueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "z4sO":
/*!*****************************************************!*\
  !*** ./src/app/labyrinth/loading/loading.module.ts ***!
  \*****************************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ascii/ascii.module */ "O1Wb");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading/loading.component */ "dyXb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






let LoadingModule = /** @class */ (() => {
    class LoadingModule {
    }
    LoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoadingModule });
    LoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoadingModule_Factory(t) { return new (t || LoadingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_2__["AsciiModule"],
            ]] });
    return LoadingModule;
})();

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingModule, { declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_2__["AsciiModule"]], exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _utils_ascii_ascii_module__WEBPACK_IMPORTED_MODULE_2__["AsciiModule"],
                ],
                exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var kotlin_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kotlin-logging */ "VS8f");
/* harmony import */ var kotlin_logging__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kotlin_logging__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





kotlin_logging__WEBPACK_IMPORTED_MODULE_2__["mu"].KotlinLoggingConfiguration.LOG_LEVEL = kotlin_logging__WEBPACK_IMPORTED_MODULE_2__["mu"].KotlinLoggingLevel.ERROR;
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2020.js.map