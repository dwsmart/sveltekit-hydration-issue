export async function get() {
   
    const data = `<div id="lipsum">
    <p>
    “While the whale is floating at the stern of the ship, they cut off his
    head, and tow it with a boat as near the shore as it will come; but it
    will be aground in twelve or thirteen feet water.” —<i>Thomas Edge’s
    Ten Voyages to Spitzbergen, in Purchas</i>.
  </p>
  <p>
        “In their way they saw many whales sporting in the ocean, and in
        wantonness fuzzing up the water through their pipes and vents, which
        nature has placed on their shoulders.” —<i>Sir T. Herbert’s Voyages
        into Asia and Africa. Harris Coll</i>.
      </p>
      <p>
        “Here they saw such huge troops of whales, that they were forced to
        proceed with a great deal of caution for fear they should run their ship
        upon them.” —<i>Schouten’s Sixth Circumnavigation</i>.
      </p></div>`;


    if (data) {
        return {
            headers: {
                "X-Robots-Tag": "noindex"
            },
            body: {
                data
            }
        };
    }
}