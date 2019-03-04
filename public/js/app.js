const kudoList = function() {

    $.get("/api/kudos").then(function(kudos){
        kudos.forEach(function(kudo){
            const templateRow = $("<div>");
            templateRow.addClass("row");
            const template = $("<div>");
            template.addClass("eachKudo col");
            const kudoTitle = $("<h1>");
            kudoTitle.addClass("kudoTitle");
            const sender = $("<h2>");
            sender.addClass("sender");
            const receiver = $("<h3>");
            receiver.addClass("receiver");
            const kudoBody = $("<p>");
            kudoBody.addClass("kudoBody");
            kudoTitle.text(kudo.title);
            kudoBody.text(kudo.body);
            sender.text(`From: ${kudo.sender[0].Name}`);
            receiver.text(`To: ${kudo.receiver[0].Name}`);
            template.append(kudoTitle);
            template.append(sender);
            template.append(kudoBody);
            template.append(receiver);
            templateRow.append(template);
            $(".kudos").append(templateRow);
        });
    });
}

const render = function() {
    $(".kudos").empty();
    kudoList();
}

const updateUserList = function() {
    $.get("/api/users").then(function(userList){
        userList.forEach(function(user){
            const template = $("<option>");
            template.val(user._id);
            template.text(user.Name);
            $(".userList").append(template);
        });
    });
}


const postKudo = function() {
    const data = {
        title : $("#sendTitle").val(),
        body: $("#sendBody").val(),
        sender: $("#sendSender").val(),
        receiver: $("#sendReceiver").val()
    }
    $.post("/api/kudo", data).then(function(response){
        render();
    }).catch(function(err){
        console.log({err:err});
    });
};

updateUserList();
render();

$("#sendKudo").click(postKudo);



