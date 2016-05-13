// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('tS-pC5eptBHpaOe4km8Q6Q');
// original API= _3MkJx3JpPiqqUb9H4Rmqg

function sendTheMail(email, name, phone, referral, appointment, comments) {
// Send the email!
	var receivingEmail = "dpicar@jobtrainworks.org";
	
	// create a variable for the API call parameters
	var params = {
    "message": {
        "from_email":"dpicar@jobtrainworks.org",
        "to":[{"email":receivingEmail}],
        "subject": "Coding Bootcamp Registration Information",
        "html": "<h3>New Student Registration</h3>\
		<p>\
		Student name: *|STUDENTNAME|* <br>\
		Phone number: *|PHONENUMBER|* <br>\
		Email: *|EMAIL|* <br>\
		<br>\
		Orientation date: *|DATE|* <br>\
		Referral: *|REFERRAL|*  <br>\
		Comments: *|COMMENTS|* \
		</p>",
		"autotext": true,
		"track_open": true,
		"track_clicks": true, 
		"merge_vars": [
		{
		    "rcpt": receivingEmail,
		    "vars": [
                    {
                        "name": "STUDENTNAME",
                        "content": name
                    },
                    {
                        "name": "PHONENUMBER",
                        "content": phone
                    },
					{
						"name": "EMAIL",
						"content": email
					},
					{
						"name": "REFERRAL",
						"content": referral
					},
					{
						"name": "DATE",
						"content": appointment
					},
					{
						"name": "COMMENTS",
						"content": comments
					}
                ]
         }]
    }
	};

    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}

function sendConfirmationMail(email) {
// Send the email!

	// create a variable for the API call parameters
	var params = {
    "message": {
        "from_email":"dpicar@jobtrainworks.org",
        "to":[{"email":email}],
        "subject": "Coding Bootcamp Registration Confirmation Email",
        "html": "\
		<p>\
<p>Thank you for your interest in our Web Developer Coding Bootcamp! \
<br>\
<br>\
<br>\
This email is confirming our receipt of your registration for orientation.\
<br>\
<br>\
<br>\
Please come on time for your orientation date and be prepared to take a small basic skills assessment test for the second part of orientation.\
<br>\
<br>\
<br>\
If you have any questions, please contact me by email or by phone.\
<br>\
<br>\
<br>\
Code on!\
<br>\
<br>\
<br>\
\
<br>\
<br>\
<br>\
<br>\
<br>\
\
<br>\
Career Development Specialist at JobTrain, Inc.\
<br>\
Direct Line 650-330-6418 I Fax 650-330-6403\
<br>\
JobTrain, 1200 O’Brien Drive, Menlo Park, CA 94025\
		\
		</p>",
		"autotext": true,
		"track_open": true,
		"track_clicks": true, 
		"merge_vars": [
		{
		    "rcpt": email,
		    "vars": [
                ]
         }]
    }
	};

    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}


function register_act() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phoneNumber").value;
    var appointment="<br>";
	function getLabel(id){
   		appointment += $("#"+id).next("label").html();
   		appointment += "<br>";
   }
   for (var i = 1; i < 2; i ++) {
   if (document.getElementById("w" + i).checked) {
   var label=getLabel("w" + i); }
   }
	
	var referral = document.getElementById("referral").value;
	var comments = document.getElementById("comments/questions").value;

	sendTheMail(email, name, phone, referral, appointment, comments);
	sendConfirmationMail(email);
}
