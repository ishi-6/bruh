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

        // crystalButton
        const crystalButton = this.add.rectangle(919, 649, 80, 80);
        crystalButton.isFilled = true;

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
        const keypad = this.add.image(838, 443, "mansionAttic", "keypad");
        keypad.setOrigin(0.5, 0.4);

        // cageFront
        const cageFront = this.add.image(927, 189, "mansionAttic", "cageFront");

        // chair
        const chair = this.add.image(1003, 604, "mansionAttic", "chair");

        // chairOneLeg
        const chairOneLeg = this.add.image(843, 629, "mansionAttic", "chairOneLeg");

        // hallway
        const hallway = this.add.image(388, 657, "mansionAttic", "hallway");

        // briefcase
        const briefcase = this.add.image(958, 455, "mansionAttic", "briefcase");

        // railingHorizontal
        this.add.image(1412, 474, "mansionAttic", "railingHorizontal");

        // organ
        this.add.image(1430, 450, "mansionAttic", "organ");

        // vanity
        this.add.image(247, 540, "mansionAttic", "vanity");

        // railingVertical
        this.add.image(1278, 536, "mansionAttic", "railingVertical");

        // books
        const books = this.add.image(1349, 646, "mansionAttic", "books");

        // wheeledStool
        const wheeledStool = this.add.image(509, 431, "mansionAttic", "wheeledStool");

        // telescope
        const telescope = this.add.image(662, 177, "mansionAttic", "telescope");

        // railingHorizontal1
        const railingHorizontal1 = this.add.image(408, 475, "mansionAttic", "railingHorizontal1");

        // radio
        const radio = this.add.image(282, 491, "mansionAttic", "radio");

        // railingVertical1
        const railingVertical1 = this.add.image(549, 538, "mansionAttic", "railingVertical1");

        // table
        const table = this.add.image(919, 704, "mansionAttic", "table");

        // cushion
        const cushion = this.add.image(1035, 820, "mansionAttic", "cushion");

        // stool
        const stool = this.add.image(848, 808, "mansionAttic", "stool");

        // ladder
        this.add.image(163, 563, "mansionAttic", "ladder");

        // rockingChair
        this.add.image(130, 647, "mansionAttic", "rockingChair");

        // rockingChairArm
        const rockingChairArm = this.add.image(130, 663, "mansionAttic", "rockingChairArm");

        // railingPillar1
        this.add.image(237, 672, "mansionAttic", "railingPillar1");

        // ballroom
        const ballroom = this.add.image(1423, 851, "mansionAttic", "ballroom");

        // foreground
        const foreground = this.add.image(0, 0, "mansionAttic", "foreground");
        foreground.setOrigin(0, 0);

        // wardrobeClosed
        const wardrobeClosed = this.add.image(1207, 319, "mansionAttic", "wardrobeClosed");

        // paintingClosed
        const paintingClosed = this.add.image(303, 269, "mansionAttic", "paintingClosed");

        // eyes0001
        const eyes0001 = this.add.sprite(1595, 837, "mansionAttic", "eyes0001");

        // eyes
        const eyes = this.add.sprite(1645, 926, "mansionAttic", "eyes0001");
        eyes.flipX = true;

        // lists
        const sort = [cushion, wheeledStool, stool, chairOneLeg, chair, armchairArm2, armchairArm, armchair2, armchair, table, foreground, briefcase, telescope, radio, rockingChairArm, railingVertical1, cageFront, books, keypad, railingHorizontal1];

        // crystalButton (components)
        new SimpleButton(crystalButton);
        const crystalButtonMoveTo = new MoveTo(crystalButton);
        crystalButtonMoveTo.x = 930;
        crystalButtonMoveTo.y = 694;

        // lightning (components)
        const lightningAnimation = new Animation(lightning);
        lightningAnimation.key = "lightning";
        lightningAnimation.end = 15;
        lightningAnimation.repeatDelay = 2400;

        // cageFront (components)
        const cageFrontMoveTo = new MoveTo(cageFront);
        cageFrontMoveTo.x = 930;
        cageFrontMoveTo.y = 226;
        new SimpleButton(cageFront);

        // hallway (components)
        const hallwayMoveTo = new MoveTo(hallway);
        hallwayMoveTo.x = 426;
        hallwayMoveTo.y = 680;
        const hallwayButton = new Button(hallway);
        hallwayButton.spriteName = "hallway";
        hallwayButton.activeFrame = false;

        // telescope (components)
        const telescopeButton = new Button(telescope);
        telescopeButton.spriteName = "telescope";
        telescopeButton.activeFrame = false;
        const telescopeMoveTo = new MoveTo(telescope);
        telescopeMoveTo.x = 509;
        telescopeMoveTo.y = 435;

        // table (components)
        const tableMoveTo = new MoveTo(table);
        tableMoveTo.x = 930;
        tableMoveTo.y = 694;

        // ballroom (components)
        const ballroomMoveTo = new MoveTo(ballroom);
        ballroomMoveTo.x = 1296;
        ballroomMoveTo.y = 800;
        const ballroomButton = new Button(ballroom);
        ballroomButton.spriteName = "ballroom";
        ballroomButton.activeFrame = false;

        // wardrobeClosed (components)
        const wardrobeClosedButton = new Button(wardrobeClosed);
        wardrobeClosedButton.spriteName = "wardrobeClosed";
        wardrobeClosedButton.activeFrame = false;
        const wardrobeClosedMoveTo = new MoveTo(wardrobeClosed);
        wardrobeClosedMoveTo.x = 1200;
        wardrobeClosedMoveTo.y = 390;

        // paintingClosed (components)
        const paintingClosedButton = new Button(paintingClosed);
        paintingClosedButton.spriteName = "paintingClosed";
        paintingClosedButton.activeFrame = false;
        const paintingClosedMoveTo = new MoveTo(paintingClosed);
        paintingClosedMoveTo.x = 433;
        paintingClosedMoveTo.y = 460;

        // eyes0001 (components)
        const eyes0001Animation = new Animation(eyes0001);
        eyes0001Animation.key = "eyes";
        eyes0001Animation.end = 398;

        // eyes (components)
        const eyesAnimation = new Animation(eyes);
        eyesAnimation.key = "eyes";
        eyesAnimation.start = 100;
        eyesAnimation.end = 398;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
