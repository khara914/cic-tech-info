var dynamodb = new AWS.DynamoDB();
dynamodb.scan({TableName: "cic-tech-info",
    Select:"ALL_ATTRIBUTES",
    ScanFilter:{
        "thumbnail_url":{"AttributeValueList":[{S:"none"}],"ComparisonOperator":"NE"}
    }
}, function (err, data) {
    if (err) console.log(err);
    else {
        for(var i=0; i<9; i++){
            var list = data.Items[i];
            var tmp = "tmp"+i;
            var img = document.getElementById(tmp);
            img.src = list.thumbnail_url.S;
            img.border = 1;
            img.width = 240;
            img.height = 240;
            img.hspace = 10;
            img.vspace = 10;
        }
        for(var j=0; j<9; j++){
            var list = data.Items[j];
            var temp = "temp"+j;
            var img = document.getElementById(temp);
            img.src = list.thumbnail_url.S;
            img.border = 1;
            img.width = 240;
            img.height = 240;
            img.hspace = 10;
            img.vspace = 10;
        }
        for(var k=0; k<40; k++) {
            var list = data.Items[k];
            var title = "title" + k;
            var media = "media" + k;
            var link = "link" + k;
            var time = "time" + k;
            var summary = "summary" + k;
            var pagetitle = "pagetitle" + k;
            document.getElementById(title).textContent = list.title.S;
            document.getElementById(media).textContent = list.media.S;
            document.getElementById(link).textContent = list.url.S;
            document.getElementById(time).textContent = list.UpdateTime.S;
            document.getElementById(summary).textContent = list.summary.S;
            document.getElementById(pagetitle).textContent = list.title.S;
        }

    }
});