var svetophor = prompt("Enter the colour (red/ green/ yellow).");
switch (svetophor) {
    case ("red"):
        console.log("Stop");
        break;
    case ("green"):
        console.log("Go");
        break;
    case ("yellow"):
        console.log("Wait");
        break;
    default:
        console.log("Wrong colour.");
}