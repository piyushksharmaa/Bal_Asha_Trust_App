import React from 'react';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginBox: false
        };
    }

    handleLoginButtonClick = () => {
        this.setState({ showLoginBox: true });
    };

    render() {
        const { showLoginBox } = this.state;

        return (
            <div>
                <button onClick={this.handleLoginButtonClick}>Login</button>
                {/* Other content */}
                {showLoginBox && <LoginBox />}
            </div>
        );
    }
}

class LoginBox extends React.Component {
    render() {
        return (
            <div className="login-box">
                <h2>Login or Sign Up</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <button type="submit">Login</button>
                </form>

                <div className="divider">or</div>

                <form>
                    <label htmlFor="signup-email">Email:</label>
                    <input type="email" id="signup-email" name="signup-email" />

                    <label htmlFor="signup-password">Password:</label>
                    <input type="password" id="signup-password" name="signup-password" />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default ParentComponent;



