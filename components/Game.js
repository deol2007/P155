AFRAME.registerComponent("game-play", {
    schema: { type: "string", default: "#coin1" },
    update: function () {
        this.isCollided(this.data.elementId)
    },
    isCollided:
        function (passedElement) {
            const element = document.querySelector(passedElement);
            element.addEventListener("collide", (e) => {
                if (passedElement.includes("#coin")) {
                    console.log(passedElement + " collision");
                } else if (passedElement.includes("#hurdle")) {
                    console.log("turtle collision");
                }
            });
        },
});