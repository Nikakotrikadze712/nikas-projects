let command = prompt("შეიყვანე ბრძანება: start, pause, resume, exit")

switch(command) {
    case "start":
        console.log("თამაში დაიწყო")
        break
    case "pause":
        console.log("თამაში შეჩერებულია")
        break
    case "resume":
        console.log("თამაში განახლდა")
        break
    case "exit":
        console.log("თამაში დასრულდა")
        break
    default:
        console.log("უცნობი ბრძანება")
}