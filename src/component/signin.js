import React from "react";

function SignIn() {
    return (
        <div>
            <form>
                <label for="username">Username: </label><br />
                <input type="text" id="username" name="username" /><br />
                <label for="password">Password: </label><br />
                <input type="text" id="password" name="password" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SignIn;