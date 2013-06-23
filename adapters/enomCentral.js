exports.adapter = {
    "name": "eNom Central",
    "passwordRegExp": /\w/,
    "update": function(data) {
        casper.start('https://www.enomcentral.com/login.aspx');

        casper.then(function() {
            this.fill('.sFL.sML', {
                'loginid': data.site.login,
                'password': data.oldPassword
            });
        });

        casper.then(function() {
            this.click('.sFL.sML input[type="submit"]');
        });

        casper.then(function() {
            this.open('https://www.enomcentral.com/myaccount/editcontact.aspx');
        });

        casper.then(function() {
            this.fill('form#aspnetForm', {
                'NewPW': data.newPassword,
                'ConfirmNewPW': data.newPassword
            });
        });

        casper.then(function() {
            this.click('input[value="Save Changes"]');
        });
    }
};
