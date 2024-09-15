import { k } from "./KaboomCTX";
import sprite from "../public/spritesheet.png";


k.loadSprite("spritesheet", "sprite", {
    sliceX: 39, //  width of each sprite
    sliceY: 31, //  height of each sprite
    anims: {
        "idle-down": 936, // this is made by tile, find it here: https://mapeditor.org

    }

}) 