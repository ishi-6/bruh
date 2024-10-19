import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class MansionAttic extends RoomScene {

    constructor() {
        super("mansionAttic");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            // 'hallway': null,
            // 'ballroom': null,
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mansionAttic-pack", "assets/media/rooms/mansionAttic/mansionAttic-pack.json");
    }

    /** @returns {void} */
    _create() {

        // clouds
        this.add.image(805, 40, "mansionAttic", "clouds");

        // lightning
        const lightning = this.add.sprite(311, 104, "mansionAttic", "lightning0002");

        // background
        const background = this.add.image(0, 0, "mansionAttic", "background");
        background.setOrigin(0, 0);

        // armchair
        const armchair = this.add.image(1110, 668, "mansionAttic", "armchair");

        // armchair2
        const armchair2 = this.add.image(734, 700, "mansionAttic", "armchair2");

        // armchairArm
        const armchairArm = this.add.image(1115, 700, "mansionAttic", "armchairArm");

        // armchairArm2
        const armchairArm2 = this.add.image(731, 726, "mansionAttic", "armchairArm2");

        // bottles
        this.add.image(1082, 390, "mansionAttic", "bottles");

        // keypad
        this.add.image(838, 457, "mansionAttic", "keypad");

        // cageFront
        this.add.image(927, 189, "mansionAttic", "cageFront");

        // chair
        const chair = this.add.image(1003, 604, "mansionAttic", "chair");

        // chairOneLeg
        const chairOneLeg = this.add.image(843, 629, "mansionAttic", "chairOneLeg");

        // hallway
        const hallway = this.add.image(388, 657, "mansionAttic", "hallway");

        // briefcase
        const briefcase = this.add.image(960, 448, "mansionAttic", "briefcase");

        // railingHorizontal
        this.add.image(1412, 474, "mansionAttic", "railingHorizontal");

        // organ
        this.add.image(1430, 450, "mansionAttic", "organ");

        // vanity
        this.add.image(247, 540, "mansionAttic", "vanity");

        // railingVertical
        this.add.image(1278, 536, "mansionAttic", "railingVertical");

        // books
        this.add.image(1368, 642, "mansionAttic", "books");

        // wheeledStool
        const wheeledStool = this.add.image(516, 424, "mansionAttic", "wheeledStool");

        // telescope
        const telescope = this.add.image(662, 177, "mansionAttic", "telescope");

        // railingHorizontal1
        this.add.image(408, 475, "mansionAttic", "railingHorizontal1");

        // radio
        this.add.image(282, 491, "mansionAttic", "radio");

        // railingVertical1
        this.add.image(549, 538, "mansionAttic", "railingVertical1");

        // painting0001
        this.add.image(393, 18, "mansionAttic", "painting0001");

        // table
        const table = this.add.image(919, 704, "mansionAttic", "table");

        // cushion
        const cushion = this.add.image(1035, 820, "mansionAttic", "cushion");

        // stool
        const stool = this.add.image(838, 829, "mansionAttic", "stool");

        // ladder
        this.add.image(163, 563, "mansionAttic", "ladder");

        // rockingChair
        const rockingChair = this.add.image(130, 647, "mansionAttic", "rockingChair");

        // rockingChairArm
        this.add.image(130, 663, "mansionAttic", "rockingChairArm");

        // railingPillar1
        this.add.image(237, 672, "mansionAttic", "railingPillar1");

        // ballroom
        this.add.image(1423, 851, "mansionAttic", "ballroom");

        // foreground
        const foreground = this.add.image(0, 0, "mansionAttic", "foreground");
        foreground.setOrigin(0, 0);

        // wardrobe0001
        this.add.image(1203, 17, "mansionAttic", "wardrobe0001");

        // lists
        const sort = [cushion, wheeledStool, stool, chairOneLeg, chair, armchairArm2, armchairArm, armchair2, armchair, table, foreground, rockingChair, briefcase, telescope];

        // lightning (components)
        const lightningAnimation = new Animation(lightning);
        lightningAnimation.key = "lightning";
        lightningAnimation.end = 15;
        lightningAnimation.repeatDelay = 2400;

        // hallway (components)
        const hallwayMoveTo = new MoveTo(hallway);
        hallwayMoveTo.x = 388;
        hallwayMoveTo.y = 700;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
