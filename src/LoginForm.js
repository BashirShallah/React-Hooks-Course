import React, {useState, useEffect} from 'react';

export class LoginFormC extends React.Component {

    state={
        email: '',
        passsword: ''
    };

    componentDidMount(){
        console.log('class Component did mount');
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.email !== this.state.email){
            console.log('class Component: email did update');
        }

        if(prevState.passsword !== this.state.passsword){
            console.log('class Component: passsword did update');
        }
            
        console.log('class Component did update');
    }

    componentWillUnmount(){
        console.log('class Component will unmount');
    }

    hanldeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    hanldePassword = (e) => {
        this.setState({
            passsword: e.target.value
        });
    };

    render(){
        return <div>
            <h2>Class Example</h2>
            <input value={this.state.email} onChange={this.hanldeEmail} placeholder='email' />

            <input value={this.state.password} onChange={this.hanldePassword} placeholder='password' />
        </div>        
    }
}

export function LoginFormF(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // on mount
    useEffect(() => {
        console.log('function Component did mount');

        return () => {
            console.log('function Component will unmount');
        };
    }, []);

    // did update
    useEffect(() => {
        if(email === '')
            return;

        console.log('function Component did update');
    });

    // on changing the email
    useEffect(() => {
        if(email === '')
            return;

        console.log('function Component: email did update');
    }, [email]);

    // on changing the password
    useEffect(() => {
        if(password === '')
            return;

        console.log('function Component: password did update');
    }, [password]);

    function hanldeEmail(e){
        setEmail(e.target.value);
    };

    function hanldePassword(e){
        setPassword(e.target.value);
    };

    return <div>
        <h2>Function Example</h2>

        <input value={email} onChange={hanldeEmail} placeholder='email' />

        <input value={password} onChange={hanldePassword} placeholder='password' />
    </div>
}
